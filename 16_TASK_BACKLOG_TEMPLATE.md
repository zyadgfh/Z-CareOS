# 16 --- Task Backlog Template

Use this template for every future CareOS task. Do not move a task to
implementation until the relevant phase and approval gate authorize it.

## Task record

-   **Task ID:**
-   **Title:**
-   **Phase / Workstream:**
-   **Priority:** P0 / P1 / P2 / P3
-   **Status:** Proposed / Ready / In Progress / Review / Blocked / Done
-   **Owner:**
-   **Approver:**
-   **Related requirement(s):**
-   **Dependencies:**
-   **Evidence/source:**

### Problem and outcome

-   User problem:
-   Desired outcome:
-   Why this matters now:
-   Evidence strength: Observed / Repeated interview evidence /
    Hypothesis

### Scope

-   In scope:
-   Out of scope:
-   Assumptions:
-   Constraints:

### Skill requirements

-   Relevant skill command(s):
-   Has each skill instruction been inspected? Yes / No
-   Skill-specific constraints:
-   Expected deliverables:

### Acceptance criteria

Use observable, testable statements: - \[ \] Given ..., when ..., then
... - \[ \] Authorization and tenant boundary behavior verified. - \[ \]
Error and empty states defined. - \[ \] Accessibility and RTL/LTR
behavior checked where applicable. - \[ \] Logging/analytics do not
expose unnecessary sensitive data. - \[ \] Tests and review evidence
attached.

### Security / privacy / compliance impact

-   Data classification:
-   Personal/health data involved? Yes / No / Unknown
-   Tenant isolation impact:
-   Threats and mitigations:
-   Legal review required? Yes / No / To determine
-   Retention/export/deletion impact:

### Estimate and delivery

-   Effort estimate:
-   Confidence:
-   External dependencies:
-   Cost impact:
-   Schedule impact:
-   Rollback or recovery plan:

### Completion evidence

-   Pull request / artifact reference (only after authorized
    implementation):
-   Tests:
-   Review:
-   Known limitations:
-   Gate affected:
-   Final approver and date:

------------------------------------------------------------------------

## Definition of Ready

A task is Ready only when: - the user problem and outcome are clear; -
scope and non-scope are explicit; - dependencies are known; - acceptance
criteria are testable; - security/privacy implications are assessed; -
relevant skill instructions have been inspected; - owner and approver
are assigned; - estimate and confidence are recorded.

## Definition of Done

A task is Done only when: - acceptance criteria pass; -
code/design/content review is complete as applicable; - required tests
and evidence exist; - security/privacy requirements are met; -
documentation is updated; - no unresolved critical defect remains; -
approver accepts the result.

## Change request template

-   Change requested:
-   Evidence:
-   User/business value:
-   Effort:
-   Security/legal impact:
-   Cost/schedule impact:
-   Scope to remove or defer:
-   Decision: Approve / Reject / Defer
-   Approver:
