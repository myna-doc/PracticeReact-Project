import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import Career from './components/Career';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import About from './components/About';
import Login from './components/Login';
import CRUDCreate from './CRUD_Opearation/CRUDCreate';
import CRUDRead from './CRUD_Opearation/CRUDRead';
import CRUDUpdate from './CRUD_Opearation/CRUDUpdate';
import ProductDetails from './components/ProduactDeatils';
import userContext from './ContextAPI/userContext';


const Index = () =>{

  const [users, setUser] = useState({

      name:"MYNAVATHI",
      Email:"mynavathi1998@gmail.com"
   
  })

  return(
    <>
    <userContext.Provider value={{
      user:users,
      setUser:setUser
    }}>
      <Header />
      <Outlet />
      <Footer />
      </userContext.Provider>
    </>
  )
}

const router = createBrowserRouter(
     
  [
   {
       path:"/",
       element:<Index/>,
   
       children:[
        {
          path:"/",
          element:<Login/>
          
           },
           
               {
                   path:"/career",
                   element:<Career/>,
                   
               children:[
                {
                  path:"create",
                  element:<CRUDCreate/>
                },
                {
                  path:"read",
                  element:<CRUDRead/>
                },
               ]
              },
              {
                path:"/updateuser",
                element:<CRUDUpdate/>
                
            },
               {
                   path:"/contact",
                   element:<Contact/>
                   
               },
               {
                   path:"/about",
                   element:<About/>
                   
               },
               {
                   path:"/product",
                   element:<Product/>
                   
               },
               {
                   path:"/productdetails/:id",
                   element:<ProductDetails/>
               }
              ]

              
           }
   
]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router = {router} />
  </>
);


