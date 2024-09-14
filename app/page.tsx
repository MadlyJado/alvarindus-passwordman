import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1 className="text-primary text-center text-xl font-bold">Alvarindus Password Manager</h1>
    <Link href="/login" className="btn btn-primary btn-wide absolute top-20 left-96">Login</Link>
    <Link href="/register" className="btn btn-secondary btn-wide absolute top-20 right-96">Register</Link>
   </div>
  );
}
