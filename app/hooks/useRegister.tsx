import pb from "../lib/pocketbase"
import { useMutation } from "react-query"
import adminAuth from "../lib/adminauth";

export default function useRegister() {
    async function register({ email, password }: any) {
        
        const data = {
            "email": email,
            "emailVisibility": true,
            "password": password,
            "passwordConfirm": password

        }; 
        adminAuth();
        const record = await pb.collection("users").create(data);
        
    }

    return useMutation(register);
}