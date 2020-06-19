"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TabContainer = function TabContainer(_ref) {
  var children = _ref.children,
      color = _ref.color,
      controlled = _ref.controlled,
      rest = _objectWithoutProperties(_ref, ["children", "color", "controlled"]);

  var _React$useState = _react["default"].useState(function () {
    var newChildren = [];
    children.forEach(function (child, index) {
      var grandChild = child.props.children;
      var targetTabContent = grandChild.props.target;

      var props = _objectSpread(_objectSpread({}, grandChild.props), {}, {
        color: color
      });

      if (!controlled) {
        props.onClick = function () {
          return toggleTabs(targetTabContent);
        };
      }

      newChildren.push( /*#__PURE__*/_react["default"].cloneElement(child, {
        children: /*#__PURE__*/_react["default"].cloneElement(grandChild, props),
        key: index
      }));
    });
    return newChildren;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      newChildren = _React$useState2[0],
      setNewChildren = _React$useState2[1];

  if (controlled) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", _extends({}, rest, {
      className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
    }), children));
  }

  var toggleTabs = function toggleTabs(tabContentId) {
    var tabContent = document.querySelector(tabContentId);
    var newChildren = [];
    children.forEach(function (child, index) {
      var grandChild = child.props.children;
      var targetTabContent = grandChild.props.target;
      document.querySelector(targetTabContent).classList.add("hidden");
      document.querySelector(targetTabContent).classList.remove("block");
      newChildren.push( /*#__PURE__*/_react["default"].cloneElement(child, {
        children: /*#__PURE__*/_react["default"].cloneElement(grandChild, {
          color: color,
          active: tabContentId === targetTabContent,
          onClick: function onClick() {
            return toggleTabs(targetTabContent);
          }
        }),
        key: index
      }));
    });
    setNewChildren(newChildren);
    tabContent.classList.add("block");
    tabContent.classList.remove("hidden");
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("ul", _extends({}, rest, {
    className: "flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
  }), newChildren));
};

TabContainer.defaultProps = {
  color: "pink",
  controlled: false
};
TabContainer.propTypes = {
  // if you want to controll the behavior yourself
  controlled: _propTypes["default"].bool,
  // set the background, border and text color for the tab-link
  color: _propTypes["default"].oneOf(["black", "white", "gray", "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"]),
  children: _propTypes["default"].node
};
var _default = TabContainer;
exports["default"] = _default;