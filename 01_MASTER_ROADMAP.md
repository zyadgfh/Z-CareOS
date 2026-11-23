# 01 --- CareOS Master Roadmap

**Version:** 1.0 \| **Baseline:** 23 November 2026\
**Status:** Planning-only

## 1. Executive objective

Validate and launch a commercially viable, secure, mobile-first clinical
workflow product for solo practitioners in Egypt. CareOS must win
through a clearly validated specialty workflow and measurable daily
value---not by matching generic appointment, patient-file, and billing
checklists.

**Current recommendation: Continue Validation.** The first specialty
remains undecided.

## 2. Approved baseline

-   Customer: solo practitioner.
-   Platform direction: mobile-first; whether mobile-only or mobile +
    web must be tested.
-   Pilot: hybrid.
-   Architecture: hybrid modular; prefer a modular monolith initially
    unless evidence justifies another approach.
-   Specialty: research-led selection.
-   Market: Egypt first.
-   Data: synthetic data for development and internal testing. No real
    patient data before legal, privacy, and security readiness is
    independently reviewed.

## 3. Timeline overview

The estimates below are planning ranges, not delivery commitments. The
schedule starts when the relevant work is authorized and staffed.

  ------------------------------------------------------------------------
  Phase              Indicative duration Main outcome     Exit condition
  ---------------- --------------------- ---------------- ----------------
  0\. Strategic                   1 week Approved         Scope and
  Alignment                              baseline         assumptions
                                                          recorded

  1\. Market &                3--4 weeks Evidence of a    G1 passes
  Customer                               painful, paid    
  Discovery                              problem          

  2\. Product                 2--3 weeks Specialty        G2 passes
  Definition &                           choice,          
  Validation                             prototype, MVP   
                                         scope            

  3\. Architecture               2 weeks Approved         G3 passes
  Readiness                              architecture and 
                                         security design  

  4\. MVP                   10--12 weeks Testable MVP     G4 passes
  Development                                             

  5\. Internal                2--3 weeks Release          G5 passes
  Alpha                                  candidate        

  6\. Hybrid Pilot            4--6 weeks Validated        G6 passes
                                         real-world       
                                         workflow         

  7\. Commercial              3--4 weeks Controlled       G7 passes
  Launch                                 commercial       
                                         release          

  8\.              ongoing; first review Reliability and  G8 expansion
  Stabilization &      after 8--12 weeks repeatable       decision
  Growth                                 growth           
  ------------------------------------------------------------------------

**Indicative end-to-end range:** approximately 7--10 months, subject to
discovery findings, team capacity, regulatory review, and scope changes.
Delays or a Pivot are valid outcomes.

## 4. Critical path

1.  Define research protocol and recruit practitioners.
2.  Test competitors and conduct interviews.
3.  Identify the highest-value specialty workflow.
4.  Validate a prototype and willingness to pay.
5.  Freeze MVP scope and acceptance criteria.
6.  Complete architecture, threat model, privacy, and compliance
    readiness.
7.  Build and test MVP.
8.  Run internal Alpha with synthetic data.
9.  Authorize a limited Pilot only after legal and security gates.
10. Validate retention, value, and paid conversion.
11. Launch commercially only when operating and support capabilities are
    ready.

A delay in specialty selection delays final PRD, architecture details,
and MVP implementation. Do not conceal this dependency by starting
generic development prematurely.

## 5. Milestones

-   **M1 --- Validated Opportunity:** recurring practitioner problem,
    evidence of urgency, and credible willingness to pay.
-   **M2 --- Validated Product:** one initial specialty selected;
    prototype tested; MVP scope accepted.
-   **M3 --- Approved Architecture:** tenancy, data flows, security
    controls, and operating model reviewed.
-   **M4 --- MVP Accepted:** critical workflows meet written acceptance
    criteria.
-   **M5 --- Alpha Ready:** no unresolved critical defects or security
    blockers.
-   **M6 --- Pilot Validated:** repeated use and measurable value
    demonstrated by pilot clinics.
-   **M7 --- Commercial Ready:** pricing, support, onboarding, legal
    materials, and reliability are ready.
-   **M8 --- Repeatable Growth:** acquisition, activation, retention,
    and unit economics justify expansion.

## 6. Product release strategy

### MVP

Only the minimum end-to-end workflow for the selected specialty,
supported by secure identity, patient records, appointments, encounters,
and the specialty-specific clinical workflow. Billing, prescriptions,
notifications, import/export, and subscription foundations are included
only to the depth required by validated use cases.

### Growth release

Advanced reporting, staff workflows, richer templates, broader
automation, additional integrations, and operational improvements driven
by observed usage.

### Expansion release

Second specialty, broader multi-location support, patient-facing
surfaces, deeper integrations, offline capabilities, and geographic
expansion---each gated by demand, security, compliance, and economics.

## 7. Non-negotiable sequencing rules

-   No specialty-specific MVP freeze before Phase 1 research.
-   No full MVP build before Phase 2 approval.
-   No real patient data in development or internal testing.
-   No Pilot with real patient data before applicable
    legal/privacy/security approvals.
-   No AI diagnosis or autonomous treatment decisions in the current
    roadmap.
-   No microservices-first architecture without a demonstrated need.
-   No expansion based only on feature requests; use evidence and
    impact.
-   No scope change without impact analysis on time, cost, risk, and
    acceptance criteria.

## 8. Governance cadence

-   Weekly: workstream review, blockers, risks, and evidence log.
-   At each phase end: formal gate review.
-   Monthly: budget, runway, scope, and strategic assumptions review.
-   After Pilot: formal Go / Pivot / Stop decision with evidence.

## 9. Definition of roadmap success

The roadmap succeeds when CareOS demonstrates that a specific
solo-practitioner segment repeatedly uses the product, receives
measurable workflow value, trusts its handling of sensitive information,
and is willing to pay at a price that can support sustainable
operations.
