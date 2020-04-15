import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const colorSchemes = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  gray: "bg-gray-600 text-white",
  red: "bg-red-600 text-white",
  orange: "bg-orange-600 text-white",
  yellow: "bg-yellow-600 text-white",
  green: "bg-green-600 text-white",
  teal: "bg-teal-600 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  purple: "bg-purple-600 text-white",
  pink: "bg-pink-600 text-white"
};

const Navbar = ({ children, color, menu, ...rest }) => {
  return (
    <>
      <nav
        {...rest}
        className={classnames(
          colorSchemes[color],
          { "mb-3": !menu },
          { rounded: menu },
          "flex flex-wrap items-center justify-between px-4 py-2"
        )}
      >
        {children}
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  color: "pink",
  menu: false
};

Navbar.propTypes = {
  // if you do not want to use this component as a navbar,
  // but as a small menu someplace in your page,
  // you can add the menu prop on it
  menu: PropTypes.bool,
  // set the background and text color
  color: PropTypes.oneOf([
    "black",
    "white",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ]),
  children: PropTypes.node
};

export default Navbar;
