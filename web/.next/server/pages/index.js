module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "DataFeso"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Header */ "./src/components/Header.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _src_components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Login */ "./src/components/Login.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_components_home_page_ProjectFilters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/home_page/ProjectFilters */ "./src/components/home_page/ProjectFilters.js");
/* harmony import */ var _src_components_home_page_ProjectList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/home_page/ProjectList */ "./src/components/home_page/ProjectList.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\pages\\index.js";












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  title: {
    padding: _src_theme__WEBPACK_IMPORTED_MODULE_9__["default"].spacing(2),
    paddingLeft: _src_theme__WEBPACK_IMPORTED_MODULE_9__["default"].spacing(3)
  }
});
function App() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: _src_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2339755698" + " " + (classes.root || ""),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "jsx-2339755698",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
          container: true,
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
              variant: "h4",
              color: "primary",
              className: classes.title,
              children: "Projetos e Pesquisas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
            container: true,
            direction: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
              item: true,
              xs: 10,
              padding: "spacing(3)",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_home_page_ProjectList__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
              item: true,
              xs: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_home_page_ProjectFilters__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2339755698",
      children: "body{margin:0px;padding:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOdXZlbVxcRWR1Y2FjYW9cXFByb2dyYW1hY2FvXFxQcm9qZXRvc1xcZGF0YWZlc29cXHdlYlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEUyxBQUd3QixXQUNDLFlBQ2QiLCJmaWxlIjoiRDpcXE51dmVtXFxFZHVjYWNhb1xcUHJvZ3JhbWFjYW9cXFByb2pldG9zXFxkYXRhZmVzb1xcd2ViXFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEFwcExvZ2luIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zcmMvdGhlbWVcIjtcbmltcG9ydCBQcm9qZWN0RmlsdGVycyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZV9wYWdlL1Byb2plY3RGaWx0ZXJzXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2hvbWVfcGFnZS9Qcm9qZWN0TGlzdFwiO1xuaW1wb3J0IE15QXBwIGZyb20gXCIuL19hcHBcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJvamV0b3MgZSBQZXNxdWlzYXNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gcGFkZGluZz1cInNwYWNpbmcoMylcIj5cbiAgICAgICAgICAgICAgICA8UHJvamVjdExpc3QgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgICAgIDxBcHBMb2dpbiAvPlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0RmlsdGVycyAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=D:\\\\Nuvem\\\\Educacao\\\\Programacao\\\\Projetos\\\\datafeso\\\\web\\\\pages\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\Footer.js";


const styles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  footer: {
    padding: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(2),
    marginTop: "auto",
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.grey["900"]
  }
});
function Footer() {
  const classes = styles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      className: classes.footer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          container: true,
          alignItems: "center",
          direction: "column",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
            item: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png",
              height: 60,
              alt: "Logo da UNIFESO"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\Header.js";




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  title: {
    fontWeight: "bold"
  },
  header: {
    padding: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(3),
    alignItems: "center",
    alignContent: "center"
  }
});
function Header() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      position: "static",
      className: classes.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        direction: "row",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png",
            height: 60,
            alt: "Logo da UNIFESO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h3",
            align: "center",
            className: classes.title,
            children: "DataFeso"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            href: "/",
            color: "inherit",
            children: "Tela Princial"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppLogin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\Login.js";




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  root: {
    paddingRight: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2),
    minWidth: "240px"
  },
  box: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    padding: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2),
    marginBottom: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(1),
    marginRight: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2)
  },
  input: {
    margin: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(1),
    color: "#FFFFFF"
  },
  button: {
    color: "#FFFFFF",
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.primary.main
  }
});
function AppLogin() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
        container: true,
        className: classes.box,
        direction: "column",
        alignItems: "center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Typography"], {
            variant: "h6",
            color: "primary",
            align: "center",
            children: "\xC1rea do Pesquisador"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
            className: classes.input,
            size: "small",
            InputLabelProps: {
              shrink: true
            },
            color: "inherit",
            label: "Usu\xE1rio",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a, {
            type: "password",
            className: classes.input,
            size: "small",
            InputLabelProps: {
              shrink: true
            },
            color: "inherit",
            label: "Senha",
            variant: "outlined"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            className: classes.button,
            href: "#",
            color: "secundary",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/home_page/ProjectCard.js":
/*!*************************************************!*\
  !*** ./src/components/home_page/ProjectCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectCard; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\home_page\\ProjectCard.js";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 345,
    margin: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(1)
  },
  title: {
    color: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main
  },
  text: {
    fontWeight: "bold",
    "& span": {
      color: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main
    }
  }
});
function ProjectCard() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActionArea"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardMedia"], {
        component: "img",
        alt: "Descri\xE7ao da Imagem",
        height: "120",
        image: "https://entrepreneurhandbook.co.uk/wp-content/uploads/2014/11/Summary-of-quantative-research-report.jpg",
        title: "Contemplative Reptile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardContent"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          className: classes.title,
          gutterBottom: true,
          variant: "h6",
          component: "h2",
          children: "T\xEDtulo da Pesquisa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "body2",
          className: classes.text,
          color: "textSecondary",
          component: "p",
          children: "Descri\xE7ao breve da pesquisa, objetivos e resutados esperados."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "body2",
          className: classes.text,
          color: "textSecondary",
          component: "p",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Autor:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this), " Thales Azevedo"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "body2",
          className: classes.text,
          color: "textSecondary",
          component: "p",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "N de Arquivos:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this), " 10"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          variant: "body2",
          className: classes.text,
          color: "textSecondary",
          component: "p",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "\xDAltima Atualiza\xE7\xE3o:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), " 12/12/2020"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        size: "small",
        color: "primary",
        href: "/project",
        children: "Conhecer Pesquisa"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this) // <CardWarp>
  // <CardHeader>
  //     <p>ID #000000</p>
  //     <h3>Nome do Projeto</h3>
  // </CardHeader>
  // <CardDescription>
  //     <p><span>Autor:</span> Thales Azevedo</p>
  //     <p><span>Descrição:</span> O projeto com tal nome tem a roposta de pesquisar tal assunto e obter resutados que podem causar tais impactos.</p>
  //     <p>
  //     <p><span>Ultima Atualização:</span> 00/00/0000</p>
  // </CardDescription>
  // </CardWarp>
  ;
}

/***/ }),

/***/ "./src/components/home_page/ProjectFilters.js":
/*!****************************************************!*\
  !*** ./src/components/home_page/ProjectFilters.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectFilters; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\home_page\\ProjectFilters.js";



const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    paddingRight: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(2),
    minWidth: "240px"
  },
  box: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    padding: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(2)
  },
  input: {
    margin: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(1)
  },
  button: {
    margin: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(2),
    color: "#FFFFFF",
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main
  }
});
function ProjectFilters() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        direction: "column",
        justify: "center",
        alignItems: "center",
        className: classes.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
            variant: "h6",
            color: "primary",
            align: "center",
            children: "Filtrar Pesquisa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            size: "small",
            label: "ID",
            className: classes.input
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            size: "small",
            label: "Curso",
            className: classes.input
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            size: "small",
            label: "Setor",
            className: classes.input
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            size: "small",
            label: "Data In\xEDcio",
            type: "date",
            InputLabelProps: {
              shrink: true
            },
            className: classes.input,
            placeholder: "",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            variant: "outlined",
            size: "small",
            label: "Data Fim",
            type: "date",
            InputLabelProps: {
              shrink: true
            },
            className: classes.input,
            placeholder: "",
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            className: classes.button,
            size: "large",
            children: "Filtrar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/home_page/ProjectList.js":
/*!*************************************************!*\
  !*** ./src/components/home_page/ProjectList.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ "./src/components/home_page/ProjectCard.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./src/components/styles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\home_page\\ProjectList.js";





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    padding: _theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing(3)
  }
});
function ProjectList() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    direction: "row",
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
} // class ProjectList extends Component{
//     render(){
//         return(
//             <ProjectsWarp>
//                 <ProjectCard/>
//                 <ProjectCard/>
//                 <ProjectCard/>
//                 <ProjectCard/>
//                 <ProjectCard/>
//             </ProjectsWarp>
//         )
//     }
// }
// export default ProjectList

/***/ }),

/***/ "./src/components/styles.js":
/*!**********************************!*\
  !*** ./src/components/styles.js ***!
  \**********************************/
/*! exports provided: GlobalStyle, Warpper, HeaderWrap, FooterWrap, LoginWrap, ContentWrap, ProjectsWarp, ProjectFilterWrap, CardWarp, CardHeader, CardDescription, ProjectContentWarp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warpper", function() { return Warpper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrap", function() { return HeaderWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrap", function() { return FooterWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWrap", function() { return LoginWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrap", function() { return ContentWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsWarp", function() { return ProjectsWarp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFilterWrap", function() { return ProjectFilterWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWarp", function() { return CardWarp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardHeader", function() { return CardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectContentWarp", function() { return ProjectContentWarp; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    *{
        padding:0;
        margin:0; 
        border:0;
        font-family: 'Roboto', sans-serif;
    }
`;
const Warpper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    padding-left: 30px;
    padding-top: 30px;
    color: #005151;
  }
`;
const HeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #127e71;
  width: 100vmax;
  padding: 30px;

  h1 {
    color: #fff;
    font-size: 20;
    font-weight: bold;
    padding: 0;
  }
  img {
    max-width: 220px;
  }
`;
const FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vmax;
  padding: 20px;
  background-color: #212121;
  h1 {
    color: #fff;
  }
  img {
    max-width: 200px;
    height: 50px;
  }
`;
const LoginWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    label {
      margin-top: 10px;
    }
    input {
      height: 25px;
      width: auto;
    }

    button {
      margin: 10px;
      padding: 10px;
      width: 150px;
      color: #fff;
      background-color: #005151;
      border: none;
    }
  }
`;
const ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 5;
`;
const ProjectsWarp = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;
const ProjectFilterWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color: #005151;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  color: #fff;
  font-size: 12px;
  border-radius: 5px;
  margin: 30px;

  h2 {
    font-size: 18px;
    font-weight: 300;
  }
  form {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 10px;
    }
    input {
      height: 25px;
      width: auto;
    }

    button {
      margin: 10px;
      padding: 10px;
      width: 170px;
      color: #fff;
      background-color: #127e71;
      border: none;
    }
  }
`;
const CardWarp = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  background-color: #e5e5e5;
  color: #666;
  border-radius: 5px;
  margin: 10px;
  width: 350px;
  overflow: hidden;
  font-size: 14px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  span {
    font-weight: bold;
  }
  * {
    margin: 0px;
    padding: 2px;
  }
`;
const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 15px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;

  background-color: #127e71;
  color: #fff;
  p {
    font-size: 12px;
  }
`;
const CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 15px;
  background-color: #e5e5e5;
`;
const ProjectContentWarp = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  flex-grow: 4;
`;

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#127E71"
    },
    secondary: {
      main: "#005151"
    }
  },
  typography: {
    fontFamily: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"].join(",")
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVfcGFnZS9Qcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lX3BhZ2UvUHJvamVjdEZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZV9wYWdlL1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwidGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsInBhZGRpbmdMZWZ0IiwiQXBwIiwiY2xhc3NlcyIsInN0eWxlcyIsImZvb3RlciIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwiRm9vdGVyIiwiZm9udFdlaWdodCIsImhlYWRlciIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJIZWFkZXIiLCJwYWRkaW5nUmlnaHQiLCJtaW5XaWR0aCIsImJveCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiaW5wdXQiLCJtYXJnaW4iLCJjb2xvciIsImJ1dHRvbiIsInByaW1hcnkiLCJtYWluIiwiQXBwTG9naW4iLCJzaHJpbmsiLCJtYXhXaWR0aCIsInRleHQiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RGaWx0ZXJzIiwiUHJvamVjdExpc3QiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiV2FycHBlciIsInN0eWxlZCIsImRpdiIsIkhlYWRlcldyYXAiLCJGb290ZXJXcmFwIiwiTG9naW5XcmFwIiwiQ29udGVudFdyYXAiLCJQcm9qZWN0c1dhcnAiLCJQcm9qZWN0RmlsdGVyV3JhcCIsIkNhcmRXYXJwIiwiQ2FyZEhlYWRlciIsIkNhcmREZXNjcmlwdGlvbiIsIlByb2plY3RDb250ZW50V2FycCIsImNyZWF0ZU11aVRoZW1lIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNuQyxRQUFNO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixNQUEyQkYsS0FBakM7QUFFQUcsOENB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Q0EsQ0FGTyxDOzs7Ozs7Ozs7Ozs7QUNwTFA7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNckQsS0FBSyxHQUFHZ0Usd0VBQWMsQ0FBQztBQUMzQjFDLFNBQU8sRUFBRTtBQUNQa0IsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRTtBQURDLEtBREY7QUFJUHdCLGFBQVMsRUFBRTtBQUNUeEIsVUFBSSxFQUFFO0FBREc7QUFKSixHQURrQjtBQVMzQnlCLFlBQVUsRUFBRTtBQUNWQyxjQUFVLEVBQUUsQ0FDVixlQURVLEVBRVYsb0JBRlUsRUFHVixVQUhVLEVBSVYsUUFKVSxFQUtWLFFBTFUsRUFNVixRQU5VLEVBT1YsV0FQVSxFQVFWLFdBUlUsRUFTVixZQVRVLEVBVVYsZ0JBVlUsRUFXVkMsSUFYVSxDQVdMLEdBWEs7QUFERjtBQVRlLENBQUQsQ0FBNUI7QUF5QmVwRSxvRUFBZixFOzs7Ozs7Ozs7OztBQzNCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zcmMvdGhlbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzcy1zZXJ2ZXItc2lkZVwiKTtcbiAgICBpZiAoanNzU3R5bGVzKSB7XG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5EYXRhRmVzbzwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IEFwcExvZ2luIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Mb2dpblwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBHcmlkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi9zcmMvdGhlbWVcIjtcbmltcG9ydCBQcm9qZWN0RmlsdGVycyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvaG9tZV9wYWdlL1Byb2plY3RGaWx0ZXJzXCI7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2hvbWVfcGFnZS9Qcm9qZWN0TGlzdFwiO1xuaW1wb3J0IE15QXBwIGZyb20gXCIuL19hcHBcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDRcIlxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJvamV0b3MgZSBQZXNxdWlzYXNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gcGFkZGluZz1cInNwYWNpbmcoMylcIj5cbiAgICAgICAgICAgICAgICA8UHJvamVjdExpc3QgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgICAgIDxBcHBMb2dpbiAvPlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0RmlsdGVycyAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIG1ha2VTdHlsZXMsIENvbnRhaW5lciwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuXG5jb25zdCBzdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgZm9vdGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5Ub3A6IFwiYXV0b1wiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5W1wiOTAwXCJdLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9IGRpcmVjdGlvbj17XCJjb2x1bW5cIn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXtcImh0dHA6Ly93d3cudW5pZmVzby5lZHUuYnIvaW1hZ2VzL2xvZ28vVU5JRkVTTy1CUkFOQ08ucG5nXCJ9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgICBhbHQ9e1wiTG9nbyBkYSBVTklGRVNPXCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHBiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xuaW1wb3J0IHtcbiAgbWFrZVN0eWxlcyxcbiAgVGhlbWVQcm92aWRlcixcbiAgR3JpZCxcbiAgVHlwb2dyYXBoeSxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGl0bGU6IHtcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGFsaWduQ29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEFwcGJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9ID5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e1wiaHR0cDovL3d3dy51bmlmZXNvLmVkdS5ici9pbWFnZXMvbG9nby9VTklGRVNPLUJSQU5DTy5wbmdcIn1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgYWx0PXtcIkxvZ28gZGEgVU5JRkVTT1wifVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+XG4gICAgICAgICAgICAgIERhdGFGZXNvXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgPEJ1dHRvbiBocmVmPVwiL1wiIGNvbG9yPVwiaW5oZXJpdFwiPlxuICAgICAgICAgICAgICBUZWxhIFByaW5jaWFsXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQXBwYmFyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuaW1wb3J0IHtcbiAgR3JpZCxcbiAgbWFrZVN0eWxlcyxcbiAgQnV0dG9uLFxuICBUeXBvZ3JhcGh5LFxuICBUaGVtZVByb3ZpZGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWluV2lkdGg6IFwiMjQwcHhcIixcbiAgfSxcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZWVlZWVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG4gIGlucHV0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwTG9naW4oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH1cbiAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29sb3I9XCJwcmltYXJ5XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgw4FyZWEgZG8gUGVzcXVpc2Fkb3JcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzdcOhcmlvXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZW5oYVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn0gaHJlZj1cIiNcIiBjb2xvcj1cInNlY3VuZGFyeVwiPlxuICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQge1xuICBtYWtlU3R5bGVzLFxuICBDYXJkLFxuICBDYXJkQWN0aW9uQXJlYSxcbiAgQ2FyZE1lZGlhLFxuICBDYXJkQ29udGVudCxcbiAgVHlwb2dyYXBoeSxcbiAgQ2FyZEFjdGlvbnMsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgbWF4V2lkdGg6IDM0NSxcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgXCImIHNwYW5cIjoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdENhcmQoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgIGFsdD1cIkRlc2NyacOnYW8gZGEgSW1hZ2VtXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9lbnRyZXByZW5ldXJoYW5kYm9vay5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8xMS9TdW1tYXJ5LW9mLXF1YW50YXRpdmUtcmVzZWFyY2gtcmVwb3J0LmpwZ1wiXG4gICAgICAgICAgdGl0bGU9XCJDb250ZW1wbGF0aXZlIFJlcHRpbGVcIlxuICAgICAgICAvPlxuICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgIGd1dHRlckJvdHRvbVxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBUw610dWxvIGRhIFBlc3F1aXNhXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9XG4gICAgICAgICAgICBjb2xvcj1cInRleHRTZWNvbmRhcnlcIlxuICAgICAgICAgICAgY29tcG9uZW50PVwicFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgRGVzY3Jpw6dhbyBicmV2ZSBkYSBwZXNxdWlzYSwgb2JqZXRpdm9zIGUgcmVzdXRhZG9zIGVzcGVyYWRvcy5cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImJvZHkyXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fVxuICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuPkF1dG9yOjwvc3Bhbj4gVGhhbGVzIEF6ZXZlZG9cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH1cbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5OIGRlIEFycXVpdm9zOjwvc3Bhbj4gMTBcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5MlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH1cbiAgICAgICAgICAgIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiXG4gICAgICAgICAgICBjb21wb25lbnQ9XCJwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj7Dmmx0aW1hIEF0dWFsaXphw6fDo286PC9zcGFuPiAxMi8xMi8yMDIwXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBocmVmPVwiL3Byb2plY3RcIj5cbiAgICAgICAgICBDb25oZWNlciBQZXNxdWlzYVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuXG4gICAgLy8gPENhcmRXYXJwPlxuICAgIC8vIDxDYXJkSGVhZGVyPlxuICAgIC8vICAgICA8cD5JRCAjMDAwMDAwPC9wPlxuICAgIC8vICAgICA8aDM+Tm9tZSBkbyBQcm9qZXRvPC9oMz5cbiAgICAvLyA8L0NhcmRIZWFkZXI+XG4gICAgLy8gPENhcmREZXNjcmlwdGlvbj5cbiAgICAvLyAgICAgPHA+PHNwYW4+QXV0b3I6PC9zcGFuPiBUaGFsZXMgQXpldmVkbzwvcD5cbiAgICAvLyAgICAgPHA+PHNwYW4+RGVzY3Jpw6fDo286PC9zcGFuPiBPIHByb2pldG8gY29tIHRhbCBub21lIHRlbSBhIHJvcG9zdGEgZGUgcGVzcXVpc2FyIHRhbCBhc3N1bnRvIGUgb2J0ZXIgcmVzdXRhZG9zIHF1ZSBwb2RlbSBjYXVzYXIgdGFpcyBpbXBhY3Rvcy48L3A+XG4gICAgLy8gICAgIDxwPlxuICAgIC8vICAgICA8cD48c3Bhbj5VbHRpbWEgQXR1YWxpemHDp8Ojbzo8L3NwYW4+IDAwLzAwLzAwMDA8L3A+XG4gICAgLy8gPC9DYXJkRGVzY3JpcHRpb24+XG4gICAgLy8gPC9DYXJkV2FycD5cbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIG1ha2VTdHlsZXMsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgR3JpZCxcbiAgQnV0dG9uLFxuICBUaGVtZVByb3ZpZGVyLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWluV2lkdGg6IFwiMjQwcHhcIixcbiAgfSxcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZWVlZWVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RmlsdGVycygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9XG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtID5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwicHJpbWFyeVwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIEZpbHRyYXIgUGVzcXVpc2FcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJJRFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgID48L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ3Vyc29cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICA+PC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNldG9yXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIEluw61jaW9cIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgIDwvVGV4dEZpZWxkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIEZpbVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTmFtZVxuICAgICAgICAgICAgPC9UZXh0RmllbGQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgRmlsdHJhclxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSBcIi4vUHJvamVjdENhcmRcIjtcblxuaW1wb3J0IHsgUHJvamVjdHNXYXJwIH0gZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdExpc3QoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxQcm9qZWN0Q2FyZCAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxQcm9qZWN0Q2FyZCAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxQcm9qZWN0Q2FyZCAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxQcm9qZWN0Q2FyZCAvPlxuICAgICAgPC9HcmlkPlxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxQcm9qZWN0Q2FyZCAvPlxuICAgICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgKTtcbn1cblxuLy8gY2xhc3MgUHJvamVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnR7XG4vLyAgICAgcmVuZGVyKCl7XG4vLyAgICAgICAgIHJldHVybihcblxuLy8gICAgICAgICAgICAgPFByb2plY3RzV2FycD5cblxuLy8gICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZC8+XG4vLyAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkLz5cbi8vICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQvPlxuLy8gICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZC8+XG4vLyAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkLz5cblxuLy8gICAgICAgICAgICAgPC9Qcm9qZWN0c1dhcnA+XG4vLyAgICAgICAgIClcbi8vICAgICB9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IFByb2plY3RMaXN0XG4iLCJpbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICp7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgbWFyZ2luOjA7IFxuICAgICAgICBib3JkZXI6MDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBXYXJwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoMSB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGNvbG9yOiAjMDA1MTUxO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3ZTcxO1xuICB3aWR0aDogMTAwdm1heDtcbiAgcGFkZGluZzogMzBweDtcblxuICBoMSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHZtYXg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGgxIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICBpbWcge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9naW5XcmFwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgfVxuICBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICBsYWJlbCB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTE1MTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWdyb3c6IDU7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdHNXYXJwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFByb2plY3RGaWx0ZXJXcmFwID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTE1MTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDMwcHg7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICB9XG4gIGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGxhYmVsIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI3ZTcxO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDYXJkV2FycCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAqIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAycHg7XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ2FyZEhlYWRlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyN2U3MTtcbiAgY29sb3I6ICNmZmY7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcmREZXNjcmlwdGlvbiA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG5gO1xuXG5leHBvcnQgY29uc3QgUHJvamVjdENvbnRlbnRXYXJwID0gc3R5bGVkLmRpdmBcbiAgZmxleC1ncm93OiA0O1xuYDtcbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5cbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xuICBwYWxldHRlOiB7XG4gICAgcHJpbWFyeToge1xuICAgICAgbWFpbjogXCIjMTI3RTcxXCIsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46IFwiIzAwNTE1MVwiLFxuICAgIH0sXG4gIH0sXG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiBbXG4gICAgICBcIi1hcHBsZS1zeXN0ZW1cIixcbiAgICAgIFwiQmxpbmtNYWNTeXN0ZW1Gb250XCIsXG4gICAgICBcIlNlZ29lIFVJXCIsXG4gICAgICBcIlJvYm90b1wiLFxuICAgICAgXCJPeHlnZW5cIixcbiAgICAgIFwiVWJ1bnR1XCIsXG4gICAgICBcIkNhbnRhcmVsbFwiLFxuICAgICAgXCJGaXJhIFNhbnNcIixcbiAgICAgIFwiRHJvaWQgU2Fuc1wiLFxuICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxuICAgIF0uam9pbihcIixcIiksXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==