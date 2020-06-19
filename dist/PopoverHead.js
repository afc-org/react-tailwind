"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PopoverHead = function PopoverHead(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-medium leading-tight py-2 px-3 mb-0 border-b border-solid border-gray-200 rounded-t text-base bg-gray-100"
  }, children));
};

PopoverHead.defaultProps = {};
PopoverHead.propTypes = {
  children: _propTypes["default"].node
};
var _default = PopoverHead;
exports["default"] = _default;