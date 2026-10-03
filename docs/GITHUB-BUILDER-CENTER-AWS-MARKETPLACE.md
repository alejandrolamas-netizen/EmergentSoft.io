# EmergentSoft — GitHub → AWS Builder Center → AWS Marketplace Architecture

## Purpose

This document defines the public technical content and commercial delivery path for EmergentSoft products.

## Architecture

GitHub is the engineering source of truth.
AWS Builder Center is the technical discovery and community publication layer.
AWS Marketplace is the commercial distribution layer.

```
GitHub
  ├─ Source code
  ├─ Tests / CI
  ├─ Architecture docs
  ├─ Security / IP boundaries
  ├─ Marketplace package
  └─ Release evidence
        │
        ▼
AWS Builder Center
  ├─ Technical articles
  ├─ Series
  ├─ Workshops
  ├─ Spaces / community
  └─ Demonstration links
        │
        ▼
AWS Marketplace
  ├─ Product listing
  ├─ SaaS fulfillment
  ├─ Entitlements
  ├─ Subscription
  └─ Customer onboarding
        │
        ▼
Enterprise customer
```

## Repository roles

### EmergentSoft.io
Company/product index and public entry point.

Responsibilities:
- portfolio and product positioning;
- links to canonical repositories;
- technical documentation index;
- Builder Center article/workshop links;
- Marketplace product links when published.

### EmergentSoft-Mates
Core agent/digital-workforce engineering repository.

Responsibilities:
- ESIA/ECIA architecture;
- reusable agent/orchestration components;
- Agentic Compliance Accelerator Marketplace package;
- Marketplace fulfillment contract;
- AWS infrastructure baseline.

Important status boundary:
- the repository itself states that ESIA/ECIA is an architecture baseline and implementation recovery/build-out is required;
- production claims must be backed by source, tests and deployment evidence.

### MeDigtwin-
Healthcare operational digital twin product repository.

Responsibilities:
- application/demo;
- AWS infrastructure;
- CI/CD;
- healthcare-specific security boundary;
- future Marketplace packaging.

Current repository documentation explicitly distinguishes AWS-ready architecture from production healthcare compliance or clinical validation.

### sentinel-guardian / aether-os-kernel
Core technology/prototype repositories.

These should remain engineering components unless a specific commercial SKU is created.

### GreenLedger repositories
Separate Web3/RWA product family.

Keep outside the AWS Marketplace enterprise SaaS path unless a concrete AWS-distributed SKU is defined.

## First commercial product

The first Marketplace path should remain:

**Agentic Compliance Accelerator**

Canonical package:
`EmergentSoft-Mates/products/agentic-compliance-accelerator/aws-marketplace/`

Current package contains:
- listing copy;
- pricing definition;
- Partner Central field map;
- submission checklist;
- SaaS architecture;
- legal/compliance disclaimer;
- onboarding;
- fulfillment service;
- CDK infrastructure baseline;
- contract tests;
- deployment workflow.

The Marketplace PR is currently a **draft** and explicitly identifies remaining production gates.

## Marketplace production gates

Before publication:

1. Real AWS account and publishing region selected.
2. Real Marketplace Product Code configured.
3. HTTPS fulfillment URL configured and validated.
4. ACM/DNS/WAF configuration validated.
5. ResolveCustomer E2E verified.
6. GetEntitlements E2E verified.
7. PostgreSQL persistence validated.
8. Tenant isolation tested.
9. Session lifecycle tested.
10. CI/CD OIDC role configured.
11. Pricing dimensions finalized.
12. Terms, privacy and support URLs published.
13. Marketplace assets prepared.
14. Partner Central validation completed.
15. Limited listing / Marketplace test completed.

## Builder Center publication model

Builder Center content should reference verifiable engineering artifacts.

Recommended sequence:

1. AI-Powered SAP Modernization on AWS: Combining Kiro and Agentic AI
2. Building an Agentic Compliance Assessment on AWS
3. Building a SaaS Fulfillment Path for AWS Marketplace
4. Workshop: Build an Agentic Compliance Assessment on AWS

Articles should link to:
- canonical GitHub repositories;
- architecture documents;
- reproducible examples;
- demos where available.

Do not imply AWS partnership, certification, endorsement or Kiro integration beyond what is documented by the respective official programs/products.

## Release evidence model

Each Marketplace-ready release should contain:

- version/tag;
- changelog;
- CI result;
- test result;
- infrastructure synthesis result;
- security review status;
- deployment evidence;
- Marketplace checklist status.

The Builder Center article should point to the release or documentation, not to an unverified claim.

## Product expansion

After ACA reaches Marketplace production readiness:

**Wave 2:** MeDigtwin

**Wave 3:** additional enterprise products such as Hospeda AI where the application, AWS deployment, Marketplace fulfillment and customer-facing documentation meet the same gates.

## Commercial boundary

GitHub Sponsors is a separate open-source sponsorship mechanism and is not the same channel as AWS Marketplace.

The commercial funnel is:

GitHub → Builder Center → Marketplace → assessment/pilot → enterprise subscription/services.

