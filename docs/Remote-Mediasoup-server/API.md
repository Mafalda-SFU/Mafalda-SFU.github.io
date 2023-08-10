## Functions

<dl>
<dt><a href="#genListenIps">genListenIps(listenIps, localListenIps)</a></dt>
<dd></dd>
<dt><a href="#mapPipeTransport">mapPipeTransport(root0)</a></dt>
<dd><p>We only need <code>tuple</code> for PipeTransport, but we implement the serialization of
the other fields for the sake of completeness.</p>
</dd>
<dt><a href="#pipeToRouter">pipeToRouter(root0, id)</a></dt>
<dd></dd>
<dt><a href="#transportId2pid">transportId2pid(id)</a></dt>
<dd></dd>
</dl>

<a name="genListenIps"></a>

## genListenIps(listenIps, localListenIps)
**Kind**: global function  

| Param |
| --- |
| listenIps | 
| localListenIps | 

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

<a name="transportId2pid"></a>

## transportId2pid(id)
**Kind**: global function  

| Param |
| --- |
| id | 

