import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../styles/signupStyle.css"
export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    return (
        <div className="signup_page">
            <div className="signup_container">
                <h1>Register here!</h1>
                <form className='signup_form'>
                    <div className="Signup_formItem">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='your name' id='name' name='name' />
                    </div>
                    <div className="Signup_formItem">
                        <label htmlFor="email">Email Id</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' id="email" name="email" />
                    </div>
                    <div className="Signup_formItem">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' id="password" name="password" />
                    </div>
                    <button className='signup-btn' type='submit'>Register</button>
                </form>
                <Link to="/">
                <button className='link-btn'>Already Have an Account? Login here.</button>
                </Link>
            </div>
        </div>
    )
}
