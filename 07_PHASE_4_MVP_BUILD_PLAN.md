# 07 --- Phase 4: MVP Build Plan

**Indicative duration:** 10--12 weeks after G3 approval\
**Status:** Proposed backlog structure; not implementation
authorization.

## 1. Delivery rules

-   Build only the approved PRD baseline.
-   Work in small, reviewable increments.
-   Every story has acceptance criteria and tests.
-   No real patient data in development or internal QA.
-   Security and privacy requirements are part of each epic, not a final
    checklist.
-   Do not add features merely because a competitor advertises them.

## 2. Proposed epics

  -----------------------------------------------------------------------
  Epic                    Scope                   Completion evidence
  ----------------------- ----------------------- -----------------------
  E01 Identity & Access   Authentication,         Auth and authorization
                          sessions, roles,        tests
                          permissions, MFA as     
                          required                

  E02 Tenant Workspace    Clinic profile, tenant  Isolation and access
                          context, secure         tests
                          settings                

  E03 Patient Management  Patient creation,       Validation, access,
                          search, update,         audit tests
                          archive/lifecycle       

  E04 Appointments        Schedule, status,       Workflow and
                          reschedule,             concurrency tests
                          cancellation            

  E05 Encounters          Visit lifecycle and     Persistence, access,
                          clinical notes          audit tests

  E06 Specialty Workflow  Specialty-specific      Clinical workflow
                          entities, templates,    acceptance suite
                          and steps               

  E07 Documents &         Only validated document Rendering,
  Prescriptions           functions               authorization, export
                                                  tests

  E08 Billing Foundation  Minimum validated       Reconciliation and
                          charge/collection       permission tests
                          records                 

  E09 Notifications       Essential               Delivery, retry,
                          appointment/follow-up   consent/preference
                          events                  tests

  E10 Data Portability    Import/export and       Integrity and
                          account data retrieval  tenant-boundary tests

  E11 Audit & Security    Audit events, security  Security test evidence
                          controls, retention     

  E12 Subscription        Plan state and          Entitlement and
  Foundation              entitlements            billing-state tests

  E13 Reporting           Only operational        Correctness and privacy
                          metrics needed for MVP  review
  -----------------------------------------------------------------------

## 3. Suggested sequencing

1.  Foundation: repository standards, environments, CI, observability,
    secure configuration.
2.  Identity, tenant context, authorization, and audit foundations.
3.  Patient and appointment workflows.
4.  Encounter and specialty-specific workflow.
5.  Documents, billing, and notifications as validated.
6.  Import/export and account lifecycle.
7.  Reporting and subscription foundations.
8.  End-to-end hardening and release candidate.

Exact sprint length and staffing must be decided after team capacity is
known.

## 4. Required test layers

-   Unit tests for domain rules.
-   API and integration tests.
-   End-to-end critical workflow tests.
-   Tenant isolation and authorization tests.
-   Negative tests for invalid and unauthorized requests.
-   Migration and data-integrity tests.
-   Accessibility and responsive/mobile tests.
-   Performance tests against defined workload assumptions.
-   Backup and restore tests.
-   Security scanning and manual review.

## 5. Definition of MVP complete

-   All P0 requirements pass acceptance tests.
-   No open critical/high defects without formally accepted mitigation;
    critical blockers must be zero.
-   No known cross-tenant data exposure.
-   Audit events cover agreed sensitive operations.
-   Export and account lifecycle behavior are tested.
-   Monitoring and alerting are operational in the test environment.
-   Documentation and support runbooks are ready for Alpha.
-   Security and legal blockers are resolved before real-data Pilot.

## 6. Scope control

Any change must state: - user evidence supporting it; - expected
value; - implementation and testing effort; - data/security/legal
impact; - schedule and cost impact; - what is removed or deferred in
exchange.

## 7. Exit gate G4

Pass only when the MVP acceptance suite is green, release evidence is
complete, and unresolved risks are explicitly accepted by authorized
owners.
