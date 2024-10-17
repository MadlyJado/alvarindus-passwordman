import useDeletePassword from "@/app/hooks/useDeletePassword";
import React from "react";

function PasswordManCard(props: { name: string, email: string, password: string, url: string, onDelete: () => void}) {

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
            <div className="card">
                <h1 className="card-title text-accent font-bold text-xl">{props.name}</h1>
                <p className="text-amber-500 text-base">URL: {props.url}</p>
                <p className="text-amber-500 text-base">Email: {props.email}</p>
                <p className="text-lime-700 text-base">Password: {props.password}</p>
                <button className="btn btn-accent btn-wide" onClick={CopyToClipBoard}>Click here to copy password of {props.email}</button>
                <button className="btn btn-accent btn-wide" onClick={deletePassword}>Click here to delete password entry</button>
            </div>
        </>
    );
}

PasswordManCard.propTypes = {};

export default PasswordManCard;