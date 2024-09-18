import pb from "../lib/pocketbase"
import Record from 'pocketbase'
import { useMutation } from "react-query"

export default function useRegister() {
    async function register({ email, password }: any) {
        const collection = pb.collection("users");

        const record = collection.create({
            "email": email,
            "password": password,
        })
    }

    return useMutation(register);
}