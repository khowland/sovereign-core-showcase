/**
 * @module SOVEREIGN-CORE
 * @version 2.0.0
 * @vector [Lo] Invariant Control / [St] State Space
 * @status [Lo] REFACTOR: Implement React State-Engine for Multi-Vector Navigation
 * @author K. HOWLAND
 * @description Single-file React component implementing a [useState] state-engine
 *              for client-side navigation across the HOME, PROFILE, and ARCHITECTURE
 *              vectors. All state transitions are validated through [Lo] policy invariants.
 */

import React, { useState } from 'react';
import ResonanceMonitor from './components/ResonanceMonitor';
import vectorData from './data/vectors.json';
import './index.css';

// ─── [Lo] Route Invariants ────────────────────────────────────────────────────
type ActiveView = 'HOME' | 'PROFILE' | 'ARCHITECTURE';
const PERMITTED_VIEWS: ActiveView[] = ['HOME', 'PROFILE', 'ARCHITECTURE'];

// ─── Shared Styles ────────────────────────────────────────────────────────────
const glass = 'backdrop-blur-xl bg-slate-950/80 ring-1 ring-white/20 rounded-2xl';
const cardGlass = 'backdrop-blur-xl bg-slate-950/50 ring-1 ring-white/10 rounded-xl p-5 flex flex-col gap-3 transition-all hover:ring-white/20 hover:bg-slate-900/60';

// ─── Nav Component ────────────────────────────────────────────────────────────
const Nav: React.FC<{ active: ActiveView; onNav: (v: ActiveView) => void }> = ({ active, onNav }) => (
    <nav className={`${glass} px-6 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-emerald-400">
                SOVEREIGN-CORE // v2.0.0
            </span>
        </div>
        <div className="flex gap-1">
            {PERMITTED_VIEWS.map((v) => (
                <button
                    key={v}
                    onClick={() => onNav(v)}
                    className={`px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-xl transition-all ${active === v
                            ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/40'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                        }`}
                >
                    [{v}]
                </button>
            ))}
        </div>
        <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest hidden md:block">
            OPERATOR: K. HOWLAND // AUTH: L5
        </div>
    </nav>
);

// ─── HOME VIEW ────────────────────────────────────────────────────────────────
const HomeView: React.FC<{ onNav: (v: ActiveView) => void }> = ({ onNav }) => (
    <div className="space-y-8">
        {/* Hero */}
        <div className={`${glass} p-10 md:p-16 relative overflow-hidden`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            <div className="absolute top-8 right-8 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
                <span className="w-2 h-2 rounded-full bg-white/10" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 ring-1 ring-emerald-500/20 rounded-full text-emerald-400 text-[10px] font-mono uppercase tracking-widest">
                        Zero-Trust // System Status: Optimal
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-cyan-300 via-slate-200 to-slate-400 uppercase">
                            KEVIN<br />HOWLAND
                        </span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        Distinguished AI Systems Architect.<br />
                        Deploying sovereign intelligence at nationwide scale.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <button
                            onClick={() => onNav('PROFILE')}
                            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium text-sm transition-all shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:shadow-[0_0_36px_rgba(16,185,129,0.45)]"
                        >
                            View Profile →
                        </button>
                        <button
                            onClick={() => onNav('ARCHITECTURE')}
                            className="px-6 py-3 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white rounded-xl font-medium text-sm transition-all backdrop-blur-sm"
                        >
                            Architecture Schema
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="bg-slate-900/60 ring-1 ring-emerald-500/20 rounded-2xl overflow-hidden shadow-inner p-3">
                        <ResonanceMonitor />
                    </div>
                </div>
            </div>
        </div>

        {/* Vector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Object.entries(vectorData.vectors).map(([key, definition]) => (
                <div key={key} className={cardGlass}>
                    <div className="flex items-center justify-between">
                        <span className="text-emerald-400 font-mono text-xs font-bold">[{key}]</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60 animate-pulse" />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed flex-1">{definition as string}</p>
                </div>
            ))}
        </div>
    </div>
);

// ─── PROFILE VIEW ─────────────────────────────────────────────────────────────
const timeline = [
    {
        years: '2004 – 2010',
        role: 'Systems Architecture Lead',
        org: 'DoD Contractor (Classified)',
        detail:
            'Architected high-consequence ETL pipelines for secure logistics data across distributed multi-node environments. Implemented zero-trust data ingestion protocols for mission-critical DoD supply chains — processing billions of records with deterministic integrity guarantees.',
        vector: 'St',
    },
    {
        years: '2010 – 2015',
        role: 'Distributed Infrastructure Engineer',
        org: 'State Infrastructure Systems',
        detail:
            'Managed large-scale data metamorphosis for public safety networks. Designed logic-locked state transition engines and full audit trails for critical infrastructure deployments serving millions of citizens.',
        vector: 'Lo',
    },
    {
        years: '2015 – 2019',
        role: 'Principal Data Architect',
        org: 'Industrial Automation & R&D',
        detail:
            'Led idempotent ETL framework design for heavy fabrication telemetry. Built transformer pipelines capable of ingesting real-time sensor streams and mapping them to actionable inference models.',
        vector: 'T',
    },
    {
        years: '2019 – 2022',
        role: 'Zero-Trust Systems Architect',
        org: 'Distributed Intelligence Advisory',
        detail:
            'Designed gated I/O orchestration layers for multi-tenant analytics platforms. Defined infrastructure-as-identity patterns and cryptographically enforced access control for cloud-native deployments.',
        vector: 'Ac',
    },
    {
        years: '2022 – Present',
        role: 'Principal Automation Architect',
        org: 'Dagwood Sovereign Mesh',
        detail:
            'Leading agentic inference research and sovereign mesh networking development. Architecting the Dagwood Sovereign Mesh — a nationwide zero-trust intelligence fabric for distributed AI deployment.',
        vector: 'η',
    },
];

const vectorColors: Record<string, string> = {
    St: 'text-blue-400 ring-blue-500/20 bg-blue-500/5',
    Lo: 'text-cyan-400 ring-cyan-500/20 bg-cyan-500/5',
    T: 'text-purple-400 ring-purple-500/20 bg-purple-500/5',
    Ac: 'text-orange-400 ring-orange-500/20 bg-orange-500/5',
    η: 'text-emerald-400 ring-emerald-500/20 bg-emerald-500/5',
};

const ProfileView: React.FC = () => (
    <div className="space-y-8">
        <div className={`${glass} p-8 md:p-12`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="space-y-3 mb-10">
                <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em]">
                    Clearance: Level 5 // Distinguished Architect
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
                    Architect{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-slate-400">
                        Profile
                    </span>
                </h1>
                <p className="text-lg text-slate-400 font-light max-w-2xl">
                    20+ years engineering high-consequence ETL systems across DoD, public safety infrastructure,
                    and sovereign AI networks. Every system built on deterministic integrity and zero-trust assurance.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative space-y-0">
                <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/30 via-slate-700/50 to-transparent hidden md:block" />
                {timeline.map((item, idx) => (
                    <div key={idx} className="flex gap-6 group py-5 border-b border-white/5 last:border-0">
                        <div className="w-28 flex-shrink-0 text-right hidden md:block">
                            <span className="text-[10px] font-mono text-slate-500 leading-tight">{item.years}</span>
                        </div>
                        <div className="hidden md:flex items-start pt-1 flex-shrink-0">
                            <div className={`w-3.5 h-3.5 rounded-full ring-1 flex items-center justify-center text-[8px] font-bold ml-[-6.75px] mt-1.5 ${vectorColors[item.vector]}`}>
                                {item.vector !== 'η' ? item.vector.slice(0, 1) : 'η'}
                            </div>
                        </div>
                        <div className="flex-1 space-y-1.5">
                            <div className="md:hidden text-[10px] font-mono text-slate-500">{item.years}</div>
                            <div className="font-semibold text-white text-sm tracking-wide uppercase group-hover:text-emerald-300 transition-colors">
                                {item.role}
                            </div>
                            <div className="text-xs text-slate-500 font-mono">{item.org}</div>
                            <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// ─── ARCHITECTURE VIEW ────────────────────────────────────────────────────────
const archLayers = [
    { v: 'St', name: 'State Space', color: 'from-blue-500/10', ring: 'ring-blue-500/20', detail: 'Multidimensional representation of all persistent and ephemeral data. First-class state citizen across distributed nodes.' },
    { v: 'Lo', name: 'Invariant Control', color: 'from-cyan-500/10', ring: 'ring-cyan-500/20', detail: 'Logic layer governing state transitions. No operation violates fundamental constraints. Invariants are absolute.' },
    { v: 'T', name: 'Transformer', color: 'from-purple-500/10', ring: 'ring-purple-500/20', detail: 'Engine for data metamorphosis and agentic inference. All ETL transformations remain idempotent and auditable.' },
    { v: 'Ac', name: 'Actuator', color: 'from-orange-500/10', ring: 'ring-orange-500/20', detail: 'Zero-trust orchestration layer. Who can do what, under what telemetry conditions. Cryptographically verified.' },
    { v: 'η', name: 'Resonance', color: 'from-emerald-500/10', ring: 'ring-emerald-500/20', detail: 'High-fidelity telemetry and alignment monitoring. Real-time drift detection. Zero-trust assurance feedback loop.' },
];

const ArchitectureView: React.FC = () => (
    <div className="space-y-4">
        <div className={`${glass} p-8 mb-2`}>
            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.3em]">System Architecture // Five-Vector Schema</span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight uppercase mt-2">
                FIVE-VECTOR{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">SCHEMA</span>
            </h1>
            <p className="text-slate-400 font-light mt-3 max-w-3xl">
                The immutable DNA of the operational mesh. Every subsystem, transaction, and state
                transition must align with these five architectural vectors.
            </p>
        </div>
        {archLayers.map((layer) => (
            <div
                key={layer.v}
                className={`${glass} p-6 md:p-8 bg-gradient-to-br ${layer.color} to-transparent relative overflow-hidden group hover:ring-white/30 transition-all`}
            >
                <div className="absolute top-4 right-6 text-7xl font-black text-white/5 font-mono select-none group-hover:text-white/[0.07] transition-colors">
                    {layer.v}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center relative z-10">
                    <div className="md:col-span-2">
                        <span className={`inline-block px-3 py-1.5 rounded-lg ring-1 font-mono text-xs font-bold ${vectorColors[layer.v]}`}>
                            [{layer.v}] {layer.name}
                        </span>
                    </div>
                    <p className="md:col-span-8 text-slate-300 leading-relaxed">{layer.detail}</p>
                    <div className="md:col-span-2 flex justify-end">
                        <span className={`px-3 py-1 rounded-full ring-1 text-[10px] font-mono uppercase tracking-widest ${vectorColors[layer.v]}`}>
                            NOMINAL
                        </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

// ─── ROOT APP ─────────────────────────────────────────────────────────────────
const App: React.FC = () => {
    // [St] Application state — single source of truth for active view
    const [activeView, setActiveView] = useState<ActiveView>('HOME');

    // [Lo] Navigation policy — only permitted views may be activated
    const navigate = (view: ActiveView) => {
        if (!PERMITTED_VIEWS.includes(view)) return;
        setActiveView(view);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
            {/* Ambient glow backdrop */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-24 w-72 h-72 bg-emerald-500/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 space-y-6">
                <Nav active={activeView} onNav={navigate} />

                {/* [St] View state machine */}
                {activeView === 'HOME' && <HomeView onNav={navigate} />}
                {activeView === 'PROFILE' && <ProfileView />}
                {activeView === 'ARCHITECTURE' && <ArchitectureView />}

                {/* Global footer */}
                <footer className="text-center text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600 py-4 border-t border-white/5">
                    © 2026 SOVEREIGN-CORE // ZERO-TRUST PROTOCOL ACTIVE // K. HOWLAND
                </footer>
            </div>
        </div>
    );
};

export default App;
