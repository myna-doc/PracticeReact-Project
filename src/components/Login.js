import { useState } from "react";
import { useContext } from "react";
import userContext from "../ContextAPI/userContext";

const Login = () => {
    const [showInputBox, setShowInputBox] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [logOut, setLogOut] = useState(false);


    const {user,setUser} = useContext(userContext);

    const inputBox = () => {
        setShowInputBox(true);
    }

    const handleInputChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        console.log(userName);
        console.log(password);
        setLogOut(true);
        setShowInputBox(false);
    }

    const handleLogout = () => {
        setLogOut(false);
    }

    return (
        <>
            <div className="login">
            {!logOut &&(
                <><h1>Welcome!!!!</h1><button type="button" className="btn btn-primary" onClick={inputBox}>Login</button></>)}

            </div>
            <div style={{textAlign:"center"}}>
                
             <h2>{user.name}</h2>
             <h2> {user.Email}</h2>
            </div>
            {showInputBox &&
                <>
                    <div className="input-box">
                        <label>Username:</label>
                        <input type="text" placeholder="Type the username....." value={userName} onChange={handleInputChange} /><br />
                        <label>Password:</label>
                        <input type="password" placeholder="Type the password....." value={password} onChange={handlePasswordChange} /><br />
                        <button type="button" className="btn btn-success" onClick={handleLogin}>SUBMIT</button>
                    </div>
                </>
            }
            
            {logOut &&
                <div>
                    <button type="button" className="btn btn-success" onClick={handleLogout}>LOGOUT</button>
                </div>
            }
            {/* <div>
                <input type="text" value={user.name} onChange={(e)=>setUser(e.target.value)}/>
            </div> */}
        </>
    );
}
export default Login;