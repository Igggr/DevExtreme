import { DataSourceLike } from '../data/data_source';
import {
    UserDefinedElement,
    DxElement,
} from '../core/element';

import {
    DxPromise,
} from '../core/utils/deferred';

import {
    DxEvent,
    Cancelable,
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
export type CancelClickEvent = Cancelable & EventInfo<dxActionSheet>;

/** @public */
export type ContentReadyEvent = EventInfo<dxActionSheet>;

/** @public */
export type DisposingEvent = EventInfo<dxActionSheet>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxActionSheet>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxActionSheet> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = NativeEventInfo<dxActionSheet> & ItemInfo;

/** @public */
export type ItemHoldEvent = NativeEventInfo<dxActionSheet> & ItemInfo;

/** @public */
export type ItemRenderedEvent = NativeEventInfo<dxActionSheet> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxActionSheet> & ChangedOptionInfo;

/**
 * @public
 * @docid
 */
export interface Properties extends CollectionWidgetOptions<dxActionSheet> {
    /**
     * @docid
     * @default "Cancel"
     * @public
     */
    cancelText?: string;
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
     * @fires dxActionSheetOptions.onOptionChanged
     * @public
     */
    items?: Array<string | Item | any>;
    /**
     * @docid
     * @default null
     * @type function
     * @type_function_param1 e:object
     * @type_function_param1_field4 cancel:boolean
     * @type_function_param1_field1 component:dxActionSheet
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onCancelClick?: ((e: CancelClickEvent) => void) | string;
    /**
     * @docid
     * @default true
     * @public
     */
    showCancelButton?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showTitle?: boolean;
    /**
     * @docid
     * @public
     */
    target?: string | UserDefinedElement;
    /**
     * @docid
     * @default ""
     * @public
     */
    title?: string;
    /**
     * @docid
     * @default false
     * @default true &for(iPad)
     * @public
     */
    usePopover?: boolean;
    /**
     * @docid
     * @default false
     * @fires dxActionSheetOptions.onOptionChanged
     * @public
     */
    visible?: boolean;
}
/**
 * @docid
 * @inherits CollectionWidget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxActionSheet extends CollectionWidget<Properties> {
    /**
     * @docid
     * @publicName hide()
     * @return Promise<void>
     * @public
     */
    hide(): DxPromise<void>;
    /**
     * @docid
     * @publicName show()
     * @return Promise<void>
     * @public
     */
    show(): DxPromise<void>;
    /**
     * @docid
     * @publicName toggle(showing)
     * @return Promise<void>
     * @public
     */
    toggle(showing: boolean): DxPromise<void>;
}

/**
 * @deprecated Use Item instead
 * @namespace DevExpress.ui
 */
export type dxActionSheetItem = Item;

/**
 * @namespace DevExpress.ui.dxActionSheet
 * @public
 * @docid
 */
export interface Item extends CollectionWidgetItem {
    /**
     * @docid
     * @public
     */
    icon?: string;
    /**
     * @docid
     * @default null
     * @type function
     * @type_function_param1_field3 model:object
     * @type_function_param1_field4 event:event
     * @public
     */
    onClick?: ((e: { component?: dxActionSheet; element?: DxElement; model?: any; event?: DxEvent }) => void) | string;
    /**
     * @docid
     * @type Enums.ButtonType
     * @default 'normal'
     * @public
     */
    type?: 'back' | 'danger' | 'default' | 'normal' | 'success';
    /**
     * @docid
     * @type Enums.ButtonStylingMode
     * @default 'outlined'
     * @public
     */
    stylingMode?: 'text' | 'outlined' | 'contained' ;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxActionSheetOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
