"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = Table;

var _clsx = _interopRequireDefault(require("clsx"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("table", {
    className: (0, _clsx.default)("table rounded overflow-hidden neumorphism-shadow-sm", className),
    style: {
      backgroundColor: "var(--body-bg-stronger)"
    },
    children: children
  });
}