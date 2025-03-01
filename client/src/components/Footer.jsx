import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HorizonEstate. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/about" className="hover:underline">
            About Us
          </Link>
          <Link to="/" className="hover:underline">
            Contact
          </Link>
          <Link to="/" className="hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="hover:underline">
            Terms of Service
          </Link>
        </div>
        <div className="mt-2">
          <p className="text-sm">
            Follow us on:
            <Link
              to="/"
              rel="noopener noreferrer"
              className="ml-2 hover:underline"
            >
              Facebook
            </Link>{" "}
            |
            <Link
              to="/"
              rel="noopener noreferrer"
              className="ml-2 hover:underline"
            >
              Twitter
            </Link>{" "}
            |
            <Link
              to="/"
              rel="noopener noreferrer"
              className="ml-2 hover:underline"
            >
              Instagram
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
