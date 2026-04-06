# AGENTFACTORY DEMO VIDEO CONSTITUTION

**Version**: 1.0 — First Draft  
**Date**: April 7, 2026  
**Status**: Draft for Review  
**Phase**: Discovery Complete → First Specification

---

## PREAMBLE

This constitution establishes the principles, standards, and workflows for creating demo videos that communicate AgentFactory's vision: transitioning from the SaaS era to the AI labor factory era. Every video produced under this constitution must serve the mission of making AgentFactory's paradigm shift clear, compelling, and credible to all audiences.

**Core Mission**: Showcase real case studies of AI employees (Digital FTEs) in action, demonstrating how AgentFactory transforms intent into verified outcomes.

---

## ARTICLE I: CORE PRINCIPLES

### Section 1.1 — Mission Alignment

All videos must advance AgentFactory's core narrative:

> **From**: Software subscriptions and manual execution  
> **To**: Verified, outcome-based AI labor  
> **Key Message**: AI employees that independently procure resources and deliver industrialized results

**Tagline Reference**: "The SaaS era sold subscriptions; the Agent Factory era sells results"

### Section 1.2 — Audience Universality

Videos must serve all stakeholders simultaneously:
- **Enterprise leaders**: Outcome-guaranteed, scalable AI workflows
- **Developers/Tech teams**: Spec-driven architecture, MCP integration
- **Domain professionals**: Transition to agent designer/verification roles
- **Investors/Partners**: Vision of autonomous AI economic participation

**Implementation**: Create modular case study clips that can be combined, recontextualized, and extended for different audience segments.

### Section 1.3 — Spec-Driven Development

All video production follows Spec-Driven Development methodology (mirroring AgentFactory's own philosophy):

1. **Spec First**: Machine-readable JSON spec + Markdown creative brief before any generation
2. **Human Approval**: Specs require stakeholder sign-off before production
3. **Zero-Shot Execution**: Agent generates video from approved spec without intermediate guessing
4. **Validation**: Automated quality checks against constitution standards before delivery

### Section 1.4 — 10-80-10 Video Production Rhythm

Adapted from AgentFactory's operating model:

- **10% Human Intent**: You define video topic, audience, and key message
- **80% Agent Execution**: I generate specs, create videos, validate quality
- **10% Human Verification**: You review, approve, and refine final output

---

## ARTICLE II: VIDEO SPECIFICATION STANDARDS

### Section 2.1 — Hybrid Spec Format

Every video requires TWO documents:

#### A. Machine-Readable JSON Spec (for Remotion generation)

```json
{
  "video": {
    "title": "string",
    "type": "case-study",
    "duration_seconds": 45,
    "aspect_ratio": "16:9",
    "fps": 30,
    "brand": {
      "name": "AgentFactory",
      "colors": {
        "primary": "#1C2833",
        "secondary": "#2E4053",
        "accent": "#AAB7B8",
        "background": "#F4F6F6"
      }
    },
    "scenes": [
      {
        "id": "hook",
        "type": "hook",
        "duration_frames": 90,
        "text": "This AI employee processed 10,000 invoices in 2 hours",
        "visuals": "Terminal-style animation showing invoice processing",
        "transition": "zoom",
        "bg_color": "#1C2833",
        "text_color": "#F4F6F6"
      },
      {
        "id": "problem",
        "type": "problem",
        "duration_frames": 120,
        "text": "Manual invoice processing: 40 hours/week, 15% error rate",
        "visuals": "Split screen: human overwhelmed vs AI efficiency metrics",
        "transition": "wipe",
        "bg_color": "#2E4053",
        "text_color": "#F4F6F6"
      },
      {
        "id": "solution",
        "type": "solution",
        "duration_frames": 180,
        "text": "AgentFactory Digital FTE: Spec → Execute → Verify",
        "visuals": "AgentFactory workflow animation with product screenshots",
        "transition": "morph",
        "bg_color": "#1C2833",
        "text_color": "#F4F6F6"
      },
      {
        "id": "outcome",
        "type": "feature",
        "duration_frames": 150,
        "text": "Result: 95% cost reduction, 99.9% accuracy, 24/7 operation",
        "visuals": "Animated metrics dashboard with outcome data",
        "transition": "clip-path",
        "bg_color": "#2E4053",
        "text_color": "#F4F6F6"
      },
      {
        "id": "cta",
        "type": "cta",
        "duration_frames": 90,
        "text": "Build your Digital FTE at agentfactory.panaversity.org",
        "visuals": "AgentFactory logo + website URL + terminal prompt",
        "transition": "fade",
        "bg_color": "#1C2833",
        "text_color": "#F4F6F6"
      }
    ],
    "voiceover": {
      "enabled": true,
      "script": "string",
      "voice": "Orus",
      "offset_frames": 15
    },
    "captions": [
      {"start": 15, "end": 90, "text": "This AI employee processed 10,000 invoices in 2 hours"},
      {"start": 105, "end": 180, "text": "Manual invoice processing: 40 hours/week, 15% error rate"}
    ]
  }
}
```

#### B. Markdown Creative Brief (for human review)

```markdown
# Video: [Case Study Title]

## Intent
- **Purpose**: Demonstrate [specific AgentFactory capability] through real case study
- **Audience**: [Primary stakeholder segment]
- **Key Message**: One-sentence takeaway

## Case Study Details
- **Digital FTE Role**: [What the AI employee does]
- **Industry/Domain**: [Context]
- **Before**: [Manual process pain points]
- **After**: [AgentFactory outcomes with metrics]

## Creative Direction
- **Vibe**: Professional, technical, outcome-focused
- **Camera Style**: Dynamic terminal-inspired animations + product screenshots
- **Color Palette**: AgentFactory classic tech (navy, slate, silver, off-white)

## Scene Breakdown
1. **Hook (3s)** - Grab attention with outcome metric
2. **Problem (4s)** - Show manual process pain point
3. **Solution (6s)** - AgentFactory workflow in action
4. **Outcome (5s)** - Animated results dashboard
5. **CTA (3s)** - Direct to AgentFactory website

## Success Criteria
- [ ] Hook in first 3 seconds with compelling metric
- [ ] Clear value proposition by 10 seconds
- [ ] Real outcomes shown (not just features)
- [ ] Strong CTA to agentfactory.panaversity.org
```

### Section 2.2 — Spec Approval Workflow

```
1. Agent generates spec (JSON + Markdown)
   ↓
2. Human reviews and approves/revises
   ↓
3. Agent generates video from approved spec
   ↓
4. Automated validation runs
   ↓
5. Human does final visual review
   ↓
6. Video rendered and delivered
```

---

## ARTICLE III: PRODUCTION STANDARDS

### Section 3.1 — Quality Gates

All videos MUST pass these standards:

#### Visual Quality
- ✅ Professional-grade motion graphics (NOT slideshow feel)
- ✅ Smooth spring physics for organic motion
- ✅ Varied timing (2-5s scenes, mixed rhythms)
- ✅ Overlapping transitions (next scene starts before current ends)
- ✅ Layered compositions (background/midground/foreground)
- ✅ Consistent visual language across scenes
- ✅ Terminal-inspired design elements (code-like aesthetics, monospace fonts)

#### Typography
- ✅ One display font + one body font maximum
- ✅ Massive headlines, tight tracking
- ✅ Mix weights for hierarchy
- ✅ Text is SHORT (viewers can't pause)
- ✅ Use monospace fonts for technical elements (JetBrains Mono, Courier)
- ✅ Use clean sans-serif for body text (Inter, Arial)

#### Color Compliance
- ✅ Use AgentFactory classic tech palette:
  - Primary: `#1C2833` (Deep Navy)
  - Secondary: `#2E4053` (Slate Gray)
  - Accent: `#AAB7B8` (Silver)
  - Background: `#F4F6F6` (Off-White)
- ✅ Simple, clean backgrounds preferred
- ✅ High contrast for readability

#### Animation Standards
- ✅ Custom transitions with clipPath, 3D transforms, morphs
- ✅ Spring physics for organic motion
- ✅ Terminal-style animations (typing effects, code reveals)
- ❌ NO fading to black between scenes
- ❌ NO centered text on solid backgrounds
- ❌ NO same transition for everything
- ❌ NO linear/robotic animations
- ❌ NO emoji icons — use Lucide React icons only
- ❌ NO `slideLeft`, `slideRight`, `crossDissolve`, `fadeBlur` presets

### Section 3.2 — Technical Standards

#### Format Requirements
- Primary aspect ratio: **Widescreen (16:9)** for website embeds
- Frame rate: **30 FPS**
- Resolution: **1920x1080** minimum
- Audio: **48kHz, stereo**

#### Voiceover
- Primary: **Gemini TTS** (Orus or Kore voice)
- Fallback: **Text-only/captions** if voiceover not needed
- Audio offset: **0.5s delay** so visuals appear before voice starts
- Volume: **0.9** for voiceover, **0.35** for background music

#### Captions
- Timed captions synced to voiceover
- Position: Bottom center
- Style: White text, semi-transparent dark background with blur
- Adaptive fade: `Math.min(10, Math.floor(duration / 3))`

#### File Structure

```
output/
└── case-study-name/
    ├── spec.json                 # Machine-readable spec
    ├── brief.md                  # Creative brief
    ├── src/
    │   ├── Root.tsx
    │   ├── styles.ts             # Brand colors, fonts, type scale
    │   ├── Video.tsx             # Main composition
    │   └── scenes/               # One file per scene
    ├── public/
    │   ├── images/brand/         # AgentFactory assets
    │   └── audio/
    │       └── voiceover.wav
    └── out/
        └── video.mp4
```

---

## ARTICLE IV: CONTENT FRAMEWORK

### Section 4.1 — Case Study Video Structure

All case study clips follow this proven framework:

#### Standard Framework (30-60s)

1. **Hook (0-3s)**: Compelling outcome metric
   - Example: "This AI processed 10,000 invoices in 2 hours"
   - Visual: Terminal-style animation with large numbers

2. **Problem (3-7s)**: Manual process pain point
   - Example: "Humans: 40 hours/week, 15% error rate"
   - Visual: Split screen or comparison

3. **Solution (7-13s)**: AgentFactory workflow
   - Example: "Digital FTE: Spec → Execute → Verify"
   - Visual: Product screenshots + workflow animation

4. **Outcome (13-18s)**: Measurable results
   - Example: "95% cost reduction, 99.9% accuracy"
   - Visual: Animated metrics dashboard

5. **CTA (18-21s)**: Clear next step
   - Example: "Build your Digital FTE at agentfactory.panaversity.org"
   - Visual: Logo + URL + terminal prompt

### Section 4.2 — Case Study Topics

Priority case studies for AgentFactory:

1. **Invoice Processing FTE** - Accounts payable automation
2. **Customer Support FTE** - 24/7 intelligent support
3. **Data Analysis FTE** - Research and insight generation
4. **Code Review FTE** - Software quality assurance
5. **Content Creation FTE** - Marketing and documentation

Each case study demonstrates:
- **Role**: What the Digital FTE does
- **Spec**: How humans define intent
- **Execution**: How AI employees work autonomously
- **Verification**: How humans validate outcomes
- **Outcome**: Measurable results (cost, time, accuracy)

### Section 4.3 — Narrative Principles

- **Show, don't tell**: Demonstrate AI employees in action with real metrics
- **Human-centric**: Keep humans in supervisory/verification roles visible
- **Outcome-focused**: Emphasize results, not just process
- **Credible**: No exaggeration, all claims verifiable
- **Panaversity Style**: Match existing Panaversity demo video quality and approach

---

## ARTICLE V: WORKFLOW & GOVERNANCE

### Section 5.1 — Production Workflow

```
1. Case Study Selection
   ↓
2. Brand Data Scrape (Firecrawl on agentfactory.panaversity.org)
   ↓
3. Spec Generation (JSON + Markdown)
   ↓
4. Human Review & Approval
   ↓
5. Video Generation (Remotion)
   ↓
6. Automated Validation
   ↓
7. Human Visual Review
   ↓
8. Revisions (if needed)
   ↓
9. Final Render
   ↓
10. Delivery
```

**Parallel Production**: Multiple case study videos can be in different stages simultaneously with shared brand assets.

### Section 5.2 — Automated Validation Checklist

Before any video reaches human review, agent MUST verify:

```markdown
## Quality Tests

- [ ] **Mute test**: Story follows visually without sound
- [ ] **Squint test**: Hierarchy visible when squinting
- [ ] **Timing test**: Motion feels natural, not robotic
- [ ] **Consistency test**: Similar elements behave similarly
- [ ] **Slideshow test**: Does NOT look like PowerPoint
- [ ] **Brand test**: Uses AgentFactory colors (#1C2833, #2E4053, #AAB7B8, #F4F6F6) exactly
- [ ] **Hook test**: First 3 seconds grab attention with compelling metric
- [ ] **Zero errors**: No rendering errors or broken animations
- [ ] **Caption sync**: All captions timed correctly to voiceover
- [ ] **Aspect ratio**: Properly formatted for 16:9
- [ ] **Outcome visible**: Clear metrics/results shown in video
```

### Section 5.3 — Human-in-the-Loop Approval

1. **Spec Approval**: Human approves creative direction before production
2. **Draft Review**: Agent generates draft, human provides feedback
3. **Revision Cycles**: Agent edits source files, Remotion hot-reloads
4. **Final Approval**: Human signs off before render
5. **Render Command**: Only renders when human explicitly requests export

---

## ARTICLE VI: BRAND COMPLIANCE

### Section 6.1 — AgentFactory Brand Assets

All videos MUST use official AgentFactory brand identity:

- **Colors**: Classic Tech Palette
  - Primary: `#1C2833` (Deep Navy)
  - Secondary: `#2E4053` (Slate Gray)
  - Accent: `#AAB7B8` (Silver)
  - Background: `#F4F6F6` (Off-White)

- **Typography**:
  - Display: Monospace for technical elements (JetBrains Mono, Courier New)
  - Body: Clean sans-serif (Inter, Arial)

- **Visual Style**:
  - Terminal-inspired design elements
  - Code-like aesthetics
  - Professional, technical, enterprise-ready

- **Taglines**:
  - Primary: "AI-First Future — BUILD & MONETIZE DIGITAL FTEs"
  - Supporting: "The SaaS era sold subscriptions; the Agent Factory era sells results"

### Section 6.2 — Brand Scraping Protocol

Before designing any video featuring AgentFactory:

1. Run Firecrawl scrape on `https://agentfactory.panaversity.org`
2. Extract: brandName, tagline, colors, logo, screenshots, copy
3. Download assets to `public/images/brand/`
4. Use scraped data to inform visual design
5. Verify colors match classic tech palette

---

## ARTICLE VII: GUARDRAILS & CONSTRAINTS

### Section 7.1 — Mandatory Guardrails

All videos MUST:

- ✅ Use AgentFactory brand colors exclusively (no unauthorized design elements)
- ✅ Maintain factual accuracy (no exaggeration or made-up features)
- ✅ Follow Remotion best practices (proper motion, no slideshow patterns)
- ✅ Pass all automated quality checks before delivery
- ✅ Include AgentFactory branding (logo or tagline visible)
- ✅ Be optimized for website embedding (16:9 widescreen)
- ✅ Hook viewer in first 3 seconds with compelling metric
- ✅ Show clear outcomes, not just features
- ✅ Use terminal-inspired design aesthetics

### Section 7.2 — Prohibited Patterns

All videos MUST NOT:

- ❌ Use emoji icons (use Lucide React icons only)
- ❌ Use colors outside the classic tech palette
- ❌ Look like PowerPoint/slideshow
- ❌ Have centered text on solid backgrounds
- ❌ Use same transition for every scene change
- ❌ Have linear/robotic animations
- ❌ Make unverified claims about capabilities
- ❌ Deviate from brand guidelines
- ❌ Use `slideLeft`, `slideRight`, `crossDissolve`, `fadeBlur` presets
- ❌ Overpromise on AI capabilities

---

## ARTICLE VIII: SKILL UTILIZATION

### Section 8.1 — Core Skills

| Skill | Purpose | When Used |
|-------|---------|-----------|
| **remotion** | Video generation engine | All video production |
| **theme-factory** | Visual styling consistency | Brand application |
| **interview** | Client discovery & requirements | Initial briefing, clarification |
| **skill-creator** | Creating new skills if needed | Extending capabilities |

### Section 8.2 — Skill Invocation Rules

- **remotion**: Always active for video generation tasks
- **theme-factory**: Apply when styling artifacts or choosing visual direction
- **interview**: Use when requirements are unclear or creative direction needed
- **skill-creator**: Only when new capabilities need to be built (rare)

---

## ARTICLE IX: ITERATION & IMPROVEMENT

### Section 9.1 — Feedback Loop

1. Collect feedback on each delivered video
2. Identify patterns in requested changes
3. Update specs, templates, or workflows accordingly
4. Document learnings in project memory
5. Continuously improve quality and efficiency

### Section 9.2 — Version Control

- All video specs versioned in git
- Source files tracked in repository
- Rendered outputs in `output/` directory (gitignored)
- Major versions tagged (v1.0, v1.1, etc.)

---

## ARTICLE X: SUCCESS METRICS

### Section 10.1 — Video Quality Metrics

- **Professional Grade**: Broadcast-quality motion graphics with terminal aesthetics
- **Website Optimized**: 16:9 widescreen, embedded cleanly on AgentFactory site
- **Brand Consistent**: Exact match to AgentFactory classic tech palette
- **Outcome-Focused**: Clear metrics and results demonstrated
- **Technically Sound**: Zero errors, smooth playback, proper sync

### Section 10.2 — Impact Metrics (Post-Delivery)

- Viewer engagement (watch time, completion rate)
- Clarity of message (audience comprehension)
- Brand alignment (stakeholder approval)
- Production efficiency (time from spec to delivery)
- Conversion rate (clicks to agentfactory.panaversity.org)

---

## AMENDMENT PROCESS

This constitution may be amended when:

1. New video types or formats emerge
2. Brand guidelines change
3. Workflow improvements are identified
4. Stakeholder requirements evolve

**Amendment requires**: Human approval + documentation of change reason.

---

## RATIFICATION

This constitution takes effect upon approval by project stakeholders. All video production under AgentFactory demo video project must comply with these principles and standards.

---

**Drafted by**: AgentFactory Video Constitution Working Group  
**Review Status**: First Draft — Pending stakeholder review  
**Next Steps**: Review constitution, provide feedback, iterate to v1.1
