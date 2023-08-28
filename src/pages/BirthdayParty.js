import React from "react";

//import images
import bpImg1 from "../img/bd1.jpg";
import bpImg2 from "../img/bd2.jpg";
import bpImg3 from "../img/bd3.jpg";
import bpImg4 from "../img/bd4.jpg";
import bpImg5 from "../img/bd5.jpg";
import bpImg6 from "../img/bd6.jpg";
import bpImg7 from "../img/bd7.jpg";
import bpImg8 from "../img/bd8.jpg";
import bpImg9 from "../img/bd9.jpg";



const BirthdayParty= () => {
return <section className="section">
    <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center
        lg:text-left pt-24 lg:pt-36 pb-8">
            {/* text */}
            <div className="flex flex-col lg:items-start ">
                <h1 className="h1">Birthday Party</h1>
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
                    duration-500" src={bpImg1} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg2} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg3} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg4} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg5} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg6} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg7} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg8} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bpImg9} alt="" />
                </div>

            
            </div>
            </div>
        </div>
    </div>
</section>
};

export default BirthdayParty;

