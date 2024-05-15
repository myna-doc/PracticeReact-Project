import { useContext } from "react";
import userContext from "../ContextAPI/userContext";

const Footer = () => {
const {user} = useContext(userContext);

  return (
    <div className="Footer-content">
      <footer>
  <p style={{bottom:"0"}}>&copy; 2024 Your Website. All rights reserved.</p>
  <h3>{user.name}</h3>
</footer>
      </div>
  )
}

export default Footer;