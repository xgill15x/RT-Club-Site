import React, { forwardRef } from "react";

const About = forwardRef((_, ref) => {
  return (
    <div ref={ref} className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At the Repertory Therapy Club, we believe in the power of friendship
          and shiet. Our mission is to provide a supportive environment where
          individuals can explore their passion for Respiratory therapy.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          We aim to foster a community of creativity, inclusivity, and personal
          growth, helping our members develop their skills and confidence to
          lead successful careers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="./jasmeen_brarPFP.jpg"
              alt="Team Member 1"
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center">Jasmeen Brar</h3>
            <p className="text-gray-600 text-center">
              Co-founder and certified baddie 🔥
            </p>
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
