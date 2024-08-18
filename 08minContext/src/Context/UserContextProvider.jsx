import React from "react";
import UserContext from "./UserContect";

const UserContectProvider = ({children}) =>{
    const [user, setUser] = React.useState()
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContectProvider