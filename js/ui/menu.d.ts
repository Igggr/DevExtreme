import { DataSourceLike } from '../data/data_source';
import {
    DxElement,
} from '../core/element';

import {
    Cancelable,
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
    ItemInfo,
} from '../events/index';

import {
    CollectionWidgetItem,
    SelectionChangedInfo,
} from './collection/ui.collection_widget.base';

import dxMenuBase, {
    dxMenuBaseOptions,
} from './context_menu/ui.menu_base';

/** @public */
export type ContentReadyEvent = EventInfo<dxMenu>;

/** @public */
export type DisposingEvent = EventInfo<dxMenu>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxMenu>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxMenu> & ItemInfo;

/** @public */
export type ItemContextMenuEvent = NativeEventInfo<dxMenu> & ItemInfo;

/** @public */
export type ItemRenderedEvent = NativeEventInfo<dxMenu> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxMenu> & ChangedOptionInfo;

/** @public */
export type SelectionChangedEvent = EventInfo<dxMenu> & SelectionChangedInfo;

/** @public */
export type SubmenuHiddenEvent = EventInfo<dxMenu> & {
    readonly rootItem?: DxElement;
};

/** @public */
export type SubmenuHidingEvent = Cancelable & EventInfo<dxMenu> & {
    readonly rootItem?: DxElement;
};

/** @public */
export type SubmenuShowingEvent = EventInfo<dxMenu> & {
    readonly rootItem?: DxElement;
};

/** @public */
export type SubmenuShownEvent = EventInfo<dxMenu> & {
    readonly rootItem?: DxElement;
};

/**
 * @docid
 * @public
 */
export interface Properties extends dxMenuBaseOptions<dxMenu> {
    /**
     * @docid
     * @default false
     * @public
     */
    adaptivityEnabled?: boolean;
    /**
     * @docid
     * @type string | Array<Item> | Store | DataSource | DataSourceOptions
     * @default null
     * @public
     */
    dataSource?: DataSourceLike<Item>;
    /**
     * @docid
     * @default false
     * @public
     */
    hideSubmenuOnMouseLeave?: boolean;
    /**
     * @docid
     * @type Array<Item>
     * @public
     */
    items?: Array<Item>;
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 rootItem:DxElement
     * @type_function_param1_field1 component:dxMenu
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onSubmenuHidden?: ((e: SubmenuHiddenEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 rootItem:DxElement
     * @type_function_param1_field5 cancel:boolean
     * @type_function_param1_field1 component:dxMenu
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onSubmenuHiding?: ((e: SubmenuHidingEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 rootItem:DxElement
     * @type_function_param1_field1 component:dxMenu
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onSubmenuShowing?: ((e: SubmenuShowingEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field4 rootItem:DxElement
     * @type_function_param1_field1 component:dxMenu
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onSubmenuShown?: ((e: SubmenuShownEvent) => void);
    /**
     * @docid
     * @type Enums.Orientation
     * @default "horizontal"
     * @public
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * @docid
     * @type Object|Enums.ShowSubmenuMode
     * @default { name: "onClick", delay: { show: 50, hide: 300 } }
     * @public
     */
    showFirstSubmenuMode?: {
      /**
       * @docid
       * @default { show: 50, hide: 300 }
       */
      delay?: {
        /**
         * @docid
         * @default 300
         */
        hide?: number;
        /**
         * @docid
         * @default 50
         */
        show?: number;
      } | number;
      /**
       * @docid
       * @type Enums.ShowSubmenuMode
       * @default "onClick"
       */
      name?: 'onClick' | 'onHover';
    } | 'onClick' | 'onHover';
    /**
     * @docid
     * @type Enums.SubmenuDirection
     * @default "auto"
     * @public
     */
    submenuDirection?: 'auto' | 'leftOrTop' | 'rightOrBottom';
}
/**
 * @docid
 * @inherits dxMenuBase
 * @namespace DevExpress.ui
 * @public
 */
export default class dxMenu extends dxMenuBase<Properties> { }

export interface MenuBasePlainItem extends CollectionWidgetItem {
  /**
   * @docid dxMenuBaseItem.beginGroup
   * @public
   */
  beginGroup?: boolean;
  /**
   * @docid dxMenuBaseItem.closeMenuOnClick
   * @default true
   * @public
   */
  closeMenuOnClick?: boolean;
  /**
   * @docid dxMenuBaseItem.disabled
   * @default false
   * @public
   */
  disabled?: boolean;
  /**
   * @docid dxMenuBaseItem.icon
   * @public
   */
  icon?: string;
  /**
   * @docid dxMenuBaseItem.selectable
   * @default false
   * @public
   */
  selectable?: boolean;
  /**
   * @docid dxMenuBaseItem.selected
   * @default false
   * @public
   */
  selected?: boolean;
  /**
   * @docid dxMenuBaseItem.text
   * @public
   */
  text?: string;
  /**
   * @docid dxMenuBaseItem.visible
   * @default true
   * @public
   */
  visible?: boolean;
}

/**
 * @docid
 * @inherits CollectionWidgetItem
 * @type object
 * @namespace DevExpress.ui
 */
export interface dxMenuBaseItem extends MenuBasePlainItem {
    /**
     * @docid
     * @public
     */
    items?: Array<dxMenuBaseItem>;
}

/**
 * @deprecated Use Item instead
 * @namespace DevExpress.ui
 */
export type dxMenuItem = Item;

/**
 * @docid
 * @public
 * @namespace DevExpress.ui.dxMenu
 */
export interface Item extends dxMenuBaseItem {
    /**
     * @docid
     * @public
     * @type Array<Item>
     */
    items?: Array<Item>;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
*/
export type dxMenuOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
