## Functions

<dl>
<dt><a href="#methodsFactory">methodsFactory(mediasoupManager, sendBroadcast, deserialize, announcedIp, sendNotification)</a></dt>
<dd></dd>
<dt><a href="#createWebRtcTransportFactory">createWebRtcTransportFactory(deserialize, announcedIp)</a></dt>
<dd></dd>
<dt><a href="#enhanceRtpObserver">enhanceRtpObserver(rtpObserver)</a></dt>
<dd></dd>
<dt><a href="#enhanceTransport">enhanceTransport(transport, root0)</a></dt>
<dd></dd>
<dt><a href="#isINADDR_ANY">isINADDR_ANY(listenIp, ip)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if <code>ip</code> means &quot;all addresses in the local machine&quot;</p>
</dd>
<dt><a href="#mapPipeTransport">mapPipeTransport(root0)</a></dt>
<dd><p>We only need <code>tuple</code> for PipeTransport, but we implement the serialization of
the other fields for the sake of completeness.</p>
</dd>
<dt><a href="#methodsFactory">methodsFactory(deserialize, sendBroadcast, announcedIp)</a></dt>
<dd></dd>
<dt><a href="#pipeToRouter">pipeToRouter(root0, id)</a></dt>
<dd></dd>
<dt><a href="#methodsFactory">methodsFactory(sendBroadcast)</a></dt>
<dd></dd>
<dt><a href="#transportId2pid">transportId2pid(id)</a></dt>
<dd></dd>
<dt><a href="#methodsFactory">methodsFactory(deserialize, sendBroadcast)</a></dt>
<dd></dd>
</dl>

<a name="methodsFactory"></a>

## methodsFactory(mediasoupManager, sendBroadcast, deserialize, announcedIp, sendNotification)
**Kind**: global function  

| Param |
| --- |
| mediasoupManager | 
| sendBroadcast | 
| deserialize | 
| announcedIp | 
| sendNotification | 

<a name="methodsFactory..createWorker"></a>

### methodsFactory~createWorker(...params)
**Kind**: inner method of [<code>methodsFactory</code>](#methodsFactory)  

| Param | Type |
| --- | --- |
| ...params | <code>any</code> | 

<a name="createWebRtcTransportFactory"></a>

## createWebRtcTransportFactory(deserialize, announcedIp)
**Kind**: global function  

| Param |
| --- |
| deserialize | 
| announcedIp | 

<a name="enhanceRtpObserver"></a>

## enhanceRtpObserver(rtpObserver)
**Kind**: global function  

| Param |
| --- |
| rtpObserver | 

<a name="enhanceTransport"></a>

## enhanceTransport(transport, root0)
**Kind**: global function  

| Param |
| --- |
| transport | 
| root0 | 
| root0.id | 

<a name="isINADDR_ANY"></a>

## isINADDR\_ANY(listenIp, ip) ⇒ <code>boolean</code>
Check if `ip` means "all addresses in the local machine"

**Kind**: global function  

| Param |
| --- |
| listenIp | 
| ip | 

<a name="mapPipeTransport"></a>

## mapPipeTransport(root0)
We only need `tuple` for PipeTransport, but we implement the serialization of
the other fields for the sake of completeness.

**Kind**: global function  

| Param |
| --- |
| root0 | 
| root0.dtlsParameters | 
| root0.dtlsParameters.role | 
| root0.id | 
| root0.rtcpTuple | 
| root0.srtpParameters | 
| root0.tuple | 

<a name="methodsFactory"></a>

## methodsFactory(deserialize, sendBroadcast, announcedIp)
**Kind**: global function  

| Param |
| --- |
| deserialize | 
| sendBroadcast | 
| announcedIp | 

<a name="methodsFactory..createWorker"></a>

### methodsFactory~createWorker(...params)
**Kind**: inner method of [<code>methodsFactory</code>](#methodsFactory)  

| Param | Type |
| --- | --- |
| ...params | <code>any</code> | 

<a name="pipeToRouter"></a>

## pipeToRouter(root0, id)
**Kind**: global function  

| Param |
| --- |
| root0 | 
| root0.routerId | 
| id | 
| root0.routerId.routerId | 
| id.routerId | 

<a name="pipeToRouter..onNewTransport"></a>

### pipeToRouter~onNewTransport(transport)
**Kind**: inner method of [<code>pipeToRouter</code>](#pipeToRouter)  

| Param |
| --- |
| transport | 

<a name="methodsFactory"></a>

## methodsFactory(sendBroadcast)
**Kind**: global function  

| Param |
| --- |
| sendBroadcast | 

<a name="methodsFactory..createWorker"></a>

### methodsFactory~createWorker(...params)
**Kind**: inner method of [<code>methodsFactory</code>](#methodsFactory)  

| Param | Type |
| --- | --- |
| ...params | <code>any</code> | 

<a name="transportId2pid"></a>

## transportId2pid(id)
**Kind**: global function  

| Param |
| --- |
| id | 

<a name="methodsFactory"></a>

## methodsFactory(deserialize, sendBroadcast)
**Kind**: global function  

| Param |
| --- |
| deserialize | 
| sendBroadcast | 

<a name="methodsFactory..createWorker"></a>

### methodsFactory~createWorker(...params)
**Kind**: inner method of [<code>methodsFactory</code>](#methodsFactory)  

| Param | Type |
| --- | --- |
| ...params | <code>any</code> | 

