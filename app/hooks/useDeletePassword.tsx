import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import pb from '@/app/lib/pocketbase'; // Adjust the import path as necessary
import { decryptPassword } from "@/app/lib/encryption"; // Adjust the import path as necessary

const useDeletePassword = (decryptedPassword: string) => {
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

    const deletePassword = async () => {
        for (const item of data) {
            const password = item.password;
            const decryptedData = decryptPassword(password, localStorage.getItem(`iv_${item.id}`) || '', pb.authStore.model?.id || '');
            if (decryptedData === decryptedPassword) {
                await pb.collection("Account").delete(item.id);
                localStorage.removeItem(`iv_${item.id}`);
            }
        }
    };

    useEffect(() => {
        if (data.length > 0) {
            deletePassword();
        }
    }, [data, decryptedPassword]);

    return useMutation(deletePassword, {
        onSuccess: () => {
            console.log('Password and IV deleted successfully');
        },
        onError: (error) => {
            console.error('Failed to delete password:', error);
        }
    });
};

export default useDeletePassword;