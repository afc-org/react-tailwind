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

class Tooltip extends React.Component {
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
      element.addEventListener("mouseenter", () => this.togglePopper(element));
      element.addEventListener("mouseleave", () => this.togglePopper(element));
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
              "border-0 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded",
              placementSchemes[placement]
            )}
            style={{ maxWidth: "276px" }}
          >
            <div
              className="py-1 px-2 text-center rounded text-white bg-black"
              style={{ maxWidth: "200px" }}
            >
              {children}
            </div>
          </div>
        </div>
      </>
    );
  }
}

Tooltip.defaultProps = {
  placement: "top",
  controlled: false,
  show: false
};

Tooltip.propTypes = {
  // target is the ID of the element we want the tooltip to be associated to
  target: PropTypes.string,
  // where the Tooltip should be rendered
  // NOTE: if there is no place for the tooltip to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the tooltip yourself
  // and decide when to show it, and when to close it
  // but you will still need to pass the target element
  show: PropTypes.bool,
  controlled: PropTypes.bool,
  children: PropTypes.node
};

export default Tooltip;
