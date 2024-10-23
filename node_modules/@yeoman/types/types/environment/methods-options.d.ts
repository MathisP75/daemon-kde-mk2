import type { BaseGenerator, GetGeneratorConstructor, GetGeneratorOptions } from '../index.js';

/**
 * Provides options for the `lookup` method.
 */
export type LookupOptions = {
  /**
   * The paths to look for generators.
   */
  packagePaths?: string[];

  /**
   * The repüository paths to look for generator packages.
   */
  npmPaths?: string[];

  /**
   * The file-patterns to look for.
   */
  filePatterns?: string[];

  /**
   * The package patterns to look for.
   */
  packagePatterns?: string[];

  /**
   * A value indicating whether the lookup should be stopped after finding the first result.
   */
  singleResult?: boolean;

  /**
   * The `deep` option to pass to `globby`.
   */
  globbyDeep?: number;
  /**
   * A value indicating whether globally installed packages should be ignored.
   */
  localOnly?: boolean;
};

/**
 * Provides lookup information about a generator.
 */
export type LookupGeneratorMeta = NotRegisteredLookupGeneratorMeta | RegisteredLookupGeneratorMeta;

export type NotRegisteredLookupGeneratorMeta = Required<BaseGeneratorMeta> & {
  /** Failed to register. */
  registered: false;
};

export type RegisteredLookupGeneratorMeta = Required<BaseGeneratorMeta> &
  GeneratorMeta & {
    /** Successfully registered package. */
    registered: true;
  };

export type BaseGeneratorMeta = {
  /** The key under which the generator can be retrieved */
  namespace: string;
  /** The file path to the generator (used only if generator is a module) */
  resolved?: string;
  /** PackagePath to the generator npm package */
  packagePath?: string;
};

export type GeneratorMeta = BaseGeneratorMeta & {
  packageNamespace?: string;
  /** Import and find the Generator Class */
  importGenerator: () => Promise<GetGeneratorConstructor>;
  /** Import the module `import(meta.resolved)` */
  importModule?: () => Promise<unknown>;
  /** Intantiate the Generator `env.instantiate(await meta.importGenerator())` */
  instantiate: (arguments_?: string[], options?: any) => Promise<BaseGenerator>;
  /** Intantiate the Generator passing help option */
  instantiateHelp: () => Promise<BaseGenerator>;
};

export type InstantiateOptions<G extends BaseGenerator = BaseGenerator> = {
  generatorArgs?: string[];
  generatorOptions?: Partial<Omit<GetGeneratorOptions<G>, 'env' | 'resolved' | 'namespace'>> | undefined;
};

export type ComposeOptions<G extends BaseGenerator = BaseGenerator> = InstantiateOptions<G> & SchedulingOptions<G>;

export type SchedulingOptions<G extends BaseGenerator = BaseGenerator> = {
  /**
   * Creates a new task to queue the composed generator tasks instead of queueing immediately.
   * The task is queued in an Environment’s internal priority which is executed before any generator task.
   * Function is accepted starting from Environment 4.4.0.
   */
  schedule?: boolean | ((generator: G) => boolean);
};
