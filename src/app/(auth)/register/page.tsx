"use client";

import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";

import { Button } from '@/components/ui/button';
import { SlimLayout } from '@/components/layout/SlimLayout';
import { Logo } from "@/components/common/Logo";
import { TextField } from "@/components/form/Fields";
import { useAuth } from "@/lib/firebase/auth";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

interface FormData {
    displayName: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

interface FormErrors {
    displayName?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
    general?: string;
}

export default function RegisterPage() {
    const { register } = useAuth();
    const router = useRouter();

    // Form state
    const [formData, setFormData] = useState<FormData>({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [isLoading, setIsLoading] = useState(false);

    // Form validation
    const validateForm = useCallback(() => {
        const newErrors: FormErrors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const nameRegex = /^[가-힣a-zA-Z\s]{2,20}$/;

        // 이름 검증
        if (!formData.displayName) {
            newErrors.displayName = "이름을 입력해주세요.";
        } else if (!nameRegex.test(formData.displayName)) {
            newErrors.displayName = "이름은 2-20자의 한글 또는 영문이어야 합니다.";
        }

        // 이메일 검증
        if (!formData.email) {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "올바른 이메일 형식이 아닙니다.";
        }

        // 비밀번호 검증
        if (!formData.password) {
            newErrors.password = "비밀번호를 입력해주세요.";
        } else if (formData.password.length < 8) {
            newErrors.password = "비밀번호는 8자 이상이어야 합니다.";
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "비밀번호는 최소 1개의 숫자를 포함해야 합니다.";
        }

        // 비밀번호 확인 검증
        if (!formData.passwordConfirm) {
            newErrors.passwordConfirm = "비밀번호 확인을 입력해주세요.";
        } else if (formData.password !== formData.passwordConfirm) {
            newErrors.passwordConfirm = "비밀번호가 일치하지 않습니다.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }, [formData]);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error("입력 정보를 확인해주세요.");
            return;
        }

        setIsLoading(true);
        try {
            const userCredential = await register(formData.email, formData.password);
            const user = userCredential.user;

            if (user) {
                await user.updateProfile({
                    displayName: formData.displayName,
                });
                toast.success("회원가입이 완료되었습니다.");
                router.push('/login');
            }
        } catch (err: any) {
            console.error('Registration error:', err);
            let errorMessage = "회원가입에 실패했습니다.";

            // Firebase 에러 메시지 처리
            if (err.code === 'auth/email-already-in-use') {
                errorMessage = "이미 사용 중인 이메일입니다.";
            } else if (err.code === 'auth/invalid-email') {
                errorMessage = "올바르지 않은 이메일 형식입니다.";
            } else if (err.code === 'auth/operation-not-allowed') {
                errorMessage = "이메일/비밀번호 회원가입이 비활성화되어 있습니다.";
            } else if (err.code === 'auth/weak-password') {
                errorMessage = "비밀번호가 너무 약합니다.";
            }

            setErrors({ general: errorMessage });
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SlimLayout>
            <div className="flex">
                <Link href="/" aria-label="홈으로 이동">
                    <Logo className="h-10 w-auto" />
                </Link>
            </div>

            <div className="mt-20">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                    회원가입
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                    이미 계정이 있으신가요?{' '}
                    <Link
                        href="/login"
                        className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
                    >
                        로그인
                    </Link>
                </p>
            </div>

            {errors.general && (
                <Alert variant="destructive" className="mt-6">
                    <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
            )}

            <form
                className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField
                    className="col-span-full"
                    label="이름"
                    name="displayName"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.displayName}
                    onChange={handleChange}
                    error={errors.displayName}
                    disabled={isLoading}
                    aria-invalid={!!errors.displayName}
                    aria-describedby={errors.displayName ? "displayName-error" : undefined}
                />
                <TextField
                    className="col-span-full"
                    label="이메일"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    disabled={isLoading}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                <TextField
                    className="col-span-full"
                    label="비밀번호"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    disabled={isLoading}
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? "password-error" : undefined}
                    hint="8자 이상, 대문자 1개 이상, 숫자 1개 이상 포함"
                />
                <TextField
                    className="col-span-full"
                    label="비밀번호 확인"
                    name="passwordConfirm"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    error={errors.passwordConfirm}
                    disabled={isLoading}
                    aria-invalid={!!errors.passwordConfirm}
                    aria-describedby={errors.passwordConfirm ? "passwordConfirm-error" : undefined}
                />

                <div className="col-span-full">
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                        aria-busy={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                회원가입 중...
                            </>
                        ) : (
                            "회원가입"
                        )}
                    </Button>
                </div>
            </form>
        </SlimLayout>
    );
}