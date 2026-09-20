export const learningCurriculum = {
  // ── Resource 1: SQL for Product Decisions ──────────────────────────────────
  1: {
    modules: [
      {
        id: 1,
        title: "Module 1: Query Fundamentals & Aggregate Functions",
        duration: "35m",
        summary: "Master SELECT, WHERE, GROUP BY, and COUNT/SUM/AVG for computing business KPIs. Taught through a real e-commerce sales dataset.",
      },
      {
        id: 2,
        title: "Module 2: Joining User Tables with Event Logs",
        duration: "45m",
        summary: "INNER vs LEFT joins on user IDs, signup funnels, and session engagement tables. Avoid duplicate rows with join deduplication patterns.",
      },
      {
        id: 3,
        title: "Module 3: Cohort Analysis & Retention Windows",
        duration: "50m",
        summary: "Compute rolling 7-day and 30-day retention curves using window functions (OVER / PARTITION BY). See real Mixpanel-equivalent outputs from raw SQL.",
      },
      {
        id: 4,
        title: "Module 4: A/B Testing & Conversion Lift Queries",
        duration: "30m",
        summary: "Query control vs variant metrics to calculate statistical significance and p-values. Structure dashboards with CTEs (WITH clauses) for readability.",
      },
    ],
    takeaways: [
      "Translating product hypotheses into deterministic SQL queries",
      "Avoiding duplicate rows and join explosion on multi-touch events",
      "Using CTEs to structure readable analytical dashboards",
      "Window functions for rolling retention and ranking",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=7S_tz1z_5bA",
  },

  // ── Resource 2: Write an ATS-ready Resume ──────────────────────────────────
  2: {
    modules: [
      {
        id: 1,
        title: "Module 1: How ATS Systems Parse & Score Resumes",
        duration: "15m",
        summary: "Understand keyword weighting, plain-text parsing, and what makes a resume invisible to automated filters. See exactly how Workday and Greenhouse rank candidates.",
      },
      {
        id: 2,
        title: "Module 2: The XYZ Bullet Point Formula",
        duration: "20m",
        summary: "Accomplished [X], as measured by [Y], by doing [Z]. Before-and-after examples transforming weak bullets into quantified, recruiter-magnetic entries.",
      },
      {
        id: 3,
        title: "Module 3: Skills Architecture & Keyword Targeting",
        duration: "20m",
        summary: "Categorize languages, frameworks, and tools to precisely match the role's keywords. Tailor your resume in under 10 minutes per application.",
      },
    ],
    takeaways: [
      "Replacing passive descriptions with active metrics and verifiable results",
      "Eliminating graphic templates and tables that break automated parsers",
      "Tailoring every resume to the job description in under 10 minutes",
      "Formatting rules: font, margins, file type, and header safety zones",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=Tt08KmFfIYQ",
  },

  // ── Resource 3: Interview Stories that Stick ──────────────────────────────
  3: {
    modules: [
      {
        id: 1,
        title: "Module 1: The STAR Framework Anatomy",
        duration: "20m",
        summary: "Situation, Task, Action, and Result—structuring behavioral responses under 2 minutes without rambling. Live examples for CS/BBA/design roles.",
      },
      {
        id: 2,
        title: "Module 2: Navigating Failure & Conflict Scenarios",
        duration: "30m",
        summary: "Answering 'Tell me about a failure' and 'Conflict with a teammate' questions. Learn to frame setbacks as growth loops that interviewers actually love.",
      },
      {
        id: 3,
        title: "Module 3: Mock Behavioral Q&A Walkthrough",
        duration: "30m",
        summary: "Full deconstruction of the top 10 behavioral questions from Google, Amazon, and FAANG. Identify 'I' vs 'we' mistakes and quantify your personal impact.",
      },
    ],
    takeaways: [
      "Keeping behavioral answers under 2 minutes without rambling",
      "Emphasizing personal contribution over vague team references",
      "Framing setbacks as actionable learning loops that show growth",
      "Building a 5-story bank that covers 90% of behavioral questions",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=0Z9RW_hhUT4",
  },

  // ── Resource 4: Product Analytics Field Guide (PDF) ──────────────────────
  4: {
    modules: [
      {
        id: 1,
        title: "Chapter 1: North Star Metric & Metric Trees",
        duration: "10m",
        summary: "Breaking top-level objectives down into input/output leading indicators. Real NSMs from Uber, Spotify, and Slack dissected.",
      },
      {
        id: 2,
        title: "Chapter 2: User Lifecycle — Acquisition, Activation, Churn",
        duration: "15m",
        summary: "Defining the critical 'Aha!' moment and measuring weekly active core users. DAU/MAU stickiness ratio and what 25%+ means.",
      },
      {
        id: 3,
        title: "Chapter 3: Funnel Optimization & Drop-off Diagnostics",
        duration: "20m",
        summary: "Pinpointing leaks in onboarding flows and payment checkout funnels using cohort segmentation and heatmap overlays.",
      },
    ],
    takeaways: [
      "Formulas for CAC, LTV, Retention Rate, and DAU/MAU Stickiness",
      "Diagnostic checklist when key metrics drop unexpectedly",
      "PM interview cheatsheet: framework for any metrics question",
      "How to set leading indicators before a product launch",
    ],
    resourceType: "pdf",
    downloadFileName: "product-analytics-field-guide.pdf",
    externalUrl: "https://mixpanel.com/blog/product-metrics/",
  },

  // ── Resource 5: React Patterns for Real Teams ─────────────────────────────
  5: {
    modules: [
      {
        id: 1,
        title: "Module 1: Component Composition & Compound Components",
        duration: "45m",
        summary: "Building flexible, reusable UI components using React composition and Context. Avoid prop-drilling with clean compound-component APIs.",
      },
      {
        id: 2,
        title: "Module 2: Server State vs Client State (Cache-First Patterns)",
        duration: "55m",
        summary: "Separating network cache from UI state with React Query patterns to eliminate unnecessary re-renders and stale data bugs.",
      },
      {
        id: 3,
        title: "Module 3: Custom Hooks for Production Codebases",
        duration: "50m",
        summary: "Abstracting business logic, async lifecycles, and event listeners into testable, reusable custom hooks.",
      },
      {
        id: 4,
        title: "Module 4: Performance Profiling & Memoization Traps",
        duration: "40m",
        summary: "Using React DevTools Profiler to detect expensive renders. Know exactly when NOT to use useMemo and useCallback.",
      },
    ],
    takeaways: [
      "Writing resilient React components that junior & senior devs can maintain",
      "Correct usage of useMemo, useCallback, and React 19 Actions",
      "Organizing folders and design tokens for large-scale apps",
      "useTransition and useDeferredValue for smooth UX under load",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=TNhaISOUy6Q",
  },

  // ── Resource 6: Negotiating Your First Offer ──────────────────────────────
  6: {
    modules: [
      {
        id: 1,
        title: "Module 1: Decoding Total Compensation Packages",
        duration: "10m",
        summary: "Base salary, allowances, medical benefits, equity/RSUs, signing bonuses, and remote stipends—how to evaluate the full picture.",
      },
      {
        id: 2,
        title: "Module 2: Researching Market Rates (Bangladesh & Remote)",
        duration: "10m",
        summary: "Using Levels.fyi, Glassdoor, and LinkedIn Salary to benchmark entry-level developer and designer ranges in your exact market.",
      },
      {
        id: 3,
        title: "Module 3: Scripting the Counteroffer Conversation",
        duration: "15m",
        summary: "Word-for-word scripts to respectfully push back without risking the offer. Practice the pause, the data-driven ask, and the graceful close.",
      },
    ],
    takeaways: [
      "How to evaluate whether an offer aligns with your real market value",
      "Knowing what is negotiable: signing bonus, remote days, learning budget",
      "Never stating a number first—and what to say when pushed",
      "Getting everything confirmed in writing before you commit",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=u9BoG1n1948",
  },

  // ── Resource 7: System Design Interview Crash Course ─────────────────────
  7: {
    modules: [
      {
        id: 1,
        title: "Module 1: Scalability Fundamentals — Load Balancers & CDNs",
        duration: "25m",
        summary: "Horizontal vs vertical scaling, how load balancers distribute traffic, and CDN caching strategies for global latency reduction.",
      },
      {
        id: 2,
        title: "Module 2: Database Design — SQL vs NoSQL & Sharding",
        duration: "25m",
        summary: "When to use relational vs document/columnar databases. Sharding strategies, replication, and the CAP theorem explained with real trade-offs.",
      },
      {
        id: 3,
        title: "Module 3: Designing Real Systems (URL Shortener & Twitter Feed)",
        duration: "40m",
        summary: "Walk through designing Bit.ly and a Twitter-like newsfeed from scratch. Apply all concepts: queuing, cache invalidation, read/write ratios.",
      },
    ],
    takeaways: [
      "A repeatable 6-step framework for any system design interview",
      "Trade-offs between consistency, availability, and partition tolerance",
      "Estimating QPS, storage, and bandwidth before choosing architecture",
      "Common patterns: fan-out, pub/sub, event sourcing, CQRS",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=i7twT3x5yv8",
  },

  // ── Resource 8: Git & GitHub Workflows for Teams ──────────────────────────
  8: {
    modules: [
      {
        id: 1,
        title: "Module 1: Core Git Concepts — Commits, Branches & Merging",
        duration: "20m",
        summary: "Understand the DAG model of Git history. Branch for features, merge cleanly, and understand fast-forward vs 3-way merges.",
      },
      {
        id: 2,
        title: "Module 2: Gitflow vs Trunk-Based Development",
        duration: "20m",
        summary: "Compare the two dominant team branching strategies. Learn when each is appropriate for startup vs enterprise codebases.",
      },
      {
        id: 3,
        title: "Module 3: Pull Requests, Code Reviews & CI/CD Hooks",
        duration: "20m",
        summary: "Writing great PR descriptions, reviewing code constructively, and setting up GitHub Actions to run tests automatically on every push.",
      },
    ],
    takeaways: [
      "Never lose work again: stash, cherry-pick, and reflog recovery",
      "Write commit messages that make git log actually useful",
      "Rebase interactively to squash and clean up your branch history",
      "Set up branch protection and required reviews like a pro team",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=RGOj5yH7evk",
  },

  // ── Resource 9: Data Structures & Algorithms Roadmap ─────────────────────
  9: {
    modules: [
      {
        id: 1,
        title: "Module 1: Arrays, Hashmaps & Two-Pointer Patterns",
        duration: "35m",
        summary: "The most common interview pattern: sliding window, two pointers, prefix sums. Solve 80% of easy/medium LeetCode with these alone.",
      },
      {
        id: 2,
        title: "Module 2: Trees, Graphs & BFS/DFS",
        duration: "45m",
        summary: "Binary trees, BSTs, and graph traversal. Identify when to use BFS (shortest path) vs DFS (connected components, cycle detection).",
      },
      {
        id: 3,
        title: "Module 3: Dynamic Programming from First Principles",
        duration: "40m",
        summary: "Top-down memoization vs bottom-up tabulation. Recognize DP patterns: knapsack, longest subsequence, coin change. Build intuition, not memorization.",
      },
    ],
    takeaways: [
      "Recognizing the 14 core LeetCode patterns that cover 90% of interviews",
      "Time & space complexity analysis without guessing",
      "A 3-month structured practice roadmap from blind 75 to Neetcode 150",
      "Interview communication: thinking out loud while you solve",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=pkYVOmU3MgA",
  },

  // ── Resource 10: LinkedIn Profile Optimization Guide ─────────────────────
  10: {
    modules: [
      {
        id: 1,
        title: "Module 1: The All-Star Profile Checklist",
        duration: "10m",
        summary: "LinkedIn's algorithm rewards completeness. Hit All-Star status by filling every section—photo, headline, summary, skills, and recommendations.",
      },
      {
        id: 2,
        title: "Module 2: Keyword Placement for Recruiter Search",
        duration: "10m",
        summary: "Where recruiters actually look: headline, job titles, and the first 3 lines of your About section. Strategic keyword density without stuffing.",
      },
      {
        id: 3,
        title: "Module 3: Connection Strategy & Content Playbook",
        duration: "10m",
        summary: "How to grow your network to 500+ in 30 days. What to post, when to engage, and how to turn profile views into DM conversations.",
      },
    ],
    takeaways: [
      "Writing a headline that gets 3x more profile views from recruiters",
      "Requesting recommendations that make your profile stand out",
      "Turning LinkedIn into an inbound lead channel for job opportunities",
      "The 'Open to Work' setting strategy—visible to recruiters only",
    ],
    resourceType: "article",
    externalUrl: "https://www.linkedin.com/business/talent/blog/talent-acquisition/tips-for-taking-control-of-your-linkedin-profile",
  },

  // ── Resource 11: Product Management Fundamentals ──────────────────────────
  11: {
    modules: [
      {
        id: 1,
        title: "Module 1: Discovery — User Interviews & Jobs-to-be-Done",
        duration: "25m",
        summary: "Run user interviews that reveal real pain, not what users say they want. Apply JTBD framework to uncover the underlying motivation.",
      },
      {
        id: 2,
        title: "Module 2: Prioritization — RICE, MoSCoW & Opportunity Scoring",
        duration: "25m",
        summary: "Compare RICE (Reach, Impact, Confidence, Effort) vs MoSCoW vs ICE. Build a prioritization scorecard your stakeholders trust.",
      },
      {
        id: 3,
        title: "Module 3: Roadmap & Stakeholder Communication",
        duration: "25m",
        summary: "Building outcome-based roadmaps (not feature lists). Communicating trade-offs to engineering, design, and business stakeholders clearly.",
      },
    ],
    takeaways: [
      "The 5 product questions every APM interview will test you on",
      "How to say no to a feature request professionally and constructively",
      "Writing PRDs that engineers actually want to read",
      "Metrics-first thinking: define success before you build",
    ],
    resourceType: "video",
    externalUrl: "https://www.youtube.com/watch?v=MBzJOT5ZoN0",
  },

  // ── Resource 12: Freelancing & Remote Work Starter Kit ────────────────────
  12: {
    modules: [
      {
        id: 1,
        title: "Module 1: Setting Up Your Fiverr & Upwork Profile",
        duration: "15m",
        summary: "Profile photo, service descriptions, and niche positioning. Why being a specialist beats being a generalist on freelance platforms.",
      },
      {
        id: 2,
        title: "Module 2: Writing Proposals that Win Jobs",
        duration: "15m",
        summary: "The anatomy of a winning proposal: open with the client's problem (not your credentials), show you understand, and make a specific offer.",
      },
      {
        id: 3,
        title: "Module 3: Pricing, Delivery & 5-Star Reviews",
        duration: "10m",
        summary: "Hourly vs fixed pricing, scope creep protection, client communication rhythm, and what to say at the end of a project to earn a top review.",
      },
    ],
    takeaways: [
      "Finding your first client within 2 weeks using these proven strategies",
      "Pricing confidently: value-based pricing vs race-to-the-bottom hourly",
      "Protecting yourself from scope creep with clear contracts and milestones",
      "Building a 5-star reputation that snowballs into passive leads",
    ],
    resourceType: "article",
    externalUrl: "https://blog.hubspot.com/marketing/how-to-start-freelancing",
  },
};
