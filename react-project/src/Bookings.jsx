import React,{useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Bookings.css";

function Bookings(){

const location = useLocation();
const navigate = useNavigate();

const eventName = location.state?.name || location.state?.event || "Selected Event";

const [comment,setComment] = useState("");
const [date,setDate] = useState("");
const [venue,setVenue] = useState("");
const [payment,setPayment] = useState("");

const handleProceed = async () => {

if(payment === ""){
alert("Please select payment method");
return;
}

const email = localStorage.getItem("userEmail");

const res = await fetch("http://localhost:5000/api/bookings/book",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
event:eventName,
date:date,
venue:venue,
comment:comment,
payment:payment,
email:email
})

});

if(res.ok){

alert("Payment Successful & Event Booked 🎉");

navigate("/profile");

}
else{
alert("Booking Failed");
}

};

return(

<>
<Navbar/>

<div className="booking-page">

<div className="booking-card">

<h2>Booking for {eventName}</h2>

<textarea
placeholder="Enter customization details..."
value={comment}
onChange={(e)=>setComment(e.target.value)}
/>

<br/>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>

<br/>

<input
type="text"
placeholder="Enter event venue"
value={venue}
onChange={(e)=>setVenue(e.target.value)}
/>

<br/>

<h3>Select Payment Method</h3>

<div className="payment-methods">

<label className="payment-box">
<input
type="radio"
name="payment"
value="UPI"
onChange={(e)=>setPayment(e.target.value)}
/>
UPI
</label>

<label className="payment-box">
<input
type="radio"
name="payment"
value="Card"
onChange={(e)=>setPayment(e.target.value)}
/>
Debit Card
</label>

<label className="payment-box">
<input
type="radio"
name="payment"
value="NetBanking"
onChange={(e)=>setPayment(e.target.value)}
/>
Net Banking
</label>

</div>

<button className="proceed-btn" onClick={handleProceed}>
Proceed
</button>

</div>

</div>
</>

)

}

export default Bookings;