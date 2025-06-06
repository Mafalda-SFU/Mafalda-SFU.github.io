---
permalink: /chronology/
title: Chronology
toc: true
toc_sticky: true
---

Total development time: 30 months

## Stage 1: vertical scaling (March - June 2021)

### March 2021

- Started project design and architecture

### April 2021

- Develop [Mafalda](/Mafalda) module (vertical scaling core)

### May 2021

- [Mafalda](/Mafalda) module (vertical scaling core) is feature complete,
  matching all [Mediasoup](https://mediasoup.org/) functionality

### June 2021

- [Mafalda](/Mafalda) module (vertical scaling core) has 100% tests coverage for
  both lines, statements, functions and branches

## Stage 2: remote control (July - October 2021)

### July 2021

- Design of horizontal scaling architecture and remote control protocol
- Started development of [Remote Mediasoup](/Remote-Mediasoup-client) and
  [Remote Mafalda](/Remote-Mafalda-client) clients
- Unified APIs of local libraries and remote clients (both pass the same API
  acceptance tests)
- Ensure no more Workers than CPUs are being used, also from different processes
  (using [FsSet](/FsSet) module internally)
- Started development of [Remote Mafalda](/Remote-Mafalda-server) and
  [Remote Mediasoup](/Remote-Mediasoup-server) servers

### August 2021

- Develop [Remote Mediasoup](/Remote-Mediasoup-server) and
  [Remote Mafalda](/Remote-Mafalda-server) servers
- Design P2P decentralized federation protocol for horizontal scalability
- First corporate client of vertical scaling
  ([Deepgrid Datacentre](https://deepgrid.in/))
- Improved security and APIs homogeneity

### September 2021

- Both Remote Mediasoup and Remote Mafalda clients and servers are feature
  complete
- Remote Mafalda integration tests are passing

### October 2021

- Improve tests coverage of remote control and fix tests auxiliar dependencies
- Fix remote objects protocol and full restore of remote state on connection
- Adjust to new Mediasoup API (removal of leaked private properties and methods)

### November 2021

- Improved documentation
- All Mafalda SFU modules are composable between them

### December 2021

- Implemented [Mediasoup horizontal](/Mediasoup-horizontal) scalability, with
  100% tests coverage

### January 2022

- Implemented [Mediasoup cluster](/Mediasoup-cluster), with 100% tests coverage
- Improve reliability of remote control
- 100% tests coverage for all remote control modules

## Stage 3: Easy porting of actual applications (April - July 2022 and December 2022 - January 2023)

### April 2022

- Develop transparent reconnections support for
  [Remote Mediasoup client](/Remote-Mediasoup-client)

### May 2022

- Fully implement transparent reconnections support for
  [Remote Mediasoup client](/Remote-Mediasoup-client)
- Port [EduMeet](https://github.com/edumeet/edumeet) to `Remote Mediasoup` in
  [just 40 lines of code](https://github.com/Mafalda-SFU/EduMeet-Mafalda/compare/03d78e9dfcf19106a69278c1506c3618730bf734...303be91a6739698b5ba9bb0e49c6f040a20ca92c)

### June 2022

- Define customized linting configuration and unify code style in all projects
- De-duplicate `appData` objects in `Remote Mediasoup`

### July 2022

- Finish de-duplication of `appData` objects in `Remote Mediasoup`

### December 2022

- Fix final bugs for porting EduMeet to `Remote Mediasoup`
- Automate and update projects documentation

### January 2023

- Update projects documentation and main webpage
- Update Mafalda SFU repositories to use new `Remote Mediasoup` and ROPE client
  APIs
- Improve testing, linting and documentation generation in all projects, and
  automate them in CI servers
- Start design and architecture of `Mediasoup vertical` module

## Stage 4: Mediasoup vertical scaling & packages publishing (February - December 2023)

### February 2023

- Work on implement vertical scaling of Mediasoup, based on code from
  [Mafalda](/Mafalda) module.

### March 2023

- Improve usage and publish of standalone servers

### April 2023

- Improve publish of standalone servers and client libraries
- Publish packages to NPM and Github Packages Registry

### May 2023

- Update web page and documentation
- Improve stability of CI servers and standalone packages
- Implement packages licenses system

### June 2023

- Improve documentation
- Improve clients-servers connections security
- Reduce size of standalone servers

### July 2023

- QA in a Box: create npm package with all the needed tools and unified config
  files for all the Mafalda SFU projects

### August 2023

Development was temporaly paused due to professional responsibilities.

### September 2023

- Improve projects stability and reliability

### October 2023

- Improve projects testing

### November 2023

- Improve reliability of Horizontal and Clustered Mediasoup, and prepare
  compatibility with [Mediasoup Vertical](/Mediasoup-vertical)

### December 2023

- Finish migration of original [Mafalda](/Mafalda) module to
  [Mediasoup Vertical](/Mediasoup-vertical), and compatibility with
  [Mediasoup API](https://mediasoup.org/documentation/v3/mediasoup/api/)
- Investors documentation

### January 2024

- Automate testing and publishing of all packages
- Improve investors documentation

### February 2024

- Automate testing and publishing of all packages

## Stage 5:  (December 2024 - March 2025)

### December 2024

- Update APIs and compatibility with latest Mediasoup version

### February 2025

- Unify APIs & improve modules composability

### March 2025

- Unify APIs & improve modules composability
- Aggregated scalability (vertical on top of horizontal)
- Prepare for the next stage: Mediasoup as a Service

## Stage 6: Mediasoup as a Service (April 2025 - Currently in progress)

Notify about actual servers usage so it's possible to spin-up more instances on
demand, as a previous step to start offering Remote Mediasoup instances on the
cloud.

## Roadmap

All dates are estimated and can suffer of variations. If you are interested on
any of the future roadmap topics, [contact us](/contact) to discuss for
commercial services.

### Stage 7: Mafalda Monitor: network monitor (October 2025 - January 2026)

Tool to monitor in real time the usage and capacity of all servers and clients
in the network: CPU usage of `Worker`s, number of `Router`s and `Transport`s...

### Stage 8: Mafalda Swarm: P2P decentralized scaling (February - July 2026)

Use of a Distributed Hash Table to register the Mafalda instances and send
requests directly between them, without a central controller. Also use it to
search for original `Producer`s of a stream and ask for them to connect.
