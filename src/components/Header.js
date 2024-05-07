import '../App.css';
import Logo from '../img/logo.png';
import {Link, Outlet} from 'react-router-dom';

const Header = ()=>{
    return (
        <>
        <div className='header'>
           
               <img className="logo" src={Logo} alt="logo"/>
               <div className='heading-links'>
                <ul>
                    <li>
                        
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        
                        <Link to="/product">Products</Link>
                        </li>
                    <li>
                        
                        <Link to="/about">About Us</Link>
                        </li>
                    <li>
                        
                        <Link to="/contact">contact US</Link>
                        </li>
                    <li>
                        
                        <Link to="/career">Career</Link>
                    </li>
                   
                </ul>
               
            </div>
        
        </div>
        <Outlet/>
        </>
         
    )
}
export default Header;
