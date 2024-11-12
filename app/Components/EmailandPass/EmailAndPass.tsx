'use client';
import React from 'react'
import PocketBase from 'pocketbase'
import { useForm } from 'react-hook-form'
import pb from '@/app/lib/pocketbase';
import useLogout from '@/app/hooks/useLogout';
import useLogin from '@/app/hooks/useLogin';
import Link from 'next/link';

function EmailAndPass() {
  const logout = useLogout();
  const { mutate: login, isLoading, isError } = useLogin();
  const { register, handleSubmit, reset } = useForm();
  
  const isLoggedIn = pb.authStore.isValid;

  async function onSubmit(data) {
    login({ email: data.email, password: data.password });
    reset();
  }

  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1>Welcome, {pb.authStore.model.email}</h1>
        <Link href="/viewpasswords">
          <p className="btn bg-amber-600 btn-wide btn-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            View All Passwords
          </p>
        </Link>
        <Link href="/createnewpassword">
          <p className="btn btn-accent btn-wide btn-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            Create New Password
          </p>
        </Link>
        <button onClick={logout} className="btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
          Log out
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
    {isLoading && <p className="text-center text-lg">Loading...</p>}
    {isError && <p className="text-center text-lg bg-red-400 p-2 rounded">Invalid email or password</p>}
    <label className="input input-bordered w-full">
      <input type="text" placeholder="Email" {...register("email")} className="w-full p-2 rounded"/>
    </label>
    <label className="input input-bordered w-full">
      <input type="password" placeholder="Password" {...register("password")} className="w-full p-2 rounded"/>
    </label>
    <button type="submit" disabled={isLoading} className="btn btn-primary btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full">
      {isLoading ? "Loading..." : "Login"}
    </button>
  </form>
  );
}

export default EmailAndPass;
