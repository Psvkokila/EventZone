const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  event:{
    type:String,
    required:true
  },

  date:{
    type:String
  },

  venue:{
    type:String
  },

  comment:{
    type:String
  },

  payment:{
    type:String
  },

  email:{
    type:String
  }

});

module.exports = mongoose.model("Booking", bookingSchema);