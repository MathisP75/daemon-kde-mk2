import type { MemFsEditor } from 'mem-fs-editor';
import type { StorageRecord, StorageValue } from '../types.js';
export type StorageOptions = {
    name?: string;
    /**
     * Set true to treat name as a lodash path.
     */
    lodashPath?: boolean;
    /**
     * Set true to disable json object cache.
     */
    disableCache?: boolean;
    /**
     * Set true to cleanup cache for every fs change.
     */
    disableCacheByFile?: boolean;
    /**
     * Set true to write sorted json.
     */
    sorted?: boolean;
};
/**
 * Storage instances handle a json file where Generator authors can store data.
 *
 * The `Generator` class instantiate the storage named `config` by default.
 *
 * @constructor
 * @param name     The name of the new storage (this is a namespace)
 * @param fs  A mem-fs editor instance
 * @param configPath The filepath used as a storage.
 *
 * @example
 * class extend Generator {
 *   writing: function() {
 *     this.config.set('coffeescript', false);
 *   }
 * }
 */
declare class Storage {
    path: string;
    name?: string;
    fs: MemFsEditor;
    indent: number;
    lodashPath: boolean;
    disableCache: boolean;
    disableCacheByFile: boolean;
    sorted: boolean;
    existed: boolean;
    _cachedStore?: StorageRecord;
    constructor(name: string | undefined, fs: MemFsEditor, configPath: string, options?: StorageOptions);
    constructor(fs: MemFsEditor, configPath: string, options?: StorageOptions);
    /**
     * @protected
     * @return the store content
     */
    readContent(): StorageRecord;
    /**
     * @protected
     * @return the store content
     */
    writeContent(fullStore: StorageValue): string;
    /**
     * Return the current store as JSON object
     * @return the store content
     * @private
     */
    get _store(): StorageRecord;
    /**
     * Persist a configuration to disk
     * @param val - current configuration values
     * @private
     */
    _persist(value: StorageRecord): void;
    /**
     * Save a new object of values
     */
    save(): void;
    /**
     * Get a stored value
     * @param key  The key under which the value is stored.
     * @return The stored value. Any JSON valid type could be returned
     */
    get<T extends StorageValue = StorageValue>(key: string): T;
    /**
     * Get a stored value from a lodash path
     * @param path  The path under which the value is stored.
     * @return The stored value. Any JSON valid type could be returned
     */
    getPath<T extends StorageValue = StorageValue>(path: string): T;
    /**
     * Get all the stored values
     * @return key-value object
     */
    getAll(): StorageRecord;
    /**
     * Assign a key to a value and schedule a save.
     * @param key  The key under which the value is stored
     * @param val  Any valid JSON type value (String, Number, Array, Object).
     * @return val  Whatever was passed in as val.
     */
    set<V = StorageValue>(value: V): V;
    set<V = StorageValue>(key: string | number, value?: V): V | undefined;
    /**
     * Assign a lodash path to a value and schedule a save.
     * @param path  The key under which the value is stored
     * @param val  Any valid JSON type value (String, Number, Array, Object).
     * @return val  Whatever was passed in as val.
     */
    setPath(path: string | number, value: StorageValue): import("json-schema").JSONSchema7Type;
    /**
     * Delete a key from the store and schedule a save.
     * @param key  The key under which the value is stored.
     */
    delete(key: string): void;
    /**
     * Setup the store with defaults value and schedule a save.
     * If keys already exist, the initial value is kept.
     * @param defaults  Key-value object to store.
     * @return val  Returns the merged options.
     */
    defaults(defaults: StorageRecord): StorageRecord;
    /**
     * @param defaults  Key-value object to store.
     * @return val  Returns the merged object.
     */
    merge(source: StorageRecord): StorageRecord;
    /**
     * Create a child storage.
     * @param path - relative path of the key to create a new storage.
     *                         Some paths need to be escaped. Eg: ["dotted.path"]
     * @return Returns a new Storage.
     */
    createStorage(path: string): Storage;
    /**
     * Creates a proxy object.
     * @return proxy.
     */
    createProxy(): StorageRecord;
}
export default Storage;
