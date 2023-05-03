# Chronology

## Stage 1: vertical scaling (March - June 2021)

### March 2021

- Started project design and architecture

### April 2021

- Develop [Mafalda](Mafalda) module (vertical scaling core)

### May 2021

- [Mafalda](Mafalda) module (vertical scaling core) is feature complete,
  matching all [Mediasoup](https://mediasoup.org/) functionality

### June 2021

- [Mafalda](Mafalda) module (vertical scaling core) has 100% tests coverage for
  both lines, statements, functions and branches

## Stage 2: remote control (July - October 2021)

### July 2021

- Design of horizontal scaling architecture and remote control protocol
- Started development of [Remote Mediasoup](Remote-Mediasoup-client) and
  [Remote Mafalda](Remote-Mafalda-client) clients
- Unified APIs of local libraries and remote clients (both pass the same API
  acceptance tests)
- Ensure no more Workers than CPUs are being used, also from different processes
  (using [FsSet](FsSet) module internally)
- Started development of [Remote Mafalda](Remote-Mafalda-server) and
  [Remote Mediasoup](Remote-Mediasoup-server) servers

### August 2021

- Develop [Remote Mediasoup](Remote-Mediasoup-server) and
  [Remote Mafalda](Remote-Mafalda-server) servers
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
- All Mafalda modules are composable between them

### December 2021

- Implemented [Mediasoup horizontal](Mediasoup-horizontal) scalability, with
  100% tests coverage

### January 2022

- Implemented [Mediasoup cluster](Mediasoup-cluster), with 100% tests coverage
- Improve reliability of remote control
- 100% tests coverage for all remote control modules

### February and March 2022

Development was temporaly paused due to profesional responsabilities.

## Stage 3: Easy porting of actual applications (April - July 2022 and December 2022 - January 2023)

### April 2022

- Develop transparent reconnections support for
  [Remote Mediasoup client](Remote-Mediasoup-client)

### May 2022

- Fully implement transparent reconnections support for
  [Remote Mediasoup client](Remote-Mediasoup-client)
- Port [EduMeet](https://github.com/edumeet/edumeet) to `Remote Mediasoup` in
  [just 25 lines of code]()

### June 2022

- Define customized linting configuration and unify code style in all projects
- De-duplicate `appData` objects in `Remote Mediasoup`

### July 2022

- Finish de-duplication of `appData` objects in `Remote Mediasoup`

### August to November 2022

Development was temporaly paused due to profesional responsabilities.

### December 2022

- Fix final bugs for porting EduMeet to `Remote Mediasoup`
- Automate and update projects documentation

### January 2023

- Update projects documentation and main webpage
- Update Mafalda repositories to use new `Remote Mediasoup` and ROPE client APIs
- Improve testing, linting and documentation generation in all projects, and
  automate them in CI servers
- Start design and architecture of `Mediasoup vertical` module

## Stage 4: Mediasoup vertical scaling & packages publishing (February 2023 - Currently)

### February 2023

- Work on implement vertical scaling of Mediasoup, based on code from Mafalda
  module.

### March 2023

- Improve usage and publish of standalone servers

### April 2023

- Improve publish of standalone servers and client libraries
- Publish packages to NPM and Github Packages Registry

### May 2023

- Update web page and documentation
- Split out [AppDataManager](AppDataManager) from `Remote Mediasoup` server and
  client into a new module

## Roadmap

All dates are estimated and can suffer of variations depending of the found
difficulties, development speed, or due to having other personal or professional
priorities. If you are interested on any of the future roadmap topics, contact
us to discuss a sponsorship or commercial services.

### Stage 5: P2P decentralized horizontal scaling (May 2023 - August 2023)

Use of a Distributed Hash Table to register the Mafalda instances and send
requests directly between them, without a central controller. Also use it to
search for original `Producer`s of a stream and ask for them to connect.

### Stage 6: network monitorization (September 2023 - December 2023)

Tool to monitor in real time the usage and capacity of all servers and clients
in the network: CPU usage of `Worker`s, number of `Router`s and `Transport`s...

### Stage 7: Mafalda as a Service (January - June 2024)

Notify about actual servers usage so it's possible to spin-up more instances on
demand, as a previous step to start offering Mafalda an Remote Mediasoup
instances on the cloud.
