# Remote Mediasoup client

[![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/Remote-Mediasoup-client.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-Remote-Mediasoup-client-json)

This project host a class that allow to connect to servers offering the
`Remote Mediasoup` API, like
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/),
[Mediasoup proxy](https://mafalda.io/Mediasoup-proxy/), and
[Mediasoup cluster](https://mafalda.io/Mediasoup-cluster/). Once connected, it
provides the [same API](https://mafalda.io/Mediasoup-node-tests) that
[Mediasoup](https://mediasoup.org), but using remote instances instead of a
local one. This allow to use the same code in both cases, and easily migrate
from one to the other, opening the door to scale your `Mediasoup` based
application without having to change your code.

## Install

```sh
npm install --save @mafalda-sfu/remote-mediasoup-client
```

## API

See [API documentation](https://mafalda.io/Remote-Mediasoup-client/API).

## Usage

If you already have a `Mediasoup` based project, to use
`Remote Mediasoup client` on it you'll only need to do two changes in your
project code:

<!--
TODO: add info to replace dependency, updating the package version in the docs
-->

1. Replace the `mediasoup` import for `remote-mediasoup-client`:

   ```diff
   - import mediasoup from 'mediasoup'
   + import RemoteMediasoupClient from 'remote-mediasoup-client'
   ```

2. Create the instance of the `RemoteMediasoupClient` object, wait for its
   `connected` event, and access to the `mediasoup` property:

   ```diff
   + const remoteMediasoupClient = new RemoteMediasoupClient('ws://example')
   +
   + await once(remoteMediasoupClient, 'connected')
   +
   + const {mediasoup} = remoteMediasoupClient
   ```

After that, the `mediasoup` variable will have an object that's API compatible
with the [Mediasoup API](https://mediasoup.org/documentation/v3/mediasoup/api/)
provided by the [`Mediasoup` package](https://www.npmjs.com/package/mediasoup).

## Known bugs (AKA "features")

- On Mediasoup API, `close()` method (and `send()` method, and also change of
  content of `appData` properties) from `Mediasoup` objects are synchronous,
  once you call them, they are done. This is not true on
  `Remote Mediasoup client`, since internally they are sending a request to the
  server, and also it's possible to have multiple clients connected to the same
  server calling to them. If you are using only one client, you can assume that
  the changes will be done, the same as with normal `Mediasoup`, but if you are
  using multiple ones (also from the same server application instance), you
  need to listen to the `close` event of the objects. This will allows you to
  keep you application state synchronized with the server state, otherwise you
  could think one `Mediasoup` object is alive, without knowing it was closed by
  another client instance.
- Mediasoup `workerBin` and Workers `pid` fields are provided directly by the
  server we are connected. These can have different values of the ones that
  would be provided by a local `Mediasoup` instance, for example having hints
  about the server that's running the worker by using a "fake" PID beyond the
  [operating system max limit ones](https://github.com/torvalds/linux/blob/cd1245d75ce93b8fd206f4b34eb58bcfe156d5e9/include/linux/threads.h#L30-L35)
  or providing an URL with a domain instead of just only a path, so you
  **must not** assume they are relative to the server where your application
  code is running as would happen with a local `Mediasoup` instance, or that
  they are valid ones at all without processing them first.
