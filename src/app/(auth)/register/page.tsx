"use client";

import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { SlimLayout } from '@/components/layout/SlimLayout'
import {Logo} from "@/components/common/Logo";
import {SelectField, TextField} from "@/components/form/Fields";
import {useAuth} from "@/lib/firebase/auth";
import {useRouter} from "next/navigation";
import {useState} from "react";

// export const metadata: Metadata = {
//     title: 'Sign Up',
// }

export default function RegisterPage() {

    const { register } = useAuth();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // 이메일 회원가입 처리
    const handleRegister = async (event: any) => {
        event.preventDefault();

        // 유효성 검사
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            await register(email, password);
            router.push('/');
        } catch (err) {
            setError('회원가입 실패: 이메일 형식이 올바르지 않거나 비밀번호가 너무 짧습니다.');
        }
    };

    return (
        <SlimLayout>
            <div className="flex">
                <Link href="/" aria-label="Home">
                    <Logo className="h-10 w-auto" />
                </Link>
            </div>
            <h2 className="mt-20 text-lg font-semibold text-gray-900">
                Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
                Already registered?{' '}
                <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Sign in
                </Link>{' '}
                to your account.
            </p>
            <form
                action="#"
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                onSubmit={handleRegister}
            >
                <TextField
                    className="col-span-full"
                    label="이름"
                    name="displayName"
                    value={displayName}
                    type="text"
                    autoComplete="given-name"
                    required
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <TextField
                    className="col-span-full"
                    label="이메일"
                    name="email"
                    value={email}
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className="col-span-full"
                    label="비밀번호"
                    name="password"
                    value={password}
                    type="password"
                    autoComplete="new-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    className="col-span-full"
                    label="비밀번호 확인"
                    name="PasswordConfirm"
                    value={passwordConfirm}
                    type="password"
                    autoComplete="new-password"
                    required
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <div className="col-span-full">
                    <Button type="submit" color="blue" className="w-full">
                        <span>
                          Sign up <span aria-hidden="true">&rarr;</span>
                        </span>
                    </Button>
                </div>
            </form>
        </SlimLayout>
    )
}
