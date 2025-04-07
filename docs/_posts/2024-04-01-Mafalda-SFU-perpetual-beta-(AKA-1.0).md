---
lang: en
title: Mafalda SFU perpetual beta (AKA 1.0)
---

After exactly
[three years of development](https://twitter.com/el_piranna/status/1396126065677021193),
lots of awake nights (and sunshines), and uncountable hours of debugging and
testing, we are proud to announce today, April 1st 2024, that we have completed
[Mediasoup](https://mediasoup.org/) *aggregated scalability* and stability
tests, and we are ready to publicly release the first feature complete version
of [Mafalda SFU](https://mafalda.io). In other words, at last `Mafalda SFU` has got "1.0 version" status 🥳

This has been a huge milestone, so between highs and lows during these last
three years (including some hiatus periods due to professional or personal
reasons), we have finally reached the point where we can say that `Mafalda SFU`
is ready for any kind of production use case, being that by having lots of small
sized rooms each one under a single CPU capacity limits where
*horizontal scalability* is the best fit, one or several medium sized rooms
making use of several CPUs from a single server (*vertical scalability*), up to
having one or several big sized rooms extending over multiple servers where
*aggregated scalability* shines. Also, the high modularity of `Mafalda SFU` (at
this moment we have [11 main projects](https://mafalda.io/projects/), and
[73 repositories on GitHub](https://github.com/Mafalda-SFU) between public and
privates ones) allows us to adapt to any kind of use case and architecture, and
to evolve over time with your future requirements.

Now you would be asking,
*"why are you calling it '[perpetual beta](https://en.wikipedia.org/wiki/Perpetual_beta)' if you are releasing a 1.0 version?"*
Well, there are three reasons for that (*three is a magic number* 🎶):

1. First of all, as part of our commitment to be 100% API compatible with
   `Mediasoup`, we automatically check three times a day for new
   [Mediasoup releases](https://github.com/versatica/mediasoup/releases) and
   pass all our project tests against them (and also, we pass all `Mafalda SFU`
   projects against
   [Mediasoup tests themselves](https://www.npmjs.com/package/@mafalda-sfu/mediasoup-node-tests))
   for each new version, so instead of following semantic versioning, we make
   and publish a new release of all `Mafalda SFU` projects from their git `main`
   branches every time a new `Mediasoup` version is released, with all both
   `Mediasoup` and `Mafalda SFU` features and bug fixes up to that date. This
   way, the version number warrants the compatibility of each `Mafalda SFU`
   package with the exact same `Mediasoup` version.
2. We are not going to stop developing `Mafalda SFU`: we have a lot of ideas not
   only about how to improve `Mafalda SFU` reliability and performance (and
   they are already pretty high!), but also about new features and projects in
   mind that we want to implement, like monitoring tools, offering
   *Mafalda/Mediasoup as a Service* (**MaaS**) in addition to our current
   on-premises approach, or even decentralized P2P streaming on top of
   `Mediasoup` over multiple regions in the world.
3. And finally, we are going to keep the "perpetual beta" status as a reminder
   that we are always looking for feedback, and we are always open to new ideas
   and improvements, so if you have any suggestion, idea, or you want to
   collaborate with us, please don't hesitate to [contact us](/contact).

And if you are questioning yourself: no, this is not an April Fools' joke, we
are really releasing `Mafalda SFU` 1.0 today, we just wanted to make you think
it 😉 So, if you want to know more about `Mafalda SFU`, please visit our
[website](https://mafalda.io), or if you want to [contact us](/contact), please
write us to <info@mafalda.io>.
