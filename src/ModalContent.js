import React from "react";
import PropTypes from "prop-types";

const ModalContent = ({ children, ...rest }) => {
  return (
    <>
      <div
        {...rest}
        className="relative flex flex-col w-full pointer-events-auto bg-white border border-solid border-gray-600 rounded outline-none focus:outline-none"
      >
        {children}
      </div>
    </>
  );
};

ModalContent.defaultProps = {};

ModalContent.propTypes = {
  children: PropTypes.node
};

export default ModalContent;
