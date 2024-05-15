import { createContext } from "react";

const userContext = createContext({
    user:{
        name:"dummy",
        Email:"dummy@gmail.com"
    }
});

export default userContext;