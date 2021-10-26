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
    ValidationRule,
} from './validation_rules';

/** @public */
export type DisposingEvent = EventInfo<dxValidator>;

/** @public */
export type InitializedEvent = InitializedEventInfo<dxValidator>;

/** @public */
export type OptionChangedEvent = EventInfo<dxValidator> & ChangedOptionInfo;

/** @public */
export type ValidatedEvent = {
    name?: string;
    isValid?: boolean;
    value?: any;
    validationRules?: Array<ValidationRule>;
    brokenRule?: ValidationRule;
    brokenRules?: ValidationRule;
    status?: 'valid' | 'invalid' | 'pending';
};

/**
 * @docid
 * @public
 */
export interface Properties extends DOMComponentOptions<dxValidator> {
    /**
     * @docid
     * @public
     */
    adapter?: {
      /**
       * @docid
       */
      applyValidationResults?: Function;
      /**
       * @docid
       */
      bypass?: Function;
      /**
       * @docid
       */
      focus?: Function;
      /**
       * @docid
       */
      getValue?: Function;
      /**
       * @docid
       */
      reset?: Function;
      /**
       * @docid
       */
      validationRequestsCallbacks?: Array<Function>;
    };
    /**
     * @docid
     * @public
     */
    name?: string;
    /**
     * @docid
     * @type_function_param1 validatedInfo:Object
     * @type_function_param1_field1 name:string
     * @type_function_param1_field2 isValid:boolean
     * @type_function_param1_field3 value:Object
     * @type_function_param1_field4 validationRules:Array<RequiredRule,NumericRule,RangeRule,StringLengthRule,CustomRule,CompareRule,PatternRule,EmailRule,AsyncRule>
     * @type_function_param1_field5 brokenRule:RequiredRule|NumericRule|RangeRule|StringLengthRule|CustomRule|CompareRule|PatternRule|EmailRule|AsyncRule
     * @type_function_param1_field6 brokenRules:Array<RequiredRule,NumericRule,RangeRule,StringLengthRule,CustomRule,CompareRule,PatternRule,EmailRule,AsyncRule>
     * @type_function_param1_field7 status:Enums.ValidationStatus
     * @action
     * @public
     */
    onValidated?: ((validatedInfo: ValidatedEvent) => void);
    /**
     * @docid
     * @ref
     * @public
     */
    validationGroup?: string;
    /**
     * @docid
     * @type Array<RequiredRule,NumericRule,RangeRule,StringLengthRule,CustomRule,CompareRule,PatternRule,EmailRule,AsyncRule>
     * @public
     */
    validationRules?: Array<ValidationRule>;
}
/**
 * @docid
 * @inherits DOMComponent
 * @extension
 * @namespace DevExpress.ui
 * @public
 */
export default class dxValidator extends DOMComponent<Properties> {
    /**
     * @docid
     * @publicName focus()
     * @public
     */
    focus(): void;
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
     * @return dxValidatorResult
     */
    validate(): ValidationResult;
}

/**
 * @namespace DevExpress.ui
 * @deprecated {ui/validator.ValidationResult} */
export type dxValidationResult = ValidationResult;

/**
 * @docid
 * @type object
 * @public
 */
export interface ValidationResult {
    /**
     * @docid
     * @type RequiredRule | NumericRule | RangeRule | StringLengthRule | CustomRule | CompareRule | PatternRule | EmailRule | AsyncRule
     * @public
     */
    brokenRule?: ValidationRule;
    /**
     * @docid
     * @type Array<RequiredRule,NumericRule,RangeRule,StringLengthRule,CustomRule,CompareRule,PatternRule,EmailRule,AsyncRule>
     * @public
     */
    brokenRules?: Array<ValidationRule>;
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
     * @public
     */
    pendingRules?: Array<AsyncRule>;
    /**
     * @docid
     * @type Enums.ValidationStatus
     * @public
     */
    status?: 'valid' | 'invalid' | 'pending';
    /**
     * @docid
     * @type Array<RequiredRule,NumericRule,RangeRule,StringLengthRule,CustomRule,CompareRule,PatternRule,EmailRule,AsyncRule>
     * @public
     */
    validationRules?: Array<ValidationRule>;
    /**
     * @docid
     * @public
     */
    value?: any;
}

/**
 * @deprecated use Properties instead
 * @namespace DevExpress.ui */
export type dxValidatorOptions = Properties;

/** @deprecated use Properties instead */
export type Options = Properties;
