import React, { forwardRef } from "react";
import Gallery from "./Gallery";

const About = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="container mx-auto px-4 py-12 pb-0">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

      <section className="mb-8 flex flex-col items-center max-w-screen-md mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At the Repertory Therapy Club, we believe in the power of friendship.
          Our mission is to provide a supportive environment where individuals
          can explore their passion for Respiratory therapy.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We aim to foster a community of creativity, inclusivity, and personal
          growth, helping our members develop their skills and confidence to
          lead successful careers.
        </p>
      </section>

      <section className="mb-12 flex flex-col items-center">
        <div className="flex flex-col lg:flex-row gap-4 w-11/12">
          <div className="w-full lg:w-1/3">
            <Gallery />
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Gallery />
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Gallery />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="./jasmeen_brarPFP.jpg"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">Jasmeen Brar</h3>
            <p className="text-gray-600 text-center">Co-founder</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="/path-to-team-member-2.jpg"
              alt="Team Member 2"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">Riddhi LastName</h3>
            <p className="text-gray-600 text-center">Co-founder</p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default About;
