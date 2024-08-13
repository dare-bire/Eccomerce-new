import React, { useState } from 'react'
import './css/LoginSignUp.css'
const LoginSignup = () => {

   const[State,setState] = useState("Login");
   const[formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
   })
   const ChangeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
   }
   const login = async () => {
    console.log("Login function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
    body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>
      responseData=data)
    if(responseData.success){
    localStorage.setItem('auth-token',
      responseData.token);
    window.location.replace("/");
    }else{
     alert(responseData.errors)
    }
    
    
  };

  const signup = async () => {
    console.log("Signup function executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
    body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>
      responseData=data)
    if(responseData.success){
    localStorage.setItem('auth-token',
      responseData.token);
    window.location.replace("/");
    }else{
     alert(responseData.errors)
    }
  };
  
  return (
    <div className='loginsignup'>
    <div className='loginsignup-cointanier'>
      <h1>{State}</h1>
      <div className='loginsignup-fields'>
        {State==="Sign Up"?<input name='username'value={formData.username} onChange={ChangeHandler} type='text' placeholder='name'/>:<></>}
        <input name='email' value={formData.email} onChange={ChangeHandler} type='email' placeholder='Email address'/>
        <input name='password' value={formData.password} onChange={ChangeHandler} type='password' placeholder='password'/>
      </div>
      <button onClick={()=>{State==="Login"?login():signup()}}>continue</button>
      {State==="Sign Up"?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>login here</span></p>
      :<p className='loginsignup-login'>craete account? <span onClick={()=>{setState("Sign Up")}}>click here</span></p>}
      <div className='loginsignup-agree'>
        <input type='checkbox' name='' id=''/>
        <p>By continuing ,i agree to terms of use & privacy service</p>
      </div>
    </div>
      
    </div>
  )
}

export default LoginSignup
