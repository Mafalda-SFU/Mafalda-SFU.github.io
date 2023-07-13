---
excerpt: |
  Massively parallel vertical and horizontal scalable SFU (Stream Forwarding
  Unit) built on top of [Mediasoup](https://mediasoup.org/)
feature_row1:
  - alt: Software development, code
    image_path: /assets/images/cocomaterial/device_desktop_working_code.svg
    excerpt: |
      There's no need to learn something new, usage of Mafalda SFU is
      transparent for already developed Mediasoup-based applications. You can
      migrate and scale your application in minutes, instead of months
    title: Same API of Mediasoup
feature_row2:
  - alt: Network, self management
    image_path: /assets/images/cocomaterial/system_group_web_connection_link_association.svg
    excerpt: |
      Mafalda SFU automatically interconnect and manage scalability of Mediasoup
      [Workers](https://mediasoup.org/documentation/v3/mediasoup/api/#Worker)
      and
      [Routers](https://mediasoup.org/documentation/v3/mediasoup/api/#Router),
      also even located on different servers or World regions. Just focus on
      your application logic, and let Mafalda SFU take care of the rest
    title: Fully self-managed, transparent to developers
feature_row3:
  - alt: Motherboard, performance
    image_path: /assets/images/cocomaterial/electronic_4.svg
    excerpt: |
      Fully parallel and asynchronous, it's designed to reduce the usage of each
      server resources, and optimize the needed instances to the minimum
    title: Designed for performance
feature_row4:
  - alt: Source code bugs, code quality, errors management
    image_path: /assets/images/cocomaterial/code_bugs_software.svg
    excerpt: |
      Implemented to be robust and resilient, Mafalda SFU projects follows
      strict code quality standards and security measurements for all Mafalda
      SFU projects, with more than 90% code coverage in almost all of them,
      reduced attack surface, using encrypted communications, and having an
      exhaustive errors management
    title: Security oriented
feature_row5:
  - alt: Ham radio, modularity
    image_path: /assets/images/cocomaterial/modular.svg
    excerpt: |
      Same orthogonal API for all Mafalda SFU modules inspired by Mediasoup
      design, makes it easy to upgrade and combine between them in multiple
      ways, allowing them to easily evolve if your architecture or needs changes
    title: Modular and combinable
feature_row6:
  - alt: Investment, adjusted expenses
    btn_class: btn--primary
    btn_label: Contact us
    image_path: /assets/images/cocomaterial/investment.svg
    excerpt: |
      Mafalda SFU modular and interconnectable design allows to adapt itself to
      your needs and budged and provide you a price adjusted to your specific
      use case, and being able to evolve with your future requirements
    title: Prices adapted to your needs
    url: /contact/
gallery:
  - url: https://dyte.io/
    image_path: /assets/images/logos/dyte.svg
    alt: Dyte
  - url: https://framevr.io/
    image_path: /assets/images/logos/framevr.png
    alt: FrameVR
  - url: https://www.fermax.com/
    image_path: /assets/images/logos/fermax.jpg
    alt: Fermax
  - url: https://www.soundstage.fm/
    image_path: /assets/images/logos/soundstage.png
    alt: SoundStage.fm
  - url: https://www.dripshop.live/
    image_path: /assets/images/logos/drip.svg
    alt: Drip
  - url: https://www.engageli.com/
    image_path: /assets/images/logos/engageli.svg
    alt: Engageli
header:
  actions:
    - label: Contact us
      primary: true
      url: /contact/
  overlay_image: /assets/images/logo.svg
  overlay_filter: rgba(249, 178, 72, 0.75)
intro:
  - excerpt: |
      Mafalda SFU allows to create and manage video room sessions with thousands
      of participants over multiple servers, in a transparent way for both users
      and developers, without needing to change the application logic of current
      applications, and with the only limit of the provided hardware resources.
layout: splash
permalink: /
title: Mafalda SFU
---

{% include feature_row id="intro" type="center" %}

{% include feature_row id="feature_row1" type="right" %}
{% include feature_row id="feature_row2" type="left" %}
{% include feature_row id="feature_row3" type="right" %}
{% include feature_row id="feature_row4" type="left" %}
{% include feature_row id="feature_row5" type="right" %}
{% include feature_row id="feature_row6" type="left" %}

## Team trusted by

<style type="text/css">
  .align-items-center {
    align-items: center;
  }
</style>

{% include gallery class="align-items-center" id="gallery" %}
