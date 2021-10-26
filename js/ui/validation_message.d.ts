import {
    UserDefinedElement,
} from '../core/element';

import dxOverlay, {
    dxOverlayOptions,
} from './overlay';

/**
 * @docid
 * @public
 */
export interface Properties extends dxOverlayOptions<dxValidationMessage> {
    mode?: string;

    validationErrors?: Array<object> | null;

    positionRequest?: string;

    boundary?: String | UserDefinedElement;

    offset?: object;
}
/** @namespace DevExpress.ui */
export default class dxValidationMessage extends dxOverlay<Properties> { }

/**
 * @deprecated use Properties instead
 * @namespace DevExpress.ui
 * */
export type dxValidationMessageOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
