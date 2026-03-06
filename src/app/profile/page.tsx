'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Cpu, Activity, Zap } from 'lucide-react';

const ProfilePage = () => {
    const vectors = [
        {
            id: 'St',
            name: 'Storage',
            icon: <Database className="w-6 h-6" />,
            description: '30+ years ETL/Database architecture (DoD Contractor). Expert in air-gapped data sovereignty.',
            color: 'from-blue-500/20 to-cyan-500/20',
        },
        {
            id: 'Lo',
            name: 'Logic',
            icon: <Shield className="w-6 h-6" />,
            description: 'Architect of the Sovereign-Core invariant engine; transitioning deterministic SQL to agentic policy.',
            color: 'from-emerald-500/20 to-teal-500/20',
        },
        {
            id: 'T',
            name: 'Transformer',
            icon: <Cpu className="w-6 h-6" />,
            description: 'Orchestrating multi-agent inference via the Dagwood Sovereign Mesh.',
            color: 'from-purple-500/20 to-pink-500/20',
        },
        {
            id: 'Ac',
            name: 'Actuator',
            icon: <Zap className="w-6 h-6" />,
            description: 'Deploying zero-trust CI/CD infrastructures.',
            color: 'from-orange-500/20 to-red-500/20',
        },
        {
            id: 'η',
            name: 'Resonance',
            icon: <Activity className="w-6 h-6" />,
            description: 'Real-time telemetry monitoring for alignment.',
            color: 'from-yellow-500/20 to-amber-500/20',
        },
    ];

    const glassStyle = "backdrop-blur-md bg-slate-900/40 border border-white/10 rounded-2xl p-8";

    return (
        <div className="min-h-screen bg-[#050505] text-slate-200 font-sans p-8 md:p-16 selection:bg-emerald-500/30">
            {/* Background Glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <header className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-px w-12 bg-emerald-500/50" />
                        <span className="text-emerald-500 font-mono tracking-widest text-sm uppercase">Secure Clearance: Level 5</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white"
                    >
                        ARCHITECT <span className="text-emerald-500">PROFILE</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed"
                    >
                        K. HOWLAND // LEAD SYSTEMS DESIGNER AT <span className="text-white font-medium">SOVEREIGN-CORE</span>
                    </motion.div>
                </header>

                {/* Vector Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vectors.map((vector, idx) => (
                        <motion.div
                            key={vector.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * idx + 0.3 }}
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            className={`${glassStyle} group relative overflow-hidden flex flex-col items-start gap-6`}
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${vector.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 flex items-center justify-between w-full">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors">
                                    {vector.icon}
                                </div>
                                <span className="font-mono text-emerald-500/50 text-xl">[{vector.id}]</span>
                            </div>

                            <div className="relative z-10 space-y-2">
                                <h3 className="text-xl font-semibold text-white tracking-wide uppercase">{vector.name}</h3>
                                <p className="text-slate-400 leading-relaxed font-light">
                                    {vector.description}
                                </p>
                            </div>

                            <div className="relative z-10 mt-auto pt-4 w-full flex justify-end">
                                <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/40 font-mono">
                                    Vector Analysis Log // 0xCC4{idx}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </section>

                {/* Footer Metadata */}
                <footer className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="font-mono text-xs tracking-widest uppercase">
                        (C) 2026 SOVEREIGN-CORE // ZERO-TRUST PROTOCOL ACTIVE
                    </div>
                    <div className="flex gap-8 font-mono text-xs tracking-widest uppercase">
                        <span>Status: Operational</span>
                        <span className="text-emerald-500">Identity Verified</span>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default ProfilePage;
