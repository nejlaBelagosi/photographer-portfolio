import React from "react";
// import images
import PhotographerImg from '../img/photographer2.jpg';
//import link
import {Link} from 'react-router-dom';
const About = () => {
return <section className="section">
    <div className="container mx-auto h-full relative">
        {/* text * img wrapper */}
        <div className="flex flex-col lg:flex-row
        h-full items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16">
            {/* image */}
            <div className="flex-1 max-h-96 lg:max-h-max 
            order-2 lg:order-none overflow-hidden">
                <img src={PhotographerImg} alt=''/>
            </div>
            {/* text */}
            <div className="flex-1 pt-36 pb-14 lg:pt-0 
            lg:w-auto z-10 flex flex-col justify-center 
            items-center lg:items-start">
                <h1 className="h1">About me</h1>
                <p className="mb-12 max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod <b>tempor incididunt </b>ut labore et dolore
                 magna aliqua. Ut enim ad minim veniam, quis nostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea 
                 commodo consequat. 
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</p>
                <Link to={'/portfolio'} className="btn ">View my work</Link>
            </div>
        </div>
    </div>
</section>
};

export default About;