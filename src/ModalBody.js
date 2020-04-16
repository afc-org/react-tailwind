import React from "react";
import PropTypes from "prop-types";

const ModalBody = ({ children, ...rest }) => {
  return (
    <>
      <div {...rest} className="relative flex-auto p-4">
        {children}
      </div>
    </>
  );
};

ModalBody.defaultProps = {};

ModalBody.propTypes = {
  children: PropTypes.node
};

export default ModalBody;
