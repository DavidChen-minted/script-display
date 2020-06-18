webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/features/dependency/importToDependencyCheckState.ts":
/*!*****************************************************************!*\
  !*** ./src/features/dependency/importToDependencyCheckState.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencyCheckEntity */ \"./src/features/dependency/dependencyCheckEntity.ts\");\n/* eslint-disable no-param-reassign */\n\n\nvar importToDependencyChecksState = function importToDependencyChecksState(_ref) {\n  var dependencyChecks = _ref.dependencyChecks,\n      types = _ref.types;\n  return dependencyChecks && types.reduce(function (obj, scriptType) {\n    obj[scriptType] = _dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setAll(_dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInitialState(), dependencyChecks[scriptType]);\n    return obj;\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (importToDependencyChecksState);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZGVwZW5kZW5jeS9pbXBvcnRUb0RlcGVuZGVuY3lDaGVja1N0YXRlLnRzPzgxYmIiXSwibmFtZXMiOlsiaW1wb3J0VG9EZXBlbmRlbmN5Q2hlY2tzU3RhdGUiLCJkZXBlbmRlbmN5Q2hlY2tzIiwidHlwZXMiLCJyZWR1Y2UiLCJvYmoiLCJzY3JpcHRUeXBlIiwiZGVwZW5kZW5jeUNoZWNrQWRhcHRlciIsInNldEFsbCIsImdldEluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBY0EsSUFBTUEsNkJBQTZCLEdBQUcsU0FBaENBLDZCQUFnQztBQUFBLE1BQ3BDQyxnQkFEb0MsUUFDcENBLGdCQURvQztBQUFBLE1BRXBDQyxLQUZvQyxRQUVwQ0EsS0FGb0M7QUFBQSxTQUlwQ0QsZ0JBQWdCLElBQ2hCQyxLQUFLLENBQUNDLE1BQU4sQ0FBb0MsVUFBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQ3ZERCxPQUFHLENBQUNDLFVBQUQsQ0FBSCxHQUFrQkMsOERBQXNCLENBQUNDLE1BQXZCLENBQ2hCRCw4REFBc0IsQ0FBQ0UsZUFBdkIsRUFEZ0IsRUFFaEJQLGdCQUFnQixDQUFDSSxVQUFELENBRkEsQ0FBbEI7QUFJQSxXQUFPRCxHQUFQO0FBQ0QsR0FORCxFQU1HLEVBTkgsQ0FMb0M7QUFBQSxDQUF0Qzs7QUFhZUosNEZBQWYiLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvZGVwZW5kZW5jeS9pbXBvcnRUb0RlcGVuZGVuY3lDaGVja1N0YXRlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBkZXBlbmRlbmN5Q2hlY2tBZGFwdGVyLCB7XG4gIERlcGVuZGVuY3lDaGVjayxcbn0gZnJvbSAnLi9kZXBlbmRlbmN5Q2hlY2tFbnRpdHknO1xuaW1wb3J0IHsgRGVwZW5kZW5jeUNoZWNrc1N0YXRlIH0gZnJvbSAnLi9kZXBlbmRlbmN5Q2hlY2tTbGljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkRGVwZW5kZW5jeUNoZWNrcyB7XG4gIFtrZXk6IHN0cmluZ106IERlcGVuZGVuY3lDaGVja1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltcG9ydFRvRGVwZW5kZW5jeUNoZWNrc0FyZ3Mge1xuICBkZXBlbmRlbmN5Q2hlY2tzPzogUGFyc2VkRGVwZW5kZW5jeUNoZWNrcztcbiAgdHlwZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBpbXBvcnRUb0RlcGVuZGVuY3lDaGVja3NTdGF0ZSA9ICh7XG4gIGRlcGVuZGVuY3lDaGVja3MsXG4gIHR5cGVzLFxufTogSW1wb3J0VG9EZXBlbmRlbmN5Q2hlY2tzQXJncykgPT5cbiAgZGVwZW5kZW5jeUNoZWNrcyAmJlxuICB0eXBlcy5yZWR1Y2U8RGVwZW5kZW5jeUNoZWNrc1N0YXRlPigob2JqLCBzY3JpcHRUeXBlKSA9PiB7XG4gICAgb2JqW3NjcmlwdFR5cGVdID0gZGVwZW5kZW5jeUNoZWNrQWRhcHRlci5zZXRBbGwoXG4gICAgICBkZXBlbmRlbmN5Q2hlY2tBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgZGVwZW5kZW5jeUNoZWNrc1tzY3JpcHRUeXBlXVxuICAgICk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBpbXBvcnRUb0RlcGVuZGVuY3lDaGVja3NTdGF0ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/dependency/importToDependencyCheckState.ts\n");

/***/ })

})