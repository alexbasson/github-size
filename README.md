# Github Size

This script computes the disk size of a list of Github orgs.

## Installation

This script requires [`node`](https://nodejs.org/en/); if you don't have `node` installed, install that first.

Then:
```shell script
$ git clone https://github.com/alexbasson/github-size.git
$ cd github-size
$ npm install
```

## Usage

Run this command from the `github-size` directory:

```shell script
$ ./github-size.js
```

This script does not *require* authentication. If you do not provide authentication, then it will compute the disk size used by the **public** repositories under the orgs.

If you want to include the private repositories, do this:

1. Generate a [Github personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).
1. Once you have the token, open up `github-size.js` in a editor and find this line:
    ```javascript
    const TOKEN = ''; // replace '' with your personal access token
    ```
1. Fill in the empty string with your personal access token:
    ```javascript
    const TOKEN = 'YOUR PERSONAL ACCESS TOKEN HERE'; // replace '' with your personal access token
    ```

The script should then compute the disk size of both public and private repos under the given organizations.
