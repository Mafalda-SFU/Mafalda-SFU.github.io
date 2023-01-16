# Architecture

Mafalda is based on multiple components that interact between them:

- *Mafalda Router*: this is the main component. It provides an easy to use API
  influended in the one from
  [Mediasoup Router](https://mediasoup.org/documentation/v3/mediasoup/api/#Router),
  but internally manage multiple Mediasoup Routers both in multiple local
  Workers or running in other machines (known as *Mafalda Nodes*),
  interconecting and sending the RTP streams between them, being all this
  processing transparent to the developer: he just only needs to create a
  Mafalda Router instance, and it will take care of everything else.

- *Mafalda Trackers*: responsible of monitor the work load of the Mafalda Nodes,
  Mafalda Routers ask them for other Mafalda Nodes with lower CPU usage whom to
  pipe the streams and delegate them the connection on new Mediasoup clients.
  These are inspired on BitTorrent / WebTorrent trackers, just only instead of
  track file fragments owned by each one of the peers in each swarm of the P2P
  network, they track the CPU loads of the connected Mafalda Nodes.

- *Mafalda Index*: not directly involved in the routers scaling, but an
  interesting addition. These ones tracks each one of the stream tracks, knowing
  what's the Mafalda Node that owns the original `Producer` for each one, so
  clients can ask them what's the Mafalda Router they need to connect to receive
  that track. Later, clients will try themselves to connect to the Mafalda
  Router, and if needed, this one will be responsible of connect them to another
  free Mafalda Node by making use of the Mafalda Trackers.

## Network architecture

Dyte project had a mesh architecture, where all Workers inside a machine were
interconnected, with Producers replicating the original ones. This is the same
architecture used by EduMeet (and maybe Mediasoup-demo), but has the drawback of
create a lot of Consumers just only to connect to the other Workers, also if
they are not being used.

Dyte new architecture is based on a chain, where each Worker has a single source
and sink, and the same when connecting multiple machines. This is simple to
implement, and has warranted that there's a single Consumer on each Worker to
interconect with others, but has the drawback of adding a lot of lag and delays
for the last Workes in the chain (both in the same machine or in others).

Mafalda on the other hand, it follows a tree architecture. Also, instead of
being designed to be used in many-to-many environments, it's done for
one-to-many, being the many-to-many a result of merging the multiple one-to-many
networks. This tree architecture is a result of trying to concentrate most
Consumers as possible in the original Worker to optimize CPU usage, and do the
same on the other ones, so as a side-effect lag is reduced to the minimum.
