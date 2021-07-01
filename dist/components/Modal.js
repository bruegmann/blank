"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = Modal;

var _reactBootstrapIcons = require("react-bootstrap-icons");

var _clsx = _interopRequireDefault(require("clsx"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Modal(props) {
  var children = props.children,
      toggle = props.toggle,
      title = props.title,
      classNames = props.classNames;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      fadeOut = _useState4[0],
      setFadeOut = _useState4[1];

  (0, _react.useEffect)(function () {
    // If change `show` from false to true, run animation first
    if (show === true && props.show === false) {
      setFadeOut(true);
      setTimeout(function () {
        setFadeOut(false);
        setShow(props.show);
      }, 200);
    } else {
      setShow(props.show);
    }
  }, [props.show]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _clsx.default)("modal", {
      show: show,
      fadeOut: fadeOut
    }),
    role: "dialog",
    tabIndex: -1,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "modal-backdrop",
      onClick: toggle
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal-content",
      role: "document",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-header d-flex justify-content-between mt-3 mb-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
          className: "m-0",
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "btn-close",
          onClick: toggle,
          "aria-label": "Close",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBootstrapIcons.X, {})
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _clsx.default)("modal-body body-bg-stronger p-3 rounded", classNames === null || classNames === void 0 ? void 0 : classNames.modalBody),
        children: children
      })]
    })]
  });
}