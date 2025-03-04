# Mediasoup server

[![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/Mediasoup-server.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-Mediasoup-server-json)

[Mediasoup](https://mediasoup.org) as a Service

This library offer access to a Mediasoup instance, to be able to use it remotely
in combination of
[Mediasoup client](https://mafalda.io/Mediasoup-client).

## API

Module exports a single function with signature
`async function(mediasoup, {closeOwnWorkers, ...options} = {})`:

- `mediasoup`: object with same API than exported by
  [Mediasoup](https://mediasoup.org) package.
- `[options]`: optional options bag
  - `[announcedIp]`: optional string, IP address to announce to the clients. If
    not provided, the server will try to guess it.
  - `[closeOwnWorkers]`: optional boolean, whether to close the workers created
    by this module when the server is closed. Default `true`.
  - `[listenIps]`: optional array of strings, IP addresses to listen to. Default
    `[]`, which means no globally provided local listen IPs (only the ones
    provided to the Mediasoup `Router.createWebRtcTransport()` method).
  - `[sendFullErrors]`: optional boolean, whether to send full error objects to
    the client. Default `false`.
