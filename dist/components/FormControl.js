"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = FormControl;
exports.TextareaFormControl = TextareaFormControl;

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var attrShadow = {};

function getClassName(props) {
  var shadow = props.shadow,
      silent = props.silent;
  return (0, _clsx.default)("form-control p-2 rounded", {
    "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
    "neumorphism-shadow": shadow === true,
    silent: silent
  }, props.className);
}

function FormControl(props) {
  return /*#__PURE__*/React.createElement("input", _extends({}, Object.assign({}, props, attrShadow), {
    className: getClassName(props)
  }));
}

function TextareaFormControl(props) {
  return /*#__PURE__*/React.createElement("textarea", _extends({}, Object.assign({}, props, attrShadow), {
    className: getClassName(props)
  }));
}