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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-800 to-cyan-500 text-white p-4">
      <div className="w-full max-w-md p-6 bg-lime-600 rounded-lg shadow-lg items-center">
        <form onSubmit={handleSubmit(generateRandomPass)}>
              <label className="input input-bordered w-full">
                  <input className="grow" placeholder="Length of desired password" {...register("length")} />
              </label>
              <button className="btn bg-indigo-700 btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full" type="submit">Generate Random Password</button>
          </form>
          <p className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-orange-600">
            Generated Password: {password}
          </p>
          <button className="btn bg-teal-600 btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full" onClick={CopyToClipBoard}>Click here to copy randomized password</button>
      </div>
    </div>
  )
}

export default GenerateRandomPass