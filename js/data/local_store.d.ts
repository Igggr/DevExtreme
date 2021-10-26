import ArrayStore, {
    Options as ArrayStoreOptions,
} from './array_store';

/**
 * @namespace DevExpress.data
 * @deprecated Use Options instead
 */
export type LocalStoreOptions<
    TItem = any,
    TKey = any,
> = Options<TItem, TKey>;

/**
 * @public
 * @docid
 */
export interface Options<
    TItem = any,
    TKey = any,
> extends ArrayStoreOptions<TItem, TKey> {
    /**
     * @docid
     * @default 10000
     * @public
     */
    flushInterval?: number;
    /**
     * @docid
     * @default false
     * @public
     */
    immediate?: boolean;
    /**
     * @docid
     * @public
     */
    name?: string;
}
/**
 * @docid
 * @inherits ArrayStore
 * @public
 */
export default class LocalStore<
    TItem = any,
    TKey = any,
> extends ArrayStore<TItem, TKey> {
    constructor(options?: Options<TItem, TKey>)
    /**
     * @docid
     * @publicName clear()
     * @public
     */
    clear(): void;
}
