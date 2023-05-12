# ROPE client

Client for the *Remote Objects, Procedures and Events* protocol

*ROPE* is a protocol that allows clients to have a shallow copy of the server
state and objects, being able to call methods on them as if they were in local,
and keep sync'ed with server side updates, also when multiple clients are
connected to the same server instance or between reconnections. Under the hood
it makes use of a WebSocket connection and JsonRPC 2.0 protocol.

This repository provides the canonical client for *ROPE* protocol, including
support for multiplexing multiple client instances over a single connection and
sync'ed state.

## API

### new RopeClient(url, [WebSocket])

Constructor of the client.

- `url`: URL or the *ROPE* server endpoint. If provided, it will connect
   inmediatly, if not then you'll need to provide it later when calling
   [open()](#openurl) method.
- `WebSocket`: class used to create WebSocket objects. By default makes use of
  [isomorphic-ws](https://github.com/heineiuo/isomorphic-ws).

`url` can also be an object with the same fields.

### readyState

Property showing the actual state of the connection, possible values are
`CONNECTING`, `OPEN`, `CLOSSING`, `CLOSED` and `CONNECTED`. `CONNECTED` state is
reached after receiving initial payload from server with its current state.

### close()

Close and unregister the client. If it's the last one for that particular URL,
then it also closes the connection itself. It can be open again later by calling
the [open()](#openurl) method.

### open(url)

Open a connection with the *ROPE* server instance. It's automatically called if
`url` argument is provided to the class constructor. If client is already in
opening or open state it will throw an error.

- `url`, optional URL of the server instance, if not provided it will use the
  previously provided one, if none was provided at all it will throw an error.

### events

- `close`: client has closed
- `connected`: *ROPE* connection has connected
- `disconnected`: *ROPE* connection has disconnected
- `error(error)`: an error has occured in the connection. `error` argument
  dictates what was the actual error
- `open`: *ROPE* connection has open
- `websocketClose(wasClean)`: WebSocket connection was closed. `wasClean`
  argument dictates if it was a clean close or not (i.e. connection lost)
- `websocketOpen`: WebSocket connection was open
