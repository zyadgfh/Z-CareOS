# 06 --- Phase 3: Architecture & Engineering Readiness

**Indicative duration:** 2 weeks\
**Outcome:** An implementation-ready architecture and security
baseline---not implementation itself.

## 1. Architecture principles

-   API-first design.
-   Hybrid modular architecture.
-   Prefer a modular monolith initially; split services only when
    justified by scale, team boundaries, or independent operational
    needs.
-   Clear separation between platform capabilities and specialty
    modules.
-   Strong tenant isolation.
-   Data minimization and least privilege.
-   Observability, backup, and recovery designed from the beginning.
-   Synthetic data for development and testing.

A possible baseline to evaluate is Laravel 12, PostgreSQL, Redis, and a
mobile client/PWA. The final stack must be explicitly approved after
requirements, team capability, hosting, and security review. Do not
treat a suggested stack as an irrevocable decision.

## 2. Logical modules

-   Identity & Access.
-   Tenant / Clinic Workspace.
-   Patients.
-   Appointments.
-   Encounters.
-   Specialty Module.
-   Prescriptions / Clinical Documents.
-   Billing & Collections.
-   Notifications.
-   Audit.
-   Import / Export.
-   Subscription & Entitlements.
-   Reporting.

## 3. Multi-tenancy requirements

-   Define tenant ownership for every tenant-scoped record.
-   Enforce tenant scope server-side, not only in the UI.
-   Evaluate PostgreSQL Row-Level Security and application-layer
    authorization together.
-   Ensure background jobs, exports, files, search, caches, and logs
    preserve tenant boundaries.
-   Test cross-tenant access attempts for every API family.
-   Define support/admin access with explicit authorization, reason,
    time bounds, and audit events.
-   Prevent tenant identifiers from being trusted solely because a
    client supplied them.

## 4. Data classification and lifecycle

Classify: - identity and account data; - patient identifiers; -
health/clinical data; - financial and billing data; - audit/security
events; - operational telemetry; - backups and exports.

For each class define purpose, access, retention, deletion, export,
encryption, backup, and legal basis/obligations with qualified counsel.
Minimize data collected and avoid copying sensitive values into
analytics or logs.

## 5. Security design tasks

-   Threat model and trust boundaries.
-   Data-flow diagrams.
-   Authentication and session lifecycle.
-   MFA for privileged and sensitive roles.
-   RBAC/permission matrix.
-   Encryption in transit and at rest.
-   Key and secret management.
-   Audit-event taxonomy and tamper resistance.
-   Rate limiting and abuse controls.
-   Secure file upload and malware handling.
-   Dependency and supply-chain controls.
-   Backup isolation and restore testing.
-   Incident response and breach workflow.
-   Vulnerability management and penetration testing plan.

## 6. Reliability and operations

Specify: - availability target and measurement window; - backup
frequency and retention; - Recovery Point Objective (RPO); - Recovery
Time Objective (RTO); - monitoring and alert thresholds; - deployment
and rollback strategy; - data migration and schema-change policy; -
support escalation and incident severity levels.

Do not invent an SLA before infrastructure and cost modeling.

## 7. Legal and compliance work

Obtain qualified Egyptian legal review of applicable requirements,
including Personal Data Protection Law 151/2020 and Executive
Regulations 816/2025 where applicable. Confirm actual obligations rather
than relying on informal summaries. Review controller/processor roles,
consent and notices, contracts, retention, data-subject rights,
cross-border transfers, licensing/permits, DPO requirements, and
incident notification duties as applicable.

**Compliance timing note (baseline 23 November 2026):** Decree
816/2025 entered into force on 2 November 2025 and started a one-year
compliance period that expired in early November 2026---before this
baseline. CareOS processes no real patient data yet, but do not assume
any grace period remains: with qualified counsel, confirm which
registration, licensing, DPO, and breach-notification obligations are
already due for the planned processing before G3 sign-off.

## 8. Exit gate G3

Pass when: - architecture decisions are documented; - tenant isolation
is designed and testable; - data flows and classifications are
approved; - threat model has mitigations for high risks; - legal
obligations are mapped by qualified counsel; - backup, recovery,
monitoring, and release strategy are defined; - engineering estimates
and dependencies are credible.

## 9. Deliverables

-   Architecture Decision Records.
-   Context/container/component diagrams.
-   Data model and ownership map.
-   API contract outline.
-   Tenant isolation design and test plan.
-   Threat model and security requirements.
-   Compliance obligations register.
-   Reliability and operations plan.
-   Updated cost and staffing estimate.
