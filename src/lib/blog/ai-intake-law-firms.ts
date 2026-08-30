import type { BlogArticle } from "@/lib/blogTypes";

export const aiIntakeLawFirms: BlogArticle = {
  slug: "ai-intake-law-firms",
  title: "AI Intake for Law Firms: Stop Losing the Leads Nobody Follows Up With",
  description:
    "Clio's data shows most law firms never follow up with prospects. How AI intake fixes the leak — what it does, ethics guardrails, and real costs.",
  publishDate: "2026-08-30",
  targetKeyword: "ai intake law firm",
  tag: "Professional Services",
  relatedServiceSlugs: ["ai-receptionist-chatbot", "workflow-automation-sprint"],
  relatedIndustryHref: "/for/professional-services",
  readingMinutes: 5,
  body: [
    {
      type: "p",
      text: "Most law firms don't have a marketing problem. They have a pick-up-the-phone problem. You can spend thousands on ads and referrals, but if a prospective client calls and nobody answers — and nobody calls back — that spend bought a lead for the firm down the street.",
    },
    {
      type: "p",
      text: "This isn't a guess. Clio's Legal Trends Report sent secret shoppers to contact hundreds of law firms as prospective clients. The results should worry every managing partner.",
    },
    {
      type: "stat",
      value: "40%",
      label:
        "of law firms answered a phone call from a prospective client in Clio's secret-shopper study. The rest went to voicemail or nowhere.",
      sourceName: "Clio Legal Trends Report",
      sourceUrl: "https://www.clio.com/resources/legal-trends/",
    },
    { type: "h2", text: "The intake leak, in four numbers" },
    {
      type: "p",
      text: "Here's what [Clio's research](https://www.clio.com/resources/legal-trends/) found when researchers posed as potential clients:",
    },
    {
      type: "ul",
      items: [
        "Only **40% of firms answered the phone** when a prospective client called.",
        "Of the firms that missed the call, only **20% ever returned it**.",
        "**64% of prospects got zero follow-up** of any kind — no call, no email, nothing.",
        "Firms using intake technology reported **51% more leads and 52% more revenue** than firms without it.",
      ],
    },
    {
      type: "p",
      text: "Read that last line again. The gap between firms that respond and firms that don't isn't a rounding error. It's half again more business — from the same phone ringing.",
    },
    {
      type: "p",
      text: "Now do the math for your own firm. One signed client is worth what — a few thousand dollars? Tens of thousands? If even two callers a month hang up, hit voicemail, and hire whoever answered first, that's the most expensive leak in the building. And it's leaking at 6pm, on weekends, and every time you're in court.",
    },
    { type: "h2", text: "What AI intake actually does" },
    {
      type: "p",
      text: "AI intake is a system that makes sure every prospective client gets an immediate, professional response — even when everyone at the firm is busy or gone for the day. In practice it does three jobs:",
    },
    {
      type: "ol",
      items: [
        "**Answers, every time.** Website chat responds instantly, 24/7. A missed call gets a text back within seconds — \"Sorry we missed you, how can we help?\" — instead of a voicemail greeting most callers won't wait through.",
        "**Qualifies the lead.** It asks the questions your front desk would: What kind of matter is this? Where are you located? Has anything been filed yet? Bad-fit inquiries get a polite referral elsewhere instead of eating a partner's afternoon.",
        "**Books the consultation.** Qualified prospects pick a time straight from your calendar. No phone tag, no sticky notes, no \"I'll have someone call you back\" that never happens.",
      ],
    },
    {
      type: "callout",
      title: "The guardrail that matters",
      text: "Properly built AI intake **never gives legal advice**. It doesn't assess the merits of a case, quote fees, or tell anyone what to do about their situation. It answers logistics — practice areas, office hours, what to bring, how consultations work — collects the facts you tell it to collect, and books the meeting. The legal judgment stays where it belongs: with a lawyer.",
    },
    { type: "h2", text: "What about confidentiality and professional responsibility?" },
    {
      type: "p",
      text: "Fair question, and one you should ask any vendor. In plain English, here's what a responsibly configured system looks like:",
    },
    {
      type: "ul",
      items: [
        "**No advice, hard-scoped.** The assistant is restricted to intake and logistics. If someone asks \"do I have a case?\", it says a lawyer will discuss that in the consultation — full stop.",
        "**Clear disclosure.** Prospects are told they're talking to an automated assistant and that chatting doesn't create an attorney-client relationship, the same way your website disclaimer works today.",
        "**Minimal collection.** It gathers contact details and the basic facts you'd collect on a paper intake form — not case strategy or sensitive documents.",
        "**Conflict checks stay human.** The system collects names so your team can run conflicts before the consult; it doesn't decide who you can represent.",
        "**You control the data.** Intake records live in your systems under a vendor agreement with confidentiality terms — not in a black box. Ask where data is stored and who can see it.",
      ],
    },
    {
      type: "p",
      text: "Duties around confidentiality and supervising nonlawyer assistance apply to software just as they do to a human answering service — which law firms have used for decades. Treat AI intake the same way: scope it tightly, supervise it, and check your state bar's guidance on technology use. None of that is a reason to keep sending 64% of prospects into silence.",
    },
    { type: "h2", text: "What AI intake costs" },
    {
      type: "p",
      text: "Legal-specific intake automation typically runs **$300 to $1,000 per month** on the open market, depending on call volume and how much customization the vendor does. For a firm where one client covers a year of that, the payback question isn't really a question.",
    },
    {
      type: "p",
      text: "Our version is deliberately simpler and cheaper. The [AI Receptionist & Chatbot](/services#ai-receptionist-chatbot) — 24/7 website chat trained on your practice areas, missed-call text-back, qualification questions you approve, and booking into your calendar — is **from $750 setup plus $150/month**, live in about a week, with human handoff rules so real conversations reach a person. We build intake systems for firms as part of our [professional services practice](/for/professional-services), and pair it with a [Workflow Automation Sprint](/services#workflow-automation-sprint) when the follow-up after the consult needs fixing too.",
    },
    {
      type: "stat",
      value: "51%",
      label:
        "more leads reported by firms using intake technology — with 52% more revenue — versus firms without it.",
      sourceName: "Clio Legal Trends Report",
      sourceUrl: "https://www.clio.com/resources/legal-trends/",
    },
    { type: "h2", text: "Where to start" },
    {
      type: "p",
      text: "Before buying anything, find out how bad your leak actually is. Call your own office after hours. Fill out your own contact form and time the response. If you hit voicemail and nobody texts back, you now know what every prospect experiences.",
    },
    {
      type: "p",
      text: "Or let us do it properly: the [Free AI Opportunity Audit](/free-ai-audit) is a 30-minute call plus a written 5-point action plan showing exactly where your intake is losing signed clients — delivered within 48 hours, no obligation. Worst case, you get a clear picture of a problem 60% of firms don't know they have.",
    },
  ],
};
