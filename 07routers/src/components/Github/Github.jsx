import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sumitag-25')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // },[])

    return(
        <>
        <div className="text-center m-4 bg-red-400 text-white p-4 text-3xl">
            Github Id: {data.id} <br/>
            Repos: {data.public_repos}
            </div>
        <div className="mb-4">
            <img className="m-auto" src={data.avatar_url} alt="" />
        </div>
        </>
    )
}

export default Github

export const githubLoader = async() =>{
    const response = await fetch('https://api.github.com/users/sumitag-25')
    return response.json()
}