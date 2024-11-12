'use client';
import { useForm } from "react-hook-form";
import useRegister from "@/app/hooks/useRegister";




function Register(props: any) {
    const {register, handleSubmit, reset} = useForm();
    const { mutate, isLoading, isError } = useRegister();

    async function onSubmit(data: any) {
        mutate({email: data.email, password: data.password});
        reset();
    }


    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg items-center">
            {isLoading && <p className="text-center text-lg">Loading...</p>}
            {isError && <p className="text-center text-lg bg-red-400 p-2 rounded">Invalid email or password</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input input-bordered w-full">
                    <input type="text" className="grow" placeholder="Email" {...register("email")}/>
                </label>
                <label className="input input-bordered w-full">
                    <input type="password" className="grow" placeholder="Password" {...register("password")}/>
                </label>
                <button className="btn btn-primary btn-lg shadow-lg hover:scale-105 transform transition-all duration-300 w-full" type="submit" disabled={isLoading}>{isLoading ? "Registering": "Register"}</button>
            </form>
        </div>
    )
}

export default Register