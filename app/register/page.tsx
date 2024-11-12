import { NextPage } from 'next'
import Register from '../Components/Register/Register'
import Link from 'next/link'


interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-400 to-yellow-700 text-white">
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">
          Register
        </h1>
        <Register/>
        <Link href="/">
        <p className="mt-6 btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
          Back to Homepage
        </p>
      </Link>
    </div>
  )
}

export default Page