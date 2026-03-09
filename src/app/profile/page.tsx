'use client';

/**
 * @file profile/page.tsx
 * @module sovereign-core-showcase
 * @description Professional profile page for Kevin R. Howland.
 * Presents employment history, technical stack, and the Five Vector Schema
 * as a governance framework -- targeting technical hiring managers and
 * federal/defense architects.
 * @author K. Howland
 * @version 2.0.0
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Cpu, Zap, Activity, Briefcase, Code2 } from 'lucide-react';

/** A single employment record displayed in the experience timeline. */
interface ExperienceEntry {
    company: string;
    role: string;
    period: string;
    tags: string[];
    bullets: string[];
}

/** A single skill category in the technical stack matrix. */
interface StackCategory {
    label: string;
    items: string[];
}

/** Employment history in reverse chronological order. */
const EXPERIENCE: ExperienceEntry[] = [
    {
        company: 'DDC-Dine | DoD/DHA - NIWC',
        role: 'Senior ETL Developer',
        period: 'Dec 2022 - Present',
        tags: ['Federal', 'Zero-Trust', 'HL7', 'BDE'],
        bullets: [
            'Architecting secure Bulk Data Exchange (BDE) frameworks for mission-critical Defense Health Agency data synchronization.',
            'Managing multi-terabyte Amazon Redshift clusters with schema optimization and high-availability configuration for federal data persistence.',
            'Building custom Python, Java, and Talend parsers for HL7 OBX (Observation) data streams.',
            'Enforcing PHI/PII integrity through strict validation gates within a zero-trust federal environment.',
        ],
    },
    {
        company: 'Xsolis.com',
        role: 'Senior Data Engineer',
        period: 'Prior',
        tags: ['Healthcare AI', 'SQL Server', 'Predictive Analytics'],
        bullets: [
            'Engineered feature enhancements for the CORTEX AI platform across 21 production SQL Servers.',
            'Integrated predictive analytics into real-time patient diagnostic data pipelines.',
        ],
    },
    {
        company: 'Cigna',
        role: 'Senior Database Developer',
        period: 'Prior',
        tags: ['SSIS', 'T-SQL', 'Performance'],
        bullets: [
            'Refactored 20+ legacy SSIS packages into optimized T-SQL stored procedures.',
            'Achieved a 50% improvement in pipeline throughput and processing efficiency.',
        ],
    },
    {
        company: 'CB Richard Ellis',
        role: 'IT Business Systems Manager',
        period: 'Prior',
        tags: ['PeopleSoft', 'CRM', 'Team Lead'],
        bullets: [
            'Led a team of 4 engineers through the national rollout of PeopleSoft CRM.',
            'Managed the RealHound database ecosystem across enterprise business units.',
        ],
    },
];

/** Technical skill categories for the stack matrix. */
const STACK: StackCategory[] = [
    {
        label: 'Data & Warehousing',
        items: ['AWS Redshift', 'MS SQL Server', 'Oracle', 'T-SQL', 'SSIS', 'BDE Protocols', 'HL7'],
    },
    {
        label: 'AI & Agentic Engineering',
        items: ['Agent Orchestration', 'Five Vector Schema', 'Token Optimization', 'Zero-Trust Prompting', 'Loop Mitigation'],
    },
    {
        label: 'Development',
        items: ['Python', 'Java', 'Talend Studio', 'Bash/Shell', 'REST API', 'Workstreams.ai'],
    },
];

/** Icon mapping for the Five Vector governance cards. */
const VECTORS = [
    {
        id: 'St',
        name: 'Storage',
        icon: Database,
        color: 'from-blue-500/10 to-transparent',
        accent: 'text-blue-400',
        description:
            'Multi-terabyte data persistence across AWS Redshift, SQL Server, and Oracle. Schema-optimized for high-availability federal workloads with full audit trails.',
    },
    {
        id: 'Lo',
        name: 'Invariant Control',
        icon: Shield,
        color: 'from-cyan-500/10 to-transparent',
        accent: 'text-cyan-400',
        description:
            'Policy-as-code validation gates enforcing PHI/PII integrity. Zero-trust constraints prevent unauthorized state transitions at every pipeline stage.',
    },
    {
        id: 'T',
        name: 'Transformer',
        icon: Cpu,
        color: 'from-purple-500/10 to-transparent',
        accent: 'text-purple-400',
        description:
            'Idempotent ETL transforms using Python, Java, and Talend for HL7 data streams. Every transformation is auditable and reproducible.',
    },
    {
        id: 'Ac',
        name: 'Actuator',
        icon: Zap,
        color: 'from-orange-500/10 to-transparent',
        accent: 'text-orange-400',
        description:
            'BDE ingestion frameworks and secure REST API layers for mission-critical data synchronization. Gated I/O with cryptographically verified access.',
    },
    {
        id: 'η',
        name: 'Resonance',
        icon: Activity,
        color: 'from-emerald-500/10 to-transparent',
        accent: 'text-emerald-400',
        description:
            'Real-time telemetry and drift monitoring across all pipeline stages. Structured provenance logging for compliance, audit, and zero-trust assurance.',
    },
];

const ProfilePage: React.FC = () => {
    const glass = 'backdrop-blur-xl bg-slate-950/50 border border-white/10 rounded-[2rem] p-8';

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans p-8 md:p-16 selection:bg-cyan-500/30">

            {/* Background glows */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-6xl mx-auto space-y-16">

                {/* Header */}
                <header className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4"
                    >
                        <div className="h-px w-12 bg-cyan-500/50" />
                        <span className="text-cyan-400 font-mono tracking-widest text-xs uppercase">
                            US Navy Reserves | IT2 | Available for Federal Engagements
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-white uppercase"
                    >
                        Kevin R.{' '}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-slate-400">
                            Howland
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-slate-400 font-light max-w-3xl leading-relaxed"
                    >
                        Senior Database &amp; ETL Developer | AI Systems Architect
                    </motion.p>
                </header>

                {/* Experience Timeline */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Briefcase className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400">Experience</h2>
                    </div>

                    <div className="space-y-6">
                        {EXPERIENCE.map((job, idx) => (
                            <motion.div
                                key={job.company}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * idx + 0.2 }}
                                className={glass}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                                        <p className="text-cyan-400 font-mono text-sm">{job.role}</p>
                                    </div>
                                    <span className="text-slate-500 font-mono text-xs uppercase tracking-widest whitespace-nowrap">
                                        {job.period}
                                    </span>
                                </div>

                                <ul className="space-y-2 mb-4">
                                    {job.bullets.map((b) => (
                                        <li key={b} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                                            <span className="text-emerald-500 mt-1 shrink-0">-</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest bg-white/5 border border-white/10 rounded-full text-slate-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Technical Stack */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Code2 className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400">Technical Stack</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STACK.map((cat, idx) => (
                            <motion.div
                                key={cat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * idx + 0.3 }}
                                className={glass}
                            >
                                <h3 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-4">
                                    {cat.label}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-slate-300 font-mono"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Five Vector Governance Cards */}
                <section className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Activity className="w-5 h-5 text-cyan-400" />
                        <h2 className="text-sm font-mono uppercase tracking-widest text-cyan-400">
                            Five Vector Governance Framework
                        </h2>
                    </div>
                    <p className="text-slate-400 text-sm max-w-2xl">
                        A structured schema for separating policy from execution in enterprise AI pipelines.
                        Applied across all data engineering and agentic orchestration work.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {VECTORS.map((v, idx) => (
                            <motion.div
                                key={v.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * idx + 0.3 }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                className={`${glass} group relative overflow-hidden flex flex-col items-start gap-6`}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />
                                <div className="relative z-10 flex items-center justify-between w-full">
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                        <v.icon className={`w-6 h-6 ${v.accent}`} />
                                    </div>
                                    <span className={`font-mono text-xl ${v.accent} opacity-50`}>[{v.id}]</span>
                                </div>
                                <div className="relative z-10 space-y-2">
                                    <h3 className="text-base font-semibold text-white tracking-wide uppercase">
                                        {v.name}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                                        {v.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
                    <div className="font-mono text-xs tracking-widest uppercase">
                        Kevin R. Howland | Senior ETL Developer | AI Systems Architect
                    </div>
                    <div className="flex gap-8 font-mono text-xs tracking-widest uppercase">
                        <span>US Navy Reserves | IT2</span>
                        <span className="text-cyan-400">Available for Federal Engagements</span>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default ProfilePage;
