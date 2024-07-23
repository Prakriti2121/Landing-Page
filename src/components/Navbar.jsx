import React from 'react'; 
import companyLogo from '../assets/pagelogo.png'; 

const Navbar = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
        <img src='../src/assets/pagelogo.png' alt='Company Logo' className='w-21 h-auto' />
        </div>
        <div className='hidden space-x-6 md:flex'>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Pricing
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Product
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            About Us
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Careers
          </a>
          <a href='#' className='hover:text-darkGrayishBlue'>
            Community
          </a>
        </div>
        <a
          href='#'
          className='hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block'
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
