'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PasswordManGrid from '../Components/PasswordManGrid/PasswordManGrid';

const ViewPasswords: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        const passphrase = sessionStorage.getItem('userPassphrase');
        if (!passphrase) {
            router.push('/create-passphrase');
        }
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-lime-700 to-emerald-500 text-white p-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8">
                Current Saved Logins
            </h1>
            <PasswordManGrid />
        </div>
    );
};

export default ViewPasswords;
