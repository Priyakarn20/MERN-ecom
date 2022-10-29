import React,{useState} from 'react';
import './signup.css';

function Signup() {
    const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const collectData=()=>{
        console.log(name,email,password)
    }
    return (
        <div className="container">
            <div className="box-a">
                <div className="heading"> Signup </div>
                
                <form className="Signup-form">
                    <div className="field">
                        <input id="username" type="text"
                        value={name} onChange={(e)=>setName(e.target.value)}
                        placeholder=" username " />
                    </div>
                    <div className="field">
                        <input id="Email" type="text"
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        placeholder=" Email Address " />
                    </div>
                    <div className="field">
                        <input id="password" type="password"
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Password" />
                    </div>
                    <div className="field">
                        <input id="cpassword" type="password" placeholder=" Confirm Password " />
                    </div>
                   
                    <button onClick={collectData} className="Signup-button" title="Sign-uo">Signup</button>
                </form>
            </div>
           </div>

    );
}

export default Signup;