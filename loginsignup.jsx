import React, { useState } from 'react';
import Loginsignup from './components/Loginsignup';
import './loginsignup.css';
import user_icon from '../assets/123.jpg';
import email_icon from '../assets/R.jpeg';
import password_icon from '../assets/p.png';

const Loginsignup = () => {
    const [action, setAction] = useState("Sign Up")
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={user_icon} alt="user icon" />
                    <input type="text" placeholder="Name" />
                </div>}
               
                <div className="input">
                    <img src={email_icon} alt="email icon" />
                    <input type="email" placeholder="Email ID" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password icon" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost password? <span>Click here</span></div>}
           
            <div className="submit-container">
                <div className={action === "login" ? "submit:gray" : "submit"} onClick={()=>{setAction("Sign Up")}}>Sign up</div>
                <div className={action === "signup" ? "submit:gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    );
}

export default Loginsignup; 
