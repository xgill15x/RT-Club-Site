import React from "react";
import SaveTheDate from "./SaveTheDate";

const HeroSection = () => {
  const upcomingEvents = [
    {
      title: "Respiratory Care Workshop",
      date: "November 15th, 2024",
      description:
        "Join us for an in-depth workshop on respiratory care techniques.",
    },
    {
      title: "Annual Respiratory Health Conference",
      date: "January 20th, 2025",
      description:
        "Meet experts and participate in discussions on the latest in respiratory health.",
    },
    {
      title: "Annual Respiratory Health Conference",
      date: "January 20th, 2025",
      description:
        "Meet experts and participate in discussions on the latest in respiratory health.",
    },
    {
      title: "Annual Respiratory Health Conference",
      date: "January 20th, 2025",
      description:
        "Meet experts and participate in discussions on the latest in respiratory health.",
    },
  ];

  return (
    <section
      className="bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: "url('./hero_image.jpg')" }}
    >
      <div className="flex flex-col items-start md:flex-row justify-center my-8 gap-4 w-11/12 lg:w-7/12">
        <div className="text-center bg-black bg-opacity-75 p-8 rounded-lg w-full max-h-[30rem]">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to the TRU Respiratory Therapy Club
          </h2>
          <div className="flex justify-center mb-4">
            <a href="https://www.instagram.com/trusurtclub/">
              <img
                src="./logo.png"
                alt="Circular Representation"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg cursor-pointer"
              />
            </a>
          </div>
          <p className="text-lg mb-6">
            Join our super duper exciting cool club.
          </p>
          <a
            href="#programs"
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Some RT call to action
          </a>
        </div>

        <SaveTheDate events={upcomingEvents} />
      </div>
    </section>
  );
};

export default HeroSection;
