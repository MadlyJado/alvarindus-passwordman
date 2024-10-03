'use client';

import React from 'react'
import { useForm } from 'react-hook-form'
import useNewPassword from '@/app/hooks/useNewPassword';
import pb from '@/app/lib/pocketbase';

function CreateNewPassword() {
  
  const { mutate: createNewPass, isLoading, isError } = useNewPassword();
  const {register, handleSubmit, reset} = useForm();
  
  function onSubmit(data: any) {
      createNewPass({email: data.email, password: data.password, url: data.url});
      reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Email" {...register("email")}/>
    </label>
    <label className="input input-bordered flex items-center gap-2">
        <input type="password" className="grow" placeholder="Password" {...register("password")}/>
    </label>
    <label className="input input-bordered flex items-center gap-2">
        <input className="grow" placeholder="URL" {...register("url")}/>
    </label>
    <button className="btn btn-primary" type="submit" disabled={isLoading}>{isLoading ? "Loading": "Create New Login Info Entry"}</button>
  </form>
  )
}

export default CreateNewPassword