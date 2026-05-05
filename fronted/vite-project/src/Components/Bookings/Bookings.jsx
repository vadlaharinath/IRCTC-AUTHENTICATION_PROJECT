import axios from 'axios';
import React, { useEffect, useState } from 'react';


function Bookings(){
    const[data,setData]=useState([])

    async function getData(){

        const url=await axios.get("http://localhost:8000/bookings");
        console.log("result",url);
        setData(url);
    }
    useEffect(()=>{
        getData();

    },[]);

    return(
        <>
        <p>get data from database{

            data.map((e)=>{
                return(
                    <>
                    {e.username}
                    {e.email}
                    </>
                )

            })
            }</p>

        </>
    )

}
export default Bookings;