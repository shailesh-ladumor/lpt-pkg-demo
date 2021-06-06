(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_components_forms_layout_Layout_js"],{

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

/***/ "./resources/coreui/src/views/components/forms/layout/Layout.js":
/*!**********************************************************************!*\
  !*** ./resources/coreui/src/views/components/forms/layout/Layout.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _reusable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../reusable */ "./resources/coreui/src/reusable/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Layout = function Layout() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Form grid"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-medium-emphasis small",
            children: "More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#form-grid",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "First name",
                  "aria-label": "First name"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "Last name",
                  "aria-label": "Last name"
                })
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Gutters"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["By adding ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "https://coreui.io/docs/layout/gutters/",
              children: "gutter modifier classes"
            }), ", you can have control over the gutter width in as well the inline as block direction."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#gutters",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
              className: "g-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "First name",
                  "aria-label": "First name"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "Last name",
                  "aria-label": "Last name"
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-medium-emphasis small",
            children: "More complex layouts can also be created with the grid system."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#gutters",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CForm, {
              className: "row g-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                md: "6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputEmail4",
                  children: "Email"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  type: "email",
                  id: "inputEmail4"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                md: "6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputPassword4",
                  children: "Password"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  type: "password",
                  id: "inputPassword4"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputAddress",
                  children: "Address"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  id: "inputAddress",
                  placeholder: "1234 Main St"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputAddress2",
                  children: "Address 2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  id: "inputAddress2",
                  placeholder: "Apartment, studio, or floor"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                md: "6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputCity",
                  children: "City"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  id: "inputCity"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                md: "4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputState",
                  children: "State"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormSelect, {
                  id: "inputState",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    children: "Choose..."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    children: "..."
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                md: "2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputZip",
                  children: "Zip"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  id: "inputZip"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                  type: "checkbox",
                  id: "gridCheck",
                  label: "Check me out"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                  type: "submit",
                  children: "Sign in"
                })
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Horizontal form"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Create horizontal forms with the grid by adding the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".row"
            }), " class to form groups and using the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".col-*-*"
            }), " classes to specify the width of your labels and controls. Be sure to add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".col-form-label"
            }), " to your", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CFormLabel>"
            }), "s as well so they're vertically centered with their associated form controls."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "padding-top"
            }), " on our stacked radio inputs label to better align the text baseline."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#horizontal-form",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CForm, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputEmail3",
                  className: "col-sm-2 col-form-label",
                  children: "Email"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  sm: "10",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                    type: "email",
                    id: "inputEmail3"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  htmlFor: "inputPassword3",
                  className: "col-sm-2 col-form-label",
                  children: "Password"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  sm: "10",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                    type: "password",
                    id: "inputPassword3"
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("fieldset", {
                className: "row mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("legend", {
                  className: "col-form-label col-sm-2 pt-0",
                  children: "Radios"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  sm: "10",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                    type: "radio",
                    name: "gridRadios",
                    id: "gridRadios1",
                    value: "option1",
                    label: "First radio",
                    defaultChecked: true
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                    type: "radio",
                    name: "gridRadios",
                    id: "gridRadios2",
                    value: "option2",
                    label: "Second radio"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                    type: "radio",
                    name: "gridRadios",
                    id: "gridRadios3",
                    value: "option3",
                    label: "Third disabled radio",
                    disabled: true
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "mb-3",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "col-sm-10 offset-sm-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                    type: "checkbox",
                    id: "gridCheck1",
                    label: "Example checkbox"
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                type: "submit",
                children: "Sign in"
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Horizontal form label sizing"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Be sure to use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".col-form-label-sm"
            }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".col-form-label-lg"
            }), " to your ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CFormLabel>"
            }), "s or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<legend>"
            }), "s to correctly follow the size of ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".form-control-lg"
            }), " and ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".form-control-sm"
            }), "."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#horizontal-form-label-sizing",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
              className: "mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                htmlFor: "colFormLabelSm",
                className: "col-sm-2 col-form-label col-form-label-sm",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "10",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  type: "email",
                  className: "form-control form-control-sm",
                  id: "colFormLabelSm",
                  placeholder: "col-form-label-sm"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
              className: "mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                htmlFor: "colFormLabel",
                className: "col-sm-2 col-form-label",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "10",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  type: "email",
                  id: "colFormLabel",
                  placeholder: "col-form-label"
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                htmlFor: "colFormLabelLg",
                className: "col-sm-2 col-form-label col-form-label-lg",
                children: "Email"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "10",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  type: "email",
                  className: "form-control form-control-lg",
                  id: "colFormLabelLg",
                  placeholder: "col-form-label-lg"
                })
              })]
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Column sizing"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["As shown in the previous examples, our grid system allows you to place any number of", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CCol>"
            }), "s within a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CRow>"
            }), ". They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CCol>"
            }), "s equally split the rest, with specific column classes like", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CCol sm=\"7\">"
            }), "."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#column-sizing",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
              className: "g-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "7",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "City",
                  "aria-label": "City"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "State",
                  "aria-label": "State"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  placeholder: "Zip",
                  "aria-label": "Zip"
                })
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Auto-sizing"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["The example below uses a flexbox utility to vertically center the contents and changes", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CCol>"
            }), " to ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CCol xs=\"auto\">"
            }), " so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#auto-sizing",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CForm, {
              className: "row gy-2 gx-3 align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "autoSizingInput",
                  children: "Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  id: "autoSizingInput",
                  placeholder: "Jane Doe"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "autoSizingInputGroup",
                  children: "Username"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroup, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupText, {
                    children: "@"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                    id: "autoSizingInputGroup",
                    placeholder: "Username"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "autoSizingSelect",
                  children: "Preference"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormSelect, {
                  id: "autoSizingSelect",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    children: "Choose..."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "1",
                    children: "One"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "2",
                    children: "Two"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "3",
                    children: "Three"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                  type: "checkbox",
                  id: "autoSizingCheck",
                  label: "Remember me"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                  type: "submit",
                  children: "Submit"
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
            className: "text-medium-emphasis small",
            children: "You can then remix that once again with size-specific column classes."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#auto-sizing",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CForm, {
              className: "row gx-3 gy-2 align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "specificSizeInputName",
                  children: "Name"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                  id: "specificSizeInputName",
                  placeholder: "Jane Doe"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "specificSizeInputGroupUsername",
                  children: "Username"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroup, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupText, {
                    children: "@"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                    id: "specificSizeInputGroupUsername",
                    placeholder: "Username"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                sm: "3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "specificSizeSelect",
                  children: "Preference"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormSelect, {
                  id: "specificSizeSelect",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    children: "Choose..."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "1",
                    children: "One"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "2",
                    children: "Two"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "3",
                    children: "Three"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                  type: "checkbox",
                  id: "autoSizingCheck2",
                  label: "Remember me"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                  type: "submit",
                  children: "Submit"
                })
              })]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("strong", {
            children: "Layout"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("small", {
            children: "Inline forms"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Use the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CCol xs=\"auto\">"
            }), " class to create horizontal layouts. By adding", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: "https://coreui.io/docs/layout/gutters/",
              children: "gutter modifier classes"
            }), ", we will have gutters in horizontal and vertical directions. The", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: ".align-items-center"
            }), " aligns the form elements to the middle, making the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code", {
              children: "<CFormCheck>"
            }), " align properly."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_reusable__WEBPACK_IMPORTED_MODULE_2__.Example, {
            href: "forms/layout#inline-forms",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CForm, {
              className: "row row-cols-lg-auto g-3 align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "inlineFormInputGroupUsername",
                  children: "Username"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroup, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupText, {
                    children: "@"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormControl, {
                    id: "inlineFormInputGroupUsername",
                    placeholder: "Username"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormLabel, {
                  className: "visually-hidden",
                  htmlFor: "inlineFormSelectPref",
                  children: "Preference"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormSelect, {
                  id: "inlineFormSelectPref",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    children: "Choose..."
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "1",
                    children: "One"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "2",
                    children: "Two"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "3",
                    children: "Three"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormCheck, {
                  type: "checkbox",
                  id: "inlineFormCheck",
                  label: "Remember me"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                xs: "12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                  type: "submit",
                  children: "Submit"
                })
              })]
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

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