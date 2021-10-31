# Mafalda SFU

Mafalda SFU is a suite of Node.js packages that provides both vertical and
horizontal scaling on top of [Mediasoup](https://mediasoup.org/), at the same
time they provide a familiar and easy to use API.

## Features

- Automatically transparent abstracts and manage Mediasoup
  [Workers](https://mediasoup.org/documentation/v3/mediasoup/api/#Worker) and
  [Routers](https://mediasoup.org/documentation/v3/mediasoup/api/#Router), also
  located on different servers
- Designed for optimization of resources usage
- 100% tests code coverage of all projects for both lines, branches and
  statements
- Same orthogonal API for all modules inspired in Mediasoup design, easy to
  upgrade and combine between them

## Packages (Mafalda sub-projects)

- [Mafalda](): Mediasoup vertical scalability, allow to have Router objects that
  by-pass Mediasoup per-Worker limits.
- [Remote Mediasoup server]() & [Remote Mediasoup client](): remote control of
  Mediasoup instances.
- [Remote Mafalda server]() & [Remote Mafalda client](): remote control of
  Mafalda instances.
- *Mediasoup-horizontal*: Mediasoup horizontal scalability, allow to use
  Mediasoup Worker instances located on multiple servers from a single place as
  if they were local to it. _Currently in development_
- *Mafalda-horizontal*: Mafalda horizontal scalability, allow to have Router
  objects that transparently span over multiple servers and CPUs.
  _Currently in development_
- *Mafalda-swarm*: Decentralized horizontal scaling for Mafalda, allow to access
  streams from multiple entry points without a central management, based on P2P
  technologies and architecture. _Estimated September 2022_
- *Mafalda-monitor*: Mafalda network monitoring tool, allow to control stats and
  loads of the servers in the network and their connected clients.
  _Estimated December 2022_

## What package should I use?

Mafalda modular design allows you to use the packages that better fit for your
use case, and easily upgrade to other ones when you need it. To help you to
decide were to start, we've defined here some use cases:

### I'm writting a new server

If you are writtin a new server from scratch, the best option is to start with
[Mafalda]() package. This one will allow you not only to abstract from creating
and managing yourself the usage of multiple Mediasoup Workers, but also to load
balance the creation Mediasoup Routers on them, or pipe and join the Router
instance between them to by-pass Mediasoup per-Worker limits.

### I'm using only non-interconnected Router instances that I need them to scale

If you already have an app server using Mediasoup Routers and until now you
didn't need them to interconnect them to by-pass Mediasoup per-Worker limits, it
would pay-off the efforts of migrate your Mediasoup code to use Mafalda instead.
Mafalda API and design is based on Mediasoup one, so migration should be easy to
do, and would enjoy all the advantages of scalability and abstracted management
that Mafalda provides, without almost needing to change your application logic.

In addition to that, by using Mafalda will prepare your code to later upgrade to
use [Mafalda-horizontal]() and scale your app to multiple servers.

### I have mixed app logic and media, and want to split to improve architecture

If your app server code directly access Mediasoup API and need to move it out to
another machine to improve your systems architecture or use a server with more
resources to improve media performance, the easiest solution is to use
[Remote Mediasoup]() package. After creating and configuring a Remote Mediasoup
client, it will expose an object with the same API that Mediasoup provides, so
your you'll be able to control a Mediasoup instance running in another server
without needing to modify the logic of your app code at all.

Alternatively, you can also use [Mediasoup-horizontal](), that will already
prepare your application to scale to multiple servers without changes.

### I'm using Mafalda, and want to move out media server to improve performance

If you are already using Mafalda in a monolithic server, you can split your code
and use a remote media server by using [Remote Mafalda]() package and improve
your performance by having a dedicated media server. Similar to Remote
Mediasoup, you'll be able to control a Mafalda instance running in another
server, and prepare your code to upgrade later to use [Mafalda-horizontal]() and
allow each one of your sessions to grow and span over multiple CPUs and servers.

### My app uses Mediasoup, and I need to scale it to a large number of servers

If you need your Mediasoup-based app to being able to manage multiple media
servers, your solution is to use [Mediasoup-horizontal](). This will allows you
to control multiple Mediasoup instances as a single one, allowing to have remote
Workers and Routers all over them in a transparent way, as if running a single
machine with a lot of CPU cores.

_Currently in development_

### I need to host huge sessions that will span several CPUs in multiple servers

If your sessions can be potentially big and exceed the capability that can offer
a single server, [Mafalda-horizontal]() will help here. It will automatically
create, manage and interconnect the Router instances on the different servers
while providing the same API of Mafalda, so you'll only need to worry about
using it in your app code as if you only would need a single Router local
instance.

_Currently in development_

### I host humongous big sessions, and need to access them from multiple places

If your sessions can be *really* big or can't predict when that usage spikes
could happen or can be a lot of difference in sessions load from ones to other,
if the number of servers you need to manage is huge or you can't easily control
when or how to add them, if you need that stream distribution auto-regulates
itself finding the shortest path, or if you need to access the servers network
from multiple entry points (for example, from multiple regions), then *now we're
talking*.

[Mafalda-swarm]() will provide a federated and decentralized P2P architecture
build on top of the Mafalda network, self-managing its resources and allowing
access to it from any of their nodes by providing a search mechanism of the
streams.

_Estimated September 2022_

### I need to monitor the stats, loads and connections of all my Mafalda servers

Not directly related to solve scalability, but scalability-derived ones,
[Mafalda-monitor]() allows to control and monitor from a single place the
activity of all your Remote Mafalda servers and their network clients. With it,
you can have a real-time graphical view of the number of their Workers and
Routers, their CPU loads, their Transports, how are they inter-connected...

_Estimated December 2022_

## Created by [Jesús Leganés-Combarro 'piranna'](https://piranna.github.io/)
