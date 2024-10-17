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

        for (const record of data) {
            const unEncryptedPass = decryptPassword(record.password, localStorage.getItem(`iv_${record.id}`) || "", pb.authStore.model?.id || "");
            if (unEncryptedPass === decryptedPassword) {
                try {
                    const isDeleted = await pb.collection("Account").delete(record.id);
                    console.log('Password deleted successfully');
                    break;
                } catch (error) {
                    console.error('Failed to delete password:', error);
                    break;
                }
            }  // else continue to next record in the list  // Handle the case where the password is not found in the list
        }

        
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