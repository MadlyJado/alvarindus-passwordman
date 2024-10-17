import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { encryptPassword } from "../lib/encryption";
import crypto from 'crypto';

export default function useDeletePassword() {
    async function deletePassword({encryptedPassword}: any) {

        

        const accountList = await pb.collection("Account").getFullList();

        for (var record in accountList) {
            if(record.password === encryptedPassword) {
                await pb.collection("Account").delete(record.id);
                localStorage.removeItem(`iv_${record.id}`);  // Remove the IV from localStorage as well
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