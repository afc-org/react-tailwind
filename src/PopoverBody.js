import React from "react";
import PropTypes from "prop-types";

const PopoverBody = ({ children }) => {
  return (
    <>
      <div className="py-2 px-3 text-gray-900">{children}</div>
    </>
  );
};

PopoverBody.defaultProps = {};

PopoverBody.propTypes = {
  children: PropTypes.node
};

export default PopoverBody;
