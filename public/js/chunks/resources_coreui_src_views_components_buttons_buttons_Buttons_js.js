(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_components_buttons_buttons_Buttons_js"],{

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

/***/ "./resources/coreui/src/views/components/buttons/buttons/Buttons.js":
/*!**************************************************************************!*\
  !*** ./resources/coreui/src/views/components/buttons/buttons/Buttons.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _reusable_DocsCallout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../reusable/DocsCallout */ "./resources/coreui/src/reusable/DocsCallout.js");
/* harmony import */ var _reusable_Example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../reusable/Example */ "./resources/coreui/src/reusable/Example.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var Buttons = function Buttons() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_DocsCallout__WEBPACK_IMPORTED_MODULE_3__.default, {
        name: "Button",
        href: "components/buttons"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-medium-emphasis small",
            children: "CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons",
            children: ['normal', 'active', 'disabled'].map(function (state, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "align-items-center mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: 12,
                  xl: 2,
                  className: "mb-3 mb-xl-0",
                  children: state.charAt(0).toUpperCase() + state.slice(1)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: true,
                  children: [['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(function (color, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                      color: color,
                      active: state === 'active',
                      disabled: state === 'disabled',
                      children: color.charAt(0).toUpperCase() + color.slice(1)
                    }, index);
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                    color: "link",
                    children: "Link"
                  })]
                })]
              }, index);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "with icons"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["You can combine button with our ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("a", {
              href: "https://icons.coreui.io/",
              children: "CoreUI Icons"
            }), "."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons",
            children: ['normal', 'active', 'disabled'].map(function (state, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "align-items-center mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: 12,
                  xl: 2,
                  className: "mb-3 mb-xl-0",
                  children: state.charAt(0).toUpperCase() + state.slice(1)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: true,
                  children: [['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(function (color, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                      color: color,
                      active: state === 'active',
                      disabled: state === 'disabled',
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
                        name: "cil-bell",
                        className: "me-2"
                      }), color.charAt(0).toUpperCase() + color.slice(1)]
                    }, index);
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                    color: "link",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
                      name: "cil-bell",
                      className: "me-2"
                    }), "Link"]
                  })]
                })]
              }, index);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Button components"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["The ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<CButton>"
            }), " component are designed for", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<button>"
            }), " , ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<a>"
            }), " or ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<input>"
            }), ' ', "elements (though some browsers may apply a slightly different rendering)."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["If you're using ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<CButton>"
            }), " component as ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<a>"
            }), ' ', "elements that are used to trigger functionality ex. collapsing content, these links should be given a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "role=\"button\""
            }), " to adequately communicate their meaning to assistive technologies such as screen readers."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#button-components",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              component: "a",
              color: "primary",
              href: "#",
              role: "button",
              children: "Link"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              type: "submit",
              color: "primary",
              children: "Button"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              component: "input",
              type: "button",
              color: "primary",
              value: "Input"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              component: "input",
              type: "submit",
              color: "primary",
              value: "Submit"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              component: "input",
              type: "reset",
              color: "primary",
              value: "Reset"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "outline"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["If you need a button, but without the strong background colors. Set", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "variant=\"outline\""
            }), " prop to remove all background colors."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#outline-buttons",
            children: ['normal', 'active', 'disabled'].map(function (state, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "align-items-center mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: 12,
                  xl: 2,
                  className: "mb-3 mb-xl-0",
                  children: state.charAt(0).toUpperCase() + state.slice(1)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: true,
                  children: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(function (color, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                      color: color,
                      variant: "outline",
                      active: state === 'active',
                      disabled: state === 'disabled',
                      children: color.charAt(0).toUpperCase() + color.slice(1)
                    }, index);
                  })
                })]
              }, index);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "ghost"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["If you need a ghost variant of button, set ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "variant=\"ghost\""
            }), " prop to remove all background colors."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#ghost-buttons",
            children: ['normal', 'active', 'disabled'].map(function (state, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
                className: "align-items-center mb-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: 12,
                  xl: 2,
                  className: "mb-3 mb-xl-0",
                  children: state.charAt(0).toUpperCase() + state.slice(1)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
                  xs: true,
                  children: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(function (color, index) {
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                      color: color,
                      variant: "ghost",
                      active: state === 'active',
                      disabled: state === 'disabled',
                      children: color.charAt(0).toUpperCase() + color.slice(1)
                    }, index);
                  })
                })]
              }, index);
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Sizes"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Larger or smaller buttons? Add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "size=\"lg\""
            }), " or", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "size=\"sm\""
            }), " for additional sizes."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#sizes",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "primary",
              size: "lg",
              children: "Large button"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "secondary",
              size: "lg",
              children: "Large button"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#sizes",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "primary",
              size: "sm",
              children: "Small button"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "secondary",
              size: "sm",
              children: "Small button"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Pill"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#pill-buttons",
            children: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(function (color, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: color,
                shape: "rounded-pill",
                children: color.charAt(0).toUpperCase() + color.slice(1)
              }, index);
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Square"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#square",
            children: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(function (color, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: color,
                shape: "rounded-0",
                children: color.charAt(0).toUpperCase() + color.slice(1)
              }, index);
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Disabled state"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Add the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "disabled"
            }), " boolean prop to any ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<CButton>"
            }), ' ', "component to make buttons look inactive. Disabled button has", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "pointer-events: none"
            }), " applied to, disabling hover and active states from triggering."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#disabled-state",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "primary",
              size: "lg",
              disabled: true,
              children: "Primary button"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "secondary",
              size: "lg",
              disabled: true,
              children: "Button"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Disabled buttons using the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<a>"
            }), " component act a little different:"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "<a>"
            }), "s don'tsupport the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "disabled"
            }), " attribute, so CoreUI has to add ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: ".disabled"
            }), " className to make buttons look inactive. CoreUI also has to add to the disabled button component", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "aria-disabled=\"true\""
            }), " attribute to show the state of the component to assistive technologies."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#disabled-state",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              component: "a",
              href: "#",
              color: "primary",
              size: "lg",
              disabled: true,
              children: "Primary link"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              component: "a",
              href: "#",
              color: "secondary",
              size: "lg",
              disabled: true,
              children: "Link"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      xs: 12,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardHeader, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("strong", {
            children: "React Button"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
            children: "Block buttons"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-medium-emphasis small",
            children: "Create buttons that span the full width of a parent\u2014by using utilities."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#block-buttons",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-grid gap-2",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["Here we create a responsive variation, starting with vertically stacked buttons until the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "md"
            }), " breakpoint, where ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: ".d-md-block"
            }), " replaces the", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: ".d-grid"
            }), " class, thus nullifying the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: "gap-2"
            }), " utility. Resize your browser to see them change."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#block-buttons",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-grid gap-2 d-md-block",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
            className: "text-medium-emphasis small",
            children: ["You can adjust the width of your block buttons with grid column width classes. For example, for a half-width \"block button\", use ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: ".col-6"
            }), ". Center it horizontally with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("code", {
              children: ".mx-auto"
            }), ", too."]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#block-buttons",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-grid gap-2 col-6 mx-auto",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-medium-emphasis small",
            children: "Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_reusable_Example__WEBPACK_IMPORTED_MODULE_4__.default, {
            href: "components/buttons#block-buttons",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "d-grid gap-2 d-md-flex justify-content-md-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                className: "me-md-2",
                children: "Button"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
                color: "primary",
                children: "Button"
              })]
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);

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