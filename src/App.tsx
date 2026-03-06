import React from 'react';
import ResonanceMonitor from './components/ResonanceMonitor';
import vectorData from './data/vectors.json';
import './index.css';

const App: React.FC = () => {
    const experiences = [
        { year: '2004-2010', role: 'Strategic Nationwide Systems Architecture', org: 'DoD Contractor (Classified)', detail: 'Architected high-consequence ETL pipelines for secure logistics data. Implemented zero-trust data ingestion protocols across distributed multi-node environments.' },
        { year: '2011-2015', role: 'Distributed Multi-Node Engineering', org: 'State Infrastructure Systems', detail: 'Managed large-scale data metamorphosis for public safety networks. Focused on logic-locked state transitions and auditability for critical infrastructure.' },
        { year: '2016-Present', role: 'Principal Automation Architect', org: 'Advisory and Heavy Fabrication for Distributed R&D Projects', detail: 'Leading agentic inference research and industrial automation. Contributing to sovereign mesh networking development and nationwide intelligence deployment.' }
    ];

    return (
        <div className="dashboard-root" style={styles.dashboard}>
            <div className="scanline"></div>

            {/* HEADER */}
            <header style={styles.header}>
                <div style={styles.glitchBox}>
                    <h1 style={styles.title}>KEVIN HOWLAND // DISTINGUISHED AI SYSTEMS ARCHITECT</h1>
                    <p style={styles.subtitle}>DEPLOYING SOVEREIGN INTELLIGENCE NATIONWIDE // v1.0.0</p>
                </div>
                <div style={styles.authInfo}>
                    OPERATOR: K. HOWLAND<br />
                    STATUS: AUTHORIZED [LO-LOCK]
                </div>
            </header>

            {/* TOP VECTOR ROW */}
            <section style={styles.vectorGrid}>
                {Object.entries(vectorData.vectors).map(([key, vector]: [string, any]) => (
                    <div key={key} style={styles.vectorCard}>
                        <div style={styles.cardHeader}>
                            <span style={styles.vectorKey}>[{key}]</span>
                            <span style={styles.vectorId}>{vector.id}</span>
                        </div>
                        <div style={styles.cardBody}>
                            {vector.definition}
                        </div>
                        <div style={styles.cardFooter}>
                            INVARIANT: {vector.invariant}
                        </div>
                    </div>
                ))}
            </section>

            {/* CENTRAL CORE */}
            <section style={styles.centralCore}>
                <div style={styles.monitorWrapper}>
                    <ResonanceMonitor />
                </div>

                {/* TIMELINE SECTION */}
                <div style={styles.timelineContainer}>
                    <h2 style={styles.timelineTitle}>20+ YEARS HIGH-CONSEQUENCE ETL</h2>
                    <div style={styles.timeline}>
                        {experiences.map((exp, idx) => (
                            <div key={idx} style={styles.timelineItem}>
                                <div style={styles.timelineYear}>{exp.year}</div>
                                <div style={styles.timelineContent}>
                                    <div style={styles.expRole}>{exp.role}</div>
                                    <div style={styles.expOrg}>{exp.org}</div>
                                    <p style={styles.expDetail}>{exp.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={styles.footer}>
                SYSTEM RESIDUE: NONE // ENFORCING BOUNDARY CONDITIONS... OK // (C) 2026 SOVEREIGN-CORE
            </footer>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    dashboard: {
        padding: '40px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
        paddingBottom: '20px',
    },
    glitchBox: {
        borderLeft: '5px solid var(--emerald-500)',
        paddingLeft: '20px',
    },
    title: {
        fontSize: '2.5rem',
        letterSpacing: '5px',
        textShadow: '0 0 10px #10b981',
    },
    subtitle: {
        fontSize: '0.9rem',
        opacity: 0.7,
        letterSpacing: '2px',
    },
    authInfo: {
        textAlign: 'right',
        fontSize: '0.8rem',
        lineHeight: '1.6',
        opacity: 0.8,
    },
    vectorGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '20px',
    },
    vectorCard: {
        background: 'rgba(6, 78, 59, 0.1)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        transition: 'all 0.3s ease',
        boxShadow: 'var(--glow)',
        cursor: 'default',
    },
    cardHeader: {
        display: 'flex',
        gap: '10px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
    },
    vectorKey: {
        color: '#D4AF37', // Maintaining some gold for contrast
    },
    vectorId: {
        color: 'var(--emerald-500)',
    },
    cardBody: {
        fontSize: '0.75rem',
        lineHeight: '1.4',
        opacity: 0.8,
        flex: 1,
    },
    cardFooter: {
        fontSize: '0.65rem',
        borderTop: '1px solid rgba(16, 185, 129, 0.2)',
        paddingTop: '8px',
        color: '#D4AF37',
        fontWeight: 'bold',
    },
    centralCore: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '30px',
        flex: 1,
    },
    monitorWrapper: {
        border: '1px solid rgba(16, 185, 129, 0.5)',
        boxShadow: 'var(--glow-intense)',
        background: '#0a0a0a',
        borderRadius: '4px',
        overflow: 'hidden',
    },
    timelineContainer: {
        border: '1px solid rgba(16, 185, 129, 0.3)',
        padding: '30px',
        background: 'rgba(6, 78, 59, 0.05)',
    },
    timelineTitle: {
        fontSize: '1rem',
        letterSpacing: '3px',
        marginBottom: '20px',
        borderBottom: '1px solid rgba(16, 185, 129, 0.3)',
        paddingBottom: '10px',
    },
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
    },
    timelineItem: {
        display: 'flex',
        gap: '20px',
    },
    timelineYear: {
        minWidth: '100px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        opacity: 0.7,
    },
    timelineContent: {
        flex: 1,
    },
    expRole: {
        fontSize: '0.95rem',
        fontWeight: 'bold',
        color: 'var(--emerald-500)',
        marginBottom: '4px',
    },
    expOrg: {
        fontSize: '0.85rem',
        opacity: 0.6,
        marginBottom: '10px',
    },
    expDetail: {
        fontSize: '0.75rem',
        lineHeight: '1.5',
        opacity: 0.8,
    },
    footer: {
        textAlign: 'center',
        fontSize: '0.7rem',
        opacity: 0.5,
        borderTop: '1px solid rgba(16, 185, 129, 0.2)',
        paddingTop: '20px',
        letterSpacing: '2px',
    }
};

export default App;
