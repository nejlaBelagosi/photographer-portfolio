import React from "react";

//import images
import weddingImg1 from "../img/wed1.jpg";
import weddingImg2 from "../img/wed2.jpg";
import weddingImg3 from "../img/wed3.jpg";
import weddingImg4 from "../img/wed4.jpg";
import weddingImg5 from "../img/wed5.jpg";
import weddingImg6 from "../img/wed6.jpg";
import weddingImg7 from "../img/wed7.jpg";
import weddingImg8 from "../img/wed8.jpg";
import weddingImg9 from "../img/wed9.jpg";



const BirthdayParty= () => {
return <section className="section">
    <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full
        items-center justify-start gap-x-24 text-center
        lg:text-left pt-24 lg:pt-36 pb-8">
            {/* text */}
            <div className="flex flex-col lg:items-start ">
                <h1 className="h1">Wedding</h1>
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
                    duration-500" src={weddingImg1} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg2} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg3} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg4} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg5} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg6} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg7} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg8} alt="" />
                </div>
                <div className="max-w-[250px] lg:max-w-[320px] h-[187px]
                lg:h-[220px] bg-accent overflow-hidden">
                    <img className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all
                    duration-500" src={weddingImg9} alt="" />
                </div>

            
            </div>
            </div>
        </div>
    </div>
</section>
};

export default BirthdayParty;

