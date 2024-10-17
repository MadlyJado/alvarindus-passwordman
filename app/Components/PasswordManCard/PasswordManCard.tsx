import React from "react";
import useDeletePassword from "@/app/hooks/useDeletePassword";
import { encryptPassword } from "@/app/lib/encryption";
import pb from "@/app/lib/pocketbase";

function PasswordManCard(props: {name: string, email: string, password: string}) {



    function CopyToClipBoard() {
        navigator.clipboard.writeText(props.password);
    }


    function deletePass() {
        const { iv, encryptedPassword } = encryptPassword(password: props.password, pb.authStore.model.id);
        deletePassword({encryptPassword: encryptedPassword});
        // Reload the page to reflect the change
        window.location.reload();  // This line is not required in a functional component, but is required in a class component
    }

    const { mutate: deletePassword} =  useDeletePassword();

    return (
        <>
            <div className="card">
            <h1 className="card-title text-accent font-bold text-xl">{props.name}</h1>
            <p className="text-amber-500 text-base">Email: {props.email}</p>
            <p className="text-lime-700 text-base">Password: {props.password}</p>
            <button className="btn btn-accent btn-wide" onClick={CopyToClipBoard}>Click here to copy password of {props.email}</button>
            <button className="btn btn-accent btn-wide" onClick={deletePass}>Click here to delete password entry</button>
            </div>
            
        
        </>
    )
}

PasswordManCard.propTypes = {

}

export default PasswordManCard