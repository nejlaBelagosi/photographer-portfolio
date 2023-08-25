import React from "react";
import PhotographerImg from "../img/photographer.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="w-full lg:w-1/2 pt-36 pb-14 lg:pt-0 lg:pb-0 z-10 lg:pl-20 flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl lg:text-6xl 
            font-bold mb-4 lg:mb-8">photographer<br />& film maker</h1>
            <p className="text-lg lg:text-xl font-primary 
            mb-6 lg:mb-10">Sarajevo, BiH, 71000</p>
            <Link to={'/contact'} className="btn">hire me</Link>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="max-w-lg lg:max-w-full">
              <img className="w-full h-auto" src={PhotographerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
