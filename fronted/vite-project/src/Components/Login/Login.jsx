import React, { useState } from 'react';
import axios from 'axios';  
import '../Login/Login.css'
import { Link, useNavigate } from 'react-router-dom';
function Login(){
    
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    function UserInput(e){
        console.log(e.target.value);
        setUsername(e.target.value);

    }
    function PasswordInput(e){
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    async function UserLogin(){
        try {
            const response=await axios.post("http://localhost:8000/login",{
            username,
            password
        });
        console.log(response.data);
        navigate("/bookings");
            
        } catch (error) {
            console.log("message",error.message);
            
        }
        
    }

    return(
        <>
        <div className="mainContainer">
            <div className="leftContainer">
                <h2 id="loginId">LOGIN</h2>
                <input type="text" value={username} onChange={UserInput} required placeholder='User Name'/>
                <input type="password" value={password} onChange={PasswordInput} required placeholder='Password'/>
                <div className="signclass">
                     <button onClick={UserLogin} className="signbn">SIGN IN</button>
                </div>
               
                <div className="regclass">
                <Link className='registerBtn' to="/signUp">Register</Link>
            </div>


            </div>
            
            <div className="rightContainer">


            </div>

        </div>
        </>
    )


}
export default Login;