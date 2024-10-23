import { type ExecaChildProcess, type Options as ExecaOptions, type ExecaSyncReturnValue, type SyncOptions } from 'execa';
export declare class SpawnCommandMixin {
    /**
     * Normalize a command across OS and spawn it (asynchronously).
     *
     * @param command program to execute
     * @param opt execa options options
     * @see https://github.com/sindresorhus/execa#execacommandcommand-options
     */
    spawnCommand(command: string, opt?: ExecaOptions): ExecaChildProcess;
    spawnCommand(command: string, opt?: ExecaOptions<undefined>): ExecaChildProcess<Buffer>;
    /**
     * @deprecated use `spawn` for file with args execution
     * Normalize a command across OS and spawn it (asynchronously).
     *
     * @param command program to execute
     * @param args list of arguments to pass to the program
     * @param opt execa options options
     */
    spawnCommand(command: string, args?: readonly string[], opt?: ExecaOptions): ExecaChildProcess;
    /**
     * @deprecated use `spawn` for file with args execution
     * Normalize a command across OS and spawn it (asynchronously).
     *
     * @param command program to execute
     * @param args list of arguments to pass to the program
     * @param opt execa options options
     */
    spawnCommand(command: string, args?: readonly string[], opt?: ExecaOptions<undefined>): ExecaChildProcess<Buffer>;
    /**
     * Normalize a command across OS and spawn it (asynchronously).
     *
     * @param command program to execute
     * @param args list of arguments to pass to the program
     * @param opt execa options options
     * @see https://github.com/sindresorhus/execa#execafile-arguments-options
     */
    spawn(command: string, args?: readonly string[], opt?: ExecaOptions): ExecaChildProcess;
    spawn(command: string, args?: readonly string[], opt?: ExecaOptions<undefined>): ExecaChildProcess<Buffer>;
    /**
     * Normalize a command across OS and spawn it (synchronously).
     *
     * @param command program to execute
     * @param opt execa options options
     * @see https://github.com/sindresorhus/execa#execacommandsynccommand-options
     */
    spawnCommandSync(command: string, opt?: SyncOptions): ExecaSyncReturnValue;
    spawnCommandSync(command: string, opt?: SyncOptions<undefined>): ExecaSyncReturnValue<Buffer>;
    /**
     * @deprecated use `spawnSync` for file with args execution
     * Normalize a command across OS and spawn it (synchronously).
     *
     * @param command program to execute
     * @param args list of arguments to pass to the program
     * @param opt execa options options
     */
    spawnCommandSync(command: string, args?: readonly string[], opt?: SyncOptions): ExecaSyncReturnValue;
    /**
     * @deprecated use `spawnSync` for file with args execution
     * Normalize a command across OS and spawn it (synchronously).
     *
     * @param command program to execute
     * @param args list of arguments to pass to the program
     * @param opt execa options options
     */
    spawnCommandSync(command: string, args?: readonly string[], opt?: SyncOptions<undefined>): ExecaSyncReturnValue<Buffer>;
    /**
     * Normalize a command across OS and spawn it (synchronously).
     *
     * @param command program to execute
     * @param args list of arguments to pass to the program
     * @param opt execa options options
     * @see https://github.com/sindresorhus/execa#execafile-arguments-options
     */
    spawnSync(command: string, args?: readonly string[], opt?: SyncOptions): ExecaSyncReturnValue;
    spawnSync(command: string, args?: readonly string[], opt?: SyncOptions<undefined>): ExecaSyncReturnValue<Buffer>;
}
