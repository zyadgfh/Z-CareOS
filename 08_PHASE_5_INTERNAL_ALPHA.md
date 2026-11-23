# 08 --- Phase 5: Internal Alpha

**Indicative duration:** 2--3 weeks\
**Data policy:** Synthetic data only.

## Objectives

-   Validate complete workflows in a controlled environment.
-   Identify defects before exposing the product to pilot clinics.
-   Verify security, reliability, and support procedures.

## Test scenarios

1.  Account creation, login, logout, and session expiry.
2.  Role and permission boundaries.
3.  Tenant creation and tenant switching where supported.
4.  Patient create, search, edit, archive, and export.
5.  Appointment creation, rescheduling, cancellation, and status
    changes.
6.  Encounter creation, save, retrieve, and correction workflow.
7.  Specialty-specific clinical workflow.
8.  Document generation and retrieval where included.
9.  Billing/collection workflow where included.
10. Notification success, failure, retry, and user preferences.
11. Import/export validation and malformed input handling.
12. Concurrent edits and duplicate submissions.
13. Cross-tenant access attempts.
14. Backup, restore, and recovery exercises.
15. Monitoring, alerting, and incident escalation.

## Alpha test report

For each scenario record: - test ID and build version; - environment and
synthetic dataset version; - expected result; - actual result; -
pass/fail; - defect severity; - evidence; - owner and retest result.

## Defect severity

-   **Critical:** data exposure/loss, cross-tenant access, major
    security compromise, or core workflow unusable.
-   **High:** important workflow failure with no safe workaround.
-   **Medium:** degraded functionality with workaround.
-   **Low:** cosmetic or minor usability issue.

## Exit gate G5

-   Zero open critical defects.
-   No unresolved high-risk security findings.
-   Core end-to-end journeys pass.
-   Tenant isolation tests pass.
-   Backup restoration demonstrated.
-   Incident and support procedures rehearsed.
-   Pilot environment and data policy approved.

If a gate fails, fix and retest. Do not relabel unresolved defects to
meet a date.
