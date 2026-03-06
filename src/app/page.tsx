'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ResonanceMonitor from '../components/ResonanceMonitor';
import vectorData from '../data/vectors.json';
import { ShieldCheck, Zap, BarChart3, Globe } from 'lucide-react';

const MissionReadinessDashboard = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30 overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-1/4 -right-12 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]" />
            </div>

            <main className="relative z-10 container mx-auto px-6 py-12 md:py-24 max-w-7xl">
                {/* Hero Section Enclosed in Translucent Glass Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 right-0 p-8">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-mono uppercase tracking-widest"
                            >
                                <ShieldCheck className="w-4 h-4" />
                                System Status: Optimal // Verified
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-6xl font-bold leading-tight"
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-slate-500 uppercase tracking-tighter">
                                    SOVEREIGN-CORE // <br />
                                    Mission Readiness Dashboard
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl"
                            >
                                Directing autonomous agentic policies and high-consequence telemetry across the Sovereign Mesh.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                    Initiate Handshake
                                </button>
                                <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-medium transition-all backdrop-blur-sm">
                                    Audit Logs
                                </button>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                                className="bg-slate-900/60 border border-emerald-500/20 rounded-3xl overflow-hidden shadow-inner p-4"
                            >
                                <ResonanceMonitor />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Vector Summary Row */}
                <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'Network Integrity', value: '99.99%', icon: Globe, detail: 'Dagwood Sovereign Mesh' },
                        { label: 'Agentic Inference', value: 'Active', icon: Zap, detail: 'LENS-1 Model' },
                        { label: 'Data Sovereignty', value: 'Enforced', icon: ShieldCheck, detail: 'Zero-Trust Protocol' },
                        { label: 'Telemetry Resonance', value: 'Stable', icon: BarChart3, detail: 'Real-time alignment' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + (idx * 0.1) }}
                            className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-default"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-2 bg-emerald-500/10 rounded-lg">
                                    <stat.icon className="w-5 h-5 text-emerald-500" />
                                </div>
                                <span className="text-slate-400 text-sm font-medium">{stat.label}</span>
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-slate-500 font-mono">{stat.detail}</div>
                        </motion.div>
                    ))}
                </section>
            </main>

            {/* Global Footer Overlay */}
            <footer className="fixed bottom-0 left-0 w-full p-4 border-t border-white/5 bg-slate-950/80 backdrop-blur-md z-50 flex justify-between items-center text-[10px] sm:text-xs font-mono tracking-tighter uppercase text-slate-500">
                <div className="flex gap-6">
                    <span>(C) 2026 SOVEREIGN-CORE</span>
                    <span className="hidden sm:inline">User ID: K. HOWLAND // AUTH: LEVEL-5</span>
                </div>
                <div className="flex gap-4 items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Secure Stream Active</span>
                </div>
            </footer>
        </div>
    );
};

export default MissionReadinessDashboard;
