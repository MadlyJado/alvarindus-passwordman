import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { decryptPassword } from "../lib/encryption";
import crypto from 'crypto';
import { useEffect, useState } from "react";

export default function useDeletePassword() {
    async function deletePassword(decryptedPassword: any) {

        
        const [data, setData] = useState<any[]>([]);

        useEffect(() => {
            const fetchData = async () => {
                if (pb.authStore.model) {
                    const usremail = pb.authStore.model.email;
                    try {
                        const records = await pb.collection("Account").getFullList({ filter: `user="${usremail}"` });
                        setData(records);
                    } catch (error) {
                        console.error("Error fetching data:", error);
                    }
                }
             };

        fetchData();
    }, []);

    data.map((item) => {
        const password = item.password;
        const decryptedData = decryptPassword(password, localStorage.getItem(`iv_${item.id}`) || '', pb.authStore.model?.id || '');
        if (decryptedData === decryptedPassword) {
            pb.collection("Account").delete(item.id);
            localStorage.removeItem(`iv_${item.id}`);
        }
    });

        
    }

    return useMutation(deletePassword, {
        onSuccess: (data) => {
            console.log('Password and IV saved successfully');
        },
        onError: (error) => {
            console.error('Failed to save password:', error);
        }
    });
}