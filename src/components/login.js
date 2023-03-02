import React, { useState } from 'react';
import './componenetStyle.css'

function Demo(props)
{
    //const[state, setState]=useState(false);
const Logininfo=()=>{
  let LoginMail = document.getElementById("loginMail");
    let LoginPassword = document.getElementById("loginPassword");
    let Lmail=LoginMail.value;
    let Lpass=LoginPassword.value;
    console.log(Lpass)
    console.log(Lmail)
    //setState(false)
} 

    if(props.trigger){
   return (
        <>
      <div className='container'>
      <form>
      <label>E-mail: </label>
      <input type="email" name="email" placeholder='E-mail ID' id="loginMail" required/>
      <br/>
      <label>Password: </label>
      <input type="password" name="pass" placeholder='Password' id="loginPassword" required/>
      <br/>
      <button onClick={Logininfo}>Submit</button>
    </form>
      </div>
    </>
        
   )
    }
  
       
  
}
 
export default Demo;