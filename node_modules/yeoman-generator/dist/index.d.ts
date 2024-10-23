import { type SimpleGit } from 'simple-git';
import { BaseGenerator } from './generator.js';
import type { BaseFeatures, BaseOptions } from './types.js';
export type * from './types.js';
export type * from './util/storage.js';
export { default as Storage } from './util/storage.js';
export default class Generator<O extends BaseOptions = BaseOptions, F extends BaseFeatures = BaseFeatures> extends BaseGenerator<O, F> {
    _simpleGit?: SimpleGit;
    constructor(...args: any[]);
    get simpleGit(): SimpleGit;
}
