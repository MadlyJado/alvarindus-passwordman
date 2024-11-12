'use client';

import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import PasswordManGrid from '../Components/PasswordManGrid/PasswordManGrid'

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-lime-700 to-emerald-500 text-white p-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200 text-center">
          Current Saved Logins
        </h1>
        <PasswordManGrid />
        <Link href="/login" className="btn bg-fuchsia-900 btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full">Return to Login Screen</Link>
    </div>
  )
}

export default Login