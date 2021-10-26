import {
    UserDefinedElement,
    DxElement,
} from '../core/element';

import {
    DxPromise,
} from '../core/utils/deferred';

import {
    template,
} from '../core/templates/template';

import {
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import dxButton, {
    Properties as dxButtonOptions,
} from './button';

import Editor from './editor/editor';

import {
   Properties as dxTabPanelOptions,
} from './tab_panel';

import {
    AsyncRule,
    CompareRule,
    CustomRule,
    EmailRule,
    NumericRule,
    PatternRule,
    RangeRule,
    RequiredRule,
    StringLengthRule,
} from './validation_rules';

import {
    ValidationResult,
} from './validation_group';

import Widget, {
    WidgetOptions,
} from './widget/ui.widget';

/** @public */
export type ContentReadyEvent = EventInfo<dxForm>;

/** @public */
export type DisposingEvent = EventInfo<dxForm>;

/** @public */
export type EditorEnterKeyEvent = EventInfo<dxForm> & {
    readonly dataField?: string;
};

/** @public */
export type FieldDataChangedEvent = EventInfo<dxForm> & {
    readonly dataField?: string;
    readonly value?: any;
};

/** @public */
export type InitializedEvent = InitializedEventInfo<dxForm>;

/** @public */
export type OptionChangedEvent = EventInfo<dxForm> & ChangedOptionInfo;

/** @public */
export type GroupItemTemplateData = {
    readonly component: dxForm;
    readonly formData?: any;
};

/** @public */
export type SimpleItemTemplateData = {
    readonly component: dxForm;
    readonly dataField?: string;
    readonly editorOptions?: any;
    readonly editorType?: string;
    readonly name?: string;
};

/**
 * @docid
 * @public
 */
export interface Properties extends WidgetOptions<dxForm> {
    /**
     * @docid
     * @default true
     * @public
     */
    alignItemLabels?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    alignItemLabelsInAllGroups?: boolean;
    /**
     * @docid
     * @type number|Enums.Mode
     * @default 1
     * @public
     */
    colCount?: number | 'auto';
    /**
     * @docid
     * @type object
     * @inherits ColCountResponsible
     * @default undefined
     * @public
     */
    colCountByScreen?: any;
    /**
     * @docid
     * @type_function_param1 item:dxFormSimpleItem|dxFormGroupItem|dxFormTabbedItem|dxFormEmptyItem|dxFormButtonItem
     * @public
     */
    customizeItem?: ((item: Item) => void);
    /**
     * @docid
     * @default {}
     * @fires dxFormOptions.onFieldDataChanged
     * @public
     */
    formData?: any;
    /**
     * @docid
     * @type Array<SimpleItem | GroupItem | TabbedItem | EmptyItem | ButtonItem>
     * @default undefined
     * @public
     */
    items?: Array<Item>;
    /**
     * @docid
     * @type Enums.FormLabelLocation
     * @default "left"
     * @default "top" &for(Material)
     * @public
     */
    labelLocation?: 'left' | 'right' | 'top';
    /**
     * @docid
     * @type Enums.FormLabelMode
     * @default "default"
     * @public
     */
     labelMode?: 'outside' | 'floating' | 'static' | 'hidden';
    /**
     * @docid
     * @default 200
     * @public
     */
    minColWidth?: number;
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 dataField:string
     * @type_function_param1_field1 component:dxForm
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onEditorEnterKey?: ((e: EditorEnterKeyEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 dataField:string
     * @type_function_param1_field5 value:object
     * @type_function_param1_field1 component:dxForm
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onFieldDataChanged?: ((e: FieldDataChangedEvent) => void);
    /**
     * @docid
     * @default "optional"
     * @public
     */
    optionalMark?: string;
    /**
     * @docid
     * @default false
     * @public
     */
    readOnly?: boolean;
    /**
     * @docid
     * @default "*"
     * @public
     */
    requiredMark?: string;
    /**
     * @docid
     * @default "{0} is required"
     * @public
     */
    requiredMessage?: string;
    /**
     * @docid
     * @default null
     * @public
     */
    screenByWidth?: Function;
    /**
     * @docid
     * @default false
     * @public
     */
    scrollingEnabled?: boolean;
    /**
     * @docid
     * @default true
     * @default false &for(Material)
     * @public
     */
    showColonAfterLabel?: boolean;
    /**
     * @docid
     * @default false
     * @public
     */
    showOptionalMark?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showRequiredMark?: boolean;
    /**
     * @docid
     * @default false
     * @public
     */
    showValidationSummary?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    validationGroup?: string;
}
/**
 * @docid
 * @inherits Widget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxForm extends Widget<Properties> {
    /**
     * @docid
     * @publicName getButton(name)
     * @return dxButton | undefined
     * @public
     */
    getButton(name: string): dxButton | undefined;
    /**
     * @docid
     * @publicName getEditor(dataField)
     * @return Editor | undefined
     * @public
     */
    getEditor(dataField: string): Editor | undefined;
    /**
     * @docid
     * @publicName itemOption(id)
     * @public
     */
    itemOption(id: string): any;
    /**
     * @docid
     * @publicName itemOption(id, option, value)
     * @public
     */
    itemOption(id: string, option: string, value: any): void;
    /**
     * @docid
     * @publicName itemOption(id, options)
     * @param2 options:object
     * @public
     */
    itemOption(id: string, options: any): void;
    /**
     * @docid
     * @publicName resetValues()
     * @public
     */
    resetValues(): void;
    /**
     * @docid
     * @publicName updateData(data)
     * @param1 data:object
     * @public
     */
    updateData(data: any): void;
    /**
     * @docid
     * @publicName updateData(dataField, value)
     * @param2 value:object
     * @public
     */
    updateData(dataField: string, value: any): void;
    /**
     * @docid
     * @publicName updateDimensions()
     * @return Promise<void>
     * @public
     */
    updateDimensions(): DxPromise<void>;
    /**
     * @docid
     * @publicName validate()
     * @public
     * @return dxValidationGroupResult
     */
    validate(): ValidationResult;
}

/**
 * @public
 * @namespace DevExpress.ui.dxForm
 */
export type Item = SimpleItem | GroupItem | TabbedItem | EmptyItem | ButtonItem;

/**
 * @deprecated Use ButtonItem instea
 * @namespace DevExpress.ui
 */
export type dxFormButtonItem = ButtonItem;

/**
 * @namespace DevExpress.ui.dxForm
 * @public
 * @docid
 */
export interface ButtonItem {
    /**
     * @docid
     * @default undefined
     * @public
     */
    buttonOptions?: dxButtonOptions;
    /**
     * @docid
     * @default undefined
     * @public
     */
    colSpan?: number;
    /**
     * @docid
     * @default undefined
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @type Enums.HorizontalAlignment
     * @default "right"
     * @public
     */
    horizontalAlignment?: 'center' | 'left' | 'right';
    /**
     * @docid
     * @type Enums.FormItemType
     * @default "simple"
     * @public
     */
    itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
    /**
     * @docid
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * @docid
     * @type Enums.VerticalAlignment
     * @default "top"
     * @public
     */
    verticalAlignment?: 'bottom' | 'center' | 'top';
    /**
     * @docid
     * @default true
     * @public
     */
    visible?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    visibleIndex?: number;
}

/**
 * @deprecated Use EmptyItem instead
 * @namespace DevExpress.ui
 */
export type dxFormEmptyItem = EmptyItem;

/**
 * @namespace DevExpress.ui.dxForm
 * @public
 * @docid
 */
export interface EmptyItem {
    /**
     * @docid
     * @default undefined
     * @public
     */
    colSpan?: number;
    /**
     * @docid
     * @default undefined
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @type Enums.FormItemType
     * @default "simple"
     * @public
     */
    itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
    /**
     * @docid
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * @docid
     * @default true
     * @public
     */
    visible?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    visibleIndex?: number;
}

/**
 * @deprecated Use GroupItem instead
 * @namespace DevExpress.ui
 */
export type dxFormGroupItem = GroupItem;

/**
 * @docid
 * @namespace DevExpress.ui.dxForm
 * @public
 */
export interface GroupItem {
    /**
     * @docid
     * @default true
     * @public
     */
    alignItemLabels?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    caption?: string;
    /**
     * @docid
     * @default 1
     * @public
     */
    colCount?: number;
    /**
     * @docid
     * @type object
     * @inherits ColCountResponsible
     * @default undefined
     * @public
     */
    colCountByScreen?: any;
    /**
     * @docid
     * @default undefined
     * @public
     */
    colSpan?: number;
    /**
     * @docid
     * @default undefined
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @type Enums.FormItemType
     * @default "simple"
     * @public
     */
    itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
    /**
     * @docid
     * @type Array<SimpleItem | GroupItem | TabbedItem | EmptyItem | ButtonItem>
     * @default undefined
     * @public
     */
    items?: Array<Item>;
    /**
     * @docid
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * @docid
     * @type_function_param1 data:object
     * @type_function_param1_field1 component:dxForm
     * @type_function_param1_field2 formData:object
     * @type_function_return string|Element|jQuery
     * @public
     */
    template?: template | ((data: GroupItemTemplateData, itemElement: DxElement) => string | UserDefinedElement);
    /**
     * @docid
     * @default true
     * @public
     */
    visible?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    visibleIndex?: number;
}

/**
 * @deprecated Use SimpleItem instead
 * @namespace DevExpress.ui
 */
export type dxFormSimpleItem = SimpleItem;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxForm
 */
export interface SimpleItem {
    /**
     * @docid
     * @default undefined
     * @public
     */
    colSpan?: number;
    /**
     * @docid
     * @default undefined
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @default undefined
     * @public
     */
    dataField?: string;
    /**
     * @docid
     * @default undefined
     * @public
     */
    editorOptions?: any;
    /**
     * @docid
     * @type Enums.FormItemEditorType
     * @public
     */
    editorType?: 'dxAutocomplete' | 'dxCalendar' | 'dxCheckBox' | 'dxColorBox' | 'dxDateBox' | 'dxDropDownBox' | 'dxHtmlEditor' | 'dxLookup' | 'dxNumberBox' | 'dxRadioGroup' | 'dxRangeSlider' | 'dxSelectBox' | 'dxSlider' | 'dxSwitch' | 'dxTagBox' | 'dxTextArea' | 'dxTextBox';
    /**
     * @docid
     * @default undefined
     * @public
     */
    helpText?: string;
    /**
     * @docid
     * @default undefined
     * @public
     */
    isRequired?: boolean;
    /**
     * @docid
     * @type Enums.FormItemType
     * @default "simple"
     * @public
     */
    itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
    /**
     * @docid
     * @default undefined
     * @public
     */
    label?: {
      /**
       * @docid
       * @type Enums.HorizontalAlignment
       * @default "left"
       */
      alignment?: 'center' | 'left' | 'right';
      /**
       * @docid
       * @type Enums.FormLabelLocation
       * @default "left"
       */
      location?: 'left' | 'right' | 'top';
      /**
       * @docid
       * @default from showColonAfterLabel
       */
      showColon?: boolean;
      /**
       * @docid
       * @default undefined
       */
      text?: string;
      /**
       * @docid
       * @default true
       */
      visible?: boolean;
    };
    /**
     * @docid
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * @docid
     * @type_function_param1 data:object
     * @type_function_param1_field1 component:dxForm
     * @type_function_param1_field2 dataField:string
     * @type_function_param1_field3 editorOptions:object
     * @type_function_param1_field4 editorType:string
     * @type_function_param1_field5 name:string
     * @type_function_return string|Element|jQuery
     * @public
     */
    template?: template | ((data: SimpleItemTemplateData, itemElement: DxElement) => string | UserDefinedElement);
    /**
     * @docid
     * @default undefined
     * @public
     */
    validationRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
    /**
     * @docid
     * @default true
     * @public
     */
    visible?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    visibleIndex?: number;
}

/**
 * @deprecated Use TabbedItem instead
 * @namespace DevExpress.ui
 */
export type dxFormTabbedItem = TabbedItem;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxForm
 */
export interface TabbedItem {
    /**
     * @docid
     * @default undefined
     * @public
     */
    colSpan?: number;
    /**
     * @docid
     * @default undefined
     * @public
     */
    cssClass?: string;
    /**
     * @docid
     * @type Enums.FormItemType
     * @default "simple"
     * @public
     */
    itemType?: 'empty' | 'group' | 'simple' | 'tabbed' | 'button';
    /**
     * @docid
     * @default undefined
     * @public
     */
    name?: string;
    /**
     * @docid
     * @default undefined
     * @public
     */
    tabPanelOptions?: dxTabPanelOptions;
    /**
     * @docid
     * @default undefined
     * @public
     */
    tabs?: Array<{
      /**
       * @docid
       * @default true
       */
      alignItemLabels?: boolean;
      /**
       * @docid
       * @default undefined
       */
      badge?: string;
      /**
       * @docid
       * @default 1
       */
      colCount?: number;
      /**
       * @docid
       * @type object
       * @inherits ColCountResponsible
       * @default undefined
       */
      colCountByScreen?: any;
      /**
       * @docid
       * @default false
       */
      disabled?: boolean;
      /**
       * @docid
       * @default undefined
       */
      icon?: string;
      /**
       * @docid
       * @type Array<SimpleItem | GroupItem | TabbedItem | EmptyItem | ButtonItem>
       * @default undefined
       */
      items?: Array<Item>;
      /**
       * @docid
       * @type_function_param1 tabData:object
       * @default undefined
       */
      tabTemplate?: template | ((tabData: any, tabIndex: number, tabElement: DxElement) => any);
      /**
       * @docid
       * @type_function_param1 tabData:object
       * @default undefined
       */
      template?: template | ((tabData: any, tabIndex: number, tabElement: DxElement) => any);
      /**
       * @docid
       * @default undefined
       */
      title?: string;
    }>;
    /**
     * @docid
     * @default true
     * @public
     */
    visible?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    visibleIndex?: number;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxFormOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
