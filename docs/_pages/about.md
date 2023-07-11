---
permalink: /about/
title: About
---

Mafalda SFU is a suite of Node.js packages that allows to create and manage
WebRTC audio and video conference rooms with thousands of participants over
multiple servers, in a fully automated way.

Built on top of [Mediasoup](https://mediasoup.org/), one of the
[most performant](https://webrtchacks.com/revealing-mediasoups-core-ingredients-qa-with-inaki-baz-castillo/#post-3927-_Toc119228912)
Open Source SFUs, Mafalda SFU

- by-passes its by-design single-threaded limitations and provides full
  multi-threaded and multi-server support,
- allowing vertical and horizontal scalability in a transparent way for both
  code, users and developers,
- managing itself the allocation and balancing of resources in the most optimal
  way,
- and with the only limit of the provided hardware resources.

You just only need to focus on your application logic without worrying about
`Mediasoup` per-CPU
[Routers](https://mediasoup.org/documentation/v3/mediasoup/api/#Router) and
[Workers](https://mediasoup.org/documentation/v3/mediasoup/api/#Worker) limits,
and Mafalda SFU will take care of the media scalability management over all your
CPUs and remote servers.

In the same way, Mafalda SFU also allows to scale current Mediasoup based
videoconference applications without needing to change their application logic.
Just by replacing Mediasoup with Mafalda SFU, and configure and initialize the
library, you can scale your application to thousands of participants in a matter
of minutes.

Following development best practices, code is split in multiple modules with a
common API, allowing to combine between them in the most optimal way for your
particular use case, and with more than 90% tests code coverage in most of the
modules.

Since idea conception in March 2021, started development as a proof of concept
in April 2021, and first public comments about its development in
[May](https://twitter.com/el_piranna/status/1396126065677021193),
[June](https://mediasoup.discourse.group/t/for-a-snippet-of-code-for-horizontal-scaling-using-pipetransports/2790/11) and
[July](https://mediasoup.discourse.group/t/presenting-mafalda-sfu/3067) of
2021, Mafalda SFU has been receiving interest from companies on different
sectors, like:

- Development of videoconference platforms
- Videoconference and audio/video applications with high number of concurrent
  rooms or participants
- Low latency streaming and distribution applications
- 2D/3D/VR metaverses & social platforms
- Multi-source 3D audio applications
- Online real-time education platforms

## A [Jesús Leganés-Combarro](https://piranna.github.io) project

Being one of the Spain first WebRTC experts and pioneers since 2012 with
[ShareIt!](https://piranna.github.io/projects/#shareit), the World's first
in-browser P2P file sharing application, and
[DataChannel-polyfill](https://github.com/ShareIt-project/DataChannel-polyfill),
the first working implementation of WebRTC DataChannel specification,
[Jesús Leganés-Combarro](https://piranna.github.io) has been working developing
real-time and high performant applications for the last 15 years for companies
like [Kurento](https://doc-kurento.readthedocs.io/en/latest/) (now part of
[Twilio](https://www.twilio.com)), [Telefónica](https://www.telefonica.com),
[Atos](https://atos.net), or [IE University](https://www.ie.edu). He has also
worked hand-to-hand with other world-renowned WebRTC experts like
[Iñaki Baz Castillo](https://inakibaz.me/) (creator of
[Mediasoup](https://mediasoup.org/) itself),
[Sergio Garcia Murillo](https://www.linkedin.com/in/sergiogarciamurillo/),
[Professor Luis Lopez Fernandez](https://gestion2.urjc.es/pdi/ver/luis.lopez),
or [Tsahi Levent-Levi](https://bloggeek.me), among others.

## FAQ

### Where does the name come from?

Name of the project has been taken as a tribute to
[Mafalda](https://en.wikipedia.org/wiki/Mafalda), the character created by
Joaquín Salvador Lavado Tejón '[Quino](https://www.quino.com.ar/homequino)',
that has a love-hate relationship with both *mass media* and soup 😉

## Related pages

- [Slides](/slides/)
- [Demos](/demos/)
- [Chronology](/chronology/)
- [Testimonials](/testimonials/)
