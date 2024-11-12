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
            <div className="card flex flex-col gap-12 bg-white">
                <h1 className="card-title text-accent font-bold text-xl">{props.name}</h1>
                <p className="text-amber-500 text-base">URL: {props.url}</p>
                <p className="text-amber-500 text-base">Email: {props.email}</p>
                <p className="text-lime-700 text-base">Password: {props.password}</p>
                <p className="text-blue-500 text-base">Password Strength: {props.passwordStrength}</p>
                <button className="btn btn-accent btn-md" onClick={CopyToClipBoard}>Click here to copy password of {props.email}</button>
                <button className="btn btn-accent btn-md" onClick={deletePassword}>Click here to delete password entry</button>
            </div>
        </>
    );
}

PasswordManCard.propTypes = {};

export default PasswordManCard;