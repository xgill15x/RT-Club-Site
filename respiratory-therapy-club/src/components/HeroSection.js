import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-screen flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/hero_image.jpg')" }} // Replace with your image path
    >
      <div className="text-center bg-black bg-opacity-75 p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to the TRU Respiratory Club Website
        </h2>
        <p className="text-lg mb-6">Join our super duper exciting cool club.</p>
        <a
          href="#programs"
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Some RT call to action
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
