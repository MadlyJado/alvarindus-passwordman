'user client';

import pb from "@/app/lib/pocketbase";
import { useEffect, useState } from "react";
import { decryptPassword } from "@/app/lib/encryption";
import PasswordManCard from "../PasswordManCard/PasswordManCard";
import { isPasswordStrong } from "@/app/lib/passwordstrength";

function PasswordManGrid() {
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
    
    const handleDelete = (id: string) => {
        setData(data.filter((item) => item.id!== id));
    }

    function handleEncrypt(password: string) {
        try {
            const encryptedPass = decryptPassword(password);
            return encryptedPass;
        }
        catch (error) {
            console.log("Error decrypting password:", error);
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((item) => (
                    <PasswordManCard
                        key={item.id} // Add a unique key prop here
                        name={item.name}
                        email={item.email}
                        password={handleEncrypt(
                            item.password) || ""
                        }
                        passwordStrength={isPasswordStrong(item.password) || 0}
                        url={item.url.toString()}
                        onDelete={() => handleDelete(item.id)} // Add a delete function here to delete the item when the button is clicked. You can use the PocketBase delete method to delete the item. The delete function should be called in the PasswordManCard component. You can also add a confirmation prompt to ensure the user wants to delete the item. You can use the window.confirm method to display a confirmation prompt. If the user confirms, you can delete the
                    />
                ))}
            </div>
        </>
    );
}

export default PasswordManGrid;