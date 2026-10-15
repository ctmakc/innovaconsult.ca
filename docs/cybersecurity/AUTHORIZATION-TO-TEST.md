# Authorization to Test — draft engagement appendix

**Client legal name:** ____________________
**Authorized signatory / position:** ____________________
**Service provider:** INNOVA CONSULT LTD. (and specifically approved subcontractors)
**Effective dates and time zone:** ____________________
**Primary incident contact (24/7):** ____________________
**Escalation telephone:** ____________________
**Project owner:** ____________________

## 1. Purpose and authority
The Client represents that it owns or has legally sufficient permission to authorize the tests listed below. It expressly authorizes INNOVA CONSULT LTD. and any **named, pre-approved** specialist subcontractor to conduct only the activities set out in this document within the agreed window and limits. The Client shall obtain authorizations from third-party infrastructure, SaaS and hosting providers where required.

## 2. Exact scope
| Asset (FQDN/IP/app/environment) | Ownership confirmation | Allowed method | Rate / traffic limits | Time window |
| --- | --- | --- | --- | --- |
| ____________________ | ____________________ | ____________________ | ____________________ | ____________________ |

Assets not expressly included are out of scope, including assets linked via redirects, subdomains, third-party services and shared cloud environments unless separately specified in writing.

## 3. Permitted techniques
Check only those explicitly authorized:
- [ ] Passive public-source review / asset inventory
- [ ] Non-disruptive external configuration checks
- [ ] Authenticated application security testing (test accounts and environment listed)
- [ ] Manual web application penetration test (detailed methodology annex)
- [ ] Approved cloud / infrastructure review
- [ ] Other: ____________________

**Not authorized without a separately signed amendment:** denial-of-service, stress/load testing, phishing or social engineering, password spraying, credential harvesting, destructive payloads, exfiltration of actual customer data, production data modification, third-party testing outside scope or persistence mechanisms.

## 4. Technical and safety controls
Written limits on requests per second and parallel sessions: ____________________.
Approved test accounts / IP origins: ____________________.
Maintenance windows / exclusions: ____________________.
Emergency stop condition: on the Client's request, evidence of service degradation, unintended access to sensitive data, or suspected material incident. Stop immediately; notify emergency contact.

## 5. Evidence and confidentiality
Collect minimal proof necessary to substantiate findings. Avoid storing personal, financial or confidential production data in test outputs. Encrypt evidence and restrict access to named personnel. Retention and secure deletion deadline: ____________________. Cross-border transfers, any model processing of customer code/data, and subprocessors require the Client's explicit prior approval.

## 6. Deliverables and commercial scope
Deliverables, exclusions, timing and fees are described in the attached Statement of Work. Findings must distinguish confirmed from suspected, include severity rationale and proposed remediation. No guarantee that the review discovers every issue, and no unapproved system changes are permitted.

## 7. Communications
Critical confirmed findings will be communicated directly and securely through the contacts agreed in the Statement of Work. Public disclosure or use of Client name is prohibited without written approval.

## 8. Approval
Client authorized signatory / date: ____________________
INNOVA CONSULT LTD. authorized signatory / date: ____________________
Named subcontractor, if any, and acceptance: ____________________

**Status:** Template for negotiation; not a signed authorization. No testing may start on this basis alone.
