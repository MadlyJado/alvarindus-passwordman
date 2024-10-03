import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { encryptPassword } from "../lib/encryption";
import crypto from 'crypto';

export default function useNewPassword() {
    async function newPassword({email, password, url}: any) {
        const id = pb.authStore.model.id;
        const emailData = pb.authStore.model.email;
        
        // Encrypt the password using the user's ID
        const { iv, encryptedData } = encryptPassword(password, id);
        
        // Prepare data to be saved in Pocketbase
        const data = {
            "email": email,
            "password": encryptedData,  // Store the encrypted password
            "websiteurl": url,
        };

        // Store the iv in localStorage (for client-side access later)
        localStorage.setItem(`iv_${emailData}`, iv);  // Prefix with user's email to uniquely identify
        
        // Save the encrypted password and other data in Pocketbase
        const record = await pb.collection("Account").create(data);
    }

    return useMutation(newPassword, {
        onSuccess: (data) => {
            console.log('Password and IV saved successfully');
        },
        onError: (error) => {
            console.error('Failed to save password:', error);
        }
    });
}