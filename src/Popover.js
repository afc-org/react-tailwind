import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { createPopper } from "@popperjs/core";

const placementSchemes = {
  top: "mb-3",
  bottom: "mt-3",
  right: "ml-3",
  left: "mr-3"
};

class Popover extends React.Component {
  constructor(props) {
    super(props);
    const { placement } = this.props;
    this.state = {
      show: false,
      placement: placement
    };
  }
  popperRef = React.createRef();
  popper;
  componentDidMount() {
    const { target, controlled, placement } = this.props;
    let element = document.querySelector(target);
    if (controlled) {
      this.popper = createPopper(element, this.popperRef.current, {
        placement: placement
      });
    } else {
      element.addEventListener("click", () => this.togglePopper(element));
    }
  }
  togglePopper = element => {
    const { show } = this.state;
    const { placement } = this.props;
    if (!show) {
      this.popper = createPopper(element, this.popperRef.current, {
        placement: placement
      });
    }
    this.setState({ show: !show, placement: this.popper.state.placement });
  };
  render() {
    const { show: stateShow, placement } = this.state;
    const { children, show: propsShow, controlled } = this.props;
    return (
      <>
        <div
          className={classnames({
            hidden: (controlled && !propsShow) || (!controlled && !stateShow)
          })}
          ref={this.popperRef}
        >
          <div
            className={classnames(
              "border-0 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded bg-white border border-solid border-gray-400",
              placementSchemes[placement]
            )}
            style={{ maxWidth: "276px" }}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
}

Popover.defaultProps = {
  placement: "top",
  controlled: false,
  show: false
};

Popover.propTypes = {
  // target is the ID of the element we want the popover to be associated to
  target: PropTypes.string,
  // where the Popover should be rendered
  // NOTE: if there is no place for the popover to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the popover yourself
  // and decide when to show it, and when to close it
  // but you will still need to pass the target element
  show: PropTypes.bool,
  controlled: PropTypes.bool,
  children: PropTypes.node
};

export default Popover;
