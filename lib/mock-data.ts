/**
 * Realistic mock data for the visual-only Skywave demo.
 * Reads like a real short-form video creator's second brain.
 */

export type MemoryType = "vault" | "wizard" | "creator" | "hook" | "idea" | "swipe" | "story" | "note" | "brief" | "thumbnail";

export interface MockMemory {
  id: string;
  type: MemoryType;
  title: string;
  body: string;
  summary?: string;
  tags: string[];
  links: string[];
  createdAt: string;
}

const daysAgo = (n: number) => new Date(Date.now() - n * 86400_000).toISOString();

export const MOCK_MEMORIES: MockMemory[] = [
  { id: "m1", type: "vault", title: "The 3-second hook reel that hit 2.3M", body: "Performance: 2.3M views, 18% save rate, 42% completion\n\nLESSONS:\nHOOK PATTERN — contrarian stat in first 0.8s ('99% of creators are wrong about hooks'). Visual: face-forward, mouth open, no music for first beat.\n\nSTRUCTURE — Stat → Story (8s) → Reveal (35s) → CTA (12s)\n\nWHY IT PERFORMED — saved rate above 15% triggers algorithm push; the curiosity gap kept viewers past 2s threshold.", tags: ["hook", "contrarian", "stat-led", "winner"], links: ["m4", "m12"], createdAt: daysAgo(8) },
  { id: "m2", type: "wizard", title: "Audit My Offer: 6-week cohort program", body: "Q: I sell a 6-week cohort coaching at $2k. Conversion is 8% off cold traffic. Help.\n\nA: Apply $100M Offers Value Equation:\n• Dream Outcome: 7/10 — clear but generic\n• Likelihood: 5/10 — no proof anchors\n• Time Delay: 6/10 — 6 weeks is fine\n• Effort: 4/10 — too much asked of cold buyer\n\nTOP 3 FIXES:\n1. Add 'next 24 hours' guarantee ('one win or money back')\n2. Reframe price as $333/week\n3. Stack 3 done-with-you bonuses worth 2x the price", tags: ["offer-audit", "pricing", "hormozi"], links: ["m6"], createdAt: daysAgo(2) },
  { id: "m3", type: "creator", title: "Hormozi — Hook Patterns Analysis", body: "5 patterns extracted:\n1. PROBLEM-OUT-LOUD ('Most people don't realize...')\n2. CONTRARIAN-STAT ('99% of X do Y wrong')\n3. PERSONAL-LOSS ('I lost $X learning this')\n4. INVERTED-PROMISE ('Stop doing X if you want Y')\n5. NUMERIC-SPECIFICITY ('3 things, $47, 11 days')\n\nMost transferable: #2 and #5 work in any niche.", tags: ["hormozi", "hook-pattern", "research"], links: ["m1", "m9"], createdAt: daysAgo(5) },
  { id: "m4", type: "hook", title: "99% of creators quit at 1,000 followers — here's why", body: "Original: 'Most creators give up too early.'\n\nSharpened:\n1. 99% of creators quit at 1,000 followers — here's why ← strongest\n2. I almost quit at 1,000 followers. Then this happened.\n3. The brutal truth about why you'll quit at 1,000.\n4. Your followers don't matter at 1,000. THIS does.\n5. 1,000 followers is where dreams die. Here's how to survive.", tags: ["hook", "specificity", "contrarian"], links: ["m1"], createdAt: daysAgo(1) },
  { id: "m5", type: "idea", title: "Reaction series: 'Hormozi was wrong about...'", body: "Take 5 contrarian Hormozi takes that aged poorly. Each video: short clip + my disagreement + better framework.\n\nWhy it'll work: borrows authority + ranks against searched names.", tags: ["series", "borrowed-authority", "contrarian"], links: ["m3"], createdAt: daysAgo(3) },
  { id: "m6", type: "wizard", title: "30-Day Lead Plan", body: "4 PILLARS executed in parallel:\n• Warm: 5 DMs/day to past callers\n• Cold: 30 cold emails/day\n• Free Content: 1 reel + 1 carousel/day\n• Paid: $20/day on retargeting only\n\nLEAD MAGNET: 'The Cohort Audit' — 5-question quiz that scores their offer\n\nWEEK 1: setup + first 7 days of content\nWEEK 2: scale outreach to 50/day\nWEEK 3: launch retargeting\nWEEK 4: review + double down on what worked", tags: ["lead-gen", "hormozi", "30-day-plan"], links: ["m2"], createdAt: daysAgo(2) },
  { id: "m7", type: "swipe", title: "Alex Hormozi thumbnail — yellow + face + 3-word hook", body: "Saved from FYP. Bright yellow background, face slightly off-center, 3 huge words 'BUILD. SELL. SCALE.'\n\nAdapt: same composition with my offer color (purple), 3 words 'CAPTURE. THINK. SHIP.'", tags: ["swipe", "thumbnail", "design-pattern"], links: ["m18"], createdAt: daysAgo(4) },
  { id: "m8", type: "story", title: "The Tuesday I almost gave up", body: "Posted 47 reels. Best one got 312 views. Cried in the car after my partner asked when I'd quit. Came home, opened the analytics tab, found my one outlier — 18K views from 6 months ago. Realized it wasn't the algorithm, it was that I'd stopped doing what worked.\n\nANGLES:\n• Vulnerability open: 'The Tuesday I almost quit'\n• Tactical: 'How one old reel saved my career'\n• Contrarian: 'I was wrong about consistency. Here's what actually matters.'", tags: ["personal-story", "vulnerability", "comeback"], links: ["m1"], createdAt: daysAgo(6) },
  { id: "m9", type: "hook", title: "Saved hook bank: 'Stop X. Start Y.'", body: "Stop posting daily. Start posting strategically.\nStop chasing views. Start chasing saves.\nStop selling features. Start selling outcomes.\nStop being polite. Start being honest.\nStop building. Start shipping.\n\nFormula: STOP [thing everyone does]. START [contrarian alternative].", tags: ["hook", "stop-start", "framework"], links: [], createdAt: daysAgo(7) },
  { id: "m10", type: "vault", title: "Pricing carousel — 1.1M reach", body: "Performance: 1.1M reach, 28K shares, 4.2K saves\n\nTOPIC: 'Why your prices are wrong'\n\nFORMULA: hook slide + 5 mistakes + 1 reframe + CTA\n\nKEY: ended with a question, not an ask. Comments answered the question = endless replies = algorithm boost.", tags: ["winner", "carousel", "pricing"], links: ["m11"], createdAt: daysAgo(14) },
  { id: "m11", type: "idea", title: "Series: '5 things that are killing your offer'", body: "Spinoff of the pricing carousel. Same skeleton but applied to different topics each week:\n• 5 things killing your hook\n• 5 things killing your retention\n• 5 things killing your conversion\n• 5 things killing your authority", tags: ["series", "spinoff", "scalable"], links: ["m10"], createdAt: daysAgo(11) },
  { id: "m12", type: "thumbnail", title: "Concept: 'I QUIT' face thumbnail", body: "VISUAL: tight crop on face, mouth open in shock, eyes wide\nTEXT: 'I QUIT' in red 80pt bold (top-left)\nBG: split yellow/black diagonal\nFOCAL: eyes\n\nFOR: the comeback story video", tags: ["thumbnail", "face-forward", "high-contrast"], links: ["m8"], createdAt: daysAgo(2) },
  { id: "m13", type: "note", title: "Sunday review — what worked last week", body: "Best post: pricing reel (1.1M)\nWorst post: behind-the-scenes (700 views)\nLESSON: tactical wins over personal at my current size. Save the BTS for newsletter.", tags: ["weekly-review", "data-driven"], links: ["m10"], createdAt: daysAgo(1) },
  { id: "m14", type: "creator", title: "Ali Abdaal — Format Analysis", body: "3 recurring formats:\n• 5-step explainer (top-down)\n• Day-in-the-life (narrative)\n• Tool review (educational)\n\nUses transitions every 3-5s. Subtle B-roll over face shots. Captions burned in lower-third.", tags: ["ali-abdaal", "format", "research"], links: [], createdAt: daysAgo(9) },
  { id: "m15", type: "swipe", title: "MrBeast hook formula — title-as-promise", body: "Every MrBeast title is the entire promise of the video. No mystery, no curiosity gap. Just the most extreme version of the promise.\n\nExamples:\n• 'I survived 100 days in...'\n• 'Last to leave wins $X'\n• 'Worlds most expensive vs cheapest'\n\nAdapt: 'I ran my business with $0 for 30 days' or 'I cold-DM'd 1,000 people in 7 days'", tags: ["mrbeast", "title-formula", "extreme-promise"], links: [], createdAt: daysAgo(10) },
  { id: "m16", type: "brief", title: "Edit brief: 30-min pricing podcast → 3 shorts", body: "Source: my Tuesday podcast episode on pricing\n\nCLIP 1 (35s): timestamp 4:30-5:05 - 'most people set prices backward' (the hook quote)\nCLIP 2 (28s): 12:15-12:43 - the $7 vs $700 story\nCLIP 3 (52s): 24:00-24:52 - the price-as-marketing rant\n\nReframe all to 9:16, captions emphasis on numbers, kill silences over 0.5s", tags: ["edit-brief", "podcast-to-shorts", "pricing"], links: [], createdAt: daysAgo(3) },
  { id: "m17", type: "story", title: "The DM from a customer that changed my pricing", body: "Customer wrote: 'I would've paid $5k. You charged $300. That undersold the value.' I doubled prices the next week. Closed more deals.\n\nANGLES: vulnerability (I was scared to charge more), tactical (price = positioning), contrarian (cheap = suspicious).", tags: ["customer-story", "pricing", "courage"], links: ["m2"], createdAt: daysAgo(5) },
  { id: "m18", type: "thumbnail", title: "Yellow-purple split with 3-word hook", body: "Stolen from Hormozi's pattern (swipe m7) — purple/yellow split background, face slight off-center, 3 huge words.\n\nNext piece: 'CAPTURE. THINK. SHIP.' for the operating-system reel.", tags: ["thumbnail", "yellow-purple", "stolen-pattern"], links: ["m7"], createdAt: daysAgo(1) },
  { id: "m19", type: "wizard", title: "Money Model design — 4-rung ladder", body: "Front end: free quiz ($0)\nLiquidator: $47 mini-course (within 30 days)\nContinuity: $97/mo coaching membership\nMultiplier: $2,500 cohort (every 90 days)\n\nCAC payback: ~22 days at $20 CAC. Healthy.\n\nWHAT TO BUILD FIRST: the $47 liquidator. Without it, paid ads bleed money.", tags: ["money-model", "ladder", "hormozi"], links: ["m2", "m6"], createdAt: daysAgo(4) },
  { id: "m20", type: "idea", title: "Cold open: I show my bank balance from 1 year ago", body: "Open on phone screen: $1,247 in checking. Then jump to today. No words. Then: 'Here's what changed in 12 months.'\n\nWhy: pattern interrupt, vulnerable, sets stakes.", tags: ["cold-open", "transformation", "stakes"], links: ["m8"], createdAt: daysAgo(2) },
  { id: "m21", type: "vault", title: "Behind-the-scenes flop (700 views)", body: "Performance: 700 views, 0.4% save rate. Buried by algorithm.\n\nWHY IT FLOPPED — no tactical takeaway, no curiosity gap, no value promise. Just vibes.\n\nLESSON: at 50K followers, audience wants tactics not personality.\n\nKEEP THIS IN VAULT as the warning.", tags: ["flop", "warning", "lesson"], links: [], createdAt: daysAgo(7) },
  { id: "m22", type: "creator", title: "Codie Sanchez — money structure", body: "Treats every video as: PROBLEM → CONTRARIAN ANGLE → CONCRETE EXAMPLE → ASK.\n\nAlways uses numbers. Always shows revenue figures on screen.\n\nUses 'main street' branding to differentiate from VC bros.", tags: ["codie-sanchez", "research", "structure"], links: [], createdAt: daysAgo(12) },
  { id: "m23", type: "note", title: "Newsletter idea: weekly 'what I learned' digest", body: "Compile the week's vault dissections + wizard answers + saved hooks into a Friday email. Free for now; monetize once 5K subs.", tags: ["newsletter", "compounding"], links: [], createdAt: daysAgo(6) },
  { id: "m24", type: "hook", title: "The 'I was wrong' confession opener", body: "Original: 'You should test more hooks.'\n\nSharpened:\n1. I was wrong about hooks. Here's what actually works. ← strongest\n2. I tested 100 hooks. 99 failed. The 1 that didn't:\n3. Stop testing hooks. Do this instead.", tags: ["hook", "confession", "vulnerability"], links: ["m9"], createdAt: daysAgo(4) },
  { id: "m25", type: "story", title: "The day I gave up on perfect", body: "Posted a reel with bad audio. Got 800K views. Realized 'perfect' was the enemy of 'shipped'.\n\nUSE WHEN: talking about consistency or imposter syndrome.", tags: ["personal-story", "perfectionism"], links: ["m8"], createdAt: daysAgo(15) },
  { id: "m26", type: "swipe", title: "Saved IG ad: 'You're 1 framework away'", body: "Carousel ad. Opener: 'You're 1 framework away from $10k/mo.' Slides: 5 frameworks. Last slide: free download.\n\nWhy it works: specific outcome + scarcity (1) + free hook.", tags: ["swipe", "instagram", "lead-magnet"], links: [], createdAt: daysAgo(8) },
  { id: "m27", type: "idea", title: "Pin a comment on every post asking the question", body: "Every reel — pin a comment that asks the audience the obvious next question. Doubles comment activity = algo boost.", tags: ["tactic", "engagement-hack", "low-effort"], links: ["m10"], createdAt: daysAgo(3) },
  { id: "m28", type: "wizard", title: "Kill the price objection", body: "Objection: 'It's too expensive.'\nROOT FEAR: 'I'll waste money and look stupid.'\n\nKILLERS:\nBonus: '6-week 1:1 follow-up call' (kills doubt, justifies price)\nGuarantee: 'Generate 5 leads in 30 days or refund + you keep the materials'\nReframe: 'It's not the price. It's whether THIS works for YOU. Let's find out together.'", tags: ["objection-killer", "guarantee", "reframe"], links: ["m2"], createdAt: daysAgo(1) },
  { id: "m29", type: "brief", title: "Train fingerprint: hook style", body: "FINGERPRINT from 5 winners:\n• Optimal length: 22-38s\n• Hook: stat → contradiction → promise\n• Cuts: 5-7 per 10s\n• Captions: bottom-third, ALL CAPS keywords every 2-3 words\n• B-roll: minimal, only over numbers\n• Ending: open loop question, never CTA\n\nFEED THIS to every brief.", tags: ["fingerprint", "video-editor", "system"], links: ["m1", "m10"], createdAt: daysAgo(5) },
  { id: "m30", type: "thumbnail", title: "Carousel cover: split 4-panel grid", body: "4 boxes, 4 mistakes named in each. Bold sans-serif. Yellow on black. Title across the top: 'WHAT IS YOUR OFFER MISSING?'\n\nFOR: lead magnet carousel.", tags: ["carousel", "thumbnail", "yellow-black"], links: ["m18"], createdAt: daysAgo(4) },
];

export const MOCK_PIPELINE = [
  { id: "p1", title: "Why 99% quit at 1K followers", stage: "Idea", platforms: ["TikTok", "Reels"], createdAt: daysAgo(1) },
  { id: "p2", title: "I was wrong about hooks", stage: "Script", platforms: ["TikTok", "Reels", "Shorts"], createdAt: daysAgo(2) },
  { id: "p3", title: "The Tuesday I almost quit", stage: "Record", platforms: ["TikTok", "Reels"], createdAt: daysAgo(3) },
  { id: "p4", title: "Hormozi was wrong about consistency", stage: "Edit", platforms: ["TikTok", "Shorts"], createdAt: daysAgo(2) },
  { id: "p5", title: "Pricing carousel v2", stage: "Thumbnail", platforms: ["Instagram"], createdAt: daysAgo(1) },
  { id: "p6", title: "$0 to $10k story timeline", stage: "Posted", platforms: ["TikTok"], createdAt: daysAgo(4) },
  { id: "p7", title: "5 things killing your hook", stage: "Posted", platforms: ["Reels", "Shorts"], createdAt: daysAgo(5) },
  { id: "p8", title: "DM that changed my pricing", stage: "Review", platforms: ["TikTok"], createdAt: daysAgo(7) },
];

export const MOCK_CREATORS = [
  { id: "c1", name: "Alex Hormozi", handle: "@alexhormozi", platform: "TikTok", notes: "Master of contrarian stats + face-forward thumbnails. Yellow brand. Saves > likes." },
  { id: "c2", name: "Ali Abdaal", handle: "@aliabdaal", platform: "YouTube", notes: "Clean editorial. 5-step explainer dominant format. Soft delivery, hard data." },
  { id: "c3", name: "Codie Sanchez", handle: "@codiesanchez", platform: "Instagram", notes: "Main-street finance positioning. Problem → contrarian → example → ask." },
  { id: "c4", name: "Dan Koe", handle: "@thedankoe", platform: "X", notes: "Long-form threads + 1-minute YouTube essays. Philosophical, abstract. Niche: meaning + work." },
  { id: "c5", name: "MrBeast", handle: "@mrbeast", platform: "YouTube", notes: "Title = entire promise. Extreme scale stakes. Studies own data obsessively." },
];

export const MOCK_VAULT = [
  { id: "v1", title: "The 3-second hook reel", performance: "2.3M views · 18% save rate · 42% completion", lessons: "Contrarian stat in first 0.8s. No music for first beat. Face-forward shock. Curiosity gap held viewers past 2s threshold." },
  { id: "v2", title: "Pricing carousel", performance: "1.1M reach · 28K shares · 4.2K saves", lessons: "Ended with question not CTA. Comments answered question = algorithm boost. Skeleton: hook slide + 5 mistakes + 1 reframe + CTA." },
  { id: "v3", title: "Behind-the-scenes flop", performance: "700 views · 0.4% save rate", lessons: "WARNING: no tactical takeaway = death at 50K. Audience wants tactics not personality at my size." },
];

export const MOCK_TASKS = [
  { id: "t1", title: "Edit Tuesday's reel", done: false, dueDate: "tomorrow" },
  { id: "t2", title: "Reply to top 20 DMs", done: false, dueDate: "today" },
  { id: "t3", title: "Record cold open for pricing series", done: false, dueDate: null },
  { id: "t4", title: "Update Settings → niche field", done: false, dueDate: null },
  { id: "t5", title: "Capture Tuesday's wins to Vault", done: true, dueDate: null },
];

export const MOCK_OPPORTUNITIES = [
  { id: "o1", suggestion: "CLIP — The 2:30-3:15 segment of last Tuesday's pricing podcast could become a 45-second short. 'Most people set prices backward' is a built-in hook that scores 9/10 on stop-power. Add captions emphasizing the $7 vs $700 comparison.", status: "new" },
  { id: "o2", suggestion: "RE-EDIT — Your behind-the-scenes flop (700 views) has good footage but no tactical takeaway. Re-cut as 'What I did wrong in this video' with the original as inset. Self-critique videos historically score 2.3x your baseline.", status: "new" },
  { id: "o3", suggestion: "THUMBNAIL SWAP — The $0 to $10k story video is underperforming at 4% CTR. Swap to the 'split bank balance' concept (memory m20) — same video, new cover. Expected lift: 40-60%.", status: "new" },
  { id: "o4", suggestion: "REPURPOSE — The pricing carousel (1.1M reach) has a built-in series skeleton. Spin out 4 more carousels with same structure but applied to hook/retention/conversion/authority topics. Low-risk wins.", status: "new" },
];

export const MOCK_AI_SPEND = {
  todayUSD: 0.42,
  monthUSD: 18.74,
  byProvider: { anthropic: 11.20, voyage: 0.38, openai: 6.85, groq: 0.31 },
};

export const MOCK_PROFILE = {
  niche: "Pricing & monetization for solo creators",
  voice: "Blunt, tactical, contrarian — Hormozi-flavored",
  offer: "6-week cohort coaching · $2k · for creators making $0-$5k/mo who want to charge premium",
  avatar: "Solo creator, 1K-50K followers, has skills but undercharges and undersells",
  goals: "5 cohort closes this month · 25K followers by Q4 · launch $97/mo membership",
  platforms: ["TikTok", "Reels", "Shorts"],
};

export const SAMPLE_DAILY_BRIEF = `TOP 3 MOVES TODAY
1. Ship the "I was wrong about hooks" script you wrote 2 days ago — it's been sitting in Pipeline > Script. Stop editing the perfect intro; record what you have.
2. Re-cut Tuesday's podcast into 3 shorts (the brief is already in your Brain — search "edit brief pricing"). 90-min effort, 3 deliverables.
3. DM 5 past callers with a "checking in" message + 1 free tactical insight. Warm pipeline > cold reach today.

BIGGEST UNBLOCK
The pricing reel v2 is stuck in Thumbnail stage for 4 days because you can't decide between two thumbnail concepts. Pick the "yellow-purple split" (memory m18) — it's proven, it's stolen from a winner, ship it.

PUBLISH WINDOW
Post the "I was wrong about hooks" reel TODAY between 6-7pm — your audience's documented engagement peak. Tomorrow drop the pricing carousel v2 at 9am.

DON'T DO TODAY
Don't film the behind-the-scenes content you keep thinking about. Vault data is clear: tactical > personal at your size. The vulnerability video can wait until 100K.`;

export const SAMPLE_WIZARD_ANSWERS: Record<string, string> = {
  "audit-offer": `OFFER AS I UNDERSTAND IT — 6-week cohort coaching at $2k for solo creators making $0-$5k/mo.

VALUE EQUATION SCORE
• Dream Outcome: 7/10 — "premium pricing" is generic; sharpen to "$5k+ months in 90 days"
• Perceived Likelihood: 5/10 — no proof anchors, no testimonials in the offer copy itself
• Time Delay: 6/10 — 6 weeks is fine but reframe as "first win in 7 days"
• Effort & Sacrifice: 4/10 — cohort = commitment; offer feels heavy to a cold buyer

OVERALL: WEAK

GRAND SLAM CHECKLIST
✓ Dream Outcome — present but generic
✗ Likelihood proof — missing; add 3 case study one-liners
✓ Time — fine
✗ Effort — too heavy; add "we do it WITH you" framing
✗ Bonuses — none listed; you have leverage here
✗ Guarantee — none; this is the biggest miss
✗ Scarcity — "cohort" implies it but you're not naming it
✗ Naming — "6-week cohort coaching" is descriptive, not magnetic

TOP 3 HIGHEST-LEVERAGE FIXES
1. Add a specific, time-bound guarantee: "Generate 5 qualified leads in your first 21 days or get a full refund + keep the materials." This kills the price objection cold.
2. Stack 3 done-WITH-you bonuses worth 2x the price: "Live offer audit ($1k value), 1:1 messaging call ($1.5k value), 60-day follow-up cohort ($2k value)." Total stack: $6.5k for $2k. The math becomes obvious.
3. Rename it. "6-week cohort coaching" → "The Premium Pricing Lab — 6 weeks to your first $5k month." Magnetic + outcome + interval + container.

ONE-LINE NEW OFFER REWRITE
"The Premium Pricing Lab: 6 weeks to your first $5k month, or we refund you and pay you $200 for your time."`,
  "grand-slam": `AVATAR
Solo creators (1K-50K followers) who have a real skill but charge $50-$200 when they should charge $2k+. They feel guilty asking for more. They watch competitors hit "$10k months" and don't know what they're doing wrong.

DREAM OUTCOME
"In 90 days you'll close your first $5k+ deal — and stop guessing about price forever."

CORE PROMISE
You will close at least one client at 5x your current rate within 90 days, or we refund you completely and pay you $200 for your time.

THE STACK
• Core: 6-week Pricing Lab cohort ($2,500 value)
• Bonus 1: Live offer-audit session in week 1 ($1,000 value) — kills the "I don't know where to start" objection
• Bonus 2: Done-with-you sales script ($1,500 value) — kills the "I can't sell at high prices" objection
• Bonus 3: 60-day implementation cohort post-program ($2,000 value) — kills the "I'll lose momentum" objection
• Bonus 4: Lifetime access to the Pricing Vault (300+ analyzed offers) ($1,000 value) — kills the "I'll need this again" objection
TOTAL STACK VALUE: $8,000

PRICE
$2,000 (or 2× $1,100)

GUARANTEE
"Close one client at 5x your current rate in 90 days, or full refund plus $200 for your time."

SCARCITY / URGENCY
12 spots per cohort. Cohorts run quarterly. Next cohort closes [date].

NAME
"The Premium Pricing Lab"

ONE-LINE PITCH
"6 weeks to your first $5k+ client — guaranteed, or we pay you to leave."`,
  "lead-plan": `CURRENT LEAD SOURCES
You're 90% on organic TikTok content. Zero outbound. Zero paid. This is high-risk single-channel.

THE 4 PILLARS (daily targets, Rule of 100 applied)

1. WARM OUTREACH — 5/day
   Channel: IG/Twitter DMs to past callers, students, anyone who's interacted
   Opener: "Saw you mentioned [their goal]. I just helped [similar person] hit it. Want to talk?"

2. COLD OUTREACH — 30/day
   Channel: Twitter DMs to creators in the 1K-10K range
   Opener: "Your hooks are sharp. One question: what's the offer behind the content?"

3. FREE CONTENT — 2/day
   1 reel (tactical) + 1 X post (contrarian). Your existing rhythm.

4. PAID ADS — $20/day
   ONLY retargeting your profile visitors. No cold targeting yet. Drive to your $7 mini-product.

LEAD MAGNET
"The Cohort Audit": 5-question quiz that scores their offer and surfaces the #1 fix. Quiz → email → automated tactical email sequence → consult offer.

WEEK-BY-WEEK
Week 1: Build the quiz + email sequence (2 days), set up Twitter outreach SOP (1 day)
Week 2: Start outreach + lead magnet live. Track close ratios.
Week 3: Launch retargeting at $20/day to mini-product
Week 4: Review: which pillar drove the most quality calls? Double down.

KPIs (DAILY)
• 35 outreach messages sent
• 5 quiz completions
• 1 booked call

FIRST 3 ACTIONS TODAY
1. Write the 5 quiz questions in the next 30 minutes
2. Send 5 warm DMs before lunch
3. Schedule tomorrow's content (block 60 min)`,
};

export const MOCK_RENDERS = [
  { id: "r1", prompt: "Bold red 'I QUIT' text top-left, shocked face center, yellow-black diagonal split background", size: "1536x1024", status: "done" },
  { id: "r2", prompt: "Split bank balance: $1,247 vs current, no face, dark blue overlay, white serif numerals", size: "1536x1024", status: "done" },
  { id: "r3", prompt: "Yellow background, purple bar chart, 3 huge words 'CAPTURE. THINK. SHIP.' in white bold sans", size: "1024x1024", status: "done" },
];

export const MOCK_VIDEO_JOBS = [
  { id: "vj1", filename: "tuesday-pricing-podcast-30min.mp4", status: "done", createdAt: daysAgo(1) },
  { id: "vj2", filename: "cohort-call-recording.mov", status: "cutting", createdAt: daysAgo(0) },
];

export const SAMPLE_PATTERN_REPORT = `WINNING STYLES
1. Contrarian-stat hooks ("99% of X do Y wrong") — recurring in your top 3 vault entries + Hormozi's analyzed patterns
2. Carousel structure: hook slide + 5 mistakes + 1 reframe + CTA — proven at 1.1M reach
3. Numerical specificity in titles ($1,247 not "low balance"; 18% not "high")

HOOK TRENDS WORTH DOUBLING DOWN ON
• STOP/START formula (m9) — works in pricing, hooks, retention
• "I was wrong about X" confession opener (m24) — vulnerability + authority combo
• Title-as-promise (m15) — MrBeast pattern adapted to your niche

CONTENT GAPS (untouched but data suggests will hit)
1. "Customer DM transformation" — your audience eats personal customer stories; you have 1 in vault, exploit the format
2. "Pricing teardown" of named competitors — high stop-rate, low effort, borrowed authority
3. Comparison videos ($X creator vs $Xk creator) — never tried, but matches MrBeast pattern proven in m15

WHAT TO MAKE MORE OF (5 next pieces)
1. TITLE: "$7 to $700 — why pricing changed everything" | HOOK: "Most people set prices backward." | FORMAT: 35s talking head + visual money jump | WHY NOW: pricing momentum from carousel
2. TITLE: "I was wrong about consistency" | HOOK: "I posted daily for a year. Here's what actually worked." | FORMAT: vulnerable open → tactical reveal | WHY NOW: contradicts current advice, anchors authority
3. TITLE: "The DM that 10x'd my pricing" | HOOK: "A customer told me I undercharged by $4,700." | FORMAT: story-driven 50s | WHY NOW: uses the gem in m17, transferable lesson
4. TITLE: "5 things killing your offer" | HOOK: "Your offer isn't broken. These 5 things are." | FORMAT: carousel (m11 spinoff) | WHY NOW: proven skeleton
5. TITLE: "$0 to $10k — bank screenshots" | HOOK: "Here's my bank from 365 days ago." | FORMAT: visual reveal 30s | WHY NOW: m20 idea ready to ship

SUNSET — stop doing this
• Personal/lifestyle content (m21 flopped at 700 views) — at 50K, your audience wants tactics not vibes. Save BTS for newsletter.
• Long format reels (60s+) — your fingerprint says 22-38s. Stop trying to be Ali.`;
