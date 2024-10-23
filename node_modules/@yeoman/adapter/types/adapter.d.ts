import type { DistinctQuestion, Answers as InquirerAnswers } from 'inquirer';
import type { Logger } from './logger.js';

/**
 * Represents an answer-hash.
 */
export type PromptAnswers = InquirerAnswers;

export type PromptQuestion<A extends PromptAnswers = PromptAnswers> = DistinctQuestion<A>;

/**
 * Provides a set of questions.
 */
export type PromptQuestions<A extends PromptAnswers = PromptAnswers> = PromptQuestion<A> | Array<PromptQuestion<A>>; // | Observable<Question<A>>;

/**
 * Abstraction layer that defines the I/O interactions.
 *
 * It provides a CLI interaction
 */
export type InputOutputAdapter = {
  /**
   * A component for logging messages.
   */
  log: Logger;

  /**
   * Prompts the user for one or more questions.
   *
   * @param questions The questions to prompt.
   * @param initialAnswers Initial answers.
   */
  prompt<A extends PromptAnswers = PromptAnswers>(questions: PromptQuestions<A>, initialAnswers?: Partial<A>): Promise<A>;

  /**
   * Close underline inputs.
   */
  close(): void;
};

type Task<TaskResultType> =
  | ((adapter: InputOutputAdapter) => PromiseLike<TaskResultType>)
  | ((adapter: InputOutputAdapter) => TaskResultType);

export type ProgressCallback<ReturnType> = (progress: {
  step: (prefix: string, message: string, ...arguments_: any[]) => void;
}) => ReturnType;
export type ProgressOptions = { disabled?: boolean; name?: string };

export type QueuedAdapter = InputOutputAdapter & {
  queue<TaskResultType>(function_: Task<TaskResultType>): Promise<void | TaskResultType>;
  progress<ResultType>(function_: ProgressCallback<ResultType>, options?: ProgressOptions): Promise<void | ResultType>;
};
