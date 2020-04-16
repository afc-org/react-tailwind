import React from "react";
import PropTypes from "prop-types";

const NavbarItem = ({ children, ...rest }) => {
  return (
    <>
      <li {...rest}>{children}</li>
    </>
  );
};

NavbarItem.defaultProps = {};

NavbarItem.propTypes = {
  children: PropTypes.node
};

export default NavbarItem;
