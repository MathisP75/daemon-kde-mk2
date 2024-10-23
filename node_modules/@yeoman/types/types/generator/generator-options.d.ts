import type { BaseEnvironment } from '../environment/environment.js';

export type GeneratorCustomOptions = Record<string, unknown>;

export type BaseGeneratorOptions = {
  /**
   * Skip package manager install task.
   */
  skipInstall?: boolean;

  /**
   * Fail on package manager install task failure.
   */
  forceInstall?: boolean;

  /**
   * Skip working dir cacheable prompts cache.
   */
  skipCache?: boolean;

  /**
   * Skip working dir cacheable prompts cache.
   */
  skipLocalCache?: boolean;

  /**
   * Skip options parsing.
   * Options is already parsed.
   */
  skipParseOptions?: boolean;

  /**
   * Store global storage at working dir.
   */
  localConfigOnly?: boolean;

  /**
   * Show prompts for already answered questions.
   */
  askAnswered?: boolean;
};

type GeneratorNamespace = {
  namespace: string;
};

type GeneratorEnvironmentOptions = {
  help?: boolean;

  /** Environment being to run */
  env: BaseEnvironment;

  /** The path to the current generator */
  resolved: string;
};

type GeneratorHelpOptions<H extends boolean | undefined> = {
  help: H;
};

export type GeneratorOptions = BaseGeneratorOptions &
  GeneratorNamespace &
  (
    | (GeneratorHelpOptions<false | undefined> & GeneratorEnvironmentOptions)
    | (GeneratorHelpOptions<true> & Partial<GeneratorEnvironmentOptions>)
  );
