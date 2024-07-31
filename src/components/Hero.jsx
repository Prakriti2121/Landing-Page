import React from "react";
import Button from "../components/Button";

const Hero = ({ title, description, buttonText, buttonVariant, buttonAction, imageSrc }) => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-[130px] space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            {title}
          </h1>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            {description}
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              variant={buttonVariant}
              onClick={buttonAction}
            >
              {buttonText}
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt="illustration-intro"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
