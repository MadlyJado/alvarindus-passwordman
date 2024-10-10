'user client';

import pb from "@/app/lib/pocketbase";
import { useEffect, useState } from "react";
import { decryptPassword } from "@/app/lib/encryption";
import PasswordManCard from "../PasswordManCard/PasswordManCard";

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

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((item) => (

                    <PasswordManCard
                        name={item.name}
                        email={item.email}
                        password={decryptPassword(
                            item.password,
                            localStorage.getItem(`iv_${item.id}`) || '',
                            pb.authStore.model?.id || ''
                        )}
                    />
                ))}
            </div>
        </>
    );
}

export default PasswordManGrid;