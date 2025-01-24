// src/lib/firebase/AuthProvider.tsx
"use client"
import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import {
    createUserWithEmailAndPassword, GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword, signInWithPopup,
    signOut,
    User
} from "firebase/auth";
import {auth} from "@/lib/firebase/firebase";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password);
    };

    const register = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password);
    };

    const logout = async () => {
        await signOut(auth);
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Google 로그인 실패:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout,
            loginWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    );
};