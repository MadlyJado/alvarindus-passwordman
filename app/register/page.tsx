import { NextPage } from 'next'
import Register from '../Components/Register/Register'
import Link from 'next/link'


interface Props {}

const page: NextPage<Props> = ({}) => {
  return (
    <div >
        <h1 className='text-secondary text-center text-xl'>Register</h1>
        <Register/>
        <Link href="/" className="btn btn-secondary">Back to homepage</Link>
    </div>
  )
}

export default page