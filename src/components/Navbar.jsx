import React from "react";
import Button from "../components/Button";

const Navbar = ({ links, logoSrc }) => {
  return (
    <nav className="container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img
            src={logoSrc}
            alt="Company Logo"
            className="w-21 h-auto"
          />
        </div>
        <div className="hidden space-x-6 md:flex">
          {links.map((link, index) => (
            <a key={index} href="#">{link}</a>
          ))}
        </div>
        <Button
          className="hidden md:block"
          variant="primary"
          onClick={() => alert("Primary Button Clicked!")}
        >
          Primary Button
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
