/**
 * @module SOVEREIGN-CORE
 * @version 1.0.0
 * @status [Ac/η] FINAL: Sovereign-Core Autonomous Deployment
 * @author K. HOWLAND
 */
import React from 'react';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'SOVEREIGN-CORE // Mission Control',
    description: 'Nationwide AI Systems Architecture',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-slate-950 text-slate-200 selection:bg-cyan-500/30`}>
                {children}
            </body>
        </html>
    );
}
