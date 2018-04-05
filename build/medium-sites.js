/* global module */
"use strict";

/* Update this list of domains for Medium story sites
 * See this page for valid document rules:
 * https://github.com/stylish-userstyles/stylish/wiki/Valid-@-moz-document-rules
 * Examples:
 * - domain("example.com") => ["domain", "example.com"]
 * - url(http://www.example.com/page.html) => ["url", "http://www.example.com/page.html"]
 * - url-prefix(http://www.example.) => ["url-prefix", "http://www.example."]
 * - regexp("http://(www|blog)\\.example\\.com/.*") => ["regexp", "http://(www|blog)\\.example\\.com/.*"]
 */
module.exports = [
	["domain", "500ish.com"],
	["domain", "android.jlelse.eu"],
	["domain", "arcdigital.media"],
	["domain", "artistwaves.com"],
	["domain", "artplusmarketing.com"],
	["domain", "bettereveryday.vc"],
	["domain", "betterhumans.coach.me"],
	["domain", "blog.angularindepth.com"],
	["domain", "blog.creandum.com"],
	["domain", "blog.doist.com"],
	["domain", "blog.figma.com"],
	["domain", "blog.framer.com"],
	["domain", "blog.gofundme.com"],
	["domain", "blog.gojekengineering.com"],
	["domain", "blog.goodaudience.com"],
	["domain", "blog.hackster.io"],
	["domain", "blog.heartsupport.com"],
	["domain", "blog.inkdrop.info"],
	["domain", "blog.kentcdodds.com"],
	["domain", "blog.leanstack.com"],
	["domain", "blog.markgrowth.com"],
	["domain", "blog.neufund.org"],
	["domain", "blog.pacific-content.com"],
	["domain", "blog.producthunt.com"],
	["domain", "blog.prototypr.io"],
	["domain", "blog.realkinetic.com"],
	["domain", "blog.sindresorhus.com"],
	["domain", "blog.sketchapp.com"],
	["domain", "blog.timescale.com"],
	["domain", "blog.usejournal.com"],
	["domain", "blog.zenkit.com"],
	["domain", "bothsidesofthetable.com"],
	["domain", "brightthemag.com"],
	["domain", "builttoadapt.io"],
	["domain", "byrslf.co"],
	["domain", "charting-ahead.corsairs.network"],
	["domain", "civicskunk.works"],
	["domain", "codeburst.io"],
	["domain", "cosgrrrl.com"],
	["domain", "creative-analytics.corsairs.network"],
	["domain", "crossingenres.com"],
	["domain", "dearoldpeople.com"],
	["domain", "digitalculturist.com"],
	["domain", "eand.co"],
	["domain", "eidolon.pub"],
	["domain", "electricliterature.com"],
	["domain", "engineering.hexacta.com"],
	["domain", "entrepreneurs.maqtoob.com"],
	["domain", "entrepreneurshandbook.co"],
	["domain", "extranewsfeed.com"],
	["domain", "fellowsblog.ted.com"],
	["domain", "fromupnorth.com"],
	["domain", "ginosblog.com"],
	["domain", "hackernoon.com"],
	["domain", "howwegettonext.com"],
	["domain", "injusticetoday.com"],
	["domain", "journal.thriveglobal.com"],
	["domain", "loremipsum.ueno.co"],
	["domain", "m.signalvnoise.com"],
	["domain", "media.consensys.net"],
	["domain", "medium.com"],
	["domain", "melmagazine.com"],
	["domain", "midcenturymodernmag.com"],
	["domain", "mondaynote.com"],
	["domain", "movietime.guru"],
	["domain", "mystudentvoices.com"],
	["domain", "netbasal.com"],
	["domain", "news.greylock.com"],
	["domain", "nexusmedianews.com"],
	["domain", "ofdollarsanddata.com"],
	["domain", "omgfacts.com"],
	["domain", "orangeandwhitereport.com"],
	["domain", "pillow.codes"],
	["domain", "planamag.com"],
	["domain", "points.datasociety.net"],
	["domain", "ppcdept.com"],
	["domain", "praxis.fortelabs.co"],
	["domain", "proandroiddev.com"],
	["domain", "psiloveyou.xyz"],
	["domain", "rantt.com"],
	["domain", "read.compassofdesign.com"],
	["domain", "ryanluikens.com"],
	["domain", "shift.newco.co"],
	["domain", "slack.design"],
	["domain", "slack.engineering"],
	["domain", "slackhq.com"],
	["domain", "sprintstories.com"],
	["domain", "spuddings.net"],
	["domain", "startupsventurecapital.com"],
	["domain", "tech.kartenmacherei.de"],
	["domain", "thebelladonnacomedy.com"],
	["domain", "thebolditalic.com"],
	["domain", "thecoffeelicious.com"],
	["domain", "thedesignteam.io"],
	["domain", "theestablishment.co"],
	["domain", "thegospeleconomist.com"],
	["domain", "thelily.com"],
	["domain", "thesternfacts.com"],
	["domain", "thestyleofelements.org"],
	["domain", "thinkgrowth.org"],
	["domain", "thomasdespin.com"],
	["domain", "timeline.com"],
	["domain", "towardsdatascience.com"],
	["domain", "trackchanges.postlight.com"],
	["domain", "umairhaque.com"],
	["domain", "ux.useronboard.com"],
	["domain", "uxdesign.cc"],
	["domain", "uxplanet.org"],
	["domain", "witness.worldpressphoto.org"],
	["domain", "words.werd.io"],
	["domain", "writingcooperative.com"],
	/* A very general regular expression looking for a "medium" subdomain
	 * so far, it captures:
	 * - https://medium.muz.li
	 * - https://medium.freecodecamp.org
	 */
	["regexp", "https?://[^\\/]*medium\\.\\S*"]
];
