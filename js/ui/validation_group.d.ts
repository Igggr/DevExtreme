import DOMComponent, {
    DOMComponentOptions,
} from '../core/dom_component';

import {
    DxPromise,
} from '../core/utils/deferred';

import {
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import {
    AsyncRule,
    CompareRule,
    CustomRule,
    EmailRule,
    NumericRule,
    PatternRule,
    RangeRule,
    RequiredRule,
    StringLengthRule,
} from './validation_rules';

/** @public */
export type DisposingEvent = EventInfo<dxValidationGroup>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxValidationGroup>;

/** @public */
export type OptionChangedEvent = EventInfo<dxValidationGroup> & ChangedOptionInfo;

/**
 * @docid
 * @public
 */
export interface Properties extends DOMComponentOptions<dxValidationGroup> {
}
/**
 * @docid
 * @inherits DOMComponent
 * @hasTranscludedContent
 * @namespace DevExpress.ui
 * @public
 */
export default class dxValidationGroup extends DOMComponent<Properties> {
    /**
     * @docid
     * @publicName reset()
     * @public
     */
    reset(): void;
    /**
     * @docid
     * @publicName validate()
     * @public
     * @return dxValidationGroupResult
     */
    validate(): ValidationResult;
}

/**
 * @namespace DevExpress.ui
 * @deprecated {ui/validation_group.ValidationResult}
 */
export type dxValidationGroupResult = ValidationResult;

/**
 * @docid
 * @type object
 * @public
 */
export interface ValidationResult {
    /**
     * @docid
     * @public
     */
    brokenRules?: Array<RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule>;
    /**
     * @docid
     * @type Promise<ValidationResult>
     * @public
     */
    complete?: DxPromise<ValidationResult>;
    /**
     * @docid
     * @public
     */
    isValid?: boolean;
    /**
     * @docid
     * @type Enums.ValidationStatus
     * @public
     */
    status?: 'valid' | 'invalid' | 'pending';
    /**
     * @docid
     * @public
     */
    validators?: Array<any>;
}

/**
 * @namespace DevExpress.ui
 * @deprecated use Properties instead
 */
export type dxValidationGroupOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
