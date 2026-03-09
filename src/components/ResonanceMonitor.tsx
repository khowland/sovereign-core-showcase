'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * @file ResonanceMonitor.tsx
 * @module sovereign-core-showcase
 * @description Live telemetry widget for the home page hero section.
 * Simulates a running ETL pipeline monitor with Five Vector status indicators.
 * Values fluctuate on a timer to demonstrate real-time observability.
 * @author K. Howland
 * @version 2.0.0
 */

/** Operational status for a single pipeline vector. */
type VectorStatus = 'NOMINAL' | 'DEVIATING' | 'CRITICAL';

/** Telemetry state for one vector in the Five Vector Schema. */
interface VectorState {
    label: string;
    value: number;
    status: VectorStatus;
    unit: string;
}

/** Log line entries shown in the telemetry stream. */
const LOG_LINES = [
    '[St] Storage layer healthy. Redshift cluster responding.',
    '[Lo] Validation gates active. All constraints enforced.',
    '[T]  Transform stage complete. Records enriched and ready.',
    '[Ac] Ingestion endpoint active. Pipeline receiving records.',
    '[η]  Telemetry sync confirmed. Drift within tolerance.',
];

const ResonanceMonitor: React.FC = () => {
    const [alignment, setAlignment] = useState<number>(98.42);
    const [logIndex, setLogIndex] = useState<number>(0);
    const [vectors, setVectors] = useState<Record<string, VectorState>>({
        St: { label: 'Storage',    value: 99.99, status: 'NOMINAL', unit: '%' },
        Lo: { label: 'Validation', value: 100,   status: 'NOMINAL', unit: '%' },
        T:  { label: 'Transform',  value: 0.999, status: 'NOMINAL', unit: 'idx' },
        Ac: { label: 'Pipeline',   value: 4502,  status: 'NOMINAL', unit: 'r/s' },
        η:  { label: 'Telemetry',  value: 0.12,  status: 'NOMINAL', unit: 'Δ' },
    });

    /** Simulates live telemetry fluctuation on an 800ms interval. */
    useEffect(() => {
        const interval = setInterval(() => {
            setAlignment((prev) =>
                parseFloat((prev + (Math.random() - 0.5) * 0.1).toFixed(2))
            );
            setVectors((prev) => ({
                ...prev,
                St: { ...prev.St, value: parseFloat((99.9 + Math.random() * 0.09).toFixed(2)) },
                T:  { ...prev.T,  value: parseFloat((0.995 + Math.random() * 0.005).toFixed(3)) },
                Ac: { ...prev.Ac, value: Math.floor(4400 + Math.random() * 200) },
                η:  { ...prev.η,  value: parseFloat((0.10 + Math.random() * 0.04).toFixed(2)) },
            }));
            setLogIndex((prev) => (prev + 1) % LOG_LINES.length);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 text-slate-200 font-mono p-4 rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">

            {/* Header */}
            <header className="flex justify-between border-b border-white/10 pb-2 mb-4 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                <div>K. Howland // Pipeline Monitor</div>
                <div className="opacity-60">Five Vector Schema</div>
            </header>

            <main className="flex-1 flex flex-col gap-4">

                {/* Alignment bar */}
                <section className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-[10px] tracking-[0.2em] mb-2 border-l-2 border-cyan-400 pl-2 text-cyan-400 uppercase">
                        Pipeline Alignment
                    </div>
                    <div className="h-3 bg-slate-900/50 border border-white/10 rounded-full overflow-hidden">
                        <motion.div
                            animate={{ width: `${alignment}%` }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        />
                    </div>
                    <div className="text-right text-[10px] mt-1 text-cyan-400/80">{alignment}% aligned</div>
                </section>

                {/* Vector status grid */}
                <section className="grid grid-cols-5 gap-2">
                    {Object.entries(vectors).map(([key, vector]) => (
                        <div
                            key={key}
                            className="border border-white/10 p-2 bg-white/5 rounded-lg flex flex-col gap-1 hover:bg-white/10 transition-colors"
                        >
                            <div className="text-[9px] font-bold text-cyan-400">[{key}]</div>
                            <div className="text-sm font-bold text-white tabular-nums">{vector.value}</div>
                            <div className="text-[8px] opacity-40 uppercase">{vector.unit}</div>
                        </div>
                    ))}
                </section>

                {/* Telemetry stream */}
                <section className="border border-white/10 p-3 bg-white/5 rounded-xl">
                    <div className="text-[10px] tracking-[0.2em] mb-2 border-l-2 border-cyan-400 pl-2 text-cyan-400 uppercase">
                        Activity Log
                    </div>
                    <motion.div
                        key={logIndex}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 0.7, y: 0 }}
                        className="text-[10px] leading-relaxed font-mono text-slate-400"
                    >
                        {LOG_LINES[logIndex]}
                    </motion.div>
                </section>
            </main>

            {/* Footer ticker */}
            <footer className="border-t border-white/10 pt-2 mt-3 flex justify-between text-[9px] uppercase font-mono tracking-tighter opacity-40">
                <span>All vectors nominal</span>
                <span className="tabular-nums">{new Date().toLocaleTimeString()}</span>
            </footer>
        </div>
    );
};

export default ResonanceMonitor;
