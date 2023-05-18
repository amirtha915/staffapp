import axios from "axios";
import { useEffect, useState } from "react";

const Staff = () => {

    type StaffObj = {
        name: string;
        age: number;
        email:string
    }

    const [response, setResponse] = useState<StaffObj[]>([]);

    useEffect(() => {
        axios.get("/staffs").then(
            (res) => {
                setResponse(res.data);
            }
        );
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Email</th>
                </tr>
                {response.map((val) => {
                    return ( <tr>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.email}</td>
                    </tr>)
                }
                )}
            </table>
        </div>
    );
}

export default Staff;