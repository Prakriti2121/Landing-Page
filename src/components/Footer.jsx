import { Link } from "react-router-dom";

import companyLogoWhite from "../assets/logo-white.svg";
import facebookLogo from "../assets/icon-facebook.svg";
import youtubeLogo from "../assets/icon-youtube.svg";
import twitterLogo from "../assets/icon-twitter.svg";
import pinterestLogo from "../assets/icon-pinterest.svg";
import instagramLogo from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* Logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright © 2024, All Rights Reserved
          </div>
          {/* Logo */}
          <div>
            <img src="../src/assets/logo-white.svg" className="h-8" alt="" />
          </div>
          {/* Social Links Container */}
          <div className="flex justify-center space-x-4">
            {/* Link 1 */}
            <a href="#">
              <img
                src="../src/assets/icon-facebook.svg"
                className="h-8"
                alt=""
              />
            </a>
            {/* Link 2 */}
            <a href="#">
              <img
                src="../src/assets/icon-instagram.svg"
                className="h-8"
                alt=""
              />
            </a>
            {/* Link 3 */}
            <a href="#">
              <img
                src="../src/assets/icon-twitter.svg"
                className="h-8"
                alt=""
              />
            </a>
            {/* Link 4 */}
            <a href="#">
              <img
                src="../src/assets/icon-pinterest.svg"
                className="h-8"
                alt=""
              />
            </a>
            {/* Link 5 */}
            <a href="#">
              <img
                src="../src/assets/icon-youtube.svg"
                className="h-8"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* List Container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Products
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1"
                placeholder="Updated in your inbox"
              />
              <button className="focus:outline-none">Go</button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright © 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
