# Mediasoup cluster CLI

[![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/Mediasoup-cluster-CLI.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-Mediasoup-cluster-CLI-json)

Remote Mediasoup proxy server that provides access to multiple instances of
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/)s or
`Remote Mediasoup` protocol compatible servers from a single WebSocket endpoint.

## Install

```sh
npm install @mafalda-sfu/mediasoup-cluster-cli
```

Alternatively, you can use `npx` to run the CLI without installing it:

```sh
npx @mafalda-sfu/mediasoup-cluster-cli
```

## Javascript API

See [API documentation](https://mafalda.io/Mediasoup-cluster-CLI/API).

## CLI usage

```sh
mediasoup-cluster-cli --help
```

## Configuration

The CLI can be configured using the following environment variables:

- `PORT`: The port where the server will listen for incoming connections.
  Defaults to `3000`.
- `DEBUG`: The debug namespace to use. Defaults to `mediasoup-cluster-cli:*`.
- `MEDIASOUP_WORKER_BIN`: The path to the Mediasoup worker binary. Defaults to
  `mediasoup-worker`.
