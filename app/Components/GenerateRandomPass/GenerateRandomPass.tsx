'use client';

import React from 'react'
import { generateRandomPassword } from '@/app/lib/passwordstrength'
import { useForm } from 'react-hook-form';
import Link from 'next/link';

function GenerateRandomPass() {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = React.useState('');

  const generateRandomPass = (data: any) => {
    const password = generateRandomPassword(data.length);
    setPassword(password);
  }

  function CopyToClipBoard() {
    navigator.clipboard.writeText(password);
}

  return (
    <>
      <form onSubmit={handleSubmit(generateRandomPass)}>
            <label className="input input-bordered w-full">
                <input className="grow" placeholder="Length of desired password" {...register("length")} />
            </label>
            <button className="btn bg-indigo-700 btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full" type="submit">Generate Random Password</button>
        </form>
        <p className="text-base font-extrabold bg-clip-text bg-gradient-to-r from-red-700 to-orange-600">
          Generated Password: {password}
        </p>
        <button className="btn bg-teal-600 btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full" onClick={CopyToClipBoard}>Click here to copy randomized password</button>
    </>
  )
}

export default GenerateRandomPass