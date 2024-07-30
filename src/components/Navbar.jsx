import React from "react";
import companyLogo from "../assets/pagelogo.png";
// import '../Styles/global.css';
import Button from "../components/Button";

const Navbar = () => {
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img
            src="../src/assets/pagelogo.png"
            alt="Company Logo"
            className="w-21 h-auto"
          />
        </div>
        <div className="hidden space-x-6 md:flex">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </div>
        <a href="#" className="hidden md:block">
          <Button
            variant="primary"
            onClick={() => alert("Primary Button Clicked!")}
          >
            Primary Button
          </Button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
