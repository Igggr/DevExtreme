import DataSource from '../data/data_source';

import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import Editor, {
    ValueChangedInfo,
    EditorOptions,
} from './editor/editor';

import {
    DataExpressionMixinOptions,
} from './editor/ui.data_expression';

/** @public */
export type ContentReadyEvent = EventInfo<dxRadioGroup>;

/** @public */
export type DisposingEvent = EventInfo<dxRadioGroup>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxRadioGroup>;

/** @public */
export type OptionChangedEvent = EventInfo<dxRadioGroup> & ChangedOptionInfo;

/** @public */
export type ValueChangedEvent = NativeEventInfo<dxRadioGroup> & ValueChangedInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends EditorOptions<dxRadioGroup>, DataExpressionMixinOptions<dxRadioGroup> {
    /**
     * @docid
     * @default true
     * @public
     */
    activeStateEnabled?: boolean;
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
     * @default 'horizontal' &for(tablets)
     * @type Enums.Orientation
     * @default "vertical"
     * @public
     */
    layout?: 'horizontal' | 'vertical';
    /**
     * @docid
     * @hidden false
     * @public
     */
    name?: string;
    /**
     * @docid
     * @ref
     * @public
     */
    value?: any;
}
/**
 * @docid
 * @isEditor
 * @inherits Editor, DataExpressionMixin
 * @namespace DevExpress.ui
 * @public
 */
export default class dxRadioGroup extends Editor<Properties> {
    getDataSource(): DataSource;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxRadioGroupOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
