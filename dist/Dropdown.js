"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@popperjs/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Dropdown = function Dropdown(_ref) {
  var controlled = _ref.controlled,
      placement = _ref.placement,
      children = _ref.children;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  if (controlled) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative"
    }, children);
  } else {
    var toggleDropdown = function toggleDropdown() {
      if (!show) {
        (0, _core.createPopper)(togglerRef.current, menuRef.current, {
          placement: placement
        });
      }

      setShow(!show);
    };

    var togglerRef = /*#__PURE__*/_react["default"].createRef();

    var menuRef = /*#__PURE__*/_react["default"].createRef();

    var toggler = /*#__PURE__*/_react["default"].cloneElement(children[0], {
      onClick: function onClick() {
        return toggleDropdown();
      },
      ref: togglerRef
    });

    var menu = /*#__PURE__*/_react["default"].cloneElement(children[1], {
      show: show,
      ref: menuRef
    });

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "relative"
    }, toggler, menu));
  }
};

Dropdown.defaultProps = {
  placement: "bottom",
  controlled: false
};
Dropdown.propTypes = {
  // where the Dropdown should be rendered
  // NOTE: if there is no place for the dropdown to be rendered
  //    on the choosen placement, PopperJS will rendered it
  //    where it has place
  placement: _propTypes["default"].oneOf(["top", "bottom", "left", "right"]),
  // if you want to controll the open/close of the DropdownMenu yourself
  controlled: _propTypes["default"].bool,
  // when using the uncontrolled version
  // you need to send exactly two children
  // - DropdownToggle
  // and
  // - DropdownMenu
  // if you fail to do so, an error will be thrown
  children: _propTypes["default"].node.isRequired
};
var _default = Dropdown;
exports["default"] = _default;