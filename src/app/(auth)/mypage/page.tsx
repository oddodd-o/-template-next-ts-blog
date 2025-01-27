"use client";

import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Image from "next/image";

const MyPage = () => {

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        })

        return () => unsubscribe();
    }, []);

    if (!user) {
        return <div>loading...</div>
    }

    return (
        <div>
            <h1>MyPage</h1>
            <ul>
                <li>
                    <strong>email</strong> : {user.email || 'null'}
                </li>
                <li>
                    <strong>displayName</strong> : {user.displayName || 'null'}
                </li>
                <li>
                    <strong>photoURL</strong> : {user.photoURL ? <Image src={user.photoURL} alt="profile" style={{width: 100, height: 100}}/> : 'null'}
                </li>
            </ul>
        </div>
    );
}

export default MyPage;