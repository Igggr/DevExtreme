import { DataSourceLike } from '../data/data_source';
import {
    UserDefinedElement,
    DxElement,
} from '../core/element';

import {
    template,
} from '../core/templates/template';

import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
    ItemInfo,
} from '../events/index';

import CollectionWidget, {
    CollectionWidgetItem,
    CollectionWidgetOptions,
} from './collection/ui.collection_widget.base';

/** @public */
export type ContentReadyEvent = EventInfo<dxToolbar>;

/** @public */
export type DisposingEvent = EventInfo<dxToolbar>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxToolbar>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxToolbar> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = NativeEventInfo<dxToolbar> & ItemInfo;

/** @public */
export type ItemHoldEvent = NativeEventInfo<dxToolbar> & ItemInfo;

/** @public */
export type ItemRenderedEvent = NativeEventInfo<dxToolbar> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxToolbar> & ChangedOptionInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends CollectionWidgetOptions<dxToolbar> {
    /**
     * @docid
     * @type string | Array<string | Item | any> | Store | DataSource | DataSourceOptions
     * @default null
     * @public
     */
    dataSource?: DataSourceLike<string | Item | any>;
    /**
     * @docid
     * @type Array<string | Item | any>
     * @fires dxToolbarOptions.onOptionChanged
     * @public
     */
    items?: Array<string | Item | any>;
    /**
     * @docid
     * @default "menuItem"
     * @type_function_param1 itemData:object
     * @type_function_return string|Element|jQuery
     * @public
     */
    menuItemTemplate?: template | ((itemData: any, itemIndex: number, itemElement: DxElement) => string | UserDefinedElement);
    /**
     * @docid
     * @deprecated
     * @default undefined
     * @public
     */
    height?: number | string | (() => number | string);
}
/**
 * @docid
 * @inherits CollectionWidget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxToolbar extends CollectionWidget<Properties> { }

/**
 * @deprecated Use Item instead
 * @namespace DevExpress.ui
 * */
export type dxToolbarItem = Item;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxToolbar
 */
export interface Item extends CollectionWidgetItem {
    /**
     * @docid
     * @default undefined
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @type Enums.ToolbarItemLocateInMenuMode
     * @default 'never'
     * @public
     */
    locateInMenu?: 'always' | 'auto' | 'never';
    /**
     * @docid
     * @type Enums.ToolbarItemLocation
     * @default 'center'
     * @public
     */
    location?: 'after' | 'before' | 'center';
    /**
     * @docid
     * @type_function_return string|Element|jQuery
     * @public
     */
    menuItemTemplate?: template | (() => string | UserDefinedElement);
    /**
     * @docid
     * @public
     */
    options?: any;
    /**
     * @docid
     * @type Enums.ToolbarItemShowTextMode
     * @default 'always'
     * @public
     */
    showText?: 'always' | 'inMenu';
    /**
     * @docid
     * @type Enums.ToolbarItemWidget
     * @public
     */
    widget?: 'dxAutocomplete' | 'dxButton' | 'dxCheckBox' | 'dxDateBox' | 'dxMenu' | 'dxSelectBox' | 'dxTabs' | 'dxTextBox' | 'dxButtonGroup' | 'dxDropDownButton';
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxToolbarOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
