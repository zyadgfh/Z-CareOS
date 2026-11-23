# CareOS --- Roadmap & Master Execution Plan

**Version:** 1.0\
**Baseline date:** 23 November 2026\
**Status:** Planning-only / Not authorized for implementation

## Purpose

This package converts the approved CareOS direction into an executable
planning system: phases, workstreams, task definitions, dependencies,
decision gates, acceptance criteria, metrics, risks, and skill-use
standards.

It is a planning artifact. It does **not** authorize coding, repository
changes, database changes, deployment, purchases, subscriptions, or use
of real patient data.

## Approved product baseline

-   Product: **CareOS**
-   Initial customer: **Solo practitioner**
-   Initial platform direction: **Mobile-first**
-   Pilot policy: **Hybrid** (limited pilot with a controlled transition
    to paid use)
-   Architecture direction: **Hybrid Modular Architecture**, starting
    with a modular monolith unless discovery proves otherwise
-   Specialty: **Not selected**; must be selected through market and
    workflow research
-   Initial market: Egypt
-   Strategic posture: **Continue Validation**; do not begin full MVP
    implementation before validation gates pass

## Package contents

  -------------------------------------------------------------------------------------
  File                                              Purpose
  ------------------------------------------------- -----------------------------------
  `01_MASTER_ROADMAP.md`                            Timeline, milestones, sequencing,
                                                    and executive overview

  `02_WORKSTREAMS_AND_OWNERSHIP.md`                 Parallel workstreams,
                                                    responsibilities, and outputs

  `03_PHASE_0_STRATEGIC_ALIGNMENT.md`               Strategy baseline and assumptions

  `04_PHASE_1_MARKET_DISCOVERY.md`                  Competitor testing, interviews,
                                                    specialty selection research

  `05_PHASE_2_PRODUCT_DEFINITION.md`                Product scope, prototype, MVP
                                                    boundaries, PRD acceptance

  `06_PHASE_3_ARCHITECTURE_READINESS.md`            Architecture, data, tenancy,
                                                    integrations, operational readiness

  `07_PHASE_4_MVP_BUILD_PLAN.md`                    Proposed MVP epics and
                                                    implementation acceptance criteria

  `08_PHASE_5_INTERNAL_ALPHA.md`                    Internal validation and
                                                    release-readiness checks

  `09_PHASE_6_HYBRID_PILOT.md`                      Controlled pilot, onboarding,
                                                    measurement, conversion

  `10_PHASE_7_COMMERCIAL_LAUNCH.md`                 Launch readiness, pricing, sales,
                                                    support, operations

  `11_PHASE_8_STABILIZATION_GROWTH.md`              Post-launch reliability, retention,
                                                    and expansion

  `12_STAGE_GATES_AND_DECISIONS.md`                 Go / Pivot / Hold / Stop decision
                                                    framework

  `13_KPIS_AND_MEASUREMENT.md`                      Metric definitions, targets, and
                                                    measurement rules

  `14_RISK_REGISTER.md`                             Product, market, security, legal,
                                                    delivery, and financial risks

  `15_SKILLS_AND_DESIGN_ENGINEERING_STANDARDS.md`   Required skill workflow, including
                                                    `/appledesign1`, `/gsap`, `/ancs`

  `16_TASK_BACKLOG_TEMPLATE.md`                     Reusable task template and
                                                    Definition of Ready/Done

  `17_ASSUMPTIONS_AND_OPEN_DECISIONS.md`            Explicit unknowns; prevents
                                                    assumptions becoming commitments
  -------------------------------------------------------------------------------------

## How to use this package

1.  Treat `01_MASTER_ROADMAP.md` as the navigation document.
2.  Complete Phase 1 before approving the final specialty and MVP scope.
3.  Use the stage gates in `12_STAGE_GATES_AND_DECISIONS.md`; phases do
    not advance automatically.
4.  Convert approved tasks into an issue tracker only after explicit
    authorization.
5.  Keep every decision traceable to evidence, an owner, a date, and a
    gate.
6.  Update assumptions and risks whenever research changes the plan.

## Mandatory change control

No implementation activity is authorized by this package. Before any
code, repository, database, cloud, deployment, paid-service, or
real-data action, obtain explicit approval for that specific scope.
