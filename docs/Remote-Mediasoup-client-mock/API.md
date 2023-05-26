<a name="RemoteMediasoupClientMock"></a>

## RemoteMediasoupClientMock ⇐ <code>EventEmitter</code>
**Kind**: global class  
**Extends**: <code>EventEmitter</code>  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  

* [RemoteMediasoupClientMock](#RemoteMediasoupClientMock) ⇐ <code>EventEmitter</code>
    * [new RemoteMediasoupClientMock()](#new_RemoteMediasoupClientMock_new)
    * [.module.exports](#RemoteMediasoupClientMock.module.exports)
        * [new module.exports([url], [WebSocket])](#new_RemoteMediasoupClientMock.module.exports_new)
    * [.mediasoup](#RemoteMediasoupClientMock.mediasoup)
    * [.readyState](#RemoteMediasoupClientMock.readyState)
    * [.close()](#RemoteMediasoupClientMock.close)
    * [.open([url])](#RemoteMediasoupClientMock.open) ⇒ [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)

<a name="new_RemoteMediasoupClientMock_new"></a>

### new RemoteMediasoupClientMock()
Connection mock class

<a name="RemoteMediasoupClientMock.module.exports"></a>

### RemoteMediasoupClientMock.module.exports
**Kind**: static class of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="new_RemoteMediasoupClientMock.module.exports_new"></a>

#### new module.exports([url], [WebSocket])
Creates an instance of RemoteMediasoupClientMock.


| Param | Type |
| --- | --- |
| [url] | <code>string</code> \| <code>object</code> | 
| [WebSocket] | <code>object</code> | 

<a name="RemoteMediasoupClientMock.mediasoup"></a>

### RemoteMediasoupClientMock.mediasoup
Get a reference to the `mediasoup` package exported object.

**Kind**: static property of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Read only**: true  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClientMock.readyState"></a>

### RemoteMediasoupClientMock.readyState
Get the current `readyState` of the client.

**Kind**: static property of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Read only**: true  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClientMock.close"></a>

### RemoteMediasoupClientMock.close()
Close the client.

**Kind**: static method of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  
<a name="RemoteMediasoupClientMock.open"></a>

### RemoteMediasoupClientMock.open([url]) ⇒ [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)
Open the client to the given URL.

**Kind**: static method of [<code>RemoteMediasoupClientMock</code>](#RemoteMediasoupClientMock)  
**Date**: 30/04/2023  
**Author**: Jesús Leganés-Combarro 'piranna' <piranna@gmail.com>  

| Param | Type |
| --- | --- |
| [url] | <code>string</code> | 

