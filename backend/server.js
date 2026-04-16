const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/",(req,res)=>{
  res.send("EventZone Backend Running");
});

const PORT = 5000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});