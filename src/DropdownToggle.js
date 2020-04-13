import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const colorSchemes = {
  black: "bg-black text-white active:bg-gray-900",
  white: "bg-white text-black active:bg-gray-100",
  gray: "bg-gray-500 text-white active:bg-gray-600",
  red: "bg-red-500 text-white active:bg-red-600",
  orange: "bg-orange-500 text-white active:bg-orange-600",
  yellow: "bg-yellow-500 text-white active:bg-yellow-600",
  green: "bg-green-500 text-white active:bg-green-600",
  teal: "bg-teal-500 text-white active:bg-teal-600",
  blue: "bg-blue-500 text-white active:bg-blue-600",
  indigo: "bg-indigo-500 text-white active:bg-indigo-600",
  purple: "bg-purple-500 text-white active:bg-purple-600",
  pink: "bg-pink-500 text-white active:bg-pink-600"
};

const DropdownToggle = React.forwardRef(({ children, color, ...rest },ref) => {
  return (
    <>
      <button
        {...rest}
        ref={ref}
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

DropdownToggle.defaultProps = {
  color: "pink"
};

DropdownToggle.propTypes = {
  // set the background
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
  ])
};

export default DropdownToggle;
