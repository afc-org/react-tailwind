import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const sizeSchemes = {
  sm: "sm:max-w-xs",
  lg: "md:max-w-screen-md",
  xl: "md:max-w-screen-md lg:max-w-screen-lg",
  default: "sm:max-w-screen-sm"
};

const ModalDialog = ({ children, size, ...rest }) => {
  return (
    <>
      <div
        {...rest}
        className={classnames(
          "transition-transform duration-300 ease-out relative w-auto m-2 pointer-events-none sm:my-8 sm:mx-auto",
          sizeSchemes[size]
        )}
      >
        {children}
      </div>
    </>
  );
};

ModalDialog.defaultProps = {
  size: "default"
};

ModalDialog.propTypes = {
  // size of the modal
  size: PropTypes.oneOf(["sm", "lg", "xl", "default"]),
  children: PropTypes.node
};

export default ModalDialog;
