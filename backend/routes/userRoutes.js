const express = require("express");
const router = express.Router();
const User = require("../models/user");


router.post("/register", async (req,res)=>{

  try{

    const {name,email,password} = req.body;

    const user = new User({name,email,password});

    await user.save();

    res.json({message:"User Registered"});

  }
  catch(error){
    res.status(500).json(error);
  }

});


router.post("/login", async (req,res)=>{

  const {email,password} = req.body;

  const user = await User.findOne({email,password});

  if(user){
    res.json(user);
  }
  else{
    res.status(400).json({message:"Invalid credentials"});
  }

});

module.exports = router;