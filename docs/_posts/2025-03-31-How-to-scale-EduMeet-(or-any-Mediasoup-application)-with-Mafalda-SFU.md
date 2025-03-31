---
lang: en
title: How to scale EduMeet (or any Mediasoup application) with Mafalda SFU
---

A [frequently asked question](/FAQ) we get is *how to scale an already existing
[Mediasoup](https://mediasoup.org/)-based application with Mafalda SFU*. From an
application or user perspective, the scalability is transparent, because Mafalda
SFU handle all the complexity of scaling the application; and from the developer
perspective, the API is the same as with a single Mediasoup instance, so there's
no need to learn anything new. The only difference is that the application has
to use any of the Mafalda SFU packages instead of directly using the
[Mediasoup package](https://www.npmjs.com/package/mediasoup). This is a pretty
simple change, and it can be done for any Mediasoup-based project in a few lines
of code, as can be seen in the example of our
[Remote Mediasoup client mock](https://github.com/Mafalda-SFU/Remote-Mediasoup-client-mock/)
repository. But to make things easier, we'll have a few examples in this
post about porting [EduMeet](https://github.com/edumeet/edumeet/tree/develop) to
Mafalda SFU about *how to use and combine the different Mafalda SFU packages to
scale your application*. You can also check the code changes explained in this
post already applied to EduMeet for each different use case in our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/branches/all),
with some additional fixes and updates.

## Prepare your application

Although Mafalda SFU is designed to be 100% API compatible with Mediasoup, they
have a different architecture: meanwhile Mediasoup directly export its functions
at module level, being effectively like a singleton object, Mafalda SFU modules
export a *manager* class, that is responsible of implementing the actual
functionality of each Mafalda SFU module, and later they provide a *Mediasoup
compatible* object instance, that's the one that actually replaces the Mediasoup
module.

This means, the first thing you need to do in your project code is to replace
the Mediasoup module import, and require it as a function argument, allowing to
do *dependency injection*, so later we can pass the Mediasoup compatible object
instance instead. This is a pretty simple change, and it can be done in a few
lines of code, being the only difficulty in case the Mediasoup module is being
imported from multiple files. In that case, you need to change them to be
imported from a single file, and pass the Mediasoup object instance to the
different files, like in this example:

```diff
import mediasoup from 'mediasoup';

- async function run()
+ async function run(mediasoup)
{
  const worker = await mediasoup.createWorker()

  // ...
}

- run()
+ run(mediasoup)
```

You can see a real world example at our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/commit/5f52f6a31a4bbf5060c139bc7107f84f431cbba0).

Once you have your application ready to use dependency injection, next step is
to replace the Mediasoup object instance with the Mediasoup-compatible one from
the Mafalda SFU package you are using.

## The basics: Remote Mediasoup client

The most simple way to scale a Mediasoup based application using Mafalda SFU is
to use the [Remote Mediasoup client](/Remote-Mediasoup-client) package. This
package allow to connect to a
[Remote Mediasoup server](/Remote-Mediasoup-server) instance, that can be
running on a different (and potentially more performant) server. This is the
recommended way to use Mafalda SFU, because it's the most flexible alternative
allowing to fully abstract your application from the underlying Mediasoup
implementation, and depending on the application needs, you can increase the
media servers capacity independently of the application servers, specially when
connecting to [Mediasoup cluster](/Mediasoup-cluster) or
[Mediasoup vertical cluster](/Mediasoup-vertical-cluster) servers. This way, you
can have a single application server that can make use and handle multiple
Mediasoup servers at the same time and scale them independently.

To replace Mediasoup with the Remote Mediasoup client, you only need to install
the [Remote Mediasoup client](/Remote-Mediasoup-client) package, and then
replace the Mediasoup object instance with the Remote Mediasoup client and its
Mediasoup-compatible object instance. If you have the Remote Mediasoup client
package tarfile at the root of your project, you can replace the Mediasoup
package with it with the following commands:

```sh
npm uninstall mediasoup

npm install ./mafalda-sfu-remote-mediasoup-client-*.tgz
```

After that, you can replace the Mediasoup object instance with the Remote
Mediasoup client and the Mediasoup compatible object instance:

```diff
+ import { once } from 'node:events';

- import mediasoup from 'mediasoup';
+ import RemoteMediasoupClient from '@mafalda-sfu/remote-mediasoup-client';
+
+ const client = new RemoteMediasoupClient('ws://example.com');

+ // Destroy the client when the process is terminated, to do a clean exit
+ const onProcessSignal = client.destroy.bind(client);
+
+ process.once('SIGINT', onProcessSignal);
+ process.once('SIGTERM', onProcessSignal);

+ function onConnectionFailure(error)
+ {
+   console.error('Error connecting to Remote Mediasoup server:', error);
+
+   process.exit(1);
+ }
+
+ // Wait for the connection to be established, or notify connection error
+ await once(client, 'mediasoup').catch(onConnectionFailure);

+ // The connection is established, we can use the Mediasoup compatible object
+ // instance, and listen for errors
+ const { mediasoup } = client.on('error', console.error);
```

(Sorry if you find the diff hard to read, GitHub don't support code syntax
highlighting for diffs. I've split each part with white lines to make it easier
to spot and follow them.)

You can see a real world example at our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/commit/6679c210ad7aa6814f2c67f886bcd7e3319762ca).

### Remote Mediasoup client mock

If you just want to to check how much difficult is to port an existing
Mediasoup based application to Mafalda SFU, you can use the
[Remote Mediasoup client mock](https://github.com/Mafalda-SFU/Remote-Mediasoup-client-mock/)
package. This package allows to use the same API as the Remote Mediasoup client,
but instead it's implemented as a thin wrapper around the Mediasoup package, so
you can use it to validate that Mafalda SFU is a good fit for you, or test your
application in local during development without having to install and configure
a separate server.

To use it, it's pretty similar to the Remote Mediasoup client, you just need to
replace the Mediasoup package with the Remote Mediasoup client mock one, and
having the same API on purpose, the code changes would be the same:

```sh
npm uninstall mediasoup

npm install @mafalda-sfu/remote-mediasoup-client-mock
```

```diff
+import { once } from 'node:events';

- import mediasoup from 'mediasoup';
+ import RemoteMediasoupClientMock from '@mafalda-sfu/remote-mediasoup-client-mock';

+ function onConnectionFailure(error)
+ {
+   console.error('Error connecting to Remote Mediasoup server:', error);
+
+   process.exit(1);
+ }

+ // URL is not really used, but it's required for compatibility
+ const client = new RemoteMediasoupClientMock('ws://example.com');
+
+ const onProcessSignal = client.destroy.bind(client);
+
+ process.once('SIGINT', onProcessSignal);
+ process.once('SIGTERM', onProcessSignal);
+
+ await once(client, 'mediasoup').catch(onConnectionFailure);;
+
+ const { mediasoup } = client.on('error', console.error);
```

You can see a real world example at our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/commit/2216faa3be327a66401306565bb9a518bf0891ef).

## Scale up: Mediasoup Vertical

If your scalability needs are not that high, and you don't need to scale your
application over several servers, you can scale it to use all the CPUs cores at
once, using the [Mediasoup Vertical](/Mediasoup-Vertical) package. This package
aggregates the performance of all the CPUs cores of a server as if they were a
single one, allowing to have sessions beyond the participants capacity of each
CPU core.

Using it is similar to the Remote Mediasoup client, just only you need to
provide a Mediasoup Manager object as argument. In its simplest form, it's just
an object with a `mediasoup` property, that is the Mediasoup object instance,
and a `getStats` method, that returns the global and system stats where the
Mediasoup instance is running. In case you want to run Mediasoup Vertical in
local on top of an instance of the original Mediasoup package, you can use the
function provided by the
[Mediasoup getStats factory](https://www.npmjs.com/package/@mafalda-sfu/mediasoup-getstats-factory)
package:

```sh
# We don't need to uninstall the Mediasoup package, since we'll use it

npm install @mafalda-sfu/mediasoup-getstats-factory
npm install ./mafalda-sfu-mediasoup-vertical-*.tgz
```

Then, you can use it like this:

```diff
- import mediasoup from 'mediasoup';
+ import getStatsFactory from '@mafalda-sfu/mediasoup-getstats-factory';
+ import MediasoupVertical from '@mafalda-sfu/mediasoup-vertical';
+ import mediasoupOrig from 'mediasoup';

+ const { close, getStats } = await getStatsFactory(mediasoupOrig);
+
+ const mediasoupVertical = new MediasoupVertical(
+   { getStats, mediasoup: mediasoupOrig }
+ )
+   .on('error', console.error);
+
+ function onProcessSignal()
+ {
+   mediasoupVertical.destroy();
+   close();
+ }
+
+ process.once('SIGINT', onProcessSignal);
+ process.once('SIGTERM', onProcessSignal);
+
+ // No need to wait for the connection to be established, original Mediasoup
+ // package object is always available
+
+ const { mediasoup } = mediasoupVertical;
```

The same as before, you can see a full real world example at our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/commit/a232d550e2e9247d95e566c0b14c946007b3f129).

## Scale out: Mediasoup Horizontal

The same way that [Mediasoup Vertical](#going-up-mediasoup-vertical) works as a
wrapper around a Mediasoup Manager to aggregate its `Worker`s performance, the
[Mediasoup Horizontal](/Mediasoup-Horizontal) package can be seen as a wrapper
around (multiple) [Remote Mediasoup client](#the-basics-remote-mediasoup-client)
instances, where it manages their connection status and the media routing
between their `Worker` instances, as if all of them were in a single Mediasoup
instance.

In this case, we create multiple Remote Mediasoup client instances, each one to
connect to a different Remote Mediasoup server, and later we provide them to
Mediasoup Horizontal to do its management:

```sh
npm uninstall mediasoup

npm install ./mafalda-sfu-mediasoup-horizontal-*.tgz
npm install ./mafalda-sfu-remote-mediasoup-client-*.tgz
```

```diff
+ import { once } from 'node:events';

- import mediasoup from 'mediasoup';
+ import MediasoupHorizontal from '@mafalda-sfu/mediasoup-horizontal';
+ import RemoteMediasoupClient from '@mafalda-sfu/remote-mediasoup-client';

+ function newClient(url)
+ {
+    // We disable `listenWorkerDied` to prevent duplicated notifications
+   return new RemoteMediasoupClient(url, { listenWorkerDied: false });
+ }
+
+ function onConnectionFailure(error)
+ {
+   console.error('Error connecting to Remote Mediasoup servers:', error);
+
+   process.exit(1);
+ }
+
+ function onProcessSignal()
+ {
+   // We first remove (and destroy) the clients, to do proper cleanup tasks
+   for (const client of clients) client.destroy();
+
+   mediasoupHorizontal.destroy();
+ }

+ const urls = [
+   'ws://example1.com',
+   'ws://example2.com',
+   'ws://example3.com'
+ ];

+ const clients = urls.map(newClient);
+
+ const mediasoupHorizontal = new MediasoupHorizontal(clients);
+
+ process.once('SIGINT', onProcessSignal);
+ process.once('SIGTERM', onProcessSignal);
+
+ await once(mediasoupHorizontal, 'mediasoup').catch(onConnectionFailure);
+
+ const { mediasoup } = mediasoupHorizontal.on('error', console.error);
```

You can find the full example at our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/commit/a53ed1368d9a96f9c98edc27038460054ee8fbde).

## Full scale: combined scalability

Finally, the most versatil (not counting on using
[Mediasoup vertical cluster](/Mediasoup-vertical-cluster) package) and complex
use case is to combine and use both
[Mediasoup Vertical](#going-up-mediasoup-vertical) and
[Mediasoup Horizontal](#going-out-mediasoup-horizontal) packages at the same
time. This allows you to scale your streaming sessions over multiple CPU cores
running on several servers, having your capacity only limited by how many
servers you have available. But at the same time, it's easy to implement it
thanks to the Mafalda SFU packages, because they are designed to be compatible
and combinable between them.

Similar to the Mediasoup Horizontal use case, you need to create multiple
Remote Mediasoup client instances and pass them to the Mediasoup Horizontal
instance, but in this case, you also need to create a Mediasoup Vertical
that will be initialized with the Mediasoup Horizontal instance, stacking the
Mediasoup Vertical instance on top of the Mediasoup Horizontal one. This way,
the Mediasoup Horizontal instance will be responsible of collecting the Workers
from the multiple Remote Mediasoup servers, and the Mediasoup Vertical one will
aggregate them to make them work as a single one:

```sh
npm uninstall mediasoup

npm install ./mafalda-sfu-mediasoup-horizontal-*.tgz
npm install ./mafalda-sfu-mediasoup-vertical-*.tgz
npm install ./mafalda-sfu-remote-mediasoup-client-*.tgz
```

```diff
+ import { once } from 'node:events';

- import mediasoup from 'mediasoup';
+ import MediasoupHorizontal from '@mafalda-sfu/mediasoup-horizontal';
+ import MediasoupVertical from '@mafalda-sfu/mediasoup-vertical';
+ import RemoteMediasoupClient from '@mafalda-sfu/remote-mediasoup-client';

+ // We disable `listenWorkerDied` to prevent duplicated notifications from both
+ // Mediasoup Horizontal and the Remote Mediasoup clients
+ const options = { listenWorkerDied: false };
+
+ function newClient(url)
+ {
+   return new RemoteMediasoupClient(url, options);
+ }
+
+ function onConnectionFailure(error)
+ {
+   console.error('Error connecting to Remote Mediasoup servers:', error);
+
+   process.exit(1);
+ }
+
+ function onProcessSignal()
+ {
+   for (const client of clients) client.destroy();
+
+   // No need to destroy the Mediasoup Vertical instance, it will be destroyed
+   // automatically when the Mediasoup Horizontal instance is destroyed
+   mediasoupHorizontal.destroy();
+ }

+ const urls = [
+   'ws://example1.com',
+   'ws://example2.com',
+   'ws://example3.com'
+ ];

+ const clients = urls.map(newClient);
+
+ const mediasoupHorizontal = new MediasoupHorizontal(clients, options);
+ const mediasoupVertical = new MediasoupVertical(mediasoupHorizontal);
+
+ process.once('SIGINT', onProcessSignal);
+ process.once('SIGTERM', onProcessSignal);
+
+ await once(mediasoupVertical, 'mediasoup').catch(onConnectionFailure);
+
+ const { mediasoup } = mediasoupVertical.on('error', console.error);
```

The final full example can be found at our
[EduMeet fork](https://github.com/Mafalda-SFU/EduMeet-Mafalda/commit/1048f473855729403f562bdee3504ebc67fb74c6).
