import React from "react";
import PropTypes from "prop-types";

const NavbarBrand = ({ children, ...rest }) => {
  return (
    <>
      <a
        {...rest}
        className="text-xl inline-block mr-4 py-1 leading-relaxed whitespace-no-wrap cursor-pointer"
      >
        {children}
      </a>
    </>
  );
};

NavbarBrand.defaultProps = {};

NavbarBrand.propTypes = {
  children: PropTypes.node
};

export default NavbarBrand;
