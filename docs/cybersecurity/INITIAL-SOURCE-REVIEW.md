# First-party security demonstration: innovaconsult.ca (SOURCE-ONLY)

Date: 2026-10-15. Owner-controlled GitHub repository: https://github.com/ctmakc/innovaconsult.ca
Method: read-only inspection of default-branch GitHub source files. No active network tests, no vulnerability exploitation, no DNS/TLS/header evidence, no package advisory scan.

## Inspected
- Repository tree (26 files), package.json, .github/workflows/build.yml, astro.config.mjs;
- src/layouts/BaseLayout.astro and selected client-side routines in src/pages/workflow-os.astro;
- Checked source files and dependencies list for obvious patterns.

## Observations
1. Package manifest targets Astro ^4.16.18 and Tailwind 3.x. Confirm supported version / advisories from an up-to-date vulnerability source and schedule regular upgrades. **Dependency version alone is not a confirmed vulnerability**. Need npm audit and current advisory matching, not performed.
2. The GitHub Actions workflow runs npm ci and npm run build but no obvious dependency/security scanning step was present. Recommend Dependabot / GitHub dependency alerts and a reviewed SCA job. Missing SCA is a process finding, not proof of exposure.
3. Client-side page workflow-os.astro uses DOM innerHTML for rendering. Observed injected properties came from constants defined inside that same source file, not untrusted user data in the inspected paths. No XSS claim without a real untrusted input-to-sink trace.
4. No application server or authentication mechanism appears in the inspected repository tree. **This does not prove the deployed hosting environment is secure**. TLS, headers, cookies, access controls, secrets, DNS and production supply chain were not examined.
5. No exposed source secret was identified from the small selected files read. This is not a repository-wide credential scan.

## Next proper checks on own assets
- Full SCA + licence report with reproducible output.
- Secret scanning with GitHub repository settings or approved tooling.
- Deployment configuration review for HSTS, CSP, cross-origin controls and HTTPS, with evidence.
- Validate CI protections and build reproducibility.
- Human triage of every positive and remediation/retest evidence.

## Result
This is a **source-based preliminary assessment**, not a full external security review or penetration test. No exploitable vulnerability established in this pass.
