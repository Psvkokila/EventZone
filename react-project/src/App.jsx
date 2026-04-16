import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./login";
import Register from "./register";
import Home from "./Home";

import Birthday from "./Birthday";
import Wedding from "./Wedding";
import Party from "./Party";
import Littlestars from "./Littlestars";

import About from "./About";
import Profile from "./Profile";
import MoodPage from "./MoodPage";   // NEW IMPORT
import Bookings from "./Bookings";
import "./App.css";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>

        {/* Event Pages */}
        <Route path="/birthday" element={<Birthday/>}/>
        <Route path="/wedding" element={<Wedding/>}/>
        <Route path="/littlestars" element={<Littlestars/>}/>
        <Route path="/party" element={<Party/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/bookings" element={<Bookings/>}/>
        


        {/* Mood Based Suggestions */}
        <Route path="/mood/:type" element={<MoodPage/>}/>   {/* NEW ROUTE */}

      </Routes>

    </BrowserRouter>

  );

}

export default App;