# 14 --- CareOS Risk Register

**Scoring:** Probability (P) and Impact (I) are initial qualitative
estimates; validate and update.\
**Priority:** High / Medium / Low.

  -------------------------------------------------------------------------------------------------------
  ID        Risk                        P            I Priority   Mitigation / response  Trigger
  --------- ---------------- ------------ ------------ ---------- ---------------------- ----------------
  R01       Wrong specialty             M            H High       Research multiple      Interviews
            selected                                              specialties; score     contradict
                                                                  with evidence          initial
                                                                                         hypothesis

  R02       Generic features            H            H High       Own one deep workflow  Prospects see no
            fail to                                               and measurable outcome reason to switch
            differentiate                                                                

  R03       Free/low-cost               H            H High       Validate segment value Price objections
            competitors                                           and willingness to pay dominate
            compress pricing                                                             

  R04       Mobile                      M            H High       Test mobile prototype; Repeated task
            unsuitable for                                        consider paired web    friction on
            detailed                                              surface                phone
            documentation                                                                

  R05       MVP scope                   H            H High       Scope freeze, change   New features
            expands                                               control, explicit      added without
                                                                  trade-offs             evidence

  R06       Cross-tenant                M     Critical Critical   Server-side tenant     Any unauthorized
            data exposure                                         enforcement, RLS       cross-tenant
                                                                  evaluation,            response
                                                                  adversarial tests      

  R07       Patient data                M     Critical Critical   Data minimization,     Unapproved
            mishandled                                            legal review,          access or
                                                                  encryption, audit,     disclosure
                                                                  training               

  R08       Regulatory                  M            H High       Qualified Egyptian     Unresolved legal
            obligations                                           legal counsel and      interpretation
            misunderstood                                         obligations register   

  R09       Data loss or                M     Critical Critical   Isolated backups and   Restore test
            failed recovery                                       restore drills         fails

  R10       Vendor                      M            M Medium     Portability,           Vendor changes
            outage/lock-in                                        documented             terms or
                                                                  dependencies,          availability
                                                                  contingency planning   

  R11       Poor onboarding             M            H High       Guided onboarding and  Low activation
                                                                  time-to-value          
                                                                  measurement            

  R12       Weak retention              M            H High       Observe workflow value Usage falls
                                                                  and cohort retention   after initial
                                                                                         trial

  R13       High customer               M            H High       Narrow segment,        CAC exceeds
            acquisition cost                                      referrals, controlled  sustainable
                                                                  experiments            contribution

  R14       Support burden              M            M Medium     Productized            Tickets per
            overwhelms small                                      onboarding, knowledge  clinic rise
            team                                                  base, scope limits     

  R15       Notification                M            M Medium     Provider monitoring,   Repeated
            delivery                                              retries, fallback      delivery
            unreliable                                            policy                 failures

  R16       Integration or              M            M Medium     Keep integrations out  Dependency
            payment scope                                         unless validated       blocks core
            delays launch                                                                workflow

  R17       AI output                   M     Critical Critical   Exclude autonomous     AI feature
            creates unsafe                                        diagnosis/treatment;   proposed for
            clinical                                              human review and       clinical
            reliance                                              governance             decisions

  R18       Schedule/cost               H            M High       Re-estimate after      Actual effort
            estimates                                             discovery and          materially
            inaccurate                                            technical spikes       exceeds estimate

  R19       PDPL compliance             M            H High       Verify licensing, DPO, Counsel
            window expired                                        and breach duties with confirms
            before baseline                                       qualified counsel;     obligations
                                                                  grace period expired   overdue

  R20       Regulatory                  M            H High       Counsel opinion on     Regulatory
            classification                                        practice mgmt vs       question
            (practice-mgmt vs                                     clinical software;     raised
            clinical software)                                    recorded as D14
  -------------------------------------------------------------------------------------------------------

## Risk review rules

-   Assign an owner to every High/Critical risk.
-   Define residual risk after mitigation.
-   Review weekly during build and Pilot.
-   Escalate critical data/security risks immediately.
-   Do not accept a risk that conflicts with legal obligations or
    exposes patient data without authorization.
-   Record risk acceptance explicitly; silence is not acceptance.
