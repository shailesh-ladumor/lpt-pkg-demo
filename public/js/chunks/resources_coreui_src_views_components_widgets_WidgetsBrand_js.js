(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_components_widgets_WidgetsBrand_js"],{

/***/ "./resources/coreui/src/views/components/widgets/WidgetsBrand.js":
/*!***********************************************************************!*\
  !*** ./resources/coreui/src/views/components/widgets/WidgetsBrand.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var WidgetsBrand = function WidgetsBrand(_ref) {
  var withCharts = _ref.withCharts;
  var chartOptions = {
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        className: "mb-4",
        headerChildren: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
            name: "cib-facebook",
            height: "52",
            className: "my-4 text-white"
          }), withCharts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_4__.CChart, {
            className: "position-absolute w-100 h-100",
            type: "line",
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [65, 59, 84, 84, 51, 55, 40],
                fill: true
              }]
            },
            options: chartOptions
          })]
        }),
        values: [['89k', 'friends'], ['459', 'feeds']],
        style: {
          '--cui-card-cap-bg': '#3b5998'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        className: "mb-4",
        headerChildren: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
            name: "cib-twitter",
            height: "52",
            className: "my-4 text-white"
          }), withCharts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_4__.CChart, {
            className: "position-absolute w-100 h-100",
            type: "line",
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [1, 13, 9, 17, 34, 41, 38],
                fill: true
              }]
            },
            options: chartOptions
          })]
        }),
        values: [['973k', 'followers'], ['1.792', 'tweets']],
        style: {
          '--cui-card-cap-bg': '#00aced'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        className: "mb-4",
        headerChildren: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
            name: "cib-linkedin",
            height: "52",
            className: "my-4 text-white"
          }), withCharts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_4__.CChart, {
            className: "position-absolute w-100 h-100",
            type: "line",
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40],
                fill: true
              }]
            },
            options: chartOptions
          })]
        }),
        values: [['500+', 'contacts'], ['292', 'feeds']],
        style: {
          '--cui-card-cap-bg': '#4875b4'
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
      sm: "6",
      lg: "3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CWidgetBrand, {
        className: "mb-4",
        color: "warning",
        headerChildren: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__.default, {
            name: "cil-calendar",
            height: "52",
            className: "my-4 text-white"
          }), withCharts && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_4__.CChart, {
            className: "position-absolute w-100 h-100",
            type: "line",
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64],
                fill: true
              }]
            },
            options: chartOptions
          })]
        }),
        values: [['12+', 'events'], ['4', 'meetings']]
      })
    })]
  });
};

WidgetsBrand.propTypes = {
  withCharts: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsBrand);

/***/ })

}]);