"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopoverBody = function PopoverBody(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "py-2 px-3 text-gray-900"
  }, children));
};

PopoverBody.defaultProps = {};
PopoverBody.propTypes = {
  children: _propTypes["default"].node
};
var _default = PopoverBody;
exports["default"] = _default;