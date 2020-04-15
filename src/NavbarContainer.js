import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const sizeSchemes = {
  sm:
    "w-full px-4 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm",
  md:
    "w-full px-4 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md",
  lg: "w-full px-4 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg",
  xl: "w-full px-4 mx-auto xl:max-w-screen-xl",
  fluid: "w-full px-4 mx-auto"
};

const NavbarContainer = ({ children, size, ...rest }) => {
  return (
    <>
      <div
        {...rest}
        className={classnames(
          sizeSchemes[size],
          "container px-4 mx-auto flex flex-wrap items-center justify-between"
        )}
      >
        {children}
      </div>
    </>
  );
};

NavbarContainer.defaultProps = {
  size: "fluid"
};

NavbarContainer.propTypes = {
  // set how large should the container be
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "fluid"]),
  children: PropTypes.node
};

export default NavbarContainer;
