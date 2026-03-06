#!/bin/bash
# SOVEREIGN-CORE Test Runner

echo "--- RUNNING SOVEREIGN-CORE TDD SUITE ---"

# Set PYTHONPATH to include src
export PYTHONPATH=$PYTHONPATH:$(pwd)

# Run Unit Tests
echo "[UNIT] Running handshake tests..."
python tests/unit/test_handshake.py

# Placeholder for other tests
echo "[INFO] ETL and Actuator tests coming in Phase 4."

echo "--- TEST SUITE COMPLETE ---"
