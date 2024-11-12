import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import pb from '../lib/pocketbase';

const Login: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-red-700 text-white">
      <EmailAndPass />
      <Link href="/">
        <p className="mt-6 btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
          Back to Homepage
        </p>
      </Link>
    </div>
  )
}

export default Login
