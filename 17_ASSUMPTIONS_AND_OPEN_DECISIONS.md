# 17 --- Assumptions & Open Decisions

This register prevents unverified ideas from silently becoming product
commitments.

## 1. Approved decisions

  -------------------------------------------------------------------------------
  Decision                Approved value          Notes
  ----------------------- ----------------------- -------------------------------
  Product                 CareOS                  Initial product in the SaaS
                                                  portfolio

  Initial customer        Solo practitioner       Not a
                                                  multi-branch/enterprise-first
                                                  product

  Platform direction      Mobile-first            Mobile-only vs paired web
                                                  remains open

  Pilot policy            Hybrid                  Limited trial with transparent
                                                  paid transition

  Architecture direction  Hybrid Modular          Prefer modular monolith
                                                  initially unless evidence
                                                  justifies otherwise

  Specialty               Research-selected       No specialty has been approved

  Initial geography       Egypt                   Expansion requires a separate
                                                  gate

  Current posture         Continue Validation     No full MVP build authorization
  -------------------------------------------------------------------------------

## 2. Open decisions

  ----------------------------------------------------------------------------
  ID                Decision          Why it matters    Validation / owner
  ----------------- ----------------- ----------------- ----------------------
  D01               First medical     Determines        Phase 1 scorecard /
                    specialty         workflow, data    Product
                                      model, UX, and    
                                      positioning       

  D02               Mobile-only vs    Clinical          Prototype tests / UX
                    Mobile + Web      documentation may 
                                      require larger    
                                      screen            

  D03               Final client      Depends on team   Technical evaluation /
                    technology        skills and        Tech Lead
                                      platform          
                                      requirements      

  D04               Backend and       Must satisfy      Architecture review
                    database stack    team, security,   
                                      operations, and   
                                      cost              

  D05               Hosting provider  Data protection,  Legal + Security +
                    and region        reliability,      Tech
                                      latency, and cost 

  D06               Payment provider  Fees, settlement, Commercial/technical
                                      recurring         review
                                      billing, local    
                                      support           

  D07               Final pricing     Competitor        Interviews and paid
                                      pricing alone is  pilot evidence
                                      insufficient      

  D08               Team composition  Determines        Capacity plan
                                      schedule and      
                                      budget            

  D09               MVP budget        Prior estimates   Re-estimate after
                                      are preliminary   G2/G3

  D10               Offline           Valuable only if  Field research
                    capability        workflow and      
                                      connectivity      
                                      evidence justify  
                                      complexity        

  D11               Patient-facing    May add           Customer evidence
                    application       acquisition and   
                                      support           
                                      complexity        

  D12               AI capabilities   Safety, privacy,  Separate governance
                                      and clinical      and approval
                                      reliance risks    

  D13               Arabic/RTL scope  Egypt market;    Product + Founder
                    in MVP or later   retrofit cost if in Phase 2 PRD
                                      deferred         (P2-08) + evidence

  D14               Regulatory        Sets legal path, Egyptian counsel at
                    classification    timeline, and    G3; record in 17
                    practice vs       obligations      and 06
                    clinical support
  ----------------------------------------------------------------------------

## 3. Pricing assumptions to test

Research probes: **EGP 399 / 599 / 799 per month**. These are not
approved prices.

Earlier competitor scan included publicly listed examples such as
Reayaty 299 EGP, Nexacare 600 EGP, ClinBeam 599 EGP, Docistra 799 EGP
monthly (with a lower annualized figure), and Tabbaba 799 EGP plus a
setup fee. Vendor pages can change; verify current plans and compare
equivalent feature limits before making pricing decisions.

## 4. Cost assumptions to revisit

Earlier planning estimates: - MVP pre-launch: EGP 76,000--195,000. -
Monthly operating cost: EGP 4,700--21,000.

These are preliminary scenario estimates, not quotations or approved
budgets. They may exclude founder time, salaries, taxes, payment fees,
messaging costs, legal/security assessments, and scope changes. Rebuild
the financial model after specialty and MVP scope are selected.

## 5. Explicit exclusions for current planning baseline

-   No coding or repository modification.
-   No database/schema changes.
-   No cloud resource creation or deployment.
-   No paid service activation or purchase.
-   No real patient data in development or internal testing.
-   No autonomous diagnosis or treatment decisions.
-   No assumption that any named skill has been used until its actual
    instructions are inspected.

## 6. Decision log template

  ---------------------------------------------------------------------------------
  Date         Decision   Options      Evidence   Rationale   Owner      Revisit
                          considered                                     trigger
  ------------ ---------- ------------ ---------- ----------- ---------- ----------
  YYYY-MM-DD                                                             

  ---------------------------------------------------------------------------------
