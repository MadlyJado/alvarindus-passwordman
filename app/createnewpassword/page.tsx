import { NextPage } from 'next'
import EmailAndPass from '../Components/EmailandPass/EmailAndPass'
import Link from 'next/link'
import CreateNewPassword from '../Components/CreateNewPassword/CreateNewPassword'

interface Props {}

const createnewpassword: NextPage<Props> = ({}) => {
  return (
    <div >
        <h1 className="text-secondary text-center text-xl bg-transparent">Create New Password</h1>
        <CreateNewPassword/>
        <Link href="/login" className="btn btn-secondary">Back to logged in page</Link>
    </div>
  )
}

export default createnewpassword