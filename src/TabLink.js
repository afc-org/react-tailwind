import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const colorSchemes = {
  default: {
    black: "bg-white text-black",
    white: "bg-black text-white",
    gray: "bg-white text-gray-600",
    red: "bg-white text-red-600",
    orange: "bg-white text-orange-600",
    yellow: "bg-white text-yellow-600",
    green: "bg-white text-green-600",
    teal: "bg-white text-teal-600",
    blue: "bg-white text-blue-600",
    indigo: "bg-white text-indigo-600",
    purple: "bg-white text-purple-600",
    pink: "bg-white text-pink-600"
  },
  active: {
    black: "bg-black text-white",
    white: "bg-white text-black",
    gray: "text-white bg-gray-600",
    red: "text-white bg-red-600",
    orange: "text-white bg-orange-600",
    yellow: "text-white bg-yellow-600",
    green: "text-white bg-green-600",
    teal: "text-white bg-teal-600",
    blue: "text-white bg-blue-600",
    indigo: "text-white bg-indigo-600",
    purple: "text-white bg-purple-600",
    pink: "text-white bg-pink-600"
  },
  disabled: {
    black: "bg-gray-700 text-gray-100",
    white: "bg-gray-200 text-gray-400",
    gray: "text-gray-100 bg-gray-400",
    red: "text-gray-100 bg-red-400",
    orange: "text-gray-100 bg-orange-400",
    yellow: "text-gray-100 bg-yellow-400",
    green: "text-gray-100 bg-green-400",
    teal: "text-gray-100 bg-teal-400",
    blue: "text-gray-100 bg-blue-400",
    indigo: "text-gray-100 bg-indigo-400",
    purple: "text-gray-100 bg-purple-400",
    pink: "text-gray-100 bg-pink-400"
  }
};

class TabLink extends React.Component {
  componentDidMount() {
    const { target, active } = this.props;
    if (active) {
      let tabContent = document.querySelector(target);
      tabContent.classList.add("block");
      tabContent.classList.remove("hidden");
    }
  }
  render() {
    const { children, disabled, active, color, target, ...rest } = this.props;
    return (
      <>
        <a
          {...rest}
          className={classnames(
            { [colorSchemes.default[color]]: !active && !disabled },
            { [colorSchemes.active[color]]: active && !disabled },
            { [colorSchemes.disabled[color]]: disabled },
            { "pointer-events-none": disabled },
            "block py-2 px-4 no-underline rounded cursor-pointer shadow-lg"
          )}
        >
          {children}
        </a>
      </>
    );
  }
}

TabLink.defaultProps = {
  disabled: false,
  active: false,
  color: "white"
};

TabLink.propTypes = {
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  // set the background, border and text color for the tab-link
  color: PropTypes.oneOf([
    "black",
    "white",
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink"
  ]),
  // the tab-content that will be displayed by pressing this tab-link
  target: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default TabLink;
