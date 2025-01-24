// src/lib/firebase/AuthContext.tsx
"use client"
import { createContext, useContext } from 'react';
import type { AuthContextType } from './types';

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
}

export { AuthContext };