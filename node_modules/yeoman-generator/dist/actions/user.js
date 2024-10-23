import githubUsername from 'github-username';
class GitUtil {
    #parent;
    constructor(parent) {
        this.#parent = parent;
    }
    /**
     * Retrieves user's name from Git in the global scope or the project scope
     * (it'll take what Git will use in the current context)
     * @return {Promise<string>} configured git name or undefined
     */
    async name() {
        const { value } = await this.#parent.simpleGit.getConfig('user.name');
        return value ?? undefined;
    }
    /**
     * Retrieves user's email from Git in the global scope or the project scope
     * (it'll take what Git will use in the current context)
     * @return {Promise<string>} configured git email or undefined
     */
    async email() {
        const { value } = await this.#parent.simpleGit.getConfig('user.email');
        return value ?? undefined;
    }
}
export class GitMixin {
    _git;
    get git() {
        if (!this._git) {
            this._git = new GitUtil(this);
        }
        return this._git;
    }
    get github() {
        return {
            /**
             * Retrieves GitHub's username from the GitHub API
             * @return Resolved with the GitHub username or rejected if unable to
             *                   get the information
             */
            username: async () => {
                const email = await this.git.email();
                return email ? githubUsername(email) : email;
            },
        };
    }
}
