"use client";

import {useEffect} from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/lib/firebase/auth";
import {useRouter} from "next/navigation";
import {toast} from "react-toastify";
import Container from "@/components/layout/Container";

const ProfilePage = () => {

    const {user, logout} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/")
        }
    }, [user, router]);

    if (!user) {
        return <div>로딩 중...</div>
    }

    const handleSignOut = async () => {
        try {
         await logout()
            router.push("/login")
            toast.success('로그아웃되었습니다.')
        } catch (err) {
            console.error('로그아웃 실패', err)
            toast.error('로그아웃 실패')
        }
    }

    return (
        <Container>
            <div>
                <h1>마이페이지</h1>
                <ul>
                    <li>
                        <strong>이메일</strong> : {user.email || '정보 없음'}
                    </li>
                    <li>
                        <strong>이름</strong> : {user.displayName || '정보 없음'}
                    </li>
                    <li>
                        <strong>프로필 이미지</strong> : {user.photoURL ? <Image src={user.photoURL} alt="profile" style={{width: 100, height: 100}}/> : '프로필 이미지 없음'}
                    </li>
                    <li>
                        <Button onClick={handleSignOut}>로그아웃</Button>
                    </li>
                </ul>
            </div>
        </Container>
    );
}

export default ProfilePage;