import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { encryptPassword } from "../lib/encryption";
import crypto from 'crypto';

export default function useDeletePassword() {
    async function deletePassword(encryptedPassword: any) {

        

        const accountList = await pb.collection("Account").getFullList();
        var record;

        accountList.forEach(account => {
            if(account.password === encryptedPassword) {
                // Set record variable to the account record that contains the encrypted password.
                record = account;
                pb.collection("Account").delete(record.id);

                //Remove password iv from local storage
                localStorage.removeItem(`iv_${pb.authStore.model.id}`);
                return;
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