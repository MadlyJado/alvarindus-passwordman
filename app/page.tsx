import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-indigo-700 text-white p-4">
      <div className="grid grid-cols-6 absolute size-9 opacity-30">
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>    
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>    
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>    
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>    
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>    
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>    
        <Image src="@/app/lib/pattern.png" alt="Pattern" width="20"></Image>          
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-white bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200 text-center">
        Alvarindus Password Manager
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto items-center" >
        <Link href="/login">
          <p className="btn btn-primary btn-lg sm:btn-wide shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
            Login
          </p>
        </Link>
        <Link href="/register">
          <p className="btn btn-secondary btn-lg sm:btn-wide shadow-lg hover:scale-105 transform transition-all duration-300 text-center">
            Register
          </p>
        </Link>
      </div>
    </div>
  );
}
