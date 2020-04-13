import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const colorSchemes = {
  black: "bg-black text-gray-200 border-gray-900",
  white: "bg-white text-gray-600 border-gray-100",
  gray: "bg-gray-200 text-gray-800 border-gray-300",
  red: "bg-red-200 text-red-800 border-red-300",
  orange: "bg-orange-200 text-orange-800 border-orange-300",
  yellow: "bg-yellow-200 text-yellow-800 border-yellow-300",
  green: "bg-green-200 text-green-800 border-green-300",
  teal: "bg-teal-200 text-teal-800 border-teal-300",
  blue: "bg-blue-200 text-blue-800 border-blue-300",
  indigo: "bg-indigo-200 text-indigo-800 border-indigo-300",
  purple: "bg-purple-200 text-purple-800 border-purple-300",
  pink: "bg-pink-200 text-pink-800 border-pink-300"
};

const Alert = ({ controlled, color, icon, children }) => {
  const [show, setShow] = React.useState(true);
  const closeAlert = () => {
    setShow(false);
  };
  if (!show) {
    return null;
  }
  return (
    <div
      className={classnames(
        "px-5 py-3 border border-solid rounded relative mb-4",
        colorSchemes[color]
      )}
    >
      {icon !== "" ? (
        <span className="text-xl inline-block mr-5 align-middle">
          <i className={icon}></i>
        </span>
      ) : null}
      {icon ? (
        <span className="inline-block align-middle mr-8">{children}</span>
      ) : (
        children
      )}
      {controlled ? null : (
        <button
          className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 outline-none focus:outline-none opacity-50 px-5 py-3 hover:opacity-75 hover:text-black"
          onClick={closeAlert}
        >
          <span>×</span>
        </button>
      )}
    </div>
  );
};

Alert.defaultProps = {
  controlled: false,
  color: "pink",
  icon: ""
};

Alert.propTypes = {
  // if set to false, then a closing button will be rendered so that the alert can be closed
  // if set to true, then the closing button will not be rendered
  controlled: PropTypes.bool,
  // set the background, border and text color for the alert
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
  // adds a font icon to the left of the message
  // for example, if you have included into your project font-awesome free
  // you could send "fa fa-heart"
  icon: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Alert;
