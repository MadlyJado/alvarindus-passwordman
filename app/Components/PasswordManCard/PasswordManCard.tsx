import useDeletePassword from "@/app/hooks/useDeletePassword";
import React from "react";

function PasswordManCard(props: { name: string, email: string, password: string, passwordStrength: number, url: string, onDelete: () => void}) {

    const { mutate: deletePass } = useDeletePassword();
   

    function CopyToClipBoard() {
        navigator.clipboard.writeText(props.password);
        
    }

    function deletePassword() {
        if (window.confirm(`Are you sure you want to delete this password entry for ${props.name}?`)) {
            deletePass(props.password, {
                onSuccess: () => {
                    props.onDelete();
                }
            });
        }
    }

    return (
        <>
            <div className="card flex flex-col gap-x-20 bg-white">
                <h1 className="card-title text-accent font-bold text-xl w-full">{props.name}</h1>
                <p className="text-amber-500 text-base w-full">URL: {props.url}</p>
                <p className="text-amber-500 text-base w-full">Email: {props.email}</p>
                <p className="text-lime-700 text-base w-full">Password: {props.password}</p>
                <p className="text-blue-500 text-base w-full">Password Strength: {props.passwordStrength}</p>
                <button className="btn btn-accent btn-md w-full" onClick={CopyToClipBoard}>Click here to copy password of {props.email}</button>
                <button className="btn btn-accent btn-md w-full" onClick={deletePassword}>Click here to delete password entry</button>
            </div>
        </>
    );
}

PasswordManCard.propTypes = {};

export default PasswordManCard;