import React from "react";


function PasswordManCard(props: {name: string, email: string, password: string}) {

    function CopyToClipBoard() {
        navigator.clipboard.writeText(props.password);
    }


    return (
        <>
            <div className="card">
            <h1 className="card-title text-accent font-bold text-xl">{props.name}</h1>
            <p className="text-amber-500 text-base">Email: {props.email}</p>
            <p className="text-lime-700 text-base">Password: {props.password}</p>
            <button className="btn btn-accent btn-wide" onClick={CopyToClipBoard}>Click here to copy password of {props.email}</button>
            </div>
            
        
        </>
    )
}

PasswordManCard.propTypes = {

}

export default PasswordManCard