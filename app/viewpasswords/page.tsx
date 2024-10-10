'use client';

import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import PasswordManGrid from '../Components/PasswordManGrid/PasswordManGrid'

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div >
        <h1 className="text-secondary text-center text-xl bg-transparent">Current Saved Logins</h1>
        <PasswordManGrid />
        <Link href="/login" className="btn btn-secondary">Return to Login Login</Link>
    </div>
  )
}

export default Login