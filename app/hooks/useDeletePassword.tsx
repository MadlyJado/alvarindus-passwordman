import pb from "../lib/pocketbase";
import { useMutation, useQueryClient } from "react-query";
import { decryptPassword } from "../lib/encryption";
import { useEffect, useState } from "react";

export default function useDeletePassword() {
    const [data, setData] = useState<any[]>([]);
    const queryClient = useQueryClient();

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

    async function deletePassword(decryptedPassword: string) {
        const itemToDelete = data.find(item => 
            decryptPassword(item.password, localStorage.getItem(`iv_${item.id}`) || '', pb.authStore.model?.id || '') === decryptedPassword
        );

        if (itemToDelete) {
            await pb.collection("Account").delete(itemToDelete.id);
            localStorage.removeItem(`iv_${itemToDelete.id}`);
            return itemToDelete.id;
        } else {
            throw new Error("Password not found");
        }
    }

    return useMutation(deletePassword, {
        onSuccess: (deletedId) => {
            console.log('Password deleted successfully');
            queryClient.invalidateQueries('passwords'); // Assuming you have a query key for fetching passwords
        },
        onError: (error) => {
            console.error('Failed to delete password:', error);
        }
    });
}