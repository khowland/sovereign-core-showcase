/**
 * @module sovereign-core-showcase
 * @file layout.tsx
 * @description Root layout for the Kevin R. Howland professional portfolio.
 * Applies global font, color scheme, and metadata for hiring manager and
 * federal architect audiences.
 * @author K. Howland
 * @version 2.0.0
 */
import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Kevin R. Howland | AI Systems Architect & Senior ETL Developer',
    description:
        'Senior Database & ETL Developer specializing in AI-powered data pipelines, zero-trust federal data architecture, and autonomous AI engineering for enterprise and DoD environments.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${
                    inter.className
                } bg-slate-950 text-slate-200 selection:bg-cyan-500/30`}
            >
                {children}
            </body>
        </html>
    );
}
