import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { decryptPassword } from "../lib/encryption";
import crypto from 'crypto';

export default function useDeletePassword() {
    async function deletePassword({decryptedPassword}: any) {

        

        const accountList = await pb.collection("Account").getFullList();

        for (var record in accountList) {
            var account = accountList[record];
            const iv = localStorage.getItem(`iv_${account.id}`);  // Retrieve the IV from localStorage

            const password = decryptPassword(encryptedPassword, iv, pb.authStore.model.id);

            if(password === decryptedPassword) {
                await pb.collection("Account").delete(account.id);  // Delete the corresponding record from Pocketbase
                localStorage.removeItem(`iv_${account.id}`);  // Remove the IV from localStorage as well
                alert("Password deleted successfully");
                break;
            }
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