'use client';
import React from 'react'
import PropTypes from 'prop-types'
import PocketBase from 'pocketbase'
import { useForm } from 'react-hook-form'
import pb from '@/app/lib/pocketbase';
import useLogout from '@/app/hooks/useLogout';
import useLogin from '@/app/hooks/useLogin';
import CreateNewPassword from '../CreateNewPassword/CreateNewPassword';
import Link from 'next/link';





function EmailAndPass(props: any) {
  const logout = useLogout();
  const {mutate: login, isLoading, isError} = useLogin();
  const { register, handleSubmit, reset } = useForm();
  var authData;
  
  const isLoggedIn: boolean = pb.authStore.isValid;


  async function onSubmit(data: any) {
        authData = login({email: data.email, password: data.password});
        reset();
    }


  
  if(isLoggedIn) {
    return (
        <>
            <h1>Logged in: {isLoggedIn && pb.authStore.model.email}</h1>
            <Link className="btn bg-amber-600 btn-wide btn-lg shadow-lg hover:scale-105 transform transition-all duration-300" href="/viewpasswords">View All Passwords</Link>
            <Link className="btn btn-accent btn-wide btn-lg shadow-lg hover:scale-105 transform transition-all duration-300" href="/createnewpassword">Create new Password</Link>
            <button className="btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300" onClick={logout}>Log out</button>
        </>
    )
  }

  return (
    <>
        {isLoading && <p>Loading...</p>}
        {isError && <p className="bg-red-400">Invalid email or password</p>}
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered  gap-2">
                <input type="text" className="grow" placeholder="Email" {...register("email")}/>
            </label>
            <label className="input input-bordered  gap-2">
                <input type="password" className="grow" placeholder="Password" {...register("password")}/>
            </label>
            <button className="btn btn-primary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300" type="submit" disabled={isLoading}>{isLoading ? "Loading": "Login"}</button>
        </form>
    </>
        
        
  )
}

EmailAndPass.propTypes = {
}

export default EmailAndPass
