import { type SimpleGit } from 'simple-git';
declare class GitUtil {
    #private;
    constructor(parent: {
        get simpleGit(): SimpleGit;
    });
    /**
     * Retrieves user's name from Git in the global scope or the project scope
     * (it'll take what Git will use in the current context)
     * @return {Promise<string>} configured git name or undefined
     */
    name(): Promise<string | undefined>;
    /**
     * Retrieves user's email from Git in the global scope or the project scope
     * (it'll take what Git will use in the current context)
     * @return {Promise<string>} configured git email or undefined
     */
    email(): Promise<string | undefined>;
}
export declare abstract class GitMixin {
    _git?: GitUtil;
    get git(): GitUtil;
    get github(): {
        /**
         * Retrieves GitHub's username from the GitHub API
         * @return Resolved with the GitHub username or rejected if unable to
         *                   get the information
         */
        username: () => Promise<string | undefined>;
    };
}
export {};
