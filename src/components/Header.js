import React from "react";

//import components
import Socials from "./Socials";
//import Logo from '../img/header/logo.svg'; 
import MobileNav from './MobileNav';

//import link
import {Link} from 'react-router-dom';

const Header = () => {
return (
    <header className="fixed w-full px-[30px] lg:px-[100px]
     z-30 h-[100px] lg:h-[140px]
    flex items-center">
        <div className="flex flex-col lg:flex-row
        lg:items-center w-full justify-between">
            {/* logo */}
            <Link to={'/'} className="max-w-[200px]">
                <h1>PHOTOGRAPHER</h1>
            </Link>
            {/* nav */}
            <nav className="hidden xl:flex gap-x-12 font-semibold">
                <Link to={'/'} className="text-[#526D82] hover:text-[#27374D] transition">Home</Link>
                <Link to={'/about'} className="text-[#526D82] hover:text-[#27374D] transition">About</Link>
                <Link to={'/portfolio'} className="text-[#526D82] hover:text-[#27374D] transition">Portfolio</Link>
                <Link to={'/contact'} className="text-[#526D82] hover:text-[#27374D] transition">Contact</Link>
            </nav>


        </div>   
        {/* socials */}
        <Socials />

        {/* mobile nav */}
        <MobileNav />
    </header>
)
};

export default Header;