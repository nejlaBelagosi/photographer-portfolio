import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Travel from "../img/travel11.jpg";
import Wedding from "../img/wed1.jpg";
import BirthdayParty from "../img/bd1.jpg";
import BlackWhite from "../img/bw11.jpg";



const Portfolio = () => {
    const imageThemes = {
        [Travel]: "Travel",
        [Wedding]: "Wedding",
        [BirthdayParty]: "Birthday Party",
        [BlackWhite]: "Black & White",
    };

    const [hoveredImage, setHoveredImage] = useState(null);

    const handleMouseEnter = (imageSrc) => {
        setHoveredImage(imageSrc);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    return (
        <section className="section">
            <div className="container mx-auto h-full relative">
                <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
                    <div className="flex flex-col lg:items-start">
                        <h1 className="h1">Portfolio</h1>
                        <p className="mb-12 max-w-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <b>tempor incididunt </b>ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <Link to={'/contact'} className="btn mb-[30px] mx-auto lg:mx-0">Hire me</Link>
                    </div>
                    <div className="grid grid-cols-2 lg:gap-2">
                        {[
                            { imageSrc: Travel, alt: "Travel" },
                            { imageSrc: Wedding, alt: "Wedding" },
                            { imageSrc: BirthdayParty, alt: "BirthdayParty" },
                            { imageSrc: BlackWhite, alt: "BlackWhite" },
                        ].map(({ imageSrc, alt }) => (
                            <Link key={imageSrc} to={`/portfolio/${alt.toLowerCase().replace(/ /g, "-")}`}>
                            <div
                                key={imageSrc}
                                className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden relative"
                                onMouseEnter={() => handleMouseEnter(imageSrc)}
                                onMouseLeave={handleMouseLeave}
                            >
                                    <img
                                        className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                                        src={imageSrc}
                                        alt={alt}
                                    />
                                
                                {hoveredImage === imageSrc && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity">
                                        {imageThemes[imageSrc]}
                                    </div>
                                )}
                            </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

