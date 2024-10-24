import React from "react";

const Header = ({ aboutRef, contactRef }) => {
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold cursor-pointer" onClick={scrollToTop}>
          Respiratory Therapy Club
        </h1>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#about"
              onClick={scrollToAbout}
              className="hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
