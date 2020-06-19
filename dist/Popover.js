"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _core = require("@popperjs/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var placementSchemes = {
  top: "mb-3",
  bottom: "mt-3",
  right: "ml-3",
  left: "mr-3"
};

var Popover = /*#__PURE__*/function (_React$Component) {
  _inherits(Popover, _React$Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "popperRef", /*#__PURE__*/_react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "popper", void 0);

    _defineProperty(_assertThisInitialized(_this), "togglePopper", function (element) {
      var show = _this.state.show;
      var placement = _this.props.placement;

      if (!show) {
        _this.popper = (0, _core.createPopper)(element, _this.popperRef.current, {
          placement: placement
        });
      }

      _this.setState({
        show: !show,
        placement: _this.popper.state.placement
      });
    });

    var _placement = _this.props.placement;
    _this.state = {
      show: false,
      placement: _placement
    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          target = _this$props.target,
          controlled = _this$props.controlled,
          placement = _this$props.placement;
      var element = document.querySelector(target);

      if (controlled) {
        this.popper = (0, _core.createPopper)(element, this.popperRef.current, {
          placement: placement
        });
      } else {
        element.addEventListener("click", function () {
          return _this2.togglePopper(element);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          stateShow = _this$state.show,
          placement = _this$state.placement;
      var _this$props2 = this.props,
          children = _this$props2.children,
          propsShow = _this$props2.show,
          controlled = _this$props2.controlled;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          hidden: controlled && !propsShow || !controlled && !stateShow
        }),
        ref: this.popperRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("border-0 block z-50 font-normal leading-normal text-sm text-left no-underline break-words rounded bg-white border border-solid border-gray-400", placementSchemes[placement]),
        style: {
          maxWidth: "276px"
        }
      }, children)));
    }
  }]);

  return Popover;
}(_react["default"].Component);

Popover.defaultProps = {
  placement: "top",
  controlled: false,
  show: false
};
Popover.propTypes = {
  // target is the ID of the element we want the popover to be associated to
  target: _propTypes["default"].string,
  // where the Popover should be rendered
  // NOTE: if there is no place for the popover to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: _propTypes["default"].oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the popover yourself
  // and decide when to show it, and when to close it
  // but you will still need to pass the target element
  show: _propTypes["default"].bool,
  controlled: _propTypes["default"].bool,
  children: _propTypes["default"].node
};
var _default = Popover;
exports["default"] = _default;