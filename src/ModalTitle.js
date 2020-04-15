import React from "react";
import PropTypes from "prop-types";

const ModalTitle = ({ children, ...rest }) => {
  return (
    <>
      <h5 {...rest} className="leading-normal">
        {children}
      </h5>
    </>
  );
};

ModalTitle.defaultProps = {};

ModalTitle.propTypes = {
  children: PropTypes.node
};

export default ModalTitle;
