import pb from "../lib/pocketbase"
import { useMutation } from "react-query"

export default function useRegister() {
    async function register({ email, password }: any) {
        
        const data = {
            "email": email,
            "emailVisibility": true,
            "password": password,
            "passwordConfirm": password

        }; 
        const record = await pb.collection("users").create(data, );
        
    }

    return useMutation(register);
}