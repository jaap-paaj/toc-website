---
title: 'AI drift: the silent degradation nobody sees'
date: '2026-04-03'
intro: >-
  The most dangerous moment for a working AI system is when everyone stops paying attention.
author: The Only Constant
tags:
  - ai
  - onderhoud
  - strategie
---

In 2005, BP's Deepwater Horizon platform went into service. For eleven years it ran. Daily operations were smooth. Safety inspections got signed off. Procedures were followed, more or less, each day a fraction less strictly, until nobody quite knew anymore where the line was between "good enough" and "risky."

On 20 April 2010, the platform exploded. Eleven people died. It was the largest oil spill in American history.

The cause was not a sudden failure. It was silent degradation over years. Each day, slightly less sharp. Until the system had drifted so far from its original state that a single trigger was enough.

In AI systems, this is called drift. And it is the most underestimated risk in any organisation that uses AI.

## Five kinds of silence

AI drift comes in five forms. All of them are invisible until they become a problem.

**Data drift.** The world changes. Customer behaviour shifts. The product range evolves. But the data the AI system was trained on reflects the world from six months ago. Recommendations become gradually irrelevant. Nobody notices, because the output still looks professional.

**Model drift.** The vendor updates the model. A routine update, no announcement. But the prompts that worked perfectly last month now produce subtly different results. The tone shifts. The structure changes. The system still does something, just not quite what it used to.

**Behavioural drift.** The most dangerous form. Users get used to the AI output. They stop checking. They hit send without reading. The system becomes a black box producing output that nobody critically reviews anymore. We call this sleepwalking. Run [the Meaning Test](/en/blog/meaning-test) regularly to check whether the team is still engaged.

**Quality drift.** Output slowly gets worse. One percent per week. Imperceptible day to day. But after three months quality has dropped significantly. Without a baseline measurement there is nothing to compare against.

**Cost drift.** Usage grows. New teams discover the system. More queries, more tokens, higher bills. Monthly costs creep upward until someone is shocked by the invoice.

None of these forms announce themselves. By definition they are gradual.

## How to catch it

Three rhythms.

**Weekly: costs and usage.** Five minutes. Does the volume match expectations? Are costs in line? This is the earliest signal that something is shifting.

**Monthly: quality sample.** The domain owner reviews twenty random AI outputs. Blind, without knowing whether they are recent or old. Is quality falling? Is the tone shifting? This is the equivalent of a factory inspection: spot-checking whether production is still running to standard.

**Every quarter: the blind test.** Present the team with a mix of AI outputs. Some correct, some deliberately wrong. If the team catches fewer than seventy percent of the errors, you have a sleepwalking problem. People are trusting the system blindly. That is the moment drift becomes dangerous.

## Ownership

The fundamental problem with drift is ownership. Who is responsible?

The clear division: the tech side owns the system (availability, security, costs, model health). The business side owns the content (output quality, process validity, strategic value, human impact). If the AI gives bad advice, that is a business problem. If costs triple, that is a tech problem.

Without that division, everything falls through the cracks. The tech team thinks the business is monitoring quality. The business thinks the tech team is watching things. Nobody is actually looking. This is where [AI governance](/en/blog/ai-governance) makes the difference: clear agreements about who monitors what, on a fixed rhythm.

BP had procedures. BP had inspections. BP had people responsible. What BP did not have was someone looking every day at whether the system was still doing what it was supposed to do. The procedures were followed. The system drifted.

With AI the lesson is the same. Implementation is the easy part. The hard part is keeping watch. Every week, every month, every quarter. With fresh eyes. With the willingness to say: this is no longer good enough. And when the evidence is no longer there, do not [scale further](/en/blog/proof-before-scale), go back to the experiment.

---

Ready to get started? Begin with an [AI Workshop](/en/educate) to make your team aware of drift. Or start an [AI Automation Track](/en/automate) with built-in monitoring and quality controls.

---

## Frequently Asked Questions about AI drift

**What is AI drift?**
AI drift is the silent degradation of an AI system over time. The system still works, but the output gradually becomes less accurate, less relevant, or less reliable. This can result from changes in the data, updates to the underlying model, shifting user behaviour, gradual quality decline, or rising costs.

**How do you recognise AI drift?**
Through regular monitoring at three levels: checking costs and usage weekly, reviewing a sample of twenty outputs monthly, and running a quarterly blind test in which the team must identify a mix of correct and incorrect AI outputs. If the error-detection rate falls below seventy percent, there is a problem.

**Who is responsible for monitoring AI systems?**
The technical side (IT) owns the system: availability, security, costs, and model health. The business owns the content: output quality, process validity, and human impact. Both parties must actively monitor their part. Without an explicit division, responsibility falls through the cracks.

**What is sleepwalking in AI?**
Sleepwalking is the phenomenon where users blindly trust AI output and stop critically checking it. This develops gradually as the system runs longer and users grow accustomed to the output. It is the most dangerous form of drift because the human safety net disappears. Test quarterly whether users can still spot errors.

**How do you prevent AI drift?**
Through three things: fixed monitoring rhythms (weekly, monthly, quarterly), explicit ownership (who monitors what), and a baseline to measure against. Without a baseline you cannot tell whether quality is declining. At the start of every AI project, measure the initial state and compare against it every quarter.
