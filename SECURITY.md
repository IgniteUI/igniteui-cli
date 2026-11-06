# Security Policy

## Supported Versions

The following versions are currently supported with security updates.

`igniteui-cli`, `@igniteui/cli-core`, `@igniteui/mcp-server`:

| Version | Supported          |
| ------- | ------------------ |
| 15.x      | :white_check_mark: |
| < 15.0  | :x:                            |

`@igniteui/angular-templates`, `@igniteui/angular-schematics`:

| Version  | Supported          |
| -------- | ------------------ |
| 22.2.x   | :white_check_mark: |
| < 22.2.x | :x:                |

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Instead, report privately using one of the following methods (preferred first):

1. **GitHub Private Vulnerability Reporting (recommended)**
    - Go to the repository's **Security** tab and use **Report a vulnerability**.

2. **Email**
    - Send details to: **igniteui@infragistics.com**

3. **Support Case**
    - If you are a registered Infragistics user, you can report the vulnerability through a support case at (https://account.infragistics.com/support-cases)

If none of these options is available, contact the maintainers privately. Only use the public issue tracker for **non-security** bugs.

### What to include

To help us triage quickly, include:

- A clear description of the vulnerability and its impact
- Steps to reproduce (proof-of-concept if possible)
- Affected versions and/or commit hash
- The affected package (`igniteui-cli`, `@igniteui/cli-core`, `@igniteui/angular-templates`, `@igniteui/angular-schematics`, `@igniteui/mcp-server`) and the component or directive involved
- Applicable target framework used (Angular, React, Web Components, Blazor, etc.)
- Any relevant logs or stack traces (sanitize secrets)
- Your assessment of severity (optional)
- Suggested fix or mitigation (optional)

### Sensitive information

- Do **not** include secrets, tokens, private keys, or real customer data.
- If sensitive data is required to demonstrate the issue, redact it and describe the expected format.

## Disclosure Process

After receiving a report, we aim to follow this process:

1. **Acknowledgement**: within **3 business days**
2. **Triage** (severity assessment + scope): within **7 business days**
3. **Fix development**: timeline depends on severity and complexity
4. **Release**: we will publish a patch release and/or mitigation guidance
5. **Advisory**: we may publish a GitHub Security Advisory (crediting reporters who want it)

We may request additional information during triage.

## Severity and Prioritization

We prioritize issues using impact and exploitability, informed by CVSS where appropriate:

- **Critical**: remote code execution, authentication bypass, significant data exposure
- **High**: privilege escalation, cross-site scripting that bypasses Angular's sanitization, major denial of service, sensitive information leaks
- **Medium/Low**: limited impact, edge cases, or hard-to-exploit issues

## Scope

In scope: the packages published from this repository and the code that builds them.

Out of scope, and better reported elsewhere:

- Vulnerabilities in underlying Angular CLI itself — report to the [Angular project](https://github.com/angular/angular/security/policy)
- Vulnerabilities in third-party dependencies — report to the upstream project; tell us as well if Ignite UI CLI exposes the issue to consumers
- Issues in our sample applications, documentation sites, or infrastructure that do not affect the shipped packages

## Coordinated Vulnerability Disclosure

We support coordinated disclosure and ask that you:

- Give us a reasonable window to fix before public disclosure
- Avoid exploiting the vulnerability beyond what is necessary to prove it exists
- Avoid actions that degrade service availability or compromise user data

## Security Updates

Security fixes may be communicated via one or more of:

- GitHub Security Advisories
- Release notes / [changelog](CHANGELOG.md)
- npm advisories for the affected packages
