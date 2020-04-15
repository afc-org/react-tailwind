import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class Modal extends React.Component {
  render() {
    const { children, show, ...rest } = this.props;
    return (
      <>
        <div
          className={classnames(
            { hidden: !show },
            { "opacity-100": show },
            "opacity-0 z-50 fixed top-0 left-0 w-full h-full overflow-hidden outline-none focus:outline-none transition-opacity duration-75 ease-linear"
          )}
          {...rest}
        >
          {children}
        </div>
        <div
          className={classnames(
            { hidden: !show },
            "opacity-50 fixed inset-0 z-40 bg-black"
          )}
        ></div>
      </>
    );
  }
}

Modal.defaultProps = {
  show: false
};

Modal.propTypes = {
  // send true to it to open the modal
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;
