import React from "react";

//import images
import travelImg1 from "../img/travel1.jpg";
import travelImg2 from "../img/travel2.jpg";
import travelImg3 from "../img/travel3.jpg";
import travelImg4 from "../img/travel4.jpg";
import travelImg5 from "../img/travel5.jpg";
import travelImg6 from "../img/travel6.jpg";
import travelImg7 from "../img/travel7.jpg";
import travelImg8 from "../img/travel8.jpg";
import travelImg9 from "../img/travel9.jpg";



const BirthdayParty= () => {
return <section className="section">
    <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center
        lg:text-left pt-24 lg:pt-36 pb-8">
            {/* text */}
            <div className="flex flex-col lg:items-start ">
                <h1 className="h1">Travel</h1>
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

            </div>

            {/* image grid*/}
            <div className="flex flex-col items-center ">
            <div className="grid grid-cols-3 lg:gap-2">
                {/*  image*/}
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg1} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg2} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg3} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg4} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg5} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg6} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg7} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg8} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={travelImg9} alt="" />
                </div>

            
            </div>
            </div>
        </div>
    </div>
</section>
};

export default BirthdayParty;

