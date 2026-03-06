'use client';

/**
 * @module SOVEREIGN-CORE
 * @version 1.0.0
 * @vector [Ac] Actuator
 * @status [Ac] STYLE: Inject 3D Glassmorphic Depth (Z-Index Layering) & Backdrop-Blur-2xl
 * @author K. HOWLAND
 * @description Implements the standardized GlassPanel container component for all page
 *              surfaces within the Sovereign-Core mesh. Enforces visual depth hierarchy
 *              via [Ac]-gated Z-index stratification and layered backdrop filters.
 */

import React from 'react';

/** Semantic depth layers for zero-trust Z-index architecture. */
export type GlassDepth = 'surface' | 'elevated' | 'overlay' | 'modal';

const depthClasses: Record<GlassDepth, string> = {
    surface: 'z-0  bg-slate-950/40 backdrop-blur-xl  border border-white/10 shadow-lg',
    elevated: 'z-10 bg-slate-950/50 backdrop-blur-2xl border border-white/10 shadow-xl',
    overlay: 'z-20 bg-slate-950/60 backdrop-blur-2xl border border-white/15 shadow-2xl',
    modal: 'z-30 bg-slate-950/70 backdrop-blur-2xl border border-white/20 shadow-[0_32px_64px_rgba(0,0,0,0.5)]',
};

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Visual depth layer governing z-index and blur intensity. */
    depth?: GlassDepth;
    /** Optional additional className overrides. */
    className?: string;
    children: React.ReactNode;
}

/**
 * GlassPanel — The canonical surface container for the Sovereign-Core UI system.
 *
 * All exposed surfaces must render through this component to maintain consistent
 * 3D depth stratification and glassmorphic visual fidelity across the mesh.
 *
 * @example
 * ```tsx
 * <GlassPanel depth="elevated" className="rounded-3xl p-8">
 *   <HeroContent />
 * </GlassPanel>
 * ```
 */
export const GlassPanel: React.FC<GlassPanelProps> = ({
    depth = 'elevated',
    className = '',
    children,
    ...rest
}) => {
    const base = 'relative rounded-3xl transition-all duration-300';
    const depthStyle = depthClasses[depth];

    return (
        <div className={`${base} ${depthStyle} ${className}`} {...rest}>
            {/* Inner highlight rim — simulates light refraction on the top edge */}
            <div
                className="absolute inset-x-0 top-0 h-px rounded-t-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                aria-hidden="true"
            />
            {children}
        </div>
    );
};

export default GlassPanel;
