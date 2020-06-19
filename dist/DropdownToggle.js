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
  black: "bg-black text-white active:bg-gray-900",
  white: "bg-white text-black active:bg-gray-100",
  gray: "bg-gray-500 text-white active:bg-gray-600",
  red: "bg-red-500 text-white active:bg-red-600",
  orange: "bg-orange-500 text-white active:bg-orange-600",
  yellow: "bg-yellow-500 text-white active:bg-yellow-600",
  green: "bg-green-500 text-white active:bg-green-600",
  teal: "bg-teal-500 text-white active:bg-teal-600",
  blue: "bg-blue-500 text-white active:bg-blue-600",
  indigo: "bg-indigo-500 text-white active:bg-indigo-600",
  purple: "bg-purple-500 text-white active:bg-purple-600",
  pink: "bg-pink-500 text-white active:bg-pink-600"
};

var DropdownToggle = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["children", "color"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", _extends({}, rest, {
    ref: ref,
    className: (0, _classnames["default"])("rounded font-normal outline-none focus:outline-none align-middle text-base px-3 py-2 leading-tight", colorSchemes[color])
  }), children));
});

DropdownToggle.defaultProps = {
  color: "pink"
};
DropdownToggle.propTypes = {
  // set the background
  color: _propTypes["default"].oneOf(["black", "white", "gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"])
};
var _default = DropdownToggle;
exports["default"] = _default;