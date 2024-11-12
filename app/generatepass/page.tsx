'use client';

import { NextPage } from 'next'
import Link from 'next/link'
import GenerateRandomPass from '../Components/GenerateRandomPass/GenerateRandomPass';

interface Props {}

const GeneratePass: NextPage<Props> = ({}) => {
  return (
    <div >
        <h1 className="text-4xl font-extrabold mb-8 text-white bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
          Generate Random Password
        </h1>
        <GenerateRandomPass/>
        <Link href="/login" className="btn btn-secondary">Return to Login Screen</Link>
    </div>
  )
}

export default GeneratePass;