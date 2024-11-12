import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-indigo-700 text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200">
        Alvarindus Password Manager
      </h1>
      <div className="flex gap-8">
        <Link href="/login">
          <p className="btn btn-primary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
            Login
          </p>
        </Link>
        <Link href="/register">
          <p className="btn btn-secondary btn-lg btn-wide shadow-lg hover:scale-105 transform transition-all duration-300">
            Register
          </p>
        </Link>
      </div>
    </div>
  );
}
