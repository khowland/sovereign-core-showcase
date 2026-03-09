'use client';

/**
 * @file Hero.tsx
 * @module sovereign-core-showcase
 * @description Hero banner component for the Sovereign-Core showcase.
 * Presents Kevin R. Howland's core professional positioning in a
 * high-contrast glassmorphic container.
 * @author K. Howland
 * @version 2.0.0
 */

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative transition-all duration-700">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-[3rem] p-12 md:p-24
                           backdrop-blur-xl bg-white/5
                           border border-white/10 shadow-2xl"
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

                <div className="relative z-10 text-center space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-cyan-400 uppercase">
                        Kevin R.{' '}
                        <span className="text-white">Howland</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
                        Senior Database &amp; ETL Developer | AI Systems Architect
                    </p>
                    <p className="text-sm text-slate-400 max-w-xl mx-auto">
                        Bridging enterprise data warehousing with autonomous AI engineering.
                    </p>
                </div>

                {/* Edge accents */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
