import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
    ItemInfo,
} from '../events/index';

import {
    SelectionChangedInfo,
} from './collection/ui.collection_widget.base';

import dxTabs, {
    Item as dxTabsItem,
    Properties as dxTabsOptions,
} from './tabs';

/** @public */
export type ContentReadyEvent = EventInfo<dxNavBar>;

/** @public */
export type DisposingEvent = EventInfo<dxNavBar>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxNavBar>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxNavBar> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = NativeEventInfo<dxNavBar> & ItemInfo;

/** @public */
export type ItemHoldEvent = NativeEventInfo<dxNavBar> & ItemInfo;

/** @public */
export type ItemRenderedEvent = NativeEventInfo<dxNavBar> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxNavBar> & ChangedOptionInfo;

/** @public */
export type SelectionChangedEvent = EventInfo<dxNavBar> & SelectionChangedInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends dxTabsOptions<dxNavBar> {
    /**
     * @docid
     * @public
     */
    scrollByContent?: boolean;
}
/**
 * @docid
 * @inherits dxTabs
 * @namespace DevExpress.ui
 * @deprecated dxTabs
 * @public
 */
export default class dxNavBar extends dxTabs<Properties> { }

/**
 * @deprecated Use Item instead
 * @namespace DevExpress.ui
 */
export type dxNavBarItem = Item;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxNavBar
 */
export interface Item extends dxTabsItem {
    /**
     * @docid
     * @public
     */
    badge?: string;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxNavBarOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
