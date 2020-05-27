webpackHotUpdate("static/development/pages/[aspect].js",{

/***/ "./src/features/navigationTab/NavigationTab.tsx":
/*!******************************************************!*\
  !*** ./src/features/navigationTab/NavigationTab.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var features_step_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! features/step/selector */ \"./src/features/step/selector.ts\");\n/* harmony import */ var features_step_stepEntity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! features/step/stepEntity */ \"./src/features/step/stepEntity.ts\");\n/* harmony import */ var features_step_getStepId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! features/step/getStepId */ \"./src/features/step/getStepId.ts\");\n/* harmony import */ var features_step_getStepLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! features/step/getStepLabel */ \"./src/features/step/getStepLabel.ts\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var utils_style_rem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/style/rem */ \"./src/utils/style/rem.ts\");\n/* harmony import */ var _NavigationTabItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavigationTabItem */ \"./src/features/navigationTab/NavigationTabItem.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/david.chen/src/ccpa-script/src/features/navigationTab/NavigationTab.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nvar arrows = [\"\\u25B2 \", '', \"\\u25BC \"];\nvar navigationTabStyles = /*#__PURE__*/Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"css\"])(\"margin:\", Object(utils_style_rem__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(10), \" 0;;label:navigationTabStyles;\" + (false ? undefined : \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYXZpZC5jaGVuL3NyYy9jY3BhLXNjcmlwdC9zcmMvZmVhdHVyZXMvbmF2aWdhdGlvblRhYi9OYXZpZ2F0aW9uVGFiLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQitCIiwiZmlsZSI6Ii9Vc2Vycy9kYXZpZC5jaGVuL3NyYy9jY3BhLXNjcmlwdC9zcmMvZmVhdHVyZXMvbmF2aWdhdGlvblRhYi9OYXZpZ2F0aW9uVGFiLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgc2VsZWN0Q3VycmVudFN0ZXBJZCxcbiAgc2VsZWN0Q2hlY2tTY3JpcHRTdGVwLFxufSBmcm9tICdmZWF0dXJlcy9zdGVwL3NlbGVjdG9yJztcbmltcG9ydCBzdGVwQWRhcHRlciBmcm9tICdmZWF0dXJlcy9zdGVwL3N0ZXBFbnRpdHknO1xuaW1wb3J0IHtcbiAgZ2V0UHJldlZpc2libGVTdGVwSWQsXG4gIGdldE5leHRWaXNpYmxlU3RlcElkLFxufSBmcm9tICdmZWF0dXJlcy9zdGVwL2dldFN0ZXBJZCc7XG5pbXBvcnQgZ2V0U3RlcExhYmVsIGZyb20gJ2ZlYXR1cmVzL3N0ZXAvZ2V0U3RlcExhYmVsJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHJlbSBmcm9tICd1dGlscy9zdHlsZS9yZW0nO1xuaW1wb3J0IE5hdmlnYXRpb25UYWJJdGVtIGZyb20gJy4vTmF2aWdhdGlvblRhYkl0ZW0nO1xuXG5jb25zdCBhcnJvd3MgPSBbJ1xcdTI1QjIgJywgJycsICdcXHUyNUJDICddO1xuXG5jb25zdCBuYXZpZ2F0aW9uVGFiU3R5bGVzID0gY3NzYFxuICBtYXJnaW46ICR7cmVtKDEwKX0gMDtcbmA7XG5cbmNvbnN0IHtcbiAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdFN0ZXBFbnRpdGllcyxcbiAgc2VsZWN0SWRzOiBzZWxlY3RTdGVwSWRzLFxufSA9IHN0ZXBBZGFwdGVyLmdldFNlbGVjdG9ycyhzZWxlY3RDaGVja1NjcmlwdFN0ZXApO1xuXG5jb25zdCBOYXZpZ2F0aW9uVGFiOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFN0ZXBJZCA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRTdGVwSWQpO1xuICBjb25zdCBpZHMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGVwSWRzKTtcbiAgY29uc3QgZW50aXRpZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGVwRW50aXRpZXMpO1xuXG4gIGNvbnN0IHByZXZTdGVwSWQgPSBnZXRQcmV2VmlzaWJsZVN0ZXBJZCh7XG4gICAgaWRzLFxuICAgIGVudGl0aWVzLFxuICAgIGVuZElkOiBjdXJyZW50U3RlcElkLFxuICB9KTtcbiAgY29uc3QgbmV4dFN0ZXBJZCA9IGdldE5leHRWaXNpYmxlU3RlcElkKHtcbiAgICBpZHMsXG4gICAgZW50aXRpZXMsXG4gICAgc3RhcnRJZDogY3VycmVudFN0ZXBJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17bmF2aWdhdGlvblRhYlN0eWxlc30+XG4gICAgICB7W3ByZXZTdGVwSWQsIGN1cnJlbnRTdGVwSWQsIG5leHRTdGVwSWRdLm1hcCgoaWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpZCAmJiBlbnRpdGllc1tpZF0pIHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gZW50aXRpZXNbaWRdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2aWdhdGlvblRhYkl0ZW1cbiAgICAgICAgICAgICAga2V5PXtgJHtpbmRleH0tJHtpZH1gfVxuICAgICAgICAgICAgICBjdXJyZW50PXtpbmRleCA9PT0gMX1cbiAgICAgICAgICAgICAgbGFiZWw9e2Ake2Fycm93c1tpbmRleF19JHtnZXRTdGVwTGFiZWwoc3RlcCEpfWB9XG4gICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxOYXZpZ2F0aW9uVGFiSXRlbVxuICAgICAgICAgICAga2V5PXtgJHtpbmRleH0tJHtpZH1gfVxuICAgICAgICAgICAgY3VycmVudD17aW5kZXggPT09IDF9XG4gICAgICAgICAgICBsYWJlbD17YXJyb3dzW2luZGV4XX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uVGFiO1xuIl19 */\"));\n\nvar _stepAdapter$getSelec = features_step_stepEntity__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getSelectors(features_step_selector__WEBPACK_IMPORTED_MODULE_2__[\"selectCheckScriptStep\"]),\n    selectStepEntities = _stepAdapter$getSelec.selectEntities,\n    selectStepIds = _stepAdapter$getSelec.selectIds;\n\nvar NavigationTab = function NavigationTab() {\n  _s();\n\n  var currentStepId = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(features_step_selector__WEBPACK_IMPORTED_MODULE_2__[\"selectCurrentStepId\"]);\n  var ids = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectStepIds);\n  var entities = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"])(selectStepEntities);\n  var prevStepId = Object(features_step_getStepId__WEBPACK_IMPORTED_MODULE_4__[\"getPrevVisibleStepId\"])({\n    ids: ids,\n    entities: entities,\n    endId: currentStepId\n  });\n  var nextStepId = Object(features_step_getStepId__WEBPACK_IMPORTED_MODULE_4__[\"getNextVisibleStepId\"])({\n    ids: ids,\n    entities: entities,\n    startId: currentStepId\n  });\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\", {\n    css: navigationTabStyles,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, [prevStepId, currentStepId, nextStepId].map(function (id, index) {\n    if (id && entities[id]) {\n      var step = entities[id];\n      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_NavigationTabItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        key: \"\".concat(index, \"-\").concat(id),\n        current: index === 1,\n        label: \"\".concat(arrows[index]).concat(Object(features_step_getStepLabel__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(step)),\n        id: id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }\n      });\n    }\n\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_NavigationTabItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      key: \"\".concat(index, \"-\").concat(id),\n      current: index === 1,\n      label: arrows[index],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }\n    });\n  }));\n};\n\n_s(NavigationTab, \"wU8OM+9SeBkxYkAo/tDSc0jpFCk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_1__[\"useSelector\"]];\n});\n\n_c = NavigationTab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationTab);\n\nvar _c;\n\n$RefreshReg$(_c, \"NavigationTab\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvbmF2aWdhdGlvblRhYi9OYXZpZ2F0aW9uVGFiLnRzeD83NTRmIl0sIm5hbWVzIjpbImFycm93cyIsIm5hdmlnYXRpb25UYWJTdHlsZXMiLCJjc3MiLCJyZW0iLCJzdGVwQWRhcHRlciIsImdldFNlbGVjdG9ycyIsInNlbGVjdENoZWNrU2NyaXB0U3RlcCIsInNlbGVjdFN0ZXBFbnRpdGllcyIsInNlbGVjdEVudGl0aWVzIiwic2VsZWN0U3RlcElkcyIsInNlbGVjdElkcyIsIk5hdmlnYXRpb25UYWIiLCJjdXJyZW50U3RlcElkIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RDdXJyZW50U3RlcElkIiwiaWRzIiwiZW50aXRpZXMiLCJwcmV2U3RlcElkIiwiZ2V0UHJldlZpc2libGVTdGVwSWQiLCJlbmRJZCIsIm5leHRTdGVwSWQiLCJnZXROZXh0VmlzaWJsZVN0ZXBJZCIsInN0YXJ0SWQiLCJtYXAiLCJpZCIsImluZGV4Iiwic3RlcCIsImdldFN0ZXBMYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FBQyxTQUFELEVBQVksRUFBWixFQUFnQixTQUFoQixDQUFmO0FBRUEsSUFBTUMsbUJBQW1CLGdCQUFHQyx5REFBSCxZQUNiQywrREFBRyxDQUFDLEVBQUQsQ0FEVSw2MkZBQXpCOzs0QkFPSUMsZ0VBQVcsQ0FBQ0MsWUFBWixDQUF5QkMsNEVBQXpCLEM7SUFGY0Msa0IseUJBQWhCQyxjO0lBQ1dDLGEseUJBQVhDLFM7O0FBR0YsSUFBTUMsYUFBaUIsR0FBRyxTQUFwQkEsYUFBb0IsR0FBTTtBQUFBOztBQUM5QixNQUFNQyxhQUFhLEdBQUdDLCtEQUFXLENBQUNDLDBFQUFELENBQWpDO0FBQ0EsTUFBTUMsR0FBRyxHQUFHRiwrREFBVyxDQUFDSixhQUFELENBQXZCO0FBQ0EsTUFBTU8sUUFBUSxHQUFHSCwrREFBVyxDQUFDTixrQkFBRCxDQUE1QjtBQUVBLE1BQU1VLFVBQVUsR0FBR0Msb0ZBQW9CLENBQUM7QUFDdENILE9BQUcsRUFBSEEsR0FEc0M7QUFFdENDLFlBQVEsRUFBUkEsUUFGc0M7QUFHdENHLFNBQUssRUFBRVA7QUFIK0IsR0FBRCxDQUF2QztBQUtBLE1BQU1RLFVBQVUsR0FBR0Msb0ZBQW9CLENBQUM7QUFDdENOLE9BQUcsRUFBSEEsR0FEc0M7QUFFdENDLFlBQVEsRUFBUkEsUUFGc0M7QUFHdENNLFdBQU8sRUFBRVY7QUFINkIsR0FBRCxDQUF2QztBQU1BLFNBQ0U7QUFBSyxPQUFHLEVBQUVYLG1CQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxDQUFDZ0IsVUFBRCxFQUFhTCxhQUFiLEVBQTRCUSxVQUE1QixFQUF3Q0csR0FBeEMsQ0FBNEMsVUFBQ0MsRUFBRCxFQUFLQyxLQUFMLEVBQWU7QUFDMUQsUUFBSUQsRUFBRSxJQUFJUixRQUFRLENBQUNRLEVBQUQsQ0FBbEIsRUFBd0I7QUFDdEIsVUFBTUUsSUFBSSxHQUFHVixRQUFRLENBQUNRLEVBQUQsQ0FBckI7QUFDQSxhQUNFLDBEQUFDLDBEQUFEO0FBQ0UsV0FBRyxZQUFLQyxLQUFMLGNBQWNELEVBQWQsQ0FETDtBQUVFLGVBQU8sRUFBRUMsS0FBSyxLQUFLLENBRnJCO0FBR0UsYUFBSyxZQUFLekIsTUFBTSxDQUFDeUIsS0FBRCxDQUFYLFNBQXFCRSwwRUFBWSxDQUFDRCxJQUFELENBQWpDLENBSFA7QUFJRSxVQUFFLEVBQUVGLEVBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGO0FBUUQ7O0FBQ0QsV0FDRSwwREFBQywwREFBRDtBQUNFLFNBQUcsWUFBS0MsS0FBTCxjQUFjRCxFQUFkLENBREw7QUFFRSxhQUFPLEVBQUVDLEtBQUssS0FBSyxDQUZyQjtBQUdFLFdBQUssRUFBRXpCLE1BQU0sQ0FBQ3lCLEtBQUQsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREY7QUFPRCxHQW5CQSxDQURILENBREY7QUF3QkQsQ0F4Q0Q7O0dBQU1kLGE7VUFDa0JFLHVELEVBQ1ZBLHVELEVBQ0tBLHVEOzs7S0FIYkYsYTtBQTBDU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvbmF2aWdhdGlvblRhYi9OYXZpZ2F0aW9uVGFiLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHtcbiAgc2VsZWN0Q3VycmVudFN0ZXBJZCxcbiAgc2VsZWN0Q2hlY2tTY3JpcHRTdGVwLFxufSBmcm9tICdmZWF0dXJlcy9zdGVwL3NlbGVjdG9yJztcbmltcG9ydCBzdGVwQWRhcHRlciBmcm9tICdmZWF0dXJlcy9zdGVwL3N0ZXBFbnRpdHknO1xuaW1wb3J0IHtcbiAgZ2V0UHJldlZpc2libGVTdGVwSWQsXG4gIGdldE5leHRWaXNpYmxlU3RlcElkLFxufSBmcm9tICdmZWF0dXJlcy9zdGVwL2dldFN0ZXBJZCc7XG5pbXBvcnQgZ2V0U3RlcExhYmVsIGZyb20gJ2ZlYXR1cmVzL3N0ZXAvZ2V0U3RlcExhYmVsJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHJlbSBmcm9tICd1dGlscy9zdHlsZS9yZW0nO1xuaW1wb3J0IE5hdmlnYXRpb25UYWJJdGVtIGZyb20gJy4vTmF2aWdhdGlvblRhYkl0ZW0nO1xuXG5jb25zdCBhcnJvd3MgPSBbJ1xcdTI1QjIgJywgJycsICdcXHUyNUJDICddO1xuXG5jb25zdCBuYXZpZ2F0aW9uVGFiU3R5bGVzID0gY3NzYFxuICBtYXJnaW46ICR7cmVtKDEwKX0gMDtcbmA7XG5cbmNvbnN0IHtcbiAgc2VsZWN0RW50aXRpZXM6IHNlbGVjdFN0ZXBFbnRpdGllcyxcbiAgc2VsZWN0SWRzOiBzZWxlY3RTdGVwSWRzLFxufSA9IHN0ZXBBZGFwdGVyLmdldFNlbGVjdG9ycyhzZWxlY3RDaGVja1NjcmlwdFN0ZXApO1xuXG5jb25zdCBOYXZpZ2F0aW9uVGFiOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudFN0ZXBJZCA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRTdGVwSWQpO1xuICBjb25zdCBpZHMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGVwSWRzKTtcbiAgY29uc3QgZW50aXRpZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RTdGVwRW50aXRpZXMpO1xuXG4gIGNvbnN0IHByZXZTdGVwSWQgPSBnZXRQcmV2VmlzaWJsZVN0ZXBJZCh7XG4gICAgaWRzLFxuICAgIGVudGl0aWVzLFxuICAgIGVuZElkOiBjdXJyZW50U3RlcElkLFxuICB9KTtcbiAgY29uc3QgbmV4dFN0ZXBJZCA9IGdldE5leHRWaXNpYmxlU3RlcElkKHtcbiAgICBpZHMsXG4gICAgZW50aXRpZXMsXG4gICAgc3RhcnRJZDogY3VycmVudFN0ZXBJZCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17bmF2aWdhdGlvblRhYlN0eWxlc30+XG4gICAgICB7W3ByZXZTdGVwSWQsIGN1cnJlbnRTdGVwSWQsIG5leHRTdGVwSWRdLm1hcCgoaWQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpZCAmJiBlbnRpdGllc1tpZF0pIHtcbiAgICAgICAgICBjb25zdCBzdGVwID0gZW50aXRpZXNbaWRdO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TmF2aWdhdGlvblRhYkl0ZW1cbiAgICAgICAgICAgICAga2V5PXtgJHtpbmRleH0tJHtpZH1gfVxuICAgICAgICAgICAgICBjdXJyZW50PXtpbmRleCA9PT0gMX1cbiAgICAgICAgICAgICAgbGFiZWw9e2Ake2Fycm93c1tpbmRleF19JHtnZXRTdGVwTGFiZWwoc3RlcCEpfWB9XG4gICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxOYXZpZ2F0aW9uVGFiSXRlbVxuICAgICAgICAgICAga2V5PXtgJHtpbmRleH0tJHtpZH1gfVxuICAgICAgICAgICAgY3VycmVudD17aW5kZXggPT09IDF9XG4gICAgICAgICAgICBsYWJlbD17YXJyb3dzW2luZGV4XX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uVGFiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/navigationTab/NavigationTab.tsx\n");

/***/ })

})