---
permalink: /about/
title: About
---

Mafalda SFU is a suite of Node.js packages that allows to create and manage
WebRTC audio and video conference rooms with thousands of participants over
multiple servers, in a fully automated way.

Built on top of [Mediasoup](https://mediasoup.org/), one of the most performant
Open Source SFUs, Mafalda SFU by-passes its limitations and provides fully
vertical and horizontal scalability in a transparent way for both users and
developers, managing itself the allocation and balancing of resources in the
most optimal way, and with the only limit of the provided hardware resources.
You just only need to focus on your application logic without worrying about
`Mediasoup` per-CPU
[Routers](https://mediasoup.org/documentation/v3/mediasoup/api/#Router) and
[Workers](https://mediasoup.org/documentation/v3/mediasoup/api/#Worker) limits,
and Mafalda SFU will take care of the media scalability management over all your
CPUs and remote servers.

In the same way, Mafalda SFU also allows to scale current Mediasoup based
videoconference applications without needing to change their application logic.
Just by replacing Mediasoup with Mafalda SFU, and configure and initialize the
library, you can scale your application to thousands of participants in a
matter of minutes.

Following development best practices, code is splitted in multiple modules with
a common API, allowing to combine between them in the most optimal way for your
particular use case, and with more than 90% tests code coverage in most of the
modules.


## Related pages

- [Demos](/demos/)
- [Chronology](/chronology/)
- [Testimonials](/testimonials/)
