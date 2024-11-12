import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 to-red-700 text-white" >
        <h1 className="text-secondary text-center text-xl bg-transparent">Login Page</h1>
        <EmailAndPass/>
        <Link href="/" className="btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">Back to homepage</Link>
    </div>
  )
}

export default Login