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

var DropdownItem = function DropdownItem(_ref) {
  var divider = _ref.divider,
      children = _ref.children,
      disabled = _ref.disabled,
      rest = _objectWithoutProperties(_ref, ["divider", "children", "disabled"]);

  if (divider) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25"
    });
  }

  var classes = (0, _classnames["default"])("block w-full py-1 px-6 clear-both font-normal whitespace-no-wrap bg-transparent border-0 hover:opacity-75 cursor-pointer", {
    "text-gray-400 pointer-events-none": disabled
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
    className: classes
  }), children));
};

DropdownItem.defaultProps = {
  divider: false,
  disabled: false,
  children: null
};
DropdownItem.propTypes = {
  // this will make the component to be rendered as a divider line
  divider: _propTypes["default"].bool,
  // this will make the component to not be clickable
  disabled: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
var _default = DropdownItem;
exports["default"] = _default;