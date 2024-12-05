'use client';

import { NextPage } from 'next'
import Link from 'next/link'
import GenerateRandomPass from '../Components/GenerateRandomPass/GenerateRandomPass';

interface Props {}

const GeneratePass: NextPage<Props> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-800 to-cyan-500 text-white p-4">
        <h1 className="text-4xl font-extrabold mb-8 text-white bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
          Generate Random Password
        </h1>
        <div className="w-full max-w-md p-6 bg-lime-600 rounded-lg shadow-lg items-center">
           <GenerateRandomPass/>
           <Link href="/login" className="btn btn-secondary">Return to Login Screen</Link>
        </div> 
    </div>
  )
}

export default GeneratePass;