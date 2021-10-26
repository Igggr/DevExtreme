import {
    Cancelable,
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import dxPopover, {
    Properties as dxPopoverOptions,
} from './popover';

/** @public */
export type ContentReadyEvent = EventInfo<dxTooltip>;

/** @public */
export type DisposingEvent = EventInfo<dxTooltip>;

/** @public */
export type HidingEvent = Cancelable & EventInfo<dxTooltip>;

/** @public */
export type HiddenEvent = EventInfo<dxTooltip>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxTooltip>;

/** @public */
export type OptionChangedEvent = EventInfo<dxTooltip> & ChangedOptionInfo;

/** @public */
export type ShowingEvent = Cancelable & EventInfo<dxTooltip>;

/** @public */
export type ShownEvent = EventInfo<dxTooltip>;

/**
 * @docid
 * @public
 */
export interface Properties extends dxPopoverOptions<dxTooltip> {
}
/**
 * @docid
 * @inherits dxPopover
 * @hasTranscludedContent
 * @namespace DevExpress.ui
 * @public
 */
export default class dxTooltip extends dxPopover<Properties> { }

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxTooltipOption = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
