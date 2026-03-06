# /tests — Test-Driven Development Suite

**Persona:** ENGINEER  
**Philosophy:** Red → Green → Refactor. No code ships before its test is written.

## TDD Mandate

SOVEREIGN-CORE enforces a strict TDD contract:

1. **Write the test first** — define expected behavior before implementation
2. **Watch it fail** — confirm the test correctly detects absence of logic
3. **Write minimum code** — implement only enough to pass the test
4. **Refactor** — clean up with the test as safety net

## Test Suite Layout

```
tests/
├── run_all.sh                  ← Entry point: runs all test suites
├── unit/
│   ├── test_handshake.py       ← Unit tests for DAGWOOD_ZTH_v1 handshake phases
│   ├── test_etl_extract.py     ← Schema validation and source attestation tests
│   ├── test_etl_transform.py   ← Normalization, PII redaction, entropy tests
│   ├── test_etl_load.py        ← Checksum and Vault write tests
│   └── test_actuator.py        ← State machine transition tests (St₀–St₄)
├── integration/
│   ├── test_ztl_handshake_flow.py  ← End-to-end handshake against mock Vault
│   └── test_etl_pipeline.py        ← Full pipeline: Extract → Transform → Load
└── fixtures/
    ├── valid_payload.json       ← Canonical valid payload sample
    ├── expired_token.json       ← Fixture for temporal rejection tests
    └── adversarial_payload.json ← Malformed/malicious payload for quarantine tests
```

## Coverage Requirements

| Layer         | Minimum Coverage |
|---------------|-----------------|
| Unit          | 90%             |
| Integration   | 80%             |
| Handshake     | 100% (critical path) |

## Running Tests

```bash
# All tests
bash tests/run_all.sh

# Unit only
pytest tests/unit/ -v

# Integration only
pytest tests/integration/ -v

# Coverage report
pytest --cov=src --cov-report=html tests/
```
