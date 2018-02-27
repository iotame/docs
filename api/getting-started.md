# Getting Started
Write your own iotame extension.

### Extension discovery
If you want your extension to be discoverable by [`@iotame/installer`](https://github.com/iotame/installer), you will need to publish your extension on npm and give it the keyword `iotame:extension`.

##### Whitelisted extensions
Any extension listed in the installer's `whitelisted.json` can be considered safe to use and is automatically displayed as such. Any other extensions can still be installed, but users are encouraged to prefer whitelisted ones whenever possible. 

In order to get your extension whitelisted, submit a PR to master, adding a singular extension with its name (as published on npm) and current version. Your extension's code will then be inspected to make sure it is safe for end-users.
