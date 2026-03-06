'use client';

/**
 * @module SOVEREIGN-CORE
 * @version 1.0.0
 * @vector [Lo] Invariant Control
 * @status [Lo] REFACTOR: React State-Engine for Client-Side Routing // Five-Vector Logic Convergence
 * @author K. HOWLAND
 * @description Implements the client-side routing state-engine aligned with the Five-Vector
 *              architecture. The NavRouter enforces [Lo] invariants by validating route
 *              transitions through the policy layer before committing state changes.
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

/** Permissible route identifiers within the Sovereign-Core mesh. */
export type SovereignRoute = '/' | '/profile' | '/architecture';

interface NavState {
    /** The current active route. */
    activeRoute: SovereignRoute;
    /** Navigate to a new route, subject to [Lo] invariant validation. */
    navigate: (route: SovereignRoute) => void;
}

const NavContext = createContext<NavState | null>(null);

/**
 * Provider for the Sovereign-Core client-side routing state engine.
 * Wraps the application with navigational context aligned to [Lo] Invariant Control.
 */
export const NavRouter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeRoute, setActiveRoute] = useState<SovereignRoute>('/');

    /** [Lo] Route transition policy: only permitted routes may be activated. */
    const navigate = useCallback((route: SovereignRoute) => {
        const permittedRoutes: SovereignRoute[] = ['/', '/profile', '/architecture'];
        if (!permittedRoutes.includes(route)) {
            console.warn(`[Lo] INVARIANT VIOLATION: Route '${route}' is not a permitted transition.`);
            return;
        }
        setActiveRoute(route);
    }, []);

    return (
        <NavContext.Provider value={{ activeRoute, navigate }}>
            {children}
        </NavContext.Provider>
    );
};

/**
 * Hook to access the Sovereign-Core routing state.
 * Enforces [Lo] access control — must be used within a NavRouter context.
 */
export const useNav = (): NavState => {
    const ctx = useContext(NavContext);
    if (!ctx) {
        throw new Error('[Lo] INVARIANT BREACH: useNav must be called within a NavRouter provider.');
    }
    return ctx;
};
