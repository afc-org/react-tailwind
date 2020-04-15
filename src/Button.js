import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const colorSchemes = {
  black:
    "bg-black border border-solid border-gray-900 hover:bg-gray-900 hover:border-gray-800 active:bg-gray-900 active:border-gray-800 text-white",
  white:
    "bg-white border border-solid border-gray-100 hover:bg-gray-100 hover:border-gray-200 active:bg-gray-100 active:border-gray-200 text-black",
  gray:
    "bg-gray-600 border border-solid border-gray-600 hover:bg-gray-700 hover:border-gray-800 active:bg-gray-700 active:border-gray-800 text-white",
  red:
    "bg-red-600 border border-solid border-red-600 hover:bg-red-700 hover:border-red-800 active:bg-red-700 active:border-red-800 text-white",
  orange:
    "bg-orange-600 border border-solid border-orange-600 hover:bg-orange-700 hover:border-orange-800 active:bg-orange-700 active:border-orange-800 text-white",
  yellow:
    "bg-yellow-600 border border-solid border-yellow-600 hover:bg-yellow-700 hover:border-yellow-800 active:bg-yellow-700 active:border-yellow-800 text-white",
  green:
    "bg-green-600 border border-solid border-green-600 hover:bg-green-700 hover:border-green-800 active:bg-green-700 active:border-green-800 text-white",
  teal:
    "bg-teal-600 border border-solid border-teal-600 hover:bg-teal-700 hover:border-teal-800 active:bg-teal-700 active:border-teal-800 text-white",
  blue:
    "bg-blue-600 border border-solid border-blue-600 hover:bg-blue-700 hover:border-blue-800 active:bg-blue-700 active:border-blue-800 text-white",
  indigo:
    "bg-indigo-600 border border-solid border-indigo-600 hover:bg-indigo-700 hover:border-indigo-800 active:bg-indigo-700 active:border-indigo-800 text-white",
  purple:
    "bg-purple-600 border border-solid border-purple-600 hover:bg-purple-700 hover:border-purple-800 active:bg-purple-700 active:border-purple-800 text-white",
  pink:
    "bg-pink-600 border border-solid border-pink-600 hover:bg-pink-700 hover:border-pink-800 active:bg-pink-700 active:border-pink-800 text-white"
};

const Button = React.forwardRef(({ color, children, ...rest }, ref) => {
  return (
    <>
      <button
        {...rest}
        className={classnames(
          "rounded font-normal outline-none focus:outline-none align-middle text-base px-3 py-2 leading-tight",
          colorSchemes[color]
        )}
      >
        {children}
      </button>
    </>
  );
});

Button.defaultProps = {
  color: "pink"
};

Button.propTypes = {
  // set the background, border and text color
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

export default Button;
