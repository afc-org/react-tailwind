"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames4 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var colorSchemes = {
  "default": {
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

var TabLink = /*#__PURE__*/function (_React$Component) {
  _inherits(TabLink, _React$Component);

  var _super = _createSuper(TabLink);

  function TabLink() {
    _classCallCheck(this, TabLink);

    return _super.apply(this, arguments);
  }

  _createClass(TabLink, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          target = _this$props.target,
          active = _this$props.active;

      if (active) {
        var tabContent = document.querySelector(target);
        tabContent.classList.add("block");
        tabContent.classList.remove("hidden");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          active = _this$props2.active,
          color = _this$props2.color,
          target = _this$props2.target,
          rest = _objectWithoutProperties(_this$props2, ["children", "disabled", "active", "color", "target"]);

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("a", _extends({}, rest, {
        className: (0, _classnames4["default"])(_defineProperty({}, colorSchemes["default"][color], !active && !disabled), _defineProperty({}, colorSchemes.active[color], active && !disabled), _defineProperty({}, colorSchemes.disabled[color], disabled), {
          "pointer-events-none": disabled
        }, "block py-2 px-4 no-underline rounded cursor-pointer shadow-lg")
      }), children));
    }
  }]);

  return TabLink;
}(_react["default"].Component);

TabLink.defaultProps = {
  disabled: false,
  active: false,
  color: "white"
};
TabLink.propTypes = {
  disabled: _propTypes["default"].bool,
  active: _propTypes["default"].bool,
  // set the background, border and text color for the tab-link
  color: _propTypes["default"].oneOf(["black", "white", "gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"]),
  // the tab-content that will be displayed by pressing this tab-link
  target: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node
};
var _default = TabLink;
exports["default"] = _default;