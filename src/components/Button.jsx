import React from "react";
import { cva } from "class-variance-authority";
import PropTypes from "prop-types";

// Define the button variants using cva
const buttonVariants = cva(
  "p-3 px-6 pt-2 text-white bg-brightRed rounded-full  hover:bg-brightRedLight",
  {
    variants: {
      variant: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white",
      },
    },
  }
);

// Define the Button component
const Button = ({ variant, children = "Button", ...props }) => {
  return (
    <button className={buttonVariants({ variant })} {...props}>
      {children}
    </button>
  );
};

// Define the proptypes for the Button component
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  children: PropTypes.node.isRequired,
};

// Define the default proptypes for the Button component
Button.defaultProps = {
  variant: "primary",
};
export default Button;
