import React from "react";
import "./Event.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
function Littlestars(){
const navigate = useNavigate();

// function to send event name to bookings page
const handleBook = (eventName) => {
navigate("/bookings", { state: { event: eventName } });
};
return(
   <>
<Navbar/>
<div className="event-page littlestars-bg">

<h1>Little Stars</h1>

<div className="decor-container">

<div className="decor-card">
<img src="https://m.media-amazon.com/images/I/71IC2lqIgdL.jpg"/>
<h3>Baby Shower</h3>
<p>Starting from: ₹6000</p>
<button 
className="book-btn"
onClick={()=>handleBook("Baby Shower")}
>
Book Now
</button>
</div>

<div className="decor-card">
<img src="https://cdn.togetherv.com/baby-girl-naming-ceremony-decor-main_1678083111.webp"/>
<h3>Naming Ceremony</h3>
<p>Starting from: ₹3500</p>
<button 
className="book-btn"
onClick={()=>handleBook("Naming Ceremony")}
>
Book Now
</button>
</div>

<div className="decor-card">
<img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/64c8ef283d3dec001d09161b.jpg"/>
<h3>Cradle Ceremony</h3>
<p>Starting from: ₹9000</p>
<button 
className="book-btn"
onClick={()=>handleBook("Cradle Ceremony")}
>
Book Now
</button>
</div>

<div className="decor-card">
<img src="https://m.media-amazon.com/images/I/71P71+aqu0L.jpg"/>
<h3>First Birthday </h3>
<p>Starting from: ₹10000</p>
<button 
className="book-btn"
onClick={()=>handleBook("First Birthday")}
>
Book Now
</button>
</div>

<div className="decor-card">
<img src="https://www.partypropz.com/cdn/shop/products/71V_CrPjvkL._SL1500_bf4cdece-51bd-4c12-ad13-46248dc11bda.jpg?v=1753712573&width=1206"/>
<h3>Baby Welcome </h3>
<p>Starting from: ₹7000</p>
<button 
className="book-btn"
onClick={()=>handleBook("Baby Welcome")}
>
Book Now
</button>
</div>

<div className="decor-card">
<img src="https://m.media-amazon.com/images/I/61k8pcji+DS.jpg"/>
<h3>Half Birthday </h3>
<p>Starting from: ₹5000</p>
<button 
className="book-btn"
onClick={()=>handleBook("Half Birthday")}
>
Book Now
</button>
</div>

</div>

</div>

</>

)

}

export default Littlestars;