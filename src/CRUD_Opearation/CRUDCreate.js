import { useState } from "react";
import axios from "axios";

const CRUDCreate = () =>{

    const[FirstName, setFirstName] = useState('');
    const[LastName, setLastName] = useState('');
    const[checkbox, setCheckBox] = useState(false);

// post the new record on the server
 const postData = async () =>{
    try{
         await axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`,{
            FirstName, LastName, checkbox
        })
    }catch(err){
        console.log('the error will be',err);
    }
}
  

    return(
        <div className="Register-Page">
       <h2> THIS IS THE REGISTATION PAGE </h2>

       <div>
        <label>First Name :</label>
        <input type="text" placeholder="enter your name...." value={FirstName} onChange={(e)=>setFirstName(e.target.value)} />
        
        <label>Last Name :</label>
        <input type="text" placeholder="enter your last name...." value={LastName} onChange={(e)=>setLastName(e.target.value)} />
        
       
       </div>
       <div className="checkbox">
       <input type = "checkbox" onClick = {()=> setCheckBox(!checkbox)}/> <span>I am agree to the terms and conditions</span>
       </div>
       <button onClick={postData}>Register</button>

        </div>
    )
}
export default CRUDCreate;