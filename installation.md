# Installation
iotame can be installed globally either via `npm install -g iotame` or `yarn global add iotame`.

::: warning
Currently extensions are not installed automatically. Therefore you will have to run either `npm install` or `yarn` in your `extensions` directory, i.e. `~/.iotame/extensions`.
:::

### Home directory
iotame stores its user configuration files in a different path, which defaults to `~/.iotame`. If you would like to change this directory, set the `IOTAME_HOME` environment variable to the new path prior to installing and launching iotame.
