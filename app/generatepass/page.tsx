'use client';

import { NextPage } from 'next'
import Link from 'next/link'
import GenerateRandomPass from '../Components/GenerateRandomPass/GenerateRandomPass';

interface Props {}

const GeneratePass: NextPage<Props> = ({}) => {
  return (
    <div >
        <h1 className="text-secondary text-center text-xl bg-transparent">Generate Password</h1>
        <GenerateRandomPass/>
        <Link href="/login" className="btn btn-secondary">Return to Login Screen</Link>
    </div>
  )
}

export default GeneratePass;