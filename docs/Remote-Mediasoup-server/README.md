# Remote Mediasoup server

[![Coverage](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/mafalda-bot/27d772a9a3a8a945b34fd9676de40486/raw/Remote-Mediasoup-server.json)](https://gist.github.com/Mafalda-bot/27d772a9a3a8a945b34fd9676de40486#file-Remote-Mediasoup-server-json)

Remote proxies to Mediasoup classes

## API

- `[announcedIp]`: optional string, IP address to announce to the clients. If
  not provided, the server will try to guess it.
- `[appDataManager]`: optional instance of AppDataManager class, to be used to
  store and retrieve data from the app. Default `new AppDataManager()`.
- `[extraConnectionPayload]`: optional function, return value will be added to
  the connection payload sent to the client. Default `() => ({})`.
- `[extraMethodsFactory]`: optional function with
  `function sendNotification(method, ...args)` as single argument, return value
  will be added to the methods object sent to the client. Default `() => ({})`.
- `[listenIps]`: optional array of strings, IP addresses to listen to. Default
  `[]`, which means no globally provided local listen IPs (only
  `createWebRtcTransport()` provided ones).
- `[sendFullErrors]`: optional boolean, whether to send full error objects to
  the client. Default `false`.
