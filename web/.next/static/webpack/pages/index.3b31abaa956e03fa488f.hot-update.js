webpackHotUpdate_N_E("pages/index",{

/***/ "./components/styles.js":
/*!******************************!*\
  !*** ./components/styles.js ***!
  \******************************/
/*! exports provided: HeaderWrap, FooterWrap, LoginWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrap", function() { return HeaderWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrap", function() { return FooterWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWrap", function() { return LoginWrap; });
/* harmony import */ var D_Nuvem_Educacao_Programacao_Projetos_datafeso_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject5() {
  var data = Object(D_Nuvem_Educacao_Programacao_Projetos_datafeso_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    color: #FFF;\n    font-size:12px;\n    border-radius:5px;\n\n    h2{\n        font-size:18px;\n        font-weight:300;\n    }\n    form{\n        display:flex;\n        flex-direction:column;\n        align-items:flex-start;\n        \n        label{\n            margin-top:10px;\n        }\n        input{\n            height:25px;\n            width:auto;\n        }\n\n        button{\n            margin: 10px;\n            padding: 10px;\n            width:150px;\n            color: #FFF;\n            background-color:#005151; \n            border:none;\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(D_Nuvem_Educacao_Programacao_Projetos_datafeso_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n display:flex;\n justify-content:center;\n align-items:center;\n width:100vmax;\n padding:20px;\n background-color: #212121;\n h1{\n     color:#fff;\n }\n img{\n     max-width:200px;\n     height: 50px;\n }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(D_Nuvem_Educacao_Programacao_Projetos_datafeso_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n display: flex;\n align-items: center;\n justify-content: space-around;\n background-color: #127E71;\n width:100vmax;\n padding: 30px; \n \n h1{\n     color:#fff;\n     font-size:20;\n     font-weight:bold;\n     padding:0; \n }\n img{\n     max-width:220px;\n }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(D_Nuvem_Educacao_Programacao_Projetos_datafeso_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-family: 'Roboto', sans-serif;\n    display:flex;\n    height:100vh;\n    flex-direction: column;\n    justify-content: space-between;\n    h1{\n        padding-left:30px;\n        padding-top:30px;\n        color:#005151;\n    }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(D_Nuvem_Educacao_Programacao_Projetos_datafeso_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    *{\n        padding:0;\n        margin:0;\n        border:0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var Warpper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
var HeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());
var FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());
var LoginWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5());

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMuanMiXSwibmFtZXMiOlsiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIldhcnBwZXIiLCJzdHlsZWQiLCJkaXYiLCJIZWFkZXJXcmFwIiwiRm9vdGVyV3JhcCIsIkxvZ2luV3JhcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBR0MsMkVBQUgsbUJBQWpCO0FBUUEsSUFBTUMsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUFiO0FBY08sSUFBTUMsVUFBVSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFoQjtBQW9CQSxJQUFNRSxVQUFVLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO0FBaUJBLElBQU1HLFNBQVMsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVixvQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYjMxYWJhYTk1NmUwM2ZhNDg4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdHlsZWQsIHtjcmVhdGVHbG9iYWxTdHlsZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgKntcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgYm9yZGVyOjA7XHJcbiAgICB9XHJcbmAgXHJcblxyXG5jb25zdCBXYXJwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoMXtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIGNvbG9yOiMwMDUxNTE7XHJcbiAgICB9XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXHJcblxyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuIGJhY2tncm91bmQtY29sb3I6ICMxMjdFNzE7XHJcbiB3aWR0aDoxMDB2bWF4O1xyXG4gcGFkZGluZzogMzBweDsgXHJcbiBcclxuIGgxe1xyXG4gICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgZm9udC1zaXplOjIwO1xyXG4gICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgcGFkZGluZzowOyBcclxuIH1cclxuIGltZ3tcclxuICAgICBtYXgtd2lkdGg6MjIwcHg7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuIGRpc3BsYXk6ZmxleDtcclxuIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiB3aWR0aDoxMDB2bWF4O1xyXG4gcGFkZGluZzoyMHB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuIGgxe1xyXG4gICAgIGNvbG9yOiNmZmY7XHJcbiB9XHJcbiBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOjIwMHB4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuIH1cclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbldyYXAgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuXHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICBcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgaGVpZ2h0OjI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDUxNTE7IFxyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9