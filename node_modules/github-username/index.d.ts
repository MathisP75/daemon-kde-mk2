export interface Options {
	/**
	GitHub [personal access token](https://github.com/settings/tokens/new).
	*/
	readonly token?: string;
}

/**
Get the GitHub username from an email address if the email can be found in any commits on GitHub.

@param email - The email address for the user of whom you want the username.
@returns The username for the `email` or `undefined` if it cannot be found.

@example
```
import githubUsername from 'github-username';

console.log(await githubUsername('sindresorhus@gmail.com'));
//=> 'sindresorhus'
```
*/
export default function githubUsername(email: string, options?: Options): Promise<string | undefined>;
