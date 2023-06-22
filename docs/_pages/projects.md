---
permalink: /projects/
title: Mafalda projects
---

All Mafalda SFU packages have by design an orthogonal API, making it possible to
combine them in a mix-n-match way to create the best fit for your use case. The
next diagram shows all the possible combinations:

```mermaid
graph TD
  mediasoup(Mediasoup)
  mediasoupCluster(Mediasoup Cluster)
  mediasoupHorizontal(Mediasoup Horizontal)
  mediasoupVertical(Mediasoup Vertical)
  remoteMediasoupClient(Remote Mediasoup client)
  remoteMediasoupServer(Remote Mediasoup server)

  mediasoupCluster -.-> mediasoupCluster
  mediasoupCluster -.-> remoteMediasoupServer

  mediasoupHorizontal ==> remoteMediasoupClient

  mediasoupVertical ==Mediasoup Vertical Server ==> mediasoup
  mediasoupVertical ==Mediasoup Vertical Cluster==> mediasoupHorizontal
  mediasoupVertical --Mediasoup Vertical Proxy  --> remoteMediasoupClient

  remoteMediasoupClient -.-> remoteMediasoupServer
  remoteMediasoupClient -.-> mediasoupCluster

  remoteMediasoupServer ==Mediasoup Server ==> mediasoup
  remoteMediasoupServer ==Mediasoup Cluster==> mediasoupHorizontal
  remoteMediasoupServer                    ==> mediasoupVertical
  remoteMediasoupServer --Mediasoup Proxy  --> remoteMediasoupClient

  classDef mafaldaApi         fill:#ED872D,stroke:#333
  classDef mediasoupAPI       fill:#1eb6e8,stroke:#333,font-family:PoiretOne
  classDef remoteMediasoupAPI fill:#9f6,stroke:#333

  class mediasoup,remoteMediasoupClient mediasoupAPI
  class mediasoupHorizontal,mediasoupVertical mafaldaApi
  class mediasoupCluster,remoteMediasoupServer remoteMediasoupAPI

  click mediasoup "https://mediasoup.org/"
  click mediasoupCluster "/Mediasoup-cluster"
  click mediasoupHorizontal "/Mediasoup-horizontal"
  click mediasoupVertical "/Mediasoup-vertical"
  click remoteMediasoupClient "/Remote-Mediasoup-client"
  click remoteMediasoupServer "/Remote-Mediasoup-server"
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
