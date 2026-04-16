import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
function Home(){

const navigate = useNavigate();
const [mood,setMood] = useState("");

const handleSearch = () => {

if(mood.trim() !== ""){
navigate(`/mood/${mood}`);
}

}

return(

<div className="home-background">

{/* Navbar */}

<div className="navbar">

<h2 className="logo">EventZone</h2>

<ul className="nav-links">
<li onClick={()=>navigate("/home")}>Home</li>
<li onClick={()=>navigate("/about")}>About</li>
<li onClick={()=>navigate("/profile")}>Profile</li>
</ul>

</div>

<h2>Welcome to EventZone</h2>

<p>Select event type and start planning your event</p>

<div className="search-box">

<input
type="text"
placeholder="Search mood (romantic, fun...)"
value={mood}
onChange={(e)=>setMood(e.target.value)}
/>

<button onClick={handleSearch}>Search</button>

</div>

{/* Event Cards */}

<div className="event-container">

<div className="event-card" onClick={()=>navigate("/birthday")}>
<img src="https://www.freshfruitsbasket.com/wp-content/uploads/2024/11/birthday-decoration-1.webp" alt="birthday"/>
<h3>Birthdays</h3>
</div>

<div className="event-card" onClick={()=>navigate("/wedding")}>
<img src="https://www.sloshout.com/blog/wp-content/uploads/pngtree-elegant-floral-wedding-stage-with-golden-accents-and-luxurious-decorations-image_17062748.jpg" alt="wedding"/>
<h3>Weddings</h3>
</div>

<div className="event-card" onClick={()=>navigate("/littlestars")}>
<img src="https://arpanflowers.com/wp-content/uploads/2024/08/Blue-and-gold-first-birthday-decoration-online-balloon-decoration.jpg" alt="littlestars"/>
<h3>Little Stars</h3>
</div>

<div className="event-card" onClick={()=>navigate("/party")}>
<img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329" alt="party"/>
<h3>Party</h3>
</div>

</div>

</div>

)

}

export default Home;