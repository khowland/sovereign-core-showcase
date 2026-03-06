'use client';

/**
 * @module SOVEREIGN-CORE
 * @version 1.0.0
 * @status [Ac/η] FINAL: Sovereign-Core Autonomous Deployment
 * @author K. HOWLAND
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Hexagon, Workflow, Binary, Activity } from 'lucide-react';

const ArchitecturePage = () => {
    const layers = [
        {
            vector: 'St',
            name: 'State Space',
            icon: <Hexagon className="w-8 h-8 text-blue-400" />,
            detail: 'Multidimensional representation of all persistent and ephemeral data. State is treated as a first-class citizen, ensuring consistency across distributed nodes.',
            metrics: ['Persistence: 99.99%', 'Isolation: L5'],
        },
        {
            vector: 'Lo',
            name: 'Invariant Control',
            icon: <Binary className="w-8 h-8 text-cyan-400" />,
            detail: 'The logic layer that governs state transitions. [Lo] ensures that no operation violates the fundamental constraints of the system. Invariants are absolute.',
            metrics: ['Policy: Deny-All', 'Integrity: Hardened'],
        },
        {
            vector: 'T',
            name: 'Transformer',
            icon: <Workflow className="w-8 h-8 text-purple-400" />,
            detail: 'The engine for data metamorphosis and agentic inference. It handles the mapping of raw state into actionable logic, ensuring all ETL transformations remain idempotent and auditable.',
            metrics: ['Mode: Idempotent', 'Audit: Full'],
        },
        {
            vector: 'Ac',
            name: 'Actuator',
            icon: <Share2 className="w-8 h-8 text-orange-400" />,
            detail: 'The zero-trust orchestration layer. Defines who can perform what actions and under what telemetry conditions. Granular, cryptographically verified control.',
            metrics: ['Auth: Zero-Trust', 'I/O: Gated'],
        },
        {
            vector: 'η',
            name: 'Resonance',
            icon: <Activity className="w-8 h-8 text-emerald-400" />,
            detail: 'The high-fidelity telemetry and alignment vector. It monitors system health, drift, and cross-vector synchronization, providing the real-time feedback loop required for zero-trust assurance.',
            metrics: ['Sync: Real-time', 'Drift: <0.01%'],
        },
    ];

    const containerStyle = "backdrop-blur-xl bg-slate-950/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden relative";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-6 md:p-12 selection:bg-cyan-500/30">
            {/* Background Architecture Grid */}
            <div className="fixed inset-0 pointer-events-none opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>

            <main className="relative z-10 max-w-7xl mx-auto space-y-12">
                {/* Header Section */}
                <header className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-cyan-400 text-[10px] font-mono uppercase tracking-[0.3em]"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                        System Architecture // Sovereign-Core
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter uppercase"
                    >
                        FIVE-VECTOR <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">SCHEMA</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 font-light max-w-3xl leading-relaxed"
                    >
                        The immutable DNA of the operational mesh. Every subsystem, transaction, and state transition aligns with these five architectural vectors.
                    </motion.p>
                </header>

                {/* Architecture Visualization Grid */}
                <div className="grid grid-cols-1 gap-8">
                    {layers.map((layer, idx) => (
                        <motion.section
                            key={layer.vector}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx + 0.3 }}
                            className={containerStyle}
                        >
                            <div className="absolute top-0 right-0 p-8 text-8xl font-bold text-white/5 font-mono select-none">
                                {layer.vector}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                                <div className="lg:col-span-1 flex justify-center lg:justify-start">
                                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                                        {layer.icon}
                                    </div>
                                </div>

                                <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                                    <h2 className="text-3xl font-bold text-white tracking-tight uppercase">
                                        {layer.name} <span className="text-white/20 ml-2">[{layer.vector}]</span>
                                    </h2>
                                    <p className="text-slate-400 text-lg font-light leading-relaxed">
                                        {layer.detail}
                                    </p>
                                </div>

                                <div className="lg:col-span-4 flex flex-wrap justify-center lg:justify-end gap-3 pt-4 lg:pt-0">
                                    {layer.metrics.map((metric) => (
                                        <div key={metric} className="px-4 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl text-emerald-400 font-mono text-xs uppercase tracking-widest">
                                            {metric}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Technical Footnote */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500"
                >
                    <div className="flex gap-8">
                        <span>(C) 2026 Sovereign-Core</span>
                        <span>Protocol v10.4.2</span>
                    </div>
                    <div className="text-cyan-500/50">
                        Integrity Verified: 0xFD29A8...OK
                    </div>
                </motion.footer>
            </main>
        </div>
    );
};

export default ArchitecturePage;
