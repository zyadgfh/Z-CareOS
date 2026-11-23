# 12 --- Stage Gates & Decision Framework

## 1. Gate outcomes

-   **PASS:** all mandatory exit criteria met; next phase may be
    proposed for approval.
-   **CONDITIONAL PASS:** limited non-risky follow-up remains, with
    owner and deadline; no prohibited activity may start.
-   **HOLD:** evidence or readiness is insufficient; continue the
    current phase.
-   **PIVOT:** change specialty, segment, workflow, platform, or
    business model based on evidence.
-   **STOP:** no credible path to value, safety, compliance, or viable
    economics.

A gate decision must be written and approved. A calendar date is not
evidence of readiness.

## 2. Gate register

  -----------------------------------------------------------------------
  Gate                    Required evidence       Decision owner
  ----------------------- ----------------------- -----------------------
  G0 Strategy             Approved baseline,      Product/Founder
                          assumptions, research   
                          protocol                

  G1 Opportunity          Interviews, competitor  Product/Founder
                          tests, specialty        
                          scorecard,              
                          willingness-to-pay      
                          evidence                

  G2 Product              Tested prototype,       Product
                          selected specialty,     
                          bounded PRD, acceptance 
                          criteria                

  G3 Architecture         ADRs, threat model,     Tech + Security + Legal
                          tenancy design, legal   
                          obligations,            
                          operational plan        

  G4 MVP                  Acceptance suite, test  Tech + QA
                          evidence, defect        
                          status, documentation   

  G5 Alpha                End-to-end tests,       QA + Security +
                          security checks,        Operations
                          restore test, runbooks  

  G6 Pilot                Pilot metrics, user     Product + Operations
                          feedback, incidents,    
                          paid intent/conversion  

  G7 Launch               Commercial, legal,      Founder/Leadership
                          support, security,      
                          payment, and            
                          reliability readiness   

  G8 Expansion            Retention, economics,   Leadership
                          demand, capacity, risk  
                          assessment              
  -----------------------------------------------------------------------

## 3. Required decision record

For every gate: - gate ID and review date; - phase and version; -
evidence links; - criteria and status; - unresolved risks; - exceptions
and their expiry; - decision and rationale; - approvers; - next actions
and owners.

## 4. Hard-stop conditions

Do not proceed to real-data Pilot or commercial launch if: -
cross-tenant access is possible or not adequately tested; - a critical
security issue remains open; - backup restoration has not been
demonstrated; - legal obligations for the planned processing are unclear
or unmet; - patient-data handling and customer responsibilities are
undocumented; - incident response is not operational.

## 5. Change control

Any material change to specialty, platform, MVP scope, data processing,
hosting region, payment model, or launch market requires impact analysis
and approval. Update PRD, architecture, financial model, security plan,
and roadmap together where affected.
