import React, {useContext} from "react";
import UserContext from "../Context/UserContect";

function Login(){

    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div>
            <h1>Login</h1>
            <input 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            type="text" 
            placeholder="User name"/>
            {" "}
            <input 
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            type="text" 
            placeholder="Password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login