---
permalink: /FAQ/
title: FAQ
toc: true
toc_sticky: true
---

![thinking]({{ site.url }}{{ site.baseurl }}/assets/images/cocomaterial/thinking_man.svg){: .align-right width="40.6779661017%" }

## Background

### How did Mafalda SFU start?

Idea conception came in March 2021, when as part of WebRTC consultancy services,
we received two requests for advice and help from two different companies about
scaling Mediasoup sessions over multiple servers. We had no idea about how to do
that, so we started development of a proof of concept project in April 2021 just
to understand the problem better.

After a first innocent (I promise) public comment about its development in
[May](https://twitter.com/el_piranna/status/1396126065677021193), we attracted a
lot of attention from multiple companies interested in the technology we were
developing. We did not expect that, but we were happy to see that there was a
lot of interest in the project, and that we were not the only ones with this
problem. After some research, we found that there was no off-the-shelves
solution available for it, and that the only way to achieve media scalability
was to depend on (expensive) third-party providers, or create a custom solution
for each case, which was not sustainable in the long term.

So after that, during [June](https://mediasoup.discourse.group/t/for-a-snippet-of-code-for-horizontal-scaling-using-pipetransports/2790/11)
we started to make it a commercial product meanwhile getting more interest, and
on [July](https://mediasoup.discourse.group/t/presenting-mafalda-sfu/3067) of
2021, we made it public the first version of Mafalda SFU. At first it only
supported vertical scalability and had a custom API, but it was a good start and
we started to sell some licenses and close some contracts.

After that, we continued to work on the project, adding more features like
horizontal scalability support, or change its API to be 100% compatibility with
Mediasoup, allowing Mafalda SFU to be used as a drop-in replacement for
Mediasoup. But also, that helped us to keep the same philosophy of the project
of offering the upmost quality and performance, also on detriment of the
development time.

### Where does the name of Mafalda SFU come from?

Name of the project has been taken as a tribute to
[Mafalda](https://en.wikipedia.org/wiki/Mafalda), the character created by
Joaquín Salvador Lavado Tejón '[Quino](https://www.quino.com.ar/homequino)',
that has a love-hate relationship with both *mass media* and soup 😉

### Where are you located?

Mafalda SFU team is mostly located in the European Union (mostly in Spain) and
the United Arab Emirates.

### Where are your servers located?

Our servers for demos, tests and SaaS are located in Paris, France, and follow
the European Union GDPR regulations. We are expanding our server
infrastructure to other regions around the globe.

### What's the Mafalda SFU projects code coverage?

Most of the main dependencies and auxiliary projects have more than 80% code
coverage (in some cases that gets up to 100% code coverage for both statements,
branches and functions). For all main and core Mafalda SFU projects, code
coverage gets up to more than 90%.

## Functionality

### Will Mafalda SFU allows me to display thousands of participants in a single room?

**TL;DR:** Not by itself, but we can help you to achieve it.

In a similar way to how [Mediasoup](https://mediasoup.org/) does, Mafalda SFU
works like a library that allows to create and manage WebRTC audio and video
conference rooms and media streaming sessions with thousands of participants at
the same time over multiple servers, in a fully automated way. The bottleneck in
this case is the number of participants that can be played at the same time,
that's not a limitation of [Mediasoup](https://mediasoup.org/) or Mafalda SFU,
but of the browser or mobile app clients that are playing them, the capacity of
the computer or mobile phone they are running on top of, and their network
bandwidth. Several tests has shown that Chrome browser in a regular Intel i7
laptop can smoothly play up to 16 videos at the same time, starting to be
unstable with 20-25 videos, and being practically useless with 30 or more
videos, also with low resolution and framerate. On mobile phones and tablets
devices, it's not practical to show more than 6 videos a the same time, mostly
due to screen space available.

In addition to that practical hardware or bandwidth limits from the clients
side, Chrome itself imposed a hard limit of
[200 tracks (audio or video) on desktop and 100 tracks on mobile](https://chromium.googlesource.com/chromium/src/+/9e03c50a4b268bbca6f2cba903131b88072420d7%5E%21/#F0)
due to these quality issues, although it was later uplift to
[1000 tracks](https://chromium.googlesource.com/chromium/src/+/f7489718ee87fbef92c59d35d9437cf55466fa2c%5E%21/#F0)
until a better solution was implemented since there was
[critics](https://bugs.chromium.org/p/chromium/issues/detail?id=1232649) from
developers of high demanding web applications, but as of January 2024 it's still
[not implemented](https://bugs.chromium.org/p/chromium/issues/detail?id=1144736).

If your application needs to play more streams than the browser or mobile app
can handle, you can use Mafalda SFU to manage the media streams and distribute
them to the clients, but you'll need to implement your own logic to display
them in a way that is useful for your application. For example, in a video
conference app you can have a layout where only the most recently active users
are being shown, and push back others to a list, so you can mute or stop their
video tracks and only play the audio of that less recently active participants,
or in a metaverse you can play the audio of the closest avatars, saving both CPU
processing and bandwidth at the same time.

Mafalda SFU team have been involved in the past in development of projects with
similar requirements (that's one of the reasons
[we started](#how-did-mafalda-sfu-start) Mafalda SFU project on the first
place), and we are capable of offer you consultancy services to help you define
what's the best architecture for your particular use case and needs, or also we
can be able to implement it for you.

### What Mafalda SFU scalability solution better suits me?

Mafalda SFU modularity makes it very flexible regarding use cases or
architecture designs, but we have had a set of use cases we have seen to be very
common when working on other previous projects. That doesn't means that Mafalda
SFU would not be able to work in other scenarios, nor we could not be able to
adapt it to your use case on demand, but theses ones show how much versatile
Mafalda SFU can be.

#### Lots of small sized rooms (each one under capacity limits of a single CPU)?

*Horizontal scalability*, also known as *scale out*: `Mediasoup Cluster`
controlling several `Remote Mediasoup server` instances running on top of
vanilla `Mediasoup`. Alternatively, `Mediasoup-horizontal` can be used
standalone (running in local) to control the `Remote Mediasoup server`
instances, but it's not recommended for performance and stability reasons.

#### One medium sized room (under capacity limits of multi-CPUs single server)?

*Vertical scalability*, also known as *scale up*: `Mediasoup Vertical` running
on top of vanilla `Mediasoup`, aggregating all the systems resources and
offering them to the application as if running on a single, huge CPU.

#### Some medium sized rooms (under capacity limits of each single server)?

Cluster of `Mediasoup Vertical`s (*horizontal-over-vertical* scalability):
`Mediasoup Cluster` controlling several `Remote Mediasoup server` instances
running on top of `Mediasoup-Vertical`. This is not provided as a standalone
product, but instead it's offered as an architecture configuration option.

#### One or a few of big sized rooms (expanding over multiple servers)?

`Mediasoup vertical cluster` (*vertical-over-horizontal* scalability, also known
as *aggregated or combined scalability*): `Mediasoup-vertical` running on top of
`Mediasoup-horizontal`, controlling several `Remote Mediasoup server` instances
running on top of vanilla `Mediasoup`. For performance reasons, it's encouraged
the `Remote Mediasoup server` instances make use of the `Mediasoup Vertical`
module themselves (for example, being `Remote Mediasoup vertical server`,
`Remote vertical proxy`, or `Remote vertical cluster` instances), to improve
closer locality of related Mediasoup `Worker`s in a room.

### What kind of companies are using Mafalda SFU?

Mafalda SFU team have worked for several companies based on Europe, India and
USA, and some of them are multinationals leading on their sector and with more
than 70 years in active since their foundation. We got interested companies from
the areas of streaming and video conference infrastructure services, metaverses,
intercoms, real-time bidding, online concerts, e-learning, high-scale video
conferencing, real-time collaboration, or event streaming.

## Pricing Model

### What is Mafalda SFU pricing structure?

Mafalda SFU is being offered for on-premises solutions only. We offer two
pricing models, *lifetime single* licenses, and *renovable one-year*
licenses with updates during the contract year, both with the same cost.
Licenses are per-server installation.

Additionally, we have started to offer a *SaaS* solution, where we provide the
server infrastructure and the software, and you only need to connect to it. This
is still experimental, if you are interested in it, please
[contact us](/contact) and we can discuss the details.

### What is the cost of a license?

License costs depend on the actual modules you need for your architecture, and
the number of servers you need to install them. For an adjusted quote, please
[contact us](/contact) and we'll provide you some advices of what solution
better fits you.

### Are there volume discounts or enterprise plans?

We are not offering volume discounts or enterprise plans at this moment, but we
are open to discuss a scheme that better fits your needs, for example, we can
consider a discount in exchange of a small commission per user or stream. Just
[contact us](/contact) and we can try to find an agreement that fits both
parties.

### Is there a free trial or demo version available?

There's no free trial available at this moment. Regarding demo code or
deployments, you can check on the [demos](/demos/) page.

### Are additional services like TURN/STUN, analytics, and transcoding included?

We are not offering them at this time, since Mafalda SFU focuses only on
scalability of media streaming. Said that, if you are in need of them, we can
discuss the details of your actual needs, to offer that services too. Just
[contact us](/contact) and we can discuss the details.

## Migration & Support

### Do you provide migration assistance from our current SFU?

With each license, we provide 10 hours of technical support for migration
assistance. In addition to that, we have documentation and open source SDKs.

### What level of integration support is available?

We provide documentation for all the modules. You can take a look how it would
be to migrate your current architecture to Mafalda SFU by using
[Remote Mediasoup Client mock](/Remote-Mediasoup-client-mock/), changing later
to use any of the Mafalda SFU client package is just a matter of changing only
the import statement, by design all of them have the same compatible and
interchangeable API. Finally, we offer 10 hours engineering support for
integration purposes with each license, and we can offer additional paid support
if needed.

### Is 24/7 technical support available, and what SLAs do you offer?

We offer technical support in a best-effort basis (usually under 12-24 hours on
weekdays). We are not offering 24/7 support at this moment, but we are open to
discuss a support contract for it. Just [contact us](/contact) and we can
discuss the details.

Said that, one of the main premises of Mafalda SFU is to offer the same API and
100% API compatibility with Mediasoup, so based on our experience, after the
initial migration to Mafalda SFU, there's no need for additional maintenance
except for bugfixes or Mediasoup compatibility updates.

## Security & Compliance

### What security measures are in place?

Control commands communications are based on WebSockets, and optionally
encrypted with [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security).
Media and DataChannels are encrypted with
[DTLS](https://en.wikipedia.org/wiki/Datagram_Transport_Layer_Security)
following WebRTC specification.

Authentication for control WebSockets is planned by using
[TLS Client Authentication](https://blog.cloudflare.com/introducing-tls-client-auth/),
but currently it's a experimental feature. That should also offer some
protection against DDoS attacks, so if you need them, we can get an agreement to
prioritize their development.

### Do you comply with GDPR, HIPAA, or other industry regulations?

We have not addressed them explicitly, but due to the actual architecture of
Mafalda SFU, and since currently it is intended only to be deployed on-premises,
we don't get in conflict with any of those regulations.

## Performance & Scalability

### Do you have performance benchmarks comparing Mafalda SFU with Mediasoup?

Mafalda SFU just only manages the orchestration of Mediasoup instances, so media
performance would be the same as Mediasoup itself. Said that, the way it
handles, monitors and balances the systems load in real-time, it would provide a
performance equal or better to what would be obtained with manual fine-tuning.

### How does Mafalda SFU handle auto-scaling (both horizontally and vertically)?

Mafalda SFU supports dynamic scaling based on CPU loads for both vertical and
horizontal scaling. For horizontal scaling, at this moment requires adding or
removing servers manually, but It's planned some integration with infrastructure
providers to add or remove the servers automatically on-demand. If you are
interested on this feature, [contact us](/contact) and we can get an agreement
to prioritize it.

### What are the recommended hardware specs on a single server?

It depends on both the performance of the server CPU cores being used, and the
actual application use case, it's not the same having small groups or 1-to-many
or all-to-all implementations. Depending on that, it would be from 1 single CPU
core for 500 participants in a 1-to-1 system, up to a cluster of 1000 servers
for 2000 concurrent users in all-to-all connections, for example.

That's the theoretical limit, in that cases the bottleneck would be on the
clients side, so the client code or the application server code would need to
manage what streams are active ones for each client at any moment. Also, it's
not the same just pausing the streams, than stopping them and adding new ones,
since that would require to re-negotiate the media connections but the CPU load
would be smaller, so servers would be able to handle more streams.

A fundamental requirement is that they need to be physical dedicated servers,
any media related service will have a suboptimal performance in a shared virtual
server, since other instances would steal resources and CPU cycles. We can be
able to assist setting it, if needed.

In short, that's application dependent, but we can help you on that too, just
[contact us](/contact) and we can discuss it.

## Migration & Integration Considerations

### How frequently are modules updated? Do they support all Mediasoup features?

Mafalda SFU package are monitoring for new Mediasoup updates each 6 hours. Once
a new version is published, all Mafalda SFU packages fully run all their tests
suites (including
[Mediasoup original tests](https://github.com/Mafalda-SFU/Mediasoup-node-tests))
with the new version of Mediasoup. If all tests pass, a new version is released,
automatically warranting that it's compatible with the new version of Mediasoup.

### What are the available engineering support packages?

We offer technical support and software development services on an hourly basis,
but we can provide agreed hours bags or part-time/full-time development
services at a reduced rate, depending of their duration.
