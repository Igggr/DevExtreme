import Store, {
    Options as StoreOptions,
} from './abstract_store';
import { Query } from './query';

/**
 *  @namespace DevExpress.data
 * @deprecated Use Options instead
 */
export type ArrayStoreOptions<
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
> extends StoreOptions<TItem, TKey> {
    /**
     * @docid
     * @public
     */
    data?: Array<TItem>;
}
/**
 * @docid
 * @inherits Store
 * @public
 */
export default class ArrayStore<
    TItem = any,
    TKey = any,
> extends Store<TItem, TKey> {
    constructor(options?: Options<TItem, TKey>)
    /**
     * @docid
     * @publicName clear()
     * @public
     */
    clear(): void;
    /**
     * @docid
     * @publicName createQuery()
     * @return object
     * @public
     */
    createQuery(): Query;
}
