import {
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import {
    FileSavingEventInfo,
    ExportInfo,
    IncidentInfo,
} from './core/base_widget';

import BaseSparkline, {
    BaseSparklineOptions,
} from './sparklines/base_sparkline';

/** @public */
export type DisposingEvent = EventInfo<dxBullet>;

/** @public */
export type DrawnEvent = EventInfo<dxBullet>;

/** @public */
export type ExportedEvent = EventInfo<dxBullet>;

/** @public */
export type ExportingEvent = EventInfo<dxBullet> & ExportInfo;

/** @public */
export type FileSavingEvent = FileSavingEventInfo<dxBullet>;

/** @public */
export type IncidentOccurredEvent = EventInfo<dxBullet> & IncidentInfo;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxBullet>;

/** @public */
export type OptionChangedEvent = EventInfo<dxBullet> & ChangedOptionInfo;

/** @public */
export type TooltipHiddenEvent = EventInfo<dxBullet>;

/** @public */
export type TooltipShownEvent = EventInfo<dxBullet>;

/**
 * @public
 * @docid
 */
export interface Properties extends BaseSparklineOptions<dxBullet> {
    /**
     * @docid
     * @default '#e8c267'
     * @public
     */
    color?: string;
    /**
     * @docid
     * @default undefined
     * @notUsedInTheme
     * @public
     */
    endScaleValue?: number;
    /**
     * @docid
     * @default true
     * @public
     */
    showTarget?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showZeroLevel?: boolean;
    /**
     * @docid
     * @default 0
     * @notUsedInTheme
     * @public
     */
    startScaleValue?: number;
    /**
     * @docid
     * @default 0
     * @notUsedInTheme
     * @public
     */
    target?: number;
    /**
     * @docid
     * @default '#666666'
     * @public
     */
    targetColor?: string;
    /**
     * @docid
     * @default 4
     * @public
     */
    targetWidth?: number;
    /**
     * @docid
     * @default 0
     * @notUsedInTheme
     * @public
     */
    value?: number;
}
/**
 * @docid
 * @inherits BaseSparkline
 * @namespace DevExpress.viz
 * @public
 */
export default class dxBullet extends BaseSparkline<Properties> { }

/**
 * @namespace DevExpress.viz
 * @deprecated use Properties instead
 */
export type dxBulletOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
