import {
    EventInfo,
    NativeEventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import {
    ValueChangedInfo,
} from './editor/editor';

import dxTextBox, {
    Properties as dxTextBoxOptions,
} from './text_box';

/** @public */
export type ChangeEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type ContentReadyEvent = EventInfo<dxTextArea>;

/** @public */
export type CopyEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type CutEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type DisposingEvent = EventInfo<dxTextArea>;

/** @public */
export type EnterKeyEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type FocusInEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type FocusOutEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxTextArea>;

/** @public */
export type InputEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type KeyDownEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type KeyPressEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type KeyUpEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type OptionChangedEvent = EventInfo<dxTextArea> & ChangedOptionInfo;

/** @public */
export type PasteEvent = NativeEventInfo<dxTextArea>;

/** @public */
export type ValueChangedEvent = NativeEventInfo<dxTextArea> & ValueChangedInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends dxTextBoxOptions<dxTextArea> {
    /**
     * @docid
     * @default false
     * @public
     */
    autoResizeEnabled?: boolean;
    /**
     * @docid
     * @default undefined
     * @public
     */
    maxHeight?: number | string;
    /**
     * @docid
     * @default undefined
     * @public
     */
    minHeight?: number | string;
    /**
     * @docid
     * @default true
     * @public
     */
    spellcheck?: boolean;
}
/**
 * @docid
 * @isEditor
 * @inherits dxTextBox
 * @namespace DevExpress.ui
 * @public
 */
export default class dxTextArea extends dxTextBox<Properties> { }

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxTextAreaOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
