import React, { useState } from 'react';
import './Login.css'

function Demo(props)
{
const[email, setEmail]=useState('');
const[password, setPassword]=useState('')
const Logininfo=()=>{
    let loginCredentials={Email:email, Password:password}
    
    console.log(loginCredentials);
    //setState(false)
} 

    if(props.trigger){
   return (
        <>
        <div className='container-box'>
        <div className='popup'>
      <form>
        <h3>Login</h3>
      <label>E-mail: </label>
      <input type="email" name="email" placeholder='E-mail ID' id="loginMail" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
      <br/><br/>
      <label>Password: </label>
      <input type="password" name="pass" placeholder='Password' id="loginPassword" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <br/><br/>
      <button className='close-btn'onClick={Logininfo}>Submit</button>
    </form>
    <br/>
    </div>
     </div> 
    </>
        
   )
    }
  
       
  
}
 
export default Demo;