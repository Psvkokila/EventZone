import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";

function Register(){

const navigate = useNavigate();

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const handleRegister = async (e)=>{
e.preventDefault();

const res = await fetch("http://localhost:5000/api/users/register",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
name,
email,
password
})

});

const data = await res.json();

if(res.ok){

localStorage.setItem("userName",name);
localStorage.setItem("userEmail",email);

alert("Registration Successful");

navigate("/");
}
else{
alert(data.message || "Error");
}

}

return(
<div className="login-page">

<div className="login-card">

<h1 className="title">EventZone</h1>

<h2>Register</h2>

<form onSubmit={handleRegister}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

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

<button type="submit">Register</button>

</form>

<p>
Already have account?
<Link to="/"> Login</Link>
</p>

</div>

</div>
)

}

export default Register;