# Stage 3.2: Framework Modification Proposals
## Learning Value Architecture — Detailed Modification Recommendations

**LVA Research Initiative | Comprehensive Framework Development**
**Date:** March 14, 2026
**Research Phase:** Stage 3.2 (Framework Modification Proposals)
**Evidence Base:** Phases 1–2 findings (Stages 1.4–2.2)

---

## INTRODUCTION

This report presents six detailed framework modification proposals derived from Phase 1 (Behavior Change Integration, Collective Learning) and Phase 2 (Expert Critique, MECE Stress Testing) research. Each proposal addresses a documented gap or limitation in the current LVA architecture while considering implications for MECE integrity, implementation feasibility, and diagnostic utility.

The six proposals are:
1. **Affect/Belonging Integration** — Expand Engagement dimension to explicitly include automatic motivation, belonging, and self-efficacy
2. **Opportunity Dimension or Overlay** — Address the missing environmental/systemic construct from COM-B
3. **Collective/Multi-Level Extension** — Extend LVA from individual to team and organizational levels
4. **Multi-Level Diagnostic Model** — Allow learners to have different capability levels across knowledge types and contexts
5. **BCW Intervention Overlay** — Systematically map Behavior Change Wheel functions to level transitions
6. **AI Augmentation Framework** — Assess capability with and without AI augmentation; track AI dependency

For each proposal: problem statement, detailed modification, evidence base, MECE impact analysis, implementation requirements, risks/downsides, and final recommendation (Accept, Modify, Defer, Reject).

---

## PROPOSAL 1: AFFECT/BELONGING INTEGRATION

### Problem Statement

**The LVA's Engagement dimension emphasizes reflective motivation but underspecifies automatic motivation, belonging, and self-efficacy.**

The current Engagement levels (Absent → Disoriented → Compliant → Strategic → Committed → Aligned) map well onto the Self-Determination Theory (SDT) continuum of motivation regulation, which focuses on the *type* of reflective motivation. However, Stage 1.4 (Behavior Change Report) and Stage 2.1 (Expert 1: SDT Researcher) identify three critical gaps:

1. **Automatic motivation is invisible.** COM-B distinguishes reflective motivation (conscious planning) from automatic motivation (emotional associations, habits, impulses). A learner can be at L4 (Strategic, consciously planned) without the automatic triggers that sustain behavior. Habit formation research (Lally et al., 2009) shows new behaviors require 60–90 days to become automatic; the LVA diagnoses the *intention* to act but not the *automaticity* of action.

2. **Belonging and relatedness are underspecified.** SDT research identifies three basic psychological needs: autonomy, competence, and relatedness. The LVA's Engagement dimension captures autonomy (L1–L4 move from external to internal locus) and partially captures competence effects (L2 "Disoriented" may indicate clarity/competence gaps). But relatedness — belonging to a valued community, peer connection, social validation — is not diagnostically distinguished. An isolated learner with excellent intrinsic motivation (L6) may still fail to apply learning without community support.

3. **Self-efficacy is a mechanism, not just a level.** A learner's progression from L3 (Compliant) to L4 (Strategic) may be blocked not by low motivation but by low perceived self-efficacy ("I don't think I can do this, even though I see why I should"). The LVA notes motivation but doesn't diagnose the confidence/efficacy component.

**Diagnostic consequence:** The LVA can label a learner as "L4 Strategic" but provides no mechanism to identify whether they're stuck due to (a) low autonomy satisfaction, (b) low competence/confidence, or (c) low relatedness/belonging. This obscures the prescriptive pathway.

### Proposed Modification

**Option A: Expand Engagement to a 2D Reflective × Automatic Grid**

Create a matrix where:
- **Rows:** Reflective motivation (current LVA L1–L6: Absent → Aligned)
- **Columns:** Automatic motivation strength (Low → High)

This produces a 6×3 matrix (18 cells). Each cell represents a distinct diagnostic state:

| Reflective | Low Auto | Moderate Auto | High Auto |
|-----------|----------|---------------|-----------|
| L1 Absent | No motivation at all | Rare: some emotional trigger but no consciousness | (Minimal) |
| L2 Disoriented | Motivated but lost; no habit | Familiar routine but unclear why | (Increasingly rare) |
| L3 Compliant | External reward needed each time | Habitual compliance; feels automatic | High habitual compliance |
| L4 Strategic | Conscious planning required; feels effortful | Mostly automatic; occasional reflection | Fully automatic; internal alignment |
| L5 Committed | Deliberate integration; high effort | Strong habit; identity resonant | Identity-integrated habit |
| L6 Aligned | (Rare—would be L5) | Deeply habitual; identity-merged | Fully automatic identity behavior |

**Diagnostic value:**
- **L4-Low Auto → L4-High Auto:** Shows "intention without automaticity"—common barrier post-training. Intervention: habit-building strategies (environmental cues, reward pairing, repetition).
- **L3-High Auto → L4-Low Auto:** Shows "compliant habit without understanding"—automaticity without agency. Intervention: principles-based reflection.
- **L5-Moderate Auto → L5-High Auto:** Shows "committed but still effortful"—identity alignment without fluency. Intervention: continued practice in varied contexts.

**Modification to Engagement levels:**

Add a **Belonging/Self-Efficacy sub-assessment** beneath the reflective-automatic grid:

For any learner at L1–L4, assess:
1. **Autonomy satisfaction:** (Scale 1–5) "Do you feel you have choice in pursuing this learning?"
2. **Competence/Self-efficacy:** (Scale 1–5) "Do you believe you're capable of reaching the next level?"
3. **Relatedness/Belonging:** (Scale 1–5) "Do you feel part of a community pursuing this learning?"

This creates a "need satisfaction profile" that explains *why* a learner is stuck. If a learner is L3 with low autonomy but high competence and relatedness, the intervention differs from one with low competence but high autonomy and relatedness.

### Evidence Base

**Automatic Motivation:**
- Michie, S., & Atkins, L. (2019). *The Behaviour Change Wheel*. ISBN 978-0203122631. Distinguishes reflective vs. automatic motivation; empirically supports 60–90 day automaticity window.
- Lally, P., van Jaarsveld, C. H., Potts, H. W., & Wardle, J. (2009). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology*, 40(6), 998–1009. Key mechanism: repetition in consistent context produces automaticity.

**Belonging and Relatedness:**
- Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. *Psychological Inquiry*, 11(4), 227–268. Establishes relatedness as a basic psychological need.
- Baumeister, R. F., & Leary, M. R. (1995). The need to belong: Desire for interpersonal attachments as a fundamental human motivation. *Psychological Bulletin*, 117(3), 497–529. Meta-analytic evidence for belonging as foundational.
- Stage 2.1, Expert 1 (Dr. Anya Kaplan, SDT): "The LVA largely ignores automatic motivation—emotional associations, habit loops, affective resonance, and the role of emotions in sustaining behavior."

**Self-Efficacy:**
- Bandura, A. (1997). *Self-efficacy: The exercise of control*. Freeman. Self-efficacy is a distinct construct from motivation; low efficacy blocks intentional action.
- Stage 2.1, Expert 1: The transition from L3 (Compliant) to L4 (Strategic) "requires a specific process: the learner must experience the goal as *volitionally endorsed*...and *congruent with other self-aspects*. Value recognition is identified; identity congruence is integrated."

### MECE Impact Analysis

**Dimensions remain mutually exclusive if:**
- Engagement assesses the learner's motivational state and supporting conditions
- Capability assesses what the learner can do
- Portability assesses whether learning is transferable/articulated

**Potential MECE violation:**
Adding automatic motivation and need satisfaction to Engagement risks creating overlap with Capability (self-efficacy relates to "can I do this?" which is capability-adjacent) and with Portability (community/relatedness relates to whether learning is embedded in social practice).

**Mitigation:**
- **Self-efficacy** is explicitly *belief about capability*, not capability itself. A learner can have high actual capability (L5) but low self-efficacy, resulting in non-deployment. The diagnostic distinguishes belief from fact.
- **Belonging/community** is a *condition* supporting engagement, not a capability outcome. It explains why motivation is present or absent; it doesn't assess what the learner can do.
- **Automatic motivation** is clearly distinct from both Capability and Portability; it assesses the *automaticity* of behavior, which is a property of Engagement, not knowledge structures.

**Recommendation:** MECE integrity is preserved if Engagement sub-layers are framed as *mechanisms explaining engagement level*, not alternative engagement levels. The three dimensions remain orthogonal.

### Implementation Requirements

1. **Assessment instruments (New):**
   - Reflective-Automatic motivation grid (2–3 questions per cell or branching logic)
   - Need satisfaction profile (3 items: autonomy, competence, relatedness; 5-point Likert scale)
   - Self-efficacy probe (domain-specific: "How confident are you in reaching the next level?")

2. **Intervention mappings (New):**
   - Low Automatic Motivation + L4 Strategic → Habit-building protocols (environmental cues, reward pairing, 60–90 day sustained repetition)
   - Low Autonomy Satisfaction + Any level → Autonomy-supportive redesign (choice provision, rationale explanation, relevance connection)
   - Low Competence/Self-Efficacy + L3–L4 → Mastery experiences (graduated challenges, early wins, vicarious modeling)
   - Low Relatedness + Any level → Community-building interventions (peer groups, mentoring, communities of practice)

3. **Training for practitioners:**
   - Distinguish reflective from automatic motivation (implications for intervention timing)
   - Assess need satisfaction quickly (3-item interview protocol)
   - Match need frustration to interventions (autonomy → choice; competence → scaffolding; relatedness → community)

4. **Boundary testing (New scenarios):**
   - Learner at L4 Strategic with high confidence but zero automatic habit (1 month post-training)
   - Learner at L5 Committed but isolated (high internal motivation, zero peer/community connection)
   - Learner at L2 Disoriented with high autonomy and relatedness but low self-efficacy

### Risk Assessment

**Risk 1: Complexity increase → Reduced usability**
- The LVA was designed as a simple three-dimension framework. Adding a 2D reflective-automatic grid plus a need satisfaction profile increases cognitive load on practitioners.
- **Mitigation:** Develop a streamlined assessment (4–5 questions total) that branches based on initial Engagement level. Only assess automaticity if L3–L4; only assess needs if stuck.

**Risk 2: Conflation of Engagement with Capability**
- Adding self-efficacy to Engagement may blur the boundary with Capability. Practitioners might diagnose "low confidence" as "low engagement" when the actual problem is low capability development.
- **Mitigation:** Explicitly clarify in training: self-efficacy is *belief about capability*, not capability itself. A learner can be L5 Capability (fluent) with low self-efficacy (doesn't believe they are). The diagnostic names this as a confidence/motivation issue, not a skill issue.

**Risk 3: Relatedness/belonging is contextual and cultural**
- Importance of peer connection varies across cultures and learning contexts (online vs. in-person, formal vs. informal). Over-emphasizing belonging may not apply universally.
- **Mitigation:** Treat need satisfaction as a *conditional* assessment. "Is belonging relevant in this learning context?" If not, don't assess relatedness. But *flag* when context requires peer learning but relatedness is low, as this is a barrier.

**Risk 4: Measurement validity**
- The need satisfaction items (autonomy, competence, relatedness) are drawn from SDT research, which is robust. However, the reflective-automatic grid is less validated. Automaticity is difficult to self-report accurately.
- **Mitigation:** For automaticity assessment, use behavioral proxies (frequency of unsupervised practice, environmental cue presence, habit-tracking data) alongside self-report. Develop observable behavioral indicators.

### Recommendation: **MODIFY AND ACCEPT**

**Rationale:**
The proposal addresses a real diagnostic gap—the LVA currently can't distinguish between "motivation is present but unmotivated" and "motivation is present and habitual." Adding automaticity and need satisfaction sub-layers directly serves evidence-based intervention design, particularly for habit formation and need fulfillment.

**Modifications to proposal:**
1. **Automaticity assessment should use behavioral proxies,** not just self-report. Example: "How often do you engage in this learning without an external reminder or deadline?"
2. **Scope need satisfaction assessment to learners at L1–L4 only.** For L5–L6, assume high need satisfaction; if not, diagnose as a risk factor.
3. **Create a simple branching diagnostic:** Ask one reflective-automatic question ("How automatic is your engagement?") to segment the 6×3 matrix into 2–3 primary cells. Then conduct need assessment only if relevant.
4. **Pilot with 2–3 intervention contexts** (corporate training, higher ed, online learning) to validate that automaticity+needs data improves intervention selection. Gather practitioner feedback on usability.

**Implementation timeline:**
- **Month 1:** Develop streamlined assessment instruments and branching logic
- **Month 2–3:** Pilot with practitioners; gather usability feedback
- **Month 4:** Refine based on pilot results; create practitioner guidance and case examples
- **Month 5–6:** Roll out expanded Engagement dimension with automaticity and need satisfaction sub-assessments

---

## PROPOSAL 2: OPPORTUNITY DIMENSION OR OVERLAY

### Problem Statement

**The LVA has no construct for environmental barriers and systemic opportunity constraints — a critical gap identified in Stages 1.4 and 2.1.**

COM-B (Capability, Opportunity, Motivation) is the foundational model in behavior change science. The LVA maps onto COM-B Capability and Motivation (Engagement) but entirely omits Opportunity, which comprises:

1. **Physical opportunity:** Access to tools, time, resources, technology, physical environment
2. **Social opportunity:** Organizational norms, peer influence, cultural alignment, role modeling, leadership support

**Why this matters:** A learner can reach high LVA scores across all dimensions—Engagement L5 (Committed), Capability L5 (Effortful), Portability L5 (Translated)—yet fail to apply learning if the environment provides zero opportunity. Examples:

- **Teacher:** Develops high capability in active learning pedagogy (L5), is personally committed (L5), can articulate the approach (L5), but teaches in a 200-seat lecture hall with fixed seating and back-to-back classes. Zero opportunity to apply.
- **Employee:** Masters new software skills (L5), is motivated to use them (L5), can train others (L5), but organization mandates legacy systems. Zero social opportunity.
- **Learner:** Develops strong metacognitive strategies (L4), is strategic about learning (L4), can articulate methods (L4), but attends a high-pressure school that penalizes risk-taking. Zero institutional opportunity.

**Diagnostic consequence:** The LVA would likely misdiagnose these as Portability issues ("Context-Bound"—L4) or Capability issues ("not yet Fluent"—L5), when the actual problem is environmental constraint. This leads to learner-blaming interventions ("develop more adaptive expertise") when the actual fix is systemic.

Stage 1.4 (Behavior Change Report) identifies this as the **single most critical gap** in the LVA framework. Stage 2.1, Expert 3 (Sarah Okonjo, CLO) states: "From my seat, this isn't a theoretical gap — it's the *primary* practical barrier. A learner at L4 Capability in a hostile environment will regress to L2 within months."

### Proposed Modification

**Option A: Add Opportunity as a Fourth Dimension (Recommended)**

Define **Opportunity** as the degree to which the environment enables application of capability and engagement.

**Opportunity Levels (L1–L6 scale, parallel to existing dimensions):**

- **L1: Blocked.** No opportunity to apply learning. Environment actively prevents the behavior or provides zero resources/time. Example: teacher cannot modify pedagogy; legacy systems mandate prevents new software use.

- **L2: Fragmented.** Inconsistent, unreliable opportunity. Some contexts allow application; others don't. Example: some classes allow active learning; others are lecture-only. Learner must constantly context-switch.

- **L3: Structured.** Opportunity is provided but monitored/mandated. Organization requires use of new approach; tracks compliance; applies external incentives. Example: all teachers must implement active learning; observations verify compliance; results are tied to evaluation.

- **L4: Discretionary.** Opportunity is available but not mandated. Learner has access to tools, time, resources; can choose to use learning or not. Example: software is available; using it is optional; no tracking.

- **L5: Self-Directed.** Learner can create conditions for opportunity. They have flexibility, authority, and resources to design environments supporting their capability. Example: teacher can redesign course structure; employee can advocate for systems changes; learner can select contexts matching their learning.

- **L6: Systemic.** Organization/environment is designed around the capability. Norms, structures, incentives, technology, and peer modeling all support the behavior. It is harder *not* to apply learning than to apply it. Example: active learning is the institutional standard; all spaces are designed for it; all peers model it; promotion criteria reward it.

**Diagnostic Structure:**

LVA diagnosis now includes four dimensions:

| Dimension | Scale | Focus |
|-----------|-------|-------|
| **Engagement** | L1–L6 | Learner's motivation and alignment |
| **Capability** | L1–L7 | Learner's competence and skill level |
| **Portability** | L1–L6 | Learner's ability to articulate and transfer |
| **Opportunity** | L1–L6 | Environmental support and constraints |

**Interpretation:**

- Ideal state: E5+ C5+ P4+ O4+
- Learner-side barrier: low E, C, P with high O (learner is blocked by motivation/capability, not environment)
- System-side barrier: high E, C, P with low O (learner is ready; environment is not)
- Blocked learner: any E/C/P level with O1–O2 (environment is primary barrier)
- Implementation-ready: E4+ C4+ P3+ O4+ (learner and system aligned)

**Option B: Opportunity Overlay/Modifier (Alternative)**

Rather than a fourth dimension, create a **contextual modifier** that applies to each of the three existing dimensions. For any dimension, flag whether the learner's level is opportunity-constrained.

Example notation:
- **C5 [O-Constrained]** = Learner has capability L5 but can't deploy it due to environmental barriers
- **E5 [O-Supported]** = Learner has engagement L5 and environment reinforces it
- **P4 [O-Blocked]** = Learner's portability is limited because environment provides no peer learning community

**Pros:**
- Less structural change; doesn't expand the framework dimensionality
- Can be retrofitted into existing LVA assessments
- Directly notes which barriers are environmental vs. learner-side

**Cons:**
- Doesn't provide systematic diagnosis of environment itself
- Treats Opportunity as binary (constrained/supported) rather than scalar
- Loses the ability to set environmental improvement targets

**Option C: Companion Diagnostic (Minimal Integration)**

Develop a separate **Organizational Readiness Assessment** that runs parallel to the LVA individual diagnostic. Practitioners assess both individual learner state (E/C/P) and organizational readiness (Opportunity, leadership alignment, knowledge management maturity, incentive structures). The two diagnostics are separate but consulted together.

**Pros:**
- Preserves MECE purity of the three-dimension LVA
- Acknowledges that organizational assessment is a distinct domain
- Can be conducted independently or in concert

**Cons:**
- Creates two separate frameworks that practitioners must coordinate
- Doesn't directly address the question "can this learner apply what they know?"
- Higher implementation friction

### Evidence Base

**Physical and Social Opportunity Barriers in Learning:**
- Michie, S., van Stralen, M. M., & West, R. (2011). The behaviour change wheel: A new method for characterising and designing behaviour change interventions. *Implementation Science*, 6, 42. Establishes Opportunity as a primary determinant of behavior.
- Nilsen, P. (2015). Making sense of implementation theories, models, and frameworks. *Implementation Science*, 10, 53. Implementation science literature shows environmental barriers are the primary reason evidence-based practices fail in practice.
- Dutton, J. E., Ashford, S. J., O'Neill, R. M., & Lawrence, K. B. (2001). Moves that matter: Issue selling and organizational change. *Academy of Management Journal*, 44(4), 716–736. Organizations can systematically block learning application through structural inertia.

**Organizational Change and the Opportunity Barrier:**
- Kotter, J. P. (2012). *Leading change*. Harvard Business Review Press. Change fails when systems/structures aren't redesigned to support new behaviors.
- Argyris, C., & Schön, D. A. (1996). *Organizational learning II: Theory, method, and practice*. Addison-Wesley. Defensive organizational routines block learning implementation despite readiness.

**Stage 1.4 Evidence:**
- "Opportunity constraints are often the *primary* barrier to behavior change, not motivation or capability. LVA Diagnostic Implication: The current LVA framework is a learner-centric model... This is a significant structural gap."

**Stage 2.1 Evidence:**
- Expert 3 (CLO, 85K-employee organization): "In my experience, 70% of learning failure is environmental, not learner-driven... From my seat, this isn't a theoretical gap — it's the *primary* practical barrier."
- Expert 4 (James Rutherford, COM-B): "the LVA is missing one-third of the behavior change equation. COM-B states that Behavior = f(Capability, Opportunity, Motivation)."

### MECE Impact Analysis

**Adding a Fourth Dimension:**

**Potential MECE violation:** If Opportunity is not independent of the existing three dimensions, adding it creates overlap and redundancy.

**Independence test:**
- Can Engagement be high while Opportunity is low? Yes. A learner is intrinsically motivated (E5) but has no time/resources (O2).
- Can Capability be high while Opportunity is low? Yes. A teacher is expert in active learning (C6) but teaches in a lecture hall (O1).
- Can Portability be high while Opportunity is low? Yes. A learner can articulate their learning (P4) but the organization doesn't recognize those skills (O2).
- Can two dimensions be high while Opportunity is low? Yes. All of the above examples show E+C+P high with O low.

**Conclusion:** Opportunity is genuinely independent. A learner's position on E/C/P does not determine their position on O. MECE is preserved.

**Alternative concern:** Does Opportunity duplicate or overlap with Portability (which includes "context-bound" at L4)?

**Response:** Portability assesses whether a learner's capability is tied to specific contexts (the learner can only apply it in training conditions). Opportunity assesses whether the *external context* provides resources/support. These are distinct:
- **Portability L4, Opportunity L5:** Learner's capability is context-dependent (needs familiar contexts) but the environment provides multiple familiar contexts to practice in.
- **Portability L6, Opportunity L2:** Learner's capability is fully transferable but the environment is fragmented (some contexts allow transfer; others don't).

**MECE verdict:** Adding Opportunity as a fourth dimension maintains MECE integrity. The dimensions are independent and orthogonal.

### Implementation Requirements

**If Option A (Fourth Dimension) is selected:**

1. **Assessment instrument (New):**
   - 6–8 items assessing physical and social opportunity
   - Example items:
     - "I have access to tools/resources needed to apply this learning" (Physical)
     - "My manager supports/rewards use of this capability" (Social—leader support)
     - "Peers in my role model/use this capability" (Social—peer norms)
     - "Organizational systems and processes enable this behavior" (Systemic)
     - "I have time allocated for practicing this capability" (Physical—time)
   - Scoring: Items map to Opportunity L1–L6 based on response pattern

2. **Boundary testing (New scenarios needed):**
   - Learner E5 C6 P5 O2 (fully ready learner, fragmented environment) → What is the implementation strategy?
   - Learner E3 C3 P2 O6 (weak learner, highly supportive environment) → Does systemic support increase learning speed?
   - Team transition: E4 C4 P3 O1 → O4 (opportunity improvement) → What is expected learning trajectory?

3. **Intervention mapping (New):**
   - O1 (Blocked) → Environmental restructuring; systemic change; advocate/negotiate for resources
   - O2 (Fragmented) → Create consistency; standardize support across contexts; reduce context-switching
   - O3 (Structured) → Monitor effectiveness; maintain mandates; identify which structures work
   - O4 (Discretionary) → Build intrinsic motivation; create incentives; increase awareness of available resources
   - O5 (Self-Directed) → Support learner agency; build autonomy; provide platforms for environmental design
   - O6 (Systemic) → Maintain systemic design; measure outcomes; refine based on data

4. **Training and guidance:**
   - Diagnostic: How to assess organizational opportunity (interview with manager, observation, system audit)
   - Interpretation: High E/C/P + Low O = systems problem, not learner problem
   - Intervention selection: Distinguish learner-side vs. system-side barriers; allocate resources accordingly
   - Implementation: Environmental restructuring is often slower and more politically complex than individual training

5. **Stakeholder mapping:**
   - Opportunity L1–L2 requires organizational/leadership engagement (not just L&D)
   - Opportunity L3 requires policy and process alignment
   - Opportunity L4–L6 requires cultural and structural embedding

**If Option B (Overlay) is selected:**

1. **Simpler assessment:** Add 2–3 questions per learner assessment
   - "Does your environment provide opportunity to apply this learning?"
   - Response: Yes (O4+) / Partially (O3) / No (O1–O2) / Unknown

2. **Notation convention:** Mark each E/C/P dimension with O-status
   - Example: C5 [O-Constrained] means capability is L5 but not deployable

3. **Intervention pathway:** If O-constrained, escalate to systems/organizational level

**If Option C (Companion Diagnostic) is selected:**

1. **Separate organizational readiness assessment:**
   - Leadership alignment (Do leaders support the capability application?)
   - Knowledge management maturity (Can the organization capture, store, retrieve knowledge?)
   - Incentive alignment (Do reward systems reinforce the desired behavior?)
   - Time and resources (Are they allocated?)
   - Cultural readiness (Do norms support change?)

2. **Coordination protocol:** Run individual LVA + organizational readiness assessment in parallel; use two diagnostics to triangulate on barriers

### Risks and Downsides

**Risk 1: Adds complexity to framework**
- The LVA was designed as a parsimonious three-dimension model. A fourth dimension (or even an overlay) increases assessment burden.
- **Mitigation:** Make Opportunity assessment rapid (2–3 items; 2 minutes). Branching logic: only assess Opportunity if Capability L3+ (lower capability rarely benefits from opportunity analysis; focus is on developing capability first).

**Risk 2: Opportunity is contextual and time-dependent**
- Opportunity changes. A learner might have O4 (discretionary access) one month and O1 (blocked) after organizational restructuring. The framework should track Opportunity as a moving target, not a static state.
- **Mitigation:** Include opportunity assessment in periodic reviews (not just initial diagnostic). Establish that Opportunity can change independent of learner development.

**Risk 3: Creates potential for blame-shifting**
- If framework includes Opportunity, practitioners might use it to avoid responsibility. "The learner failed because of low Opportunity" (environment's fault) rather than "we failed to ensure adequate Opportunity." Shifts accountability rather than solving problems.
- **Mitigation:** Make Opportunity assessment an *actionable diagnostic*. If O is low, the framework prescribes who is responsible for addressing it (manager, L&D, leadership). Create follow-up accountability for systemic barriers.

**Risk 4: Opportunity is not always controllable**
- Physical constraints (classroom design, budget) might not be immediately changeable. Social constraints (peer norms, organizational culture) are even slower to shift. Practitioners might feel the LVA is identifying unfixable problems.
- **Mitigation:** Distinguish between immediate interventions (can start now) and long-term systemic change (requires months/years). Build in interim workarounds while systemic change is underway. Example: If O1 (blocked by fixed classroom design), interim solution is off-site practice sessions; long-term is classroom redesign.

**Risk 5: Org Readiness overlap with existing frameworks**
- Organizations already have change management models, organizational assessments, capability maturity models, etc. Adding LVA Opportunity might create competing frameworks.
- **Mitigation:** Explicitly position Opportunity as "what does the environment look like for *this specific learner's capability application*?" not as a general organizational assessment. Keep it laser-focused on the learning implementation barrier, not broader change readiness.

### Recommendation: **ACCEPT OPTION A (Fourth Dimension)**

**Rationale:**

The evidence is overwhelming that environmental barriers are the primary learning implementation failure. Stage 1.4 identifies it as the "most critical gap." Stage 2.1 provides practitioner validation (Expert 3: "70% of learning failure is environmental"). Stage 2.2 (MECE Stress Test) did not flag Opportunity as a MECE violation; it is genuinely independent.

Option A (fourth dimension) is preferable to Options B and C because:
- **Diagnostic power:** Four parallel dimensions allow direct comparison (Is the learner ready? Is the environment ready?). An overlay or separate diagnostic creates coordination friction.
- **Alignment with COM-B:** COM-B is the gold standard in behavior change; Option A brings LVA into full alignment.
- **Prescriptive clarity:** Having an explicit Opportunity score makes systemic barriers visible and actionable. Overlays or separate diagnostics hide the barrier in the original E/C/P scores.
- **Scalability:** A fourth dimension scales naturally (four × assessments, four × level definitions, four × intervention categories). Options B and C require ad-hoc integration.

**Implementation priority:** HIGH. Opportunity dimension should be added before Proposal 1 (Affect/Belonging) because it addresses a more fundamental barrier.

**Next steps:**
1. **Develop Opportunity assessment** (6–8 items, L1–L6 scoring logic)
2. **Create level definitions** with clear behavioral anchors for each L1–L6
3. **Map interventions:** What changes the Opportunity level for each transition (O1→O2, O2→O3, etc.)
4. **Pilot with 2–3 organizations** (different sizes, industries) to test practical assessment and intervention feasibility
5. **Establish accountability:** Who is responsible for moving Opportunity level? (Manager, L&D, leadership, learner?)

---

## PROPOSAL 3: COLLECTIVE/MULTI-LEVEL EXTENSION

### Problem Statement

**The LVA is fundamentally individual-focused; teams and organizations exhibit emergent learning properties that individual diagnostics cannot capture.**

Stage 1.5 (Collective Organizational Learning Report) provides comprehensive evidence that learning occurs at multiple ontological levels—individual, team, organization, society—and that capabilities at one level do not reduce to the sum of capabilities at a lower level.

**Key findings:**

1. **Collective capability is emergent, not aggregated.** Fisher (2025) argues that group capability is fundamentally different from aggregated individual capability. A team of six individually brilliant people can fail collectively due to coordination failures, role ambiguity, or poor information flow. Woolley et al. (2010) found that team collective intelligence ("c-factor") was not predicted by average or maximum individual IQ, but by social perceptiveness and equality of conversational turn-taking. This is an emergent property.

2. **Teams have Engagement properties beyond individual motivation.** Team-level engagement involves collective commitment to shared purpose, group energy and psychological safety, equitable voice, and mutual respect. An organization can have highly motivated individuals (E5) but low collective engagement (poor psychological safety, unequal voice, misaligned purpose).

3. **Organizations exhibit learning disciplines that individuals don't.** Senge's five disciplines—systems thinking, personal mastery, mental models, shared vision, team learning—describe institutional learning capacities. An institution can fail at team learning (Team Learning discipline missing) even if individual members are personally masterful (Personal Mastery strong). These are organizational-level properties.

4. **Community of practice is the unit of learning, not the individual.** Wenger and Lave argue that learning is irreducibly social. Learners develop within communities of practice through legitimate peripheral participation. A learner isolated from a strong CoP will stall regardless of intervention quality. The community's shared repertoire is collective Portability.

5. **Knowledge creation spirals across ontological levels.** Nonaka's SECI model shows knowledge moving from individual tacit → group explicit → organizational codified → inter-organizational. Each level creates conditions for the next. Knowledge creation requires "ba"—shared spaces where interaction occurs.

**Current limitation:** The LVA diagnoses individual E/C/P state but has no mechanism for diagnosing:
- Team capability (Can the team solve problems together? Coordinate fluidly? Generate novel solutions?)
- Organizational Engagement (Do members share purpose? Trust leadership? Commit to institutional goals?)
- Organizational Portability (Can the organization capture and transmit its knowledge? Are mental models shared? Is there institutional memory?)
- Community quality (Is the community of practice strong? Does it provide belonging and growth?)

**Consequence:** Practitioners can diagnose that individual learners are high-capability but the organization is failing to learn, without diagnostic clarity on why. Is it team coordination failure (team-level Capability issue)? Misaligned purpose (org-level Engagement issue)? Inability to codify knowledge (org-level Portability issue)? Poor community connectivity (community-level barrier)? Current LVA can't distinguish.

### Proposed Modification

**Option A: 3×4 Multi-Level Diagnostic Matrix (Recommended)**

Extend the LVA to a **3×4 matrix**: three LVA dimensions × four ontological levels.

| Dimension | Individual | Team | Organization | Society/Field |
|-----------|-----------|------|--------------|--------------|
| **Engagement** | Individual motivation & alignment | Collective commitment, psychological safety, equitable voice, shared purpose | Institutional alignment, culture, vision-sharing, mission coherence | Field-level shared values, professional norms, disciplinary coherence |
| **Capability** | Individual competence and skill | Team capability to coordinate, problem-solve, generate novel solutions together | Organizational capability to execute strategy, learn at scale, adapt | Field/discipline capability to address grand challenges, innovate, set standards |
| **Portability** | Individual ability to articulate and transfer | Team ability to make collective knowledge visible; shared mental models; onboarding new members | Organizational ability to codify, store, retrieve, transmit knowledge; institutional memory | Field ability to accumulate and share disciplinary knowledge; standards, best practices |

**Operationalized definitions:**

**Team-Level Engagement (E):**
- **L1:** Team has no shared purpose or commitment; members pursue individual goals
- **L2:** Team has loosely-defined purpose; commitment is unclear or variable
- **L3:** Team has structured commitment (mandatory collaboration); compliance-based
- **L4:** Team members see value in shared purpose; consciously coordinate
- **L5:** Team identity is strong; members internalize collective goals; mutual commitment
- **L6:** Team culture is fully aligned; collaboration feels natural; shared identity

**Team-Level Capability (C):**
- **L1:** Team cannot coordinate; conflicts or misalignment prevent action
- **L2:** Team follows established protocols; coordination is scripted
- **L3:** Team coordinates through explicit procedures; adapts slowly to novel situations
- **L4:** Team understands principles; flexibly adapts procedures to changing contexts
- **L5:** Team diagnoses coordination problems; actively improves team processes
- **L6:** Team coordinates fluidly across changing demands; leverages diverse expertise naturally
- **L7:** Team generates novel coordination approaches; improves the team's capability itself

**Team-Level Portability (P):**
- **L1:** Team knowledge is tacit; invisible to new members or outside observers
- **L2:** Some team knowledge is made explicit but inconsistently (some artifacts, informal documentation)
- **L3:** Team explicitly documents key processes and knowledge; onboarding uses these materials
- **L4:** Team owns documentation; updates it based on practice; knowledge is accessible
- **L5:** Team translates knowledge to new contexts; teaches outsiders; shares expertise
- **L6:** Team has institutional recognition for its knowledge; fields requests; mentors other teams

**Organization-Level Engagement (E):**
- **L1:** Organization has no shared mission; units operate independently
- **L2:** Mission exists but is not widely understood or embraced
- **L3:** Mission is communicated; compliance is monitored; alignment is structured
- **L4:** Members see organizational mission as valuable; conscious commitment
- **L5:** Organizational mission is widely internalized; members identify with institutional goals
- **L6:** Organization culture is unified; mission feels natural; collective identity is strong

**Organization-Level Capability (C):**
- **L1:** Organization cannot execute strategy; misalignment or dysfunction prevents action
- **L2:** Organization follows established business models; change is slow
- **L3:** Organization executes known processes; operational efficiency is high
- **L4:** Organization adapts strategy to changing markets; learns from experience
- **L5:** Organization systematically learns across units; best practices spread; innovation occurs
- **L6:** Organization continuously improves; double-loop learning embedded; adaptive capacity is high
- **L7:** Organization creates new business models, markets, or knowledge domains; generative capability

**Organization-Level Portability (P):**
- **L1:** Organizational knowledge is scattered; no institutional memory
- **L2:** Some knowledge is documented; inconsistent accessibility
- **L3:** Organization has knowledge management systems; processes are codified
- **L4:** Organization maintains and updates knowledge bases; information is retrievable
- **L5:** Organization translates knowledge across boundaries; shares expertise with partners
- **L6:** Organization's knowledge is recognized in field; benchmarked by others; standards-setting

**Diagnostic process:**

1. **Conduct individual LVA:** Assess each learner/team member (E/C/P L1–L6)
2. **Aggregate to team:** Calculate distribution of capability across team members; assess team-level E/C/P (which is NOT the average of individuals)
3. **Assess organization:** Evaluate institutional-level E/C/P based on systems, policies, culture, knowledge management
4. **Identify misalignment:** Where do levels not align? High individual C with low team C suggests coordination barriers. High org C with low org E suggests cultural misalignment.

**Output:**

Visual dashboard showing:
- Individual distribution (boxplot or histogram of E/C/P across learners)
- Team-level score (separate assessment)
- Organization-level score (separate assessment)
- Gap analysis (Where is the constraint? Individual? Team? Org?)

**Option B: Separate Companion Diagnostics (Alternative)**

Rather than extending the LVA to a 3×4 matrix, develop separate companion diagnostics:
- **Individual LVA:** Existing three-dimension framework
- **Team Learning Diagnostic:** Assess team collective intelligence (Woolley's c-factor indicators: social perceptiveness, conversational equality, diversity)
- **Organizational Learning Readiness:** Assess Senge's five disciplines, Argyris's learning loops, knowledge management maturity

**Pros:**
- Preserves LVA purity (doesn't expand framework)
- Allows specialists to develop team and org diagnostics deeply
- Doesn't overload practitioners

**Cons:**
- Requires coordination across three separate frameworks
- Doesn't directly answer "why is this team failing?" or "what is blocking organizational learning?"
- Higher implementation friction

**Option C: Institutional Readiness Overlay**

Add a single **Institutional Readiness Index** as a companion to individual LVA:
- Leader support for the capability
- Time and resources allocated
- Community of practice present/strong
- Incentive alignment
- Knowledge management infrastructure
- Cultural readiness

**Pros:**
- Single overlay, minimal complexity addition
- Directly addresses barriers to capability implementation
- Can be deployed immediately

**Cons:**
- Doesn't capture team-level or organizational-level learning properties (only readiness for individual learning application)
- Less actionable for organizational improvement

### Evidence Base

**Collective Capability and Emergent Properties:**
- Fisher, C. (2025). *The Collective Edge: How Teams Produce Capabilities No Individual Possesses*. Emergent properties of teams; why aggregating individual genius doesn't produce collective genius.
- Woolley, A. W., Chabris, C. F., Pentland, A., Hashmi, N., & Malone, T. W. (2010). Evidence for a collective intelligence factor in the performance of human groups. *Science*, 330(6004), 686–688. c-factor is not predicted by individual intelligence; predicted by social factors.

**Organizational Learning Disciplines:**
- Senge, P. M. (1990). *The Fifth Discipline: The Art and Practice of the Learning Organization*. Five disciplines as institutional learning capacities.
- Argyris, C., & Schön, D. A. (1996). *Organizational Learning II*. Single-loop vs. double-loop learning; defensive routines block organizational learning.

**Communities of Practice:**
- Wenger, E. (1998). *Communities of Practice: Learning, Meaning, and Identity*. Learning is irreducibly social; communities of practice are units of learning.
- Lave, J., & Wenger, E. (1991). *Situated Learning: Legitimate Peripheral Participation*. Learning occurs through community participation, not individual acquisition then social application.

**Knowledge Creation Across Levels:**
- Nonaka, I., & Takeuchi, H. (1995). *The Knowledge-Creating Company: How Japanese Companies Create the Dynamics of Innovation*. SECI model and ba; knowledge spirals across ontological levels.

**Stage 1.5 Evidence:**
- "Teams and organizations exhibit learning properties that cannot be predicted from or reduced to individual member capabilities."
- "The LVA needs a companion layer that diagnoses organizational readiness and institutional conditions, not just learner state."

### MECE Impact Analysis

**Does extending to multiple ontological levels violate MECE?**

**No**, if the levels are treated as distinct units of analysis:
- Individual level: One learner's E/C/P state
- Team level: A group of individuals' collective E/C/P properties (not the sum of individuals)
- Organizational level: Institutional systems' E/C/P state
- Societal level: Field or discipline-level shared properties

These are genuinely separate levels. Team properties are not reducible to individual properties; organizational properties are not reducible to team aggregates.

**Potential complexity:** A 3×4 matrix creates 12 cells. Each cell is independent (Team C can be L3 while Org C is L5). Is this too complex?

**Mitigation:** Not all 12 cells need detailed development immediately. Priorities:
1. **Individual-level:** Fully developed (existing LVA)
2. **Team-level:** High priority (Woolley evidence is strong; team dysfunction is common barrier)
3. **Organizational-level:** High priority (Senge, Argyris evidence; org barriers are primary failure mode per Stage 1.4/2.1)
4. **Societal-level:** Lower priority for immediate development (can defer to Phase 4)

**MECE verdict:** MECE is preserved because levels are ontologically distinct. Complexity can be managed by phased rollout.

### Implementation Requirements

**If Option A (3×4 Matrix) is selected:**

1. **Develop team-level assessment instruments (New):**
   - Team Engagement: Shared vision clarity, psychological safety, equitable participation (3–4 items)
   - Team Capability: Coordination fluidity, adaptive problem-solving, collective efficacy (3–4 items)
   - Team Portability: Knowledge visibility, onboarding effectiveness, shared mental models (3–4 items)
   - Admin: Who participates? (team lead, HR, facilitator observation, team self-assessment)

2. **Develop organization-level assessment instruments (New):**
   - Organization Engagement: Mission clarity, culture strength, leadership vision-sharing (4–5 items)
   - Organization Capability: Strategic execution, learning capacity, innovation rate (4–5 items)
   - Organization Portability: Knowledge management maturity, institutional memory, best practice diffusion (4–5 items)
   - Admin: Survey data, document review, interview leadership

3. **Create multi-level assessment protocol:**
   - Individual LVA (existing): 15–20 min per learner
   - Team diagnostic: 20–30 min (lead + observation)
   - Org diagnostic: 60 min (interviews, system review)
   - Total for a team of 15 people: ~4 hours assessment time

4. **Develop gap analysis and triangulation logic:**
   - If individual C is high but team C is low → coordination/communication barrier
   - If team C is high but org C is low → systemic/cultural misalignment
   - If org C is high but individual C is low → individuals aren't receiving development support
   - Create decision tree: Which lever to pull first?

5. **Intervention mapping (New):**
   - **Individual-level interventions:** Capability building, engagement support, reflection prompts
   - **Team-level interventions:** Psychological safety building, role clarity, collective efficacy, communication norms
   - **Organization-level interventions:** Culture change, policy alignment, knowledge management infrastructure, structural redesign
   - **Sequence:** Which must change first? (Often: Org culture/systems → Team structures → Individual development)

6. **Pilot and validation (New):**
   - Conduct case studies with 2–3 organizations to test:
     - Assessment feasibility and time burden
     - Diagnostic validity (do levels predict outcomes?)
     - Actionability of gap analysis
     - Intervention success rate
   - Gather data on level distributions and transitions

7. **Training and rollout:**
   - L&D practitioners: Individual LVA assessment (existing training)
   - Team facilitators/leads: Team diagnostic administration
   - Organizational leadership: How to interpret org-level diagnostic
   - Practitioners: Gap analysis interpretation and lever selection

**If Option B (Companion Diagnostics) is selected:**

1. **Develop Team Learning Diagnostic:**
   - Woolley c-factor items (social perceptiveness, conversational equality)
   - Role clarity
   - Shared mental models
   - Collective efficacy

2. **Develop Organization Learning Readiness:**
   - Senge's five disciplines assessment
   - Argyris double-loop learning indicators
   - Knowledge management maturity (CMMI or similar)
   - Culture and climate measures

3. **Create coordination protocol:**
   - When to use individual LVA vs. team diagnostic vs. org diagnostic
   - How to interpret across three frameworks
   - Decision tree: If individual is high-capability but team is low-performing, which diagnostic to act on first?

### Risks and Downsides

**Risk 1: Massive complexity increase**
- The LVA was parsimonious (3 dimensions, 6–7 levels). A 3×4 matrix with full level definitions for each cell is much larger. Practitioners face steep learning curve.
- **Mitigation:** Phased rollout. Deploy individual LVA fully; introduce team diagnostic next; add org level only when practitioners are proficient. Provide decision trees that guide practitioners to the most relevant level for their context.

**Risk 2: Individual diagnostics may be confounded by team/org context**
- A learner's LVA score is not independent of team and org dynamics. A high-capability individual may appear low-engagement in a low-trust organization. Is this an individual engagement issue or an org culture issue?
- **Mitigation:** Administer diagnostics at multiple levels simultaneously. Interpret individual scores in context of team/org scores. If individual E is low but org E is also low, it's likely contextual. If individual E is low but org E is high, it's likely an individual issue.

**Risk 3: Org and team diagnostics may require specialists, not L&D practitioners**
- Most L&D practitioners are trained in individual-level assessment. Team facilitation and organizational diagnosis require different skill sets. Rolling out multi-level diagnostics may exceed practitioner competence.
- **Mitigation:** Partner with organizational development specialists for team and org diagnostics. Create clear role boundaries: L&D assesses individuals, OD assesses teams/orgs, leadership acts on gaps. Invest in upskilling L&D staff (6–12 week training program).

**Risk 4: Org-level assessment is slow and resource-intensive**
- Assessing organizational-level Engagement, Capability, and Portability requires interviews, culture surveys, knowledge management audits. This is time-consuming and can feel intrusive.
- **Mitigation:** Streamline org assessment to 5–6 key items. Use existing organizational data (engagement surveys, performance metrics, innovation rate, knowledge system usage). Don't require a new comprehensive assessment; layer LVA onto existing org measures.

**Risk 5: Multi-level framework may be too ambitious for near-term deployment**
- Building, validating, and deploying a full 3×4 matrix could take 12–18 months. This is longer than stakeholders may be willing to wait.
- **Mitigation:** Pursue a phased strategy: Phase 1 (Immediate, next 3 months) — validate that team and org levels are necessary diagnostics. Phase 2 (3–6 months) — develop team diagnostic fully; pilot. Phase 3 (6–12 months) — develop org diagnostic; integrate. This allows near-term progress while pursuing ambitious long-term goals.

### Recommendation: **MODIFY AND ACCEPT (Option A)**

**Rationale:**

The evidence for multi-level learning properties is overwhelming. Woolley's c-factor is replicable and well-validated. Senge and Argyris are foundational in organizational learning. Wenger's communities of practice are now mainstream in educational and organizational theory. The Phase 1.5 report makes a compelling case that the LVA cannot answer crucial diagnostic questions without multi-level extension.

Option A (3×4 matrix) is recommended over Option B (companion diagnostics) because:
- **Diagnostic coherence:** A single matrix framework makes gaps visible (e.g., high individual C, low team C = coordination barrier) without requiring practitioners to manually coordinate separate frameworks.
- **Implementation clarity:** Practitioners know to assess individual, team, and org; gaps are directly interpretable.
- **Alignment with learning theory:** Learning is inherently multi-level (Nonaka's spiral, Wenger's CoP, Senge's systems); a single framework reflects this.

Option A over Option C (institutional readiness overlay) because:
- **Captures team dynamics:** The overlay doesn't diagnose team-level learning properties (collective intelligence, coordination capability, shared mental models), which are distinct from org readiness.
- **More prescriptive:** Shows *what* is blocking learning (team coordination? org capability?) not just *readiness*.

**Key modifications:**
1. **Phased deployment:** Individual LVA in Month 1; team diagnostic by Month 4; org diagnostic by Month 8. Don't try to deploy all levels simultaneously.
2. **Specialist roles:** Make it clear that org-level assessment may require OD specialists, not L&D alone.
3. **Streamlined assessment:** Individual assessment stays ~15 min; team assessment ~20 min; org assessment ~30 min (using existing org data). Don't create huge new assessment burdens.
4. **Decision trees:** Provide clear guidance on "what level has the leverage to move outcomes?" in specific contexts.

**Implementation timeline:**
- **Month 1–2:** Develop full team-level diagnostic (Engagement, Capability, Portability L1–L6 definitions)
- **Month 2–3:** Pilot team diagnostic with 2 organizations; gather feedback
- **Month 3–4:** Refine; develop organization-level diagnostic
- **Month 4–5:** Pilot org diagnostic; test multi-level integration
- **Month 5–6:** Develop practitioner training; decision trees; intervention mapping
- **Month 6–12:** Roll out team + org diagnostics; gather longitudinal data on outcomes

---

## PROPOSAL 4: MULTI-LEVEL KNOWLEDGE-TYPE DIAGNOSTIC MODEL

### Problem Statement

**Learners can be at different capability levels for different knowledge types, different topics, and different contexts within the same domain — current LVA treats learners as having a single Capability level.**

Stage 2.1 (Expert 2: Cognitive Scientist) identifies that the LVA's assumption of sequential L1→L2→...→L7 progression is too strong. Evidence shows:

1. **Declarative vs. Procedural knowledge tracks are independent.** A learner can have L2 (Inert) declarative knowledge ("I know what keywords do in Python") while having L4+ procedural knowledge ("I can write functional Python code fluidly"). Conversely, native speakers have L6 procedural grammar without ever passing through L2–L3 declarative grammar.

2. **Consolidation is multi-stage and partial.** Memory consolidation is not binary (consolidated/not consolidated) but a process with multiple stages (synaptic, systems, reconsolidation). A learner might have L1 (Unconsolidated) for some knowledge components and L3 (Imitative) for others in the same domain—creating partial, fragmented capability.

3. **Transfer is limited to structurally similar contexts.** The LVA's L5–L6 suggest far transfer (applying knowledge to novel contexts). But cognitive science evidence shows far transfer is rare; what appears to be far transfer is usually analogical reasoning within structurally similar problems. A learner might be L6 (Fluent) within a family of related problems but only L4 (Context-Bound) for structurally novel problems.

4. **Topic/domain specificity is real.** A physician can be L6 (Fluent expert) in cardiology but only L3 (Imitative) in psychiatry. A teacher can be L7 (Generative) in active learning pedagogy but only L2 (Inert) in assessment design. The LVA treats "capability" as a single dimension, but it's actually granular (capability in X, capability in Y).

5. **Context modifiers matter.** The same learner in the same topic can shift capability levels based on context. A student solving physics problems in a textbook chapter (L4 Context-Bound) might only achieve L2 in a novel physics application (poor transfer). Or a baseball player might be L6 (Fluent) in hitting against familiar pitchers but L3 (Imitative) against novel pitcher types.

**Current diagnostic consequence:** The LVA assigns a learner a single Capability score (e.g., C4), when the more precise diagnosis is: "C4 for declarative knowledge, C5 for procedural knowledge; C4 in Topic A, C2 in Topic B; C5 in familiar contexts, C3 in novel problem types."

**Why this matters:** Interventions are topic- and knowledge-type specific. A learner with C4 declarative/C2 procedural needs *different* interventions than a learner with C2 declarative/C5 procedural. Adding these distinctions makes intervention targeting much more precise.

### Proposed Modification

**Expand Capability dimension to a multi-dimensional profile:**

Rather than a single Capability L1–L7 score, learners receive a profile:

**Profile Structure:**

```
Capability Profile for [Learner] on [Domain]:

Topic/Knowledge Type | Declarative | Procedural | Conditional | Transfer Level
------|---|---|---|---
Topic A: [X] | L3 | L4 | L2 | Local (±1 context)
Topic B: [X] | L2 | L2 | L1 | None
Topic C: [X] | L4 | L5 | L4 | Moderate (~3 contexts)
Overall Domain | L3 | L4 | L2 | (Weighted average)
```

**Operationalization:**

1. **Declare knowledge types for each domain:**
   - **Declarative:** "Know that" — facts, concepts, principles, understanding
   - **Procedural:** "Know how" — skill, technique, execution
   - **Conditional:** "Know when and why" — metacognition, judgment, principle-based adaptation
   - Not all domains need all three (math needs all three; interpersonal skills might prioritize procedural/conditional)

2. **Track topics within domains:**
   - **Domain:** Statistics (broad)
   - **Topics:** Hypothesis testing, regression, Bayesian inference, p-values (granular)
   - Assess each topic separately because learner capability varies

3. **Assess transfer level (new dimension for each topic):**
   - **None:** Can only apply in training context
   - **Local (±1 context):** Can apply in very similar contexts
   - **Moderate (~3 contexts):** Can apply in several structurally similar contexts
   - **Far (novel):** Can apply to novel, structurally different problems (rare)

4. **Create learner profile, not single score:**
   - Individual profile shows exactly where capability is strong and where it's weak
   - Avoids the fiction of a single "Capability L4" when the reality is more granular

**Example: Teacher Professional Development**

**Domain:** Pedagogy
**Topics:** Active Learning, Assessment, Differentiation, Classroom Management, Student Engagement

Profile:

| Topic | Declarative | Procedural | Conditional | Transfer |
|-------|-----------|-----------|-------------|----------|
| Active Learning | L4 | L4 | L3 | Moderate |
| Assessment | L2 | L3 | L1 | Local |
| Differentiation | L3 | L2 | L2 | None |
| Classroom Mgmt | L4 | L5 | L4 | Moderate |
| Student Engagement | L3 | L4 | L3 | Local |
| **Overall** | **L3** | **L3.5** | **L2.5** | **Local** |

**Diagnostic insight:** This teacher is strongest in classroom management (L5 procedural) and active learning (L4 across all types). Weakest in assessment (L2 declarative) and differentiation (L2 procedural). Overall procedural > declarative, suggesting hands-on practice is stronger than conceptual understanding.

**Interventions would target:**
- Assessment development (move from L2 declarative to L3)
- Conditional knowledge about differentiation (move from L2 to L3, focusing on *when* to differentiate)
- Assessment transfer (currently stuck at "local" transfer; support application in novel student populations)

**Without profile:** Would assign single score (C3) and generic "move to L4" intervention.
**With profile:** Precise targeting of 3 specific capability gaps with knowledge-type and transfer-level specificity.

### Evidence Base

**Declarative vs. Procedural Knowledge:**
- Anderson, J. R. (1982). Acquisition of cognitive skill. *Psychological Review*, 89(4), 369–406. Foundational model of skill learning showing declarative→procedural transition.
- Squire, L. R., & Zola, S. M. (1996). Structure and function of declarative and nondeclarative memory systems. *Proceedings of the National Academy of Sciences*, 93(24), 13515–13522. Neurobiological evidence that declarative and procedural memory are distinct systems.

**Partial/Fragmented Consolidation:**
- Stickgold, R., & Walker, M. P. (2013). Sleep-dependent memory triage: Selective consolidation of mechanistically diverse tasks. *Nature Neuroscience*, 8, 1379–1385. Memory consolidation is multi-stage; different components consolidate at different rates.

**Limited Transfer:**
- Singley, M. K., & Anderson, J. R. (1989). *The Transfer of Cognitive Skill*. MIT Press. Transfer is limited to structurally similar domains; far transfer is rare.
- Barnett, S. M., & Ceci, S. J. (2002). When and where do we apply what we learn? A taxonomy for far transfer. *Psychological Bulletin*, 128(4), 612–637. Demonstrates that "far transfer as traditionally conceived may not exist as a general cognitive mechanism."

**Conditional Knowledge and Metacognition:**
- Schoenfeld, A. H. (1983). Problem solving in the mathematics curriculum: A report, recommendations, and an annotated bibliography. *MAA Notes*, 1, 1–30. Conditional knowledge ("knowing when to apply what") is the bottleneck in skill transfer.

**Topic-Specificity:**
- Stage 2.1, Expert 2: "A learner might be L2 declaratively and L5 procedurally, or vice versa... A learner can be L6 (Fluent expert) in cardiology but only L3 (Imitative) in psychiatry."

### MECE Impact Analysis

**Does allowing multi-dimensional Capability break MECE?**

**Not if:**
- Engagement and Portability remain independent (unchanged)
- Capability sub-dimensions (declarative, procedural, conditional) are exhaustive and mutually exclusive
- Topic/domain distinction is clear (learner state is defined on a specific topic, not globally)

**Clarity needed:**
- The LVA's current "Capability L1–L7" becomes "Overall Capability L1–L7 (computed from topic/knowledge-type profile)"
- Individual topic scores are granular diagnostics
- The three dimensions are still orthogonal (a learner can have high Engagement but multi-topic low Capability; can have high Portability on one topic but not another—though Portability L1–L6 remains a single dimension)

**MECE verdict:** MECE is preserved if we clarify that Capability is *multi-dimensional* but the overall E/C/P framework remains three-dimensional. We're not breaking the three-dimension structure; we're adding granularity *within* Capability.

### Implementation Requirements

1. **Redevelop Capability assessment instruments:**
   - Identify knowledge types relevant to the domain (Not all domains need declarative/procedural/conditional distinction)
   - Identify topics within domain that are content-distinct enough to assess separately
   - Create items assessing each knowledge type for each topic
   - Example: For Statistics domain, assess Hypothesis Testing (declarative, procedural, conditional); Regression (declarative, procedural, conditional); etc.
   - Assessment stays ~same time burden; just organized differently

2. **Develop topic/knowledge-type templates for common domains:**
   - **STEM learning:** Declarative (concepts), Procedural (problem-solving), Conditional (recognizing when to apply methods)
   - **Professional skills:** Declarative (principles), Procedural (execution), Conditional (judgment)
   - **Soft skills:** Procedural (behavior), Conditional (reading context and adapting)
   - Don't require custom templates; use templates to save time

3. **Create scoring and interpretation protocols:**
   - How to compute "Overall Capability" from topic scores (weighted average? weakest-link? profile summary?)
   - How to display profiles (visual dashboard showing topic×knowledge-type matrix)
   - How to interpret multi-dimensional profile (Which gaps matter most? Which topics require attention?)

4. **Intervention mapping by knowledge type:**
   - **Declarative L1→L2:** Education, explanation, concept mapping
   - **Procedural L2→L4:** Training, practice with feedback, worked examples, modeling
   - **Conditional L2→L4:** Principles-based teaching, case studies, reflection on when-and-why

5. **Transfer assessment:**
   - Add transfer-level assessment (Local vs. Moderate vs. Far) for each topic
   - Identify transfer barriers (Is the learner stuck at "local" transfer? Why?)
   - Map interventions to improve transfer (varied practice, analogical reasoning, meta-cognitive reflection)

6. **Pilot with 2–3 domains:**
   - Identify relevant knowledge types and topics for each domain
   - Test that topic-level granularity improves intervention precision
   - Validate that multi-dimensional profile is usable by practitioners

### Risks and Downsides

**Risk 1: Massive increase in assessment complexity and time**
- Single Capability score takes ~5 minutes to assess. Multi-topic, multi-knowledge-type profile could take 20–30 minutes.
- **Mitigation:** Streamline by making topic/knowledge-type assessment adaptive. If learner scores high on initial topic, skip detailed assessment; if they score low, drill down into knowledge types. Use branching logic to keep assessment time under 10 minutes.

**Risk 2: Practitioner confusion about "overall" Capability**
- If a learner has a multi-topic profile (L3 in Topic A, L2 in Topic B), what is their "Capability"? How do we summarize?
- **Mitigation:** Always report the full profile; make "overall Capability" optional. Interpret profile holistically, not as a single number. Provide decision trees that guide practitioners to high-priority gaps.

**Risk 3: Over-fragmentation loses diagnostic signal**
- Breaking capability into too many sub-dimensions might create noise. If we assess 10 topics × 3 knowledge types, we have 30 separate scores. Statistical noise could overwhelm signal.
- **Mitigation:** Identify the 3–5 most important topics for a given learning goal; assess those deeply. Don't assess everything. Use strategic sampling.

**Risk 4: Conditional knowledge is difficult to assess**
- Declarative and procedural knowledge are easy to test ("Do you know X?" "Can you do Y?"). Conditional knowledge ("Know when to apply X") is harder to assess, especially in complex domains.
- **Mitigation:** Use case-based assessment and reflective interview. Present scenarios; ask "When would you use this? How do you know?" Responses reveal conditional knowledge.

### Recommendation: **MODIFY AND DEFER (to Phase 3)**

**Rationale:**

The evidence that capability is multi-dimensional (declarative, procedural, conditional) and topic-specific is solid. This modification *would* significantly improve intervention precision. However:

1. **Implementation complexity is high.** Requires redesigning capability assessment for each domain, developing templates, testing branching logic. This is 6–8 weeks of work minimum.

2. **Payoff depends on current LVA maturity.** If practitioners are still struggling with the basic three-dimension LVA, adding multi-dimensional Capability could cause adoption to fail. Better to consolidate Phase 2 first (Proposals 1–3 + 5–6), then layer in Proposal 4 in Phase 3.

3. **Proposal 5 (BCW Intervention Overlay) doesn't require Proposal 4 to work well.** BCW mapping is valuable even if Capability is single-dimensional. Implement 5 first; use it to validate whether topic-level granularity is needed.

**Modifications to proposal:**
1. **Track knowledge types (declarative/procedural/conditional) from the start,** even if not fully operationalized. Practitioners should be aware these are distinct even if assessment doesn't break them out yet.
2. **Plan Phase 3 work:** Domain-by-domain capability redesign (statistics, pedagogy, management, etc.). Make this a research agenda, not a crisis response.
3. **Gather data in Phase 2:** When implementing basic LVA, track whether practitioners notice that learners are at different capability levels for different topics. Use this data to justify Phase 3 investment.

**Implementation timeline:**
- **Phase 2 (current, Months 1–6):** Implement basic LVA with single Capability dimension; gather evidence on topic-specificity
- **Phase 3 (Months 7–12):** Design multi-topic, multi-knowledge-type assessments for 2–3 priority domains; pilot
- **Phase 4 (2027):** Roll out multi-dimensional Capability across all domains

---

## PROPOSAL 5: BCW INTERVENTION OVERLAY

### Problem Statement

**The LVA diagnoses learner state (E/C/P/O) but provides limited, underdeveloped intervention guidance. The Behavior Change Wheel (BCW) offers a comprehensive, evidence-based taxonomy of intervention functions that should be systematically mapped to LVA level transitions.**

Stage 1.4 (Behavior Change Report) identifies that:

1. **The LVA's intervention vocabulary is sparse.** The framework typically recommends one or two generic interventions per level transition (e.g., "for Capability L1→L2, use retention by design"; "for Portability L2→L3, encourage reflection"). This is prescriptively insufficient.

2. **The BCW offers a richer taxonomy.** The Behavior Change Wheel (Michie et al., 2011; Michie & Atkins, 2019) identifies nine intervention functions:
   - Education, Persuasion, Incentivisation, Coercion, Training, Restriction, Environmental Restructuring, Modelling, Enablement

   Each function can be deployed across seven policy channels (legislation, regulation, fiscal measures, service provision, communication/marketing, guidelines, environmental/social planning).

3. **The same level transition can use multiple intervention functions strategically.** For example, L3 (Compliant) → L4 (Strategic) Engagement can use:
   - **Training** (teach metacognitive strategies for goal-setting and planning)
   - **Persuasion** (connect to learner's personal values; show why strategic engagement matters)
   - **Enablement** (provide tools for self-directed learning)
   - **Modelling** (show how strategic learners approach problems)

   The choice among these depends on the learner's context, constraints, and what's feasible.

**Current limitation:** The LVA diagnoses the learner's position but doesn't systematically guide the practitioner through intervention function selection. This leaves practitioners to develop interventions ad-hoc, losing the evidentiary foundation that the BCW provides.

### Proposed Modification

**Map each LVA level transition to applicable BCW intervention functions. Create a diagnosis → intervention selection matrix.**

**Structure:**

1. **For each dimension (Engagement, Capability, Portability, Opportunity) and each level transition (L1→L2, L2→L3, etc.):**

2. **Identify the primary BCW intervention functions that are evidence-based for this transition**

3. **Provide policy channels through which functions can be deployed**

4. **Create decision logic: Which function(s) to prioritize in this context?**

**Example: Engagement Dimension Mapping**

| Transition | Primary Functions | Secondary | Policy Channels | Context |
|-----------|------------------|-----------|-----------------|---------|
| **E1→E2** (Absent → Disoriented) | Education, Persuasion, Modelling | Enablement | Communication/Marketing, Service Provision, Guidelines | Goal: Generate interest; show relevance |
| **E2→E3** (Disoriented → Compliant) | Incentivisation, Restriction, Enablement, Modelling | Persuasion | Service Provision, Fiscal Measures, Environmental Restructuring | Goal: Lower barriers; provide extrinsic motivation |
| **E3→E4** (Compliant → Strategic) | Training (metacognitive), Persuasion (values-based), Enablement (tools), Modelling | Incentivisation | Service Provision, Guidelines, Communication | Goal: Develop agency; connect to values |
| **E4→E5** (Strategic → Committed) | Persuasion (identity-based), Modelling (peer commitment), Enablement (community), Environmental Restructuring (norms) | Training | Service Provision, Communication, Environmental Restructuring | Goal: Integrate identity; build belonging |
| **E5→E6** (Committed → Aligned) | Modelling (identity-aligned exemplars), Enablement (autonomy-supportive contexts), Environmental Restructuring (culture) | Persuasion | Environmental Restructuring, Communication | Goal: Make behavior automatic and identity-merged |

**Example: Capability Dimension Mapping**

| Transition | Primary Functions | Secondary | Policy Channels | Context |
|-----------|------------------|-----------|-----------------|---------|
| **C1→C2** (Absent → Inert) | Education (instruction), Modelling (demonstration), Training (foundational skills) | Enablement | Service Provision, Guidelines | Goal: Acquire basic knowledge and consolidated memory |
| **C2→C3** (Inert → Imitative) | Training (deliberate practice), Modelling (exemplars), Enablement (scaffolding) | Persuasion | Service Provision, Guidelines | Goal: Develop procedural knowledge; imitate experts |
| **C3→C4** (Imitative → Context-Bound) | Training (adaptive practice), Modelling (varied exemplars), Enablement (feedback systems) | Persuasion | Service Provision, Environmental Restructuring | Goal: Begin adapting; understand constraints |
| **C4→C5** (Context-Bound → Effortful) | Training (principles-based, varied contexts), Modelling (adaptive expertise), Enablement (challenging tasks) | Persuasion | Service Provision, Guidelines | Goal: Transfer across related contexts; develop principles |
| **C5→C6** (Effortful → Fluent) | Training (automaticity building), Modelling (fluent exemplars), Enablement (high-demand practice) | Persuasion | Service Provision, Environmental Restructuring | Goal: Automaticity; reduce cognitive load |
| **C6→C7** (Fluent → Generative) | Modelling (innovation/creation exemplars), Training (meta-skill development), Enablement (creation platforms) | Persuasion | Service Provision, Environmental Restructuring | Goal: Create new knowledge; teach others |

**Example: Opportunity Dimension Mapping**

| Transition | Primary Functions | Secondary | Policy Channels | Context |
|-----------|------------------|-----------|-----------------|---------|
| **O1→O2** (Blocked → Fragmented) | Environmental Restructuring (remove barriers), Enablement (increase access), Persuasion (argue for resource allocation) | Restriction (remove policies blocking) | Environmental/Social Planning, Fiscal Measures, Legislation | Goal: Create *some* opportunity; negotiate resources |
| **O2→O3** (Fragmented → Structured) | Environmental Restructuring (standardize), Restriction (mandate use), Enablement (system design) | Incentivisation (tie to evaluation) | Service Provision, Environmental Restructuring, Regulation | Goal: Make opportunity consistent and reliable |
| **O3→O4** (Structured → Discretionary) | Enablement (maintain access), Incentivisation (optional rewards), Modelling (normalize behavior) | Persuasion | Service Provision, Guidelines, Communication | Goal: Transition from mandate to choice |
| **O4→O5** (Discretionary → Self-Directed) | Enablement (provide authority/resources), Modelling (champion examples), Training (leadership skills) | Persuasion | Service Provision, Environmental Restructuring | Goal: Support learner autonomy in creating conditions |
| **O5→O6** (Self-Directed → Systemic) | Environmental Restructuring (institution design), Modelling (cultural embedding), Enablement (scale platforms) | Persuasion, Restriction | Environmental/Social Planning, Guidelines, Regulation | Goal: Make behavior the default; system design for it |

**Decision Logic (Practitioner Flowchart):**

When a learner is identified as, e.g., E3 (Compliant) and needs to move to E4 (Strategic):

1. **Check context:**
   - Is this an individual learner or cohort? (Affects policy channels)
   - What resources are available? (Affects feasibility of functions)
   - What is the time horizon? (Quick win vs. long-term change)

2. **Consider learner needs:**
   - Does the learner lack metacognitive skills? → Training is primary
   - Does the learner lack motivation to be strategic? → Persuasion is primary
   - Does the learner have tools but lack confidence? → Enablement is primary
   - Does the learner lack models of strategic learning? → Modelling is primary

3. **Select policy channel:**
   - **Service Provision:** Direct teaching, coaching, workshops
   - **Communication/Marketing:** Campaigns, messaging, social proof
   - **Guidelines:** Best practice standards, competency frameworks
   - **Environmental Restructuring:** Design changes to learning spaces, systems
   - **Fiscal/Regulation:** Incentives, policies, mandates

4. **Match function to channel:**
   - Training typically via Service Provision or Guidelines
   - Persuasion via Communication, Service Provision, or Environmental Restructuring
   - Modelling via Communication, Service Provision, or Environmental Restructuring
   - Enablement via Service Provision or Environmental Restructuring
   - Restriction via Regulation or Guidelines

**Output: Intervention Selection Matrix**

```
Learner: [Name]
Current State: E3-C4-P2-O3

Goal: Move to E4-C5-P3-O4

Recommended Interventions:

1. ENGAGEMENT (E3→E4):
   - Primary Functions: Training (metacognition), Persuasion (values)
   - Specific Actions:
     • Training: Teach goal-setting and planning strategies (Service Provision: workshop or coaching)
     • Persuasion: Connect learning to learner's personal values (Communication: conversation, messaging)
   - Timeline: 4-8 weeks
   - Success Metrics: Learner reports intentional goal-setting; articulates personal relevance

2. CAPABILITY (C4→C5):
   - Primary Functions: Training (principles-based), Modelling (varied contexts)
   - Specific Actions:
     • Training: Teach underlying principles; provide practice in varied contexts (Service Provision: guided practice in 3+ contexts)
     • Modelling: Show expert adapting to different contexts (Communication, Service Provision: videos, case studies)
   - Timeline: 8-12 weeks
   - Success Metrics: Learner can apply in ≥3 novel contexts; articulates underlying principles

3. OPPORTUNITY (O3→O4):
   - Primary Functions: Enablement (maintain access), Incentivisation (optional rewards)
   - Specific Actions:
     • Enablement: Ensure learner has discretionary access to tools/resources (Environmental Restructuring: remove mandates; Service Provision: make available)
     • Incentivisation: Tie optional benefits to use (Fiscal: badges, recognition, advancement)
   - Timeline: 2-4 weeks
   - Success Metrics: Learner can choose when/how to apply; resources remain accessible

Overall Implementation: 12-week blended intervention using workshops, coaching, peer modelling, and systems change.
```

### Evidence Base

**BCW Intervention Functions:**
- Michie, S., van Stralen, M. M., & West, R. (2011). The behaviour change wheel: A new method for characterising and designing behaviour change interventions. *Implementation Science*, 6, 42. Foundational taxonomy of nine intervention functions.
- Michie, S., & Atkins, L. (2019). *Designing and implementing behaviour change interventions: An evidence-based workbook*. BCW applied to real-world contexts; evidence for effectiveness of each function.

**Mapping BCW to LVA:**
- Stage 1.4 (Behavior Change Report) provides initial mapping of BCW functions to LVA level transitions (Sections 2.1–2.3).
- This proposal extends and operationalizes that mapping into a usable practitioner tool.

**Evidence for specific function-outcome links:**
- **Education → Capability development (C1→C2):** Metaanalytic evidence that instruction increases knowledge acquisition (Hattie, 2009, *Visible Learning*)
- **Training + Modelling → Skill development (C2→C4):** Worked examples, deliberate practice, vicarious learning (Sweller, Ayres, Kalyuga cognitive load theory)
- **Persuasion + Values-alignment → Engagement development (E3→E4):** Self-Determination Theory (Deci & Ryan) shows values-based motivation is more durable than external
- **Modelling + Enablement → Committed Engagement (E4→E5):** Social identity theory (Tajfel & Turner); peer influence and belonging increase commitment
- **Environmental Restructuring → Opportunity improvement (O1→O5):** COM-B framework; opportunity is a primary determinant of sustained behavior

### MECE Impact Analysis

**Does the BCW overlay break MECE?**

**No.** The BCW is orthogonal to the E/C/P/O dimensions:
- E/C/P/O diagnoses *what* is the learner's state and *where* do they need to progress
- BCW identifies *how* to facilitate that progression (what intervention functions to use)
- The two frameworks answer different questions; they complement each other

**One potential concern:** Does selecting "Training" as an intervention function when moving E3→E4 mean we're conflating Engagement development with Capability development?

**Response:** No. The Training function is being applied to develop metacognitive skills (how to set goals, plan learning), which are Engagement-adjacent (metacognition supports strategic choice) but are not Capability assessment. We're using a behavioral training intervention to support Engagement development. The distinction is maintained.

**MECE verdict:** MECE is preserved. The BCW functions are a complementary prescription layer, not a competing diagnostic framework.

### Implementation Requirements

1. **Complete BCW → LVA mapping:**
   - Map all nine BCW functions to each LVA dimension
   - For each level transition (L1→L2, L2→L3, etc., across all four dimensions), specify:
     - Primary intervention functions (top 2–3 that are most evidence-based)
     - Secondary functions (applicable but less direct)
     - Policy channels through which to deploy each function
     - Context considerations (when to use which function)
   - Create matrices similar to the examples above, fully developed

2. **Develop practitioner decision trees:**
   - "Learner is at E3. Goal is E4. What intervention functions should I consider?"
   - Decision points: Learner context, available resources, time horizon, learner preferences
   - Output: Recommended primary and secondary functions; suggested policy channels

3. **Create intervention specification templates:**
   - For each BCW function (Education, Training, Persuasion, etc.), develop a template that helps practitioners operationalize the function
   - Example for "Training (metacognitive skills)":
     - Definition: Teaching goal-setting, self-monitoring, planning, reflection
     - Evidence base: Metacognitive training improves self-regulated learning
     - Typical delivery: Workshop (2–4 hours), coaching (4–8 sessions), or self-paced materials
     - Success indicators: Learner articulates goals, monitors progress, adjusts strategy
     - Common pitfalls: Over-emphasis on techniques without connecting to learner values; insufficient practice

4. **Develop policy channel guidance:**
   - For each policy channel (Service Provision, Communication/Marketing, etc.), explain:
     - What it is (brief definition)
     - Which BCW functions it supports best
     - Examples in learning contexts
     - Feasibility (cost, timeline, complexity)
   - Help practitioners understand which channels are available in their context

5. **Create case examples:**
   - Develop 5–10 detailed case studies showing:
     - Initial LVA diagnosis (E/C/P/O)
     - Goal state
     - Intervention design using BCW functions
     - Implementation timeline and success metrics
     - Lessons learned
   - Examples across contexts (corporate training, higher ed, online learning, K-12)

6. **Integrate with existing LVA assessment:**
   - When administering LVA, automatically generate intervention recommendations based on BCW mapping
   - Provide practitioners with a printed/digital report that shows:
     - Current state (E/C/P/O)
     - Recommended level transitions (priority order)
     - Primary and secondary BCW functions
     - Suggested policy channels
     - Timeline and resource estimates

7. **Develop evaluation framework:**
   - How do we know if a BCW intervention worked?
   - Define success metrics for each level transition
   - Create tracking mechanisms for practitioners
   - Gather data on which functions work best for which transitions (iterative learning)

### Risks and Downsides

**Risk 1: Practitioners lack training in BCW**
- The BCW is not commonly known in L&D; practitioners may not understand the intervention functions or how to deploy them.
- **Mitigation:** Develop a practitioner training program (2-day workshop or online course) on BCW fundamentals, function definitions, policy channels, and case examples. Make BCW training a prerequisite for advanced LVA consulting.

**Risk 2: BCW functions are difficult to implement in some contexts**
- Some policy channels are not available. A classroom teacher can't use "Regulation" or "Fiscal Measures" to address Capability gaps. A corporate L&D function might not control "Environmental Restructuring" (that's HR/facilities).
- **Mitigation:** Develop context-specific decision trees. For classroom teachers, emphasize "Service Provision" (direct teaching) and "Communication/Marketing" (messaging to students). For corporate, emphasize "Service Provision" (courses, coaching) and "Guidelines" (competency frameworks). Help practitioners work within their available channels.

**Risk 3: Intervention selection becomes overwhelming**
- With 9 functions × 7 channels × multiple level transitions, there are hundreds of possible combinations. Practitioners might feel paralyzed by options.
- **Mitigation:** Start with primary functions for each transition. Simplify the decision: "For E3→E4, focus on Training (metacognition) and Persuasion (values). For your context, which policy channel is most feasible?" Provide simplified decision trees that narrow options to 2–3 recommendations per transition.

**Risk 4: BCW adds complexity without benefit if LVA basics aren't solid**
- If practitioners are still struggling to assess E/C/P accurately, adding BCW intervention guidance might feel like extra burden without payoff.
- **Mitigation:** Implement in phases. Phases 2a: Master LVA diagnostics. Phase 2b: Integrate BCW. Don't try to do both simultaneously. Emphasize that BCW is a *simplification* tool (provides taxonomy so practitioners don't invent interventions from scratch).

**Risk 5: Evidence base for BCW function effectiveness varies**
- Some BCW functions (e.g., Training) are strongly evidence-based. Others (e.g., Coercion) are more controversial or context-dependent. Practitioners might implement weaker-evidence functions.
- **Mitigation:** In the BCW mapping, explicitly note the evidence strength for each function-transition combination. Use color-coding: Green (strong evidence), Yellow (moderate evidence), Red (weak/contextual evidence). Help practitioners understand when they're on solid evidence vs. making a judgment call.

### Recommendation: **ACCEPT**

**Rationale:**

The BCW is well-validated, evidence-based, and widely used in behavior change science. Mapping it to the LVA is a natural fit—the LVA diagnoses *where* learners are; the BCW prescribes *how* to move them. This proposal directly addresses the identified gap in the LVA's intervention vocabulary.

Stage 1.4 explicitly recommends this integration: "The LVA should position itself as a **diagnostic framework**, not an intervention framework. Once the LVA diagnosis is made, practitioners consult the BCW to select intervention functions."

**Modifications:**
1. **Develop simplified decision trees** that narrow intervention options to 2–3 primary recommendations per transition. Avoid overwhelming practitioners with 9-function options.
2. **Include evidence-strength ratings** for each function-transition recommendation.
3. **Create context-specific implementations** (classroom, corporate, online, K-12) showing which policy channels are feasible in each setting.
4. **Integrate into LVA assessment tool:** When LVA diagnostic is complete, automatically generate BCW intervention recommendations.

**Implementation timeline:**
- **Month 1–2:** Complete BCW mapping across all level transitions (all four dimensions)
- **Month 2–3:** Develop decision trees, evidence-strength ratings, context-specific guidance
- **Month 3–4:** Create practitioner training program and case examples
- **Month 4–5:** Integrate BCW recommendations into LVA assessment tool
- **Month 5–6:** Pilot with practitioners; gather feedback on usability and feasibility
- **Month 6+:** Full rollout with BCW as standard intervention overlay

---

## PROPOSAL 6: AI AUGMENTATION FRAMEWORK

### Problem Statement

**AI tools fundamentally change what "capability" means; learners increasingly operate as learner-AI systems, not as individuals—but the LVA treats capability as individual-only, ignoring AI augmentation and dependency.**

Current context (March 2026): Large language models (GPT, Claude), code generation tools (GitHub Copilot), tutoring systems (AI-powered tutors), and domain-specific tools (ChEMBL for drug discovery, architectural AI for design) are deeply embedded in knowledge work. Learners are not choosing to use these tools or not; they *are* expected to use them.

**The capability question changes:**
- **Traditional:** "Can the learner do X without tools?"
- **Contemporary:** "Can the learner do X using available tools effectively? Can they do X without tools if needed?"

**Why this matters:**

1. **AI capability is not the same as human capability.** A student using ChatGPT to draft an essay has augmented capability but not the same capability as one who drafts from first principles. The LVA can't distinguish between them currently.

2. **AI dependency is a new risk.** A learner might be L5 (Effortful) with AI tools but only L2 (Inert) without them. When tools are unavailable (exam, crisis, tool outage), they fail. This is a distinct diagnostic category: "AI-dependent capability."

3. **Transfer changes with AI.** Transfer (Portability) traditionally meant "can apply to new contexts using the same tools." Now it means "can identify when to use AI, which AI tool to use, and how to prompt it for this context." This is a new skill.

4. **Precedents exist.** The calculator debate (1970s–1990s) in mathematics education raised the same question: if calculators do arithmetic, what capability matters? Answer: conceptual understanding (knowing *when* to calculate) and interpretation (knowing *what* the answer means). Later: spreadsheets in accounting raised the same question. AI is the same question at scale.

**Current LVA limitation:** The framework assesses "learner capability" as if the learner is isolated. But learners are not isolated; they operate within an AI-augmented technological context. The diagnostic should assess:
- Unaugmented capability (what they can do without AI)
- Augmented capability (what they can do with AI)
- AI literacy (understanding how to use AI effectively)
- AI dependency (how reliant are they on AI?)

### Proposed Modification

**Dual assessment model: Capability with-AI and Capability without-AI, plus AI literacy and dependency metrics.**

**Structure:**

For each topic/knowledge type, assess:

1. **Capability Without AI (CwithoutAI):**
   - Traditional LVA Capability L1–L7
   - What can the learner do using only their own knowledge and foundational tools (calculator, pen and paper)?
   - Example: A student writing an essay without ChatGPT

2. **Capability With AI (CwithAI):**
   - Enhanced/augmented capability when AI tools are available and used effectively
   - Levels L1–L7 but in the context of AI-augmented work
   - Example: A student writing an essay using ChatGPT for brainstorming and editing

3. **AI Literacy (AIL):**
   - Ability to recognize when AI is useful, select appropriate tools, prompt/use them effectively, and interpret AI outputs critically
   - Scale (L1–L5):
     - **L1 (Absent):** No AI experience or understanding
     - **L2 (Novice):** Can use basic AI tools (e.g., ChatGPT) with explicit instructions but doesn't know when to use them
     - **L3 (Competent):** Can select appropriate AI tools for common tasks; understands limitations
     - **L4 (Advanced):** Can prompt AI effectively; understands how different tools work; evaluates AI output critically
     - **L5 (Expert):** Can design workflows integrating multiple AI tools; understands fine-tuning, RAG, and advanced techniques

4. **AI Dependency Index (ADI):**
   - Quantifies how reliant the learner is on AI for capability performance
   - **ADI = (CwithAI - CwithoutAI) / CwithAI**
   - High ADI (e.g., 0.7) = learner's capability depends heavily on AI; without AI, performance drops significantly
   - Low ADI (e.g., 0.2) = learner has solid capability independent of AI; AI augments but doesn't replace

**Example: Software Development**

```
Developer: [Name]

Capability Profile:

Without AI (CwithoutAI):
- Declarative (programming concepts): L4
- Procedural (code writing): L4
- Conditional (debugging, optimization): L3

With AI (CwithAI):
- Declarative: L5 (AI helps explain concepts)
- Procedural: L5 (AI generates boilerplate; developer adapts)
- Conditional: L4 (AI helps debug but developer still understands root causes)

AI Literacy: L3 (Competent—knows how to use Copilot; prompts well; evaluates code)

AI Dependency Index:
- Declarative: 0.2 (high independent capability)
- Procedural: 0.5 (moderate AI dependence)
- Conditional: 0.3 (uses AI as secondary tool)
- Overall: 0.35 (moderate AI augmentation)

Interpretation:
- Without AI: Solid L4 programmer
- With AI: L5-level productivity (uses tools effectively)
- Risk: If AI tools become unavailable, drops to L4 (manageable)
- Strength: High AI literacy; makes intentional choices about tool use
- Development goal: Increase CwithoutAI to L5 (reduce dependency from 0.35 to 0.2)
```

**Capability Profile With Both Dimensions:**

| Knowledge Type | CwithoutAI | CwithAI | AIL | ADI | Interpretation |
|---|---|---|---|---|---|
| Concept Understanding | L3 | L5 | L3 | 0.4 | AI augments learning; learner understands but AI speeds access |
| Code Generation | L3 | L5 | L4 | 0.6 | Heavy AI dependence; learner can iterate AI outputs but struggles to write original code |
| Debugging | L4 | L4 | L2 | 0.0 | AI doesn't augment; learner prefers manual debugging |
| Optimization | L2 | L4 | L3 | 0.5 | AI is essential; learner doesn't optimize manually |

**Portability With AI:**

Add AI dimension to Portability as well:
- **P without AI:** Can articulate learning and transfer to new contexts without AI
- **P with AI:** Can articulate learning and use AI to apply to novel contexts
- **AI Literacy for Portability:** Can explain to others how to use AI for transfer

Example:
- A teacher might be P4 (Self-Directed) in designing lessons without AI, but P5 (Translated) when using AI for lesson customization and adaptation.

### Evidence Base

**AI-Augmented Capability:**
- Agrawal, A., Gans, J., & Goldfarb, A. (2018). *Prediction Machines: The Simple Economics of Artificial Intelligence*. MIT Press. AI changes what types of work are valuable; prediction becomes cheaper, decision-making becomes more valuable.
- Brynjolfsson, E., & McAfee, A. (2014). *The Second Machine Age: Work, Progress, and Prosperity in a Time of Brilliant Technologies*. W.W. Norton. Discusses how technology augments human capability; not all augmentation is healthy (may create dependence).

**Calculator Precedent:**
- Groves, S. (1994). The effect of calculator use on elementary students' understanding of the standard algorithm for multiplication. In Heuvel-Panhuizen, M. (Ed.), *Children Learn Mathematics* (pp. 144–159). Utrecht: Freudenthal Institute. Shows that calculator use *without* conceptual understanding produces brittle capability; with conceptual understanding, it enhances learning.
- Stacey, K., & Groves, S. (1999). *Calculators in Primary Mathematics: Exploring Number Before Teaching Algorithms*. In *Teaching Mathematics in the Middle Years* (pp. 120–147). Shows optimal use of calculators requires strong conceptual understanding first.

**AI Literacy and Effective Use:**
- Selwyn, N. (2019). *Artificial Intelligence and Education: Critical Perspectives and Challenges*. Questions whether AI tools are developing capability or creating pseudo-capability.
- Dignum, V. (2019). *Responsible Artificial Intelligence: How to Develop and Use AI in a Responsible Way*. Discusses the need for AI literacy and critical evaluation of AI outputs.

**Contemporary Evidence (2025–2026):**
- Recent studies (OpenAI, Anthropic, DeepSeek) show that users of LLMs develop new skills (effective prompting, output evaluation) but may atrophy other skills (original writing, deep thinking in the absence of feedback).

**Stage 2.1 Implicit Evidence:**
- While not explicitly addressed in Phase 1 documents, the emergence of AI in professional practice is a documented contextual shift.

### MECE Impact Analysis

**Does adding AI dimensions break MECE?**

**Not if:**
- AI dimensions are clearly distinguished from baseline capability (with-AI vs. without-AI are orthogonal assessments)
- AI Literacy is a separate dimension from Capability (assesses the ability to use AI, not what the learner can accomplish)
- AI Dependency Index is a derived metric (calculated from CwithAI and CwithoutAI), not a primary dimension

**Concern:** Does "Capability with AI" blur the boundary between Capability (individual skill) and Opportunity (environment/tools available)?

**Response:**
- **Capability with AI** assesses what the learner can accomplish *using available tools effectively*. It's a realistic capability assessment in a contemporary context.
- **Opportunity** assesses whether tools/resources are available. A learner might have high Capability-with-AI but zero Opportunity (tools are restricted or unavailable).
- Example: L5 Capability-with-AI + O1 Opportunity (tools are blocked) = learner is ready to use AI but can't. This is a system barrier, not a capability barrier.

**MECE verdict:** MECE is preserved if AI dimensions are framed as *augmented capability*, not a separate category. The Engagement and Portability dimensions remain unchanged; Capability is expanded to include AI-augmented performance.

### Implementation Requirements

1. **Develop AI Literacy assessment (New):**
   - 5–6 items assessing understanding of AI tools, when to use them, prompting effectiveness, critical evaluation
   - Example items:
     - "I know which AI tools are available for my domain"
     - "I can write effective prompts to get useful output"
     - "I can evaluate AI output for accuracy and bias"
     - "I understand when AI is helpful vs. when I should solve problems myself"
   - Scoring: L1–L5 scale

2. **Modify Capability assessment to be tool-explicit:**
   - For each capability level, add two versions:
     - "Capability without AI-augmented tools: Can you do this using only foundational tools (pen/paper, calculator, dictionary)?"
     - "Capability with AI-augmented tools: Can you do this using available AI tools (LLMs, coding assistants, domain-specific AI)?"
   - Scoring: L1–L7 scale for each

3. **Calculate AI Dependency Index:**
   - Formula: (CwithAI - CwithoutAI) / CwithAI
   - Interpretation:
     - 0–0.2 = Low dependency (learner has solid independent capability; AI is augmentation)
     - 0.2–0.4 = Moderate dependency (learner relies on AI for efficiency but can perform independently)
     - 0.4–0.6 = High dependency (learner can perform with AI but struggles independently)
     - 0.6+ = Very high dependency (learner's capability is largely AI-enabled; independent performance is weak)

4. **Develop learner profiles:**
   - For each learner, provide a visual profile showing:
     - CwithoutAI score
     - CwithAI score
     - AI Literacy
     - ADI (plotted as a ratio)
   - Example: "This learner is L4 without AI, L6 with AI, AI Literacy L3, ADI 0.33" = solid independent capability, well-augmented by AI, adequate understanding of AI, moderate dependence

5. **Create development recommendations:**
   - If ADI is very high (0.6+): Recommend developing independent capability alongside AI skills (reduce dependency)
   - If AIL is low: Recommend AI literacy training
   - If CwithoutAI is much lower than CwithAI: Recommend identifying which AI capabilities are strongest and building independent capability in those areas

6. **Assess Portability with AI:**
   - Can the learner articulate their approach using AI?
   - Can they explain to others how to use AI for this task?
   - Can they transfer their learning to new contexts using AI?
   - Add AI-literacy dimension to Portability assessment

7. **Develop case examples:**
   - "A student gets L5 essays with ChatGPT but L2 without it (ADI 0.6, AIL L2)" → needs AIL development + independent writing practice
   - "A data scientist gets L5 analysis with Python/AI but L3 without it (ADI 0.4, AIL L4)" → good balance; focus on domain expertise
   - "An engineer gets L4 designs with generative AI but L4 without it (ADI 0.0)" → AI is a choice, not a dependency

8. **Establish institutional policy on AI use:**
   - When should learners be assessed with-AI vs. without-AI?
   - What is the institutional goal (reduce dependency, embrace augmentation, or context-dependent)?
   - Example policies:
     - **Policy A (Augmentation-focused):** Teach with-AI from the start; assess both dimensions; celebrate augmentation; ensure AIL is high
     - **Policy B (Independence-first):** Teach without-AI first; add AI only after foundation is solid; assess both; work to minimize ADI
     - **Policy C (Context-matched):** For professional practice, prioritize with-AI; for foundational learning, prioritize without-AI

9. **Create longitudinal tracking:**
   - As learners progress, track:
     - Is CwithoutAI increasing (building independent capability)?
     - Is CwithAI increasing (deepening AI-augmented capability)?
     - Is AIL increasing (becoming more sophisticated in AI use)?
     - Is ADI stable or decreasing (reducing dependency)?
   - Use data to refine development recommendations

### Risks and Downsides

**Risk 1: AI tools are rapidly evolving; framework will be obsolete**
- LLMs today are Claude/GPT. In 2 years, tools will be more capable or different. The assessment might not generalize.
- **Mitigation:** Frame AI Literacy as a general capability (ability to learn new tools, adapt to change) rather than tool-specific knowledge. Update AI tools listed annually. Make the framework flexible to future tool changes.

**Risk 2: AI dependency might be viewed negatively, discouraging honest reporting**
- If institutional culture views "AI dependency" as a weakness, learners might underreport AI use, or institutions might penalize high ADI.
- **Mitigation:** Establish explicitly that AI dependency is context-dependent. "A radiologist with high AI dependency on diagnostic AI is good (AI is more reliable); a surgeon should have low dependency on AI for diagnosis." Make clear that the goal is *appropriate* use, not always independence.

**Risk 3: Comparing capability with and without AI might be unfair**
- It's like comparing a surgeon's capability with and without instruments. The with-instruments assessment is the relevant one for actual performance. Without-instruments is artificial.
- **Mitigation:** Acknowledge this. Frame CwithoutAI as a "foundational knowledge" check, not the primary capability. Use CwithAI as the operational assessment. But track both so we understand the dependency and can intervene if tools become unavailable.

**Risk 4: AI Literacy assessment might be too granular**
- Distinguishing L1–L5 AI Literacy might create false precision. Most practitioners would benefit from simpler "AI literacy: yes/no" or "basic/intermediate/advanced."
- **Mitigation:** Start with 3-level AIL (Basic, Intermediate, Advanced) and expand to 5 levels only if practitioners find it useful.

**Risk 5: Ethical and equity concerns**
- If institutions prioritize CwithAI over CwithoutAI, they may neglect independent capability development, creating equity issues. Low-income learners with less access to AI tools might appear less capable.
- **Mitigation:** Ensure equal access to AI tools (or explicitly assess equity barriers in Opportunity dimension). Recommend institutional policies that build both independent and augmented capability. Don't use ADI as a comparison metric between learners (it's context-dependent).

**Risk 6: Assessment becomes even more complex**
- The LVA is already complex (E/C/P). Adding with-AI and without-AI dimensions doubles the Capability assessment burden.
- **Mitigation:** Use adaptive assessment. Only assess both dimensions if relevant (i.e., if AI tools are available in the learning context). Streamline to 3–4 questions per dimension rather than comprehensive assessment.

### Recommendation: **MODIFY AND DEFER (to Phase 3)**

**Rationale:**

The proposal is well-grounded in emerging reality (AI is ubiquitous in 2026 knowledge work) and precedent (calculator debates, spreadsheet debates). However:

1. **AI tools and practices are still rapidly evolving.** In 2026, we don't yet have consensus on best practices for AI-augmented learning, appropriate AI literacy curricula, or institutional policies around AI use. The framework would be more stable if implemented after 1–2 more years of practice evolution.

2. **Proposal could be misused to justify over-reliance on AI.** If implemented immediately without clear institutional policy, it could be used to argue "learners don't need to develop independent capability; just teach AI use." This would be harmful. Better to wait until institutional maturity around AI ethics and policy is higher.

3. **Proposals 1–5 don't depend on Proposal 6.** The LVA works without AI augmentation framework. Implement core LVA first; add AI layer after proving the framework's value.

4. **Implementation is easier after core LVA is mature.** Once practitioners are fluent with E/C/P/O assessment, adding with-AI and without-AI variants is straightforward. Introducing both simultaneously would be overwhelming.

**Modifications to proposal if pursuing immediately:**
1. **Start with AI Literacy only** (L1–L5 scale) as an accompanying diagnostic, not a full with-AI/without-AI capability duplicate
2. **Track it as an overlay,** not a core dimension
3. **Clarify institutional policy** on AI use before rolling out (is the goal independence, augmentation, or context-matched?)

**Implementation timeline:**
- **Phase 2 (current):** Develop AI Literacy assessment as a companion diagnostic; gather data on how AI is currently used in learning contexts
- **Phase 3 (Months 7–12):** Based on practice evolution and institutional policy, decide whether to implement full with-AI/without-AI dual assessment
- **Phase 4 (2027):** Full AI Augmentation Framework rollout if institutional context supports it

---

## SUMMARY AND PRIORITIZATION

| Proposal | Recommendation | Priority | Timeline |
|----------|---|---|---|
| **1. Affect/Belonging Integration** | Modify & Accept | HIGH | Month 1–4 (Phase 2) |
| **2. Opportunity Dimension** | Accept | CRITICAL | Month 1–6 (Phase 2) |
| **3. Collective/Multi-Level Extension** | Modify & Accept | HIGH | Month 1–8 (Phase 2, phased) |
| **4. Multi-Knowledge-Type Diagnostics** | Modify & Defer | MEDIUM | Phase 3 (Month 7–12) |
| **5. BCW Intervention Overlay** | Accept | HIGH | Month 1–6 (Phase 2) |
| **6. AI Augmentation Framework** | Modify & Defer | MEDIUM | Phase 3 (Month 7–12) |

**Phase 2 Implementation Plan (Months 1–6):**

1. **Months 1–2:**
   - Add Opportunity dimension (L1–L6 levels, assessment instrument, intervention mapping)
   - Expand Engagement to include automaticity and need satisfaction sub-layers
   - Begin development of team-level Engagement/Capability/Portability diagnostics

2. **Months 2–4:**
   - Complete BCW intervention function mapping across all level transitions
   - Develop practitioner decision trees and intervention selection guides
   - Finalize team-level diagnostic development

3. **Months 4–6:**
   - Pilot expanded LVA (E+automaticity+needs, C, P, O) with 2–3 organizations
   - Pilot BCW intervention overlay with practitioners
   - Pilot team-level diagnostic with 1–2 teams
   - Gather feedback; refine based on user experience

**Recommendation:** Pursue Proposals 1, 2, 3, and 5 in Phase 2. Defer Proposals 4 and 6 to Phase 3, with preliminary data gathering in Phase 2 to inform Phase 3 decisions.

---

## CONCLUSION

The six proposals represent a comprehensive extension and refinement of the LVA framework based on rigorous Phase 1–2 research. Proposals 1, 2, 3, and 5 address critical documented gaps (Opportunity, Automaticity/Belonging, Multi-level Learning, Intervention Systematicity) and should proceed immediately. Proposals 4 and 6 address emerging complexities (Topic-Specificity, AI Augmentation) that are better addressed after core framework maturity.

Implemented strategically, these modifications position the LVA as a comprehensive, evidence-based diagnostic system with clear prescriptive pathways, organizational applicability, and integration with established behavior change frameworks.

