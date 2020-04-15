import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const expanSchemes = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden"
};

const NavbarToggler = ({ children, expand, ...rest }) => {
  return (
    <>
      <button
        {...rest}
        className={classnames(
          { [expanSchemes[expand]]: expand },
          "cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-gray-400 rounded bg-transparent block outline-none focus:outline-none text-gray-300 opacity-50"
        )}
      >
        {children}
      </button>
    </>
  );
};

NavbarToggler.defaultProps = {};

NavbarToggler.propTypes = {
  // from which breakpoint should toggler be hidden
  expand: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  children: PropTypes.node
};

export default NavbarToggler;
