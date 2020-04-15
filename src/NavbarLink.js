import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const NavbarLink = ({ children, active, disabled, ...rest }) => {
  return (
    <>
      <a
        {...rest}
        className={classnames(
          { "opacity-100": active },
          { "opacity-50 pointer-events-none": disabled },
          { "opacity-75": !active && !disabled },
          "hover:opacity-100 block py-2 px-2 bg-transparent no-underline cursor-pointer"
        )}
      >
        {children}
      </a>
    </>
  );
};

NavbarLink.defaultProps = {
  active: false,
  disabled: false
};

NavbarLink.propTypes = {
  // for active state
  active: PropTypes.bool,
  // for disabled state
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default NavbarLink;
