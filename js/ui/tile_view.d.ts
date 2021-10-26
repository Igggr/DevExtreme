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
} from './collection/ui.collection_widget.base';

/** @public */
export type ContentReadyEvent = EventInfo<dxTileView>;

/** @public */
export type DisposingEvent = EventInfo<dxTileView>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxTileView>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxTileView> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = NativeEventInfo<dxTileView> & ItemInfo;

/** @public */
export type ItemHoldEvent = NativeEventInfo<dxTileView> & ItemInfo;

/** @public */
export type ItemRenderedEvent = NativeEventInfo<dxTileView> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxTileView> & ChangedOptionInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends CollectionWidgetOptions<dxTileView> {
    /**
     * @docid
     * @default true
     * @public
     */
    activeStateEnabled?: boolean;
    /**
     * @docid
     * @default 100
     * @public
     */
    baseItemHeight?: number;
    /**
     * @docid
     * @default 100
     * @public
     */
    baseItemWidth?: number;
    /**
     * @docid
     * @type string | Array<string | Item | any> | Store | DataSource | DataSourceOptions
     * @default null
     * @public
     */
    dataSource?: DataSourceLike<string | Item | any>;
    /**
     * @docid
     * @type Enums.Orientation
     * @default 'horizontal'
     * @public
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * @docid
     * @default true &for(desktop)
     * @public
     */
    focusStateEnabled?: boolean;
    /**
     * @docid
     * @default 500
     * @public
     */
    height?: number | string | (() => number | string);
    /**
     * @docid
     * @default true
     * @public
     */
    hoverStateEnabled?: boolean;
    /**
     * @docid
     * @default 20
     * @public
     */
    itemMargin?: number;
    /**
     * @docid
     * @type Array<string | Item | any>
     * @fires dxTileViewOptions.onOptionChanged
     * @public
     */
    items?: Array<string | Item | any>;
    /**
     * @docid
     * @default false
     * @public
     */
    showScrollbar?: boolean;
}
/**
 * @docid
 * @inherits CollectionWidget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxTileView extends CollectionWidget<Properties> {
    /**
     * @docid
     * @publicName scrollPosition()
     * @return numeric
     * @public
     */
    scrollPosition(): number;
}

/**
 * @deprecated Use Item instead
 * @namespace DevExpress.ui
 */
export type dxTileViewItem = Item;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxTileView
 */
export interface Item extends CollectionWidgetItem {
    /**
     * @docid
     * @default 1
     * @public
     */
    heightRatio?: number;
    /**
     * @docid
     * @default 1
     * @public
     */
    widthRatio?: number;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxTileViewOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
