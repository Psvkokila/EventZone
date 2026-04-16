import React from "react";
import "./About.css";

import Navbar from "./Navbar";

function About(){

return(

     <>
<Navbar/>

<div className="about-page">

<h1>About EventZone</h1>

<p>
EventZone is a smart event planning platform built using the MERN stack.
It helps users organize events like birthdays, weddings, and parties easily.
Users can explore decoration ideas, check pricing, and plan their events
in a simple and interactive way.
</p>

<p>
The system also includes a unique feature called
<b> Emotion-Based Event Recommendation </b>.
Users can search their mood such as romantic, fun, or happy and the system
suggests suitable event decorations and themes automatically.
</p>

</div>
</>

)

}

export default About;