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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/project/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/project/index.js":
/*!********************************!*\
  !*** ./pages/project/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectView; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Header */ "./src/components/Header.js");
/* harmony import */ var _src_components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Login */ "./src/components/Login.js");
/* harmony import */ var _src_components_project_page_ProjectContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/project_page/ProjectContent */ "./src/components/project_page/ProjectContent.js");
/* harmony import */ var _src_components_project_page_ProjectFileList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/project_page/ProjectFileList */ "./src/components/project_page/ProjectFileList.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\pages\\project\\index.js";








const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  title: {
    padding: _src_theme__WEBPACK_IMPORTED_MODULE_8__["default"].spacing(1),
    paddingLeft: _src_theme__WEBPACK_IMPORTED_MODULE_8__["default"].spacing(3)
  },
  subtitle: {
    paddingLeft: _src_theme__WEBPACK_IMPORTED_MODULE_8__["default"].spacing(3)
  },
  content: {
    padding: _src_theme__WEBPACK_IMPORTED_MODULE_8__["default"].spacing(2) // margin: theme.spacing(1),
    // backgroundColor: '#EEEEEE'

  },
  sidebar: {
    minWidth: "240px"
  }
});
function ProjectView() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
    theme: _src_theme__WEBPACK_IMPORTED_MODULE_8__["default"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "jsx-2339755698" + " " + (classes.root || ""),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: "jsx-2339755698",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
          container: true,
          direction: "column",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
            item: true,
            xs: 12,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
              variant: "h4",
              color: "primary",
              className: classes.title,
              children: "IPC-Feso | C\xE1lculo de Infla\xE7\xE3o de Teres\xF3polis"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
            container: true,
            direction: "row",
            className: classes.subtitle,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
              item: true,
              xs: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
                variant: "body1",
                color: "primary",
                children: "Autora: Prof. Roberta"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
              item: true,
              xs: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
                variant: "body1",
                color: "primary",
                children: "Ultima Atualiza\xE7\xE3o: 01/12/2020"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
            container: true,
            direction: "row",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
              item: true,
              xs: 10,
              className: classes.content,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_project_page_ProjectContent__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
              item: true,
              className: classes.sidebar,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Login__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_project_page_ProjectFileList__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "2339755698",
      children: "body{margin:0px;padding:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOdXZlbVxcRWR1Y2FjYW9cXFByb2dyYW1hY2FvXFxQcm9qZXRvc1xcZGF0YWZlc29cXHdlYlxccGFnZXNcXHByb2plY3RcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFUyxBQUd3QixXQUNDLFlBQ2QiLCJmaWxlIjoiRDpcXE51dmVtXFxFZHVjYWNhb1xcUHJvZ3JhbWFjYW9cXFByb2pldG9zXFxkYXRhZmVzb1xcd2ViXFxwYWdlc1xccHJvamVjdFxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBBcHBMb2dpbiBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvTG9naW5cIjtcbmltcG9ydCBQcm9qZWN0Q29udGVudCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdF9wYWdlL1Byb2plY3RDb250ZW50XCI7XG5pbXBvcnQgUHJvamVjdEZpbGVMaXN0IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0X3BhZ2UvUHJvamVjdEZpbGVMaXN0XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9Gb290ZXJcIjtcblxuaW1wb3J0IHsgbWFrZVN0eWxlcywgVGhlbWVQcm92aWRlciwgR3JpZCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi9zcmMvdGhlbWVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICB0aXRsZToge1xuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIHN1YnRpdGxlOiB7XG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIC8vIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjRUVFRUVFJ1xuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgbWluV2lkdGg6IFwiMjQwcHhcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0VmlldygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg0XCJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIElQQy1GZXNvIHwgQ8OhbGN1bG8gZGUgSW5mbGHDp8OjbyBkZSBUZXJlc8OzcG9saXNcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJ0aXRsZX0+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgQXV0b3JhOiBQcm9mLiBSb2JlcnRhXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgVWx0aW1hIEF0dWFsaXphw6fDo286IDAxLzEyLzIwMjBcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0Q29udGVudCAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLnNpZGViYXJ9PlxuICAgICAgICAgICAgICAgIDxBcHBMb2dpbiAvPlxuICAgICAgICAgICAgICAgIDxQcm9qZWN0RmlsZUxpc3QgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=D:\\\\Nuvem\\\\Educacao\\\\Programacao\\\\Projetos\\\\datafeso\\\\web\\\\pages\\\\project\\\\index.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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

/***/ "./src/components/project_page/Inflacao.js":
/*!*************************************************!*\
  !*** ./src/components/project_page/Inflacao.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inflacao; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\project_page\\Inflacao.js";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  input: {
    margin: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(1),
    color: "#FFFFFF"
  },
  result: {
    "& span": {
      color: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main,
      fontWeight: "bold"
    }
  },
  box: {
    alignItems: "flex-start"
  }
});
function Inflacao() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      direction: "column",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        direction: "row",
        className: classes.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          className: classes.box,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            className: classes.input,
            type: "date",
            variant: "outlined",
            label: "Data In\xEDcio",
            InputLabelProps: {
              shrink: true
            },
            size: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          className: classes.box,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            className: classes.input,
            type: "date",
            variant: "outlined",
            label: "Data Fim",
            InputLabelProps: {
              shrink: true
            },
            size: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          className: classes.box,
          xs: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
            className: classes.formControl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
              id: "product-id-label",
              InputLabelProps: {
                shrink: true
              },
              children: "Produto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
              labelId: "product-id-label",
              id: "productId",
              variant: "outlined" // value={}
              // onChange={}
              ,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
                value: 1,
                children: "Produto 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
                value: 2,
                children: "Produto 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
                value: 3,
                children: "Produto 3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        xs: "7",
        className: classes.result,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Resultado:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, this), " _______"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/project_page/ProjectContent.js":
/*!*******************************************************!*\
  !*** ./src/components/project_page/ProjectContent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectContent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Valores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Valores */ "./src/components/project_page/Valores.js");
/* harmony import */ var _Inflacao__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Inflacao */ "./src/components/project_page/Inflacao.js");
/* harmony import */ var _ProjectDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectDescription */ "./src/components/project_page/ProjectDescription.js");
/* harmony import */ var _ProjectDescription__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ProjectDescription__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\project_page\\ProjectContent.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    backgroundColor: "#EEEE99"
  },
  appBarSpacer: _objectSpread({}, theme.mixins.toolbar),
  content: {
    marginTop: theme.spacing(2),
    flexGrow: 1
  },
  tabTitle: {
    color: theme.palette.secondary.main
  },
  layout: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2)
  }
}));
function ProjectContent() {
  const classes = useStyles();
  const {
    0: tabValue,
    1: setTabValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      value: tabValue,
      onChange: (_, newValue) => setTabValue(newValue),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        className: classes.tabTitle,
        label: "Dados do Pesquisa/Projeto"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        className: classes.tabTitle,
        label: "Valores dos Produtos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
        className: classes.tabTitle,
        label: "Cálculo de Inflação"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
      className: classes.layout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        maxWidth: "lg",
        className: classes.content,
        children: [tabValue === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 30
        }, this), tabValue === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Valores__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this), tabValue === 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Inflacao__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/project_page/ProjectDescription.js":
/*!***********************************************************!*\
  !*** ./src/components/project_page/ProjectDescription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/project_page/ProjectFileList.js":
/*!********************************************************!*\
  !*** ./src/components/project_page/ProjectFileList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectFileList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\project_page\\ProjectFileList.js";




const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    paddingRight: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2),
    minWidth: "240px"
  },
  box: {
    backgroundColor: "#eeeeee",
    borderRadius: "5px",
    padding: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2)
  },
  title: {
    color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.primary.main
  },
  button: {
    margin: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2),
    color: "#FFFFFF",
    backgroundColor: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.primary.main
  }
});
function ProjectFileList() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
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
            color: "inherit",
            align: "center",
            className: classes.title,
            children: "Arquivos do Projeto"
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
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            variant: "body2",
            color: "inherit",
            align: "center",
            children: "arquivo.csv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            variant: "body2",
            color: "inherit",
            align: "center",
            children: "arquivo.csv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            variant: "body2",
            color: "inherit",
            align: "center",
            children: "arquivo.csv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            variant: "body2",
            color: "inherit",
            align: "center",
            children: "arquivo.csv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            variant: "body2",
            color: "inherit",
            align: "center",
            children: "arquivo.csv"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            className: classes.button,
            size: "medium",
            children: "Download"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
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

/***/ "./src/components/project_page/Valores.js":
/*!************************************************!*\
  !*** ./src/components/project_page/Valores.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Valores; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./src/theme.js");

var _jsxFileName = "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\project_page\\Valores.js";


const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  input: {
    margin: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(1),
    color: "#FFFFFF"
  },
  result: {
    "& span": {
      color: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main,
      fontWeight: "bold"
    }
  },
  box: {
    alignItems: "flex-start"
  }
});
function Valores() {
  const classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
      container: true,
      direction: "colunm",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        sdirection: "row",
        className: classes.box,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          item: true,
          className: classes.box,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
            className: classes.input,
            type: "date",
            variant: "outlined",
            label: "Per\xEDodo",
            InputLabelProps: {
              shrink: true
            },
            size: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
          className: classes.input,
          xs: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
            className: classes.formControl,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["InputLabel"], {
              id: "product-id-label",
              InputLabelProps: {
                shrink: true
              },
              children: "Produto"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
              labelId: "product-id-label",
              id: "productId",
              variant: "outlined" // value={}
              // onChange={}
              ,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
                value: 1,
                children: "Produto 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
                value: 2,
                children: "Produto 2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
                value: 3,
                children: "Produto 3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        container: true,
        xs: "7",
        className: classes.result,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Resultado:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this), " _______"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

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

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RfcGFnZS9JbmZsYWNhby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0X3BhZ2UvUHJvamVjdENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvamVjdF9wYWdlL1Byb2plY3RGaWxlTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0X3BhZ2UvVmFsb3Jlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJ0aXRsZSIsInBhZGRpbmciLCJ0aGVtZSIsInNwYWNpbmciLCJwYWRkaW5nTGVmdCIsInN1YnRpdGxlIiwiY29udGVudCIsInNpZGViYXIiLCJtaW5XaWR0aCIsIlByb2plY3RWaWV3IiwiY2xhc3NlcyIsInN0eWxlcyIsImZvb3RlciIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwiRm9vdGVyIiwiZm9udFdlaWdodCIsImhlYWRlciIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJIZWFkZXIiLCJwYWRkaW5nUmlnaHQiLCJib3giLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5SaWdodCIsImlucHV0IiwibWFyZ2luIiwiY29sb3IiLCJidXR0b24iLCJwcmltYXJ5IiwibWFpbiIsIkFwcExvZ2luIiwic2hyaW5rIiwicmVzdWx0IiwiSW5mbGFjYW8iLCJmb3JtQ29udHJvbCIsImFwcEJhclNwYWNlciIsIm1peGlucyIsInRvb2xiYXIiLCJmbGV4R3JvdyIsInRhYlRpdGxlIiwic2Vjb25kYXJ5IiwibGF5b3V0IiwibWFyZ2luTGVmdCIsIlByb2plY3RDb250ZW50IiwidGFiVmFsdWUiLCJzZXRUYWJWYWx1ZSIsInVzZVN0YXRlIiwiXyIsIm5ld1ZhbHVlIiwiUHJvamVjdEZpbGVMaXN0IiwiVmFsb3JlcyIsImNyZWF0ZU11aVRoZW1lIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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LEVBQUUsQ0FDVixlQURVLEVBRVYsb0JBRlUsRUFHVixVQUhVLEVBSVYsUUFKVSxFQUtWLFFBTFUsRUFNVixRQU5VLEVBT1YsV0FQVSxFQVFWLFdBUlUsRUFTVixZQVRVLEVBVVYsZ0JBVlUsRUFXVkMsSUFYVSxDQVdMLEdBWEs7QUFERjtBQVRlLENBQUQsQ0FBNUI7QUF5QmV4RCxvRUFBZixFOzs7Ozs7Ozs7OztBQzNCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9wcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9wcm9qZWN0L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgQXBwTG9naW4gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgUHJvamVjdENvbnRlbnQgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2plY3RfcGFnZS9Qcm9qZWN0Q29udGVudFwiO1xuaW1wb3J0IFByb2plY3RGaWxlTGlzdCBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJvamVjdF9wYWdlL1Byb2plY3RGaWxlTGlzdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vc3JjL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmltcG9ydCB7IG1ha2VTdHlsZXMsIFRoZW1lUHJvdmlkZXIsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vc3JjL3RoZW1lXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICByb290OiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBzdWJ0aXRsZToge1xuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICB9LFxuICBjb250ZW50OiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgICAvLyBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI0VFRUVFRSdcbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIG1pbldpZHRoOiBcIjI0MHB4XCIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFZpZXcoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNFwiXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJUEMtRmVzbyB8IEPDoWxjdWxvIGRlIEluZmxhw6fDo28gZGUgVGVyZXPDs3BvbGlzXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGl0bGV9PlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIEF1dG9yYTogUHJvZi4gUm9iZXJ0YVxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgIFVsdGltYSBBdHVhbGl6YcOnw6NvOiAwMS8xMi8yMDIwXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIj5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdENvbnRlbnQgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zaWRlYmFyfT5cbiAgICAgICAgICAgICAgICA8QXBwTG9naW4gLz5cbiAgICAgICAgICAgICAgICA8UHJvamVjdEZpbGVMaXN0IC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAge2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgbWFrZVN0eWxlcywgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5cbmNvbnN0IHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBmb290ZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpblRvcDogXCJhdXRvXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbXCI5MDBcIl0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBjbGFzc2VzID0gc3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgYWxpZ25JdGVtcz17XCJjZW50ZXJcIn0gZGlyZWN0aW9uPXtcImNvbHVtblwifT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e1wiaHR0cDovL3d3dy51bmlmZXNvLmVkdS5ici9pbWFnZXMvbG9nby9VTklGRVNPLUJSQU5DTy5wbmdcIn1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICAgIGFsdD17XCJMb2dvIGRhIFVOSUZFU09cIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XG5pbXBvcnQge1xuICBtYWtlU3R5bGVzLFxuICBUaGVtZVByb3ZpZGVyLFxuICBHcmlkLFxuICBUeXBvZ3JhcGh5LFxuICBCdXR0b24sXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0aXRsZToge1xuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QXBwYmFyIHBvc2l0aW9uPVwic3RhdGljXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17XCJodHRwOi8vd3d3LnVuaWZlc28uZWR1LmJyL2ltYWdlcy9sb2dvL1VOSUZFU08tQlJBTkNPLnBuZ1wifVxuICAgICAgICAgICAgICBoZWlnaHQ9ezYwfVxuICAgICAgICAgICAgICBhbHQ9e1wiTG9nbyBkYSBVTklGRVNPXCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgRGF0YUZlc29cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XG4gICAgICAgICAgICA8QnV0dG9uIGhyZWY9XCIvXCIgY29sb3I9XCJpbmhlcml0XCI+XG4gICAgICAgICAgICAgIFRlbGEgUHJpbmNpYWxcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9BcHBiYXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5pbXBvcnQge1xuICBHcmlkLFxuICBtYWtlU3R5bGVzLFxuICBCdXR0b24sXG4gIFR5cG9ncmFwaHksXG4gIFRoZW1lUHJvdmlkZXIsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICBtaW5XaWR0aDogXCIyNDBweFwiLFxuICB9LFxuICBib3g6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZWVlZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICB9LFxuICBidXR0b246IHtcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBMb2dpbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEdyaWRcbiAgICAgICAgICBjb250YWluZXJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm94fVxuICAgICAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cInByaW1hcnlcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICDDgXJlYSBkbyBQZXNxdWlzYWRvclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fVxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVXN1w6FyaW9cIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlNlbmhhXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkPlxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBocmVmPVwiI1wiIGNvbG9yPVwic2VjdW5kYXJ5XCI+XG4gICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIEdyaWQsXG4gIG1ha2VTdHlsZXMsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgVGhlbWVQcm92aWRlcixcbiAgU2VsZWN0LFxuICBNZW51SXRlbSxcbiAgRm9ybUNvbnRyb2wsXG4gIElucHV0TGFiZWwsXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgaW5wdXQ6IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICB9LFxuICByZXN1bHQ6IHtcbiAgICBcIiYgc3BhblwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICB9LFxuICB9LFxuICBib3g6IHtcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZsYWNhbygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBjbGFzc05hbWU9e2NsYXNzZXMuYm94fT5cbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9IHhzPXsxMn0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cbiAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGEgSW7DrWNpb1wiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgID48L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSBjbGFzc05hbWU9e2NsYXNzZXMuYm94fSB4cz17MTJ9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRhIEZpbVwiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgID48L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0geHM9ezEyfT5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybUNvbnRyb2x9PlxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbFxuICAgICAgICAgICAgICAgIGlkPVwicHJvZHVjdC1pZC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHJvZHV0b1xuICAgICAgICAgICAgICA8L0lucHV0TGFiZWw+XG4gICAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBsYWJlbElkPVwicHJvZHVjdC1pZC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwcm9kdWN0SWRcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e31cbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsxfT5Qcm9kdXRvIDE8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17Mn0+UHJvZHV0byAyPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezN9PlByb2R1dG8gMzwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHhzPVwiN1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXN1bHR9PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPHNwYW4+UmVzdWx0YWRvOjwvc3Bhbj4gX19fX19fX1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtYWtlU3R5bGVzLCBUYWIsIFRhYnMsIENvbnRhaW5lciwgR3JpZCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5pbXBvcnQgVmFsb3JlcyBmcm9tIFwiLi9WYWxvcmVzXCI7XG5pbXBvcnQgSW5mbGFjYW8gZnJvbSBcIi4vSW5mbGFjYW9cIjtcbmltcG9ydCBQcm9qZWN0RGVzY3JpcHRpb24gZnJvbSBcIi4vUHJvamVjdERlc2NyaXB0aW9uXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNFRUVFOTlcIixcbiAgfSxcbiAgYXBwQmFyU3BhY2VyOiB7XG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIHRhYlRpdGxlOiB7XG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gIH0sXG4gIGxheW91dDoge1xuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxuICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RDb250ZW50KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgY29uc3QgW3RhYlZhbHVlLCBzZXRUYWJWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxUYWJzIHZhbHVlPXt0YWJWYWx1ZX0gb25DaGFuZ2U9eyhfLCBuZXdWYWx1ZSkgPT4gc2V0VGFiVmFsdWUobmV3VmFsdWUpfT5cbiAgICAgICAgPFRhYiBjbGFzc05hbWU9e2NsYXNzZXMudGFiVGl0bGV9IGxhYmVsPXtcIkRhZG9zIGRvIFBlc3F1aXNhL1Byb2pldG9cIn0gLz5cbiAgICAgICAgPFRhYiBjbGFzc05hbWU9e2NsYXNzZXMudGFiVGl0bGV9IGxhYmVsPXtcIlZhbG9yZXMgZG9zIFByb2R1dG9zXCJ9IC8+XG4gICAgICAgIDxUYWIgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYlRpdGxlfSBsYWJlbD17XCJDw6FsY3VsbyBkZSBJbmZsYcOnw6NvXCJ9IC8+XG4gICAgICA8L1RhYnM+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMubGF5b3V0fT5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD17XCJsZ1wifSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAge3RhYlZhbHVlID09PSAwICYmIDxkaXY+PC9kaXY+fVxuICAgICAgICAgIHt0YWJWYWx1ZSA9PT0gMSAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8VmFsb3JlcyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGFiVmFsdWUgPT09IDIgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEluZmxhY2FvIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCB7XG4gIG1ha2VTdHlsZXMsXG4gIFRleHRGaWVsZCxcbiAgVHlwb2dyYXBoeSxcbiAgR3JpZCxcbiAgQnV0dG9uLFxuICBMaW5rLFxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgbWluV2lkdGg6IFwiMjQwcHhcIixcbiAgfSxcbiAgYm94OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZWVlZWVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RmlsZUxpc3QoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxHcmlkXG4gICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYm94fVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgaXRlbSA+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQXJxdWl2b3MgZG8gUHJvamV0b1xuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtID5cbiAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIGFycXVpdm8uY3N2XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gPlxuICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJpbmhlcml0XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgYXJxdWl2by5jc3ZcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgaXRlbSA+XG4gICAgICAgICAgICA8TGluayB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cImluaGVyaXRcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICBhcnF1aXZvLmNzdlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8R3JpZCBpdGVtID5cbiAgICAgICAgICAgIDxMaW5rIHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIGFycXVpdm8uY3N2XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0gPlxuICAgICAgICAgICAgPExpbmsgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJpbmhlcml0XCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgYXJxdWl2by5jc3ZcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHNpemU9XCJtZWRpdW1cIj5cbiAgICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHtcbiAgR3JpZCxcbiAgbWFrZVN0eWxlcyxcbiAgVGV4dEZpZWxkLFxuICBUeXBvZ3JhcGh5LFxuICBUaGVtZVByb3ZpZGVyLFxuICBTZWxlY3QsXG4gIE1lbnVJdGVtLFxuICBGb3JtQ29udHJvbCxcbiAgSW5wdXRMYWJlbCxcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uLy4uL3RoZW1lXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICBpbnB1dDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gIH0sXG4gIHJlc3VsdDoge1xuICAgIFwiJiBzcGFuXCI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIH0sXG4gIH0sXG4gIGJveDoge1xuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZhbG9yZXMoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVubVwiPlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc2RpcmVjdGlvbj1cInJvd1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9PlxuICAgICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0geHM9ezR9PlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9XG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQZXLDrW9kb1wiXG4gICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgID48L1RleHRGaWVsZD5cbiAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fSB4cz17NH0+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm1Db250cm9sfT5cbiAgICAgICAgICAgICAgPElucHV0TGFiZWxcbiAgICAgICAgICAgICAgICBpZD1cInByb2R1Y3QtaWQtbGFiZWxcIlxuICAgICAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByb2R1dG9cbiAgICAgICAgICAgICAgPC9JbnB1dExhYmVsPlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cInByb2R1Y3QtaWQtbGFiZWxcIlxuICAgICAgICAgICAgICAgIGlkPVwicHJvZHVjdElkXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt9XG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9e31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17MX0+UHJvZHV0byAxPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9ezJ9PlByb2R1dG8gMjwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXszfT5Qcm9kdXRvIDM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciB4cz1cIjdcIiBjbGFzc05hbWU9e2NsYXNzZXMucmVzdWx0fT5cbiAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxzcGFuPlJlc3VsdGFkbzo8L3NwYW4+IF9fX19fX19cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIG1haW46IFwiIzEyN0U3MVwiLFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICBtYWluOiBcIiMwMDUxNTFcIixcbiAgICB9LFxuICB9LFxuICB0eXBvZ3JhcGh5OiB7XG4gICAgZm9udEZhbWlseTogW1xuICAgICAgXCItYXBwbGUtc3lzdGVtXCIsXG4gICAgICBcIkJsaW5rTWFjU3lzdGVtRm9udFwiLFxuICAgICAgXCJTZWdvZSBVSVwiLFxuICAgICAgXCJSb2JvdG9cIixcbiAgICAgIFwiT3h5Z2VuXCIsXG4gICAgICBcIlVidW50dVwiLFxuICAgICAgXCJDYW50YXJlbGxcIixcbiAgICAgIFwiRmlyYSBTYW5zXCIsXG4gICAgICBcIkRyb2lkIFNhbnNcIixcbiAgICAgIFwiSGVsdmV0aWNhIE5ldWVcIixcbiAgICBdLmpvaW4oXCIsXCIpLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9