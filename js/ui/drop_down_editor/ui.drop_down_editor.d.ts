import {
    UserDefinedElement,
    DxElement,
} from '../../core/element';

import {
    template,
} from '../../core/templates/template';

import dxTextBox, {
    dxTextBoxOptions,

} from '../text_box';

import {
    dxTextEditorButton,
} from '../text_box/ui.text_editor.base';

import {
    Properties as PopoverProperties,
} from '../popover';

import {
    Properties as PopupProperties,
} from '../popup';

import {
    EventInfo,
} from '../../events/index';

export interface DropDownButtonTemplateDataModel {
    readonly text?: string;
    readonly icon?: string;
}

/** @namespace DevExpress.ui */
export interface dxDropDownEditorOptions<TComponent> extends dxTextBoxOptions<TComponent> {
    /**
     * @docid
     * @default true
     * @public
     */
    acceptCustomValue?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    activeStateEnabled?: boolean;
    /**
     * @docid
     * @type Enums.EditorApplyValueMode
     * @default "instantly"
     * @public
     */
    applyValueMode?: 'instantly' | 'useButtons';
    /**
     * @docid
     * @default {}
     * @public
     * @type dxPopupOptions | dxPopoverOptions
     */
    dropDownOptions?: PopupProperties | PopoverProperties;
    /**
     * @docid
     * @type Array<Enums.DropDownEditorButtonName,dxTextEditorButton>
     * @default undefined
     * @public
     */
    buttons?: Array<'clear' | 'dropDown' | dxTextEditorButton>;
    /**
     * @docid
     * @default true
     * @public
     */
    deferRendering?: boolean;
    /**
     * @docid
     * @default "dropDownButton"
     * @type_function_param1 buttonData:object
     * @type_function_return string|Element|jQuery
     * @public
     */
    dropDownButtonTemplate?: template | ((buttonData: DropDownButtonTemplateDataModel, contentElement: DxElement) => string | UserDefinedElement);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:this
     * @action
     * @public
     */
    onClosed?: ((e: EventInfo<TComponent>) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:this
     * @action
     * @public
     */
    onOpened?: ((e: EventInfo<TComponent>) => void);
    /**
     * @docid
     * @default false
     * @public
     */
    openOnFieldClick?: boolean;
    /**
     * @docid
     * @default false
     * @fires dxDropDownEditorOptions.onOpened
     * @fires dxDropDownEditorOptions.onClosed
     * @public
     */
    opened?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showDropDownButton?: boolean;
    /**
     * @docid
     * @default null
     * @public
     */
    value?: any;
}
/**
 * @docid
 * @inherits dxTextBox
 * @hidden
 * @namespace DevExpress.ui
 */
export default class dxDropDownEditor<TProperties> extends dxTextBox<TProperties> {
    /**
     * @docid
     * @publicName close()
     * @public
     */
    close(): void;
    /**
     * @docid
     * @publicName content()
     * @public
     */
    content(): DxElement;
    /**
     * @docid
     * @publicName field()
     * @public
     */
    field(): DxElement;
    /**
     * @docid
     * @publicName open()
     * @public
     */
    open(): void;
}

interface DropDownEditorInstance extends dxDropDownEditor<Properties> { }
type Properties = dxDropDownEditorOptions<DropDownEditorInstance>;
export type Options = Properties;
