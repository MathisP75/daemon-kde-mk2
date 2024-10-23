import { EventEmitter } from 'node:events';
import * as _ from 'lodash-es';
import createDebug from 'debug';
import { type MemFsEditor } from 'mem-fs-editor';
import { type YeomanNamespace } from '@yeoman/namespace';
import type { BaseEnvironment, BaseGenerator as GeneratorApi, Logger, QueuedAdapter } from '@yeoman/types';
import type { ArgumentSpec, BaseFeatures, BaseOptions, CliOptionSpec, Priority } from './types.js';
import type { PromptAnswers, PromptQuestions, QuestionRegistrationOptions } from './questions.js';
import Storage, { type StorageOptions } from './util/storage.js';
import { FsMixin } from './actions/fs.js';
import { HelpMixin } from './actions/help.js';
import { PackageJsonMixin } from './actions/package-json.js';
import { SpawnCommandMixin } from './actions/spawn-command.js';
import { GitMixin } from './actions/user.js';
import { TasksMixin } from './actions/lifecycle.js';
type Environment = BaseEnvironment<QueuedAdapter>;
export declare class BaseGenerator<O extends BaseOptions = BaseOptions, F extends BaseFeatures = BaseFeatures> extends EventEmitter implements Omit<GeneratorApi<O, F>, 'features'> {
    readonly options: O;
    readonly _initOptions: O;
    readonly _args: string[];
    readonly _options: Record<string, CliOptionSpec>;
    readonly _arguments: ArgumentSpec[];
    readonly _prompts: QuestionRegistrationOptions[];
    readonly _namespace: string;
    readonly _namespaceId?: YeomanNamespace;
    readonly _customPriorities?: Priority[];
    readonly resolved: string;
    description: string;
    contextRoot: string;
    readonly _debug: createDebug.Debugger;
    readonly env: Environment;
    readonly fs: MemFsEditor;
    readonly log: Logger;
    readonly _: typeof _;
    appname: string;
    args: string[];
    /** @deprecated */
    arguments: string[];
    _destinationRoot: string;
    _sourceRoot: string;
    generatorConfig?: Storage;
    instanceConfig?: Storage;
    _config?: Storage;
    _packageJson?: Storage;
    _globalConfig: Storage;
    static get queues(): string[];
    _running: boolean;
    readonly features: F;
    readonly yoGeneratorVersion: string;
    /**
     * @classdesc The `Generator` class provides the common API shared by all generators.
     * It define options, arguments, file, prompt, log, API, etc.
     *
     * It mixes into its prototype all the methods found in the `actions/` mixins.
     *
     * Every generator should extend this base class.
     *
     * @param args           - Provide arguments at initialization
     * @param options          - Provide options at initialization
     * @param features         - Provide Generator features information
     *
     * @example
     * import Generator from 'yeoman-generator';
     * module.exports = class extends Generator {
     *   writing() {
     *     this.fs.write(this.destinationPath('index.js'), 'const foo = 1;');
     *   }
     * };
     */
    constructor(options: O, features?: F);
    constructor(args: string[], options: O, features?: F);
    /**
     * Configure Generator behaviours.
     *
     * @param features
     * @param features.unique - Generates a uniqueBy id for the environment
     *                                    Accepts 'namespace' or 'true' for one instance by namespace
     *                                    Accepts 'argument' for one instance by namespace and 1 argument
     *
     */
    setFeatures(features: F): void;
    /**
     * Specifications for Environment features.
     */
    getFeatures(): F;
    checkEnvironmentVersion(version: string, warning?: boolean): boolean | undefined;
    checkEnvironmentVersion(packageDependency: string, version: string, warning?: boolean): boolean | undefined;
    /**
     * Convenience debug method
     *
     * @param parameters to be passed to debug
     */
    debug(formater: any, ...args: any[]): void;
    /**
     * Register stored config prompts and optional option alternative.
     *
     * @param questions - Inquirer question or questions.
     * @param questions.exportOption - Additional data to export this question as an option.
     * @param question.storage - Storage to store the answers.
     */
    registerConfigPrompts(questions: QuestionRegistrationOptions[]): void;
    /**
     * Prompt user to answer questions. The signature of this method is the same as {@link https://github.com/SBoudrias/Inquirer.js Inquirer.js}
     *
     * On top of the Inquirer.js API, you can provide a `{store: true}` property for
     * every question descriptor. When set to true, Yeoman will store/fetch the
     * user's answers as defaults.
     *
     * @param questions  Array of question descriptor objects. See {@link https://github.com/SBoudrias/Inquirer.js/blob/master/README.md Documentation}
     * @param questions.storage Storage object or name (generator property) to be used by the question to store/fetch the response.
     * @param storage Storage object or name (generator property) to be used by default to store/fetch responses.
     * @return prompt promise
     */
    prompt<A extends PromptAnswers = PromptAnswers>(questions: PromptQuestions<A>, storage?: string | Storage): Promise<A>;
    /**
     * Adds an option to the set of generator expected options, only used to
     * generate generator usage. By default, generators get all the cli options
     * parsed by nopt as a `this.options` hash object.
     *
     * @param name - Option name
     * @param config - Option options
     * @param config.type - Either Boolean, String or Number
     * @param config.description - Description for the option
     * @param config.default - Default value
     * @param config.alias - Option name alias (example `-h` and --help`)
     * @param config.hide - Boolean whether to hide from help
     * @param config.storage - Storage to persist the option
     * @return This generator
     */
    option(name: string | CliOptionSpec | CliOptionSpec[], config?: Partial<Omit<CliOptionSpec, 'name'>>): this | undefined;
    /**
     * Adds an argument to the class and creates an attribute getter for it.
     *
     * Arguments are different from options in several aspects. The first one
     * is how they are parsed from the command line, arguments are retrieved
     * based on their position.
     *
     * Besides, arguments are used inside your code as a property (`this.argument`),
     * while options are all kept in a hash (`this.options`).
     *
     *
     * @param name - Argument name
     * @param config - Argument options
     * @return This generator
     */
    argument(name: string, config?: Partial<ArgumentSpec>): this;
    parseOptions(): void;
    checkRequiredArgs(): void;
    /**
     * Generator config Storage.
     */
    get config(): Storage;
    /**
     * Package.json Storage resolved to `this.destinationPath('package.json')`.
     *
     * Environment watches for package.json changes at `this.env.cwd`, and triggers an package manager install if it has been committed to disk.
     * If package.json is at a different folder, like a changed generator root, propagate it to the Environment like `this.env.cwd = this.destinationPath()`.
     *
     * @example
     * this.packageJson.merge({
     *   scripts: {
     *     start: 'webpack --serve',
     *   },
     *   dependencies: {
     *     ...
     *   },
     *   peerDependencies: {
     *     ...
     *   },
     * });
     */
    get packageJson(): Storage;
    /**
     * Runs the generator, scheduling prototype methods on a run queue. Method names
     * will determine the order each method is run. Methods without special names
     * will run in the default queue.
     *
     * Any method named `constructor` and any methods prefixed by a `_` won't be scheduled.
     *
     * @return Resolved once the process finish
     */
    run(): Promise<void>;
    /**
     * Determine the root generator name (the one who's extending Generator).
     * @return The name of the root generator
     */
    rootGeneratorName(): string;
    /**
     * Determine the root generator version (the one who's extending Generator).
     * @return The version of the root generator
     */
    rootGeneratorVersion(): string;
    /**
     * Return a storage instance.
     * @param storePath  The path of the json file
     * @param options storage options or the storage name
     */
    createStorage(storePath: string, options?: string | StorageOptions): Storage;
    /**
     * Return a storage instance.
     * @param rootName The rootName in which is stored inside .yo-rc.json
     * @param options Storage options
     * @return Generator storage
     */
    _getStorage(rootName?: string | StorageOptions, options?: StorageOptions): Storage;
    /**
     * Setup a globalConfig storage instance.
     * @return Global config storage
     */
    _getGlobalStorage(): Storage;
    /**
     * Change the generator destination root directory.
     * This path is used to find storage, when using a file system helper method (like
     * `this.write` and `this.copy`)
     * @param rootPath new destination root path
     * @return destination root path
     */
    destinationRoot(rootPath?: string): string;
    /**
     * Get or change the generator source root directory.
     * This path is used by multiples file system methods like (`this.read` and `this.copy`)
     * @param rootPath new source root path
     */
    sourceRoot(rootPath?: string): string;
    /**
     * Join a path to the source root.
     * @param dest - path parts
     * @return joined path
     */
    templatePath(...dest: string[]): string;
    /**
     * Join a path to the destination root.
     * @param dest - path parts
     * @return joined path
     */
    destinationPath(...dest: string[]): string;
    /**
     * Determines the name of the application.
     *
     * First checks for name in bower.json.
     * Then checks for name in package.json.
     * Finally defaults to the name of the current directory.
     * @return The name of the application
     */
    determineAppname(): string;
}
export interface BaseGenerator extends FsMixin, HelpMixin, PackageJsonMixin, SpawnCommandMixin, GitMixin, TasksMixin, EventEmitter {
}
export default BaseGenerator;
