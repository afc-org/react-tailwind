import React from "react";
import PropTypes from "prop-types";

const PopoverHead = ({ children }) => {
  return (
    <>
      <h3 className="font-medium leading-tight py-2 px-3 mb-0 border-b border-solid border-gray-200 rounded-t text-base bg-gray-100">
        {children}
      </h3>
    </>
  );
};

PopoverHead.defaultProps = {};

PopoverHead.propTypes = {
  children: PropTypes.node
};

export default PopoverHead;
