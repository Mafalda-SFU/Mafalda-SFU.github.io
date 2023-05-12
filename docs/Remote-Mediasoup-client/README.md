# Remote Mediasoup client

This project host a class that allow to connect to servers offering the
`Remote Mediasoup` API, like
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/) and
[Mediasoup cluster](https://mafalda.io/Mediasoup-cluster/). Once connected, it
offers the same API than the one provided by [Mediasoup](https://mediasoup.org),
but using remote instances instead of a local one. This allow to use the same
code in both cases and easily migrate from one to the other, openning the door
to scale your `Mediasoup` based application without having to change your code.

## Install

```sh
npm install --save @mafalda-sfu/remote-mediasoup-client
```

## API

See [API documentation](https://mafalda.io/Remote-Mediasoup-client/API).

## Usage

You only need to do two changes in your code:

1. Replace the `mediasoup` import for `remote-mediasoup-client`:

   ```diff
   - import mediasoup from 'mediasoup'
   + import RemoteMediasoupClient from 'remote-mediasoup-client'
   ```

2. Create the instance of the `RemoteMediasoupClient` object, wait for its
   `connected` event, and access to the `mediasoup` property:

   ```diff
   + const remoteMediasoupClient = new RemoteMediasoupClient
   +
   + await once(remoteMediasoupClient, 'connected')
   +
   + const {mediasoup} = remoteMediasoupClient
   ```

After that, the `mediasoup` variable will have an object with the same API than
the one provided by the `Mediasoup` package.

## Known bugs (AKA "features")

- Since the `close()` methods of the different objects created by the
  `Mediasoup` package are synchronous, but `Remote Mediasoup client` does
  internally asynchronous network requests, it's not possible to catch the
  throwned errors. To don't left them unnoticed when received, they are just
  printed in the console.
