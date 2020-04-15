import React from "react";
import PropTypes from "prop-types";

const ModalFooter = ({ children, ...rest }) => {
  return (
    <>
      <div
        {...rest}
        className="flex flex-wrap items-center justify-end p-3 border-t border-solid border-gray-300 rounded-b"
      >
        {children}
      </div>
    </>
  );
};

ModalFooter.defaultProps = {};

ModalFooter.propTypes = {
  children: PropTypes.node
};

export default ModalFooter;
