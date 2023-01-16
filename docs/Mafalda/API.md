<a name="getOrCreateWorker"></a>

## getOrCreateWorker()
Get the Mediasoup `Worker` with the higher load that doesn't pass the
"new worker" watermark. We have already discarted the Mediasoup workers
that have a router owned by this `MafaldaRouter` instance under the
"new worker" watermark in a previous check done at `#getRouter()` since no
`Router` was available there, so at this point we are sure we'll get a new
`Worker` from another `Router` instance where to create the Mediasoup
`Router` instance, if any is available.

**Kind**: global function  
