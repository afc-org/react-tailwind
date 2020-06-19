"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var colorSchemes = {
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

var Alert = function Alert(_ref) {
  var controlled = _ref.controlled,
      color = _ref.color,
      icon = _ref.icon,
      children = _ref.children;

  var _React$useState = _react["default"].useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  var closeAlert = function closeAlert() {
    setShow(false);
  };

  if (!show) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])("px-5 py-3 border border-solid rounded relative mb-4", colorSchemes[color])
  }, icon !== "" ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-xl inline-block mr-5 align-middle"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: icon
  })) : null, icon ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "inline-block align-middle mr-8"
  }, children) : children, controlled ? null : /*#__PURE__*/_react["default"].createElement("button", {
    className: "absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 outline-none focus:outline-none opacity-50 px-5 py-3 hover:opacity-75 hover:text-black",
    onClick: closeAlert
  }, /*#__PURE__*/_react["default"].createElement("span", null, "\xD7")));
};

Alert.defaultProps = {
  controlled: false,
  color: "pink",
  icon: ""
};
Alert.propTypes = {
  // if set to false, then a closing button will be rendered so that the alert can be closed
  // if set to true, then the closing button will not be rendered
  controlled: _propTypes["default"].bool,
  // set the background, border and text color for the alert
  color: _propTypes["default"].oneOf(["black", "white", "gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"]),
  // adds a font icon to the left of the message
  // for example, if you have included into your project font-awesome free
  // you could send "fa fa-heart"
  icon: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
var _default = Alert;
exports["default"] = _default;