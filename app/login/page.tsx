import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import pb from '../lib/pocketbase';

const Login: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-red-700 text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
        {pb.authStore.model.email ? `Welcome, ${pb.authStore.model.email}` : "Login Page"}
      </h1>
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
