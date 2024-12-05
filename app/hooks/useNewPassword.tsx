import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { encryptPassword } from "../lib/encryption";

export default function useNewPassword() {
    async function newPassword({user, name, email, password, url}: any) {
        
        // Encrypt the password using the user's ID
        const encryptedData = encryptPassword(password);
        
        // Prepare data to be saved in Pocketbase
        const data = {
            "user": user, // Store the user's email
            "name": name,   
            "email": email,
            "password": encryptedData,  // Store the encrypted password
            "websiteurl": url,
        };

        // Store the iv in localStorage (for client-side access later)
         // Prefix with user's email to uniquely identify
        
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