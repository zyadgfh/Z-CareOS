# 02 --- Workstreams, Ownership & Governance

## 1. Workstream model

Workstreams may run in parallel, but their outputs are constrained by
phase gates.

  ------------------------------------------------------------------------
  Workstream        Accountable role  Core               Required outputs
                    (to assign)       responsibilities   
  ----------------- ----------------- ------------------ -----------------
  Product &         Product Lead      Interviews,        Research report,
  Research                            competitor         opportunity
                                      evidence,          brief, PRD
                                      specialty          
                                      selection,         
                                      prioritization     

  UX/UI & Design    Design Lead       Journeys,          Flows, prototype,
  Systems                             information        UI specs, design
                                      architecture,      tokens
                                      interaction        
                                      design,            
                                      accessibility,     
                                      design system      

  Engineering       Tech Lead         Architecture,      Architecture
                                      APIs, mobile       records,
                                      client, data       implementation,
                                      model,             tests
                                      integrations       

  Security &        Security Lead     Threat modeling,   Threat model,
  Privacy                             access control,    security
                                      data protection,   requirements,
                                      incident readiness test evidence

  Legal &           Qualified         Applicable         Written legal
  Compliance        Egyptian legal    privacy,           assessment and
                    counsel /         health-data,       obligations
                    compliance owner  contracts,         register
                                      consent, transfer  
                                      and regulatory     
                                      review             

  QA & Reliability  QA Lead           Test strategy,     Test plans,
                                      automation,        defect reports,
                                      regression,        release evidence
                                      performance,       
                                      recovery tests     

  Marketing & Sales Growth Lead       Positioning,       GTM plan,
                                      pricing research,  messaging, funnel
                                      acquisition, sales dashboard
                                      funnel             

  Operations &      Operations Lead   Onboarding,        Runbooks, support
  Support                             support, incident  policy,
                                      handling, service  onboarding
                                      operations         playbook

  Finance           Finance Owner     Budget, cash flow, Financial model
                                      pricing, unit      and monthly
                                      economics          variance report
  ------------------------------------------------------------------------

Roles may be combined in a small team, but accountability must remain
explicit. One person can hold multiple roles; a role must not be left
ownerless.

## 2. RACI shorthand

-   **R:** Responsible for doing the work.
-   **A:** Accountable for the outcome and approval.
-   **C:** Consulted before the decision.
-   **I:** Informed.

Assign actual names only after the team is confirmed. Do not invent
owners.

## 3. Cross-workstream dependencies

-   Product Research → UX prototype → Product validation → PRD freeze.
-   PRD + security requirements → Architecture approval.
-   Architecture + acceptance criteria → MVP build.
-   Engineering → QA evidence → Alpha approval.
-   Legal + Security + Operations → Pilot authorization.
-   Pilot data → Product prioritization + pricing + GTM.
-   Support readiness + reliability + legal readiness → Commercial
    launch.
-   Commercial metrics → expansion decision.

## 4. Governance artifacts

Maintain the following records:

1.  Decision log: decision, options, rationale, evidence, owner, date,
    reversibility.
2.  Assumption register: assumption, confidence, validation method,
    deadline.
3.  Risk register: probability, impact, mitigation, owner, trigger.
4.  Evidence repository: interview notes, competitor observations,
    prototype tests, analytics.
5.  Change log: requested change, reason, impact, approval.
6.  Release checklist: tests, security, legal, support, rollback,
    monitoring.

## 5. Review cadence

-   Weekly workstream sync: blockers, upcoming dependencies, changed
    evidence.
-   Weekly product review: user evidence, scope, usability, unresolved
    decisions.
-   Biweekly engineering/security review during build.
-   Phase-end gate review: pass, conditional pass, hold, pivot, or stop.
-   Monthly finance and strategy review.

## 6. Escalation rules

Escalate immediately when any of the following occurs: - suspected
exposure or cross-tenant access to patient data; - loss or corruption of
customer data; - unresolved critical vulnerability; - legal uncertainty
that could make the proposed processing unlawful; - cost forecast
exceeds approved budget materially; - a critical dependency threatens
the phase exit date; - scope expands without a documented trade-off.

## 7. Approval boundaries

This document does not grant implementation authority. Repository,
database, cloud, deployment, paid vendor, and real-data actions require
separate explicit approval.
