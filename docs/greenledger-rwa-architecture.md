# GreenLedger + Desbank — RWA Architecture

## Purpose

EmergentSoft's RWA architecture is **ledger-agnostic**. GreenLedger has parallel implementations for XRP Ledger (XRPL) and EVM-compatible networks. Neither implementation is the "better" or "worse" version: they are alternative settlement/ledger adapters for the same product thesis.

## Product roles

### GreenLedger

GreenLedger is the **RWA ledger and tokenization layer**. Its responsibility is to take a verified real-world asset and represent the asset, its provenance, compliance/attestation state, and tokenized issuance on the selected ledger.

### Desbank

Desbank is the **sovereign RWA wallet / utilization layer**. It provides the operational environment in which tokenized assets can be held, managed and used within the broader financial workflow.

## Conceptual flow

```text
Real-World Asset
      |
      v
Origination / Verification / Compliance / Intelligence
      |
      v
+-----------------------------+
|          GreenLedger        |
| RWA ledger + tokenization   |
+-----------------------------+
      |
      +-------------------+
      |                   |
      v                   v
    XRPL             EVM-compatible
   implementation      implementation
      |                   |
      +---------+---------+
                |
                v
        Tokenized RWA
                |
                v
+-----------------------------+
|           Desbank           |
| sovereign RWA utilization   |
+-----------------------------+
```

## Network agnosticism

The ledger is an implementation choice, not the product definition. GreenLedger's domain model should remain independent of a specific chain. Chain-specific logic belongs behind adapters/integration boundaries.

Current documented implementations include:

- **XRPL** — GreenLedger's XRP Ledger implementation.
- **EVM** — GreenLedger's EVM implementation developed for the Ethereum hackathon track.

The EVM hackathon material recovered from the Library contains a React-based GreenLedger prototype and a documented migration path toward real `wagmi`/`viem` contract interactions. The recovered prototype itself must not be represented as proof of a production on-chain deployment unless a transaction, contract address, receipt, and explorer evidence are independently verified.

## Relationship to EmergentSoft.io

`EmergentSoft.io` is the **company website repository**. Product implementations, smart contracts, backend services and independent GreenLedger/Desbank repositories must remain separate from the website codebase.

This document exists only to keep the website's product narrative technically accurate and to prevent the website repository from being mistaken for the product source repository.

## Verification policy

For external applications, investor materials and technical submissions:

- distinguish implemented code from architecture/specification;
- distinguish a hackathon demo from a production deployment;
- never use simulated hashes, example contract addresses or UI state as on-chain evidence;
- describe XRPL and EVM as parallel ledger implementations under one agnostic architecture.
