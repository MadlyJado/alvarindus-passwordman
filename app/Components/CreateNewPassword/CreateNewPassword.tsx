'use client';

import React from 'react'
import { useForm } from 'react-hook-form'
import { encryptPassword } from '@/app/lib/encryption';

function CreateNewPassword() {
  

  const {register, handleSubmit, reset} = useForm();
  
  function onSubmit() {
      
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Email" {...register("email")}/>
    </label>
    <label className="input input-bordered flex items-center gap-2">
        <input type="password" className="grow" placeholder="Password" {...register("password")}/>
    </label>
    <button className="btn btn-primary" type="submit" disabled={isLoading}>{isLoading ? "Loading": "Login"}</button>
  </form>
  )
}

export default CreateNewPassword