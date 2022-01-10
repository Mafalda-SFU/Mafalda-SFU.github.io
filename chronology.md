# Chronology

## Round 1: vertical scaling (March - June 2021)

### March 2021

- Started project design and architecture

### April 2021

- Develop vertical scaling core

### May 2021

- Vertical scaling core is feature complete, matching all Mediasoup
  functionality

### June 2021

- Vertical scaling core has 100% tests coverage for both lines, statements,
  functions and branches

## Round 2: remote control (July - October 2021)

### July 2021

- Design of horizontal scaling architecture and remote control protocol
- Started development of remote Mediasoup and Mafalda clients
- Unified APIs of local libraries and remote clients (both pass the same API
  acceptance tests)
- Ensure no more Workers than CPUs are being used, also from different processes
  (FsSet)
- Started development of Mafalda Node and remote Mediasoup

### August 2021

- Develop remote Mediasoup and Mafalda Node servers
- Design P2P decentralized federation protocol for horizontal scalability
- First corporate client of vertical scaling
  ([Deepgrid Datacentre](https://deepgrid.in/))
- Improved security and APIs homogeneity

### September 2021

- Both Remote Mediasoup and Remote Mafalda clients and servers are feature
  complete
- remote control integration tests are passing

### October 2021

- Improve tests coverage of remote control and fix tests auxiliar dependencies
- Fix remote objects protocol and full restore of remote state on connection
- Adjust to new Mediasoup API (removal of leaked private properties and methods)

### November 2021

- Improved documentation
- All Mafalda modules are composable between them

### December 2021

- Implemented Mediasoup horizontal scalability, with 100% tests coverage

### January 2022

- Implemented `Mediasoup-cluster`, with 100% tests coverage
- 100% tests coverage for all remote control modules

## Roadmap

All dates are estimated and can suffer of variations depending of the found
difficulties, development speed, or due to having other personal or professional
priorities. If you are interested on any of the future roadmap topics, contact us to discuss a sponsorship or commercial services.

### Round 3: Mafalda hierarchical horizontal scaling (January 2022 - April 2022)

Use of remote control modules to create a central controller that can dispatch
and delegate requests to the Mafalda instances running in other servers, and
route and interconnect them.

### Round 4: P2P decentralized horizontal scaling (May - August 2022)

Use of a Distributed Hash Table to register the Mafalda instances and send
requests directly between them, without a central controller. Also use it to
search for original `Producer`s of a stream and ask for them to connect.

### Round 5: network monitorization (September - December 2022)

Tool to monitor in real time the usage and capacity of all servers and clients
in the network: CPU usage of `Worker`s, number of `Router`s and `Transport`s...
