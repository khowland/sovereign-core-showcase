'use client';

/**
 * @file architecture/page.tsx
 * @module sovereign-core-showcase
 * @description Architecture page presenting the Five Vector Schema as an
 * enterprise AI governance framework. Each vector maps directly to Kevin
 * Howland's applied expertise in federal ETL pipelines and agentic AI systems.
 * @author K. Howland
 * @version 2.0.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Hexagon, Workflow, Binary, Activity } from 'lucide-react';

/** A single vector layer in the Five Vector governance framework. */
interface VectorLayer {
    vector: string;
    name: string;
    icon: React.ReactElement;
    detail: string;
    metrics: string[];
}

/**
 * Five Vector Schema layers mapped to real engineering practice.
 * Each vector represents a governance concern that must be addressed
 * in any production AI pipeline or data ingestion system.
 */
const LAYERS: VectorLayer[] = [
    {
        vector: 'St',
        name: 'Storage',
        icon: <Hexagon className="w-8 h-8 text-blue-400" />,
        detail:
            'Persistent and high-availability data storage across multi-terabyte AWS Redshift clusters, SQL Server, and Oracle. Schema design prioritizes federal data integrity, query performance, and zero data loss. Storage is treated as a first-class architectural concern, not an afterthought.',
        metrics: ['Scale: Multi-TB', 'HA: 99.99%'],
    },
    {
        vector: 'Lo',
        name: 'Invariant Control',
        icon: <Binary className="w-8 h-8 text-cyan-400" />,
        detail:
            'Policy-as-code validation gates that enforce data integrity before any record moves downstream. In federal health environments this means strict PHI/PII boundary checks. In AI pipelines it means loop mitigation and hallucination guards. No record is persisted or acted on until all constraints are satisfied.',
        metrics: ['Policy: Deny-All', 'PHI: Protected'],
    },
    {
        vector: 'T',
        name: 'Transformer',
        icon: <Workflow className="w-8 h-8 text-purple-400" />,
        detail:
            'Idempotent ETL transformation using Python, Java, and Talend Studio for complex data streams including HL7 OBX formats. Every transform is reproducible, auditable, and produces a consistent output regardless of how many times it runs. The same approach applies to AI inference -- deterministic, traceable, no side effects.',
        metrics: ['Mode: Idempotent', 'Audit: Full'],
    },
    {
        vector: 'Ac',
        name: 'Actuator',
        icon: <Share2 className="w-8 h-8 text-orange-400" />,
        detail:
            'Secure ingestion and execution layers including Bulk Data Exchange (BDE) frameworks for DoD/DHA data synchronization and REST API integrations. In AI systems this is the orchestration layer -- controlling what the agent can do, under what conditions, and with what level of access. Gated, verified, and fully logged.',
        metrics: ['Protocol: BDE', 'Auth: Zero-Trust'],
    },
    {
        vector: 'η',
        name: 'Resonance',
        icon: <Activity className="w-8 h-8 text-emerald-400" />,
        detail:
            'Real-time telemetry, structured logging, and drift monitoring across all pipeline and agent activity. Every ingress event, transformation, and decision is timestamped and traceable. In a zero-trust environment, observability is not optional -- it is the mechanism that proves the system is behaving as designed.',
        metrics: ['Sync: Real-Time', 'Drift: Monitored'],
    },
];

const ArchitecturePage: React.FC = () => {
    const containerStyle =
        'backdrop-blur-xl bg-slate-950/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative';

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 selection:bg-cyan-500/30">

            {/* Background grid */}
            <div className="fixed inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto space-y-12">

                {/* Header */}
                <header className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-400 text-[10px] font-mono uppercase tracking-[0.3em]"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        Enterprise AI Governance Framework
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
                    >
                        Five-Vector{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                            Schema
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 font-light max-w-3xl leading-relaxed"
                    >
                        A practical governance framework for building AI pipelines that are secure,
                        auditable, and production-ready. Every layer addresses a real engineering
                        concern -- from data persistence to agent guardrails.
                    </motion.p>
                </header>

                {/* Vector layers */}
                <div className="grid grid-cols-1 gap-8">
                    {LAYERS.map((layer, idx) => (
                        <motion.section
                            key={layer.vector}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx + 0.3 }}
                            className={containerStyle}
                        >
                            {/* Background vector label */}
                            <div className="absolute top-0 right-0 p-8 text-8xl font-bold text-white/5 font-mono select-none">
                                {layer.vector}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

                                {/* Icon */}
                                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                                        {layer.icon}
                                    </div>
                                </div>

                                {/* Name and description */}
                                <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                                    <h2 className="text-3xl font-bold text-white tracking-tight uppercase">
                                        {layer.name}{' '}
                                        <span className="text-white/20 ml-2">[{layer.vector}]</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                                        {layer.detail}
                                    </p>
                                </div>

                                {/* Metric badges */}
                                <div className="lg:col-span-4 flex flex-wrap justify-center lg:justify-end gap-3 pt-4 lg:pt-0">
                                    {layer.metrics.map((metric) => (
                                        <div
                                            key={metric}
                                            className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-400 font-mono text-xs uppercase tracking-widest"
                                        >
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500"
                >
                    <div className="flex gap-8">
                        <span>Kevin R. Howland</span>
                        <span>Five Vector Schema v2.0</span>
                    </div>
                    <div className="text-cyan-500/50">
                        Applied across DoD/DHA federal pipelines and agentic AI systems
                    </div>
                </motion.footer>
            </main>
        </div>
    );
};

export default ArchitecturePage;
