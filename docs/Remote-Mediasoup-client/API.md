## Classes

<dl>
<dt><a href="#RemoteMediasoupClient">RemoteMediasoupClient</a> ⇐ <code>EventEmitter</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#changeFactory">changeFactory(root0)</a></dt>
<dd></dd>
</dl>

<a name="RemoteMediasoupClient"></a>

## RemoteMediasoupClient ⇐ <code>EventEmitter</code>
**Kind**: global class  
**Summary**: Connection class  
**Extends**: <code>EventEmitter</code>  
**See**: [Remote Mediasoup client](https://mafalda.io/Remote-Mediasoup-client/API#RemoteMediasoupClient)  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  

* [RemoteMediasoupClient](#RemoteMediasoupClient) ⇐ <code>EventEmitter</code>
    * [new RemoteMediasoupClient()](#new_RemoteMediasoupClient_new)
    * [.module.exports](#RemoteMediasoupClient.module.exports)
        * [new module.exports([url], [options])](#new_RemoteMediasoupClient.module.exports_new)
    * [.readyState](#RemoteMediasoupClient.readyState) ⇒ <code>number</code>
    * [.close()](#RemoteMediasoupClient.close)
    * [.open([url])](#RemoteMediasoupClient.open) ⇒ [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient)

<a name="new_RemoteMediasoupClient_new"></a>

### new RemoteMediasoupClient()
Facade class to don't give access to `RopeClient._connection` to the user.

<a name="RemoteMediasoupClient.module.exports"></a>

### RemoteMediasoupClient.module.exports
**Kind**: static class of [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient)  
**Summary**: Creates an instance of [RemoteMediasoupClient](#RemoteMediasoupClient).  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="new_RemoteMediasoupClient.module.exports_new"></a>

#### new module.exports([url], [options])

| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> \| <code>object</code> | URL of the [Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/). If it's not provided, the [RemoteMediasoupClient](#RemoteMediasoupClient) object will remain in closed state. |
| [options] | <code>object</code> | Options for the connection |

<a name="RemoteMediasoupClient.readyState"></a>

### RemoteMediasoupClient.readyState ⇒ <code>number</code>
In addition of the states defined for the WebSocket connection
[readyState](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState#value)
property, this property can have a ['connected' state](CONNECTED)
to indicate that the
[Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/)
payload with its internal state has been received and sync'ed, and so the
`Remote Mediasoup` connection has been fully established.

**Kind**: static property of [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient)  
**Summary**: Get the current `readyState` of the client.  
**Returns**: <code>number</code> - The current `readyState` of the client  
**Read only**: true  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/readyState)  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClient.close"></a>

### RemoteMediasoupClient.close()
If it's already closed, this method does nothing

**Kind**: static method of [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient)  
**Summary**: Close the client.  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClient.open"></a>

### RemoteMediasoupClient.open([url]) ⇒ [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient)
If it's already open, it will throw an exception

**Kind**: static method of [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient)  
**Summary**: Open the client to the given URL.  
**Returns**: [<code>RemoteMediasoupClient</code>](#RemoteMediasoupClient) - the Remote Mediasoup client itself  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  

| Param | Type | Description |
| --- | --- | --- |
| [url] | <code>string</code> | URL of the [Remote Mediasoup server](https://mafalda.io/Remote-Mediasoup-server/). If not provided, it will re-open the connection to the last provided URL, and if was not provided, it will throw an exception |

<a name="changeFactory"></a>

## changeFactory(root0)
**Kind**: global function  

| Param |
| --- |
| root0 | 
| root0.appDatas | 
| root0.deserialize | 

