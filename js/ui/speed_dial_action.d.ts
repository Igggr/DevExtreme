import {
    DxElement,
} from '../core/element';

import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import Widget, {
    WidgetOptions,
} from './widget/ui.widget';

/** @public */
export type ClickEvent = NativeEventInfo<dxSpeedDialAction> & {
    actionElement?: DxElement;
};

/** @public */
export type ContentReadyEvent = EventInfo<dxSpeedDialAction> & {
    actionElement?: DxElement;
};

/** @public */
export type DisposingEvent = EventInfo<dxSpeedDialAction>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxSpeedDialAction>;

/** @public */
export type OptionChangedEvent = EventInfo<dxSpeedDialAction> & ChangedOptionInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends WidgetOptions<dxSpeedDialAction> {
    /**
     * @docid
     * @default ""
     * @public
     */
    icon?: string;
    /**
     * @docid
     * @default 0
     * @public
     */
    index?: number;
    /**
     * @docid
     * @default ""
     * @public
     */
    label?: string;
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field1 event:event
     * @type_function_param1_field2 component:this
     * @type_function_param1_field3 element:DxElement
     * @type_function_param1_field4 actionElement:DxElement
     * @action
     * @public
     */
    onClick?: ((e: ClickEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:dxSpeedDialAction
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @type_function_param1_field4 actionElement:DxElement
     * @action
     * @public
     */
    onContentReady?: ((e: ContentReadyEvent) => void);
    /**
     * @docid
     * @public
     */
    visible?: boolean;
}
/**
 * @docid
 * @inherits Widget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxSpeedDialAction extends Widget<Properties> { }

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxSpeedDialActionOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
