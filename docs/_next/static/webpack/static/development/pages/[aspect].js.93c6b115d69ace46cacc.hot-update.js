webpackHotUpdate("static/development/pages/[aspect].js",{

/***/ "./src/features/step/stepSlice.ts":
/*!****************************************!*\
  !*** ./src/features/step/stepSlice.ts ***!
  \****************************************/
/*! exports provided: default, importSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importSteps\", function() { return importSteps; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepEntityFactory */ \"./src/features/step/stepEntityFactory.ts\");\n\n\n/* eslint-disable no-param-reassign */\n\n\n\nvar instanceOfStepToImport = function instanceOfStepToImport(object) {\n  var _object$script, _object$script2;\n\n  if (!((object === null || object === void 0 ? void 0 : (_object$script = object.script) === null || _object$script === void 0 ? void 0 : _object$script.db) && (object === null || object === void 0 ? void 0 : (_object$script2 = object.script) === null || _object$script2 === void 0 ? void 0 : _object$script2.snippets))) {\n    return false;\n  }\n\n  if (typeof object.script.db !== 'string') {\n    return false;\n  }\n\n  if (!Array.isArray(object.script.snippets)) {\n    return false;\n  }\n\n  for (var i = 0; i < object.script.snippets.length; i += 1) {\n    if (typeof object.script.snippets[i] !== 'string') {\n      return false;\n    }\n  }\n\n  if (object.description !== undefined && typeof object.description !== 'string') {\n    return false;\n  }\n\n  if (object.dependency !== undefined && !Object(_stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__[\"instanceOfDependency\"])(object.dependency)) {\n    return false;\n  }\n\n  if (object.choices !== undefined) {\n    if (!Array.isArray(object.choices)) {\n      return false;\n    }\n\n    for (var _i = 0; _i < object.choices.length; _i += 1) {\n      if (typeof object.choices[_i] !== 'string' || Object(_stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__[\"instanceOfChoice\"])(object.choices[_i])) {\n        return false;\n      }\n    }\n  }\n\n  return true;\n};\n\nvar stepSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"createSlice\"])({\n  name: 'step',\n  initialState: {},\n  reducers: {\n    importSteps: function importSteps(state, action) {\n      if (!(action.payload.steps && Array.isArray(action.payload.steps) && action.payload.types && Array.isArray(action.payload.types))) {\n        return state;\n      }\n\n      var parsedSteps = {};\n      action.payload.types.forEach(function (scriptType, scriptIndex) {\n        parsedSteps[scriptType] = parsedSteps[scriptType] || [];\n        var isFirst = scriptIndex === 0;\n        action.payload.steps.forEach(function (_ref, index) {\n          var id = _ref.id,\n              visible = _ref.visible,\n              stepsByType = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"id\", \"visible\"]);\n\n          var stepToImport = stepsByType[scriptType];\n\n          if (!instanceOfStepToImport(stepToImport)) {\n            return;\n          }\n\n          var choices;\n\n          if (isFirst) {\n            if (stepToImport.choices && Array.isArray(stepToImport.choices)) {\n              choices = stepToImport.choices.reduce(function (obj, choice) {\n                if (typeof choice === 'string') {\n                  obj[choice] = {\n                    id: choice\n                  };\n                } else {\n                  obj[choice.id] = choice;\n                }\n\n                return obj;\n              }, {});\n            } else {\n              choices = {\n                yes: {\n                  id: 'yes'\n                },\n                no: {\n                  id: 'no'\n                }\n              };\n            }\n          }\n\n          parsedSteps[scriptType].push({\n            id: id,\n            visible: visible,\n            scriptType: scriptType,\n            order: index,\n            description: stepToImport.description,\n            script: stepToImport.script,\n            dependency: stepToImport.dependency,\n            choices: choices\n          });\n        });\n      });\n      console.log(parsedSteps);\n      var newState = action.payload.types.reduce(function (obj, scriptType) {\n        var adapter = Object(_stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        obj[scriptType] = adapter.getInitialState();\n        console.log(obj[scriptType]);\n        adapter.setAll(obj[scriptType], parsedSteps[scriptType]);\n        console.log(obj[scriptType]);\n        return obj;\n      }, {});\n      return newState;\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (stepSlice.reducer);\nvar importSteps = stepSlice.actions.importSteps;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc3RlcC9zdGVwU2xpY2UudHM/NTRjMSJdLCJuYW1lcyI6WyJpbnN0YW5jZU9mU3RlcFRvSW1wb3J0Iiwib2JqZWN0Iiwic2NyaXB0IiwiZGIiLCJzbmlwcGV0cyIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdGlvbiIsInVuZGVmaW5lZCIsImRlcGVuZGVuY3kiLCJpbnN0YW5jZU9mRGVwZW5kZW5jeSIsImNob2ljZXMiLCJpbnN0YW5jZU9mQ2hvaWNlIiwic3RlcFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJpbXBvcnRTdGVwcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInN0ZXBzIiwidHlwZXMiLCJwYXJzZWRTdGVwcyIsImZvckVhY2giLCJzY3JpcHRUeXBlIiwic2NyaXB0SW5kZXgiLCJpc0ZpcnN0IiwiaW5kZXgiLCJpZCIsInZpc2libGUiLCJzdGVwc0J5VHlwZSIsInN0ZXBUb0ltcG9ydCIsInJlZHVjZSIsIm9iaiIsImNob2ljZSIsInllcyIsIm5vIiwicHVzaCIsIm9yZGVyIiwiY29uc29sZSIsImxvZyIsIm5ld1N0YXRlIiwiYWRhcHRlciIsInN0ZXBBZGFwdGVyRmFjdG9yeSIsImdldEluaXRpYWxTdGF0ZSIsInNldEFsbCIsInJlZHVjZXIiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQWtDQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLE1BQUQsRUFBeUM7QUFBQTs7QUFDdEUsTUFBSSxFQUFFLENBQUFBLE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sOEJBQUFBLE1BQU0sQ0FBRUMsTUFBUixrRUFBZ0JDLEVBQWhCLE1BQXNCRixNQUF0QixhQUFzQkEsTUFBdEIsMENBQXNCQSxNQUFNLENBQUVDLE1BQTlCLG9EQUFzQixnQkFBZ0JFLFFB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a0JBQU0sRUFBRWlDLFlBQVksQ0FBQ2pDLE1BTk07QUFPM0JTLHNCQUFVLEVBQUV3QixZQUFZLENBQUN4QixVQVBFO0FBUTNCRSxtQkFBTyxFQUFQQTtBQVIyQixXQUE3QjtBQVVELFNBckNIO0FBdUNELE9BMUNEO0FBMkNBOEIsYUFBTyxDQUFDQyxHQUFSLENBQVlsQixXQUFaO0FBQ0EsVUFBTW1CLFFBQVEsR0FBR3ZCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRSxLQUFmLENBQXFCVyxNQUFyQixDQUNmLFVBQUNDLEdBQUQsRUFBTVQsVUFBTixFQUFxQjtBQUNuQixZQUFNa0IsT0FBTyxHQUFHQyxrRUFBa0IsRUFBbEM7QUFDQVYsV0FBRyxDQUFDVCxVQUFELENBQUgsR0FBa0JrQixPQUFPLENBQUNFLGVBQVIsRUFBbEI7QUFDQUwsZUFBTyxDQUFDQyxHQUFSLENBQVlQLEdBQUcsQ0FBQ1QsVUFBRCxDQUFmO0FBQ0FrQixlQUFPLENBQUNHLE1BQVIsQ0FBZVosR0FBRyxDQUFDVCxVQUFELENBQWxCLEVBQWdDRixXQUFXLENBQUNFLFVBQUQsQ0FBM0M7QUFDQWUsZUFBTyxDQUFDQyxHQUFSLENBQVlQLEdBQUcsQ0FBQ1QsVUFBRCxDQUFmO0FBQ0EsZUFBT1MsR0FBUDtBQUNELE9BUmMsRUFTZixFQVRlLENBQWpCO0FBV0EsYUFBT1EsUUFBUDtBQUNEO0FBckVPO0FBSGtCLENBQUQsQ0FBN0I7QUE0RWU5Qix3RUFBUyxDQUFDbUMsT0FBekI7SUFNZTlCLFcsR0FBZ0JMLFNBQVMsQ0FBQ29DLE8sQ0FBMUIvQixXIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL3N0ZXAvc3RlcFNsaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBFbnRpdHlTdGF0ZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHN0ZXBBZGFwdGVyRmFjdG9yeSwge1xuICBTdGVwLFxuICBDaG9pY2UsXG4gIENob2ljZXMsXG4gIERlcGVuZGVuY3ksXG4gIGluc3RhbmNlT2ZEZXBlbmRlbmN5LFxuICBpbnN0YW5jZU9mQ2hvaWNlLFxufSBmcm9tICcuL3N0ZXBFbnRpdHlGYWN0b3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGVwVG9JbXBvcnQge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgY2hvaWNlcz86IChzdHJpbmcgfCBDaG9pY2UpW107XG4gIHNjcmlwdDoge1xuICAgIGRiOiBzdHJpbmc7XG4gICAgc25pcHBldHM6IHN0cmluZ1tdO1xuICB9O1xuICBkZXBlbmRlbmN5PzogRGVwZW5kZW5jeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGVwc1RvSW1wb3J0IHtcbiAgaWQ6IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBTdGVwVG9JbXBvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0QWN0aW9uUGF5bG9hZCB7XG4gIHN0ZXBzPzogU3RlcHNUb0ltcG9ydFtdO1xuICB0eXBlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcFN0YXRlIHtcbiAgW2tleTogc3RyaW5nXTogRW50aXR5U3RhdGU8U3RlcD47XG59XG5cbmNvbnN0IGluc3RhbmNlT2ZTdGVwVG9JbXBvcnQgPSAob2JqZWN0OiBhbnkpOiBvYmplY3QgaXMgU3RlcFRvSW1wb3J0ID0+IHtcbiAgaWYgKCEob2JqZWN0Py5zY3JpcHQ/LmRiICYmIG9iamVjdD8uc2NyaXB0Py5zbmlwcGV0cykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmplY3Quc2NyaXB0LmRiICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0LnNjcmlwdC5zbmlwcGV0cykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3Quc2NyaXB0LnNuaXBwZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3Quc2NyaXB0LnNuaXBwZXRzW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoXG4gICAgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICB0eXBlb2Ygb2JqZWN0LmRlc2NyaXB0aW9uICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKFxuICAgIG9iamVjdC5kZXBlbmRlbmN5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAhaW5zdGFuY2VPZkRlcGVuZGVuY3kob2JqZWN0LmRlcGVuZGVuY3kpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob2JqZWN0LmNob2ljZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3QuY2hvaWNlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuY2hvaWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Ygb2JqZWN0LmNob2ljZXNbaV0gIT09ICdzdHJpbmcnIHx8XG4gICAgICAgIGluc3RhbmNlT2ZDaG9pY2Uob2JqZWN0LmNob2ljZXNbaV0pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHN0ZXBTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3N0ZXAnLFxuICBpbml0aWFsU3RhdGU6IHt9IGFzIFN0ZXBTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbXBvcnRTdGVwczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SW1wb3J0QWN0aW9uUGF5bG9hZD4pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIShcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5zdGVwcyAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQuc3RlcHMpICYmXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQudHlwZXMgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkLnR5cGVzKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkU3RlcHM6IHsgW2tleTogc3RyaW5nXTogU3RlcFtdIH0gPSB7fTtcbiAgICAgIGFjdGlvbi5wYXlsb2FkLnR5cGVzLmZvckVhY2goKHNjcmlwdFR5cGUsIHNjcmlwdEluZGV4KSA9PiB7XG4gICAgICAgIHBhcnNlZFN0ZXBzW3NjcmlwdFR5cGVdID0gcGFyc2VkU3RlcHNbc2NyaXB0VHlwZV0gfHwgW107XG4gICAgICAgIGNvbnN0IGlzRmlyc3QgPSBzY3JpcHRJbmRleCA9PT0gMDtcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuc3RlcHMhLmZvckVhY2goXG4gICAgICAgICAgKHsgaWQsIHZpc2libGUsIC4uLnN0ZXBzQnlUeXBlIH0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwVG9JbXBvcnQgPSBzdGVwc0J5VHlwZVtzY3JpcHRUeXBlXTtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2VPZlN0ZXBUb0ltcG9ydChzdGVwVG9JbXBvcnQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjaG9pY2VzOiBDaG9pY2VzIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICAgICAgaWYgKHN0ZXBUb0ltcG9ydC5jaG9pY2VzICYmIEFycmF5LmlzQXJyYXkoc3RlcFRvSW1wb3J0LmNob2ljZXMpKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlcyA9IHN0ZXBUb0ltcG9ydC5jaG9pY2VzLnJlZHVjZTxDaG9pY2VzPihcbiAgICAgICAgICAgICAgICAgIChvYmosIGNob2ljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNob2ljZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hvaWNlXSA9IHsgaWQ6IGNob2ljZSB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG9ialtjaG9pY2UuaWRdID0gY2hvaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNob2ljZXMgPSB7XG4gICAgICAgICAgICAgICAgICB5ZXM6IHsgaWQ6ICd5ZXMnIH0sXG4gICAgICAgICAgICAgICAgICBubzogeyBpZDogJ25vJyB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlZFN0ZXBzW3NjcmlwdFR5cGVdLnB1c2goe1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgICAgICAgc2NyaXB0VHlwZSxcbiAgICAgICAgICAgICAgb3JkZXI6IGluZGV4LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RlcFRvSW1wb3J0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBzY3JpcHQ6IHN0ZXBUb0ltcG9ydC5zY3JpcHQsXG4gICAgICAgICAgICAgIGRlcGVuZGVuY3k6IHN0ZXBUb0ltcG9ydC5kZXBlbmRlbmN5LFxuICAgICAgICAgICAgICBjaG9pY2VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZyhwYXJzZWRTdGVwcyk7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGVzLnJlZHVjZTxTdGVwU3RhdGU+KFxuICAgICAgICAob2JqLCBzY3JpcHRUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWRhcHRlciA9IHN0ZXBBZGFwdGVyRmFjdG9yeSgpO1xuICAgICAgICAgIG9ialtzY3JpcHRUeXBlXSA9IGFkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgY29uc29sZS5sb2cob2JqW3NjcmlwdFR5cGVdKTtcbiAgICAgICAgICBhZGFwdGVyLnNldEFsbChvYmpbc2NyaXB0VHlwZV0sIHBhcnNlZFN0ZXBzW3NjcmlwdFR5cGVdKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhvYmpbc2NyaXB0VHlwZV0pO1xuICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc3RlcFNsaWNlLnJlZHVjZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2xvYmFsU3RlcFN0YXRlIHtcbiAgc3RlcDogU3RlcFN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgeyBpbXBvcnRTdGVwcyB9ID0gc3RlcFNsaWNlLmFjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/step/stepSlice.ts\n");

/***/ })

})