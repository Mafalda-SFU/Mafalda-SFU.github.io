<a name="module_@mafalda-sfu/mediasoup-proxy-cli"></a>

## @mafalda-sfu/mediasoup-proxy-cli

* [@mafalda-sfu/mediasoup-proxy-cli](#module_@mafalda-sfu/mediasoup-proxy-cli)
    * [module.exports](#exp_module_@mafalda-sfu/mediasoup-proxy-cli--module.exports) ⏏
        * [new module.exports(mediasoupManager, options)](#new_module_@mafalda-sfu/mediasoup-proxy-cli--module.exports_new)

<a name="exp_module_@mafalda-sfu/mediasoup-proxy-cli--module.exports"></a>

### module.exports ⏏
CLI for [Mediasoup proxy](https://mafalda.io/Mediasoup-proxy-CLI).

**Kind**: Exported class  
<a name="new_module_@mafalda-sfu/mediasoup-proxy-cli--module.exports_new"></a>

#### new module.exports(mediasoupManager, options)
Creates a new instance of the [MediasoupClusterCli](MediasoupClusterCli) class.


| Param | Type | Description |
| --- | --- | --- |
| mediasoupManager |  | A MediasoupManager instance |
| options | <code>object</code> | The options for the [MediasoupClusterCli](MediasoupClusterCli) instance. // ROPE WebSocket server |
| [options.cert] | <code>string</code> | Path to the certificate file |
| [options.key] | <code>string</code> | Path to the key file |
| [options.pfx] | <code>string</code> | Path to the PFX file // Remote Mediasoup |
| [options.announcedIp] | <code>string</code> | Announced IP address |
| [options.appDataManager] | <code>AppDataManager</code> | App data manager |
| [options.extraMethodsFactory] | <code>function</code> | Extra methods factory |
| [options.listenIps] | <code>string</code> \| <code>Array.&lt;string&gt;</code> | List of listening IP addresses // ROPE server |
| [options.connectionPayload] | <code>function</code> | Connection payload |
| [options.logResponseErrors] | <code>boolean</code> | If we should log response errors // JsonRpc |
| [options.errorConstructors] | <code>object</code> | Map of error constructors |
| [options.onWarn] | <code>function</code> | Function to call on warnings |
| [options.sendFullErrors] | <code>boolean</code> | If we should send full errors // Rpc |
| [options.logMessages] | <code>boolean</code> | If we should log messages |
| [options.send] | <code>function</code> | Function to send messages |

