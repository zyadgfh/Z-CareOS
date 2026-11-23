# 13 --- KPIs & Measurement Framework

## 1. Measurement principles

-   Define every metric before collecting it.
-   Use the smallest amount of data necessary.
-   Do not place patient-identifiable or clinical content in analytics.
-   Separate observed results from targets and hypotheses.
-   Report sample size and confidence limitations.
-   Segment by specialty and cohort where appropriate.

## 2. Discovery metrics

  ------------------------------------------------------------------------
  Metric                              Initial target Definition
  --------------------- ---------------------------- ---------------------
  Practitioner                                20--30 Completed interviews
  interviews                                         with usable notes

  Competitors tested                            6--8 Hands-on evaluation
                                                     or clearly marked
                                                     access limitation

  Candidate specialties                         3--4 Comparable evidence
                                                     gathered

  Pilot prospects                               3--5 Qualified practices
                                                     expressing concrete
                                                     interest
  ------------------------------------------------------------------------

## 3. Prototype metrics

  ------------------------------------------------------------------------
  Metric                              Initial target Definition
  --------------------- ---------------------------- ---------------------
  Unassisted                                    ≥80% Participants complete
  primary-task                                       task without
  completion                                         facilitator help

  Critical usability                   0 at sign-off Blockers that prevent
  blockers                                           primary workflow
                                                     completion

  Prototype                                     5--8 Relevant
  participants                                       practitioners or
                                                     representative users
  ------------------------------------------------------------------------

## 4. Pilot metrics

  ------------------------------------------------------------------------
  Metric                              Initial target Definition
  --------------------- ---------------------------- ---------------------
  Onboarding completion                         ≥80% Clinics completing
                                                     required setup

  Weekly active clinics                         ≥70% Pilot clinics
                                                     completing a
                                                     meaningful core
                                                     action in a week

  Four-week retention                           ≥70% Clinics active in
                                                     week four after
                                                     activation

  Unassisted workflow                           ≥80% Users complete the
  completion                                         primary workflow
                                                     after onboarding

  Paid continuation                        3 clinics Credible intent;
  intent                                             actual paid
                                                     conversion is
                                                     stronger evidence

  Critical                                         0 No unresolved
  data/security                                      critical incident
  incidents                                          
  ------------------------------------------------------------------------

These are initial hypotheses, not industry benchmarks. Adjust after the
first cohort and document why.

## 5. Commercial metrics

-   Qualified Lead Rate = qualified leads / total leads.
-   Activation Rate = new accounts reaching defined first value /
    eligible new accounts.
-   Trial-to-Paid Conversion = trial accounts becoming paid / eligible
    completed trials.
-   MRR = sum of active recurring subscription value for the month.
-   Logo Churn = customers lost during period / customers at period
    start.
-   CAC = attributable acquisition spend / new paying customers.
-   Gross Margin = (revenue − direct service delivery costs) / revenue.
-   Support Cost per Clinic = support operating cost / active clinics.

Specify treatment of discounts, annual prepayment, refunds, taxes,
payment fees, and inactive accounts in the financial model.

## 6. Product quality metrics

-   crash-free sessions;
-   API error rate;
-   latency percentiles for critical workflows;
-   failed notification rate;
-   backup success and restore test success;
-   data import failure rate;
-   support tickets per active clinic;
-   unresolved defects by severity.

## 7. Dashboard cadence

-   Daily: service health and critical incidents.
-   Weekly: activation, active clinics, workflow completion, support
    burden.
-   Monthly: retention, conversion, MRR, CAC, gross margin, roadmap
    outcomes.
-   At each gate: evidence pack and written decision.

## 8. Metric governance

Each metric needs an owner, source, calculation, refresh frequency,
privacy classification, and known limitations. Do not optimize a vanity
metric at the expense of clinical workflow quality, safety, or data
portability.
