import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

const Dropdown = ({ controlled, placement, children }) => {
  const [show, setShow] = React.useState(false);
  if (controlled) {
    return <div className="relative">{children}</div>;
  } else {
    const toggleDropdown = () => {
      if (!show) {
        createPopper(togglerRef.current, menuRef.current, {
          placement: placement
        });
      }
      setShow(!show);
    };
    let togglerRef = React.createRef();
    let menuRef = React.createRef();
    let toggler = React.cloneElement(children[0], {
      onClick: () => toggleDropdown(),
      ref: togglerRef
    });
    let menu = React.cloneElement(children[1], { show: show, ref: menuRef });
    return (
      <>
        <div className="relative">
          {toggler}
          {menu}
        </div>
      </>
    );
  }
};

Dropdown.defaultProps = {
  placement: "bottom",
  controlled: false
};

Dropdown.propTypes = {
  // where the Dropdown should be rendered
  // NOTE: if there is no place for the dropdown to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the open/close of the DropdownMenu yourself
  controlled: PropTypes.bool,
  // when using the uncontrolled version
  // you need to send exactly two children
  // - DropdownToggle
  // and
  // - DropdownMenu
  // if you fail to do so, an error will be thrown
  children: PropTypes.node.isRequired
};

export default Dropdown;
