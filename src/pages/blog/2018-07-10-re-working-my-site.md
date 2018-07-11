---
templateKey: blog-post
title: Re-working My Site
draft: false
date: '2018-07-10T21:35:51-06:00'
description: Details on this new version of the site and how it came to be.
tags:
  - gatsby
---
So it's been a while since I last posted something. A really long while. Mainly life got in the way: finishing college while working part-time really limited my motivation for side projects. But another barrier was the technology the site and blog were built on.

When researching what to build the site with initially, I stumbled upon [Octopress](https://github.com/octopress/octopress). I had never heard of a static site generator before but liked the idea of being able to use free hosts, have super fast load times, and customize things easily.

I grabbed a template from [html5up.net](https://html5up.net/), built out the basic site, and deployed via Github. I thought it looked pretty good and thought I would make posts somewhat frequently. How wrong I was. About the posting part at least.

Even during setup, I had disliked parts of Octopress. Things seemed very abstracted and I didn't find the documentation very helpful. I really didn't want to have to learn a new DSL just to make behavioral changes to the site or blog. At that time I brushed it aside, though, because I was excited to be using a static site generator.

Eventually, a long time (and a computer reformat) later, I decided to write another post. I hit a wall, though. I tried to get Octopress setup on the fresh OS and couldn't figure out how. It had been fine before, when I generated the project and all the dependencies were correct, but now it just wouldn't work. I spent a while on it but the errors - along with the fact that Octopress was no longer being maintained - made me think about rebuilding.

So that's what I did. I looked again into the best static site generators and the choice for me came down to [Jekyll](https://jekyllrb.com/) and [Gatsby](https://www.gatsbyjs.org/). I spent a while working with Jekyll (Octopress was actually based on Jekyll) but disliked it for similar reasons. That landed me on Gatsby. 

And so far I love it!

* The documentation is good
* It's built on [React](https://reactjs.org/), which means the skills I use at my job transfer well
* It's easily customizable
* It feels faster than Octopress/Jekyll
* It has unobtrusive, [simple plugins](https://www.gatsbyjs.org/plugins/)

It took me around 5-8 hours from start to finish to transfer the existing site over. I followed the old design almost to a T, but made some improvements here and there. Gatsby is simple enough that in that short time I was able to learn the inner workings and how blog/page data gets passed through the system.

I really enjoyed the initial site build in Gatsby and have confidence moving forward that I can iterate on the design and behavior of everything. I also know that if I reformat my computer again, I can get things working quickly rather than battling version issues.

Finally, to give myself even less of an excuse not to post frequently, I integrated everything with [Netlify](https://www.netlifycms.org/) instead of Github Pages. Netlify has some awesome stuff built in and their CMS really simplifies posting content. Instead of having to write in a terminal on a computer that has the cloned repo, I just navigate to <https://kylegrinstead.com/admin>. I can create new posts in an editor with live previewing, but unlike other CMS options, it doesn't host the content on Netlify's servers. It takes the post you write and commits it to your Github repo! Best of both worlds: simplicity and no lock-in.

If you're looking to build/rebuild a site, or just want play around with a cool project, I'd totally recommend Gatsby. I may do a post with more details about what I learned in making customizations to the site, but that's all for now!
