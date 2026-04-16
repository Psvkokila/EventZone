import React,{useEffect,useState} from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Profile(){

const navigate = useNavigate();

const name = localStorage.getItem("userName");
const email = localStorage.getItem("userEmail");

const [bookings,setBookings] = useState([]);

useEffect(()=>{

fetch("http://localhost:5000/api/bookings/all")
.then(res=>res.json())
.then(data=>{

const userBookings = data.filter(item => item.email === email);

setBookings(userBookings);

});

},[])

const handleLogout = () => {

localStorage.removeItem("userEmail");
localStorage.removeItem("userName");

navigate("/");

}

return(

<>
<Navbar/>

<div className="profile-page">

<div className="profile-card">

<img 
className="profile-avatar"
src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
alt="profile"
/>

<h2>{name}</h2>

<p><b>Email:</b> {email}</p>

<h3>Your Bookings</h3>

{bookings.map((b,index)=>(

<div key={index}>

<p><b>Event:</b> {b.event}</p>

<p><b>Customization:</b> {b.comment}</p>

<hr/>

</div>

))}

<button className="logout-btn" onClick={handleLogout}>
Logout
</button>

</div>

</div>
</>

)

}

export default Profile;