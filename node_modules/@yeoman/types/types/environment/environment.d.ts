import type { PipelineSource, Transform } from 'node:stream';
import type { Store } from 'mem-fs';
import type { MemFsEditorFile } from 'mem-fs-editor';

import type { BaseGeneratorOptions } from '../generator/generator-options.js';
import type { BaseGenerator, BaseGeneratorConstructor } from '../generator/generator.js';
import type { GetGeneratorConstructor } from '../generator/utils.js';
import type { InputOutputAdapter } from '@yeoman/adapter/types';
import type {
  BaseGeneratorMeta,
  ComposeOptions,
  GeneratorMeta,
  InstantiateOptions,
  LookupGeneratorMeta,
  LookupOptions,
} from './methods-options.js';

export type EnvironmentConstructor<A extends InputOutputAdapter = InputOutputAdapter> = new (
  options?: BaseEnvironmentOptions<A>,
  /** @deprecated */
  adapter?: A,
) => BaseEnvironment<A>;

export type BaseEnvironmentOptions<A extends InputOutputAdapter = InputOutputAdapter> = BaseGeneratorOptions & {
  /**
   * The working-directory of the environment.
   */
  cwd?: string | undefined;

  /**
   * The working-directory for logs.
   */
  logCwd?: string | undefined;

  /**
   * A value indicating whether the experimental features should be enabled.
   */
  experimental?: boolean;

  /**
   * Options to pass to every generator instantiated by this Environment.
   */
  sharedOptions?: BaseGeneratorOptions;

  /**
   * `mem-fs` Store.
   */
  sharedFs?: Store;

  /**
   * Input/Output adapter.
   */
  adapter?: A;
};

export type ApplyTransformsOptions = {
  name?: string;
  log?: boolean;
  stream?: PipelineSource<any>;
  streamOptions?: Parameters<Store<MemFsEditorFile>['stream']>[0];
};

/**
 * BaseEnvironment provides the api used by yeoman-test and yeoman-generator that should remain stable between major yeoman-environment versions.
 */
export type BaseEnvironment<A = InputOutputAdapter, S extends Store<MemFsEditorFile> = Store<MemFsEditorFile>> = {
  cwd: string;
  adapter: A;
  sharedFs: S;
  /**
   * The working-directory for logs.
   */
  logCwd: string;

  emit(eventName: string | symbol, ...arguments_: any[]): boolean;
  on(eventName: string | symbol, listener: (...arguments_: any[]) => void): unknown;
  once(eventName: string | symbol, listener: (...arguments_: any[]) => void): unknown;

  applyTransforms(transformStreams: Transform[], options?: ApplyTransformsOptions): Promise<void>;

  /**
   * Gets a single constructor of a generator from the registered list of generators.
   *
   * The lookup is based on generator's namespace, "walking up" the namespaces until a matching is found.
   * Eg. if an `angular:common` namespace is registered, and we try to get `angular:common:all`,
   * then we get `angular:common` as a fallback (unless an `angular:common:all` generator is registered).
   *
   * @param namespaceOrPath The namespace of the generator or the path to a generator.
   * @returns The constructor of the generator registered under the namespace.
   */
  get<C extends BaseGeneratorConstructor = BaseGeneratorConstructor>(namespaceOrPath: string): Promise<C | undefined>;

  create<G extends BaseGenerator = BaseGenerator>(
    namespaceOrPath: string | GetGeneratorConstructor<G>,
    instantiateOptions: InstantiateOptions<G>,
  ): Promise<G>;

  instantiate<G extends BaseGenerator = BaseGenerator>(
    generator: GetGeneratorConstructor<G>,
    instantiateOptions: InstantiateOptions<G>,
  ): Promise<G>;

  composeWith<G extends BaseGenerator = BaseGenerator>(
    generator: string | GetGeneratorConstructor<G>,
    composeOptions?: ComposeOptions<G>,
  ): Promise<G>;

  /**
   * Converts the specified `filePath` to a namespace.
   *
   * @param filePath The path to convert.
   * @param lookups The path-part to exclude (such as `lib/generators`).
   */
  namespace(filePath: string, lookups?: string[]): string;

  /**
   * Creates an alias.
   *
   * Alias allows the `get()` and `lookup()` methods to search in alternate filepath for a given namespaces.
   * It's used for example to map `generator-*` npm package to their namespace equivalent (without the generator- prefix),
   * or to default a single namespace like `angular` to `angular:app` or `angular:all`.
   *
   * If multiple aliases are defined, then the replacement is recursive, replacing each alias in reverse order.
   *
   * An alias can be a single String or a Regular Expression.
   * The finding is done based on .match().
   *
   * @param match The name to match.
   * @param value The replacement for the specified `match`.
   *
   * @example
   * env.alias(/^([a-zA-Z0-9:\*]+)$/, 'generator-$1');
   * env.alias(/^([^:]+)$/, '$1:app');
   * env.alias(/^([^:]+)$/, '$1:all');
   * env.alias('foo');
   * // => generator-foo:all
   */
  alias(match: string | RegExp, value: string): void;

  /**
   * Gets the version of this `Environment` object.
   */
  getVersion(): string;

  /**
   * Gets the version of the specified `dependency`.
   *
   * @param dependency The name of the dependency.
   */
  getVersion(dependency: string): string | undefined;

  queueGenerator<G extends BaseGenerator = BaseGenerator>(generator: G, queueOptions?: { schedule?: boolean }): Promise<G>;

  rootGenerator<G extends BaseGenerator = BaseGenerator>(): G;

  runGenerator(generator: BaseGenerator): Promise<void>;

  /**
   * Registers a specific `generator` to this environment.
   * This generator is stored under the provided `namespace` or, if not specified, a default namespace format.
   *
   * @param filePath The filepath to the generator or an npm package name.
   * @param meta Generator metadata.
   */
  register(filePath: string, meta?: Partial<BaseGeneratorMeta>): GeneratorMeta;

  /**
   * Registers a stubbed generator to this environment.
   *
   * @param generator The generator constructor.
   * @param meta Generator metadata.
   */
  register(generator: unknown, meta: BaseGeneratorMeta): GeneratorMeta;

  /**
   * Queue tasks
   * @param priority
   * @param task
   * @param options
   */
  queueTask(
    priority: string,
    task: (...arguments_: any[]) => void | Promise<void>,
    options?: { once?: string; startQueue?: boolean },
  ): void;

  /**
   * Add priority
   * @param priority
   * @param before
   */
  addPriority(priority: string, before?: string): void;

  /**
   * Searches for generators and their sub-generators.
   *
   * A generator is a `:lookup/:name/index.js` file placed inside an npm package.
   *
   * Default lookups are:
   *   - `./`
   *   - `./generators/`
   *   - `./lib/generators/`
   *
   * So the index file `node_modules/generator-dummy/lib/generators/yo/index.js` would be registered as `dummy:yo` generator.
   *
   * @param options The options for the lookup.
   * @returns A list of generators.
   */
  lookup(options?: LookupOptions): Promise<LookupGeneratorMeta[]>;

  /**
   * Returns stored generators meta
   */
  getGeneratorMeta(namespace: string): GeneratorMeta | undefined;
};
