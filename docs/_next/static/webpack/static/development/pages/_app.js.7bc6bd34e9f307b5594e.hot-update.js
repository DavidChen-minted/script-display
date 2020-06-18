webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/features/databaseScript/databaseScriptSlice.ts":
/*!************************************************************!*\
  !*** ./src/features/databaseScript/databaseScriptSlice.ts ***!
  \************************************************************/
/*! exports provided: default, databaseScriptReceived, importRawDatabaseScripts, updateScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"databaseScriptReceived\", function() { return databaseScriptReceived; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importRawDatabaseScripts\", function() { return importRawDatabaseScripts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateScript\", function() { return updateScript; });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _databaseScriptEntity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./databaseScriptEntity */ \"./src/features/databaseScript/databaseScriptEntity.ts\");\n/* harmony import */ var _importToDatabaseScriptsState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importToDatabaseScriptsState */ \"./src/features/databaseScript/importToDatabaseScriptsState.ts\");\n/* eslint-disable no-param-reassign */\n\n\n\nvar databaseScriptSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'databaseScript',\n  initialState: {\n    scripts: {}\n  },\n  reducers: {\n    databaseScriptReceived: function databaseScriptReceived(state, action) {\n      if (!action.payload) {\n        return state;\n      }\n\n      return action.payload;\n    },\n    importRawDatabaseScripts: function importRawDatabaseScripts(state, action) {\n      var scripts = Object(_importToDatabaseScriptsState__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(action.payload);\n\n      if (scripts) {\n        state.scripts = scripts;\n      }\n\n      return state;\n    },\n    updateScript: function updateScript(state, action) {\n      var _action$payload = action.payload,\n          stepId = _action$payload.stepId,\n          scriptType = _action$payload.scriptType,\n          script = _action$payload.script;\n\n      if (stepId && scriptType) {\n        _databaseScriptEntity__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateOne(state.scripts[scriptType], {\n          id: stepId,\n          changes: {\n            script: script\n          }\n        });\n      }\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (databaseScriptSlice.reducer);\nvar _databaseScriptSlice$ = databaseScriptSlice.actions,\n    databaseScriptReceived = _databaseScriptSlice$.databaseScriptReceived,\n    importRawDatabaseScripts = _databaseScriptSlice$.importRawDatabaseScripts,\n    updateScript = _databaseScriptSlice$.updateScript;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZGF0YWJhc2VTY3JpcHQvZGF0YWJhc2VTY3JpcHRTbGljZS50cz8xNjQ3Il0sIm5hbWVzIjpbImRhdGFiYXNlU2NyaXB0U2xpY2UiLCJjcmVhdGVTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJzY3JpcHRzIiwicmVkdWNlcnMiLCJkYXRhYmFzZVNjcmlwdFJlY2VpdmVkIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiaW1wb3J0UmF3RGF0YWJhc2VTY3JpcHRzIiwiaW1wb3J0VG9EYXRhYmFzZVNjcmlwdHNTdGF0ZSIsInVwZGF0ZVNjcmlwdCIsInN0ZXBJZCIsInNjcmlwdFR5cGUiLCJzY3JpcHQiLCJkYXRhYmFzZVNjcmlwdEFkYXB0ZXIiLCJ1cGRhdGVPbmUiLCJpZCIsImNoYW5nZXMiLCJyZWR1Y2VyIiwiYWN0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQVlBLElBQU1BLG1CQUFtQixHQUFHQyxvRUFBVyxDQUFDO0FBQ3RDQyxNQUFJLEVBQUUsZ0JBRGdDO0FBRXRDQyxjQUFZLEVBQUU7QUFDWkMsV0FBTyxFQUFFO0FBREcsR0FGd0I7QUFLdENDLFVBQVEsRUFBRTtBQUNSQywwQkFBc0IsRUFBRSxnQ0FDdEJDLEtBRHNCLEVBRXRCQyxNQUZzQixFQUduQjtBQUNILFVBQUksQ0FBQ0EsTUFBTSxDQUFDQyxPQUFaLEVBQXFCO0FBQ25CLGVBQU9GLEtBQVA7QUFDRDs7QUFDRCxhQUFPQyxNQUFNLENBQUNDLE9BQWQ7QUFDRCxLQVRPO0FBVVJDLDRCQUF3QixFQUFFLGtDQUN4QkgsS0FEd0IsRUFFeEJDLE1BRndCLEVBR3JCO0FBQ0gsVUFBTUosT0FBTyxHQUFHTyw2RUFBNEIsQ0FBQ0gsTUFBTSxDQUFDQyxPQUFSLENBQTVDOztBQUNBLFVBQUlMLE9BQUosRUFBYTtBQUNYRyxhQUFLLENBQUNILE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0Q7O0FBQ0QsYUFBT0csS0FBUDtBQUNELEtBbkJPO0FBb0JSSyxnQkFBWSxFQUFFLHNCQUNaTCxLQURZLEVBRVpDLE1BRlksRUFPVDtBQUFBLDRCQUNvQ0EsTUFBTSxDQUFDQyxPQUQzQztBQUFBLFVBQ0tJLE1BREwsbUJBQ0tBLE1BREw7QUFBQSxVQUNhQyxVQURiLG1CQUNhQSxVQURiO0FBQUEsVUFDeUJDLE1BRHpCLG1CQUN5QkEsTUFEekI7O0FBRUgsVUFBSUYsTUFBTSxJQUFJQyxVQUFkLEVBQTBCO0FBQ3hCRSxxRUFBcUIsQ0FBQ0MsU0FBdEIsQ0FBZ0NWLEtBQUssQ0FBQ0gsT0FBTixDQUFjVSxVQUFkLENBQWhDLEVBQTJEO0FBQ3pESSxZQUFFLEVBQUVMLE1BRHFEO0FBRXpETSxpQkFBTyxFQUFFO0FBQUVKLGtCQUFNLEVBQU5BO0FBQUY7QUFGZ0QsU0FBM0Q7QUFJRDtBQUNGO0FBbkNPO0FBTDRCLENBQUQsQ0FBdkM7QUE0Q2VmLGtGQUFtQixDQUFDb0IsT0FBbkM7NEJBVUlwQixtQkFBbUIsQ0FBQ3FCLE87SUFIdEJmLHNCLHlCQUFBQSxzQjtJQUNBSSx3Qix5QkFBQUEsd0I7SUFDQUUsWSx5QkFBQUEsWSIsImZpbGUiOiIuL3NyYy9mZWF0dXJlcy9kYXRhYmFzZVNjcmlwdC9kYXRhYmFzZVNjcmlwdFNsaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgZGF0YWJhc2VTY3JpcHRBZGFwdGVyLCB7XG4gIGRhdGFiYXNlU2NyaXB0RW50aXR5U3RhdGUsXG59IGZyb20gJy4vZGF0YWJhc2VTY3JpcHRFbnRpdHknO1xuaW1wb3J0IGltcG9ydFRvRGF0YWJhc2VTY3JpcHRzU3RhdGUsIHtcbiAgSW1wb3J0VG9EYXRhYmFzZVNjcmlwdHNTdGF0ZUFyZ3MsXG59IGZyb20gJy4vaW1wb3J0VG9EYXRhYmFzZVNjcmlwdHNTdGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YWJhc2VTY3JpcHRzU3RhdGUge1xuICBba2V5OiBzdHJpbmddOiBkYXRhYmFzZVNjcmlwdEVudGl0eVN0YXRlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlU2NyaXB0U3RhdGUge1xuICBzY3JpcHRzOiBEYXRhYmFzZVNjcmlwdHNTdGF0ZTtcbn1cblxuY29uc3QgZGF0YWJhc2VTY3JpcHRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ2RhdGFiYXNlU2NyaXB0JyxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgc2NyaXB0czoge30sXG4gIH0gYXMgRGF0YWJhc2VTY3JpcHRTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBkYXRhYmFzZVNjcmlwdFJlY2VpdmVkOiAoXG4gICAgICBzdGF0ZSxcbiAgICAgIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxEYXRhYmFzZVNjcmlwdFN0YXRlIHwgdW5kZWZpbmVkPlxuICAgICkgPT4ge1xuICAgICAgaWYgKCFhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgICBpbXBvcnRSYXdEYXRhYmFzZVNjcmlwdHM6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEltcG9ydFRvRGF0YWJhc2VTY3JpcHRzU3RhdGVBcmdzPlxuICAgICkgPT4ge1xuICAgICAgY29uc3Qgc2NyaXB0cyA9IGltcG9ydFRvRGF0YWJhc2VTY3JpcHRzU3RhdGUoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgaWYgKHNjcmlwdHMpIHtcbiAgICAgICAgc3RhdGUuc2NyaXB0cyA9IHNjcmlwdHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfSxcbiAgICB1cGRhdGVTY3JpcHQ6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHtcbiAgICAgICAgc3RlcElkOiBzdHJpbmc7XG4gICAgICAgIHNjcmlwdFR5cGU6IHN0cmluZztcbiAgICAgICAgc2NyaXB0OiBzdHJpbmc7XG4gICAgICB9PlxuICAgICkgPT4ge1xuICAgICAgY29uc3QgeyBzdGVwSWQsIHNjcmlwdFR5cGUsIHNjcmlwdCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBpZiAoc3RlcElkICYmIHNjcmlwdFR5cGUpIHtcbiAgICAgICAgZGF0YWJhc2VTY3JpcHRBZGFwdGVyLnVwZGF0ZU9uZShzdGF0ZS5zY3JpcHRzW3NjcmlwdFR5cGVdLCB7XG4gICAgICAgICAgaWQ6IHN0ZXBJZCxcbiAgICAgICAgICBjaGFuZ2VzOiB7IHNjcmlwdCB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGFiYXNlU2NyaXB0U2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxEYXRhYmFzZVNjcmlwdFN0YXRlIHtcbiAgZGF0YWJhc2VTY3JpcHQ6IERhdGFiYXNlU2NyaXB0U3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCB7XG4gIGRhdGFiYXNlU2NyaXB0UmVjZWl2ZWQsXG4gIGltcG9ydFJhd0RhdGFiYXNlU2NyaXB0cyxcbiAgdXBkYXRlU2NyaXB0LFxufSA9IGRhdGFiYXNlU2NyaXB0U2xpY2UuYWN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/databaseScript/databaseScriptSlice.ts\n");

/***/ })

})