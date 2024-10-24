import React from "react";
import Gallery from "./Gallery";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('./hero_image.jpg')" }}
    >
      <div className="text-center bg-black bg-opacity-75 p-8 rounded-lg w-11/12 md:w-3/4 lg:w-1/2">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to the TRU Respiratory Club Website
        </h2>
        <div className="flex justify-center mb-4">
          <img
            src="./logo.png"
            alt="Circular Representation"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        <p className="text-lg mb-6">Join our super duper exciting cool club.</p>
        <a
          href="#programs"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Some RT call to action
        </a>
      </div>
      <div className="flex mt-8 gap-4">
        <Gallery />
      </div>
    </section>
  );
};

export default HeroSection;
