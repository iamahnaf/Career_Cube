-- ============================================================
-- CareerCube: Real Learning Resources Seed
-- Updates existing 6 resources with real YouTube/blog URLs
-- Inserts 6 additional high-quality resources
-- ============================================================

USE careerforge;

-- ── Update existing 6 resources with real, working URLs ──────────────────────

UPDATE learning_resources SET
  resource_url       = 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
  description        = 'Master SQL queries used daily by data analysts and PMs at top tech companies. Covers aggregate functions, window functions, cohort retention, and A/B test analysis—taught through real product scenarios.',
  thumbnail_url      = 'https://i.ytimg.com/vi/7S_tz1z_5bA/hqdefault.jpg',
  estimated_minutes  = 160,
  featured           = 1
WHERE id = 1;

UPDATE learning_resources SET
  resource_url       = 'https://www.youtube.com/watch?v=Tt08KmFfIYQ',
  description        = 'Learn exactly how Applicant Tracking Systems score and rank resumes. Discover the XYZ bullet point formula, keyword targeting strategy, and formatting rules that get you past automated filters.',
  thumbnail_url      = 'https://i.ytimg.com/vi/Tt08KmFfIYQ/hqdefault.jpg',
  estimated_minutes  = 55,
  featured           = 1
WHERE id = 2;

UPDATE learning_resources SET
  resource_url       = 'https://www.youtube.com/watch?v=0Z9RW_hhUT4',
  description        = 'Craft behavioral interview answers that land offers at top tech companies. Master the STAR framework, handle failure and conflict questions, and learn to keep answers under 2 minutes with maximum impact.',
  thumbnail_url      = 'https://i.ytimg.com/vi/0Z9RW_hhUT4/hqdefault.jpg',
  estimated_minutes  = 80,
  featured           = 0
WHERE id = 3;

UPDATE learning_resources SET
  resource_url       = 'https://mixpanel.com/blog/product-metrics/',
  description        = 'A definitive reference guide covering North Star metrics, DAU/MAU stickiness, CAC, LTV, funnel drop-off diagnostics, and retention curves. Formatted as a downloadable cheatsheet for PM interviews.',
  thumbnail_url      = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
  estimated_minutes  = 45,
  featured           = 0
WHERE id = 4;

UPDATE learning_resources SET
  resource_url       = 'https://www.youtube.com/watch?v=TNhaISOUy6Q',
  description        = 'Go beyond beginner React and learn production-grade patterns. Covers compound components, custom hooks, server vs client state, useMemo/useCallback tradeoffs, and profiling with React DevTools.',
  thumbnail_url      = 'https://i.ytimg.com/vi/TNhaISOUy6Q/hqdefault.jpg',
  estimated_minutes  = 190,
  featured           = 1
WHERE id = 5;

UPDATE learning_resources SET
  resource_url       = 'https://www.youtube.com/watch?v=u9BoG1n1948',
  description        = 'Negotiate your first tech offer with confidence. Learn how to decode total compensation packages, research market rates on Levels.fyi, and script a professional counteroffer conversation.',
  thumbnail_url      = 'https://i.ytimg.com/vi/u9BoG1n1948/hqdefault.jpg',
  estimated_minutes  = 35,
  featured           = 0
WHERE id = 6;

-- ── Insert 6 additional high-quality resources ────────────────────────────────

INSERT INTO learning_resources
  (title, description, category, difficulty, resource_type, resource_url, thumbnail_url, estimated_minutes, featured, status)
VALUES
(
  'System Design Interview Crash Course',
  'Demystify system design interviews with step-by-step walkthroughs of designing URL shorteners, Twitter feeds, and WhatsApp at scale. Covers load balancers, caching, databases, and CAP theorem.',
  'Engineering',
  'Advanced',
  'video',
  'https://www.youtube.com/watch?v=i7twT3x5yv8',
  'https://i.ytimg.com/vi/i7twT3x5yv8/hqdefault.jpg',
  90,
  1,
  'published'
),
(
  'Git & GitHub Workflows for Teams',
  'Master branching strategies (Gitflow, trunk-based), pull request reviews, rebase vs merge, and CI/CD integration. Essential for any developer joining a professional engineering team.',
  'Development',
  'Beginner',
  'video',
  'https://www.youtube.com/watch?v=RGOj5yH7evk',
  'https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg',
  60,
  0,
  'published'
),
(
  'Data Structures & Algorithms Roadmap',
  'A curated path through the most interview-critical DSA topics: arrays, hashmaps, two-pointers, sliding window, trees, graphs, and dynamic programming—with LeetCode pattern recognition.',
  'Data & Analytics',
  'Intermediate',
  'video',
  'https://www.youtube.com/watch?v=pkYVOmU3MgA',
  'https://i.ytimg.com/vi/pkYVOmU3MgA/hqdefault.jpg',
  120,
  1,
  'published'
),
(
  'LinkedIn Profile Optimization Guide',
  'Transform your LinkedIn from invisible to interview-generating. Learn the All-Star profile checklist, keyword placement for recruiter search, connection strategy, and how to write a headline that converts.',
  'Career Toolkit',
  'Beginner',
  'article',
  'https://www.linkedin.com/business/talent/blog/talent-acquisition/tips-for-taking-control-of-your-linkedin-profile',
  'https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=400&h=225&fit=crop',
  30,
  0,
  'published'
),
(
  'Product Management Fundamentals',
  'Learn how PMs think: discovery frameworks (JTBD, user interviews), prioritization (RICE, MoSCoW), roadmap communication, and stakeholder alignment. Perfect for aspiring APMs and business graduates.',
  'Product',
  'Intermediate',
  'video',
  'https://www.youtube.com/watch?v=MBzJOT5ZoN0',
  'https://i.ytimg.com/vi/MBzJOT5ZoN0/hqdefault.jpg',
  75,
  0,
  'published'
),
(
  'Freelancing & Remote Work Starter Kit',
  'Start earning online as a developer or designer. Covers setting up Fiverr/Upwork profiles, writing winning proposals, pricing your skills competitively, and delivering projects that earn 5-star reviews.',
  'Career Toolkit',
  'Beginner',
  'article',
  'https://blog.hubspot.com/marketing/how-to-start-freelancing',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop',
  40,
  0,
  'published'
);
