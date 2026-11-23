# 15 --- Skills, Design & Engineering Standards

## 1. Purpose

CareOS planning and future implementation must deliberately use the
user's available specialist skills rather than treating design, motion,
accessibility, and engineering quality as optional polish.

The user has explicitly named these skill commands: - `/appledesign1` -
`/gsap` - `/ancs`

The user also uses other skills ("and similar"). This document preserves
the exact command names without inventing undocumented definitions.
Before a task uses a skill, inspect that skill's actual instruction file
and follow its scope, prerequisites, constraints, and output
requirements.

## 2. Skill discovery and invocation policy

For every relevant task: 1. Identify whether a specialist skill applies.
2. Inspect the actual skill instructions before relying on it. 3. Record
the exact skill command/name and the task it supports. 4. Follow the
skill's required workflow and constraints. 5. Do not claim a skill was
used unless its instructions were actually available and applied. 6. If
a skill is unavailable, report that limitation; do not fabricate its
behavior. 7. Do not force a skill into an unrelated task.

## 3. Skill-to-workstream mapping

  -----------------------------------------------------------------------
  Skill                   Planning treatment      Expected application
                                                  area
  ----------------------- ----------------------- -----------------------
  `/appledesign1`         Explicit design-system  UX/UI direction, visual
                          and interface-design    hierarchy, mobile
                          skill to be inspected   interface quality,
                          before use              design review

  `/gsap`                 Explicit                Motion design,
                          motion/animation skill  transitions,
                          to be inspected before  interaction feedback,
                          use                     onboarding motion where
                                                  justified

  `/ancs`                 Exact command           Apply only to tasks
                          preserved; definition   covered by its actual
                          must be retrieved from  documented scope
                          its authoritative skill 
                          instructions            

  Other user skills       Discover and inspect    Map to the relevant
                          individually            design, engineering,
                                                  security, QA, or
                                                  workflow task
  -----------------------------------------------------------------------

Do not infer that `/ancs` means a particular framework or technique from
its name alone.

## 4. Design quality standards

-   Mobile-first does not mean mobile-only by assumption.
-   Prioritize task completion, readability, predictable navigation, and
    low cognitive load.
-   Support Arabic RTL and English LTR where required by the approved
    product scope.
-   Define typography, spacing, color, elevation, states, and responsive
    behavior in a coherent design system.
-   Include loading, empty, error, success, disabled,
    offline/poor-network, and permission-denied states.
-   Ensure forms are appropriate for clinical workflows and reduce
    duplicate entry.
-   Do not use animation where it delays clinical work or obscures
    important information.
-   Respect reduced-motion preferences and provide non-motion
    equivalents.
-   Maintain accessibility: contrast, focus, touch target, semantic
    labels, and keyboard/screen-reader behavior where applicable.

## 5. Motion standards (`/gsap`)

Use motion only when it improves orientation, hierarchy, feedback, or
continuity. - Motion must not delay critical clinical tasks. - Avoid
decorative animation in high-frequency data-entry flows. - Define
duration, easing, trigger, interruption, and reduced-motion behavior. -
Avoid motion that can be mistaken for a saved/confirmed clinical
action. - Test on lower-powered mobile devices and under constrained
network conditions. - Use the skill's own documented implementation
conventions after inspecting its instructions.

## 6. Design review checklist

-   Does the primary task have a clear entry point?
-   Can a practitioner complete the workflow with minimal steps?
-   Is critical patient context visible without unnecessary exposure?
-   Are destructive actions protected and reversible where appropriate?
-   Are save states and failure states unambiguous?
-   Is Arabic RTL behavior correct?
-   Does the interface remain usable on small screens?
-   Is motion purposeful and optional where required?
-   Have real users tested the prototype?

## 7. Engineering and AI-assisted development standards

-   AI-generated code must be reviewed, tested, and understood before
    acceptance.
-   No secrets in prompts, source control, logs, or screenshots.
-   No production or patient data in unapproved AI tools.
-   Keep changes scoped and reviewable.
-   Require tests for security-sensitive and tenant-scoped behavior.
-   Never allow an AI assistant to bypass approvals, access controls, or
    change-control rules.
-   Document architectural decisions and non-obvious trade-offs.

## 8. Skill usage record template

For each task, record: - Task ID: - Skill command: - Instruction
source/version: - Why the skill applies: - Required inputs: -
Constraints: - Output produced: - Review/test evidence: - Limitations or
unavailable guidance:

## 9. Approval boundary

This skill policy is a planning standard only. It does not authorize
installing skills, editing project files, invoking implementation
workflows, or changing the repository.
