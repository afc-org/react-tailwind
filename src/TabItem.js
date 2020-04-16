import React from "react";
import PropTypes from "prop-types";

const TabItem = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <>
      <li {...rest} className="-mb-px mr-2 last:mr-0 flex-auto text-center">
        {children}
      </li>
    </>
  );
});

TabItem.defaultProps = {};

TabItem.propTypes = {
  children: PropTypes.node
};

export default TabItem;
