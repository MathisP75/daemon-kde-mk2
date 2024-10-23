import type { PromptAnswers, PromptQuestion } from '../questions.js';
import type Storage from './storage.js';
/**
 * Prefill the defaults with values from the global store
 *
 * @param store     `.yo-rc-global` global config
 * @param questions Original prompt questions
 * @return Prompt questions array with prefilled values.
 */
export declare const prefillQuestions: <A extends PromptAnswers = PromptAnswers>(store: Storage, questions: Array<PromptQuestion<A>>) => PromptQuestion<A>[];
/**
 * Store the answers in the global store
 *
 * @param store     `.yo-rc-global` global config
 * @param questions Original prompt questions
 * @param answers   The inquirer answers
 * @param storeAll  Should store default values
 */
export declare const storeAnswers: (store: Storage, questions: any, answers: PromptAnswers, storeAll: boolean) => void;
