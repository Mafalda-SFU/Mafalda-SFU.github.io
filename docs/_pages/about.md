---
permalink: /about/
title: About
toc: true
toc_sticky: true
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

## Mafalda SFU ❤️ Open Source

Mafalda SFU is build on top of multiple Open Source projects, being
[Mediasoup](https://mediasoup.org/) the most prominent one. In addition to that,
during development of Mafalda SFU we have created and published multiple
auxiliary Open Source projects and contributed to several others, between
dependencies, tools, demos, reporters, forks... You can find a list of all our
Open Source repositories and contribution forks at
[Mafalda SFU Github organization](https://github.com/Mafalda-SFU), at
[Mafalda SFU NPM organization](https://www.npmjs.com/org/mafalda-sfu), and a
list of Mafalda SFU team created issues, PRs & Open Source contributions at
[Mafalda SFU Notion page](https://mafalda-sfu.notion.site/Issues-PRs-OS-contributions-43468a7e809f41aea03251f414722636?pvs=4).

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

![thinking]({{ site.url }}{{ site.baseurl }}/assets/images/cocomaterial/thinking_man.svg){: .align-right width="40.6779661017%" }

### Where does the name come from?

Name of the project has been taken as a tribute to
[Mafalda](https://en.wikipedia.org/wiki/Mafalda), the character created by
Joaquín Salvador Lavado Tejón '[Quino](https://www.quino.com.ar/homequino)',
that has a love-hate relationship with both *mass media* and soup 😉

### Will Mafalda SFU allows me to display thousands of participants in a single room?

Not by itself.

Mafalda SFU is a library that allows to create and manage WebRTC audio and video
conference rooms and streaming with thousands of participants over multiple
servers, in a fully automated way. The bottleneck of the number of participants
that can be played at the same time is not a limitation of Mafalda SFU, but of
the browser or mobile app clients that are playing them. Several tests has shown
that Chrome browser in a regular Intel i7 laptop can smoothly play up to 16
videos at the same time, starting to be unstable with 20-25 videos, and being
practically useless with 30 or more videos, also with low resolution and
framerate, and on mobile devices it's not practical to show more than 6 videos a
the same time (mostly due to screen size restrictions).

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

## Related pages

- [Slides](/slides/)
- [Demos](/demos/)
- [Chronology](/chronology/)
- [Testimonials](/testimonials/)
