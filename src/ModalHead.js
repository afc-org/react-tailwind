import React from "react";
import PropTypes from "prop-types";

const ModalHead = ({ children, ...rest }) => {
  return (
    <>
      <div
        {...rest}
        className="flex items-start justify-between p-4 border-b border-solid border-gray-300 rounded-t"
      >
        {children}
      </div>
    </>
  );
};

ModalHead.defaultProps = {};

ModalHead.propTypes = {
  children: PropTypes.node
};

export default ModalHead;
