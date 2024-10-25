import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center w-11/12">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Respiratory Therapy Club. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/trusurtclub/"
            className="hover:text-blue-400"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
