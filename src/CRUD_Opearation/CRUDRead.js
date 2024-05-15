import { useState, useEffect, useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import userContext from "../ContextAPI/userContext";

const CRUDRead = () => {
    const [getapiData, setGetApiData] = useState([]);
    const {user} = useContext(userContext);
    // get the data from the server
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`);
                setGetApiData(response.data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`);
            setGetApiData(response.data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    }

    const handleDelete = async (id) => {
        await axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        getData();
    }

    //update the details on the server

    const handleUpdate = () =>{
        
    }

    return (
        <div className="Register-Page">
            <h2>THIS IS THE USER VISIBLE PAGE</h2>
            <div className="teble-content">
            {getapiData && getapiData.map((user) => (
                <tr key={user.id}>
                    <td>{user.FirstName}</td>
                    <td>{user.LastName}</td>
                    <td>{user.checkBox}</td>
                    <td>
                        <button onClick={() => { handleDelete(user.id) }}>DELETE</button>
                    </td>
                    <td>
                        <Link to="/updateUser">
                        <button onClick={() => { handleUpdate(user) }}>UPDATE</button>
                        </Link>
                        
                    </td>
                </tr>
            ))}
            <h4>{user.name}</h4>
            <h4>{user.Email}</h4>
            </div>
           
        </div>
    );
}

export default CRUDRead;
