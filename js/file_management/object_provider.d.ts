import FileSystemProviderBase, {
    FileSystemProviderBaseOptions,
} from './provider_base';

/**
 * @deprecated Use Options instead
 * @namespace DevExpress.fileManagement
 */
export type ObjectFileSystemProviderOptions = Options;

/**
 * @public
 * @docid
 */
export interface Options extends FileSystemProviderBaseOptions<ObjectFileSystemProvider> {
    /**
     * @docid
     * @public
     */
    contentExpr?: string | Function;
    /**
     * @docid
     * @public
     */
    data?: Array<any>;
    /**
     * @docid
     * @public
     */
    itemsExpr?: string | Function;
}
/**
 * @docid
 * @inherits FileSystemProviderBase
 * @namespace DevExpress.fileManagement
 * @public
 */
export default class ObjectFileSystemProvider extends FileSystemProviderBase {
    constructor(options?: Options)
}
