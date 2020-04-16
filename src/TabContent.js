import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TabContent = React.forwardRef(
  ({ children, id, active, ...rest }, ref) => {
    return (
      <>
        <div
          {...rest}
          id={id}
          className={classnames({ hidden: !active }, { block: active })}
        >
          {children}
        </div>
      </>
    );
  }
);

TabContent.defaultProps = {
  active: false
};

TabContent.propTypes = {
  show: PropTypes.bool,
  id: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default TabContent;
