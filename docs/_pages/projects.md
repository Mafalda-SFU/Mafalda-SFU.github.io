---
permalink: /projects/
title: Mafalda projects
toc: true
toc_sticky: true
---

All Mafalda SFU packages have by design an orthogonal API, making it possible to
combine them in a mix-n-match way to create the best fit for your use case. The
next diagram shows all the possible combinations:

```mermaid
graph TD
  mediasoup((Mediasoup))
  mediasoupCluster[/Mediasoup cluster\]
  mediasoupClusterCLI([Mediasoup cluster CLI])
  mediasoupProxy[Mediasoup proxy]
  mediasoupProxyCLI([Mediasoup proxy CLI])
  mediasoupHorizontal[/Mediasoup horizontal\]
  mediasoupVertical[[Mediasoup vertical]]
  remoteMediasoupClient(Remote Mediasoup client)
  remoteMediasoupClientMock([Remote Mediasoup client mock])
  remoteMediasoupServer[\Remote Mediasoup server/]
  remoteMediasoupServerCLI([Remote Mediasoup server CLI])


  mediasoupCluster <-.-> mediasoupProxy

  %% mediasoupCluster -.-> mediasoupCluster
  mediasoupCluster -.-> remoteMediasoupServer

  %% mediasoupProxy -.-> mediasoupProxy
  mediasoupProxy -.-> remoteMediasoupServer

  mediasoupClusterCLI ==> mediasoupCluster

  mediasoupProxyCLI ==> mediasoupProxy

  mediasoupHorizontal ==> remoteMediasoupClient

  mediasoupVertical ==Mediasoup vertical cluster==>  mediasoupHorizontal
  mediasoupVertical ==Mediasoup vertical server ===> mediasoup
  mediasoupVertical --Mediasoup vertical proxy  -->  remoteMediasoupClient

  remoteMediasoupClient -.-> mediasoupCluster
  remoteMediasoupClient -.-> mediasoupProxy
  remoteMediasoupClient -.-> remoteMediasoupServer

  remoteMediasoupClientMock ----> mediasoup

  remoteMediasoupServer ==> mediasoup
  remoteMediasoupServer ==> mediasoupHorizontal
  remoteMediasoupServer ==> mediasoupVertical
  remoteMediasoupServer --> remoteMediasoupClient

  remoteMediasoupServerCLI ====> remoteMediasoupServer


  classDef mafaldaApi         fill:#ED872D,stroke:#333
  classDef mediasoupAPI       fill:#1eb6e8,stroke:#333,font-family:PoiretOne
  classDef remoteMediasoupAPI fill:#9f6,stroke:#333

  class mediasoup,remoteMediasoupClient,remoteMediasoupClientMock mediasoupAPI
  class mediasoupHorizontal,mediasoupVertical mafaldaApi
  class mediasoupCluster,mediasoupClusterCLI remoteMediasoupAPI
  class mediasoupProxy,mediasoupProxyCLI remoteMediasoupAPI
  class remoteMediasoupServer,remoteMediasoupServerCLI remoteMediasoupAPI

  click mediasoup "https://mediasoup.org/"
  click mediasoupCluster "/Mediasoup-cluster"
  click mediasoupClusterCLI "/Mediasoup-cluster-CLI"
  click mediasoupProxy "/Mediasoup-proxy"
  click mediasoupProxyCLI "/Mediasoup-proxy-CLI"
  click mediasoupHorizontal "/Mediasoup-horizontal"
  click mediasoupVertical "/Mediasoup-vertical"
  click remoteMediasoupClient "/Remote-Mediasoup-client"
  click remoteMediasoupClientMock "/Remote-Mediasoup-client-mock"
  click remoteMediasoupServer "/Remote-Mediasoup-server"
  click remoteMediasoupServerCLI "/Remote-Mediasoup-server-CLI"
```

Thick lines represent main usage relationships, thin lines are compatible ones
but their usage is not promoted. Dotted lines are client-server network
connections.

## Main projects

- [Mafalda](/Mafalda): Mediasoup vertical scalability, allow to have Router
  objects that by-pass Mediasoup per-Worker limits.
- [Remote Mediasoup server](/Remote-Mediasoup-server) &
  [Remote Mediasoup client](/Remote-Mediasoup-client): remote control of
  Mediasoup instances, both of them build on top of [ROPE server](/ROPE-server)
  & [ROPE client](/ROPE-client).
- [Mediasoup-cluster CLI](/Mediasoup-cluster-CLI): standalone server using
  [Mediasoup-horizontal](/Mediasoup-horizontal) to control multiple Remote
  Mediasoup servers from a single endpoint.

- *Mafalda-swarm*: Decentralized horizontal scaling for Mafalda, allow to access
  streams from multiple entry points without a central management, based on P2P
  technologies and architecture. *Estimated August 2023*

## Auxiliary packages

- [Remote Mafalda server](/Remote-Mafalda-server) &
  [Remote Mafalda client](/Remote-Mafalda-client): remote control of Mafalda
  instances.
- [Mediasoup-horizontal](/Mediasoup-horizontal): Mediasoup horizontal
  scalability, allow to use Mediasoup Worker instances located on multiple
  servers from a single place as if they were local to it.
- [ROPE server](/ROPE-server) & [ROPE client](/ROPE-client): canonical
  implementations of the *Remote Objects, Procedures and Events* protocol, that
  allow remote control of objects located as if they were local, including
  sync'ed updates of remote state, also when multiple clients are involved.

- *Mafalda-monitor*: Mafalda network monitoring tool, allow to control stats and
  loads of the servers in the network and their connected clients.
  *Estimated December 2023*

## Related pages

- [What package should I use?](/what-package-should-I-use/)

## Mafalda SFU ❤️ Open Source

Mafalda SFU is build on top of multiple Open Source projects, being
[Mediasoup](https://mediasoup.org/) the most prominent one. In addition to that,
during development of Mafalda SFU we have created and published multiple
auxiliary Open Source projects and contributed to several others, between
dependencies, tools, demos, reporters, forks... You can find a list of all of
them at [Mafalda SFU Github organization](https://github.com/Mafalda-SFU), and
at [Mafalda SFU NPM organization](https://www.npmjs.com/org/mafalda-sfu).
