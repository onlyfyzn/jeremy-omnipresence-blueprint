"use client";

import { useState } from "react";

const C = {
  bg: "#06060B",
  surface: "#0E0E16",
  surfaceAlt: "#13131D",
  border: "#1C1C2C",
  borderHi: "#2A2A3E",
  text: "#E4E2EE",
  muted: "#8A88A0",
  dim: "#56546A",
  w: "#FFFFFF",
  o: "#FF6B35", // orange - primary accent
  oD: "rgba(255,107,53,0.10)",
  r: "#FF4D6A", // red
  rD: "rgba(255,77,106,0.08)",
  p: "#7B68EE", // purple
  pD: "rgba(123,104,238,0.08)",
  g: "#00D4AA", // green
  gD: "rgba(0,212,170,0.08)",
  y: "#FFB800", // yellow
  yD: "rgba(255,184,0,0.08)",
  b: "#4DA8FF", // blue
  bD: "rgba(77,168,255,0.08)",
};

const angles = [
  {
    num: "01",
    title: "Tactical Frameworks",
    color: C.o,
    bg: C.oD,
    purpose: "Authority + ICP Attraction",
    desc: "Your proprietary concepts taught at grade-five reading level. Give away the best stuff — it builds authority and attracts the buyer who thinks 'if this is free, what's the paid version?'",
    examples: [
      "High IQ vs Low IQ content — why your viral posts kill sales",
      "The shoutout distribution model breakdown",
      "DM funnel architecture for info businesses",
      "Hook structures that repel non-buyer demographics",
      "Why 90% of info business owners attract the wrong audience (and the one-word fix)",
    ],
    funnelStage: "Discovery → Trust",
  },
  {
    num: "02",
    title: "Case Studies",
    subtitle: "(Without Parading Names)",
    color: C.g,
    bg: C.gD,
    purpose: "Proof of Mechanism",
    desc: "Focus on the mechanism, not the name-drop. Anonymise where needed, use real names only where there's goodwill. The process is the content.",
    examples: [
      "We added $153K/month to an info brand in 90 days — the exact system",
      "How we took an info business from $60K to $300K/month using shoutout distribution",
      "The content audit that doubled a client's inbound calls in 6 weeks",
      "What happened when we cut a client's posting frequency by 75%",
    ],
    funnelStage: "Trust → Conversion",
  },
  {
    num: "03",
    title: "Contrarian Takes",
    color: C.r,
    bg: C.rD,
    purpose: "Polarisation + Right Audience",
    desc: "Go against what the space believes. Create polarisation that attracts the right people and repels the wrong ones. Your natural opinions already do this — we just package them.",
    examples: [
      "Posting 4x a day is destroying your info business — here's why once is enough",
      "Your creative director should not be one person — here's what I'd build instead",
      "I've never met someone who went through a guru program and said they got real value",
      "Most YouTube agencies just give you title ideas and call it strategy",
    ],
    funnelStage: "Engagement + Shares",
  },
  {
    num: "04",
    title: "Industry Commentary",
    color: C.p,
    bg: C.pD,
    purpose: "Top-of-Space Positioning",
    desc: "Insert yourself into conversations at the top of the info space. Practitioner perspective on what others do well or get wrong. The Jeremy Haynes approach — you've actually done the thing at scale.",
    examples: [
      "I've helped generate $100M+ in info sales — here's what most consultants get backwards",
      "What [trending topic] gets right about content — and what it misses entirely",
      "The real reason info businesses plateau at $200K/month",
      "Why the 'build in public' trend doesn't work for high-ticket consulting",
    ],
    funnelStage: "Authority + Network",
  },
  {
    num: "05",
    title: "Behind the Operation",
    color: C.y,
    bg: C.yD,
    purpose: "Relatability + Trust",
    desc: "Show how SPM actually operates without making it a flex. The intersection of high-performing business and normal life IS the brand. Forest games, Love Island, Nottingham living.",
    examples: [
      "What a Monday looks like running a $5M+ agency from Nottingham",
      "I go to Forest games, watch Love Island, and run a consulting business — here's my actual week",
      "The recording day setup that produces a month of content in 3 hours",
      "How I think through client strategy in real-time (screen share)",
    ],
    funnelStage: "Relationship",
  },
  {
    num: "06",
    title: "Consulting Funnel",
    color: C.b,
    bg: C.bD,
    purpose: "Direct Response → Applications",
    desc: "YouTube videos designed specifically to generate consulting applications. Problem-aware content for info business owners stuck at $100K-$500K/month who need content and distribution.",
    examples: [
      "You're making $200K/month but your content still looks like a hobby — here's what's missing",
      "The content system I'd build if I had your info business (live breakdown)",
      "Why hiring a creative director won't fix your content problem",
      "3 signs your info business has outgrown your current content setup",
    ],
    funnelStage: "Conversion → Sale",
  },
];

const platformData = [
  {
    name: "YouTube",
    vol: "1-2x/week",
    purpose: "Consulting funnel engine",
    type: "Long-form tactical videos — each designed to generate inbound calls",
    tier: 1,
    color: C.o,
  },
  {
    name: "Instagram",
    vol: "5-7x/week",
    purpose: "Trust + credibility layer",
    type: "Scripted reels, carousel frameworks, story social proof",
    tier: 1,
    color: C.o,
  },
  {
    name: "Twitter/X",
    vol: "Daily + 1 thread",
    purpose: "Network multiplier + idea testing",
    type: "Tactical tips, contrarian takes, proof stacking (25K base)",
    tier: 1,
    color: C.o,
  },
  {
    name: "LinkedIn",
    vol: "3-4x/week",
    purpose: "B2B inbound pipeline",
    type: "Written thought leadership + case studies for info biz owners",
    tier: 1,
    color: C.o,
  },
  {
    name: "Substack",
    vol: "1x/week",
    purpose: "Owned audience + paid tier",
    type: "Deep newsletter — expands best-performing weekly topic",
    tier: 1,
    color: C.o,
  },
  {
    name: "Facebook Reels",
    vol: "4-5x/week",
    purpose: "Reach rebound (+51% YoY)",
    type: "Same Reels cross-posted — older demo with budget authority",
    tier: 2,
    color: C.y,
  },
  {
    name: "Facebook Page",
    vol: "2-3x/week",
    purpose: "Community + Groups",
    type: "Text repurpose + video — future community hub",
    tier: 2,
    color: C.y,
  },
  {
    name: "Threads",
    vol: "4-5x/week",
    purpose: "Low-competition reach",
    type: "Text repurpose — 1,536 avg impressions/post, near zero competition",
    tier: 2,
    color: C.y,
  },
  {
    name: "TikTok",
    vol: "3-4x/week",
    purpose: "Passive cross-post only",
    type: "Auto-post Reels — zero optimization, free discovery layer",
    tier: 3,
    color: C.dim,
  },
];

const weeklyPlan = [
  {
    day: "MON",
    label: "Ideation + Planning",
    icon: "🧠",
    color: C.o,
    pillar: "ALL",
    time: "45 min",
    tasks: [
      "45-min call: review last week's performance",
      "Lock in this week's topics, angles, hooks",
      "I send finished scripts by end of day",
      "Post daily LinkedIn + X text tests (Hormozi method)",
    ],
    posts: "LinkedIn · X · Threads",
    owner: "BOTH — Jeremy ideates, Faizaan scripts",
  },
  {
    day: "TUE",
    label: "Script Review + Prep",
    icon: "📝",
    color: C.g,
    pillar: "—",
    time: "20 min",
    tasks: [
      "Jeremy reviews scripts — flags anything off-voice",
      "Faizaan revises same day, finals confirmed by evening",
      "Shot list and recording schedule prepped",
      "Carousel/graphic assets briefed to designer",
    ],
    posts: "LinkedIn carousel · X · Threads · FB",
    owner: "JEREMY — 20 min review only",
  },
  {
    day: "WED",
    label: "Recording Day",
    icon: "🎬",
    color: C.r,
    pillar: "A1-A6",
    time: "2-3 hrs",
    tasks: [
      "Full shot list prepped, scripts ready, everything laid out",
      "Record 1-2 YouTube long-form (8-12 min each)",
      "Record 3-5 scripted Reels (60-90s each)",
      "Jeremy shows up, delivers, leaves — Faizaan handles everything after",
    ],
    posts: "YouTube goes live · Substack drops · First Reel",
    owner: "JEREMY — records only. Team handles post-production.",
  },
  {
    day: "THU",
    label: "Edit + Build",
    icon: "⚡",
    color: C.p,
    pillar: "—",
    time: "0 min",
    tasks: [
      "Team edits long-form YouTube",
      "Short-form cuts for Reels across platforms",
      "Carousels and visual assets built",
      "Twitter threads + LinkedIn posts written from recording content",
    ],
    posts: "Reels · FB Reels · TikTok · LinkedIn · X · Threads",
    owner: "FAIZAAN + TEAM — Jeremy does nothing.",
  },
  {
    day: "FRI",
    label: "Recap + Distribution",
    icon: "✅",
    color: C.b,
    pillar: "A3/A5",
    time: "15 min",
    tasks: [
      "Faizaan sends weekly content package for approval",
      "15-min check-in call: what's approved, what's cut",
      "Approved content scheduled across all platforms",
      "Personal story / contrarian post goes live (Friday audiences)",
    ],
    posts: "LinkedIn story · Reels · FB Reels · TikTok · X · Threads · Stories",
    owner: "BOTH — 15 min sign-off, then auto-publish",
  },
  {
    day: "SAT",
    label: "Auto-Publish",
    icon: "⏸",
    color: C.dim,
    pillar: "—",
    time: "0 min",
    tasks: [
      "Scheduled content goes live automatically",
      "Stories and engagement posts queued",
      "Remaining clips from batch distribute",
      "Jeremy enjoys his weekend",
    ],
    posts: "TikTok · Reels · FB Reels · X (auto)",
    owner: "SYSTEM — fully automated",
  },
  {
    day: "SUN",
    label: "Auto-Publish + Prep",
    icon: "📋",
    color: C.dim,
    pillar: "—",
    time: "0 min",
    tasks: [
      "Remaining scheduled content publishes",
      "Faizaan scans trending topics for Monday",
      "IG Stories: casual behind-the-scenes (optional)",
      "Performance data pulled for Monday review",
    ],
    posts: "Auto-publish · IG Stories (optional)",
    owner: "FAIZAAN — light prep for Monday call",
  },
];

const buildPhases = [
  {
    phase: "01",
    title: "System Build",
    weeks: "Weeks 1-3",
    color: C.o,
    status: "FOUNDATION",
    items: [
      "2-3 deep-dive extraction sessions with Jeremy",
      "Voice & positioning playbook — so anyone writing sounds like him",
      "Scripting templates — hook structures trained on his style",
      "Ideation system — topics from principles, not trends",
      "Content calendar mapped to consulting launch timeline",
      "Platform-specific SOPs — cadence, format specs, distribution",
      "Quality control checklist — what meets his standard",
    ],
  },
  {
    phase: "02",
    title: "Team Assembly",
    weeks: "Weeks 2-4",
    color: C.g,
    status: "PEOPLE",
    items: [
      "Scriptwriter — trained on voice playbook, drafts from Monday ideation",
      "Video editor — long-form YouTube + short-form Reel cuts",
      "Graphic/carousel designer — thumbnails, carousels, visual assets",
      "Videographer — Nottingham-based for recording days OR self-film SOP",
      "All vetted, hired, trained, and managed by Faizaan",
      "Jeremy interacts with ONE person — not five freelancers in five Slack channels",
    ],
  },
  {
    phase: "03",
    title: "Operation Mode",
    weeks: "Week 5+",
    color: C.b,
    status: "RUNNING",
    items: [
      "Weekly rhythm kicks in: Monday call → Wednesday recording → Friday recap",
      "Faizaan runs operation, QAs every piece before it goes live",
      "Team managed end-to-end — Jeremy shows up for ~4 hrs/week",
      "Monthly deep strategy review tied to consulting revenue goals",
      "Continuous optimization: double down on what performs, cut what doesn't",
      "Scale triggers: when to add volume, platforms, or team members",
    ],
  },
];

const funnelSteps = [
  {
    stage: "DISCOVER",
    platforms: "YouTube · Reels · FB Reels · TikTok",
    angles: "A1 + A3 + A4",
    color: C.o,
    desc: "Tactical frameworks + contrarian takes stop the scroll. Industry commentary positions Jeremy at the top of the conversation.",
  },
  {
    stage: "FOLLOW & TRUST",
    platforms: "Instagram · LinkedIn · X · Threads",
    angles: "A2 + A5",
    color: C.y,
    desc: "Case studies prove the mechanism works. Behind-the-operation content makes Jeremy human and relatable — not another guru.",
  },
  {
    stage: "SUBSCRIBE",
    platforms: "Substack · Newsletter · YouTube (long-form)",
    angles: "A1 + A6",
    color: C.p,
    desc: "Deep playbooks and consulting funnel content prove depth. Owned audience grows outside algorithm dependency.",
  },
  {
    stage: "APPLY & BUY",
    platforms: "Consulting applications · Sales calls",
    angles: "A6 → All",
    color: C.g,
    desc: "Free course for businesses under $100K/mo. $50K/yr licensed system + implementation manager for $100K+/mo businesses.",
  },
];

const metricoolData = [
  {
    platform: "YouTube",
    stat: "Views +30% YoY",
    insight: "Best platform for long-form discovery. Evergreen search compounds.",
    color: C.o,
  },
  {
    platform: "IG Reels",
    stat: "Reach -35% YoY",
    insight: "Saturated. Quality over quantity wins. Scripted > random microclips.",
    color: C.r,
  },
  {
    platform: "Facebook",
    stat: "Reach +51% YoY",
    insight: "Biggest rebound. Older demo with budget authority. Cross-post Reels free.",
    color: C.g,
  },
  {
    platform: "LinkedIn",
    stat: "Impressions -23%",
    insight: "Saturated but still converts. Sharper, original content needed to stand out.",
    color: C.p,
  },
  {
    platform: "TikTok",
    stat: "28K avg reach/post",
    insight: "Highest raw reach. But ICP doesn't live here — passive cross-post only.",
    color: C.y,
  },
  {
    platform: "Threads",
    stat: "1,536 avg impressions",
    insight: "Near-zero competition. Free text repurpose distribution channel.",
    color: C.b,
  },
  {
    platform: "X/Twitter",
    stat: "Link clicks -28%",
    insight: "Declining as traffic driver. Better for idea testing + network building.",
    color: C.y,
  },
];

function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        padding: 3,
        background: C.surface,
        borderRadius: 10,
        border: `1px solid ${C.border}`,
        marginBottom: 28,
      }}
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => onChange(t.id)}
          style={{
            flex: "1 1 auto",
            minWidth: 80,
            padding: "9px 12px",
            background: active === t.id ? C.o : "transparent",
            color: active === t.id ? C.w : C.muted,
            border: "none",
            borderRadius: 8,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5,
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
            letterSpacing: 0.3,
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function SectionHeader({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc?: string;
}) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: 3,
          color: C.o,
          textTransform: "uppercase",
          marginBottom: 4,
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26,
          fontWeight: 700,
          color: C.w,
          margin: "0 0 6px",
        }}
      >
        {title}
      </h2>
      {desc && (
        <p
          style={{
            fontSize: 13,
            color: C.muted,
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 640,
          }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

function AngleCard({
  a,
  open,
  toggle,
}: {
  a: (typeof angles)[number];
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div
      onClick={toggle}
      style={{
        background: open ? a.bg : C.surface,
        border: `1px solid ${open ? a.color + "40" : C.border}`,
        borderRadius: 12,
        padding: "18px 16px",
        cursor: "pointer",
        transition: "all 0.25s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {open && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: `linear-gradient(90deg, ${a.color}, transparent)`,
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          marginBottom: open ? 10 : 0,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: a.color,
            fontWeight: 700,
            marginTop: 1,
          }}
        >
          {a.num}
        </span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 15.5,
              fontWeight: 700,
              color: C.w,
              lineHeight: 1.2,
            }}
          >
            {a.title}
          </div>
          {a.subtitle && (
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                color: C.muted,
                marginTop: 1,
              }}
            >
              {a.subtitle}
            </div>
          )}
        </div>
        <span
          style={{
            padding: "2px 8px",
            borderRadius: 100,
            background: `${a.color}12`,
            border: `1px solid ${a.color}25`,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 9,
            color: a.color,
            letterSpacing: 0.5,
            whiteSpace: "nowrap",
          }}
        >
          {a.purpose}
        </span>
      </div>
      {open && (
        <>
          <p
            style={{
              fontSize: 12.5,
              color: C.muted,
              lineHeight: 1.55,
              margin: "0 0 12px",
              paddingLeft: 22,
            }}
          >
            {a.desc}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 7,
              paddingLeft: 22,
            }}
          >
            {a.examples.map((e, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 7 }}
              >
                <span
                  style={{
                    color: a.color,
                    fontSize: 7,
                    marginTop: 5,
                    flexShrink: 0,
                  }}
                >
                  ●
                </span>
                <span
                  style={{
                    fontSize: 12.5,
                    color: C.text,
                    lineHeight: 1.4,
                    fontStyle: "italic",
                  }}
                >
                  "{e}"
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 10, paddingLeft: 22 }}>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5,
                color: C.dim,
              }}
            >
              FUNNEL →
            </span>{" "}
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 9.5,
                color: a.color,
              }}
            >
              {a.funnelStage}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

export default function Strategy() {
  const [tab, setTab] = useState("overview");
  const [openAngle, setOpenAngle] = useState(0);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "angles", label: "Content Angles" },
    { id: "platforms", label: "Platforms" },
    { id: "weekly", label: "Weekly Plan" },
    { id: "build", label: "Build Phases" },
    { id: "funnel", label: "Funnel" },
    { id: "method", label: "Method" },
    { id: "data", label: "Metricool Data" },
  ];

  return (
    <div
      style={{
        background: C.bg,
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        color: C.text,
        padding: "28px 20px",
      }}
    >
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=JetBrains+Mono:wght@400;500;700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: `linear-gradient(135deg, ${C.o}, ${C.r})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: 20,
                color: C.w,
              }}
            >
              J
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: 3,
                  color: C.o,
                }}
              >
                SOCIAL PROFIT MEDIA
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 13,
                  color: C.muted,
                }}
              >
                Content Department Build Plan
              </div>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 34,
              fontWeight: 900,
              color: C.w,
              margin: 0,
              lineHeight: 1.12,
            }}
          >
            Jeremy Moser × Faizaan Baig
            <br />
            <span style={{ color: C.o }}>Omnipresence Blueprint</span>
          </h1>

          <p
            style={{
              fontSize: 13,
              color: C.muted,
              marginTop: 8,
              lineHeight: 1.6,
              maxWidth: 620,
            }}
          >
            Practitioner-first content strategy. You are the brain — this is the
            machine built around it. From zero infrastructure to a fully running
            content department in 5 weeks.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: 16,
            }}
          >
            {[
              { l: "Jeremy's Time", v: "~4 hrs/week" },
              { l: "Weekly Output", v: "20-30 pieces" },
              { l: "Platforms", v: "9 active" },
              { l: "Launch → Live", v: "5 weeks" },
              { l: "Revenue Target", v: "Consulting inbound" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 14px",
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 7,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9,
                    color: C.dim,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {s.l}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    color: C.o,
                    fontWeight: 700,
                    marginTop: 1,
                  }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Tabs tabs={tabs} active={tab} onChange={setTab} />

        {/* ========== OVERVIEW ========== */}
        {tab === "overview" && (
          <div>
            <SectionHeader
              tag="The Premise"
              title="You Already Know What Works"
              desc="The frameworks live in your head. The bottleneck is not strategy — it's time and bandwidth. This plan converts what's in your brain into documented systems, builds a team around them, and runs the operation so your involvement drops to recording days and a Monday check-in."
            />

            <div
              style={{
                padding: 20,
                background: `linear-gradient(135deg, ${C.oD}, ${C.rD})`,
                border: `1px solid ${C.o}20`,
                borderRadius: 12,
                borderLeft: `3px solid ${C.o}`,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 18,
                  color: C.w,
                  lineHeight: 1.4,
                  fontStyle: "italic",
                }}
              >
                "You are the brain. I am the operator that builds the machine
                around it."
              </div>
            </div>

            {/* What Faizaan Does */}
            <div
              style={{
                padding: 20,
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.o,
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                WHAT FAIZAAN DOES
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[
                  "Extract frameworks, voice & positioning into playbooks a team can execute",
                  "Find, vet, and train the right people — scripting, editing, distribution",
                  "Run the weekly operation: show up, record, go back to running SPM",
                  "Quality-check everything against your standard before it goes live",
                ].map((t, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: C.o,
                        marginTop: 2,
                        fontWeight: 700,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        color: C.text,
                        lineHeight: 1.45,
                      }}
                    >
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Positioning */}
            <div
              style={{
                padding: 20,
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.r,
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                CORE POSITIONING
              </div>

              <div style={{ fontSize: 13.5, color: C.text, lineHeight: 1.6 }}>
                No self-glorification. No lifestyle flexing. No generic formats.
                Everything is tactical, principle-based, and packaged for high-IQ
                audiences that deflect non-buyer demographics. Jeremy runs a
                high-performing business with some of the biggest brands in the
                game — and still watches Love Island with his wife. That
                intersection IS the brand.
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 12,
                }}
              >
                {[
                  "Anti-guru",
                  "Practitioner-first",
                  "Tactical > motivational",
                  "High IQ content",
                  "Normal life, abnormal results",
                ].map((t, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "4px 10px",
                      borderRadius: 100,
                      background: C.rD,
                      border: `1px solid ${C.r}20`,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 9.5,
                      color: C.r,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div
              style={{
                padding: 20,
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.g,
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                WEEKLY DELIVERABLES
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 8,
                }}
              >
                {[
                  { p: "YouTube", v: "1-2 videos" },
                  { p: "Instagram", v: "5-7 reels/carousels" },
                  { p: "Twitter/X", v: "7+ tweets + 1 thread" },
                  { p: "LinkedIn", v: "3-4 posts" },
                  { p: "Substack", v: "1 newsletter" },
                  { p: "FB/Threads/TikTok", v: "Cross-posted daily" },
                ].map((d, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 12px",
                      background: C.surfaceAlt,
                      borderRadius: 6,
                    }}
                  >
                    <span style={{ fontSize: 12.5, color: C.muted }}>{d.p}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 12,
                        color: C.w,
                        fontWeight: 600,
                      }}
                    >
                      {d.v}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 14,
                  padding: "10px 14px",
                  background: C.oD,
                  borderRadius: 8,
                  border: `1px solid ${C.o}20`,
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: C.o,
                  }}
                >
                  Jeremy's total time: ~4 hours/week. One Monday call. One
                  recording session. One Friday sign-off.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========== CONTENT ANGLES ========== */}
        {tab === "angles" && (
          <div>
            <SectionHeader
              tag="Content Angles"
              title="What Jeremy Actually Posts"
              desc="Six rotating angles derived from Jeremy's belief system and consulting funnel. Click each to expand with example topics."
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 10,
              }}
            >
              {angles.map((a, i) => (
                <AngleCard
                  key={i}
                  a={a}
                  open={openAngle === i}
                  toggle={() => setOpenAngle(openAngle === i ? -1 : i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* ========== PLATFORMS ========== */}
        {tab === "platforms" && (
          <div>
            <SectionHeader
              tag="Platform Architecture"
              title="Where We Post & Why"
              desc="Every platform earns its place based on what it drives for the consulting funnel. We don't post everywhere for the sake of it."
            />

            {[1, 2, 3].map((tier) => (
              <div key={tier} style={{ marginBottom: 16 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    marginBottom: 6,
                    background:
                      tier === 1
                        ? C.oD
                        : tier === 2
                          ? C.yD
                          : `${C.dim}10`,
                    borderRadius: 7,
                    border: `1px solid ${tier === 1 ? C.o : tier === 2 ? C.y : C.dim}18`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: tier === 1 ? C.o : tier === 2 ? C.y : C.dim,
                    }}
                  >
                    TIER {tier} — {tier === 1 ? "CREATE FOR" : tier === 2 ? "REPURPOSE TO" : "PASSIVE"}
                  </span>
                </div>

                {platformData
                  .filter((p) => p.tier === tier)
                  .map((p, i) => (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "110px 1fr 120px",
                        alignItems: "center",
                        gap: 10,
                        padding: "11px 14px",
                        background: C.surface,
                        border: `1px solid ${C.border}`,
                        borderRadius: 7,
                        marginBottom: 4,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: C.w,
                          }}
                        >
                          {p.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9.5,
                            color: p.color,
                          }}
                        >
                          {p.purpose}
                        </div>
                      </div>
                      <div style={{ fontSize: 12, color: C.muted }}>{p.type}</div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 11,
                          color: C.text,
                          textAlign: "right",
                        }}
                      >
                        {p.vol}
                      </div>
                    </div>
                  ))}
              </div>
            ))}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginTop: 8,
              }}
            >
              <div
                style={{
                  padding: 16,
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9.5,
                    color: C.p,
                    letterSpacing: 2,
                    marginBottom: 6,
                  }}
                >
                  ICP 1 — INFO BUSINESS OWNERS
                </div>
                <div style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.5 }}>
                  Doing $100K-$500K/mo. Need content + distribution at scale without
                  building an internal team. LinkedIn + YouTube + Newsletter.
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  background: C.surface,
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 9.5,
                    color: C.g,
                    letterSpacing: 2,
                    marginBottom: 6,
                  }}
                >
                  ICP 2 — AGENCY BUILDERS
                </div>
                <div style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.5 }}>
                  Want to build/scale content agency or consulting biz. Need
                  operational playbook from a practitioner. LinkedIn + X + YouTube.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== WEEKLY PLAN ========== */}
        {tab === "weekly" && (
          <div>
            <SectionHeader
              tag="Monday → Monday"
              title="Weekly Rhythm"
              desc="Your total time commitment: ~4 hours/week. One Monday call. One recording session. One Friday sign-off. Everything else is built, managed, and quality-controlled without you."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {weeklyPlan.map((d, i) => (
                <div
                  key={i}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 10,
                    padding: "14px 16px",
                    borderLeft: `3px solid ${d.color}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 18 }}>{d.icon}</span>
                      <div>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 12,
                              fontWeight: 700,
                              color: d.color,
                            }}
                          >
                            {d.day}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: 15,
                              fontWeight: 700,
                              color: C.w,
                            }}
                          >
                            {d.label}
                          </span>
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9.5,
                            color: C.muted,
                            marginTop: 1,
                          }}
                        >
                          {d.owner}
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                      <span
                        style={{
                          padding: "3px 8px",
                          borderRadius: 100,
                          background: `${d.color}12`,
                          border: `1px solid ${d.color}25`,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9.5,
                          color: d.color,
                        }}
                      >
                        {d.pillar}
                      </span>
                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: 100,
                          background: d.time === "0 min" ? `${C.g}12` : `${C.w}08`,
                          border: `1px solid ${d.time === "0 min" ? C.g : C.w}15`,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 10,
                          fontWeight: 700,
                          color: d.time === "0 min" ? C.g : C.w,
                        }}
                      >
                        {d.time}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 6,
                      marginBottom: 8,
                    }}
                  >
                    {d.tasks.map((t, j) => (
                      <div
                        key={j}
                        style={{ display: "flex", alignItems: "flex-start", gap: 6 }}
                      >
                        <span
                          style={{
                            color: d.color,
                            fontSize: 6,
                            marginTop: 5.5,
                            flexShrink: 0,
                          }}
                        >
                          ◆
                        </span>
                        <span style={{ fontSize: 12, color: C.text, lineHeight: 1.4 }}>
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      padding: "5px 10px",
                      background: C.bg,
                      borderRadius: 5,
                      display: "inline-block",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9.5,
                        color: C.dim,
                      }}
                    >
                      POSTS →
                    </span>{" "}
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9.5,
                        color: C.muted,
                      }}
                    >
                      {d.posts}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Time Summary */}
            <div
              style={{
                marginTop: 16,
                padding: 16,
                background: C.oD,
                border: `1px solid ${C.o}20`,
                borderRadius: 10,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.dim,
                  letterSpacing: 2,
                  marginBottom: 6,
                }}
              >
                JEREMY'S WEEKLY TIME COMMITMENT
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
                {[{ d: "Monday call", t: "45 min" }, { d: "Script review", t: "20 min" }, { d: "Recording day", t: "2-3 hrs" }, { d: "Friday recap", t: "15 min" }].map(
                  (x, i) => (
                    <div key={i}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: C.muted }}>
                        {x.d}: 
                      </span>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: C.o, fontWeight: 700 }}>
                        {x.t}
                      </span>
                    </div>
                  )
                )}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  color: C.w,
                  fontWeight: 700,
                  marginTop: 8,
                }}
              >
                Total: ~4 hours/week. Everything else is handled.
              </div>
            </div>
          </div>
        )}

        {/* ========== BUILD PHASES ========== */}
        {tab === "build" && (
          <div>
            <SectionHeader
              tag="The Build Process"
              title="Zero → Running in 5 Weeks"
              desc="Three phases from no infrastructure to a fully operational content department. Goal: Jeremy's involvement drops to recording days and a Monday check-in."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {buildPhases.map((ph, i) => (
                <div key={i}>
                  <div
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      borderRadius: 12,
                      padding: "20px 18px",
                      borderLeft: `3px solid ${ph.color}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 14,
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 22,
                            fontWeight: 900,
                            color: ph.color,
                            opacity: 0.3,
                          }}
                        >
                          {ph.phase}
                        </span>
                        <div>
                          <div
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: 18,
                              fontWeight: 700,
                              color: C.w,
                            }}
                          >
                            {ph.title}
                          </div>
                          <div
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 10,
                              color: C.muted,
                            }}
                          >
                            {ph.weeks}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          padding: "3px 10px",
                          borderRadius: 100,
                          background: `${ph.color}12`,
                          border: `1px solid ${ph.color}25`,
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9.5,
                          color: ph.color,
                          letterSpacing: 1,
                        }}
                      >
                        {ph.status}
                      </span>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {ph.items.map((item, j) => (
                        <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 9.5,
                              color: ph.color,
                              marginTop: 2.5,
                              fontWeight: 700,
                            }}
                          >
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span style={{ fontSize: 13, color: C.text, lineHeight: 1.45 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {i < buildPhases.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "3px 0" }}>
                      <div
                        style={{
                          width: 2,
                          height: 16,
                          background: `linear-gradient(to bottom, ${ph.color}40, ${buildPhases[i + 1].color}40)`,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Team */}
            <div
              style={{
                marginTop: 20,
                padding: 18,
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.g,
                  letterSpacing: 2,
                  marginBottom: 12,
                }}
              >
                THE TEAM (MANAGED BY FAIZAAN)
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: 8,
                }}
              >
                {[
                  { role: "Scriptwriter", desc: "Trained on voice playbook. Drafts from Monday ideation." },
                  { role: "Video Editor", desc: "Long-form YouTube + short-form Reel cuts." },
                  { role: "Graphic Designer", desc: "Carousels, thumbnails, visual assets." },
                  { role: "Videographer", desc: "Nottingham-based for recording days OR self-film SOP." },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 12,
                      background: C.surfaceAlt,
                      borderRadius: 8,
                      border: `1px solid ${C.border}`,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: C.g,
                        fontWeight: 600,
                        marginBottom: 3,
                      }}
                    >
                      {r.role}
                    </div>
                    <div style={{ fontSize: 11.5, color: C.muted, lineHeight: 1.4 }}>{r.desc}</div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 12,
                  padding: "8px 12px",
                  background: C.gD,
                  borderRadius: 6,
                  border: `1px solid ${C.g}18`,
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, color: C.g }}>
                  Jeremy interacts with ONE person (Faizaan) — not five freelancers in five Slack channels.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========== FUNNEL ========== */}
        {tab === "funnel" && (
          <div>
            <SectionHeader
              tag="Conversion Architecture"
              title="How Content Becomes Revenue"
              desc="Every piece of content moves the audience one step closer to a consulting application."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {funnelSteps.map((s, i) => (
                <div key={i}>
                  <div
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      borderRadius: 12,
                      padding: "20px 18px",
                      borderLeft: `3px solid ${s.color}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        gap: 14,
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 20,
                              fontWeight: 900,
                              color: s.color,
                              opacity: 0.3,
                            }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: 19,
                              fontWeight: 700,
                              color: C.w,
                            }}
                          >
                            {s.stage}
                          </span>
                        </div>
                        <p style={{ fontSize: 12.5, color: C.muted, lineHeight: 1.5, margin: 0 }}>
                          {s.desc}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                        <span
                          style={{
                            padding: "3px 10px",
                            borderRadius: 100,
                            background: `${s.color}12`,
                            border: `1px solid ${s.color}25`,
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 9.5,
                            color: s.color,
                          }}
                        >
                          {s.angles}
                        </span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, color: C.dim, textAlign: "right" }}>
                          {s.platforms}
                        </span>
                      </div>
                    </div>
                  </div>

                  {i < funnelSteps.length - 1 && (
                    <div style={{ display: "flex", justifyContent: "center", padding: "3px 0" }}>
                      <div
                        style={{
                          width: 2,
                          height: 16,
                          background: `linear-gradient(to bottom, ${s.color}40, ${funnelSteps[i + 1].color}40)`,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========== METHOD ========== */}
        {tab === "method" && (
          <div>
            <SectionHeader
              tag="The Hybrid Method"
              title="Hormozi × GaryVee × Jeremy"
              desc="Test on text, scale what works, distribute everywhere — but intentional, not freestyle."
            />

            {[{
              icon: "H",
              title: "From Hormozi",
              tag: "TEST ON TEXT, SCALE WHAT WORKS",
              color: C.r,
              bg: C.rD,
              items: [
                "Post raw ideas on LinkedIn + X daily (Monday text testing)",
                "Track which posts get highest engagement over 7 days",
                "Only invest video production into validated ideas",
                "SPCL framework: Status, Power, Credibility, Likeness",
                "Free course to build goodwill → high-ticket for serious buyers",
              ],
            },
            {
              icon: "G",
              title: "From GaryVee",
              tag: "REVERSE PYRAMID DISTRIBUTION",
              color: C.y,
              bg: C.yD,
              items: [
                "One pillar content piece → 20+ micro-content derivatives",
                "YouTube long-form is the pillar (filmed Wednesday)",
                "Team chops into Reels, Shorts, carousels, text posts",
                "Platform-contextual: same message, different containers",
                "Document the operation, don't just create from scratch",
              ],
            },
            {
              icon: "J",
              title: "Jeremy's Adaptation",
              tag: "INTENTIONAL, NOT FREESTYLE",
              color: C.o,
              bg: C.oD,
              items: [
                "Scripts Reels intentionally — no random riffing and microclipping",
                "High IQ content: terminology + visuals that deflect non-buyers",
                "Won't parade client wins — builds trust through frameworks instead",
                "Monday ideation → Wednesday filming → Friday review & pivot",
                "Quality over volume: 1 great post/day beats 4 mediocre ones",
              ],
            }].map((m, i) => (
              <div
                key={i}
                style={{
                  padding: 18,
                  background: i === 2 ? `linear-gradient(135deg, ${C.oD}, ${C.gD})` : C.surface,
                  border: `1px solid ${i === 2 ? C.o + "20" : C.border}`,
                  borderRadius: 12,
                  marginBottom: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 7,
                      background: i === 2 ? `linear-gradient(135deg, ${C.o}, ${C.g})` : m.bg,
                      border: i < 2 ? `1px solid ${m.color}25` : "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: i === 2 ? C.w : m.color,
                    }}
                  >
                    {m.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: C.w }}>
                      {m.title}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5, color: m.color }}>
                      {m.tag}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {m.items.map((t, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 9.5,
                          color: m.color,
                          marginTop: 2.5,
                          fontWeight: 700,
                        }}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontSize: 12.5, color: C.text, lineHeight: 1.4 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div
              style={{
                padding: 16,
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 10,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 9.5,
                  color: C.dim,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}
              >
                THE FEEDBACK LOOP
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                {["Text Test (Mon)", "→", "Track Winners", "→", "Script & Film (Wed)", "→", "Distribute (Thu-Sat)", "→", "Review & Repeat (Fri)"].map(
                  (s, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: s === "→" ? "'DM Sans'" : "'JetBrains Mono', monospace",
                        fontSize: s === "→" ? 14 : 10,
                        color: s === "→" ? C.o : C.text,
                        fontWeight: s === "→" ? 400 : 600,
                        padding: s === "→" ? 0 : "5px 10px",
                        background: s === "→" ? "transparent" : `${C.o}06`,
                        borderRadius: 5,
                        border: s === "→" ? "none" : `1px solid ${C.o}12`,
                      }}
                    >
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========== METRICOOL DATA ========== */}
        {tab === "data" && (
          <div>
            <SectionHeader
              tag="Metricool 2026 Study"
              title="The Data Behind the Strategy"
              desc="39.7 million posts analyzed across 1 million accounts. Summary stats below."
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {metricoolData.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 140px 1fr",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 16px",
                    background: C.surface,
                    border: `1px solid ${C.border}`,
                    borderRadius: 8,
                    borderLeft: `3px solid ${d.color}`,
                  }}
                >
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: C.w }}>{d.platform}</div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: d.color,
                      fontWeight: 700,
                    }}
                  >
                    {d.stat}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted }}>{d.insight}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 18,
                background: C.surface,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: C.o,
                  letterSpacing: 2,
                  marginBottom: 10,
                }}
              >
                WHAT THIS MEANS FOR JEREMY
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  {
                    t: "YouTube is the engine",
                    d: "Views up 30%. Every consulting funnel video compounds in search. This is where inbound calls come from.",
                  },
                  {
                    t: "Instagram needs quality, not volume",
                    d: "Reels reach down 35%. Scripted, intentional content outperforms random microclips. High IQ content framework applies here.",
                  },
                  {
                    t: "Facebook is the free bonus",
                    d: "Reach up 51%. Cross-posting Reels costs nothing and reaches an older demo with budget authority for $50K consulting.",
                  },
                  {
                    t: "LinkedIn is saturated but converts",
                    d: "Impressions down 23% — but Jeremy's ICP lives here. Sharper frameworks and case studies cut through the noise.",
                  },
                  {
                    t: "X is for testing, not traffic",
                    d: "Link clicks down 28%. Use it as the Hormozi testing ground — raw ideas, see what resonates, then produce winners as video.",
                  },
                ].map((x, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 9.5,
                        color: C.o,
                        marginTop: 2.5,
                        fontWeight: 700,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span style={{ fontSize: 13, color: C.w, fontWeight: 600 }}>{x.t}: </span>
                      <span style={{ fontSize: 12.5, color: C.muted }}>{x.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div
          style={{
            marginTop: 44,
            paddingTop: 16,
            borderTop: `1px solid ${C.border}`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9.5,
              color: C.dim,
            }}
          >
            Strategy by XYZA Strategies × Faizaan Baig
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 9.5,
              color: C.dim,
            }}
          >
            February 2026
          </span>
        </div>
      </div>
    </div>
  );
}
