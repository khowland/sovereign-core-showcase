import React, { useState, useEffect } from 'react';

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
        <div style={styles.container}>
            <header style={styles.header}>
                <div style={styles.branding}>SOVEREIGN-CORE v1.0.0 // K. HOWLAND</div>
                <div style={styles.statusLine}>[Lo] INVARIANT LOCK: ACTIVE // SYSTEM NODE: 0xDEADBEEF</div>
            </header>

            <main style={styles.dashboard}>
                {/* Vector Alignment Pulsing Bar */}
                <section style={styles.alignmentSection}>
                    <div style={styles.sectionHeader}>VECTOR ALIGNMENT STATUS</div>
                    <div style={styles.pulseContainer}>
                        <div style={{ ...styles.pulseBar, width: `${alignment}%` }} />
                    </div>
                    <div style={styles.alignmentValue}>{alignment}% RESONANCE</div>
                </section>

                <section style={styles.vectorGrid}>
                    {Object.entries(vectors).map(([key, vector]: [string, VectorState]) => (
                        <div key={key} style={styles.vectorCard}>
                            <div style={styles.vectorHeader}>
                                <span style={styles.vectorKey}>[{key}]</span>
                                <span style={styles.vectorLabel}>{vector.label.toUpperCase()}</span>
                            </div>
                            <div style={styles.vectorData}>
                                <span style={styles.vectorValue}>{vector.value}</span>
                                <span style={styles.vectorUnit}>{vector.unit}</span>
                            </div>
                            <div style={styles.vectorFooter}>
                                STATUS: {vector.status} // COHERENCE: {(alignment * 0.99).toFixed(1)}%
                            </div>
                        </div>
                    ))}
                </section>

                <section style={styles.telemetryWall}>
                    <div style={styles.sectionHeader}>REAL-TIME TELEMETRY STREAM</div>
                    <div style={styles.telemetryStream}>
                        {`> [St] COHERENCE DETECTED: 0.9998... OK\n> [Lo] ENFORCING BOUNDARY: VOID-PTR-GDR... ACTIVE\n> [T] IDEMPOTENT TRANSFORM COMPLETE: MAPPING -> ACT_LOGIC\n> [Ac] ZERO-TRUST HANDSHAKE: K.HOWLAND (TRUSTED)\n> [η] SYSTEM DRIFT: 0.00012ms... WITHIN TOLERANCE`}
                    </div>
                </section>
            </main>

            <footer style={styles.footer}>
                <div style={styles.ticker}>
                    &gt;&gt; MONITORING VECTOR SYNC... [St] OK // [Lo] OK // [T] OK // [Ac] OK // [η] OK // SCANNING FOR ENTROPY DRIFT... NONE DETECTED //
                </div>
                <div style={styles.timestamp}>NODE_TIME: {new Date().toISOString()}</div>
            </footer>

            {/* CSS for Pulse Animation */}
            <style>{`
        @keyframes pulse {
          0% { opacity: 1; box-shadow: 0 0 5px #00FF00; }
          50% { opacity: 0.7; box-shadow: 0 0 20px #00FF00; }
          100% { opacity: 1; box-shadow: 0 0 5px #00FF00; }
        }
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
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
