(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_components_widgets_WidgetsDropdown_js"],{

/***/ "./resources/coreui/src/views/components/widgets/WidgetsDropdown.js":
/*!**************************************************************************!*\
  !*** ./resources/coreui/src/views/components/widgets/WidgetsDropdown.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/coreui-utils.common.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var WidgetsDropdown = function WidgetsDropdown() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        className: "mb-4",
        color: "primary",
        value: "9.823",
        title: "Members online",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
              name: "cil-options",
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
              pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_5__.getStyle)('--cui-primary'),
              data: [65, 59, 84, 84, 51, 55, 40]
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  display: false
                }
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false
                },
                ticks: {
                  display: false
                }
              }
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        className: "mb-4",
        color: "info",
        value: "9.823",
        title: "Members online",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
              name: "cil-options",
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
              pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_5__.getStyle)('--cui-info'),
              data: [1, 18, 9, 17, 34, 22, 11]
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  display: false
                }
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false
                },
                ticks: {
                  display: false
                }
              }
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        className: "mb-4",
        color: "warning",
        value: "9.823",
        title: "Members online",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
              name: "cil-options",
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          className: "mt-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(255,255,255,.2)',
              borderColor: 'rgba(255,255,255,.55)',
              data: [78, 81, 80, 45, 34, 12, 40],
              fill: true
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false
              },
              y: {
                display: false
              }
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetDropdown, {
        className: "mb-4",
        color: "danger",
        value: "9.823",
        title: "Members online",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
              name: "cil-options",
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartBar, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(255,255,255,.2)',
              borderColor: 'rgba(255,255,255,.55)',
              data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
              barPercentage: 0.6
            }]
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false
                },
                ticks: {
                  display: false
                }
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  display: false
                }
              }
            }
          }
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsDropdown);

/***/ })

}]);