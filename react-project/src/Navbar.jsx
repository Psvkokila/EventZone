import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

const navigate = useNavigate();

return(

<div className="navbar">

<div className="logo">EventZone</div>

<ul className="nav-links">

<li onClick={()=>navigate("/home")}>
Home
</li>

<li onClick={()=>navigate("/about")}>
About
</li>

<li onClick={()=>navigate("/profile")}>
Profile
</li>

</ul>

</div>

)

}

export default Navbar;