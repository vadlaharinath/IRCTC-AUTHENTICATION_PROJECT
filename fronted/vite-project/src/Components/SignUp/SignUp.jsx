import axios from "axios";
import React, { useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
function SignUp() {
    const[username,SetUsername] =useState("");
    const[fullname,SetFullname] =useState("");
    const[password,Setpassword] =useState("");
    const[email,SetEmail] =useState("");
    const[country,SetCountry] =useState("");
    const[mobile,SetMobile] =useState("");

    function InputUser(e){
        console.log(e.target.value);
        SetUsername(e.target.value);    
    }
    async function HandleSignup(){
        try {
            const response=await axios.post("http://localhost:8000/signup",{
            username,
            fullname,
            password,
            email,
            country,
            mobile,
        });
        console.log(response.data);

            
        } catch (error) {
            console.log("error",error.message);
        }
        
    }
  return (
    <>
      <div className="mainContainer">
        <div className="head">
          <h2>Create Your IRCTC account</h2>
          <Link to="/Login">SignIn</Link>
        </div>
        <div className="headBelow">
          <ol>
            <li>
              Garbage / Junk values in profile may lead to deactivation of IRCTC
              account.
            </li>
            <li>
              Opening Advance Reservation Period(ARP) ticket and Opening Tatkal
              ticket booking for unauthenticated users is allowed only after 4
              days from date of User Registration (excluding the day of
              registration ). User may authenticate their user profile with
              Aadhaar to book Opening Advance Reservation Period(ARP) ticket and
              Opening Tatkal ticket.
            </li>
          </ol>
        </div>
        <div className="inputField">
            <input value={username}  onChange={InputUser} placeholder="User Name"/>
            <input value={fullname} onChange={(e)=>{SetFullname(e.target.value)}}  placeholder="Full Name"/>
            <input value={password} onChange={(e)=>{Setpassword(e.target.value)}} placeholder="Password"/>
            <input value={email} onChange={(e)=>{SetEmail(e.target.value)}} placeholder="Email"/>
            <input value={country} onChange={(e)=>{SetCountry(e.target.value)}} placeholder="Country"/>
            <input value={mobile} onChange={(e)=>{SetMobile(e.target.value)}} placeholder="Mobile"/>
            <button onClick={HandleSignup} >Submit</button>

        </div>
      </div>
    </>
  );
}
export default SignUp;
