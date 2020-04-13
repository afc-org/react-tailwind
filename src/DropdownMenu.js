import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const margins = {
  top: "mb-1",
  bottom: "mt-1",
  left: "mr-1",
  right: "ml-1"
};

const colorSchemes = {
  black: "bg-black border-gray-900",
  white: "bg-white border-gray-100",
  gray: "bg-gray-500 border-gray-400",
  red: "bg-red-500 border-gray-400",
  orange: "bg-orange-500 border-orange-400",
  yellow: "bg-yellow-500 border-yellow-400",
  green: "bg-green-500 border-green-400",
  teal: "bg-teal-500 border-teal-400",
  blue: "bg-blue-500 border-blue-400",
  indigo: "bg-indigo-500 border-indigo-400",
  purple: "bg-purple-500 border-purple-400",
  pink: "bg-pink-500 border-pink-400"
};

const DropdownMenu = React.forwardRef(
  ({ placement, show, children, color }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className={classnames(
            "absolute left-0 z-50 py-2 text-base text-left list-none border border-solid rounded",
            colorSchemes[color],
            margins[placement],
            { hidden: !show, block: show }
          )}
        >
          {children}
        </div>
      </>
    );
  }
);

DropdownMenu.defaultProps = {
  show: false,
  placement: "top",
  color: "white"
};

DropdownMenu.propTypes = {
  // make the menu hidden or visible
  show: PropTypes.bool,
  // where the DropdownMenu should be rendered
  // NOTE: if there is no place for the dropdown menu to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
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

export default DropdownMenu;
