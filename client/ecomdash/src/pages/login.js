import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
import './signup.js';

function Login() {
    return (
        <div className="container">
            <div className="box-a">
                <div className="heading"> Login </div>
                
                <form className="login-form">
                    <div className="field">
                        <input id="username" type="name" placeholder=" Email Address " />
                    </div>
                    <div className="field">
                        <input id="password" type="password" placeholder="Password" />
                    </div>
                    <div>
                        <div className="forgot-password"> <Link to="#">Forgot password?</Link></div>
                    </div>
                    <button className="login-button" title="login">Log In</button>
                </form>
            </div>
            <div className="box">
                <p>Not a member? <Link to='/signup'>signup now</Link></p>
            </div>



        </div>

    );
}

export default Login;