import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DropdownItem = ({
  divider,
  children,
  disabled,
  ...rest
}) => {
  if (divider) {
    return (
      <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
    );
  }
  let classes = classnames(
    "block w-full py-1 px-6 clear-both font-normal whitespace-no-wrap bg-transparent border-0 hover:opacity-75 cursor-pointer",
    { "text-gray-400 pointer-events-none": disabled }
  );
  return (
    <>
      <a {...rest} className={classes}>
        {children}
      </a>
    </>
  );
};

DropdownItem.defaultProps = {
  divider: false,
  disabled: false,
  children: null
};

DropdownItem.propTypes = {
  // this will make the component to be rendered as a divider line
  divider: PropTypes.bool,
  // this will make the component to not be clickable
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default DropdownItem;
