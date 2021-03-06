"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = FormControl;

var _clsx = _interopRequireDefault(require("clsx"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["tag", "shadow", "silent", "spacing"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function FormControl(_ref) {
  var tag = _ref.tag,
      shadow = _ref.shadow,
      silent = _ref.silent,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? "p-2" : _ref$spacing,
      rest = _objectWithoutProperties(_ref, _excluded);

  var Tag = tag || "input";
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Tag, _objectSpread(_objectSpread({}, rest), {}, {
    className: (0, _clsx.default)("form-control ".concat(spacing, " rounded"), {
      "neumorphism-shadow-sm": shadow === "sm" || shadow === undefined,
      "neumorphism-shadow": shadow === true,
      silent: silent
    }, rest.className)
  }));
}