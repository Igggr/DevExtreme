import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
    ItemInfo,
} from '../events/index';

import CollectionWidget, {
    CollectionWidgetOptions,
} from './collection/ui.collection_widget.base';

/** @public */
export type ContentReadyEvent = EventInfo<dxValidationSummary>;

/** @public */
export type DisposingEvent = EventInfo<dxValidationSummary>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxValidationSummary>;

/** @public */
export type ItemClickEvent = NativeEventInfo<dxValidationSummary> & ItemInfo;

/** @public */
export type OptionChangedEvent = EventInfo<dxValidationSummary> & ChangedOptionInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends CollectionWidgetOptions<dxValidationSummary> {
    /**
     * @docid
     * @ref
     * @public
     */
    validationGroup?: string;
}
/**
 * @docid
 * @inherits CollectionWidget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxValidationSummary extends CollectionWidget<Properties> { }

/**
 * @deprecated use Properties instead
 * @namespace DevExpress.ui
*/
export type dxValidationSummaryOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
