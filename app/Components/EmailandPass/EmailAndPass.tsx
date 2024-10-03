'use client';
import React from 'react'
import PropTypes from 'prop-types'
import PocketBase from 'pocketbase'
import { useForm } from 'react-hook-form'
import pb from '@/app/lib/pocketbase';
import useLogout from '@/app/hooks/useLogout';
import useLogin from '@/app/hooks/useLogin';
import CreateNewPassword from '../CreateNewPassword/CreateNewPassword';





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
            <CreateNewPassword authData={authData}/>
            <button className="btn btn-secondary" onClick={logout}>Log out</button>
        </>
    )
  }

  return (
    <>
        {isLoading && <p>Loading...</p>}
        {isError && <p className="bg-red-400">Invalid email or password</p>}
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Email" {...register("email")}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <input type="password" className="grow" placeholder="Password" {...register("password")}/>
            </label>
            <button className="btn btn-primary" type="submit" disabled={isLoading}>{isLoading ? "Loading": "Login"}</button>
        </form>
    </>
        
        
  )
}

EmailAndPass.propTypes = {
}

export default EmailAndPass
