# State of the art

## Current status

EduMeet creates multiple workers, with a router on each worker for each room.
Each time a new producer is created by a peer on the router it's associated on,
it's piped to the other room routers with `pipeToRouter()`, so it's available on
them as if it was a local producer. This is easy to implement and to use, but if
it's not being used for an all-to-all network scheme, this aproach is wasting
resources. Mediasoup has an stimated upper limit of about ~500 consumers per
worker, and using this aproach, it's being use a consumer for each worker
(usually one for each machine CPU core) for each room producer, also if they are
not being used.

As can be seen in the table below (with info for up to 40 peers, EduMeet default
max limit), the number of consumers used to connect routers between them
increase quickly with the number of workers / CPU cores. With this aproach, a
room with only 5 peers would use with 4 CPUs almost as much consumers to connect
to other routers than to connect to the peers themselves, and with 15 peers and
16 CPU cores it would waste the equivalent of a full CPU core only to connect to
other routers. Fact is, in this last use case, it would have been possible to
use a single CPU core to connect all the 15 peers between them without
surpassing the theoretical Mediasoup limit of ~500 consumers per worker / CPU
core:

|Peers | Producers per peer | Workers | Producers | Consumers | Pipe consumers |
|------|--------------------|---------|-----------|-----------|----------------|
|    5 |                  2 |       1 |        10 |        40 |              0 |
|    5 |                  2 |       2 |        10 |        40 |             10 |
|    5 |                  2 |       4 |        10 |      *40* |           *30* |
|    5 |                  2 |       8 |        10 |    **40** |         **70** |
|    5 |                  2 |      16 |        10 |    **40** |        **150** |
|   10 |                  2 |       1 |        20 |       180 |              0 |
|   10 |                  2 |       2 |        20 |       180 |             20 |
|   10 |                  2 |       4 |        20 |       180 |             60 |
|   10 |                  2 |       8 |        20 |     *180* |          *140* |
|   10 |                  2 |      16 |        20 |   **180** |        **300** |
|   15 |                  2 |       1 |        30 |       420 |              0 |
|   15 |                  2 |       2 |        30 |       420 |             30 |
|   15 |                  2 |       4 |        30 |       420 |             90 |
|   15 |                  2 |       8 |        30 |     *420* |          *210* |
|   15 |                  2 |      16 |        30 |   **420** |        **450** |
|   20 |                  2 |       1 |        40 |       760 |              0 |
|   20 |                  2 |       2 |        40 |       760 |             40 |
|   20 |                  2 |       4 |        40 |       760 |            120 |
|   20 |                  2 |       8 |        40 |       760 |            280 |
|   20 |                  2 |      16 |        40 |     *760* |          *600* |
|   20 |                  2 |      32 |        40 |   **760** |       **1240** |
|   30 |                  2 |       1 |        60 |      1740 |              0 |
|   30 |                  2 |       2 |        60 |      1740 |             60 |
|   30 |                  2 |       4 |        60 |      1740 |            180 |
|   30 |                  2 |       8 |        60 |      1740 |            420 |
|   30 |                  2 |      16 |        60 |    *1740* |          *900* |
|   30 |                  2 |      32 |        60 |  **1740** |       **1860** |
|   30 |                  2 |      64 |        60 |  **1740** |       **3780** |
|   40 |                  2 |       1 |        80 |      3120 |              0 |
|   40 |                  2 |       2 |        80 |      3120 |             80 |
|   40 |                  2 |       4 |        80 |      3120 |            240 |
|   40 |                  2 |       8 |        80 |      3120 |            560 |
|   40 |                  2 |      16 |        80 |      3120 |           1200 |
|   40 |                  2 |      32 |        80 |    *3120* |         *2480* |
|   40 |                  2 |      64 |        80 |  **3120** |       **5040** |

```js
let producers = peers * producers_per_peer
let consumers = peers * (producers - producers_per_peer)
let pipe_consumers = producers * (workers - 1)
```

This lead to think that this aproach only makes sense for rooms with a huge
number of peers, and at the same time with a reduced number of CPU cores, that
in the end would limit the scalability of the number of peers that can connect
to the room.

## Mafalda aproach

Mafalda makes use of a similar idea about interconnect multiple routers between
them, but follows a different aproach to try to optimize resources, and at the
same time, get ready to scale to multiple machines. The main ideas are:

- Abstract routers, making its management transparent to the application. No
  matter if it's used only one, or multiple are involved, Mafalda will always
  try to do the best thing. From the application PoV, it's using just only a
  single Mediasoup router with (potentially) unlimited resources.

- Manage Mediasoup workers globally to prevent competition for system resources,
  also when creating them from multiple places in the application or with
  different configurations.

- Concentrate as much peers as possible in each single router. This are created
  in a similar way to EduMeet (a router on each worker for each room), but
  instead of create all routers and workers at beginning, new workers are
  created on demand when current ones have a high CPU usage, and destroyed when
  they have no routers running. This allow to increase performance by improving
  CPU cache spatial location, and also don't need to create extra consumers to
  propagate data to other routers.

  This also has the advantage of being scalable in case it's possible to add
  new CPU cores dynamically to a machine. If that's not the case, a different
  heuristic creating routers of different rooms on different CPUs would have a
  better performance, since usage of each CPU core would increase slower,
  decreasing to need to create multiple routers for a single room and extra
  consumers to propagate data between them.

- When a new auxiliar router is created in another worker, create only the
  needed consumers to propagate data to it on demand, and destroy them when they
  are not needed anymore. In case there are no more free CPU cores to create new
  workers, try to use always the highest used ones to improve CPU cache spatial
  location. Consumers are created looking for the wanted producer first on the
  same router, later on a map of in what router where the original producers
  created (and create the connection between routers), or return error about
  producer not being found.

Additionally, Mafalda doesn't try only to provide a better usage of a machine
resources and allow to decrease costs by desactivating them when they are not
needed, but also try to extend them to allow to scale to multiple machines
providing the same transparent developer and user experience. For doing so, the
main ideas are:

- Mafalda will know of other instances running in other machines, both to know
  their CPU loads and to delegate creation of new transports and rtpObservers to
  them. Exact method is not yet defined, but some P2P decentralized alternatives
  are having a list of the other machines and propagate info in an all-to-all
  way, or using a central tracker server that collect the info from all the
  instances.

- When all CPU cores in an instance have a high usage, Mafalda will search for
  another machine with more spare CPU to delegate the requests instead. These
  other instances need to provide an API to accept these requests, both provided
  by they application code they are being running from (it can be the same API
  of the main application), or by a standalone server that provides it instead
  (`mafalda-cluster-node`?).

- Since connections have the IPs and ports of both endpoints, delegated
  connections are being directly handled by the delegated instances, not being
  the original instance part of the connection beyond the exchange of the info
  needed to do the connection itself. Only performance or resources usage
  penalty of being a delegated connection or not, is in case there's not a
  consumer used to connect the requested producer to the destination router.

- If there are multiple routers in a destination instance making use of the same
  producer, there are two alternatives: use a single inter-machines connection
  and later connect the routers in the destination machine, or have multiple
  inter-machines connections, one for each one of the destination routers. In
  both cases global number of consumers is the same, differences are that the
  first alternative have a higher CPU load in destination machine and some
  consumers would have a higher lag than the main one since they are in cascade,
  while the second aproach lag would be the same for all routers but CPU load
  would be higher in origin machine and bandwidth would be greater, so this last
  one would make sense only when instances are in the same network.

- In case a Mafalda instance is configured to don't run any worker on its own,
  all the app requests will be delegated to other instances, acting this one
  mostly like a proxy or manager for the other ones.

- Consumers are created looking first in current router and Mediasoup instance,
  later asking for its UUID to other Mediasoup instances, or return error about
  producer not being found.
