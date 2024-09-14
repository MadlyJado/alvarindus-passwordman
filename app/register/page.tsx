import { NextPage } from 'next'
import Link from 'next/link'

interface Props {}

const Register: NextPage<Props> = ({}) => {
  return (
    <div>
        <h1>Register</h1>
        <Link href="/" className="btn btn-secondary">Back to homepage</Link>
    </div>
  )
}

export default Register