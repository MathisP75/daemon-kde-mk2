import type { BaseGenerator, BaseGeneratorConstructor } from './generator.js';

export type GetGeneratorOptions<T extends BaseGenerator = BaseGenerator> = T extends BaseGenerator<infer Options> ? Options : never;

export type GetGeneratorFeatures<T extends BaseGenerator = BaseGenerator> = T extends BaseGenerator<any, infer features> ? features : never;

export type GetGeneratorConstructor<T extends BaseGenerator = BaseGenerator> = BaseGeneratorConstructor<
  GetGeneratorOptions<T>,
  GetGeneratorFeatures<T>
>;
