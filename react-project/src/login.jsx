import React,{useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login(){

const navigate = useNavigate();

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleLogin = async (e)=>{
e.preventDefault();

const res = await fetch("http://localhost:5000/api/users/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
email,
password
})

});

const data = await res.json();

if(res.ok){

localStorage.setItem("userEmail",data.email);
localStorage.setItem("userName",data.name);

alert("Login Successful");

navigate("/home");
}
else{
alert(data.message || "Login Failed");
}

}

return(

<div className="login-page">

<div className="login-card">

<h1 className="title">EventZone</h1>
<p className="tag">Your Event, Our Plan</p>

<h2>Login</h2>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Login</button>

</form>

<p>
Don't have an account?
<Link to="/register"> Register</Link>
</p>

</div>

</div>

)

}

export default Login;