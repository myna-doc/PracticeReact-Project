import React from 'react';
import { useState, useEffect} from 'react';
import '../App.css';
const Product = () =>
   {

    const [Products, setProduct] = useState([]);

    useEffect(()=>{
      getProducts();
      console.log('useeffect loading')
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

              {/* <img src="https://cdn.dummyjson.com/product-images" alt="thumb"/> {product.thumbnail} */}
            <img src={product.thumbnail} alt="thum"/>
            <h2>Product Name:</h2>{product.title}
            <h2>Product Price:</h2>{product.price}
             <h2>Product Description:</h2>{product.description}
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