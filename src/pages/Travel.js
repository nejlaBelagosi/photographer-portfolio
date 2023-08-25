import React from "react";

//import images
import bw1 from "../img/bw1.jpg";
import bw2 from "../img/bw2.jpg";
import bw3 from "../img/bw3.jpg";
import bw4 from "../img/bw4.jpg";
import bw5 from "../img/bw5.jpg";
import bw6 from "../img/bw6.jpg";
import bw7 from "../img/bw7.jpg";
import bw8 from "../img/bw8.jpg";
import bw9 from "../img/bw9.jpg";



const Travel= () => {
return <section className="section">
    <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center
        lg:text-left pt-24 lg:pt-36 pb-8">
            {/* text */}
            <div className="flex flex-col lg:items-start ">
                <h1 className="h1">Black&White</h1>
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
            <div className="grid grid-cols-3 lg:gap-2">
                {/*  image*/}
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw1} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw2} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw3} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw4} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw5} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw6} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw7} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw8} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={bw9} alt="" />
                </div>

            
            </div>
        </div>
    </div>
</section>
};

export default Travel;

