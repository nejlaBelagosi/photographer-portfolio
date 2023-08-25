import React from "react";

//import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import BlackWhite from "../pages/BlackWhite";
import Wedding from "../pages/Wedding";
import Travel from "../pages/Travel";
import BirthdayParty from "../pages/BirthdayParty";
//import routes route & useLocation
import {Routes, Route, useLocation} from 'react-router-dom';

const AnimRoutes = () => {
    const location = useLocation();
return (
    <Routes key={location.pathname} location={location} >
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/contact" element ={<Contact />} />
        <Route path="/portfolio" element ={<Portfolio />} />
        <Route path="/portfolio/blackwhite" element ={<BlackWhite />} />
        <Route path="/portfolio/travel" element ={<Travel />} />
        <Route path="/portfolio/wedding" element ={<Wedding />} />
        <Route path="/portfolio/birthdayparty" element ={<BirthdayParty />} />
    </Routes>

)
};

export default AnimRoutes;