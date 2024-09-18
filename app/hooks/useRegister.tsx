import pb from "../lib/pocketbase"
import Record from 'pocketbase'
import { useMutation } from "react-query"
import adminAuth from "../lib/adminauth";

export default function useRegister() {
    async function register({ email, password }: any) {
        
        const collection = await pb.collection("users");
        const record = await collection.create({
            email: email,
            password: password
        })


        adminAuth();
    }

    return useMutation(register);
}