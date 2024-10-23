import type { BaseGenerator } from '../generator.js';
export declare class PackageJsonMixin {
    /**
     * Resolve the dependencies to be added to the package.json.
     */
    _resolvePackageJsonDependencies(this: BaseGenerator, dependencies: string | string[] | Record<string, string>): Promise<Record<string, string>>;
    /**
     * Add dependencies to the destination the package.json.
     *
     * Environment watches for package.json changes at `this.env.cwd`, and triggers an package manager install if it has been committed to disk.
     * If package.json is at a different folder, like a changed generator root, propagate it to the Environment like `this.env.cwd = this.destinationPath()`.
     *
     * @param dependencies
     */
    addDependencies(this: BaseGenerator, dependencies: string | string[] | Record<string, string>): Promise<Record<string, string>>;
    /**
     * Add dependencies to the destination the package.json.
     *
     * Environment watches for package.json changes at `this.env.cwd`, and triggers an package manager install if it has been committed to disk.
     * If package.json is at a different folder, like a changed generator root, propagate it to the Environment like `this.env.cwd = this.destinationPath()`.
     *
     * @param dependencies
     */
    addDevDependencies(this: BaseGenerator, devDependencies: string | string[] | Record<string, string>): Promise<Record<string, string>>;
}
