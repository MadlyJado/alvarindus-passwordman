import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import CreateNewPassword from '../Components/CreateNewPassword/CreateNewPassword'

interface Props {}

const createnewpassword: NextPage<Props> = ({}) => {
  return (
    <div className="bg-gradient-to-b from-emerald-400 to-teal-800 text-white">
        <h1 className="text-secondary text-center text-xl bg-transparent">Create New Password</h1>
        <CreateNewPassword/>
        <Link href="/login" >
          <p className="mt-6 btn bg-amber-700 btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
            Back to logged in page
          </p>
        </Link>
    </div>
  )
}

export default createnewpassword