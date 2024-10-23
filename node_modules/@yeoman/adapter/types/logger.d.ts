import type { format } from 'node:util';

/**
 * Provides default color-categories.
 */
export type DefaultLoggerCategories = 'skip' | 'force' | 'create' | 'invoke' | 'conflict' | 'identical' | 'info' | 'added' | 'removed';

export type ColoredMessage<Color extends string | number | symbol = DefaultLoggerCategories> = {
  /**
   * Text content.
   */
  message: string;
  /**
   * Color to apply.
   */
  color?: Color;
};

/**
 * Provides the functionality to log messages.
 */
export type Logger<LoggerCategories extends string | number | symbol = DefaultLoggerCategories> = {
  /**
   * Logs a message of the specified category.
   */
  [P in LoggerCategories]: (...arguments_: Parameters<typeof format>) => Logger<LoggerCategories>;
} & {
  /**
   * Writes a log-message.
   *
   * @param format
   * The format of the log-messages.
   * See <https://github.com/mikeal/logref> for more info.
   *
   * @param params
   * The parameters to replace variables with.
   */
  (format?: string, parameters?: Record<string, any>): Logger<LoggerCategories>;

  /**
   * Writes a log-message.
   */
  (message?: any, ...optionalParameters: any[]): Logger<LoggerCategories>;

  /**
   * Writes a log-message.
   */
  write(...arguments_: Parameters<typeof format>): Logger<LoggerCategories>;

  /**
   * Writes a log-message with an appended newline character.
   */
  writeln(...arguments_: Parameters<typeof format>): Logger<LoggerCategories>;

  /**
   * Writes a success status with a check mark `✔`.
   */
  ok(...arguments_: Parameters<typeof format>): Logger<LoggerCategories>;

  /**
   * Writes an error-message with a prepended cross mark.
   */
  error(...arguments_: Parameters<typeof format>): Logger<LoggerCategories>;

  /**
   * @since `yeoman-environment` version 3.17.0
   * Shows a colored message.
   */
  colored(coloredMessage: Array<ColoredMessage<LoggerCategories>>): Logger<LoggerCategories>;
};
