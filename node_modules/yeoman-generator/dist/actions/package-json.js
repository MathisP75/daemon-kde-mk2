import latestVersion from 'latest-version';
export class PackageJsonMixin {
    /**
     * Resolve the dependencies to be added to the package.json.
     */
    async _resolvePackageJsonDependencies(dependencies) {
        if (typeof dependencies === 'string') {
            dependencies = [dependencies];
        }
        else if (typeof dependencies !== 'object') {
            throw new TypeError('resolvePackageJsonDependencies requires an object');
        }
        const depMap = Array.isArray(dependencies)
            ? Object.fromEntries(dependencies.map(dependency => {
                const lastIndex = dependency.lastIndexOf('@');
                if (lastIndex > 0) {
                    const depName = dependency.slice(0, lastIndex);
                    const version = dependency.slice(lastIndex + 1);
                    return [depName, version];
                }
                return [dependency, undefined];
            }))
            : dependencies;
        return Object.fromEntries(await Promise.all(
        // Make sure to convert empty string too
        Object.entries(depMap).map(async ([pkg, version]) => [pkg, version || (await latestVersion(pkg))])));
    }
    /**
     * Add dependencies to the destination the package.json.
     *
     * Environment watches for package.json changes at `this.env.cwd`, and triggers an package manager install if it has been committed to disk.
     * If package.json is at a different folder, like a changed generator root, propagate it to the Environment like `this.env.cwd = this.destinationPath()`.
     *
     * @param dependencies
     */
    async addDependencies(dependencies) {
        dependencies = await this._resolvePackageJsonDependencies(dependencies);
        this.packageJson.merge({ dependencies });
        return dependencies;
    }
    /**
     * Add dependencies to the destination the package.json.
     *
     * Environment watches for package.json changes at `this.env.cwd`, and triggers an package manager install if it has been committed to disk.
     * If package.json is at a different folder, like a changed generator root, propagate it to the Environment like `this.env.cwd = this.destinationPath()`.
     *
     * @param dependencies
     */
    async addDevDependencies(devDependencies) {
        devDependencies = await this._resolvePackageJsonDependencies(devDependencies);
        this.packageJson.merge({ devDependencies });
        return devDependencies;
    }
}
