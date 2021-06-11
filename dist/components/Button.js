"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = Button;
exports.AnchorButton = AnchorButton;

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var attrShadow = {
  primary: undefined,
  shadow: undefined,
  silent: undefined
};

function getClassName(props) {
  var primary = props.primary,
      shadow = props.shadow,
      silent = props.silent;
  return (0, _clsx.default)("btn px-3 py-2 rounded", {
    primary: primary,
    "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
    "neumorphism-shadow": shadow === true,
    silent: silent
  }, props.className);
}

function Button(props) {
  return /*#__PURE__*/React.createElement("button", _extends({}, Object.assign({}, props, attrShadow), {
    className: getClassName(props)
  }), props.children);
}

function AnchorButton(props) {
  return /*#__PURE__*/React.createElement("a", _extends({}, Object.assign({}, props, attrShadow), {
    className: getClassName(props)
  }), props.children);
}