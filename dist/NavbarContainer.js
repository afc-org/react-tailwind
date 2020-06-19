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

var sizeSchemes = {
  sm: "w-full px-4 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm",
  md: "w-full px-4 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md",
  lg: "w-full px-4 mx-auto xl:max-w-screen-xl lg:max-w-screen-lg",
  xl: "w-full px-4 mx-auto xl:max-w-screen-xl",
  fluid: "w-full px-4 mx-auto"
};

var NavbarContainer = function NavbarContainer(_ref) {
  var children = _ref.children,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ["children", "size"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
    className: (0, _classnames["default"])(sizeSchemes[size], "container px-4 mx-auto flex flex-wrap items-center justify-between")
  }), children));
};

NavbarContainer.defaultProps = {
  size: "fluid"
};
NavbarContainer.propTypes = {
  // set how large should the container be
  size: _propTypes["default"].oneOf(["sm", "md", "lg", "xl", "fluid"]),
  children: _propTypes["default"].node
};
var _default = NavbarContainer;
exports["default"] = _default;