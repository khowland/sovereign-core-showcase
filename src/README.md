# /src — Sovereign-Core Logic Layer

**Persona:** ENGINEER  
**Role:** Core runtime logic for ETL validation, Zero-Trust handshake, and actuator control.

## Module Layout

```
src/
├── handshake/
│   ├── __init__.py
│   └── ztl_handshake.py       ← DAGWOOD_ZTH_v1 Zero-Trust Handshake implementation
├── etl/
│   ├── __init__.py
│   ├── pipeline.py             ← Extract → Transform → Load pipeline
│   ├── extract.py              ← Schema validation + source attestation
│   ├── transform.py            ← Normalization, PII redaction, entropy check
│   └── load.py                 ← Checksum verification + Vault write
├── actuators/
│   ├── __init__.py
│   └── sovereign_actuator.py   ← Actuator lifecycle management (St₀–St₄)
├── vault/
│   ├── __init__.py
│   └── vault_client.py         ← Dagwood Vault interface (token issuance/revocation)
└── telemetry/
    ├── __init__.py
    └── resonance_emitter.py    ← η-vector metric emission
```

## Vector Alignment

| Module             | Primary Vectors |
|--------------------|-----------------|
| `handshake/`       | [St], [Lo], [T] |
| `etl/`             | [Ac], [η]       |
| `actuators/`       | [St], [Lo]      |
| `vault/`           | [T], [Ac]       |
| `telemetry/`       | [η]             |

## Development Standards

- All modules MUST have a corresponding test in `/tests/`
- Functions touching the handshake MUST be type-annotated
- No secrets in source — use Vault token injection at runtime
