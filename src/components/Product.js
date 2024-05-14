import React from 'react';
import { useState, useEffect} from 'react';
import '../App.css';
const Product = () =>
   {

    const [Products, setProduct] = useState([]);

    useEffect(()=>{
      getProducts();
      console.log('useeffect loading');
     }, []);
     
  

   async function getProducts(){
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json);
     setProduct(json.products);
   }
   console.log('componet loading')
  
  return (
   
    <div className='product-container'>
      <h1 className='txt'>Product List</h1>
      <div className='product-list'>

     {!Products ? (<p>loading....</p>) :
      <ul>
      {
       
          Products.map((product) => {
            return(
            <li key={product.id}>
       <div className="card" style={{width: "18rem"}}>
      <img src= { product.thumbnail } className="card-img-top" alt="thumb" />
     <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">{product.price}</p>
  </div>
</div>

            </li>
           
            ) 
   }) 
  

        }
     
        
      </ul>
   }
      </div>
    </div>
  )
}

export default Product