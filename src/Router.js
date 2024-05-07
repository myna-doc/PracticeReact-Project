import { createBrowserRouter } from "react-router-dom";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Header from "./components/Header";
// import Footer from "./components.Fooder";
import Product from "./components/Product";
import About from "./components/About";
import ProductDetails from "./components/ProduactDeatils";

// const Router = ()=>{
         
//     return(
//         <>
//         <Header/>
//         <Footer/>
//         </>
//     )
// }

const router = createBrowserRouter(
     
   [
    {
        path:"/",
        element:<Header/>,
    
        children:[
            
                {
                    path:"/career",
                    element:<Career/>
                    
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

export default router;