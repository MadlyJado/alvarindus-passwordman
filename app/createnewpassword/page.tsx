import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import CreateNewPassword from '../Components/CreateNewPassword/CreateNewPassword'

interface Props {}

const createnewpassword: NextPage<Props> = ({}) => {
  return (
    <body className="bg-gradient-to-b from-emerald-400 to-teal-800 text-white">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-lime-200">Create New Password</h1>
        <CreateNewPassword/>
        <Link href="/login" >
          <p className="mt-6 btn bg-amber-700 btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
            Back to logged in page
          </p>
        </Link>
      </div>
    </body>
  )
}

export default createnewpassword