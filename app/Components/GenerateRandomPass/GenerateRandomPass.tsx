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

  return (
    <><form onSubmit={handleSubmit(generateRandomPass)}>
          <label className="input input-bordered flex items-center gap-2">
              <input className="grow" placeholder="Length of desired password" {...register("length")} />
          </label>
          <button className="btn btn-primary" type="submit">Generate Random Password</button>
      </form>
      <p>Generated Password: {password}</p>
      
    </>
  )
}

export default GenerateRandomPass