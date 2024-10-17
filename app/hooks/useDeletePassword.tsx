import pb from "../lib/pocketbase";
import { useMutation, useQueryClient } from "react-query";
import { decryptPassword } from "../lib/encryption";
import { useEffect, useState } from "react";

export default function useDeletePassword() {
    const queryClient = useQueryClient();

    async function deletePassword({ id, encryptedPassword }: { id: string, encryptedPassword: string }) {
        await pb.collection("Account").delete(id);
        localStorage.removeItem(`iv_${id}`);
        return id;
    }

    return useMutation(deletePassword, {
        onSuccess: (deletedId) => {
            console.log('Password deleted successfully');
            queryClient.invalidateQueries('passwords');
        },
        onError: (error) => {
            console.error('Failed to delete password:', error);
        }
    });
}