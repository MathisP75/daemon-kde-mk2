import { execa, execaCommand, execaCommandSync, execaSync, } from 'execa';
export class SpawnCommandMixin {
    spawnCommand(command, args, opt) {
        if (Array.isArray(args) || (opt && args === undefined)) {
            return this.spawn(command, args, opt);
        }
        return execaCommand(command, {
            stdio: 'inherit',
            cwd: this.destinationRoot(),
            ...args,
        });
    }
    spawn(command, args, opt) {
        return execa(command, args, {
            stdio: 'inherit',
            cwd: this.destinationRoot(),
            ...opt,
        });
    }
    spawnCommandSync(command, args, opt) {
        if (Array.isArray(args) || (opt && args === undefined)) {
            return this.spawnSync(command, args, opt);
        }
        return execaCommandSync(command, {
            stdio: 'inherit',
            cwd: this.destinationRoot(),
            ...args,
        });
    }
    spawnSync(command, args, opt) {
        return execaSync(command, args, {
            stdio: 'inherit',
            cwd: this.destinationRoot(),
            ...opt,
        });
    }
}
