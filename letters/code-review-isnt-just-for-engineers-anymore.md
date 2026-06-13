---
title: "Code Review Isn't Just for Engineers Anymore"
description: "AI made everyone a coder; this letter argues marketers and founders need an automated review layer before code goes live."
date: 2026-05-15
origin: "https://www.surmado.com/blog/code-review-isnt-just-for-engineers-anymore"
draft: false
---

*Luke F. Walton · Surmado Blog · May 2026*

The [AI for Marketers Summit](https://artificialintelligencesummit.com/) happened last week. It spanned two days, 21 speakers, 13 sessions covering every corner of what an AI-enabled marketing team looks like in 2026. The sessions covered agentic workflows, AI visibility, brand voice governance, content automation, and team design.

But one theme kept surfacing that nobody had on their bingo card: marketers are shipping code now.

Not "someday." Not "the technical ones." Marketers, founders, and CEOs are opening Cursor, Codex, or Claude Code, and are describing what they want in plain English. Then they push to production. (For better or worse! ;) )

The majority of the vibe coding community are not developers. A [Solveo analysis](https://codingwithvibe.com/vibe-coding-success-rate-non-developer/) of the r/vibecoding subreddit found that 63% of active members are product managers, founders, marketers, and ops people. You no longer need an engineering degree to ship an app, but that doesn't mean it's easy.

But it is genuinely great. I'm a musician, and this kinda feels like the Pro Tools revolution. You have a studio in your house. An engineer on your computer. That said, Pro Tools didn't make everyone a great musician. It raised the floor, sure, but there's plenty of reason to practice the craft. Or at least work on your vision. That's what makes a great artist or engineer anyway. Not the chops. The vision. The daily effort. The high STANDARDS.MD.

And that brings me to my biggest concern: Nobody is reviewing the code these people are shipping.

## A million new builders. Zero new reviewers.

The software industry learned decades ago that the person who writes the code should not be the only person who reads it before it goes live. It's like in music. You have a mix engineer who gets the levels right and the mastering engineer that checks the big picture.

That's why code review exists. Why CI/CD exists. It exists for a reason. Not for vanity check or bureaucracy. It's a safety net. A QA gate. The moment the mix becomes the record. Code review catches bugs the author missed, security holes they didn't think about, drift from the standards they set last month, and edge cases that only show up when a real customer does something unexpected. Code review helps your website stay up. Your customers stay safe. And your business stays afloat.

In a normal engineering team, a teammate does this. They read your PR (pull request). They flag the problems. You fix them in order to merge your code into the production code base.

Writing the code has always been the easier part. Writing code that doesn't break. That can scale. That can be a hit song. That's always been hard. That's where teamwork sings.

So if you're a marketer who just vibe-coded a landing page, you probably don't have a teammate doing that. Your AI wrote the code and you might not be able to read it. Or if you can, you might be buried by how many lines of code you're shipping.

Ever see the I Love Lucy episode in the candy factory? The production line moves faster than Lucy and Ethel can sort it. So they eat some. Stick some in their shirts. Panic.

So code gets merged anyway. Reviews get skipped. And the code can become a ticking time bomb.

This is where you'll find stuff that don't look like bugs. Like when your AI imported a heavy JavaScript library to handle something CSS could do natively. Or hallucinated a package entirely. Or used an outdated schema because it was too lazy to check the internet.

It might not show up today. But it can show up in audits, in [search performance](/site-audit/), and in whether AI engines trust your site enough to recommend it.

Addy Osmani, Head of Chrome Developer Experience at Google, described what he calls the ["70% problem"](https://addyo.substack.com/p/the-70-problem-hard-truths-about): non-engineers using AI get to roughly 70% of a working solution quickly, but the final 30% becomes an exercise in diminishing returns as each fix creates new bugs. The [vibe coding community](https://codingwithvibe.com/vibe-coding-success-rate-non-developer/) reports the same pattern, with quality walls hitting around month three as accumulated issues from earlier sessions start cascading.

And no, asking the same AI to review its own work really doesn't count. LLMs are probabilistic. A slot machine. Ask ChatGPT or Claude to review a PR with no constraints and you'll sometimes get a different answer every time: ten suggestions here, three there, a wall of generic advice that doesn't map to your project. The author and the reviewer need to be structurally different. Different context, different constraints, different job. That's what makes a review useful. Same reason why we have teams in real life. This is why purpose-built review tools exist: they narrow the problem, anchor the output to your standards, and focus the AI on the diff rather than asking it to figure out everything from scratch.

## Why this matters more than it used to

The summit data makes this urgent, not just interesting.

One stat stuck with me: search click-through rates have dropped 65%, the largest decline in brand history, as AI overviews collapse the traditional funnel. Seventy-five percent of consumers don't know what to trust online. The customer journey is weird, y'all. It's getting weirder. AI is the influencer now.

In that world, your website's code quality is part of your brand. AI engines can evaluate your site's structure, performance, and technical health when deciding whether to surface you. A slow page, broken form, leaked email address in the logs, auth bypass on a route your AI helpfully removed during a refactor. Yeah. That sucks. These used to be developer problems. Welcome in, marketers. These are brand problems now.

## The $5 task nobody's doing

Francis Brero from HG Insights shared a framework at the summit that stuck with me. He breaks every marketing task into three tiers: $5 tasks that should be fully automated, $50 tasks that are AI-assisted, and $500 tasks that require human strategy and judgment.

Code review is the $5 task. (Or in [Claude Code Review](/compare/surmado-code-review-vs-claude-code-review/)'s case a $15-per-PR task.) Every pull request, every time, no exceptions. It should never require a human to catch a naming convention violation or a missing auth check. It should never require you to stare at 800 lines of AI-generated diff hoping you spot the problem. It should just happen, automatically, against a set of standards you defined once.

The fact that most vibe coders are doing this manually (or not at all) is a huge operational gap in the "everyone can build" era.

## What changes when you close it

The most obvious thing is that you catch bugs before your customers do. The cost of fixing a bug at PR time is roughly 1x. The cost of fixing it after someone hits it on your live site scales to 10 to 100x. Less obviously, you stop drifting from your own standards. AI-generated code looks plausible. It uses good variable names and reasonable structure. It can also quietly change conventions between sessions, swap out patterns you depend on, and make architectural decisions you didn't ask for. A reviewer that checks every PR against your standards catches this before it compounds.

## LLMs are great at solving problems. They're not great at solving dilemmas.

Whether to prioritize page speed or richer interactivity is a dilemma. You, yes you the HUMAN, have more context than any AI on the dilemma side. A good reviewer handles the problems automatically so you can spend your attention on the tradeoffs that actually require judgment. Once you trust that every PR is being reviewed, you can vibe code more aggressively. You can let AI take bigger swings. You can ship at midnight without wondering what you missed. The review isn't a brake. It's what lets you go faster, and not fall off the road.

## This isn't a developer argument

Look, I run a company that makes an automated code review tool. We built it for ourselves because I believe everything I just wrote. The argument I'm making isn't "buy my product." The argument is: if you are building with AI, and you are not reviewing what it produces before it goes live, you are accumulating risk at the same speed you're accumulating features. [Code is a liability](https://doctorow.medium.com/https-pluralistic-net-2026-01-06-1000x-liability-graceful-failure-modes-d69f384af9e4) (and an asset).

The marketers thriving twelve months from now won't be the ones who adopted the most tools. They'll be the ones who built guardrails. Who could scale. Who could write a good song. I mean code. And not lose trust.

Code review is the first guardrail. And everyone touching GitHub should have it on.

---

*If you're shipping code and want to see what automated review looks like, [Surmado Code Review](/review/) is free for 10 PRs a month. And it's EASY. Just two clicks to connect GitHub. Then your code follows your standards, every PR, automatically.*

## Questions and Answers

**Do marketers need code review?**
Yes. As of 2026, the majority of the vibe coding community are non-developers, including marketers, founders, product managers, and operations professionals. These users generate code through AI tools like Cursor, Claude Code, and Lovable but typically lack a code review process. AI-generated code accumulates quality issues including standards drift, security gaps, broken structured data, and performance regressions. Automated code review catches these issues at the pull request level before they affect the live site.

**What is the cheapest way to get automated code review?**
Surmado Code Review offers a free tier of 10 pull request reviews per month with no credit card required. The Standard plan is $15 per month for 100 PRs with no per-seat pricing and unlimited repositories. By comparison, using Claude directly for code review costs approximately $15 per individual PR, and agency code audits cost $200 per hour or more.

**Why can't I just ask ChatGPT or Claude to review my code?**
General-purpose LLMs reviewing code without constraints produce inconsistent output. The same PR reviewed multiple times will yield different suggestions each time because the model has no standards to check against and no structured output format. Purpose-built code review tools like Surmado Code Review constrain the problem by focusing on the diff, anchoring the review to a STANDARDS.MD document, and structuring the output into actionable categories. This produces consistent, standards-based reviews at lower cost per review.

---

*Views are my own. This post is published by Surmado, Inc. and is not affiliated with or endorsed by any other company or by the AI for Marketers Summit.*
