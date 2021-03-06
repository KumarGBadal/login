 import React, { useState } from "react";
 import "./Login.css" 
 const Login = () => {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

     return ( 
        <div className="login">
            <form className="login_here">
                <h1>Login</h1>
                <input type="name"
                 placeholder="Name"
                  value={name} 
                 onchange={(e) => setName(e.target.value)}
                 />

                <input type="email" 
                placeholder="Email"
                 value={email} 
                 onchange={(e) => setEmail(e.target.value)}
                 />

                <input type="password" 
                placeholder="Password" 
                value={password} 
                onchange={(e) => setPassword (e.target.value)}
                />

                <button type="submit" className="submit_btn">
                    Submit
                </button>

                
            </form>
        </div>
     );
 };

 export default Login;