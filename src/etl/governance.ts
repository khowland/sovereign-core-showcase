/**
 * @module SOVEREIGN-CORE/etl-governance
 * @version 1.0.0
 * @vector [η] Resonance — High-Fidelity Telemetry & Alignment
 * @status [η] AUDIT: Standardize JSDoc Metadata Headers for DoD-Grade ETL Governance
 * @classification UNCLASSIFIED // FOR OFFICIAL USE ONLY
 * @author K. HOWLAND
 * @created 2026-03-06
 *
 * @description
 * This module establishes the canonical JSDoc metadata standards and type contracts
 * for all ETL pipeline components within the Sovereign-Core mesh. Enforces [η] Resonance
 * compliance — every data transformation MUST emit structured provenance metadata so that
 * alignment drift can be detected and corrected in real time.
 *
 * Aligned with:
 *   - NIST SP 800-53 (AU-2, AU-9, AU-12) — Audit and Accountability
 *   - DoD 8570.01-M — IA Workforce Management
 *   - Zero-Trust Architecture (NIST SP 800-207)
 */

// ---------------------------------------------------------------------------
// [η] ETL Provenance Metadata — required on every pipeline record
// ---------------------------------------------------------------------------

/**
 * Immutable provenance record attached to every ETL record flowing through the mesh.
 * Satisfies DoD AU-12 audit record generation requirements.
 */
export interface EtlProvenanceRecord {
    /** Unique idempotency key — prevents duplicate processing. */
    readonly idempotencyKey: string;
    /** ISO-8601 timestamp of record ingestion. */
    readonly ingestedAt: string;
    /** ISO-8601 timestamp of last transformation. */
    readonly transformedAt: string;
    /** Originating data source identifier. */
    readonly sourceId: string;
    /** Consuming pipeline stage identifier. */
    readonly pipelineStageId: string;
    /** [St] hash of the raw input payload for tamper detection. */
    readonly payloadChecksum: string;
    /** Transformation coefficient — idempotency validation metric. */
    readonly transformCoefficient: number;
    /** Authorization tier under which transform was executed. */
    readonly authorizationLevel: 'L1' | 'L2' | 'L3' | 'L4' | 'L5';
    /** [η] drift measurement versus nominal state (ms). */
    readonly resonanceDrift: number;
}

// ---------------------------------------------------------------------------
// [Lo] Transform Contract — governs all ETL stage implementations
// ---------------------------------------------------------------------------

/**
 * Canonical contract for all ETL transform stages.
 * Every stage must implement this interface; deviations violate [Lo] invariants.
 *
 * @template TInput  - Raw input record type from upstream source.
 * @template TOutput - Transformed output record type for downstream consumers.
 */
export interface EtlTransformStage<TInput, TOutput> {
    /**
     * Unique identifier for this pipeline stage.
     * Used for audit trail correlation per DoD 8570 requirements.
     */
    readonly stageId: string;

    /**
     * [Lo] Validate that the input record satisfies all invariants before transformation.
     * Must be called before `transform` — throws on policy violation.
     *
     * @param input - The raw input record to validate.
     * @throws {InvariantViolationError} if any [Lo] constraint is breached.
     */
    validate(input: TInput): void;

    /**
     * [T] Apply idempotent transformation to the input record.
     * Implementations MUST guarantee idempotency: calling with the same input
     * and idempotencyKey multiple times MUST produce the same output.
     *
     * @param input    - Validated input record.
     * @param context  - Provenance context for audit attribution.
     * @returns        Transformed output record with provenance attached.
     */
    transform(input: TInput, context: Readonly<EtlProvenanceRecord>): TOutput;

    /**
     * [η] Emit telemetry signals for this stage execution.
     * Required for real-time drift monitoring and alignment verification.
     *
     * @param result  - The transformation result to emit telemetry for.
     * @param context - Provenance context for trace correlation.
     */
    emitTelemetry(result: TOutput, context: Readonly<EtlProvenanceRecord>): void;
}

// ---------------------------------------------------------------------------
// Error Types
// ---------------------------------------------------------------------------

/**
 * Raised when a [Lo] invariant is violated during ETL pipeline execution.
 * Triggers immediate [Ac] alert and pipeline halt per Zero-Trust protocol.
 */
export class InvariantViolationError extends Error {
    /** The [Lo] constraint identifier that was breached. */
    public readonly constraintId: string;
    /** The offending value that triggered the violation. */
    public readonly offendingValue: unknown;

    constructor(constraintId: string, offendingValue: unknown, message: string) {
        super(`[Lo] INVARIANT VIOLATION [${constraintId}]: ${message}`);
        this.name = 'InvariantViolationError';
        this.constraintId = constraintId;
        this.offendingValue = offendingValue;
    }
}
