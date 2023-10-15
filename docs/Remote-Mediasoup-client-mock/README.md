# Remote Mediasoup client mock

[![Code coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/Remote-Mediasoup-client-mock.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-Remote-Mediasoup-client-mock-json)
[![Docs coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/7238ab5f664c36d1edfa48d218eea9b3/raw/Remote-Mediasoup-client-mock.json)](https://gist.github.com/Mafalda-bot/7238ab5f664c36d1edfa48d218eea9b3#file-Remote-Mediasoup-client-mock-json)
[![npm](https://img.shields.io/npm/v/@mafalda-sfu/remote-mediasoup-client-mock.svg)](https://www.npmjs.com/package/@mafalda-sfu/remote-mediasoup-client-mock)

This project host a class with the same API of the
[Remote Mediasoup client](https://mafalda.io/Remote-Mediasoup-client/). It's
intended to be used for both testing purposes and as a testbed for the migration
of projects currently based on [Mediasoup](https://mediasoup.org/) to use the
`Remote Mediasoup client` instead. Behavior is mostly the same that the one
offered by the `Remote Mediasoup client` instances, being the only two
differences:

1. `Remote Mediasoup client mock` uses a local instance of `Mediasoup` instead
   of connecting to an instance of
   [Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/)
2. due to that, `Connection` WebSocket events are emulated instead of being real
   ones

## Install

```sh
npm install --save-dev @mafalda-sfu/remote-mediasoup-client-mock
```

## API

See [API documentation](https://mafalda.io/Remote-Mediasoup-client-mock/API).

## Usage

If you already have a `Mediasoup` based project, to use
`Remote Mediasoup client mock` on it you'll only need to do two changes in
your project code:

<!--
TODO: add info to replace dependency, updating the package version in the docs
-->

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

After that, the `mediasoup` variable will have an object that's API compatible
with the [Mediasoup API](https://mediasoup.org/documentation/v3/mediasoup/api/)
provided by the [`Mediasoup` package](https://www.npmjs.com/package/mediasoup).
