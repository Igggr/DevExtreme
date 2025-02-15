import { getWidth, getOuterWidth, getHeight } from '../../core/utils/size';
import $ from '../../core/renderer';
import { isMaterial, waitWebFont } from '../themes';
import { noop } from '../../core/utils/common';
import { isPlainObject, isDefined } from '../../core/utils/type';
import registerComponent from '../../core/component_registrator';
import { inArray } from '../../core/utils/array';
import { extend } from '../../core/utils/extend';
import { each } from '../../core/utils/iterator';
import { getBoundingRect } from '../../core/utils/position';
import AsyncCollectionWidget from '../collection/ui.collection_widget.async';
import Promise from '../../core/polyfills/promise';
import { BindableTemplate } from '../../core/templates/bindable_template';
import errors from '../../core/errors';
import fx from '../../animation/fx';

import { TOOLBAR_CLASS } from './constants';

const TOOLBAR_BEFORE_CLASS = 'dx-toolbar-before';
const TOOLBAR_CENTER_CLASS = 'dx-toolbar-center';
const TOOLBAR_AFTER_CLASS = 'dx-toolbar-after';
const TOOLBAR_MINI_CLASS = 'dx-toolbar-mini';
const TOOLBAR_ITEM_CLASS = 'dx-toolbar-item';
const TOOLBAR_LABEL_CLASS = 'dx-toolbar-label';
const TOOLBAR_BUTTON_CLASS = 'dx-toolbar-button';
const TOOLBAR_ITEMS_CONTAINER_CLASS = 'dx-toolbar-items-container';
const TOOLBAR_GROUP_CLASS = 'dx-toolbar-group';
const TOOLBAR_COMPACT_CLASS = 'dx-toolbar-compact';
const TOOLBAR_LABEL_SELECTOR = '.' + TOOLBAR_LABEL_CLASS;
const TOOLBAR_MULTILINE_CLASS = 'dx-toolbar-multiline';
const TEXT_BUTTON_MODE = 'text';

const DEFAULT_BUTTON_TYPE = 'default';
const DEFAULT_DROPDOWNBUTTON_STYLING_MODE = 'contained';

const TOOLBAR_ITEM_DATA_KEY = 'dxToolbarItemDataKey';

const ToolbarBase = AsyncCollectionWidget.inherit({
    compactMode: false,

    ctor: function(element, options) {
        this._userOptions = options || {};

        this.callBase(element, options);

        if('height' in this._userOptions) {
            errors.log('W0001', this.NAME, 'height', '20.1', 'Functionality associated with this option is not intended for the Toolbar widget.');
        }
    },

    _getSynchronizableOptionsForCreateComponent: function() {
        return this.callBase().filter(item => item !== 'disabled');
    },

    _initTemplates: function() {
        this.callBase();
        const template = new BindableTemplate(function($container, data, rawModel) {
            if(isPlainObject(data)) {
                if(data.text) {
                    $container.text(data.text).wrapInner('<div>');
                }

                if(data.html) {
                    $container.html(data.html);
                }

                if(data.widget === 'dxDropDownButton') {
                    data.options = data.options || {};

                    if(!isDefined(data.options.stylingMode)) {
                        data.options.stylingMode = this.option('useFlatButtons') ? TEXT_BUTTON_MODE : DEFAULT_DROPDOWNBUTTON_STYLING_MODE;
                    }
                }

                if(data.widget === 'dxButton') {
                    if(this.option('useFlatButtons')) {
                        data.options = data.options || {};
                        data.options.stylingMode = data.options.stylingMode || TEXT_BUTTON_MODE;
                    }

                    if(this.option('useDefaultButtons')) {
                        data.options = data.options || {};
                        data.options.type = data.options.type || DEFAULT_BUTTON_TYPE;
                    }
                }
            } else {
                $container.text(String(data));
            }

            this._getTemplate('dx-polymorph-widget').render({
                container: $container,
                model: rawModel,
                parent: this
            });
        }.bind(this), ['text', 'html', 'widget', 'options'], this.option('integrationOptions.watchMethod'));

        this._templateManager.addDefaultTemplates({
            item: template,
            menuItem: template,
        });
    },

    _getDefaultOptions: function() {
        return extend(this.callBase(), {
            renderAs: 'topToolbar',

            grouped: false,

            useFlatButtons: false,
            useDefaultButtons: false,
            multiline: false
        });
    },

    _defaultOptionsRules: function() {
        return this.callBase().concat([
            {
                device: function() {
                    return isMaterial();
                },
                options: {
                    useFlatButtons: true
                }
            }
        ]);
    },

    _itemContainer: function() {
        return this._$toolbarItemsContainer.find([
            '.' + TOOLBAR_BEFORE_CLASS,
            '.' + TOOLBAR_CENTER_CLASS,
            '.' + TOOLBAR_AFTER_CLASS
        ].join(','));
    },

    _itemClass: function() {
        return TOOLBAR_ITEM_CLASS;
    },

    _itemDataKey: function() {
        return TOOLBAR_ITEM_DATA_KEY;
    },

    _buttonClass: function() {
        return TOOLBAR_BUTTON_CLASS;
    },

    _dimensionChanged: function() {
        this._arrangeItems();
        this._applyCompactMode();
    },

    _initMarkup: function() {
        this._renderToolbar();
        this._renderSections();

        this.callBase();

        this.setAria('role', 'toolbar');
    },

    _waitParentAnimationFinished: function() {
        const $element = this.$element();
        const timeout = 15;
        return new Promise(resolve => {
            const check = () => {
                let readyToResolve = true;
                $element.parents().each((_, parent) => {
                    if(fx.isAnimating($(parent))) {
                        readyToResolve = false;
                        return false;
                    }
                });
                if(readyToResolve) {
                    resolve();
                }
                return readyToResolve;
            };
            const runCheck = () => {
                clearTimeout(this._waitParentAnimationTimeout);
                this._waitParentAnimationTimeout = setTimeout(() => check() || runCheck(), timeout);
            };
            runCheck();
        });
    },

    _render: function() {
        this.callBase();
        this._renderItemsAsync();

        if(isMaterial()) {
            Promise.all([
                this._waitParentAnimationFinished(),
                this._checkWebFontForLabelsLoaded()
            ]).then(this._dimensionChanged.bind(this));
        }
    },

    _postProcessRenderItems: function() {
        this._arrangeItems();
    },

    _renderToolbar: function() {
        this.$element()
            .addClass(TOOLBAR_CLASS)
            .toggleClass(TOOLBAR_MULTILINE_CLASS, this.option('multiline'));

        this._$toolbarItemsContainer = $('<div>')
            .addClass(TOOLBAR_ITEMS_CONTAINER_CLASS)
            .appendTo(this.$element());
    },

    _renderSections: function() {
        const $container = this._$toolbarItemsContainer;
        const that = this;
        each(['before', 'center', 'after'], function() {
            const sectionClass = 'dx-toolbar-' + this;
            let $section = $container.find('.' + sectionClass);

            if(!$section.length) {
                that['_$' + this + 'Section'] = $section = $('<div>')
                    .addClass(sectionClass)
                    .appendTo($container);
            }
        });
    },

    _checkWebFontForLabelsLoaded: function() {
        const $labels = this.$element().find(TOOLBAR_LABEL_SELECTOR);
        const promises = [];
        $labels.each((_, label) => {
            const text = $(label).text();
            const fontWeight = $(label).css('fontWeight');
            promises.push(waitWebFont(text, fontWeight));
        });
        return Promise.all(promises);
    },

    _arrangeItems: function(elementWidth) {
        elementWidth = elementWidth || getWidth(this.$element());

        this._$centerSection.css({
            margin: '0 auto',
            float: 'none'
        });

        const beforeRect = getBoundingRect(this._$beforeSection.get(0));
        const afterRect = getBoundingRect(this._$afterSection.get(0));

        this._alignCenterSection(beforeRect, afterRect, elementWidth);

        const $label = this._$toolbarItemsContainer.find(TOOLBAR_LABEL_SELECTOR).eq(0);
        const $section = $label.parent();

        if(!$label.length) {
            return;
        }

        const labelOffset = beforeRect.width ? beforeRect.width : $label.position().left;
        const widthBeforeSection = $section.hasClass(TOOLBAR_BEFORE_CLASS) ? 0 : labelOffset;
        const widthAfterSection = $section.hasClass(TOOLBAR_AFTER_CLASS) ? 0 : afterRect.width;
        let elemsAtSectionWidth = 0;

        $section.children().not(TOOLBAR_LABEL_SELECTOR).each(function() {
            elemsAtSectionWidth += getOuterWidth(this);
        });

        const freeSpace = elementWidth - elemsAtSectionWidth;
        const sectionMaxWidth = Math.max(freeSpace - widthBeforeSection - widthAfterSection, 0);

        if($section.hasClass(TOOLBAR_BEFORE_CLASS)) {
            this._alignSection(this._$beforeSection, sectionMaxWidth);
        } else {
            const labelPaddings = getOuterWidth($label) - getWidth($label);
            $label.css('maxWidth', sectionMaxWidth - labelPaddings);
        }
    },

    _alignCenterSection: function(beforeRect, afterRect, elementWidth) {
        this._alignSection(this._$centerSection, elementWidth - beforeRect.width - afterRect.width);

        const isRTL = this.option('rtlEnabled');
        const leftRect = isRTL ? afterRect : beforeRect;
        const rightRect = isRTL ? beforeRect : afterRect;
        const centerRect = getBoundingRect(this._$centerSection.get(0));

        if(leftRect.right > centerRect.left || centerRect.right > rightRect.left) {
            this._$centerSection.css({
                marginLeft: leftRect.width,
                marginRight: rightRect.width,
                float: leftRect.width > rightRect.width ? 'none' : 'right'
            });
        }
    },

    _alignSection: function($section, maxWidth) {
        const $labels = $section.find(TOOLBAR_LABEL_SELECTOR);
        let labels = $labels.toArray();

        maxWidth = maxWidth - this._getCurrentLabelsPaddings(labels);

        const currentWidth = this._getCurrentLabelsWidth(labels);
        const difference = Math.abs(currentWidth - maxWidth);

        if(maxWidth < currentWidth) {
            labels = labels.reverse();
            this._alignSectionLabels(labels, difference, false);
        } else {
            this._alignSectionLabels(labels, difference, true);
        }
    },

    _alignSectionLabels: function(labels, difference, expanding) {
        const getRealLabelWidth = function(label) { return getBoundingRect(label).width; };

        for(let i = 0; i < labels.length; i++) {
            const $label = $(labels[i]);
            const currentLabelWidth = Math.ceil(getRealLabelWidth(labels[i]));
            let labelMaxWidth;

            if(expanding) {
                $label.css('maxWidth', 'inherit');
            }

            const possibleLabelWidth = Math.ceil(expanding ? getRealLabelWidth(labels[i]) : currentLabelWidth);

            if(possibleLabelWidth < difference) {
                labelMaxWidth = expanding ? possibleLabelWidth : 0;
                difference = difference - possibleLabelWidth;
            } else {
                labelMaxWidth = expanding ? currentLabelWidth + difference : currentLabelWidth - difference;
                $label.css('maxWidth', labelMaxWidth);
                break;
            }

            $label.css('maxWidth', labelMaxWidth);
        }
    },

    _applyCompactMode: function() {
        const $element = this.$element();
        $element.removeClass(TOOLBAR_COMPACT_CLASS);

        if(this.option('compactMode') && this._getSummaryItemsWidth(this.itemElements(), true) > getWidth($element)) {
            $element.addClass(TOOLBAR_COMPACT_CLASS);
        }
    },

    _getCurrentLabelsWidth: function(labels) {
        let width = 0;

        labels.forEach(function(label, index) {
            width += getOuterWidth(label);
        });

        return width;
    },

    _getCurrentLabelsPaddings: function(labels) {
        let padding = 0;

        labels.forEach(function(label, index) {
            padding += (getOuterWidth(label) - getWidth(label));
        });

        return padding;
    },

    _renderItem: function(index, item, itemContainer, $after) {
        const location = item.location || 'center';
        const container = itemContainer || this['_$' + location + 'Section'];
        const itemHasText = !!(item.text || item.html);
        const itemElement = this.callBase(index, item, container, $after);

        itemElement
            .toggleClass(this._buttonClass(), !itemHasText)
            .toggleClass(TOOLBAR_LABEL_CLASS, itemHasText)
            .addClass(item.cssClass);

        return itemElement;
    },

    _renderGroupedItems: function() {
        const that = this;

        each(this.option('items'), function(groupIndex, group) {
            const groupItems = group.items;
            const $container = $('<div>').addClass(TOOLBAR_GROUP_CLASS);
            const location = group.location || 'center';

            if(!groupItems || !groupItems.length) {
                return;
            }

            each(groupItems, function(itemIndex, item) {
                that._renderItem(itemIndex, item, $container, null);
            });

            that._$toolbarItemsContainer.find('.dx-toolbar-' + location).append($container);
        });
    },

    _renderItems: function(items) {
        const grouped = this.option('grouped') && items.length && items[0].items;
        grouped ? this._renderGroupedItems() : this.callBase(items);
    },

    _getToolbarItems: function() {
        return this.option('items') || [];
    },

    _renderContentImpl: function() {
        const items = this._getToolbarItems();

        this.$element().toggleClass(TOOLBAR_MINI_CLASS, items.length === 0);

        if(this._renderedItemsCount) {
            this._renderItems(items.slice(this._renderedItemsCount));
        } else {
            this._renderItems(items);
        }

        this._applyCompactMode();
    },

    _renderEmptyMessage: noop,

    _clean: function() {
        this._$toolbarItemsContainer.children().empty();
        this.$element().empty();
    },

    _visibilityChanged: function(visible) {
        if(visible) {
            this._arrangeItems();
        }
    },

    _isVisible: function() {
        return getWidth(this.$element()) > 0 && getHeight(this.$element()) > 0;
    },

    _getIndexByItem: function(item) {
        return inArray(item, this._getToolbarItems());
    },

    _itemOptionChanged: function(item, property, value) {
        this.callBase.apply(this, [item, property, value]);
        this._arrangeItems();
    },

    _optionChanged: function(args) {
        const name = args.name;

        switch(name) {
            case 'width':
                this.callBase.apply(this, arguments);
                this._dimensionChanged();
                break;
            case 'multiline':
                this.$element().toggleClass(TOOLBAR_MULTILINE_CLASS, args.value);
                break;
            case 'renderAs':
            case 'useFlatButtons':
            case 'useDefaultButtons':
                this._invalidate();
                break;
            case 'compactMode':
                this._applyCompactMode();
                break;
            case 'grouped':
                break;
            default:
                this.callBase.apply(this, arguments);
        }
    },

    _dispose: function() {
        this.callBase();
        clearTimeout(this._waitParentAnimationTimeout);
    },


});

registerComponent('dxToolbarBase', ToolbarBase);

export default ToolbarBase;
