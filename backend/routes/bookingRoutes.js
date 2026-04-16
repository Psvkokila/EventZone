const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");


// Create booking
router.post("/book", async (req, res) => {

  try {
    console.log(req.body);

    const { event, date, venue, comment, payment, email } = req.body;

    const booking = new Booking({
      event,
      date,
      venue,
      comment,
      payment,
      email
    });

    await booking.save();

    res.json({ message: "Booking Successful" });

  }
  catch (error) {
    res.status(500).json(error);
  }

});


// Get all bookings
router.get("/all", async (req, res) => {

  const bookings = await Booking.find();

  res.json(bookings);

});

module.exports = router;