import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * SOVEREIGN-CORE v1.0.0 // K. HOWLAND
 * Component: ResonanceMonitor
 * Aesthetic: High-Density Telemetry (#00FF00 on Black)
 * Goal: Visualize health for [St, Lo, T, Ac, η]
 */

interface VectorState {
    label: string;
    value: number;
    status: 'NOMINAL' | 'DEVIATING' | 'CRITICAL';
    unit: string;
}

const ResonanceMonitor: React.FC = () => {
    const [alignment, setAlignment] = useState<number>(98.42);
    const [vectors, setVectors] = useState<Record<string, VectorState>>({
        St: { label: 'State Space', value: 1024.4, status: 'NOMINAL', unit: 'PB' },
        Lo: { label: 'Invariant Law', value: 100, status: 'NOMINAL', unit: '%' },
        T: { label: 'Transformer', value: 0.999, status: 'NOMINAL', unit: 'coeff' },
        Ac: { label: 'Action & Access', value: 4502, status: 'NOMINAL', unit: 'req/s' },
        η: { label: 'Resonance', value: 0.12, status: 'NOMINAL', unit: 'Δ' },
    });

    // Mock telemetry loop
    useEffect(() => {
        const interval = setInterval(() => {
            setAlignment((prev: number) => {
                const jitter = (Math.random() - 0.5) * 0.1;
                return parseFloat((prev + jitter).toFixed(2));
            });

            setVectors((prev: Record<string, VectorState>) => ({
                ...prev,
                St: { ...prev.St, value: parseFloat((prev.St.value + Math.random() * 0.1).toFixed(1)) },
                T: { ...prev.T, value: parseFloat((0.995 + Math.random() * 0.005).toFixed(3)) },
                Ac: { ...prev.Ac, value: Math.floor(4500 + Math.random() * 100) },
                η: { ...prev.η, value: parseFloat((0.12 + Math.random() * 0.02).toFixed(2)) },
            }));
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 text-slate-200 font-mono p-4 rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl relative">
            <header className="flex justify-between border-b border-white/10 pb-2 mb-4 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                <div>SOVEREIGN-CORE v1.0.0 // K. HOWLAND</div>
                <div className="opacity-60">[Lo] INVARIANT LOCK: ACTIVE</div>
            </header>

            <main className="flex-1 flex flex-col gap-6">
                {/* Vector Alignment Pulsing Bar */}
                <section className="p-3 bg-white/5 border border-white/10 rounded-xl">
                    <div className="text-[10px] tracking-[0.2em] mb-2 border-l-2 border-cyan-400 pl-2 text-cyan-400 uppercase">Vector Alignment Status</div>
                    <div className="h-4 bg-slate-900/50 border border-white/10 rounded-full overflow-hidden relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${alignment}%` }}
                            className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        />
                    </div>
                    <div className="text-right text-[10px] mt-1 text-cyan-400/80">{alignment}% RESONANCE</div>
                </section>

                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {Object.entries(vectors).map(([key, vector]: [string, VectorState]) => (
                        <div key={key} className="border border-white/10 p-3 bg-white/5 rounded-lg flex flex-col gap-1 transition-all hover:bg-white/10 group">
                            <div className="flex gap-2 text-[10px] font-bold">
                                <span className="text-cyan-400">[{key}]</span>
                                <span className="opacity-60 group-hover:opacity-100 transition-opacity uppercase">{vector.label}</span>
                            </div>
                            <div className="text-lg font-bold text-white flex items-end gap-1">
                                {vector.value}
                                <span className="text-[8px] opacity-40 mb-1">{vector.unit}</span>
                            </div>
                            <div className="text-[8px] border-t border-white/5 pt-1 mt-1 opacity-40 uppercase tracking-tighter">
                                {vector.status} // {(alignment * 0.99).toFixed(1)}%
                            </div>
                        </div>
                    ))}
                </section>

                <section className="flex-1 border border-white/10 p-4 bg-white/5 rounded-xl overflow-hidden relative">
                    <div className="text-[10px] tracking-[0.2em] mb-2 border-l-2 border-cyan-400 pl-2 text-cyan-400 uppercase">Real-Time Telemetry Stream</div>
                    <div className="text-[10px] leading-relaxed opacity-60 font-mono whitespace-pre-wrap">
                        {`> [St] COHERENCE DETECTED: 0.9998... OK\n> [Lo] ENFORCING BOUNDARY: VOID-PTR-GDR... ACTIVE\n> [T] IDEMPOTENT TRANSFORM COMPLETE: MAPPING -> ACT_LOGIC\n> [Ac] ZERO-TRUST HANDSHAKE: K.HOWLAND (TRUSTED)\n> [η] SYSTEM DRIFT: 0.00012ms... WITHIN TOLERANCE`}
                    </div>
                </section>
            </main>

            <footer className="border-t border-white/10 pt-3 mt-4 flex justify-between text-[10px] uppercase font-mono tracking-tighter opacity-40">
                <div className="flex-1 overflow-hidden whitespace-nowrap">
                    &gt;&gt; MONITORING VECTOR SYNC... [St] OK // [Lo] OK // [T] OK // [Ac] OK // [η] OK // SCANNING...
                </div>
                <div className="ml-4 tabular-nums">{new Date().toLocaleTimeString()}</div>
            </footer>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        backgroundColor: '#000000',
        color: '#00FF00',
        fontFamily: '"Share Tech Mono", monospace',
        padding: '15px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #00FF00',
        boxSizing: 'border-box',
        overflow: 'hidden'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '2px solid #00FF00',
        paddingBottom: '8px',
        marginBottom: '15px',
        fontSize: '0.9rem',
        fontWeight: 'bold'
    },
    branding: {
        letterSpacing: '1px'
    },
    statusLine: {
        opacity: 0.8,
        fontSize: '0.7rem'
    },
    dashboard: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    },
    alignmentSection: {
        padding: '10px',
        border: '1px solid #00FF00',
        background: 'rgba(0, 255, 0, 0.02)'
    },
    sectionHeader: {
        fontSize: '0.7rem',
        letterSpacing: '2px',
        marginBottom: '10px',
        borderLeft: '4px solid #00FF00',
        paddingLeft: '8px'
    },
    pulseContainer: {
        height: '20px',
        backgroundColor: '#002200',
        border: '1px solid #00FF00',
        position: 'relative',
        overflow: 'hidden'
    },
    pulseBar: {
        height: '100%',
        backgroundColor: '#00FF00',
        animation: 'pulse 2s infinite ease-in-out',
        transition: 'width 0.3s ease'
    },
    alignmentValue: {
        textAlign: 'right',
        fontSize: '0.8rem',
        marginTop: '5px'
    },
    vectorGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px'
    },
    vectorCard: {
        border: '1px solid #00FF00',
        padding: '12px',
        background: 'rgba(0, 255, 0, 0.05)'
    },
    vectorHeader: {
        display: 'flex',
        gap: '6px',
        marginBottom: '8px',
        fontSize: '0.75rem',
        fontWeight: 'bold'
    },
    vectorKey: {
        color: '#00FF00'
    },
    vectorLabel: {
        opacity: 0.9
    },
    vectorData: {
        fontSize: '1.6rem',
        marginBottom: '5px'
    },
    vectorUnit: {
        fontSize: '0.65rem',
        marginLeft: '5px',
        opacity: 0.7
    },
    vectorFooter: {
        fontSize: '0.6rem',
        borderTop: '1px dotted #00FF00',
        paddingTop: '5px',
        marginTop: '5px',
        opacity: 0.8
    },
    telemetryWall: {
        flex: 1,
        border: '1px solid #00FF00',
        padding: '10px',
        background: 'rgba(0, 255, 0, 0.02)',
        overflow: 'hidden'
    },
    telemetryStream: {
        fontSize: '0.7rem',
        lineHeight: '1.4',
        whiteSpace: 'pre-wrap',
        opacity: 0.9
    },
    footer: {
        borderTop: '2px solid #00FF00',
        paddingTop: '10px',
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.65rem'
    },
    ticker: {
        flex: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    },
    timestamp: {
        marginLeft: '20px',
        opacity: 0.7
    }
};

export default ResonanceMonitor;
