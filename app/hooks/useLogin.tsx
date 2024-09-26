import { useState } from 'react';
import { useMutation } from 'react-query';
import pb from '../lib/pocketbase'; // Assuming this is where Pocketbase instance is imported

// Define the types for login payload
interface LoginData {
  email: string;
  password: string;
}

// Define the hook for logging in a user
export default function useLogin() {
  // Handle the login functionality with Pocketbase
  const login = async ({ email, password }: LoginData) => {
    try {
      const authData = await pb.collection("users").authWithPassword(email, password);
      return authData; // return the authentication data (if needed later)
    } catch (error) {
      throw new Error('Login failed. Please check your credentials.');
    }
  };

  // Use react-query's `useMutation` to manage the async login
  return useMutation(login, {
    onSuccess: (data) => {
      // You can handle any side-effects of successful login here
      console.log('Login successful!', data);
    },
    onError: (error) => {
      // Handle error case
      console.error('Login failed:', error);
    },
  });
}