module.exports = /******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require("../ssr-module-cache.js"); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function (exports) {
    /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: "Module",
      });
      /******/
    }
    /******/ Object.defineProperty(exports, "__esModule", { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function (
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === "object" &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, "default", {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__(
    (__webpack_require__.s = "./pages/index.js")
  );
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ "./pages/_app.js":
      /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return MyApp;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! prop-types */ "prop-types"
        );
        /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! next/head */ "next/head"
        );
        /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          next_head__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material-ui/core/styles */ "@material-ui/core/styles"
        );
        /* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline"
        );
        /* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../src/theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\pages\\_app.js";

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly)
              symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            keys.push.apply(keys, symbols);
          }
          return keys;
        }

        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(
                target,
                Object.getOwnPropertyDescriptors(source)
              );
            } else {
              ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(
                  target,
                  key,
                  Object.getOwnPropertyDescriptor(source, key)
                );
              });
            }
          }
          return target;
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function MyApp(props) {
          const { Component, pageProps } = props;
          react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector("#jss-server-side");

            if (jssStyles) {
              jssStyles.parentElement.removeChild(jssStyles);
            }
          }, []);
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            {
              children: [
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  next_head__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        "title",
                        {
                          children: "DataFeso",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 22,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        "meta",
                        {
                          name: "viewport",
                          content:
                            "minimum-scale=1, initial-scale=1, width=device-width",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 23,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 7,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[
                    "ThemeProvider"
                  ],
                  {
                    theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a,
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 27,
                          columnNumber: 9,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        Component,
                        _objectSpread({}, pageProps),
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 28,
                          columnNumber: 9,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 7,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 5,
            },
            this
          );
        }
        MyApp.propTypes = {
          Component:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType
              .isRequired,
          pageProps:
            prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
        };

        /***/
      },

    /***/ "./pages/index.js":
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return App;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-jsx/style */ "styled-jsx/style"
        );
        /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../src/components/Header */ "./src/components/Header.js"
        );
        /* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../src/components/Footer */ "./src/components/Footer.js"
        );
        /* harmony import */ var _src_components_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../src/components/Login */ "./src/components/Login.js"
        );
        /* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @material-ui/core/Typography */ "@material-ui/core/Typography"
        );
        /* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @material-ui/core/Grid */ "@material-ui/core/Grid"
        );
        /* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @material-ui/core/styles */ "@material-ui/core/styles"
        );
        /* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_8__
        );
        /* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ../src/theme */ "./src/theme.js"
        );
        /* harmony import */ var _src_components_home_page_ProjectFilters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ../src/components/home_page/ProjectFilters */ "./src/components/home_page/ProjectFilters.js"
        );
        /* harmony import */ var _src_components_home_page_ProjectList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ../src/components/home_page/ProjectList */ "./src/components/home_page/ProjectList.js"
        );
        /* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./_app */ "./pages/_app.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\pages\\index.js";

        const useStyles = Object(
          _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"]
        )({
          root: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          },
          title: {
            padding: _src_theme__WEBPACK_IMPORTED_MODULE_9__["default"].spacing(
              2
            ),
            paddingLeft: _src_theme__WEBPACK_IMPORTED_MODULE_9__[
              "default"
            ].spacing(3),
          },
        });
        function App() {
          const classes = useStyles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            _material_ui_core__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"],
            {
              theme: _src_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
              children: [
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "jsx-3821464292" + " " + (classes.root || ""),
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        _src_components_Header__WEBPACK_IMPORTED_MODULE_2__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 16,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        "main",
                        {
                          className: "jsx-3821464292",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                              "jsxDEV"
                            ]
                          )(
                            _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
                            {
                              container: true,
                              direction: "column",
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
                                  {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a,
                                      {
                                        variant: "h4",
                                        color: "primary",
                                        className: classes.title,
                                        children: "Projetos e Pesquisas",
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 38,
                                        columnNumber: 29,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 37,
                                    columnNumber: 25,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
                                  {
                                    container: true,
                                    direction: "row",
                                    children: [
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
                                        {
                                          item: true,
                                          xs: 10,
                                          padding: "spacing(3)",
                                          children: /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                              "jsxDEV"
                                            ]
                                          )(
                                            _src_components_home_page_ProjectList__WEBPACK_IMPORTED_MODULE_11__[
                                              "default"
                                            ],
                                            {},
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 42,
                                              columnNumber: 33,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        false,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 41,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                      /*#__PURE__*/ Object(
                                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                          "jsxDEV"
                                        ]
                                      )(
                                        _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a,
                                        {
                                          item: true,
                                          xs: 2,
                                          children: [
                                            /*#__PURE__*/ Object(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                "jsxDEV"
                                              ]
                                            )(
                                              _src_components_Login__WEBPACK_IMPORTED_MODULE_4__[
                                                "default"
                                              ],
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 46,
                                                columnNumber: 33,
                                              },
                                              this
                                            ),
                                            /*#__PURE__*/ Object(
                                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                "jsxDEV"
                                              ]
                                            )(
                                              _src_components_home_page_ProjectFilters__WEBPACK_IMPORTED_MODULE_10__[
                                                "default"
                                              ],
                                              {},
                                              void 0,
                                              false,
                                              {
                                                fileName: _jsxFileName,
                                                lineNumber: 47,
                                                columnNumber: 33,
                                              },
                                              this
                                            ),
                                          ],
                                        },
                                        void 0,
                                        true,
                                        {
                                          fileName: _jsxFileName,
                                          lineNumber: 45,
                                          columnNumber: 29,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 40,
                                    columnNumber: 25,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 36,
                              columnNumber: 21,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 35,
                          columnNumber: 17,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        _src_components_Footer__WEBPACK_IMPORTED_MODULE_3__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 17,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 33,
                    columnNumber: 13,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a,
                  {
                    id: "3821464292",
                    children:
                      "body{margin:0px;padding:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxOdXZlbVxcRWR1Y2FjYW9cXFByb2dyYW1hY2FvXFxQcm9qZXRvc1xcZGF0YWZlc29cXHdlYlxccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNEK0IsQUFHZ0MsV0FDQyxZQUNoQiIsImZpbGUiOiJEOlxcTnV2ZW1cXEVkdWNhY2FvXFxQcm9ncmFtYWNhb1xcUHJvamV0b3NcXGRhdGFmZXNvXFx3ZWJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IEFwcExvZ2luIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0xvZ2luJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7VGhlbWVQcm92aWRlcn0gZnJvbSAgJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XHJcbmltcG9ydCBQcm9qZWN0RmlsdGVycyBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9ob21lX3BhZ2UvUHJvamVjdEZpbHRlcnMnO1xyXG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvaG9tZV9wYWdlL1Byb2plY3RMaXN0JztcclxuaW1wb3J0IE15QXBwIGZyb20gJy4vX2FwcCdcclxuXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6e1xyXG4gICAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6dGhlbWUuc3BhY2luZygzKVxyXG4gICAgfSxcclxuICAgIFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpe1xyXG5cclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfSA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICAgICA8SGVhZGVyLz5cclxuICAgICAgICAgICAgICAgIDxtYWluID5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdjb2x1bW4nID4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNCcgY29sb3I9J3ByaW1hcnknIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+UHJvamV0b3MgZSBQZXNxdWlzYXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0gcGFkZGluZz0nc3BhY2luZygzKSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RMaXN0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBcHBMb2dpbi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RGaWx0ZXJzLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgICAgIDxGb290ZXIvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj4gXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Nuvem\\\\Educacao\\\\Programacao\\\\Projetos\\\\datafeso\\\\web\\\\pages\\\\index.js */",
                  },
                  void 0,
                  false,
                  void 0,
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 9,
            },
            this
          );
        }

        /***/
      },

    /***/ "./src/components/Footer.js":
      /*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Footer;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\Footer.js";

        const styles = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
        )({
          footer: {
            padding: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(2),
            marginTop: "auto",
            backgroundColor:
              _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.grey[
                "900"
              ],
          },
        });
        function Footer() {
          const classes = styles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"],
            {
              theme: _theme__WEBPACK_IMPORTED_MODULE_2__["default"],
              children: /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
              )(
                "footer",
                {
                  className: classes.footer,
                  children: /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"],
                    {
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"],
                        {
                          container: true,
                          alignItems: "center",
                          direction: "column",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                              "jsxDEV"
                            ]
                          )(
                            _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                              "Grid"
                            ],
                            {
                              item: true,
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                  "jsxDEV"
                                ]
                              )(
                                "img",
                                {
                                  src:
                                    "http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png",
                                  height: 60,
                                  alt: "Logo da UNIFESO",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 21,
                                  columnNumber: 33,
                                },
                                this
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 20,
                              columnNumber: 29,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                          columnNumber: 25,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 21,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 17,
                  columnNumber: 17,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 13,
            },
            this
          );
        }

        /***/
      },

    /***/ "./src/components/Header.js":
      /*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return Header;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material-ui/core/AppBar */ "@material-ui/core/AppBar"
        );
        /* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\Header.js";

        const useStyles = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"]
        )({
          title: {
            fontWeight: "bold",
          },
          header: {
            padding: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(3),
            alignItems: "center",
            alignContent: "center",
          },
        });
        function Header() {
          const classes = useStyles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"],
            {
              theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
              children: /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
              )(
                _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a,
                {
                  position: "static",
                  className: classes.header,
                  elevation: "0",
                  children: /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"],
                    {
                      container: true,
                      direction: "row",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            item: true,
                            xs: 3,
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              "img",
                              {
                                src:
                                  "http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png",
                                height: 60,
                                alt: "Logo da UNIFESO",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 25,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 24,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                                "Typography"
                              ],
                              {
                                variant: "h3",
                                align: "center",
                                className: classes.title,
                                children: "DataFeso",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 28,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 27,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            item: true,
                            xs: 3,
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                                "Button"
                              ],
                              {
                                href: "/",
                                color: "inherit",
                                children: "Tela Princial",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 31,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 30,
                            columnNumber: 25,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 21,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 22,
                  columnNumber: 13,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 9,
            },
            this
          );
        }

        /***/
      },

    /***/ "./src/components/Login.js":
      /*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return AppLogin;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @material-ui/core/TextField */ "@material-ui/core/TextField"
        );
        /* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\Login.js";

        const useStyles = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["makeStyles"]
        )({
          root: {
            paddingRight: _theme__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ].spacing(2),
            minWidth: "240px",
          },
          box: {
            backgroundColor: "#eeeeee",
            borderRadius: "5px",
            padding: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(2),
            marginBottom: _theme__WEBPACK_IMPORTED_MODULE_4__[
              "default"
            ].spacing(1),
            marginRight: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(
              2
            ),
          },
          input: {
            margin: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].spacing(1),
            color: "#FFFFFF",
          },
          button: {
            color: "#FFFFFF",
            backgroundColor:
              _theme__WEBPACK_IMPORTED_MODULE_4__["default"].palette.primary
                .main,
          },
        });
        function AppLogin() {
          const classes = useStyles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            "div",
            {
              className: classes.root,
              children: /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
              )(
                _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"],
                {
                  theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
                  children: /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"],
                    {
                      container: true,
                      className: classes.box,
                      direction: "column",
                      alignItems: "center",
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            item: true,
                            xs: "12",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                                "Typography"
                              ],
                              {
                                variant: "h6",
                                color: "primary",
                                align: "center",
                                children: "\xC1rea do Pesquisador",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 36,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 35,
                            columnNumber: 21,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a,
                              {
                                className: classes.input,
                                size: "small",
                                InputLabelProps: {
                                  shrink: true,
                                },
                                color: "inherit",
                                label: "Usu\xE1rio",
                                variant: "outlined",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 39,
                                columnNumber: 25,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 38,
                            columnNumber: 21,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2___default.a,
                              {
                                type: "password",
                                className: classes.input,
                                size: "small",
                                InputLabelProps: {
                                  shrink: true,
                                },
                                color: "inherit",
                                label: "Senha",
                                variant: "outlined",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 42,
                                columnNumber: 25,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 41,
                            columnNumber: 21,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_3__[
                                "Button"
                              ],
                              {
                                className: classes.button,
                                href: "#",
                                color: "secundary",
                                children: "Login",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 45,
                                columnNumber: 25,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                            columnNumber: 21,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 34,
                      columnNumber: 17,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 13,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 9,
            },
            this
          );
        }

        /***/
      },

    /***/ "./src/components/home_page/ProjectCard.js":
      /*!*************************************************!*\
  !*** ./src/components/home_page/ProjectCard.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return ProjectCard;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\home_page\\ProjectCard.js";

        const useStyles = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
        )({
          root: {
            maxWidth: 345,
            margin: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].spacing(1),
          },
          title: {
            color:
              _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary
                .main,
          },
          text: {
            fontWeight: "bold",
            "& span": {
              color:
                _theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary
                  .main,
            },
          },
        });
        function ProjectCard() {
          const classes = useStyles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"],
            {
              className: classes.root,
              children: [
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                    "CardActionArea"
                  ],
                  {
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                          "CardMedia"
                        ],
                        {
                          component: "img",
                          alt: "Descri\xE7ao da Imagem",
                          height: "120",
                          image:
                            "https://entrepreneurhandbook.co.uk/wp-content/uploads/2014/11/Summary-of-quantative-research-report.jpg",
                          title: "Contemplative Reptile",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 25,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                          "jsxDEV"
                        ]
                      )(
                        _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                          "CardContent"
                        ],
                        {
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Typography"
                              ],
                              {
                                className: classes.title,
                                gutterBottom: true,
                                variant: "h6",
                                component: "h2",
                                children: "T\xEDtulo da Pesquisa",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 33,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Typography"
                              ],
                              {
                                variant: "body2",
                                className: classes.text,
                                color: "textSecondary",
                                component: "p",
                                children:
                                  "Descri\xE7ao breve da pesquisa, objetivos e resutados esperados.",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 36,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {},
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 39,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Typography"
                              ],
                              {
                                variant: "body2",
                                className: classes.text,
                                color: "textSecondary",
                                component: "p",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "span",
                                    {
                                      children: "Autor:",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 41,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  " Thales Azevedo",
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 40,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Typography"
                              ],
                              {
                                variant: "body2",
                                className: classes.text,
                                color: "textSecondary",
                                component: "p",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "span",
                                    {
                                      children: "N de Arquivos:",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 44,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                                  " 10",
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 43,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Typography"
                              ],
                              {
                                variant: "body2",
                                className: classes.text,
                                color: "textSecondary",
                                component: "p",
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    "span",
                                    {
                                      children: "\xDAltima Atualiza\xE7\xE3o:",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 47,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  " 12/12/2020",
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 46,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 32,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 9,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CardActions"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"],
                      {
                        size: "small",
                        color: "primary",
                        href: "/project",
                        children: "Conhecer Pesquisa",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 9,
            },
            this
          ); // <CardWarp>
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
        }

        /***/
      },

    /***/ "./src/components/home_page/ProjectFilters.js":
      /*!****************************************************!*\
  !*** ./src/components/home_page/ProjectFilters.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return ProjectFilters;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\home_page\\ProjectFilters.js";

        const useStyles = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
        )({
          root: {
            paddingRight: _theme__WEBPACK_IMPORTED_MODULE_3__[
              "default"
            ].spacing(2),
            minWidth: "240px",
          },
          box: {
            backgroundColor: "#eeeeee",
            borderRadius: "5px",
            padding: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(2),
          },
          input: {
            margin: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(1),
          },
          button: {
            margin: _theme__WEBPACK_IMPORTED_MODULE_3__["default"].spacing(2),
            color: "#FFFFFF",
            backgroundColor:
              _theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary
                .main,
          },
        });
        function ProjectFilters() {
          const classes = useStyles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            "div",
            {
              className: classes.root,
              children: /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
              )(
                _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"],
                {
                  children: /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                  )(
                    _material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"],
                    {
                      container: true,
                      direction: "column",
                      justify: "center",
                      alignItems: "center",
                      className: classes.box,
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            item: true,
                            xs: "12",
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Typography"
                              ],
                              {
                                variant: "h6",
                                color: "primary",
                                align: "center",
                                children: "Filtrar Pesquisa",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 34,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 33,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            item: true,
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "TextField"
                              ],
                              {
                                variant: "outlined",
                                size: "small",
                                label: "ID",
                                className: classes.input,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 37,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 36,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "TextField"
                              ],
                              {
                                variant: "outlined",
                                size: "small",
                                label: "Curso",
                                className: classes.input,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 40,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "TextField"
                              ],
                              {
                                variant: "outlined",
                                size: "small",
                                label: "Setor",
                                className: classes.input,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 43,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 42,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "TextField"
                              ],
                              {
                                variant: "outlined",
                                size: "small",
                                label: "Data In\xEDcio",
                                type: "date",
                                InputLabelProps: {
                                  shrink: true,
                                },
                                className: classes.input,
                                placeholder: "",
                                children: "Name",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 46,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 45,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "TextField"
                              ],
                              {
                                variant: "outlined",
                                size: "small",
                                label: "Data Fim",
                                type: "date",
                                InputLabelProps: {
                                  shrink: true,
                                },
                                className: classes.input,
                                placeholder: "",
                                children: "Name",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 49,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 48,
                            columnNumber: 25,
                          },
                          this
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            "jsxDEV"
                          ]
                        )(
                          _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                            "Grid"
                          ],
                          {
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                "jsxDEV"
                              ]
                            )(
                              _material_ui_core__WEBPACK_IMPORTED_MODULE_1__[
                                "Button"
                              ],
                              {
                                className: classes.button,
                                size: "large",
                                children: "Filtrar",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 52,
                                columnNumber: 29,
                              },
                              this
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 51,
                            columnNumber: 25,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 21,
                    },
                    this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 31,
                  columnNumber: 18,
                },
                this
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 13,
            },
            this
          );
        }

        /***/
      },

    /***/ "./src/components/home_page/ProjectList.js":
      /*!*************************************************!*\
  !*** ./src/components/home_page/ProjectList.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "default",
          function () {
            return ProjectList;
          }
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
        );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "react"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./ProjectCard */ "./src/components/home_page/ProjectCard.js"
        );
        /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../styles */ "./src/components/styles.js"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../theme */ "./src/theme.js"
        );

        var _jsxFileName =
          "D:\\Nuvem\\Educacao\\Programacao\\Projetos\\datafeso\\web\\src\\components\\home_page\\ProjectList.js";

        const useStyles = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"]
        )({
          root: {
            padding: _theme__WEBPACK_IMPORTED_MODULE_5__["default"].spacing(3),
          },
        });
        function ProjectList() {
          const classes = useStyles();
          return /*#__PURE__*/ Object(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
          )(
            _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"],
            {
              container: true,
              direction: "row",
              className: classes.root,
              children: [
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      _ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 17,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 13,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      _ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 22,
                        columnNumber: 17,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 21,
                    columnNumber: 13,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      _ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 25,
                        columnNumber: 17,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 13,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      _ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 17,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 13,
                  },
                  this
                ),
                /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"]
                )(
                  _material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                        "jsxDEV"
                      ]
                    )(
                      _ProjectCard__WEBPACK_IMPORTED_MODULE_2__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 17,
                      },
                      this
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 13,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 9,
            },
            this
          );
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

        /***/
      },

    /***/ "./src/components/styles.js":
      /*!**********************************!*\
  !*** ./src/components/styles.js ***!
  \**********************************/
      /*! exports provided: GlobalStyle, Warpper, HeaderWrap, FooterWrap, LoginWrap, ContentWrap, ProjectsWarp, ProjectFilterWrap, CardWarp, CardHeader, CardDescription, ProjectContentWarp */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "GlobalStyle",
          function () {
            return GlobalStyle;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Warpper",
          function () {
            return Warpper;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "HeaderWrap",
          function () {
            return HeaderWrap;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "FooterWrap",
          function () {
            return FooterWrap;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginWrap",
          function () {
            return LoginWrap;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ContentWrap",
          function () {
            return ContentWrap;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProjectsWarp",
          function () {
            return ProjectsWarp;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProjectFilterWrap",
          function () {
            return ProjectFilterWrap;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CardWarp",
          function () {
            return CardWarp;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CardHeader",
          function () {
            return CardHeader;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CardDescription",
          function () {
            return CardDescription;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ProjectContentWarp",
          function () {
            return ProjectContentWarp;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "styled-components"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__
        );

        const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "createGlobalStyle"
        ]`
    *{
        padding:0;
        margin:0; 
        border:0;
        font-family: 'Roboto', sans-serif;
    }
`;
        const Warpper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a
          .div`
    display:flex;
    height:100vh;
    flex-direction: column;
    justify-content: space-between;
    h1{
        padding-left:30px;
        padding-top:30px;
        color:#005151;
    }
`;
        const HeaderWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`

 display: flex;
 align-items: center;
 justify-content: space-around;
 background-color: #127E71;
 width:100vmax;
 padding: 30px; 
 
 h1{
     color:#fff;
     font-size:20;
     font-weight:bold;
     padding:0; 
 }
 img{
     max-width:220px;
 }
`;
        const FooterWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
 display:flex;
 justify-content:center;
 align-items:center;
 width:100vmax;
 padding:20px;
 background-color: #212121;
 h1{
     color:#fff;
 }
 img{
     max-width:200px;
     height: 50px;
 }

`;
        const LoginWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    color: #FFF;
    font-size:12px;
    border-radius:5px;

    h2{
        font-size:18px;
        font-weight:300;
    }
    form{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        
        label{
            margin-top:10px;
        }
        input{
            height:25px;
            width:auto;
        }

        button{
            margin: 10px;
            padding: 10px;
            width:150px;
            color: #FFF;
            background-color:#005151; 
            border:none;
        }
    }
`;
        const ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
display:flex;
align-items:flex-start;
flex-grow:5;

`;
        const ProjectsWarp = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`

display:flex;
padding: 20px;
flex-wrap:wrap;

`;
        const ProjectFilterWrap = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
    background-color:#005151;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:50px;
    color: #FFF;
    font-size:12px;
    border-radius:5px;
    margin:30px;

    h2{
        font-size:18px;
        font-weight:300;
    }
    form{
        display:flex;
        flex-direction:column;
        
        label{
            margin-top:10px;
        }
        input{
            height:25px;
            width:auto;
        }

        button{
            margin: 10px;
            padding: 10px;
            width:170px;
            color: #FFF;
            background-color:#127E71;
            border:none;
            
        }
    }

`;
        const CardWarp = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
    background-color: #e5e5e5;
    color: #666;
    border-radius: 5px;
    margin:10px;
    width:350px;
    overflow:hidden;
    font-size:14px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);

    span{
            font-weight:bold;
        }
    *{
        margin:0px;
        padding:2px;
}
`;
        const CardHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
    padding: 15px;
    height: auto;
    width:auto;
    display:flex;
    flex-direction:column;

    background-color:#127E71; 
    color: #fff;
    p{
        font-size:12px;
    }
`;
        const CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
    padding:15px;
    background-color:#e5e5e5;
`;
        const ProjectContentWarp = styled_components__WEBPACK_IMPORTED_MODULE_0___default
          .a.div`
flex-grow:4;
`;

        /***/
      },

    /***/ "./src/theme.js":
      /*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @material-ui/core */ "@material-ui/core"
        );
        /* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_0__
        );

        const theme = Object(
          _material_ui_core__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"]
        )({
          palette: {
            primary: {
              main: "#127E71",
            },
            secondary: {
              main: "#005151",
            },
          },
          typography: {
            fontFamily: [
              "-apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Oxygen",
              "Ubuntu",
              "Cantarell",
              "Fira Sans",
              "Droid Sans",
              "Helvetica Neue",
            ].join(","),
          },
        });
        /* harmony default export */ __webpack_exports__["default"] = theme;

        /***/
      },

    /***/ "@material-ui/core":
      /*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core");

        /***/
      },

    /***/ "@material-ui/core/AppBar":
      /*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core/AppBar");

        /***/
      },

    /***/ "@material-ui/core/CssBaseline":
      /*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core/CssBaseline");

        /***/
      },

    /***/ "@material-ui/core/Grid":
      /*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core/Grid");

        /***/
      },

    /***/ "@material-ui/core/TextField":
      /*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core/TextField");

        /***/
      },

    /***/ "@material-ui/core/Typography":
      /*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core/Typography");

        /***/
      },

    /***/ "@material-ui/core/styles":
      /*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("@material-ui/core/styles");

        /***/
      },

    /***/ "next/head":
      /*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("next/head");

        /***/
      },

    /***/ "prop-types":
      /*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("prop-types");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react");

        /***/
      },

    /***/ "react/jsx-dev-runtime":
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("react/jsx-dev-runtime");

        /***/
      },

    /***/ "styled-components":
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("styled-components");

        /***/
      },

    /***/ "styled-jsx/style":
      /*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = require("styled-jsx/style");

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hvbWVfcGFnZS9Qcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ob21lX3BhZ2UvUHJvamVjdEZpbHRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaG9tZV9wYWdlL1Byb2plY3RMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwidGl0bGUiLCJwYWRkaW5nIiwic3BhY2luZyIsInBhZGRpbmdMZWZ0IiwiQXBwIiwiY2xhc3NlcyIsInN0eWxlcyIsImZvb3RlciIsIm1hcmdpblRvcCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJncmV5IiwiRm9vdGVyIiwiZm9udFdlaWdodCIsImhlYWRlciIsImFsaWduSXRlbXMiLCJhbGlnbkNvbnRlbnQiLCJIZWFkZXIiLCJwYWRkaW5nUmlnaHQiLCJtaW5XaWR0aCIsImJveCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsIm1hcmdpblJpZ2h0IiwiaW5wdXQiLCJtYXJnaW4iLCJjb2xvciIsImJ1dHRvbiIsInByaW1hcnkiLCJtYWluIiwiQXBwTG9naW4iLCJzaHJpbmsiLCJtYXhXaWR0aCIsInRleHQiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RGaWx0ZXJzIiwiUHJvamVjdExpc3QiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiV2FycHBlciIsInN0eWxlZCIsImRpdiIsIkhlYWRlcldyYXAiLCJGb290ZXJXcmFwIiwiTG9naW5XcmFwIiwiQ29udGVudFdyYXAiLCJQcm9qZWN0c1dhcnAiLCJQcm9qZWN0RmlsdGVyV3JhcCIsIkNhcmRXYXJwIiwiQ2FyZEhlYWRlciIsIkNhcmREZXNjcmlwdGlvbiIsIlByb2plY3RDb250ZW50V2FycCIsImNyZWF0ZU11aVRoZW1lIiwic2Vjb25kYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJqb2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNuQyxRQUFNO0FBQUVDLGFBQUY7QUFBYUM7QUFBYixNQUEyQkYsS0FBakM7QUFFQUcsOENBQUssQ0FBQ0MsU0FBTixDQUFnQixNQUFNO0FBQ3BCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEO0FBQ0YsR0FORCxFQU1HLEVBTkg7QUFRQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRSxxRUFBQyxzRUFBRDtBQUFlLFdBQUssRUFBRUssa0RBQXRCO0FBQUEsOEJBRUUscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0UscUVBQUMsU0FBRCxvQkFBZVIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtBQUVESCxLQUFLLENBQUNZLFNBQU4sR0FBa0I7QUFDaEJWLFdBQVMsRUFBRVcsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEakI7QUFFaEJaLFdBQVMsRUFBRVUsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFGWixDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1FLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFdBQU8sRUFBRSxNQURQO0FBRUZDLGlCQUFhLEVBQUUsUUFGYjtBQUdGQyxhQUFTLEVBQUU7QUFIVCxHQURtQjtBQU16QkMsT0FBSyxFQUFDO0FBQ0ZDLFdBQU8sRUFBRWIsa0RBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQsQ0FEUDtBQUVGQyxlQUFXLEVBQUNmLGtEQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkO0FBRlY7QUFObUIsQ0FBRCxDQUE1QjtBQWFlLFNBQVNFLEdBQVQsR0FBYztBQUV6QixRQUFNQyxPQUFPLEdBQUdYLFNBQVMsRUFBekI7QUFDQSxzQkFFSSxxRUFBQywrREFBRDtBQUFlLFNBQUssRUFBRU4sa0RBQXRCO0FBQUEsNEJBQ0k7QUFBQSwyQ0FBZ0JpQixPQUFPLENBQUNULElBQXhCO0FBQUEsOEJBQ0cscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURILGVBRUk7QUFBQTtBQUFBLCtCQUNJLHFFQUFDLDZEQUFEO0FBQU0sbUJBQVMsTUFBZjtBQUFnQixtQkFBUyxFQUFDLFFBQTFCO0FBQUEsa0NBQ0kscUVBQUMsNkRBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQVcsY0FBRSxFQUFFLEVBQWY7QUFBQSxtQ0FDSSxxRUFBQyxtRUFBRDtBQUFZLHFCQUFPLEVBQUMsSUFBcEI7QUFBeUIsbUJBQUssRUFBQyxTQUEvQjtBQUF5Qyx1QkFBUyxFQUFFUyxPQUFPLENBQUNMLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJLHFFQUFDLDZEQUFEO0FBQU0scUJBQVMsTUFBZjtBQUFnQixxQkFBUyxFQUFDLEtBQTFCO0FBQUEsb0NBQ0kscUVBQUMsNkRBQUQ7QUFBTSxrQkFBSSxNQUFWO0FBQVcsZ0JBQUUsRUFBRSxFQUFmO0FBQW1CLHFCQUFPLEVBQUMsWUFBM0I7QUFBQSxxQ0FDSSxxRUFBQyw4RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUtJLHFFQUFDLDZEQUFEO0FBQU0sa0JBQUksTUFBVjtBQUFXLGdCQUFFLEVBQUUsQ0FBZjtBQUFBLHNDQUNJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyxpRkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBbUJJLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFtQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVEO0FBQ0E7QUFFQSxNQUFNTSxNQUFNLEdBQUdYLG9FQUFVLENBQUM7QUFDdEJZLFFBQU0sRUFBRTtBQUNKTixXQUFPLEVBQUViLDhDQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFSk0sYUFBUyxFQUFFLE1BRlA7QUFHSkMsbUJBQWUsRUFBRXJCLDhDQUFLLENBQUNzQixPQUFOLENBQWNDLElBQWQsQ0FBbUIsS0FBbkI7QUFIYjtBQURjLENBQUQsQ0FBekI7QUFRZSxTQUFTQyxNQUFULEdBQWtCO0FBQzdCLFFBQU1QLE9BQU8sR0FBR0MsTUFBTSxFQUF0QjtBQUVJLHNCQUNJLHFFQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFFbEIsOENBQXRCO0FBQUEsMkJBQ0k7QUFBUSxlQUFTLEVBQUVpQixPQUFPLENBQUNFLE1BQTNCO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQ7QUFBQSwrQkFDSSxxRUFBQyxzREFBRDtBQUFNLG1CQUFTLE1BQWY7QUFBZ0Isb0JBQVUsRUFBRSxRQUE1QjtBQUFzQyxtQkFBUyxFQUFFLFFBQWpEO0FBQUEsaUNBQ0kscUVBQUMsc0RBQUQ7QUFBTSxnQkFBSSxNQUFWO0FBQUEsbUNBQ0k7QUFBSyxpQkFBRyxFQUFFLDBEQUFWO0FBQXNFLG9CQUFNLEVBQUUsRUFBOUU7QUFBa0YsaUJBQUcsRUFBRTtBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Qkw7QUFDQTtBQUNBO0FBRUE7QUFFQSxNQUFNYixTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJLLE9BQUssRUFBQztBQUNGYSxjQUFVLEVBQUM7QUFEVCxHQURtQjtBQUl6QkMsUUFBTSxFQUFDO0FBQ0hiLFdBQU8sRUFBQ2IsOENBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQsQ0FETDtBQUVIYSxjQUFVLEVBQUUsUUFGVDtBQUdIQyxnQkFBWSxFQUFFO0FBSFg7QUFKa0IsQ0FBRCxDQUE1QjtBQVdlLFNBQVNDLE1BQVQsR0FBa0I7QUFDN0IsUUFBTVosT0FBTyxHQUFDWCxTQUFTLEVBQXZCO0FBQ0Esc0JBQ0kscUVBQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVOLDhDQUF0QjtBQUFBLDJCQUNJLHFFQUFDLCtEQUFEO0FBQVEsY0FBUSxFQUFDLFFBQWpCO0FBQTBCLGVBQVMsRUFBRWlCLE9BQU8sQ0FBQ1MsTUFBN0M7QUFBcUQsZUFBUyxFQUFDLEdBQS9EO0FBQUEsNkJBQ1EscUVBQUMsc0RBQUQ7QUFBTSxpQkFBUyxNQUFmO0FBQWdCLGlCQUFTLEVBQUMsS0FBMUI7QUFBQSxnQ0FDSSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0k7QUFBSyxlQUFHLEVBQUUsMERBQVY7QUFBc0Usa0JBQU0sRUFBRSxFQUE5RTtBQUFrRixlQUFHLEVBQUU7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0kscUVBQUMsNERBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFLLEVBQUMsUUFBL0I7QUFBd0MscUJBQVMsRUFBRVQsT0FBTyxDQUFDTCxLQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkosZUFPSSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBRSxDQUFmO0FBQUEsaUNBQ0kscUVBQUMsd0RBQUQ7QUFBUSxnQkFBSSxFQUFDLEdBQWI7QUFBaUIsaUJBQUssRUFBQyxTQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWlCSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTU4sU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUM7QUFDRHNCLGdCQUFZLEVBQUM5Qiw4Q0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZCxDQURaO0FBRURpQixZQUFRLEVBQUM7QUFGUixHQURvQjtBQUt6QkMsS0FBRyxFQUFDO0FBQ0FYLG1CQUFlLEVBQUMsU0FEaEI7QUFFQVksZ0JBQVksRUFBRSxLQUZkO0FBR0FwQixXQUFPLEVBQUNiLDhDQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBSFI7QUFJQW9CLGdCQUFZLEVBQUNsQyw4Q0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZCxDQUpiO0FBS0FxQixlQUFXLEVBQUNuQyw4Q0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZDtBQUxaLEdBTHFCO0FBWXpCc0IsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRXJDLDhDQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFSHdCLFNBQUssRUFBQztBQUZILEdBWmtCO0FBZ0J6QkMsUUFBTSxFQUFFO0FBQ0pELFNBQUssRUFBQyxTQURGO0FBRUpqQixtQkFBZSxFQUFDckIsOENBQUssQ0FBQ3NCLE9BQU4sQ0FBY2tCLE9BQWQsQ0FBc0JDO0FBRmxDO0FBaEJpQixDQUFELENBQTVCO0FBdUJlLFNBQVNDLFFBQVQsR0FBbUI7QUFDOUIsUUFBTXpCLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFFVyxPQUFPLENBQUNULElBQXhCO0FBQUEsMkJBQ0kscUVBQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUVSLDhDQUF0QjtBQUFBLDZCQUNJLHFFQUFDLHNEQUFEO0FBQU0saUJBQVMsTUFBZjtBQUFnQixpQkFBUyxFQUFFaUIsT0FBTyxDQUFDZSxHQUFuQztBQUF3QyxpQkFBUyxFQUFDLFFBQWxEO0FBQTJELGtCQUFVLEVBQUMsUUFBdEU7QUFBQSxnQ0FDSSxxRUFBQyxzREFBRDtBQUFNLGNBQUksTUFBVjtBQUFXLFlBQUUsRUFBQyxJQUFkO0FBQUEsaUNBQ1EscUVBQUMsNERBQUQ7QUFBWSxtQkFBTyxFQUFDLElBQXBCO0FBQXlCLGlCQUFLLEVBQUMsU0FBL0I7QUFBeUMsaUJBQUssRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFJSSxxRUFBQyxzREFBRDtBQUFBLGlDQUNJLHFFQUFDLGtFQUFEO0FBQVkscUJBQVMsRUFBRWYsT0FBTyxDQUFDbUIsS0FBL0I7QUFBcUMsZ0JBQUksRUFBQyxPQUExQztBQUFrRCwyQkFBZSxFQUFFO0FBQUVPLG9CQUFNLEVBQUU7QUFBVixhQUFuRTtBQUFxRixpQkFBSyxFQUFDLFNBQTNGO0FBQXFHLGlCQUFLLEVBQUUsWUFBNUc7QUFBc0gsbUJBQU8sRUFBQztBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQU9JLHFFQUFDLHNEQUFEO0FBQUEsaUNBQ0kscUVBQUMsa0VBQUQ7QUFBWSxnQkFBSSxFQUFDLFVBQWpCO0FBQTRCLHFCQUFTLEVBQUUxQixPQUFPLENBQUNtQixLQUEvQztBQUFzRCxnQkFBSSxFQUFDLE9BQTNEO0FBQW1FLDJCQUFlLEVBQUU7QUFBRU8sb0JBQU0sRUFBRTtBQUFWLGFBQXBGO0FBQXNHLGlCQUFLLEVBQUMsU0FBNUc7QUFBc0gsaUJBQUssRUFBRSxPQUE3SDtBQUFxSSxtQkFBTyxFQUFDO0FBQTdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBKLGVBVUkscUVBQUMsc0RBQUQ7QUFBQSxpQ0FDSSxxRUFBQyx3REFBRDtBQUFRLHFCQUFTLEVBQUUxQixPQUFPLENBQUNzQixNQUEzQjtBQUFtQyxnQkFBSSxFQUFDLEdBQXhDO0FBQTRDLGlCQUFLLEVBQUMsV0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFvQkgsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEREO0FBQ0E7QUFFQSxNQUFNakMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRm9DLFlBQVEsRUFBRSxHQURSO0FBRUZQLFVBQU0sRUFBQ3JDLDhDQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkO0FBRkwsR0FEbUI7QUFLdkJGLE9BQUssRUFBQztBQUNKMEIsU0FBSyxFQUFDdEMsOENBQUssQ0FBQ3NCLE9BQU4sQ0FBY2tCLE9BQWQsQ0FBc0JDO0FBRHhCLEdBTGlCO0FBUXpCSSxNQUFJLEVBQUM7QUFDRHBCLGNBQVUsRUFBQyxNQURWO0FBRUQsY0FBUztBQUNMYSxXQUFLLEVBQUN0Qyw4Q0FBSyxDQUFDc0IsT0FBTixDQUFja0IsT0FBZCxDQUFzQkM7QUFEdkI7QUFGUjtBQVJvQixDQUFELENBQTVCO0FBZ0JlLFNBQVNLLFdBQVQsR0FBdUI7QUFDbEMsUUFBTTdCLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUNBLHNCQUNJLHFFQUFDLHNEQUFEO0FBQU0sYUFBUyxFQUFFVyxPQUFPLENBQUNULElBQXpCO0FBQUEsNEJBQ0EscUVBQUMsZ0VBQUQ7QUFBQSw4QkFDRSxxRUFBQywyREFBRDtBQUNFLGlCQUFTLEVBQUMsS0FEWjtBQUVFLFdBQUcsRUFBQyx3QkFGTjtBQUdFLGNBQU0sRUFBQyxLQUhUO0FBSUUsYUFBSyxFQUFDLHlHQUpSO0FBS0UsYUFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBUUUscUVBQUMsNkRBQUQ7QUFBQSxnQ0FDRSxxRUFBQyw0REFBRDtBQUFZLG1CQUFTLEVBQUVTLE9BQU8sQ0FBQ0wsS0FBL0I7QUFBc0Msc0JBQVksTUFBbEQ7QUFBbUQsaUJBQU8sRUFBQyxJQUEzRDtBQUFnRSxtQkFBUyxFQUFDLElBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUUscUVBQUMsNERBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQTRCLG1CQUFTLEVBQUVLLE9BQU8sQ0FBQzRCLElBQS9DO0FBQXFELGVBQUssRUFBQyxlQUEzRDtBQUEyRSxtQkFBUyxFQUFDLEdBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVFFLHFFQUFDLDREQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUE0QixtQkFBUyxFQUFFNUIsT0FBTyxDQUFDNEIsSUFBL0M7QUFBcUQsZUFBSyxFQUFDLGVBQTNEO0FBQTJFLG1CQUFTLEVBQUMsR0FBckY7QUFBQSxrQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUkYsZUFXRSxxRUFBQyw0REFBRDtBQUFZLGlCQUFPLEVBQUMsT0FBcEI7QUFBNEIsbUJBQVMsRUFBRTVCLE9BQU8sQ0FBQzRCLElBQS9DO0FBQXFELGVBQUssRUFBQyxlQUEzRDtBQUEyRSxtQkFBUyxFQUFDLEdBQXJGO0FBQUEsa0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVhGLGVBY0UscUVBQUMsNERBQUQ7QUFBWSxpQkFBTyxFQUFDLE9BQXBCO0FBQTRCLG1CQUFTLEVBQUU1QixPQUFPLENBQUM0QixJQUEvQztBQUFxRCxlQUFLLEVBQUMsZUFBM0Q7QUFBMkUsbUJBQVMsRUFBQyxHQUFyRjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQTZCQSxxRUFBQyw2REFBRDtBQUFBLDZCQUNFLHFFQUFDLHdEQUFEO0FBQVEsWUFBSSxFQUFDLE9BQWI7QUFBcUIsYUFBSyxFQUFDLFNBQTNCO0FBQXFDLFlBQUksRUFBQyxVQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0F1Q0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERKO0FBb0RILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVEO0FBQ0E7QUFDQTtBQUVBLE1BQU12QyxTQUFTLEdBQUdDLG9FQUFVLENBQUM7QUFDekJDLE1BQUksRUFBQztBQUNEc0IsZ0JBQVksRUFBQzlCLDhDQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBRFo7QUFFRGlCLFlBQVEsRUFBQztBQUZSLEdBRG9CO0FBS3pCQyxLQUFHLEVBQUM7QUFDQVgsbUJBQWUsRUFBQyxTQURoQjtBQUVBWSxnQkFBWSxFQUFFLEtBRmQ7QUFHQXBCLFdBQU8sRUFBQ2IsOENBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQ7QUFIUixHQUxxQjtBQVV6QnNCLE9BQUssRUFBRTtBQUNIQyxVQUFNLEVBQUVyQyw4Q0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZDtBQURMLEdBVmtCO0FBYXpCeUIsUUFBTSxFQUFFO0FBQ0pGLFVBQU0sRUFBRXJDLDhDQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFSndCLFNBQUssRUFBQyxTQUZGO0FBR0pqQixtQkFBZSxFQUFDckIsOENBQUssQ0FBQ3NCLE9BQU4sQ0FBY2tCLE9BQWQsQ0FBc0JDO0FBSGxDO0FBYmlCLENBQUQsQ0FBNUI7QUFxQmdCLFNBQVNNLGNBQVQsR0FBeUI7QUFDcEMsUUFBTTlCLE9BQU8sR0FBR1gsU0FBUyxFQUF6QjtBQUVHLHNCQUNJO0FBQUssYUFBUyxFQUFFVyxPQUFPLENBQUNULElBQXhCO0FBQUEsMkJBQ0sscUVBQUMsK0RBQUQ7QUFBQSw2QkFDRyxxRUFBQyxzREFBRDtBQUFNLGlCQUFTLE1BQWY7QUFBaUIsaUJBQVMsRUFBQyxRQUEzQjtBQUFvQyxlQUFPLEVBQUMsUUFBNUM7QUFBcUQsa0JBQVUsRUFBQyxRQUFoRTtBQUF5RSxpQkFBUyxFQUFFUyxPQUFPLENBQUNlLEdBQTVGO0FBQUEsZ0NBQ0kscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUMsSUFBZDtBQUFBLGlDQUNJLHFFQUFDLDREQUFEO0FBQVksbUJBQU8sRUFBQyxJQUFwQjtBQUF5QixpQkFBSyxFQUFDLFNBQS9CO0FBQXlDLGlCQUFLLEVBQUMsUUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBSUkscUVBQUMsc0RBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBQSxpQ0FDSSxxRUFBQywyREFBRDtBQUFXLG1CQUFPLEVBQUMsVUFBbkI7QUFBOEIsZ0JBQUksRUFBQyxPQUFuQztBQUEyQyxpQkFBSyxFQUFDLElBQWpEO0FBQXNELHFCQUFTLEVBQUVmLE9BQU8sQ0FBQ21CO0FBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBT0kscUVBQUMsc0RBQUQ7QUFBQSxpQ0FDSSxxRUFBQywyREFBRDtBQUFXLG1CQUFPLEVBQUMsVUFBbkI7QUFBOEIsZ0JBQUksRUFBQyxPQUFuQztBQUEyQyxpQkFBSyxFQUFDLE9BQWpEO0FBQXlELHFCQUFTLEVBQUVuQixPQUFPLENBQUNtQjtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVVJLHFFQUFDLHNEQUFEO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQ7QUFBVyxtQkFBTyxFQUFDLFVBQW5CO0FBQThCLGdCQUFJLEVBQUMsT0FBbkM7QUFBMkMsaUJBQUssRUFBQyxPQUFqRDtBQUF5RCxxQkFBUyxFQUFFbkIsT0FBTyxDQUFDbUI7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkosZUFhSSxxRUFBQyxzREFBRDtBQUFBLGlDQUNJLHFFQUFDLDJEQUFEO0FBQVcsbUJBQU8sRUFBQyxVQUFuQjtBQUE4QixnQkFBSSxFQUFDLE9BQW5DO0FBQTJDLGlCQUFLLEVBQUMsZ0JBQWpEO0FBQThELGdCQUFJLEVBQUMsTUFBbkU7QUFBMEUsMkJBQWUsRUFBRTtBQUFFTyxvQkFBTSxFQUFFO0FBQVYsYUFBM0Y7QUFBNkcscUJBQVMsRUFBRTFCLE9BQU8sQ0FBQ21CLEtBQWhJO0FBQXVJLHVCQUFXLEVBQUMsRUFBbko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBZ0JJLHFFQUFDLHNEQUFEO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQ7QUFBVyxtQkFBTyxFQUFDLFVBQW5CO0FBQThCLGdCQUFJLEVBQUMsT0FBbkM7QUFBMkMsaUJBQUssRUFBQyxVQUFqRDtBQUE0RCxnQkFBSSxFQUFDLE1BQWpFO0FBQXdFLDJCQUFlLEVBQUU7QUFBRU8sb0JBQU0sRUFBRTtBQUFWLGFBQXpGO0FBQTJHLHFCQUFTLEVBQUUxQixPQUFPLENBQUNtQixLQUE5SDtBQUFxSSx1QkFBVyxFQUFDLEVBQWpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFoQkosZUFtQkkscUVBQUMsc0RBQUQ7QUFBQSxpQ0FDSSxxRUFBQyx3REFBRDtBQUFRLHFCQUFTLEVBQUVuQixPQUFPLENBQUNzQixNQUEzQjtBQUFtQyxnQkFBSSxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCUCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNakMsU0FBUyxHQUFHQyxvRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUM7QUFDREssV0FBTyxFQUFFYiw4Q0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZDtBQURSO0FBRG9CLENBQUQsQ0FBNUI7QUFNZSxTQUFTa0MsV0FBVCxHQUFzQjtBQUNqQyxRQUFNL0IsT0FBTyxHQUFHWCxTQUFTLEVBQXpCO0FBQ0Esc0JBQ0kscUVBQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLEtBQTFCO0FBQWdDLGFBQVMsRUFBRVcsT0FBTyxDQUFDVCxJQUFuRDtBQUFBLDRCQUNJLHFFQUFDLHNEQUFEO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLHNEQUFEO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQU9JLHFFQUFDLHNEQUFEO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVVJLHFFQUFDLHNEQUFEO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSixlQWFJLHFFQUFDLHNEQUFEO0FBQUEsNkJBQ0kscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQW9CSCxDLENBRUQ7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSw2Qjs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXlDLFdBQVcsR0FBR0MsbUVBQWtCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUE87QUFTQSxNQUFNQyxPQUFPLEdBQUdDLHdEQUFNLENBQUNDLEdBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWTztBQVlBLE1BQU1DLFVBQVUsR0FBR0Ysd0RBQU0sQ0FBQ0MsR0FBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FsQk87QUFvQkEsTUFBTUUsVUFBVSxHQUFHSCx3REFBTSxDQUFDQyxHQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZPO0FBaUJBLE1BQU1HLFNBQVMsR0FBR0osd0RBQU0sQ0FBQ0MsR0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbkNPO0FBcUNBLE1BQU1JLFdBQVcsR0FBR0wsd0RBQU0sQ0FBQ0MsR0FBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTE87QUFPQSxNQUFNSyxZQUFZLEdBQUdOLHdEQUFNLENBQUNDLEdBQUk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk87QUFRQSxNQUFNTSxpQkFBaUIsR0FBR1Asd0RBQU0sQ0FBQ0MsR0FBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdENPO0FBdUNBLE1BQU1PLFFBQVEsR0FBR1Isd0RBQU0sQ0FBQ0MsR0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJPO0FBa0JBLE1BQU1RLFVBQVUsR0FBR1Qsd0RBQU0sQ0FBQ0MsR0FBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FaTztBQWNBLE1BQU1TLGVBQWUsR0FBR1Ysd0RBQU0sQ0FBQ0MsR0FBSTtBQUMxQztBQUNBO0FBQ0EsQ0FITztBQU1BLE1BQU1VLGtCQUFrQixHQUFHWCx3REFBTSxDQUFDQyxHQUFJO0FBQzdDO0FBQ0EsQ0FGTyxDOzs7Ozs7Ozs7Ozs7QUM5TFA7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNckQsS0FBSyxHQUFHZ0Usd0VBQWMsQ0FBQztBQUN6QjFDLFNBQU8sRUFBQztBQUNKa0IsV0FBTyxFQUFDO0FBQ0pDLFVBQUksRUFBRTtBQURGLEtBREo7QUFJSndCLGFBQVMsRUFBQztBQUNOeEIsVUFBSSxFQUFFO0FBREE7QUFKTixHQURpQjtBQVN6QnlCLFlBQVUsRUFBQztBQUNQQyxjQUFVLEVBQUUsQ0FDUixlQURRLEVBQ1Msb0JBRFQsRUFDK0IsVUFEL0IsRUFDMkMsUUFEM0MsRUFDcUQsUUFEckQsRUFFaEIsUUFGZ0IsRUFFTixXQUZNLEVBRU8sV0FGUCxFQUVvQixZQUZwQixFQUVrQyxnQkFGbEMsRUFHUkMsSUFIUSxDQUdILEdBSEc7QUFETDtBQVRjLENBQUQsQ0FBNUI7QUFpQmVwRSxvRUFBZixFOzs7Ozs7Ozs7OztBQ25CQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+RGF0YUZlc288L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgQXBwTG9naW4gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTG9naW4nXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHtUaGVtZVByb3ZpZGVyfSBmcm9tICAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3JjL3RoZW1lJztcclxuaW1wb3J0IFByb2plY3RGaWx0ZXJzIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2hvbWVfcGFnZS9Qcm9qZWN0RmlsdGVycyc7XHJcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9ob21lX3BhZ2UvUHJvamVjdExpc3QnO1xyXG5pbXBvcnQgTXlBcHAgZnJvbSAnLi9fYXBwJ1xyXG5cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDoge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCdcclxuICAgIH0sXHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBwYWRkaW5nTGVmdDp0aGVtZS5zcGFjaW5nKDMpXHJcbiAgICB9LFxyXG4gICAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCl7XHJcblxyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBcclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9ID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICAgICAgIDxIZWFkZXIvPlxyXG4gICAgICAgICAgICAgICAgPG1haW4gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J2NvbHVtbicgPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g0JyBjb2xvcj0ncHJpbWFyeScgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5Qcm9qZXRvcyBlIFBlc3F1aXNhczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfSBwYWRkaW5nPSdzcGFjaW5nKDMpJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdExpc3QvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFwcExvZ2luLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEZpbHRlcnMvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPiBcclxuICAgICAgICBcclxuICAgIClcclxufSIsImltcG9ydCB7IFRoZW1lUHJvdmlkZXIsIG1ha2VTdHlsZXMsIENvbnRhaW5lciwgR3JpZH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcclxuXHJcbmNvbnN0IHN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVtcIjkwMFwiXSxcclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBzdHlsZXMoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9IGRpcmVjdGlvbj17XCJjb2x1bW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHA6Ly93d3cudW5pZmVzby5lZHUuYnIvaW1hZ2VzL2xvZ28vVU5JRkVTTy1CUkFOQ08ucG5nXCJ9IGhlaWdodD17NjB9IGFsdD17XCJMb2dvIGRhIFVOSUZFU09cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIClcclxuXHJcbiAgICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcidcclxuaW1wb3J0IHttYWtlU3R5bGVzLCBUaGVtZVByb3ZpZGVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICB0aXRsZTp7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZCdcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6e1xyXG4gICAgICAgIHBhZGRpbmc6dGhlbWUuc3BhY2luZygzKSxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IGNsYXNzZXM9dXNlU3R5bGVzKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxBcHBiYXIgcG9zaXRpb249J3N0YXRpYycgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0gZWxldmF0aW9uPScwJyA+ICBcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtcImh0dHA6Ly93d3cudW5pZmVzby5lZHUuYnIvaW1hZ2VzL2xvZ28vVU5JRkVTTy1CUkFOQ08ucG5nXCJ9IGhlaWdodD17NjB9IGFsdD17XCJMb2dvIGRhIFVOSUZFU09cIn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDMnIGFsaWduPSdjZW50ZXInIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+RGF0YUZlc288L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGhyZWY9Jy8nIGNvbG9yPSdpbmhlcml0Jz5UZWxhIFByaW5jaWFsPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0FwcGJhcj5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuICAgIFxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcywgQnV0dG9uLCBUeXBvZ3JhcGh5LCBUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6e1xyXG4gICAgICAgIHBhZGRpbmdSaWdodDp0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIG1pbldpZHRoOicyNDBweCdcclxuICAgIH0sXHJcbiAgICBib3g6e1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjonI2VlZWVlZScsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICBwYWRkaW5nOnRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOnRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICAgICAgbWFyZ2luUmlnaHQ6dGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgICAgICBjb2xvcjonI0ZGRkZGRicsXHJcbiAgICB9LCBcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBMb2dpbigpe1xyXG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3h9IGRpcmVjdGlvbj0nY29sdW1uJyBhbGlnbkl0ZW1zPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9JzEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2JyBjb2xvcj0ncHJpbWFyeScgYWxpZ249J2NlbnRlcic+w4FyZWEgZG8gUGVzcXVpc2Fkb3I8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkICBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9c2l6ZT0nc21hbGwnIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX0gY29sb3I9J2luaGVyaXQnIGxhYmVsPSAnVXN1w6FyaW8nIHZhcmlhbnQ9J291dGxpbmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCAgdHlwZT0ncGFzc3dvcmQnIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0gc2l6ZT0nc21hbGwnIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX0gY29sb3I9J2luaGVyaXQnIGxhYmVsPSAnU2VuaGEnIHZhcmlhbnQ9J291dGxpbmVkJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufSBocmVmPScjJyBjb2xvcj0nc2VjdW5kYXJ5JyA+TG9naW48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+IFxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcywgQ2FyZCwgQ2FyZEFjdGlvbkFyZWEsIENhcmRNZWRpYSwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHksIENhcmRBY3Rpb25zLCBCdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi8uLi90aGVtZSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHJvb3Q6IHtcclxuICAgICAgICBtYXhXaWR0aDogMzQ1LFxyXG4gICAgICAgIG1hcmdpbjp0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgICB9LFxyXG4gICAgICB0aXRsZTp7XHJcbiAgICAgICAgY29sb3I6dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICB9LFxyXG4gICAgdGV4dDp7XHJcbiAgICAgICAgZm9udFdlaWdodDonYm9sZCcsXHJcbiAgICAgICAgJyYgc3Bhbic6e1xyXG4gICAgICAgICAgICBjb2xvcjp0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q2FyZCAoKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcclxuICAgICAgICAgICAgYWx0PVwiRGVzY3Jpw6dhbyBkYSBJbWFnZW1cIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCIxMjBcIlxyXG4gICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vZW50cmVwcmVuZXVyaGFuZGJvb2suY28udWsvd3AtY29udGVudC91cGxvYWRzLzIwMTQvMTEvU3VtbWFyeS1vZi1xdWFudGF0aXZlLXJlc2VhcmNoLXJlcG9ydC5qcGdcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkNvbnRlbXBsYXRpdmUgUmVwdGlsZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgIFTDrXR1bG8gZGEgUGVzcXVpc2FcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICBEZXNjcmnDp2FvIGJyZXZlIGRhIHBlc3F1aXNhLCBvYmpldGl2b3MgZSByZXN1dGFkb3MgZXNwZXJhZG9zLlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5BdXRvcjo8L3NwYW4+IFRoYWxlcyBBemV2ZWRvXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk4gZGUgQXJxdWl2b3M6PC9zcGFuPiAxMFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fSBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+w5psdGltYSBBdHVhbGl6YcOnw6NvOjwvc3Bhbj4gMTIvMTIvMjAyMFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgaHJlZj0nL3Byb2plY3QnPlxyXG4gICAgICAgICAgICBDb25oZWNlciBQZXNxdWlzYVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgPC9DYXJkPlxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gPENhcmRXYXJwPlxyXG4gICAgICAgIC8vIDxDYXJkSGVhZGVyPlxyXG4gICAgICAgIC8vICAgICA8cD5JRCAjMDAwMDAwPC9wPlxyXG4gICAgICAgIC8vICAgICA8aDM+Tm9tZSBkbyBQcm9qZXRvPC9oMz5cclxuICAgICAgICAvLyA8L0NhcmRIZWFkZXI+XHJcbiAgICAgICAgLy8gPENhcmREZXNjcmlwdGlvbj5cclxuICAgICAgICAvLyAgICAgPHA+PHNwYW4+QXV0b3I6PC9zcGFuPiBUaGFsZXMgQXpldmVkbzwvcD5cclxuICAgICAgICAvLyAgICAgPHA+PHNwYW4+RGVzY3Jpw6fDo286PC9zcGFuPiBPIHByb2pldG8gY29tIHRhbCBub21lIHRlbSBhIHJvcG9zdGEgZGUgcGVzcXVpc2FyIHRhbCBhc3N1bnRvIGUgb2J0ZXIgcmVzdXRhZG9zIHF1ZSBwb2RlbSBjYXVzYXIgdGFpcyBpbXBhY3Rvcy48L3A+XHJcbiAgICAgICAgLy8gICAgIDxwPlxyXG4gICAgICAgIC8vICAgICA8cD48c3Bhbj5VbHRpbWEgQXR1YWxpemHDp8Ojbzo8L3NwYW4+IDAwLzAwLzAwMDA8L3A+XHJcbiAgICAgICAgLy8gPC9DYXJkRGVzY3JpcHRpb24+XHJcbiAgICAgICAgLy8gPC9DYXJkV2FycD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBtYWtlU3R5bGVzLCBUZXh0RmllbGQsIFR5cG9ncmFwaHksIEdyaWQsIEJ1dHRvbiwgVGhlbWVQcm92aWRlcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gICAgcm9vdDp7XHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OnRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICAgICAgbWluV2lkdGg6JzI0MHB4J1xyXG4gICAgfSxcclxuICAgIGJveDp7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOicjZWVlZWVlJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIHBhZGRpbmc6dGhlbWUuc3BhY2luZygyKSxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIH0sIFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgICAgIGNvbG9yOicjRkZGRkZGJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEZpbHRlcnMoKXtcclxuICAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgIGRpcmVjdGlvbj0nY29sdW1uJyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgY2xhc3NOYW1lPXtjbGFzc2VzLmJveH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPScxMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNicgY29sb3I9J3ByaW1hcnknIGFsaWduPSdjZW50ZXInID5GaWx0cmFyIFBlc3F1aXNhPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PSdvdXRsaW5lZCcgc2l6ZT0nc21hbGwnIGxhYmVsPSdJRCcgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fT48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFyaWFudD0nb3V0bGluZWQnIHNpemU9J3NtYWxsJyBsYWJlbD0nQ3Vyc28nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH0+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHZhcmlhbnQ9J291dGxpbmVkJyBzaXplPSdzbWFsbCcgbGFiZWw9J1NldG9yJyBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9PjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB2YXJpYW50PSdvdXRsaW5lZCcgc2l6ZT0nc21hbGwnIGxhYmVsPSdEYXRhIEluw61jaW8ndHlwZT0nZGF0ZScgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fSBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9IHBsYWNlaG9sZGVyPScnPk5hbWU8L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFyaWFudD0nb3V0bGluZWQnIHNpemU9J3NtYWxsJyBsYWJlbD0nRGF0YSBGaW0nIHR5cGU9J2RhdGUnIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX0gY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fSBwbGFjZWhvbGRlcj0nJz5OYW1lPC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259IHNpemU9J2xhcmdlJz5GaWx0cmFyPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuL1Byb2plY3RDYXJkJ1xyXG5cclxuaW1wb3J0IHtQcm9qZWN0c1dhcnB9IGZyb20gJy4uL3N0eWxlcydcclxuaW1wb3J0IHsgR3JpZCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lJ1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgICByb290OntcclxuICAgICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdExpc3QoKXtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQvPlxyXG4gICAgICAgICAgICA8L0dyaWQgPlxyXG4gICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZC8+XHJcbiAgICAgICAgICAgIDwvR3JpZCA+XHJcbiAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RDYXJkLz5cclxuICAgICAgICAgICAgPC9HcmlkID5cclxuICAgICAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQvPlxyXG4gICAgICAgICAgICA8L0dyaWQgPlxyXG4gICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZC8+XHJcbiAgICAgICAgICAgIDwvR3JpZCA+XHJcbiAgXHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIENvbXBvbmVudHtcclxuLy8gICAgIHJlbmRlcigpe1xyXG4vLyAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIDxQcm9qZWN0c1dhcnA+XHJcbiAgICAgICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZC8+XHJcbi8vICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQvPlxyXG4vLyAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkLz5cclxuLy8gICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZC8+XHJcbi8vICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQvPlxyXG4gICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIDwvUHJvamVjdHNXYXJwPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3QiLCJcclxuaW1wb3J0IHN0eWxlZCwge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gICAgKntcclxuICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgbWFyZ2luOjA7IFxyXG4gICAgICAgIGJvcmRlcjowO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIH1cclxuYCBcclxuIFxyXG5leHBvcnQgY29uc3QgV2FycHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaDF7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MzBweDtcclxuICAgICAgICBjb2xvcjojMDA1MTUxO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcCA9IHN0eWxlZC5kaXZgXHJcblxyXG4gZGlzcGxheTogZmxleDtcclxuIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuIGJhY2tncm91bmQtY29sb3I6ICMxMjdFNzE7XHJcbiB3aWR0aDoxMDB2bWF4O1xyXG4gcGFkZGluZzogMzBweDsgXHJcbiBcclxuIGgxe1xyXG4gICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgZm9udC1zaXplOjIwO1xyXG4gICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICAgcGFkZGluZzowOyBcclxuIH1cclxuIGltZ3tcclxuICAgICBtYXgtd2lkdGg6MjIwcHg7XHJcbiB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwID0gc3R5bGVkLmRpdmBcclxuIGRpc3BsYXk6ZmxleDtcclxuIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiB3aWR0aDoxMDB2bWF4O1xyXG4gcGFkZGluZzoyMHB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTtcclxuIGgxe1xyXG4gICAgIGNvbG9yOiNmZmY7XHJcbiB9XHJcbiBpbWd7XHJcbiAgICAgbWF4LXdpZHRoOjIwMHB4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuIH1cclxuXHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbldyYXAgPSBzdHlsZWQuZGl2YFxyXG5cclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOjEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjVweDtcclxuXHJcbiAgICBoMntcclxuICAgICAgICBmb250LXNpemU6MThweDtcclxuICAgICAgICBmb250LXdlaWdodDozMDA7XHJcbiAgICB9XHJcbiAgICBmb3Jte1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICBcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgaGVpZ2h0OjI1cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOmF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDUxNTE7IFxyXG4gICAgICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcCA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6ZmxleDtcclxuYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuZmxleC1ncm93OjU7XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdHNXYXJwID0gc3R5bGVkLmRpdmBcclxuXHJcbmRpc3BsYXk6ZmxleDtcclxucGFkZGluZzogMjBweDtcclxuZmxleC13cmFwOndyYXA7XHJcblxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgUHJvamVjdEZpbHRlcldyYXAgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1MTUxO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgcGFkZGluZzo1MHB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6MTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgbWFyZ2luOjMwcHg7XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6MzAwO1xyXG4gICAgfVxyXG4gICAgZm9ybXtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjVweDtcclxuICAgICAgICAgICAgd2lkdGg6YXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxNzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzEyN0U3MTtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcmRXYXJwID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgd2lkdGg6MzUwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICAgIH1cclxuICAgICp7XHJcbiAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICBwYWRkaW5nOjJweDtcclxufVxyXG5gXHJcbmV4cG9ydCBjb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IzEyN0U3MTsgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJkRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcGFkZGluZzoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTVlNWU1O1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2plY3RDb250ZW50V2FycCA9IHN0eWxlZC5kaXZgXHJcbmZsZXgtZ3Jvdzo0O1xyXG5gIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWV9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XHJcbiAgICBwYWxldHRlOntcclxuICAgICAgICBwcmltYXJ5OntcclxuICAgICAgICAgICAgbWFpbjogJyMxMjdFNzEnICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Vjb25kYXJ5OntcclxuICAgICAgICAgICAgbWFpbjogJyMwMDUxNTEnLFxyXG4gICAgICAgIH0sICAgICAgXHJcbiAgICB9LFxyXG4gICAgdHlwb2dyYXBoeTp7XHJcbiAgICAgICAgZm9udEZhbWlseTogW1xyXG4gICAgICAgICAgICAnLWFwcGxlLXN5c3RlbScsICdCbGlua01hY1N5c3RlbUZvbnQnLCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsXHJcbiAgICBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLFxyXG4gICAgICAgICAgXS5qb2luKCcsJyksXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
