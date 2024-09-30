import pb from "../lib/pocketbase";
import { useMutation } from "react-query";
import { encryptPassword } from "../lib/encryption";
import crypto from 'crypto';

export default function useNewPassword() {
    async function newPassword({email, password, url, authdata}: any) {
        const id = authdata.record.id;
        const {iv, encryptedData} = encryptPassword(password, id);

        const data = {
            "email": email,
            "password": encryptedData,
            "websiteurl": url,
            
        }
    

        pb.collection("Account").create(data);

    }

    return useMutation(newPassword);
    
}