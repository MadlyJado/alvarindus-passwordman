'use client';

import pb from "@/app/lib/pocketbase";
import { useEffect, useState } from "react";
import { decryptPassword } from "@/utils/crypto";
import PasswordManCard from "../PasswordManCard/PasswordManCard";
import { isPasswordStrong } from "@/app/lib/passwordstrength";

function PasswordManGrid() {
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    // Fetch the passphrase from session storage
    const passphrase = typeof window !== 'undefined' ? sessionStorage.getItem('userPassphrase') : null;

    useEffect(() => {
        const fetchData = async () => {
            if (pb.authStore.model) {
                const usremail = pb.authStore.model.email;
                try {
                    const records = await pb.collection("Account").getFullList({ filter: `user="${usremail}"` });
                    setData(records);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError("Failed to fetch data");
                }
            }
        };

        fetchData();
    }, []);

    const handleDelete = (id: string) => {
        setData(data.filter((item) => item.id !== id));
    };

    function handleDecrypt(password: string) {
        if (!passphrase) {
            setError("Passphrase is required to decrypt passwords");
            return "";
        }

        try {
            const decryptedPass = decryptPassword(password, passphrase);
            return decryptedPass;
        } catch (error) {
            console.error("Error decrypting password:", error);
            setError("Failed to decrypt password");
            return "";
        }
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-md p-6 rounded-lg shadow-lg items-center bg-violet-950">
            {data.map((item) => {
                const decryptedPassword = handleDecrypt(item.password);
                return (
                    <PasswordManCard
                        key={item.id}
                        name={item.name}
                        email={item.email}
                        password={decryptedPassword}
                        passwordStrength={isPasswordStrong(decryptedPassword) || 0.0}
                        url={item.websiteurl}
                        onDelete={() => handleDelete(item.id)}
                    />
                );
            })}
        </div>
    );
}

export default PasswordManGrid;
