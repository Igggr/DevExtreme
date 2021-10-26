import {
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import Widget, {
    WidgetOptions,
} from './widget/ui.widget';

/** @public */
export type ContentReadyEvent = EventInfo<dxLoadIndicator>;

/** @public */
export type DisposingEvent = EventInfo<dxLoadIndicator>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxLoadIndicator>;

/** @public */
export type OptionChangedEvent = EventInfo<dxLoadIndicator> & ChangedOptionInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends WidgetOptions<dxLoadIndicator> {
    /**
     * @docid
     * @default ""
     * @public
     */
    indicatorSrc?: string;
}
/**
 * @docid
 * @inherits Widget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxLoadIndicator extends Widget<Properties> { }

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxLoadIndicatorOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
