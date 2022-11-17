import React,{useState} from 'react';
import './signup.css';
import axios from 'axios';

function Signup() {
   /* const [name, setName]=useState("");
    const [password, setPassword]=useState("");
    const [email, setEmail]=useState("");
    const collectData=()=>{
        console.log(name,email,password)
    }*/
    const [data, setData] = useState({
        username:"",
        email:"",
        password:""
        
      });
    const handleChange=(e)=>{
    const {name , value}=e.target;
    setData({
      ...data,
      [name]:value,
    })
    
    }

 async function register(){
    const {username, email, password} = data;
    console.log(data);
if (username && password && email){
    const res= await axios.post({

    url:'http://localhost:8000/user/signup', 
    method : 'POST',
    data: data
   })
   console.log(res);
    

 /*  await axios.post('http://localhost:8000/user/signup', {data})
   .then(
    res=>alert(res.data.message)
   )
   */
}
 }
    
    return (
        <div className="container">
            <div className="box-a">
                <div className="heading"> Signup </div>
                
                <form className="Signup-form">
                    <div className="field">
                        <input id="username" type="text" name="username"
                        value={data.username} onChange={handleChange}
                        placeholder=" username " />
                    </div>
                    <div className="field">
                        <input id="Email" type="text" name="email"
                        value={data.email} onChange={handleChange}
                        placeholder=" Email Address " />
                    </div>
                    <div className="field">
                        <input id="password" type="password" name="password"
                        value={data.password} onChange={handleChange}
                        placeholder="Password" />
                    </div>
                  
                    <button onClick={register} className="Signup-button" title="Sign-uo">Signup</button>
                    
                </form>
            </div>
           </div>

    );
}

export default Signup;