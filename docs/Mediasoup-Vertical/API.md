## Members

<dl>
<dt><a href="#subprocessClosed">subprocessClosed</a></dt>
<dd><p>Whether the Worker subprocess is closed.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#pipeToRouter">pipeToRouter(options)</a> ⇒ <code>object</code></dt>
<dd><p>This method is used to pipe a producer to a router.
It validates the options and the destination router, checks if the producer
exists and if the destination router already has a producer with the same
id.
If the destination router does not have the original Mediasoup <code>Router</code>, it
adds it.
It then registers the <code>Producer</code> in the <code>destVerticalRouter</code>.
It creates a <code>Consumer</code> and <code>Producer</code> for the &quot;fake&quot; pipe and binds the
close events.
It also pipes events from the pipe Consumer to the pipe Producer and vice
versa.</p>
</dd>
</dl>

<a name="subprocessClosed"></a>

## subprocessClosed
Whether the Worker subprocess is closed.

**Kind**: global variable  
<a name="pipeToRouter"></a>

## pipeToRouter(options) ⇒ <code>object</code>
This method is used to pipe a producer to a router.
It validates the options and the destination router, checks if the producer
exists and if the destination router already has a producer with the same
id.
If the destination router does not have the original Mediasoup `Router`, it
adds it.
It then registers the `Producer` in the `destVerticalRouter`.
It creates a `Consumer` and `Producer` for the "fake" pipe and binds the
close events.
It also pipes events from the pipe Consumer to the pipe Producer and vice
versa.

**Kind**: global function  
**Returns**: <code>object</code> - The pipeConsumer and pipeProducer.  
**Throws**:

- Will throw an error if the router is closed, options are undefined,
router is not an instance of `Router`, router instance is piped to itself,
router is piped to another `Router` instance on our same `Worker`, producer
is not found, or destination router already has a producer with the same
id.


| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> | The options for the pipe. |
| options.producerId | <code>string</code> | The id of the producer to be piped. |
| options.router | <code>Router</code> | The destination router. |

