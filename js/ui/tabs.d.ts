import { DataSourceLike } from '../data/data_source';

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
    SelectionChangedInfo,
} from './collection/ui.collection_widget.base';

/** @public */
export type ContentReadyEvent = EventInfo<dxTabs>;

/** @public */
export type DisposingEvent = EventInfo<dxTabs>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxTabs>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxTabs> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = NativeEventInfo<dxTabs> & ItemInfo;

/** @public */
export type ItemHoldEvent = NativeEventInfo<dxTabs> & ItemInfo;

/** @public */
export type ItemRenderedEvent = NativeEventInfo<dxTabs> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxTabs> & ChangedOptionInfo;

/** @public */
export type SelectionChangedEvent = EventInfo<dxTabs> & SelectionChangedInfo;

/**
 * @docid
 * @public
 */
export interface Properties<TComponent=TabsInstance> extends CollectionWidgetOptions<TComponent> {
    /**
     * @docid
     * @type string | Array<string | Item | any> | Store | DataSource | DataSourceOptions
     * @default null
     * @public
     */
    dataSource?: DataSourceLike<string | Item | any>;
    /**
     * @docid
     * @default true &for(desktop)
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    hoverStateEnabled?: boolean;
    /**
     * @docid
     * @type Array<string | Item | any>
     * @fires dxTabsOptions.onOptionChanged
     * @public
     */
    items?: Array<string | Item | any>;
    /**
     * @docid
     * @default false
     * @public
     */
    repaintChangesOnly?: boolean;
    /**
     * @docid
     * @default true
     * @default false &for(desktop)
     * @public
     */
    scrollByContent?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    scrollingEnabled?: boolean;
    /**
     * @docid
     * @type Enums.NavSelectionMode
     * @default 'single'
     * @public
     */
    selectionMode?: 'multiple' | 'single';
    /**
     * @docid
     * @default true
     * @default false &for(mobile_devices)
     * @public
     */
    showNavButtons?: boolean;
}
/**
 * @docid
 * @inherits CollectionWidget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxTabs<TProperties = Properties> extends CollectionWidget<TProperties> { }

/**
 * @deprecated Use Item instea
 * @namespace DevExpress.ui
 */
export type dxTabsItem = Item;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxTabs
 */
export interface Item extends CollectionWidgetItem {
    /**
     * @docid
     * @public
     */
    badge?: string;
    /**
     * @docid
     * @public
     */
    icon?: string;
}

interface TabsInstance extends dxTabs<Properties> { }

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxTabsOptions<T> = Properties<T>;

/** @deprecated use Properties instead */
export type Options = Properties<TabsInstance>;
