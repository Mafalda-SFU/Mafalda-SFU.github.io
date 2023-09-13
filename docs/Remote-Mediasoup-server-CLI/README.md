# Remote Mediasoup server CLI

[![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/Remote-Mediasoup-server-CLI.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-Remote-Mediasoup-server-CLI-json)

[Mediasoup](https://mediasoup.org) as a Service

This CLI tool starts a WebSocket server to offer access to a Mediasoup instance,
to be able to use it remotely in combination of
[Remote Mediasoup client](https://mafalda.io/Remote-Mediasoup-client).

## CLI usage

Options can be provided both as CLI arguments or as environment variables.

- `[announcedIp]`: optional string, IP address to announce to the clients. If
  not provided, the server will try to guess it.
- `[listenIps]`: optional array of strings, IP addresses to listen to. Default
  `[]`, which means no globally provided local listen IPs (only the ones
  provided to the Mediasoup `Router.createWebRtcTransport()` method).
- `[sendFullErrors]`: optional boolean, whether to send full error objects to
  the client. Default `false`.

You can gracefully stop the server with `Ctrl+C` or `Ctrl+D` (`SIGINT` and
`SIGTERM` signals).

## API

Module exports a single function with signature
`async function(mediasoup, {closeOwnWorkers, ...options} = {})`:

- `mediasoup`: object with same API than exported by
  [Mediasoup](https://mediasoup.org) package.
- `[options]`: obtional options bag
  - `[argv]`: obtional array of strings, arguments to parse. Same ones of the
    [CLI usage](#cli-usage), including leading dashes on keys, and being key and
    value in two strings or a single one if joined with `=`. Default
    `process.argv`.
  - `[closeOwnWorkers]`: optional boolean, whether to close the workers created
    by this module when the server is closed. Default `false`, when using
    [CLI](#cli-usage) set unconditionally to `true`.
  - `[env]`: obtional object, environment variables to use. Default
    `process.env`.
