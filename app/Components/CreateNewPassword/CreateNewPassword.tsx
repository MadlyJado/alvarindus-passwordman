'use client';

import React from 'react'
import { useForm } from 'react-hook-form'
import useNewPassword from '@/app/hooks/useNewPassword';
import pb from '@/app/lib/pocketbase';

function CreateNewPassword() {
  
  const { mutate: createNewPass, isLoading, isError } = useNewPassword();
  const {register, handleSubmit, reset} = useForm();
  
  function onSubmit(data: any) {
      createNewPass({user: pb.authStore.model.email, name: data.name, email: data.email, password: data.password, url: data.url});
      reset();
  }

  return (
    <div className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
        <form onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-bordered w-full">
            <input type="text" className="grow" placeholder="Name" {...register("name")}/>
        </label>
        <label className="input input-bordered w-full">
            <input type="text" className="grow" placeholder="Email" {...register("email")}/>
        </label>
        <label className="input input-bordered w-full">
            <input type="password" className="grow" placeholder="Password" {...register("password")}/>
        </label>
        <label className="input input-bordered w-full">
            <input className="grow" placeholder="URL" {...register("url")}/>
        </label>
        <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full" type="submit" disabled={isLoading}>{isLoading ? "Loading": "Create New Login Info Entry"}</button>
    </form>
  </div>
  )
}

export default CreateNewPassword