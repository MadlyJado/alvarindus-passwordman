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
    
        <>
        
            {isLoading && <p>Loading...</p>}
            {isError && <p className="bg-red-400">Invalid email or password</p>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Email" {...register("email")}/>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="password" className="grow" placeholder="Password" {...register("password")}/>
                </label>
                <button className="btn btn-primary" type="submit" disabled={isLoading}>{isLoading ? "Registering": "Register"}</button>
            </form>

        </>
    )
}

export default Register