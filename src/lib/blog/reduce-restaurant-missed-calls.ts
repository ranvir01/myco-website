import type { BlogArticle } from "@/lib/blogTypes";

export const restaurantMissedCalls: BlogArticle = {
  slug: "reduce-restaurant-missed-calls",
  title: "Your Restaurant Misses Calls Every Dinner Rush. Here's What It Costs — and the Fix",
  description:
    "Restaurants miss up to 80% of calls at peak, and 69% of diners give up on places that don't answer. What those calls are worth — and the fix.",
  publishDate: "2026-08-30",
  targetKeyword: "restaurant missed calls",
  tag: "Restaurants",
  relatedServiceSlugs: ["ai-receptionist-chatbot", "ai-growth-website"],
  relatedIndustryHref: "/for/restaurants",
  readingMinutes: 5,
  body: [
    {
      type: "p",
      text: "It's 7:15 on a Friday. The dining room is full, two servers called out, and the phone is ringing. Nobody picks it up — because everybody is doing their actual job. The caller waits four rings, hangs up, and books somewhere else. That scene repeats every rush, in almost every restaurant, and it never shows up on a P&L line.",
    },
    {
      type: "p",
      text: "The numbers behind that scene are worse than most operators think. Research from [Slang.ai](https://www.slang.ai/post/how-missed-calls-are-limiting-restaurant-revenue-and-what-to-do-about-it), which builds phone AI for restaurants, found missed-call rates of **up to 80% during peak service** — not at struggling spots, but at busy, well-run ones. Being slammed is exactly when the phone loses.",
    },
    {
      type: "stat",
      value: "80%",
      label:
        "of calls can go unanswered at a busy restaurant during peak service, when staff are on the floor instead of the phone.",
      sourceName: "Slang.ai",
      sourceUrl:
        "https://www.slang.ai/post/how-missed-calls-are-limiting-restaurant-revenue-and-what-to-do-about-it",
    },
    { type: "h2", text: "Diners don't leave voicemails. They leave." },
    {
      type: "p",
      text: "Here's the part that turns a missed call into lost revenue: diners don't try again. A [Hostie survey](https://www.hostie.ai/blogs/missed-connection-over-two-thirds-of-americans-would-ditch-restaurants-that-dont-answer-the-phone) found **69% of Americans will give up on a restaurant entirely if nobody picks up**. They don't call back after the rush. They open Google, find the next place, and book there.",
    },
    {
      type: "stat",
      value: "69%",
      label:
        "of Americans say they'll give up on visiting a restaurant if no one answers the phone.",
      sourceName: "Hostie",
      sourceUrl:
        "https://www.hostie.ai/blogs/missed-connection-over-two-thirds-of-americans-would-ditch-restaurants-that-dont-answer-the-phone",
    },
    { type: "h2", text: "What those missed calls actually are" },
    {
      type: "p",
      text: "The cruel joke of restaurant phones: the calls you miss during a rush skew toward your highest-ticket business, not your smallest.",
    },
    {
      type: "ul",
      items: [
        "**Reservations** — often for the parties of six and eight that fill a Saturday, calling precisely when you're too busy to answer.",
        "**Large takeout and phone orders** — the office lunch order, the family feast, the game-day pickup. Big tickets, zero patience for hold music.",
        "**Catering and private events** — the single most valuable call your phone will ever receive, and the caller has three other restaurants on their list.",
        "**Basic questions** — hours, parking, \"can you do a gluten-free option?\" Unanswered, each one quietly becomes a no-show for a table you never knew you lost.",
      ],
    },
    {
      type: "p",
      text: "Run the rough math on your own numbers: missed calls per week, times the share that were bookings or orders, times your average ticket. For most full-service restaurants that's hundreds to thousands of dollars a month walking to a competitor — for the price of a ringtone.",
    },
    { type: "h2", text: "Why \"just hire someone for the phone\" doesn't work" },
    {
      type: "p",
      text: "The traditional answer is a dedicated host on the phone. In practice it rarely holds up. A part-time phone shift costs far more per month than any software, the phone rings hardest during the exact hours you're already short-staffed, and one person still can't take three calls at once at 7:15 on a Friday. And nobody is answering at 10pm when tomorrow's party of eight decides where to book.",
    },
    {
      type: "p",
      text: "That's why this problem is being solved with software plus a safety net of humans — not the other way around.",
    },
    { type: "h2", text: "The fix: three layers, no new staff" },
    {
      type: "p",
      text: "You don't fix this by yelling \"someone grab the phone!\" during service. You fix it with a small stack that answers for you:",
    },
    {
      type: "ol",
      items: [
        "**AI phone answering.** A natural-sounding assistant picks up every call, 24/7. It knows your hours, menu, specials, and policies, takes reservations, and answers the questions that make up most of your call volume — while your staff stays on the floor.",
        "**Missed-call text-back.** Any call that does slip through gets an instant text: \"Sorry we missed you! Book a table here, or reply and we'll help.\" The caller who would've given up now has a one-tap path back to you.",
        "**Booking links everywhere.** Your [website](/services#ai-growth-website), Google profile, and those text-backs all point to online reservation and ordering, so the customers who'd rather not call never need to.",
      ],
    },
    {
      type: "callout",
      title: "Keep humans on the calls that need humans",
      text: "AI should not handle everything. Allergy questions, complaints, and anything sensitive should route straight to a person — that's a handoff rule, set on day one. The AI's job is to absorb the 80% of calls that are hours, bookings, and orders so your team is actually free to take the calls that matter.",
    },
    { type: "h2", text: "What it costs" },
    {
      type: "p",
      text: "Restaurant-specific AI answering is an established market. [Slang.ai](https://www.slang.ai/post/how-missed-calls-are-limiting-restaurant-revenue-and-what-to-do-about-it), the best-known vendor, publishes pricing of roughly **$399 to $600 per month** per location. Against even one saved catering order a month, that math works — which is why thousands of restaurants pay it.",
    },
    {
      type: "p",
      text: "We built a leaner version for independent restaurants. Our [AI Receptionist & Chatbot](/services#ai-receptionist-chatbot) — 24/7 answering trained on your menu and policies, missed-call text-back, booking into your system, and human handoff rules — is **from $750 setup plus $150/month**, live in about a week. It's part of how we work with [restaurants](/for/restaurants) generally: fix the leak first, then grow what's coming in.",
    },
    { type: "h2", text: "Find out what you're missing — literally" },
    {
      type: "p",
      text: "Tonight, during the rush, have a friend call your restaurant. Count the rings. See what happens. If it goes to a full voicemail box — or just rings out — every would-be Saturday reservation is getting the same treatment.",
    },
    {
      type: "p",
      text: "Then get the [Free AI Opportunity Audit](/free-ai-audit): a 30-minute call plus a written 5-point action plan showing where calls, bookings, and orders are slipping — delivered within 48 hours, no obligation. The phone is going to keep ringing either way. The only question is who answers it.",
    },
  ],
};
