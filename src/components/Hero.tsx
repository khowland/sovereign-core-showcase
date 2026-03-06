'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative transition-all duration-700">
            {/* Main Glass Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 
                           backdrop-blur-xl bg-white/5 
                           border border-white/10 shadow-2xl"
            >
                {/* Ombre Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none" />

                {/* Content Placeholder */}
                <div className="relative z-10 text-center space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-cyan-400">
                        CORE <span className="text-white">MISSION</span> INITIALIZED
                    </h2>
                    <p className="text-lg text-slate-200 max-w-2xl mx-auto font-light">
                        Deploying zero-trust agentic policies across the mesh with validated glass-layer visual resonance.
                    </p>
                </div>

                {/* Reflective Edge Accents */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
