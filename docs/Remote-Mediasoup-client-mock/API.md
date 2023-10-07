## Classes

<dl>
<dt><a href="#RemoteMediasoupClientMock">RemoteMediasoupClientMock</a> ⇐ <code>EventEmitter</code></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#OPEN">OPEN</a></dt>
<dd></dd>
<dt><a href="#CLOSED">CLOSED</a></dt>
<dd></dd>
<dt><a href="#CONNECTED">CONNECTED</a> : <code>number</code></dt>
<dd><p>Additional state to the WebSocket connection
<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value">readyState</a>
property to indicate that the
<a href="https://mafalda.io/Remote-Mediasoup-server/">Remote Mediasoup server</a>
payload with its internal state has been received and sync&#39;ed, and so the
<code>Remote Mediasoup</code> connection has been fully established.</p>
</dd>
</dl>

<a name="RemoteMediasoupClientMock"></a>

## RemoteMediasoupClientMock ⇐ <code>EventEmitter</code>
**Kind**: global class  
**Summary**: Remote Mediasoup client mock class  
**Extends**: <code>EventEmitter</code>  
**Date**: 30/04/2023  
**See**: [Remote Mediasoup client](https://mafalda.io/Remote-Mediasoup-client/API#RemoteMediasoupClient)  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  

* [RemoteMediasoupClientMock](#RemoteMediasoupClientMock) ⇐ <code>EventEmitter</code>
    * [.module.exports](#RemoteMediasoupClientMock.module.exports)
        * [new module.exports([url], [WebSocket])](#new_RemoteMediasoupClientMock.module.exports_new)
    * [.mediasoup](#RemoteMediasoupClientMock.mediasoup)
    * [.readyState](#RemoteMediasoupClientMock.readyState)
    * [.close()](#RemoteMediasoupClientMock.close)
    * [.open([url])](#RemoteMediasoupClientMock.open) ⇒ [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)

<a name="RemoteMediasoupClientMock.module.exports"></a>

### RemoteMediasoupClientMock.module.exports
**Kind**: static class of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Summary**: Creates an instance of [RemoteMediasoupClientMock](#RemoteMediasoupClientMock).  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="new_RemoteMediasoupClientMock.module.exports_new"></a>

#### new module.exports([url], [WebSocket])

| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> \| <code>object</code> | URL of the [Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/). If it's not provided, the [RemoteMediasoupClientMock](#RemoteMediasoupClientMock) object will remain in closed state. |
| [WebSocket] | <code>object</code> | WebSocket class to be used to create the connections with the [Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/) |

<a name="RemoteMediasoupClientMock.mediasoup"></a>

### RemoteMediasoupClientMock.mediasoup
This object is API compatible with the
[Mediasoup API](https://mediasoup.org/documentation/v3/mediasoup/api/)
provided by the
[`Mediasoup` package](https://www.npmjs.com/package/mediasoup).

**Kind**: static property of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Summary**: Get a reference to the `mediasoup` package exported object.  
**Read only**: true  
**Date**: 30/04/2023  
**See**: [https://mediasoup.org/documentation/v3/mediasoup/api/](https://mediasoup.org/documentation/v3/mediasoup/api/)  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClientMock.readyState"></a>

### RemoteMediasoupClientMock.readyState
In addition of the states defined for the WebSocket connection
[readyState](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value)
property, this property can have a ['connected' state](#CONNECTED)
to indicate that the
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/)
payload with its internal state has been received and sync'ed, and so the
`Remote Mediasoup` connection has been fully established.

**Kind**: static property of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Summary**: Get the current `readyState` of the client.  
**Read only**: true  
**Date**: 30/04/2023  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState)  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClientMock.close"></a>

### RemoteMediasoupClientMock.close()
If it's already closed, this method does nothing

**Kind**: static method of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Summary**: Close the client.  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClientMock.open"></a>

### RemoteMediasoupClientMock.open([url]) ⇒ [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)
If it's already open, it will throw an exception

**Kind**: static method of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Summary**: Open the client to the given URL.  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> | URL of the [Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/). If not provided, it will re-open the connection to the last provided URL, and if was not provided, it will throw an exception |

<a name="OPEN"></a>

## OPEN
**Kind**: global constant  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value)  
<a name="CLOSED"></a>

## CLOSED
**Kind**: global constant  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value)  
<a name="CONNECTED"></a>

## CONNECTED : <code>number</code>
Additional state to the WebSocket connection
[readyState](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value)
property to indicate that the
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/)
payload with its internal state has been received and sync'ed, and so the
`Remote Mediasoup` connection has been fully established.

**Kind**: global constant  
**Default**: <code>4</code>  
