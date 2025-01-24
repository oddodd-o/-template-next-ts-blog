// components/ClientLayout.tsx
"use client"
import {Providers} from "@/components/providers/chakra";
import {AuthProvider} from "@/lib/firebase/AuthProvider";
import {Wrap} from "@/components/layout/Container";
import Header from "@/components/layout/header/Header";

export default function ClientLayout({ children } : { children: React.ReactNode }) {
    return (
        <Providers>
            <AuthProvider>
                <Wrap>
                    <Header />
                    <main>{children}</main>
                    <footer>푸터</footer>
                </Wrap>
            </AuthProvider>
        </Providers>
    );
}