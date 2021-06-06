(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_theme_typography_Typography_js"],{

/***/ "./resources/coreui/src/reusable/DocsCallout.js":
/*!******************************************************!*\
  !*** ./resources/coreui/src/reusable/DocsCallout.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ "./resources/coreui/package.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var DocsCallout = function DocsCallout(props) {
  var href = props.href,
      name = props.name;
  var plural = name.slice(-1) === 's' ? true : false;

  var _href = "https://coreui.io/react/docs/".concat(_package_json__WEBPACK_IMPORTED_MODULE_3__.config.coreui_library_short_version, "/").concat(href);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCallout, {
    color: "info",
    className: "bg-white",
    children: ["A React ", name, " component ", plural ? 'have' : 'has', " been created as a native React.js version of Bootstrap ", name, ". ", name, " ", plural ? 'are' : 'is', " delivered with some new features, variants, and unique design that matches CoreUI Design System requirements.", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), "For more information please visit our official", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CLink, {
      href: _href,
      target: "_blank",
      children: "documentation of CoreUI Components Library for React.js"
    }), "."]
  });
};

DocsCallout.propTypes = {
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(DocsCallout));

/***/ }),

/***/ "./resources/coreui/src/reusable/DocsLink.js":
/*!***************************************************!*\
  !*** ./resources/coreui/src/reusable/DocsLink.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["href", "name", "text"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var DocsLink = function DocsLink(props) {
  var href = props.href,
      name = props.name,
      text = props.text,
      rest = _objectWithoutProperties(props, _excluded);

  var _href = name ? "https://coreui.io/react/docs/components/".concat(name) : href;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "float-end",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CLink, _objectSpread(_objectSpread({}, rest), {}, {
      href: _href,
      rel: "noreferrer noopener",
      target: "_blank",
      className: "card-header-action",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
        className: "text-medium-emphasis",
        children: text || 'docs'
      })
    }))
  });
};

DocsLink.propTypes = {
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(DocsLink));

/***/ }),

/***/ "./resources/coreui/src/reusable/Example.js":
/*!**************************************************!*\
  !*** ./resources/coreui/src/reusable/Example.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../package.json */ "./resources/coreui/package.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Example = function Example(props) {
  var children = props.children,
      href = props.href;

  var _href = "https://coreui.io/react/docs/".concat(_package_json__WEBPACK_IMPORTED_MODULE_4__.config.coreui_library_short_version, "/").concat(href);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "example",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CNav, {
      variant: "tabs",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CNavItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CNavLink, {
          href: "#",
          active: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
            name: "cil-media-play",
            className: "me-2"
          }), "Preview"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CNavItem, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CNavLink, {
          href: _href,
          target: "_blank",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
            name: "cil-code",
            className: "me-2"
          }), "Code"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTabContent, {
      className: "rounded-bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTabPane, {
        className: "p-3 preview",
        visible: true,
        children: children
      })
    })]
  });
};

Example.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().node),
  href: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.memo(Example));

/***/ }),

/***/ "./resources/coreui/src/reusable/index.js":
/*!************************************************!*\
  !*** ./resources/coreui/src/reusable/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsCallout": () => (/* reexport safe */ _DocsCallout__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "DocsLink": () => (/* reexport safe */ _DocsLink__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "Example": () => (/* reexport safe */ _Example__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _DocsCallout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocsCallout */ "./resources/coreui/src/reusable/DocsCallout.js");
/* harmony import */ var _DocsLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocsLink */ "./resources/coreui/src/reusable/DocsLink.js");
/* harmony import */ var _Example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Example */ "./resources/coreui/src/reusable/Example.js");





/***/ }),

/***/ "./resources/coreui/src/views/theme/typography/Typography.js":
/*!*******************************************************************!*\
  !*** ./resources/coreui/src/views/theme/typography/Typography.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reusable */ "./resources/coreui/src/reusable/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Typography = function Typography() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: ["Headings", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.DocsLink, {
          href: "https://coreui.io/docs/content/typography/"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
          children: "Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
          className: "table",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Heading"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("th", {
                children: "Example"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tbody", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                    className: "highlighter-rouge",
                    children: "<h1></h1>"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h1",
                  children: "h1. Bootstrap heading"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                    className: "highlighter-rouge",
                    children: "<h2></h2>"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h2",
                  children: "h2. Bootstrap heading"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                    className: "highlighter-rouge",
                    children: "<h3></h3>"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h3",
                  children: "h3. Bootstrap heading"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                    className: "highlighter-rouge",
                    children: "<h4></h4>"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h4",
                  children: "h4. Bootstrap heading"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                    className: "highlighter-rouge",
                    children: "<h5></h5>"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h5",
                  children: "h5. Bootstrap heading"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
                    className: "highlighter-rouge",
                    children: "<h6></h6>"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                  className: "h6",
                  children: "h6. Bootstrap heading"
                })
              })]
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Headings"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
            className: "highlighter-rouge",
            children: ".h1"
          }), " through", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
            className: "highlighter-rouge",
            children: ".h6"
          }), "classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "bd-example",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "h1",
            children: "h1. Bootstrap heading"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "h2",
            children: "h2. Bootstrap heading"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "h3",
            children: "h3. Bootstrap heading"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "h4",
            children: "h4. Bootstrap heading"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "h5",
            children: "h5. Bootstrap heading"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "h6",
            children: "h6. Bootstrap heading"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "card-header",
        children: "Display headings"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "card-body",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: ["Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "display heading"
          }), "\u2014a larger, slightly more opinionated heading style."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bd-example bd-example-type",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("table", {
            className: "table",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tbody", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "display-1",
                    children: "Display 1"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "display-2",
                    children: "Display 2"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "display-3",
                    children: "Display 3"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tr", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "display-4",
                    children: "Display 4"
                  })
                })
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Inline text elements"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: ["Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "display heading"
          }), "\u2014a larger, slightly more opinionated heading style."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "bd-example",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            children: ["You can use the mark tag to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("mark", {
              children: "highlight"
            }), " text."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("del", {
              children: "This line of text is meant to be treated as deleted text."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("s", {
              children: "This line of text is meant to be treated as no longer accurate."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ins", {
              children: "This line of text is meant to be treated as an addition to the document."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("u", {
              children: "This line of text will render as underlined"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
              children: "This line of text is meant to be treated as fine print."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
              children: "This line rendered as bold text."
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("em", {
              children: "This line rendered as italicized text."
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
        children: "Description list alignment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
          children: ["Align terms and descriptions horizontally by using our grid system\u2019s predefined classes (or semantic mixins). For longer terms, you can optionally add a", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
            className: "highlighter-rouge",
            children: ".text-truncate"
          }), " class to truncate the text with an ellipsis."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "bd-example",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dl", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
              className: "col-sm-3",
              children: "Description lists"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
              className: "col-sm-9",
              children: "A description list is perfect for defining terms."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
              className: "col-sm-3",
              children: "Euismod"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dd", {
              className: "col-sm-9",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                children: "Donec id elit non mi porta gravida at eget metus."
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
              className: "col-sm-3",
              children: "Malesuada porta"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
              className: "col-sm-9",
              children: "Etiam porta sem malesuada magna mollis euismod."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
              className: "col-sm-3 text-truncate",
              children: "Truncated term is truncated"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
              className: "col-sm-9",
              children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
              className: "col-sm-3",
              children: "Nesting"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
              className: "col-sm-9",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("dl", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dt", {
                  className: "col-sm-4",
                  children: "Nested definition list"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("dd", {
                  className: "col-sm-8",
                  children: "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."
                })]
              })
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./resources/coreui/package.json":
/*!***************************************!*\
  !*** ./resources/coreui/package.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@coreui/coreui-free-react-admin-template","description":"CoreUI Free React Admin Template","version":"4.0.0-alpha.0","config":{"coreui_library_short_version":"4.0"},"author":{"name":"CoreUI","url":"https://coreui.io","github":"https://github.com/coreui","twitter":"https://twitter.com/core_ui"},"contributors":[{"name":"CoreUI Team","url":"https://github.com/orgs/coreui/people"}],"homepage":".","copyright":"Copyright 2017-2021 creativeLabs Łukasz Holeczek","license":"MIT","private":true,"repository":{"type":"git","url":"git@github.com:coreui/coreui-free-react-admin-template.git"},"dependencies":{"@coreui/chartjs":"next","@coreui/coreui":"next","@coreui/icons":"^2.0.1","@coreui/icons-react":"^1.1.0","@coreui/react":"4.0.0-alpha.1","@coreui/react-chartjs":"next","@coreui/utils":"^1.3.1","@wojtekmaj/enzyme-adapter-react-17":"^0.6.1","chart.js":"^3.1.0","classnames":"^2.3.1","core-js":"^3.10.1","enzyme":"^3.11.0","prop-types":"^15.7.2","react":"^17.0.2","react-app-polyfill":"^2.0.0","react-dom":"^17.0.2","react-redux":"^7.2.3","react-router-dom":"^5.2.0","redux":"4.0.5","simplebar-react":"^2.3.3"},"devDependencies":{"auto-changelog":"~2.2.1","eslint":"^7.27.0","eslint-config-prettier":"^8.3.0","eslint-plugin-prettier":"^3.3.1","prettier":"2.2.1","react-scripts":"^4.0.3","sass":"^1.34.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","lint":"eslint \\"src/**/*.js\\"","test":"react-scripts test","test:cov":"npm test -- --coverage --watchAll=false","test:debug":"react-scripts --inspect-brk test --runInBand","eject":"react-scripts eject","changelog":"auto-changelog --starting-version 3.0.0 --commit-limit false --hide-credit"},"bugs":{"url":"https://github.com/coreui/coreui-free-react-admin-template/issues"},"jest":{"collectCoverageFrom":["src/**/*.{js,jsx}","!**/*index.js","!src/serviceWorker.js","!src/polyfill.js"]},"engines":{"node":">=10","npm":">=6"}}');

/***/ })

}]);