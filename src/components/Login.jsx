import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/loginStyle.css'
export default function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const localStorageEmail = localStorage.getItem("email")
    const localStorageName = localStorage.getItem("name")
    const localStoragePassword = localStorage.getItem("password")


    const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorageEmail===email && localStoragePassword===password){
            localStorage.setItem("signup",email)
            alert("Login Successful")
            window.location.reload()
        }else{
            alert("Give the proper Email id and Password")
        }
      
    }

    return (
        <div className="main-body">
            <div className="login_page">
                <div className='login_Container'>
                    <div className="login_left">
                        <div className="login_header">
                            <h1>welcome to Doctor's Book</h1>
                            <p>Please log in yourself</p>
                        </div>
                        <form className='login_form'onSubmit={handleSubmit}>
                            <div className="loginForm_content">
                                <div className="formItem">
                                    <label htmlFor="email">Enter Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='xxx@email.com' name="email" id="email" />
                                </div>
                                <div className="formItem">
                                    <label htmlFor="password">Enter Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='******' name="password" id="password" />
                                </div>
                                <button type='submit'>Log In</button>
                            </div>
                            <div className="loginForm_footer">
                                <a href="#">
                                    <img width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                                    Facebook Login
                                </a>
                                <a href="#">
                                    <img width={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU" alt="" />
                                    Google Login
                                </a>
                            </div>
                        </form>
                        <Link to="/signup" ><button className='link-btn'> Don't Have an Account? Register here.</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
