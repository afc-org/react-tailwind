"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorSchemes = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  gray: "bg-gray-600 text-white",
  red: "bg-red-600 text-white",
  orange: "bg-orange-600 text-white",
  yellow: "bg-yellow-600 text-white",
  green: "bg-green-600 text-white",
  teal: "bg-teal-600 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  purple: "bg-purple-600 text-white",
  pink: "bg-pink-600 text-white"
};

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      color = _ref.color,
      menu = _ref.menu,
      rest = _objectWithoutProperties(_ref, ["children", "color", "menu"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("nav", _extends({}, rest, {
    className: (0, _classnames["default"])(colorSchemes[color], {
      "mb-3": !menu
    }, {
      rounded: menu
    }, "flex flex-wrap items-center justify-between px-4 py-2")
  }), children));
};

Navbar.defaultProps = {
  color: "pink",
  menu: false
};
Navbar.propTypes = {
  // if you do not want to use this component as a navbar,
  // but as a small menu someplace in your page,
  // you can add the menu prop on it
  menu: _propTypes["default"].bool,
  // set the background and text color
  color: _propTypes["default"].oneOf(["black", "white", "gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"]),
  children: _propTypes["default"].node
};
var _default = Navbar;
exports["default"] = _default;