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

        async function deletePassword(password: string) {
            for (const item of data) {
                try {
                    if (decryptPassword(item.password) === password) {
                        await pb.collection("Account").delete(item.id);
                        alert("Password deleted successfully");

                        // Invalidate the query to refetch the data
                        queryClient.invalidateQueries('passwords');
                    }
                } catch (error) {
                    console.error("Error decrypting password:", error);
                }
            }
        }

        return useMutation(deletePassword, {
            onSuccess: (data) => {
                console.log('Password deleted successfully');
            },
            onError: (error) => {
                console.error('Failed to delete password:', error);
            }
        });
    }
