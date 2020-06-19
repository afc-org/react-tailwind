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

var NavbarLink = function NavbarLink(_ref) {
  var children = _ref.children,
      active = _ref.active,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["children", "active", "disabled"]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
    className: (0, _classnames["default"])({
      "opacity-100": active
    }, {
      "opacity-50 pointer-events-none": disabled
    }, {
      "opacity-75": !active && !disabled
    }, "hover:opacity-100 block py-2 px-2 bg-transparent no-underline cursor-pointer")
  }), children));
};

NavbarLink.defaultProps = {
  active: false,
  disabled: false
};
NavbarLink.propTypes = {
  // for active state
  active: _propTypes["default"].bool,
  // for disabled state
  disabled: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
var _default = NavbarLink;
exports["default"] = _default;