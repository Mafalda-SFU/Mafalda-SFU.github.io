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

Both Vertical Workers and Routers can have multiple Mediasoup Workers and
Routers connected to them, and they can be shared between multiple Vertical
Workers and Routers, providing a M:N relationship between them. At most one
Mediasoup Worker will be created per CPU (in local environments) and set of
settings to prevent them to compete for resources, being shared by all the
Vertical Workers that were created with that set of settings, and at most one
Router will be created for each Mediasoup Worker and set of settings, that can
be shared by all the Vertical Routers that were created with that set of
settings. Their creation is lazy, being created and/or registered when the
Vertical Router doesn't have any Mediasoup Router to use whose Mediasoup Worker
has enough resources to handle a new Transport.

When looking for available Mediasoup Routers, Mafalda tries to concentrate the
resources, first by looking between the registered Mediasoup Routers whose
Mediasoup Worker has the higher CPU usage, later for already created but not
locally registered Mediasoup Routers, and finally by creating a new Mediasoup
Router if needed. This unbalanced assignment of resources is done to try to
concentrate the Consumers in as few Mediasoup Routers and Workers as possible,
to reduce the CPU usage and the lag, and allows not only to scale the system by
adding dynamically more CPUs (or more machines to the network, if combined with
the Mediasoup Horizontal module), but also to be able to switch them off also
dynamically when they are not needed, reducing the costs. This self management
spontaneously generates a tree architecture for the streams propagation from the
original Mediasoup Router to other Workers or maybe also to other machines, that
organically adapts to the current load and the available resources of the
system, in contract to other architectures with explicit ingress and egress
servers, that are more rigid and have a suboptimal usage of the resources.

pipeToRouter is implemented by just sharing the underlying real Mediasoup
Router between the source and destination Vertical Routers, so there's no need
to create a PipeTransport between them. Due to API compatibility, fake
Consumers, DataConsumers, DataProducers and Producers are created to mimic the
behavior of pipeToRouter function. Real pipeToRouter() calls are being done if
needed when calling to consume() if the source Router is  too busy to handle
more Consumers, doing the pipe'ing transparently to the developer and the users
to another less busy Router, and creating the requested Consumer there.
