# github-username

> Get a GitHub username from an email address

## Install

```sh
npm install github-username
```

## Usage

```js
import githubUsername from 'github-username';

console.log(await githubUsername('sindresorhus@gmail.com'));
//=> 'sindresorhus'
```

## API

### githubUsername(email, options?)

Get the GitHub username from an email address if the email can be found in any commits on GitHub.

Returns a `Promise<string?>` with the username.

#### email

Type: `string`

The email address for the user of whom you want the username.

#### options

Type: `object`

##### token

Type: `string`

GitHub [personal access token](https://github.com/settings/tokens/new).

## Related

- [github-username-cli](https://github.com/sindresorhus/github-username-cli) - CLI for this module
