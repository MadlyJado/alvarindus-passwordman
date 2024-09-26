import pb from "../lib/pocketbase";
import { useState } from "react";
import { useMutation } from 'react-query';

export default function useLogin() {
    async function login({email, password}: any) {
        const authData = await pb.collection("users").authWithPassword(email, password);
        return authData;
    }

    return useMutation(login);
   
}

