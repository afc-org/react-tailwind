"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var expanSchemes = {
  sm: "sm:flex sm:w-auto",
  md: "md:flex md:w-auto",
  lg: "lg:flex lg:w-auto",
  xl: "xl:flex xl:w-auto"
};

var NavbarCollapse = /*#__PURE__*/function (_React$Component) {
  _inherits(NavbarCollapse, _React$Component);

  var _super = _createSuper(NavbarCollapse);

  function NavbarCollapse(props) {
    var _this;

    _classCallCheck(this, NavbarCollapse);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleCollapse", function () {
      var show = _this.state.show;

      _this.setState({
        show: !show
      });
    });

    _this.state = {
      show: _this.props.show
    };
    return _this;
  }

  _createClass(NavbarCollapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          toggler = _this$props.toggler,
          controlled = _this$props.controlled;
      var element = document.querySelector(toggler);

      if (!controlled) {
        element.addEventListener("click", this.toggleCollapse);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var stateShow = this.state.show;

      var _this$props2 = this.props,
          children = _this$props2.children,
          expand = _this$props2.expand,
          propsShow = _this$props2.show,
          controlled = _this$props2.controlled,
          rest = _objectWithoutProperties(_this$props2, ["children", "expand", "show", "controlled"]);

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
        className: (0, _classnames2["default"])(_defineProperty({}, expanSchemes[expand], expand), {
          hidden: controlled && !propsShow || !controlled && !stateShow
        }, "flex-grow items-center w-full")
      }), children));
    }
  }]);

  return NavbarCollapse;
}(_react["default"].Component);

NavbarCollapse.defaultProps = {
  show: false,
  controlled: false
};
NavbarCollapse.propTypes = {
  // if you want to controll yourself the opening and closing of the collapse
  show: _propTypes["default"].bool,
  controlled: _propTypes["default"].bool,
  // for controlled version,
  // you need to pass this so that the component can be opnened and closed
  // it has to come like "#toggler-id", where toggler-id can be any string
  toggler: _propTypes["default"].string,
  // on which breakpoint should collapse be hidden
  expand: _propTypes["default"].oneOf(["sm", "md", "lg", "xl"]),
  children: _propTypes["default"].node
};
var _default = NavbarCollapse;
exports["default"] = _default;