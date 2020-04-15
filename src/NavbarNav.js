import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const expanSchemes = {
  sm: "sm:flex-row",
  md: "md:flex-row",
  lg: "lg:flex-row",
  xl: "xl:flex-row"
};

const NavbarNav = ({ children, expand, ...rest }) => {
  return (
    <>
      <ul
        {...rest}
        className={classnames(
          { [expanSchemes[expand]]: expand },
          "flex flex-col list-none pl-0 mb-0"
        )}
      >
        {children}
      </ul>
    </>
  );
};

NavbarNav.defaultProps = {};

NavbarNav.propTypes = {
  // from which breakpoint should the items be set in row (inline)
  expand: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  children: PropTypes.node
};

export default NavbarNav;
