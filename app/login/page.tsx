import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'

interface Props {}

const Login: NextPage<Props> = ({}) => {
  return (
    <div >
        <h1 className="text-secondary text-center text-xl bg-transparent">Login Page</h1>
        <EmailAndPass/>
        <Link href="/" className="btn btn-secondary">Back to homepage</Link>
    </div>
  )
}

export default Login