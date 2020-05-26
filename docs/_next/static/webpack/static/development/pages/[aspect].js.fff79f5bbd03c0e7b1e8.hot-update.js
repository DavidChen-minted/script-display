webpackHotUpdate("static/development/pages/[aspect].js",{

/***/ "./src/features/step/stepSlice.ts":
/*!****************************************!*\
  !*** ./src/features/step/stepSlice.ts ***!
  \****************************************/
/*! exports provided: default, importSteps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importSteps\", function() { return importSteps; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stepEntityFactory */ \"./src/features/step/stepEntityFactory.ts\");\n\n\n/* eslint-disable no-param-reassign */\n\n\n\nvar instanceOfStepToImport = function instanceOfStepToImport(object) {\n  var _object$script, _object$script2;\n\n  if (!((object === null || object === void 0 ? void 0 : (_object$script = object.script) === null || _object$script === void 0 ? void 0 : _object$script.db) && (object === null || object === void 0 ? void 0 : (_object$script2 = object.script) === null || _object$script2 === void 0 ? void 0 : _object$script2.snippets))) {\n    return false;\n  }\n\n  if (typeof object.script.db !== 'string') {\n    return false;\n  }\n\n  if (!Array.isArray(object.script.snippets)) {\n    return false;\n  }\n\n  for (var i = 0; i < object.script.snippets.length; i += 1) {\n    if (typeof object.script.snippets[i] !== 'string') {\n      return false;\n    }\n  }\n\n  if (object.description !== undefined && typeof object.description !== 'string') {\n    return false;\n  }\n\n  if (object.dependency !== undefined && !Object(_stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__[\"instanceOfDependency\"])(object.dependency)) {\n    return false;\n  }\n\n  if (object.choices !== undefined) {\n    if (!Array.isArray(object.choices)) {\n      return false;\n    }\n\n    for (var _i = 0; _i < object.choices.length; _i += 1) {\n      if (typeof object.choices[_i] !== 'string' || Object(_stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__[\"instanceOfChoice\"])(object.choices[_i])) {\n        return false;\n      }\n    }\n  }\n\n  return true;\n};\n\nvar stepSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"createSlice\"])({\n  name: 'step',\n  initialState: {},\n  reducers: {\n    importSteps: function importSteps(state, action) {\n      if (!(action.payload.steps && Array.isArray(action.payload.steps) && action.payload.types && Array.isArray(action.payload.types))) {\n        return state;\n      }\n\n      var parsedSteps = {};\n      action.payload.types.forEach(function (scriptType, scriptIndex) {\n        parsedSteps[scriptType] = parsedSteps[scriptType] || [];\n        var isFirst = scriptIndex === 0;\n        action.payload.steps.forEach(function (_ref, index) {\n          var id = _ref.id,\n              visible = _ref.visible,\n              stepsByType = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_ref, [\"id\", \"visible\"]);\n\n          var stepToImport = stepsByType[scriptType];\n\n          if (!instanceOfStepToImport(stepToImport)) {\n            return;\n          }\n\n          var choices;\n\n          if (isFirst) {\n            if (stepToImport.choices && Array.isArray(stepToImport.choices)) {\n              choices = stepToImport.choices.reduce(function (obj, choice) {\n                if (typeof choice === 'string') {\n                  obj[choice] = {\n                    id: choice\n                  };\n                } else {\n                  obj[choice.id] = choice;\n                }\n\n                return obj;\n              }, {});\n            } else {\n              choices = {\n                yes: {\n                  id: 'yes'\n                },\n                no: {\n                  id: 'no'\n                }\n              };\n            }\n          }\n\n          parsedSteps[scriptType].push({\n            id: id,\n            visible: visible,\n            scriptType: scriptType,\n            order: index,\n            description: stepToImport.description,\n            script: stepToImport.script,\n            dependency: stepToImport.dependency,\n            choices: choices\n          });\n        });\n      });\n      var newState = action.payload.types.reduce(function (obj, scriptType) {\n        var adapter = Object(_stepEntityFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        obj[scriptType] = adapter.getInitialState();\n        adapter.setAll(obj[scriptType], parsedSteps[scriptType]);\n        return obj;\n      }, {});\n      return newState;\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (stepSlice.reducer);\nvar importSteps = stepSlice.actions.importSteps;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvc3RlcC9zdGVwU2xpY2UudHM/NTRjMSJdLCJuYW1lcyI6WyJpbnN0YW5jZU9mU3RlcFRvSW1wb3J0Iiwib2JqZWN0Iiwic2NyaXB0IiwiZGIiLCJzbmlwcGV0cyIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJkZXNjcmlwdGlvbiIsInVuZGVmaW5lZCIsImRlcGVuZGVuY3kiLCJpbnN0YW5jZU9mRGVwZW5kZW5jeSIsImNob2ljZXMiLCJpbnN0YW5jZU9mQ2hvaWNlIiwic3RlcFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlcnMiLCJpbXBvcnRTdGVwcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInN0ZXBzIiwidHlwZXMiLCJwYXJzZWRTdGVwcyIsImZvckVhY2giLCJzY3JpcHRUeXBlIiwic2NyaXB0SW5kZXgiLCJpc0ZpcnN0IiwiaW5kZXgiLCJpZCIsInZpc2libGUiLCJzdGVwc0J5VHlwZSIsInN0ZXBUb0ltcG9ydCIsInJlZHVjZSIsIm9iaiIsImNob2ljZSIsInllcyIsIm5vIiwicHVzaCIsIm9yZGVyIiwibmV3U3RhdGUiLCJhZGFwdGVyIiwic3RlcEFkYXB0ZXJGYWN0b3J5IiwiZ2V0SW5pdGlhbFN0YXRlIiwic2V0QWxsIiwicmVkdWNlciIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBa0NBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsTUFBRCxFQUF5QztBQUFBOztBQUN0RSxNQUFJLEVBQUUsQ0FBQUEsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTiw4QkFBQUEsTUFBTSxDQUFFQyxNQUFSLGtFQUFnQkMsRUFBaEIsTUFBc0JGLE1BQXRCLGFBQXNCQSxNQUF0QiwwQ0FBc0JBLE1BQU0sQ0FBRUMsTUFBOUIsb0RBQXNCLGdCQUFnQkUsUUFBdEMsQ0FBRixDQUFKLEVB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WSxDQUFDakMsTUFOTTtBQU8zQlMsc0JBQVUsRUFBRXdCLFlBQVksQ0FBQ3hCLFVBUEU7QUFRM0JFLG1CQUFPLEVBQVBBO0FBUjJCLFdBQTdCO0FBVUQsU0FyQ0g7QUF1Q0QsT0ExQ0Q7QUEyQ0EsVUFBTThCLFFBQVEsR0FBR3JCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRSxLQUFmLENBQXFCVyxNQUFyQixDQUNmLFVBQUNDLEdBQUQsRUFBTVQsVUFBTixFQUFxQjtBQUNuQixZQUFNZ0IsT0FBTyxHQUFHQyxrRUFBa0IsRUFBbEM7QUFDQVIsV0FBRyxDQUFDVCxVQUFELENBQUgsR0FBa0JnQixPQUFPLENBQUNFLGVBQVIsRUFBbEI7QUFDQUYsZUFBTyxDQUFDRyxNQUFSLENBQWVWLEdBQUcsQ0FBQ1QsVUFBRCxDQUFsQixFQUFnQ0YsV0FBVyxDQUFDRSxVQUFELENBQTNDO0FBQ0EsZUFBT1MsR0FBUDtBQUNELE9BTmMsRUFPZixFQVBlLENBQWpCO0FBU0EsYUFBT00sUUFBUDtBQUNEO0FBbEVPO0FBSGtCLENBQUQsQ0FBN0I7QUF5RWU1Qix3RUFBUyxDQUFDaUMsT0FBekI7SUFNZTVCLFcsR0FBZ0JMLFNBQVMsQ0FBQ2tDLE8sQ0FBMUI3QixXIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL3N0ZXAvc3RlcFNsaWNlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBFbnRpdHlTdGF0ZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuaW1wb3J0IHN0ZXBBZGFwdGVyRmFjdG9yeSwge1xuICBTdGVwLFxuICBDaG9pY2UsXG4gIENob2ljZXMsXG4gIERlcGVuZGVuY3ksXG4gIGluc3RhbmNlT2ZEZXBlbmRlbmN5LFxuICBpbnN0YW5jZU9mQ2hvaWNlLFxufSBmcm9tICcuL3N0ZXBFbnRpdHlGYWN0b3J5JztcblxuZXhwb3J0IGludGVyZmFjZSBTdGVwVG9JbXBvcnQge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgY2hvaWNlcz86IChzdHJpbmcgfCBDaG9pY2UpW107XG4gIHNjcmlwdDoge1xuICAgIGRiOiBzdHJpbmc7XG4gICAgc25pcHBldHM6IHN0cmluZ1tdO1xuICB9O1xuICBkZXBlbmRlbmN5PzogRGVwZW5kZW5jeTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdGVwc1RvSW1wb3J0IHtcbiAgaWQ6IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW47XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfCB1bmRlZmluZWQgfCBTdGVwVG9JbXBvcnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0QWN0aW9uUGF5bG9hZCB7XG4gIHN0ZXBzPzogU3RlcHNUb0ltcG9ydFtdO1xuICB0eXBlczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RlcFN0YXRlIHtcbiAgW2tleTogc3RyaW5nXTogRW50aXR5U3RhdGU8U3RlcD47XG59XG5cbmNvbnN0IGluc3RhbmNlT2ZTdGVwVG9JbXBvcnQgPSAob2JqZWN0OiBhbnkpOiBvYmplY3QgaXMgU3RlcFRvSW1wb3J0ID0+IHtcbiAgaWYgKCEob2JqZWN0Py5zY3JpcHQ/LmRiICYmIG9iamVjdD8uc2NyaXB0Py5zbmlwcGV0cykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmplY3Quc2NyaXB0LmRiICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0LnNjcmlwdC5zbmlwcGV0cykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3Quc2NyaXB0LnNuaXBwZXRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHR5cGVvZiBvYmplY3Quc2NyaXB0LnNuaXBwZXRzW2ldICE9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoXG4gICAgb2JqZWN0LmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgJiZcbiAgICB0eXBlb2Ygb2JqZWN0LmRlc2NyaXB0aW9uICE9PSAnc3RyaW5nJ1xuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKFxuICAgIG9iamVjdC5kZXBlbmRlbmN5ICE9PSB1bmRlZmluZWQgJiZcbiAgICAhaW5zdGFuY2VPZkRlcGVuZGVuY3kob2JqZWN0LmRlcGVuZGVuY3kpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAob2JqZWN0LmNob2ljZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShvYmplY3QuY2hvaWNlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3QuY2hvaWNlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2Ygb2JqZWN0LmNob2ljZXNbaV0gIT09ICdzdHJpbmcnIHx8XG4gICAgICAgIGluc3RhbmNlT2ZDaG9pY2Uob2JqZWN0LmNob2ljZXNbaV0pXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHN0ZXBTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgbmFtZTogJ3N0ZXAnLFxuICBpbml0aWFsU3RhdGU6IHt9IGFzIFN0ZXBTdGF0ZSxcbiAgcmVkdWNlcnM6IHtcbiAgICBpbXBvcnRTdGVwczogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SW1wb3J0QWN0aW9uUGF5bG9hZD4pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIShcbiAgICAgICAgICBhY3Rpb24ucGF5bG9hZC5zdGVwcyAmJlxuICAgICAgICAgIEFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQuc3RlcHMpICYmXG4gICAgICAgICAgYWN0aW9uLnBheWxvYWQudHlwZXMgJiZcbiAgICAgICAgICBBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkLnR5cGVzKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgICAgY29uc3QgcGFyc2VkU3RlcHM6IHsgW2tleTogc3RyaW5nXTogU3RlcFtdIH0gPSB7fTtcbiAgICAgIGFjdGlvbi5wYXlsb2FkLnR5cGVzLmZvckVhY2goKHNjcmlwdFR5cGUsIHNjcmlwdEluZGV4KSA9PiB7XG4gICAgICAgIHBhcnNlZFN0ZXBzW3NjcmlwdFR5cGVdID0gcGFyc2VkU3RlcHNbc2NyaXB0VHlwZV0gfHwgW107XG4gICAgICAgIGNvbnN0IGlzRmlyc3QgPSBzY3JpcHRJbmRleCA9PT0gMDtcbiAgICAgICAgYWN0aW9uLnBheWxvYWQuc3RlcHMhLmZvckVhY2goXG4gICAgICAgICAgKHsgaWQsIHZpc2libGUsIC4uLnN0ZXBzQnlUeXBlIH0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGVwVG9JbXBvcnQgPSBzdGVwc0J5VHlwZVtzY3JpcHRUeXBlXTtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2VPZlN0ZXBUb0ltcG9ydChzdGVwVG9JbXBvcnQpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjaG9pY2VzOiBDaG9pY2VzIHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgICAgICAgICAgaWYgKHN0ZXBUb0ltcG9ydC5jaG9pY2VzICYmIEFycmF5LmlzQXJyYXkoc3RlcFRvSW1wb3J0LmNob2ljZXMpKSB7XG4gICAgICAgICAgICAgICAgY2hvaWNlcyA9IHN0ZXBUb0ltcG9ydC5jaG9pY2VzLnJlZHVjZTxDaG9pY2VzPihcbiAgICAgICAgICAgICAgICAgIChvYmosIGNob2ljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNob2ljZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbY2hvaWNlXSA9IHsgaWQ6IGNob2ljZSB9O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIG9ialtjaG9pY2UuaWRdID0gY2hvaWNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNob2ljZXMgPSB7XG4gICAgICAgICAgICAgICAgICB5ZXM6IHsgaWQ6ICd5ZXMnIH0sXG4gICAgICAgICAgICAgICAgICBubzogeyBpZDogJ25vJyB9LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlZFN0ZXBzW3NjcmlwdFR5cGVdLnB1c2goe1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgdmlzaWJsZSxcbiAgICAgICAgICAgICAgc2NyaXB0VHlwZSxcbiAgICAgICAgICAgICAgb3JkZXI6IGluZGV4LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RlcFRvSW1wb3J0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBzY3JpcHQ6IHN0ZXBUb0ltcG9ydC5zY3JpcHQsXG4gICAgICAgICAgICAgIGRlcGVuZGVuY3k6IHN0ZXBUb0ltcG9ydC5kZXBlbmRlbmN5LFxuICAgICAgICAgICAgICBjaG9pY2VzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IGFjdGlvbi5wYXlsb2FkLnR5cGVzLnJlZHVjZTxTdGVwU3RhdGU+KFxuICAgICAgICAob2JqLCBzY3JpcHRUeXBlKSA9PiB7XG4gICAgICAgICAgY29uc3QgYWRhcHRlciA9IHN0ZXBBZGFwdGVyRmFjdG9yeSgpO1xuICAgICAgICAgIG9ialtzY3JpcHRUeXBlXSA9IGFkYXB0ZXIuZ2V0SW5pdGlhbFN0YXRlKCk7XG4gICAgICAgICAgYWRhcHRlci5zZXRBbGwob2JqW3NjcmlwdFR5cGVdLCBwYXJzZWRTdGVwc1tzY3JpcHRUeXBlXSk7XG4gICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdGVwU2xpY2UucmVkdWNlcjtcblxuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxTdGVwU3RhdGUge1xuICBzdGVwOiBTdGVwU3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCB7IGltcG9ydFN0ZXBzIH0gPSBzdGVwU2xpY2UuYWN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/step/stepSlice.ts\n");

/***/ })

})