/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Header/styles.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Header/styles.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"headerContainer\": \"styles_headerContainer__uAgJk\",\n\t\"headerContent\": \"styles_headerContent__h9eUe\",\n\t\"active\": \"styles_active__l7I1o\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMubW9kdWxlLnNjc3M/NGU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJDb250YWluZXJcIjogXCJzdHlsZXNfaGVhZGVyQ29udGFpbmVyX191QWdKa1wiLFxuXHRcImhlYWRlckNvbnRlbnRcIjogXCJzdHlsZXNfaGVhZGVyQ29udGVudF9faDllVWVcIixcblx0XCJhY3RpdmVcIjogXCJzdHlsZXNfYWN0aXZlX19sN0kxb1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/styles.module.scss\n");

/***/ }),

/***/ "./src/components/SignInButton/styles.module.scss":
/*!********************************************************!*\
  !*** ./src/components/SignInButton/styles.module.scss ***!
  \********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"signInButton\": \"styles_signInButton__byt5_\",\n\t\"closeIcon\": \"styles_closeIcon__yr0aw\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzNjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2lnbkluQnV0dG9uXCI6IFwic3R5bGVzX3NpZ25JbkJ1dHRvbl9fYnl0NV9cIixcblx0XCJjbG9zZUljb25cIjogXCJzdHlsZXNfY2xvc2VJY29uX195cjBhd1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SignInButton/styles.module.scss\n");

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SignInButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SignInButton */ \"./src/components/SignInButton/index.tsx\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/Header/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Header = ()=>{\n    const links = [\n        {\n            linkName: 'Home',\n            anchor: '/'\n        },\n        {\n            linkName: 'Posts',\n            anchor: '/'\n        }\n    ];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContainer),\n        __source: {\n            fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_2___default().headerContent),\n            __source: {\n                fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 10\n            },\n            __self: undefined,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: \"/images/logo.svg\",\n                    alt: \"ig.news\",\n                    __source: {\n                        fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    },\n                    __self: undefined\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"nav\", {\n                    __source: {\n                        fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    },\n                    __self: undefined,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        __source: {\n                            fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 16\n                        },\n                        __self: undefined,\n                        children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 22\n                                },\n                                __self: undefined,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                    href: link.anchor,\n                                    __source: {\n                                        fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 25\n                                    },\n                                    __self: undefined,\n                                    children: link.linkName\n                                })\n                            }, String(index))\n                        )\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SignInButton__WEBPACK_IMPORTED_MODULE_1__.SignInButton, {\n                    __source: {\n                        fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/Header/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    },\n                    __self: undefined\n                })\n            ]\n        })\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFOEM7QUFDTDtBQUVsQyxLQUFLLENBQUNFLE1BQU0sT0FBNEIsQ0FBQztJQUM3QyxLQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQ1osQ0FBQztZQUNFQyxRQUFRLEVBQUUsQ0FBTTtZQUNoQkMsTUFBTSxFQUFFLENBQUc7UUFDZCxDQUFDO1FBQ0QsQ0FBQztZQUNFRCxRQUFRLEVBQUUsQ0FBTztZQUNqQkMsTUFBTSxFQUFFLENBQUc7UUFDZCxDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sc0VBQ0ZDLENBQU07UUFBQ0MsU0FBUyxFQUFFTiw0RUFBc0I7Ozs7Ozs7d0ZBQ3JDUSxDQUFHO1lBQUNGLFNBQVMsRUFBRU4sMEVBQW9COzs7Ozs7OztxRkFDaENVLENBQUc7b0JBQUNDLEdBQUcsRUFBQyxDQUFrQjtvQkFBQ0MsR0FBRyxFQUFDLENBQVM7Ozs7Ozs7O3FGQUV4Q0MsQ0FBRzs7Ozs7OzttR0FDQUMsQ0FBRTs7Ozs7OztrQ0FDQ1osS0FBSyxDQUFDYSxHQUFHLEVBQUVDLElBQUksRUFBRUMsS0FBSyx3RUFDbkJDLENBQUU7Ozs7Ozs7K0dBQ0NDLENBQUM7b0NBQ0NDLElBQUksRUFBRUosSUFBSSxDQUFDWixNQUFNOzs7Ozs7OzhDQUVoQlksSUFBSSxDQUFDYixRQUFROzsrQkFKWGtCLE1BQU0sQ0FBQ0osS0FBSzs7OztxRkFXN0JsQix1REFBWTs7Ozs7Ozs7Ozs7QUFLekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbmV3cy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU2lnbkluQnV0dG9uIH0gZnJvbSAnLi4vU2lnbkluQnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgIGNvbnN0IGxpbmtzID0gW1xuICAgICAge1xuICAgICAgICAgbGlua05hbWU6ICdIb21lJyxcbiAgICAgICAgIGFuY2hvcjogJy8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgbGlua05hbWU6ICdQb3N0cycsXG4gICAgICAgICBhbmNob3I6ICcvJ1xuICAgICAgfVxuICAgXTtcblxuICAgcmV0dXJuKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250YWluZXJ9PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJDb250ZW50fT5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiIGFsdD1cImlnLm5ld3NcIiAvPlxuXG4gICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e1N0cmluZyhpbmRleCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rLmxpbmtOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICA8U2lnbkluQnV0dG9uIC8+XG5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgPC9oZWFkZXI+XG4gICApO1xufTsiXSwibmFtZXMiOlsiU2lnbkluQnV0dG9uIiwic3R5bGVzIiwiSGVhZGVyIiwibGlua3MiLCJsaW5rTmFtZSIsImFuY2hvciIsImhlYWRlciIsImNsYXNzTmFtZSIsImhlYWRlckNvbnRhaW5lciIsImRpdiIsImhlYWRlckNvbnRlbnQiLCJpbWciLCJzcmMiLCJhbHQiLCJuYXYiLCJ1bCIsIm1hcCIsImxpbmsiLCJpbmRleCIsImxpIiwiYSIsImhyZWYiLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ }),

/***/ "./src/components/SignInButton/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/SignInButton/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SignInButton\": () => (/* binding */ SignInButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ \"react-icons/fi\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SignInButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./src/context/index.tsx\");\n\n\n\n\n\nconst SignInButton = ()=>{\n    const { isLogged  } = (0,_context__WEBPACK_IMPORTED_MODULE_3__.useApp)();\n    const colors = {\n        logged: \"#04d361\",\n        notLogged: \"#eba417\",\n        signOut: \"#737380\"\n    };\n    const buttonText = isLogged ? 'Raphael Capeto' : 'Sign in with Github';\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"button\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().signInButton),\n        __source: {\n            fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/SignInButton/index.tsx\",\n            lineNumber: 20,\n            columnNumber: 6\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n                color: colors.notLogged,\n                __source: {\n                    fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/SignInButton/index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                },\n                __self: undefined\n            }),\n            buttonText,\n            isLogged && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, {\n                color: colors.signOut,\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().closeIcon),\n                __source: {\n                    fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/components/SignInButton/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 23\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWduSW5CdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3lDO0FBQ0w7QUFFSztBQUNIO0FBRS9CLEtBQUssQ0FBQ0ksWUFBWSxPQUE0QixDQUFDO0lBQ25ELEtBQUssQ0FBQyxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUdGLGdEQUFNO0lBRTNCLEtBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUM7UUFDYkMsTUFBTSxFQUFFLENBQVM7UUFDakJDLFNBQVMsRUFBRSxDQUFTO1FBQ3BCQyxPQUFPLEVBQUUsQ0FBUztJQUNyQixDQUFDO0lBRUQsS0FBSyxDQUFDQyxVQUFVLEdBQUdMLFFBQVEsR0FBRyxDQUFnQixrQkFBRyxDQUFxQjtJQUV0RSxNQUFNLHVFQUNITSxDQUFNO1FBQUNDLFNBQVMsRUFBRVYseUVBQW1COzs7Ozs7OztpRkFDbENGLG9EQUFRO2dCQUFDYyxLQUFLLEVBQUVSLE1BQU0sQ0FBQ0UsU0FBUzs7Ozs7Ozs7WUFDL0JFLFVBQVU7WUFDVkwsUUFBUSx5RUFBS0osK0NBQUc7Z0JBQUNhLEtBQUssRUFBRVIsTUFBTSxDQUFDRyxPQUFPO2dCQUFFRyxTQUFTLEVBQUVWLHNFQUFnQjs7Ozs7Ozs7OztBQUc3RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluQnV0dG9uL2luZGV4LnRzeD9jYjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgeyBGaVggfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgdXNlQXBwIH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBjb25zdCBTaWduSW5CdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgY29uc3QgeyBpc0xvZ2dlZCB9ID0gdXNlQXBwKCk7XG5cbiAgIGNvbnN0IGNvbG9ycyA9IHtcbiAgICAgIGxvZ2dlZDogXCIjMDRkMzYxXCIsXG4gICAgICBub3RMb2dnZWQ6IFwiI2ViYTQxN1wiLFxuICAgICAgc2lnbk91dDogXCIjNzM3MzgwXCJcbiAgIH07IFxuXG4gICBjb25zdCBidXR0b25UZXh0ID0gaXNMb2dnZWQgPyAnUmFwaGFlbCBDYXBldG8nIDogJ1NpZ24gaW4gd2l0aCBHaXRodWInO1xuXG4gICByZXR1cm4oXG4gICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2lnbkluQnV0dG9ufT5cbiAgICAgICAgPEZhR2l0aHViIGNvbG9yPXtjb2xvcnMubm90TG9nZ2VkfSAvPlxuICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICB7aXNMb2dnZWQgJiYgPEZpWCBjb2xvcj17Y29sb3JzLnNpZ25PdXR9IGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0gLz4gfVxuICAgICA8L2J1dHRvbj5cbiAgICk7XG59OyJdLCJuYW1lcyI6WyJGYUdpdGh1YiIsIkZpWCIsInN0eWxlcyIsInVzZUFwcCIsIlNpZ25JbkJ1dHRvbiIsImlzTG9nZ2VkIiwiY29sb3JzIiwibG9nZ2VkIiwibm90TG9nZ2VkIiwic2lnbk91dCIsImJ1dHRvblRleHQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJzaWduSW5CdXR0b24iLCJjb2xvciIsImNsb3NlSWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SignInButton/index.tsx\n");

/***/ }),

/***/ "./src/context/index.tsx":
/*!*******************************!*\
  !*** ./src/context/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppCtxProvider\": () => (/* binding */ AppCtxProvider),\n/* harmony export */   \"useApp\": () => (/* binding */ useApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n});\nconst AppCtxProvider = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AppContext.Provider, {\n        value: {\n            isLogged: false\n        },\n        __source: {\n            fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/context/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        },\n        __self: undefined,\n        children: children\n    }));\n};\nconst useApp = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFvRTtBQUlwRSxLQUFLLENBQUNFLFVBQVUsaUJBQUdGLG9EQUFhLENBQUMsQ0FBQztBQUFBLENBQUM7QUFFNUIsS0FBSyxDQUFDRyxjQUFjLElBQXVCLENBQUMsQ0FBQ0MsUUFBUSxFQUFDLENBQUMsR0FBSyxDQUFDO0lBQ2pFLE1BQU0sc0VBQ0ZGLFVBQVUsQ0FBQ0csUUFBUTtRQUNqQkMsS0FBSyxFQUFFLENBQUM7WUFDTEMsUUFBUSxFQUFFLEtBQUs7UUFDbEIsQ0FBQzs7Ozs7OztrQkFFQ0gsUUFBUTs7QUFHbkIsQ0FBQztBQUVNLEtBQUssQ0FBQ0ksTUFBTSxPQUFTUCxpREFBVSxDQUFDQyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL2NvbnRleHQvaW5kZXgudHN4P2FiMWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEN0eFZhbHVlcyB9IGZyb20gJy4uL3R5cGVzJztcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ3R4VmFsdWVzKTtcblxuZXhwb3J0IGNvbnN0IEFwcEN0eFByb3ZpZGVyOiBGdW5jdGlvbkNvbXBvbmVudCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgIHJldHVybihcbiAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgICB2YWx1ZT17e1xuICAgICAgICAgICAgaXNMb2dnZWQ6IGZhbHNlXG4gICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUFwcCA9ICgpID0+IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiQXBwQ29udGV4dCIsIkFwcEN0eFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJQcm92aWRlciIsInZhbHVlIiwiaXNMb2dnZWQiLCJ1c2VBcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./src/context/index.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header/index.tsx\");\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context__WEBPACK_IMPORTED_MODULE_2__.AppCtxProvider, {\n            __source: {\n                fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/pages/_app.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.Header, {\n                    __source: {\n                        fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/pages/_app.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                    ...pageProps,\n                    __source: {\n                        fileName: \"/Users/raphaelcapeto/Documents/Estudo/rocketseat/next/ignews/src/pages/_app.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFFVTtBQUNFO1NBRXBDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNLHNFQUFDO3dGQUVGSixvREFBYzs7Ozs7Ozs7cUZBQ1pDLHNEQUFNOzs7Ozs7OztxRkFDTkUsU0FBUzt1QkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVELGlFQUFlRixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduZXdzLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0ICcuLi8uLi9zdHlsZXMvZ2xvYmFsLnNjc3MnO1xuXG5pbXBvcnQgeyBBcHBDdHhQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPEFwcEN0eFByb3ZpZGVyPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXBwQ3R4UHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXBwQ3R4UHJvdmlkZXIiLCJIZWFkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fi");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();