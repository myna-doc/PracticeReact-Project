import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () =>{

    const [ProductDetails, setProductDetails] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        getData();
    });

    async function getData(){
        const data = await fetch("https://jsonplaceholder.typicode.com/comments?postId="+id);
         const json =await data.json();
         console.log(json);
         setProductDetails(json);
        
     
    } 
    
    return(
        <div className="productdetails-container">
            <h1>Product Deatils</h1>
            {
               ProductDetails.map(Pro=>{
                return(
             <ul>
            <li>
            <h3>{Pro.email}</h3>
            <h3>{Pro.name}</h3>
            <h3>{Pro.body}</h3>
            </li>
            </ul>
                )
               }) 
            }
            
        </div>
    )
}
export default ProductDetails;