import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/assets'

const Login = ({setlogin}) => {

    const[currentState,setCurrentState] = useState('Login')

  return (
    <div className='loginpopup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                 <h2>{currentState}</h2>
                 <img src={assets.cross_icon} onClick={()=> setlogin(false)}></img>
            </div>
            <div className='login-pop-input'>
                {currentState === "Login"?<></>:<input type='text' placeholder='Name'/>}
                
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password' />
            </div>
            <button>{currentState === "Sign Up"? "Create Account": "Login"}</button>
            <div className='login-pop-condition'>
                <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            <div className='switch-login'>
            {currentState === "Login"? <p>Create an Account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:<p>Already have Account? <span onClick={()=>setCurrentState("Login")}>Login</span></p>}
            {/* <p>Create an Account? <span>Click Here</span></p>
            <p>Already have Account? <span>Login</span></p> */}
            </div>
        </form>
    </div>
  )
}

export default Login