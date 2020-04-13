import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const DropdownItem = ({
  divider,
  children,
  light,
  dark,
  disabled,
  ...rest
}) => {
  if (divider) {
    return (
      <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
    );
  }
  let classes = classnames(
    "block w-full py-1 px-6 clear-both font-normal whitespace-no-wrap bg-transparent border-0",
    { "text-gray-800 hover:text-gray-900": light && !disabled },
    { "text-white hover:text-gray-100": dark && !light && !disabled },
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
  light: true,
  dark: false,
  children: null
};

DropdownItem.propTypes = {
  // this will make the component to be rendered as a divider line
  divider: PropTypes.bool,
  // this will make the component to not be clickable
  disabled: PropTypes.bool,
  // this prop is used to determine whether the item should be rendered for
  // a light background or not - i.e. it should have darker font colors
  light: PropTypes.bool,
  // this prop is used to determine whether the item should be rendered for
  // a darker background or not - i.e. it should have lighter font colors
  dark: PropTypes.bool,
  children: PropTypes.node
};

export default DropdownItem;
