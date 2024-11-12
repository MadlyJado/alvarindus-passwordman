'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const CreatePassphrase: NextPage = () => {
    const router = useRouter();
    const [passphrase, setPassphrase] = useState('');
    const [confirmPassphrase, setConfirmPassphrase] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (passphrase !== confirmPassphrase) {
            setError('Passphrases do not match');
            return;
        }

        if (passphrase.length < 8) {
            setError('Passphrase must be at least 8 characters long');
            return;
        }

        // Store passphrase in sessionStorage
        sessionStorage.setItem('userPassphrase', passphrase);
        router.push('/viewpasswords');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-500 to-teal-700 text-white">
            <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
                Create Your Passphrase
            </h1>
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg items-center">
                <input
                    type="password"
                    placeholder="Enter your passphrase"
                    className="input input-bordered w-full mb-4 p-4"
                    value={passphrase}
                    onChange={(e) => setPassphrase(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirm your passphrase"
                    className="input input-bordered w-full mb-6 p-4"
                    value={confirmPassphrase}
                    onChange={(e) => setConfirmPassphrase(e.target.value)}
                />
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    onClick={handleSubmit}
                    className="btn btn-primary btn-lg shadow-lg hover:scale-105 transform transition-all duration-300"
                >
                    Save Passphrase
                </button>
            </div>
        </div>
    );
};

export default CreatePassphrase;
