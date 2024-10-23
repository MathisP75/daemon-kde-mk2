import type { ArgumentSpec, CliOptionSpec } from '../types.js';
import type BaseGenerator from '../generator.js';
export declare class HelpMixin {
    readonly _options: Record<string, CliOptionSpec>;
    readonly _arguments: ArgumentSpec[];
    /**
     * Tries to get the description from a USAGE file one folder above the
     * source root otherwise uses a default description
     *
     * @return Help message of the generator
     */
    help(this: BaseGenerator): string;
    /**
     * Output usage information for this given generator, depending on its arguments
     * or options
     *
     * @return Usage information of the generator
     */
    usage(this: BaseGenerator): string;
    /**
     * Simple setter for custom `description` to append on help output.
     *
     * @param description
     */
    desc(this: BaseGenerator, description: string): BaseGenerator<import("../types.js").BaseOptions, import("../types.js").BaseFeatures>;
    /**
     * Get help text for arguments
     * @returns Text of options in formatted table
     */
    argumentsHelp(this: BaseGenerator): string;
    /**
     * Get help text for options
     * @returns Text of options in formatted table
     */
    optionsHelp(this: BaseGenerator): string;
}
