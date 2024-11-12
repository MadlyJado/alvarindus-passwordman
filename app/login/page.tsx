import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-red-700 text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
        Login Page
      </h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <EmailAndPass />
      </div>
      <Link href="/">
        <p className="mt-6 btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
          Back to Homepage
        </p>
      </Link>
    </div>
  )
}

export default Login
