import React, { useEffect, useState } from "react";
import useDeletePassword from "@/app/hooks/useDeletePassword";
import { encryptPassword } from "@/app/lib/encryption";
import pb from "@/app/lib/pocketbase";

function PasswordManCard(props: { name: string, email: string, password: string, encryptedPassword: string }) {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (pb.authStore.model) {
                const usremail = pb.authStore.model.email;
                try {
                    const records = await pb.collection("Account").getFullList({ filter: `user="${usremail}"` });
                    setData(records);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
        };

        fetchData();
    }, []);

    const { mutate: deletePass, isSuccess } = useDeletePassword();

    function CopyToClipBoard() {
        navigator.clipboard.writeText(props.password);
    }

    function deletePassword() {
       data.map((item) => {
            if(item.password === props.encryptedPassword) {
                deletePass({ id: item.id, encryptedPassword: props.encryptedPassword });
                return;
            }
       });
    }

    useEffect(() => {
        if (isSuccess) {
            window.location.reload();
        }
    }, [isSuccess]);

    return (
        <>
            <div className="card">
                <h1 className="card-title text-accent font-bold text-xl">{props.name}</h1>
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