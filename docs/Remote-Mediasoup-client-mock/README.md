# Remote Mediasoup client mock

This project host a class with the same API of the
[Remote Mediasoup client](https://mafalda.io/Remote-Mediasoup-client/). It's
intended to be used for both testing purposes and as a testbed for the migration
of projects based on [Mediasoup](https://mediasoup.org/) to use the
`Remote Mediasoup client` instead. Behaviour is the same in both cases, being
the main differences with the `Remote Mediasoup client` that it uses a local
instance of `Mediasoup` instead of connecting to an instance of
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/), and due
to that, `Connection` WebSocket events are emulated instead of being real ones.

## Install

```sh
npm install --save-dev @mafalda-sfu/remote-mediasoup-client-mock
```

## API

See [API documentation](/docs/API.md).

## Usage

You only need to do two changes in your code:

1. Replace the `mediasoup` import for `remote-mediasoup-client-mock`:

   ```diff
   - import mediasoup from 'mediasoup'
   + import RemoteMediasoupClientMock from 'remote-mediasoup-client-mock'
   ```

2. Create the instance of the `RemoteMediasoupClientMock` object, wait for its
   `connected` event, and access to the `mediasoup` property:

   ```diff
   + const remoteMediasoupClientMock = new RemoteMediasoupClientMock
   +
   + await once(remoteMediasoupClientMock, 'connected')
   +
   + const {mediasoup} = remoteMediasoupClientMock
   ```

After that, the `mediasoup` variable will have an object with the same API than
the one provided by the `Mediasoup` package.
