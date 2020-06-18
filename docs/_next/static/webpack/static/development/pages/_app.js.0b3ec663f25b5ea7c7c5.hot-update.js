webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/features/dependency/dependencyCheckSlice.ts":
/*!*********************************************************!*\
  !*** ./src/features/dependency/dependencyCheckSlice.ts ***!
  \*********************************************************/
/*! exports provided: default, dependencyCheckReceived, updateDependencyCheckList, resolveAllDependency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dependencyCheckReceived\", function() { return dependencyCheckReceived; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateDependencyCheckList\", function() { return updateDependencyCheckList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveAllDependency\", function() { return resolveAllDependency; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dependencyCheckEntity */ \"./src/features/dependency/dependencyCheckEntity.ts\");\n/* harmony import */ var _StepNodeRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepNodeRecord */ \"./src/features/dependency/StepNodeRecord.ts\");\n/* harmony import */ var _DependencyQueue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DependencyQueue */ \"./src/features/dependency/DependencyQueue.ts\");\n/* harmony import */ var _isIncludedInDependencyArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isIncludedInDependencyArray */ \"./src/features/dependency/isIncludedInDependencyArray.ts\");\n/* harmony import */ var _importToDependencyChecks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./importToDependencyChecks */ \"./src/features/dependency/importToDependencyChecks.ts\");\n\n\n/* eslint-disable no-param-reassign */\n\n\n\n\n\n\nvar dependencyCheckSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__[\"createSlice\"])({\n  name: 'dependencyCheck',\n  initialState: {\n    dependencyChecks: {}\n  },\n  reducers: {\n    dependencyCheckReceived: function dependencyCheckReceived(state, action) {\n      if (!action.payload) {\n        return state;\n      }\n\n      state.dependencyChecks = action.payload.dependencyChecks;\n      return state;\n    },\n    importRawDependencyChecks: function importRawDependencyChecks(state, action) {\n      var dependencyChecks = Object(_importToDependencyChecks__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(action.payload);\n\n      if (dependencyChecks) {\n        state.dependencyChecks = dependencyChecks;\n      }\n\n      return state;\n    },\n    updateDependencyCheckList: function updateDependencyCheckList(state, action) {\n      var _action$payload = action.payload,\n          id = _action$payload.id,\n          scriptType = _action$payload.scriptType,\n          dependencyCheckList = _action$payload.dependencyCheckList;\n\n      if (id && scriptType) {\n        _dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateOne(state.dependencyChecks[scriptType], {\n          id: id,\n          changes: {\n            dependencyCheckList: dependencyCheckList\n          }\n        });\n      }\n    },\n    resolveAllDependency: function resolveAllDependency(state, action) {\n      var scriptTypes = action.payload;\n\n      if (!scriptTypes.length) {\n        return;\n      }\n\n      var resolved = new _StepNodeRecord__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n      var seen = new _StepNodeRecord__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n      /* function to\n        1. copy the dependencyCheckList to the last node\n        1. remove last node in queue\n        3. add last node to resolved if there are still nodes in queue\n      */\n\n      Object.keys(state.dependencyChecks).forEach(function (scriptType) {\n        // loop through each scriptType\n        state.dependencyChecks[scriptType].ids.forEach(function (id) {\n          // loop through each dependency element in each scriptType\n          var stepId = id.toString(); // clear queue\n\n          var queue = new _DependencyQueue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n            scriptType: scriptType,\n            stepId: stepId\n          });\n\n          while (queue.length) {\n            // make sure processing every node in queue\n            // current pointer node\n            var nodeToCheck = queue[queue.length - 1]; // find the current node in the state\n\n            var stepToUpdate = state.dependencyChecks[nodeToCheck.scriptType].entities[nodeToCheck.stepId];\n\n            if (resolved.includes(nodeToCheck)) {\n              // if current node is resolved\n              queue.pop();\n            } else if (stepToUpdate) {\n              // current node still have dependency to resolve\n              if (!seen.includes(nodeToCheck)) {\n                // if current node not seen before\n                // initiate current node's dependency array\n                stepToUpdate.dependencyCheckList = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stepToUpdate.dependency); // add current node to seen\n\n                seen.add(nodeToCheck);\n                stepToUpdate.dependency.forEach(function (node) {\n                  // loop through each node in dependency\n                  // default dependency's scriptType to the first type in scriptTypes\n                  node.type = node.type || scriptTypes[0]; // construct nextNode\n\n                  var nextNode = {\n                    scriptType: node.type,\n                    stepId: node.stepId\n                  };\n\n                  if (queue.includes(nextNode)) {\n                    // if nextNode is met in the queue before,\n                    // it means there's circular dependency\n                    throw new Error('circular dependency detected');\n                  } else {\n                    // nextNode is safe to add to queue\n                    queue.push(nextNode);\n                  }\n                });\n              } else {\n                (function () {\n                  // current node has been seen before\n                  // it implies that current node have all nodes in dependency resolved\n                  var _stepToUpdate$depende = stepToUpdate.dependencyCheckList,\n                      dependencyCheckList = _stepToUpdate$depende === void 0 ? [] : _stepToUpdate$depende;\n\n                  var _loop = function _loop(i) {\n                    var _state$dependencyChec;\n\n                    // loop through every node in current dependency check list from the end\n                    // step that corresponds to current node to replace\n                    var stepToReplace = (_state$dependencyChec = state.dependencyChecks[dependencyCheckList[i].type || '']) === null || _state$dependencyChec === void 0 ? void 0 : _state$dependencyChec.entities[dependencyCheckList[i].stepId];\n\n                    if (stepToReplace) {\n                      var _stepToReplace$depend;\n\n                      // if stepToReplace exists\n                      // it means the stepToReplace has dependencyCheckList to replace\n                      // remove the current nodeToReplace first\n                      var nodeToReplace = dependencyCheckList.splice(i, 1)[0]; // copy stepToReplace's dependencyCheckList to stepToUpdate's dependencyCheckList\n                      // without duplicated nodes\n                      // eslint-disable-next-line no-unused-expressions\n\n                      (_stepToReplace$depend = stepToReplace.dependencyCheckList) === null || _stepToReplace$depend === void 0 ? void 0 : _stepToReplace$depend.forEach(function (node) {\n                        if (!Object(_isIncludedInDependencyArray__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(node, dependencyCheckList)) {\n                          dependencyCheckList.splice(i, 0, node);\n                        }\n                      }); // insert the current nodeToReplace again if not exists\n\n                      if (!Object(_isIncludedInDependencyArray__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(nodeToReplace, dependencyCheckList)) {\n                        dependencyCheckList.splice(i, 0, nodeToReplace);\n                      }\n                    }\n                  };\n\n                  for (var i = dependencyCheckList.length - 1; i >= 0; i -= 1) {\n                    _loop(i);\n                  }\n\n                  resolved.add(nodeToCheck);\n                  queue.pop();\n                })();\n              }\n            } else {\n              // current node does not have any dependency\n              resolved.add(nodeToCheck);\n              queue.pop();\n            }\n          }\n        });\n      });\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (dependencyCheckSlice.reducer);\nvar _dependencyCheckSlice = dependencyCheckSlice.actions,\n    dependencyCheckReceived = _dependencyCheckSlice.dependencyCheckReceived,\n    updateDependencyCheckList = _dependencyCheckSlice.updateDependencyCheckList,\n    resolveAllDependency = _dependencyCheckSlice.resolveAllDependency;\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZGVwZW5kZW5jeS9kZXBlbmRlbmN5Q2hlY2tTbGljZS50cz9iYTRkIl0sIm5hbWVzIjpbImRlcGVuZGVuY3lDaGVja1NsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiZGVwZW5kZW5jeUNoZWNrcyIsInJlZHVjZXJzIiwiZGVwZW5kZW5jeUNoZWNrUmVjZWl2ZWQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJpbXBvcnRSYXdEZXBlbmRlbmN5Q2hlY2tzIiwiaW1wb3J0VG9EZXBlbmRlbmN5Q2hlY2tzIiwidXBkYXRlRGVwZW5kZW5jeUNoZWNrTGlzdCIsImlkIiwic2NyaXB0VHlwZSIsImRlcGVuZGVuY3lDaGVja0xpc3QiLCJkZXBlbmRlbmN5Q2hlY2tBZGFwdGVyIiwidXBkYXRlT25lIiwiY2hhbmdlcyIsInJlc29sdmVBbGxEZXBlbmRlbmN5Iiwic2NyaXB0VHlwZXMiLCJsZW5ndGgiLCJyZXNvbHZlZCIsIlN0ZXBOb2RlUmVjb3JkIiwic2VlbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiaWRzIiwic3RlcElkIiwidG9TdHJpbmciLCJxdWV1ZSIsIkRlcGVuZGVuY3lRdWV1ZSIsIm5vZGVUb0NoZWNrIiwic3RlcFRvVXBkYXRlIiwiZW50aXRpZXMiLCJpbmNsdWRlcyIsInBvcCIsImRlcGVuZGVuY3kiLCJhZGQiLCJub2RlIiwidHlwZSIsIm5leHROb2RlIiwiRXJyb3IiLCJwdXNoIiwiaSIsInN0ZXBUb1JlcGxhY2UiLCJub2RlVG9SZXBsYWNlIiwic3BsaWNlIiwiaXNJbmNsdWRlZEluRGVwZW5kZW5jeUFycmF5IiwicmVkdWNlciIsImFjdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQVlBLElBQU1BLG9CQUFvQixHQUFHQyxvRUFBVyxDQUFDO0FBQ3ZDQyxNQUFJLEVBQUUsaUJB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QUFBQSx1QjtJQUNBTSx5Qix5QkFBQUEseUI7SUFDQU8sb0IseUJBQUFBLG9CIiwiZmlsZSI6Ii4vc3JjL2ZlYXR1cmVzL2RlcGVuZGVuY3kvZGVwZW5kZW5jeUNoZWNrU2xpY2UudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBkZXBlbmRlbmN5Q2hlY2tBZGFwdGVyLCB7XG4gIERlcGVuZGVuY3ksXG4gIERlcGVuZGVuY3lDaGVja0VudGl0eVN0YXRlLFxufSBmcm9tICcuL2RlcGVuZGVuY3lDaGVja0VudGl0eSc7XG5pbXBvcnQgU3RlcE5vZGVSZWNvcmQgZnJvbSAnLi9TdGVwTm9kZVJlY29yZCc7XG5pbXBvcnQgRGVwZW5kZW5jeVF1ZXVlIGZyb20gJy4vRGVwZW5kZW5jeVF1ZXVlJztcbmltcG9ydCBpc0luY2x1ZGVkSW5EZXBlbmRlbmN5QXJyYXkgZnJvbSAnLi9pc0luY2x1ZGVkSW5EZXBlbmRlbmN5QXJyYXknO1xuaW1wb3J0IGltcG9ydFRvRGVwZW5kZW5jeUNoZWNrcywge1xuICBJbXBvcnRUb0RlcGVuZGVuY3lDaGVja3NBcmdzLFxufSBmcm9tICcuL2ltcG9ydFRvRGVwZW5kZW5jeUNoZWNrcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVwZW5kZW5jeUNoZWNrc1N0YXRlIHtcbiAgW2tleTogc3RyaW5nXTogRGVwZW5kZW5jeUNoZWNrRW50aXR5U3RhdGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVwZW5kZW5jeUNoZWNrU3RhdGUge1xuICBkZXBlbmRlbmN5Q2hlY2tzOiBEZXBlbmRlbmN5Q2hlY2tzU3RhdGU7XG59XG5cbmNvbnN0IGRlcGVuZGVuY3lDaGVja1NsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiAnZGVwZW5kZW5jeUNoZWNrJyxcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgZGVwZW5kZW5jeUNoZWNrczoge30sXG4gIH0gYXMgRGVwZW5kZW5jeUNoZWNrU3RhdGUsXG4gIHJlZHVjZXJzOiB7XG4gICAgZGVwZW5kZW5jeUNoZWNrUmVjZWl2ZWQ6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPERlcGVuZGVuY3lDaGVja1N0YXRlIHwgdW5kZWZpbmVkPlxuICAgICkgPT4ge1xuICAgICAgaWYgKCFhY3Rpb24ucGF5bG9hZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgICBzdGF0ZS5kZXBlbmRlbmN5Q2hlY2tzID0gYWN0aW9uLnBheWxvYWQuZGVwZW5kZW5jeUNoZWNrcztcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuICAgIGltcG9ydFJhd0RlcGVuZGVuY3lDaGVja3M6IChcbiAgICAgIHN0YXRlLFxuICAgICAgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEltcG9ydFRvRGVwZW5kZW5jeUNoZWNrc0FyZ3M+XG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBkZXBlbmRlbmN5Q2hlY2tzID0gaW1wb3J0VG9EZXBlbmRlbmN5Q2hlY2tzKGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIGlmIChkZXBlbmRlbmN5Q2hlY2tzKSB7XG4gICAgICAgIHN0YXRlLmRlcGVuZGVuY3lDaGVja3MgPSBkZXBlbmRlbmN5Q2hlY2tzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH0sXG4gICAgdXBkYXRlRGVwZW5kZW5jeUNoZWNrTGlzdDogKFxuICAgICAgc3RhdGUsXG4gICAgICBhY3Rpb246IFBheWxvYWRBY3Rpb248e1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBzY3JpcHRUeXBlOiBzdHJpbmc7XG4gICAgICAgIGRlcGVuZGVuY3lDaGVja0xpc3Q6IERlcGVuZGVuY3lbXTtcbiAgICAgIH0+XG4gICAgKSA9PiB7XG4gICAgICBjb25zdCB7IGlkLCBzY3JpcHRUeXBlLCBkZXBlbmRlbmN5Q2hlY2tMaXN0IH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlmIChpZCAmJiBzY3JpcHRUeXBlKSB7XG4gICAgICAgIGRlcGVuZGVuY3lDaGVja0FkYXB0ZXIudXBkYXRlT25lKHN0YXRlLmRlcGVuZGVuY3lDaGVja3Nbc2NyaXB0VHlwZV0sIHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBjaGFuZ2VzOiB7IGRlcGVuZGVuY3lDaGVja0xpc3QgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZXNvbHZlQWxsRGVwZW5kZW5jeTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nW10+KSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHRUeXBlcyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgaWYgKCFzY3JpcHRUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgU3RlcE5vZGVSZWNvcmQoKTtcbiAgICAgIGNvbnN0IHNlZW4gPSBuZXcgU3RlcE5vZGVSZWNvcmQoKTtcbiAgICAgIC8qIGZ1bmN0aW9uIHRvXG4gICAgICAgIDEuIGNvcHkgdGhlIGRlcGVuZGVuY3lDaGVja0xpc3QgdG8gdGhlIGxhc3Qgbm9kZVxuICAgICAgICAxLiByZW1vdmUgbGFzdCBub2RlIGluIHF1ZXVlXG4gICAgICAgIDMuIGFkZCBsYXN0IG5vZGUgdG8gcmVzb2x2ZWQgaWYgdGhlcmUgYXJlIHN0aWxsIG5vZGVzIGluIHF1ZXVlXG4gICAgICAqL1xuXG4gICAgICBPYmplY3Qua2V5cyhzdGF0ZS5kZXBlbmRlbmN5Q2hlY2tzKS5mb3JFYWNoKChzY3JpcHRUeXBlKSA9PiB7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHNjcmlwdFR5cGVcbiAgICAgICAgc3RhdGUuZGVwZW5kZW5jeUNoZWNrc1tzY3JpcHRUeXBlXS5pZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZWFjaCBkZXBlbmRlbmN5IGVsZW1lbnQgaW4gZWFjaCBzY3JpcHRUeXBlXG4gICAgICAgICAgY29uc3Qgc3RlcElkID0gaWQudG9TdHJpbmcoKTtcbiAgICAgICAgICAvLyBjbGVhciBxdWV1ZVxuICAgICAgICAgIGNvbnN0IHF1ZXVlID0gbmV3IERlcGVuZGVuY3lRdWV1ZSh7IHNjcmlwdFR5cGUsIHN0ZXBJZCB9KTtcbiAgICAgICAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgcHJvY2Vzc2luZyBldmVyeSBub2RlIGluIHF1ZXVlXG5cbiAgICAgICAgICAgIC8vIGN1cnJlbnQgcG9pbnRlciBub2RlXG4gICAgICAgICAgICBjb25zdCBub2RlVG9DaGVjayA9IHF1ZXVlW3F1ZXVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgLy8gZmluZCB0aGUgY3VycmVudCBub2RlIGluIHRoZSBzdGF0ZVxuICAgICAgICAgICAgY29uc3Qgc3RlcFRvVXBkYXRlID1cbiAgICAgICAgICAgICAgc3RhdGUuZGVwZW5kZW5jeUNoZWNrc1tub2RlVG9DaGVjay5zY3JpcHRUeXBlXS5lbnRpdGllc1tcbiAgICAgICAgICAgICAgICBub2RlVG9DaGVjay5zdGVwSWRcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmIChyZXNvbHZlZC5pbmNsdWRlcyhub2RlVG9DaGVjaykpIHtcbiAgICAgICAgICAgICAgLy8gaWYgY3VycmVudCBub2RlIGlzIHJlc29sdmVkXG5cbiAgICAgICAgICAgICAgcXVldWUucG9wKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZXBUb1VwZGF0ZSkge1xuICAgICAgICAgICAgICAvLyBjdXJyZW50IG5vZGUgc3RpbGwgaGF2ZSBkZXBlbmRlbmN5IHRvIHJlc29sdmVcbiAgICAgICAgICAgICAgaWYgKCFzZWVuLmluY2x1ZGVzKG5vZGVUb0NoZWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGN1cnJlbnQgbm9kZSBub3Qgc2VlbiBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyBpbml0aWF0ZSBjdXJyZW50IG5vZGUncyBkZXBlbmRlbmN5IGFycmF5XG4gICAgICAgICAgICAgICAgc3RlcFRvVXBkYXRlLmRlcGVuZGVuY3lDaGVja0xpc3QgPSBbLi4uc3RlcFRvVXBkYXRlLmRlcGVuZGVuY3ldO1xuICAgICAgICAgICAgICAgIC8vIGFkZCBjdXJyZW50IG5vZGUgdG8gc2VlblxuICAgICAgICAgICAgICAgIHNlZW4uYWRkKG5vZGVUb0NoZWNrKTtcblxuICAgICAgICAgICAgICAgIHN0ZXBUb1VwZGF0ZS5kZXBlbmRlbmN5LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIG5vZGUgaW4gZGVwZW5kZW5jeVxuXG4gICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IGRlcGVuZGVuY3kncyBzY3JpcHRUeXBlIHRvIHRoZSBmaXJzdCB0eXBlIGluIHNjcmlwdFR5cGVzXG4gICAgICAgICAgICAgICAgICBub2RlLnR5cGUgPSBub2RlLnR5cGUgfHwgc2NyaXB0VHlwZXNbMF07XG4gICAgICAgICAgICAgICAgICAvLyBjb25zdHJ1Y3QgbmV4dE5vZGVcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHROb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRUeXBlOiBub2RlLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBJZDogbm9kZS5zdGVwSWQsXG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBpZiAocXVldWUuaW5jbHVkZXMobmV4dE5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG5leHROb2RlIGlzIG1ldCBpbiB0aGUgcXVldWUgYmVmb3JlLFxuICAgICAgICAgICAgICAgICAgICAvLyBpdCBtZWFucyB0aGVyZSdzIGNpcmN1bGFyIGRlcGVuZGVuY3lcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjaXJjdWxhciBkZXBlbmRlbmN5IGRldGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXh0Tm9kZSBpcyBzYWZlIHRvIGFkZCB0byBxdWV1ZVxuICAgICAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjdXJyZW50IG5vZGUgaGFzIGJlZW4gc2VlbiBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyBpdCBpbXBsaWVzIHRoYXQgY3VycmVudCBub2RlIGhhdmUgYWxsIG5vZGVzIGluIGRlcGVuZGVuY3kgcmVzb2x2ZWRcbiAgICAgICAgICAgICAgICBjb25zdCB7IGRlcGVuZGVuY3lDaGVja0xpc3QgPSBbXSB9ID0gc3RlcFRvVXBkYXRlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBkZXBlbmRlbmN5Q2hlY2tMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggZXZlcnkgbm9kZSBpbiBjdXJyZW50IGRlcGVuZGVuY3kgY2hlY2sgbGlzdCBmcm9tIHRoZSBlbmRcblxuICAgICAgICAgICAgICAgICAgLy8gc3RlcCB0aGF0IGNvcnJlc3BvbmRzIHRvIGN1cnJlbnQgbm9kZSB0byByZXBsYWNlXG4gICAgICAgICAgICAgICAgICBjb25zdCBzdGVwVG9SZXBsYWNlID1cbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGVwZW5kZW5jeUNoZWNrc1tkZXBlbmRlbmN5Q2hlY2tMaXN0W2ldLnR5cGUgfHwgJyddXG4gICAgICAgICAgICAgICAgICAgICAgPy5lbnRpdGllc1tkZXBlbmRlbmN5Q2hlY2tMaXN0W2ldLnN0ZXBJZF07XG4gICAgICAgICAgICAgICAgICBpZiAoc3RlcFRvUmVwbGFjZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBzdGVwVG9SZXBsYWNlIGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCBtZWFucyB0aGUgc3RlcFRvUmVwbGFjZSBoYXMgZGVwZW5kZW5jeUNoZWNrTGlzdCB0byByZXBsYWNlXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50IG5vZGVUb1JlcGxhY2UgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9kZVRvUmVwbGFjZSA9IGRlcGVuZGVuY3lDaGVja0xpc3Quc3BsaWNlKGksIDEpWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgc3RlcFRvUmVwbGFjZSdzIGRlcGVuZGVuY3lDaGVja0xpc3QgdG8gc3RlcFRvVXBkYXRlJ3MgZGVwZW5kZW5jeUNoZWNrTGlzdFxuICAgICAgICAgICAgICAgICAgICAvLyB3aXRob3V0IGR1cGxpY2F0ZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICBzdGVwVG9SZXBsYWNlLmRlcGVuZGVuY3lDaGVja0xpc3Q/LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNJbmNsdWRlZEluRGVwZW5kZW5jeUFycmF5KG5vZGUsIGRlcGVuZGVuY3lDaGVja0xpc3QpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbmN5Q2hlY2tMaXN0LnNwbGljZShpLCAwLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluc2VydCB0aGUgY3VycmVudCBub2RlVG9SZXBsYWNlIGFnYWluIGlmIG5vdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICFpc0luY2x1ZGVkSW5EZXBlbmRlbmN5QXJyYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9SZXBsYWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeUNoZWNrTGlzdFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW5jeUNoZWNrTGlzdC5zcGxpY2UoaSwgMCwgbm9kZVRvUmVwbGFjZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlZC5hZGQobm9kZVRvQ2hlY2spO1xuICAgICAgICAgICAgICAgIHF1ZXVlLnBvcCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBjdXJyZW50IG5vZGUgZG9lcyBub3QgaGF2ZSBhbnkgZGVwZW5kZW5jeVxuICAgICAgICAgICAgICByZXNvbHZlZC5hZGQobm9kZVRvQ2hlY2spO1xuICAgICAgICAgICAgICBxdWV1ZS5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBkZXBlbmRlbmN5Q2hlY2tTbGljZS5yZWR1Y2VyO1xuXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbERlcGVuZGVuY3lDaGVja1N0YXRlIHtcbiAgZGVwZW5kZW5jeUNoZWNrOiBEZXBlbmRlbmN5Q2hlY2tTdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHtcbiAgZGVwZW5kZW5jeUNoZWNrUmVjZWl2ZWQsXG4gIHVwZGF0ZURlcGVuZGVuY3lDaGVja0xpc3QsXG4gIHJlc29sdmVBbGxEZXBlbmRlbmN5LFxufSA9IGRlcGVuZGVuY3lDaGVja1NsaWNlLmFjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/dependency/dependencyCheckSlice.ts\n");

/***/ }),

/***/ "./src/features/dependency/importToDependencyChecks.ts":
/*!*************************************************************!*\
  !*** ./src/features/dependency/importToDependencyChecks.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dependencyCheckEntity */ \"./src/features/dependency/dependencyCheckEntity.ts\");\n/* eslint-disable no-param-reassign */\n\n\nvar importToDependencyChecks = function importToDependencyChecks(_ref) {\n  var dependencyChecks = _ref.dependencyChecks,\n      types = _ref.types;\n  return dependencyChecks && types.reduce(function (obj, scriptType) {\n    obj[scriptType] = _dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setAll(_dependencyCheckEntity__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getInitialState(), dependencyChecks[scriptType]);\n    return obj;\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (importToDependencyChecks);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmVhdHVyZXMvZGVwZW5kZW5jeS9pbXBvcnRUb0RlcGVuZGVuY3lDaGVja3MudHM/ZmU0NiJdLCJuYW1lcyI6WyJpbXBvcnRUb0RlcGVuZGVuY3lDaGVja3MiLCJkZXBlbmRlbmN5Q2hlY2tzIiwidHlwZXMiLCJyZWR1Y2UiLCJvYmoiLCJzY3JpcHRUeXBlIiwiZGVwZW5kZW5jeUNoZWNrQWRhcHRlciIsInNldEFsbCIsImdldEluaXRpYWxTdGF0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBY0EsSUFBTUEsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQjtBQUFBLE1BQy9CQyxnQkFEK0IsUUFDL0JBLGdCQUQrQjtBQUFBLE1BRS9CQyxLQUYrQixRQUUvQkEsS0FGK0I7QUFBQSxTQUkvQkQsZ0JBQWdCLElBQ2hCQyxLQUFLLENBQUNDLE1BQU4sQ0FBb0MsVUFBQ0MsR0FBRCxFQUFNQyxVQUFOLEVBQXFCO0FBQ3ZERCxPQUFHLENBQUNDLFVBQUQsQ0FBSCxHQUFrQkMsOERBQXNCLENBQUNDLE1BQXZCLENBQ2hCRCw4REFBc0IsQ0FBQ0UsZUFBdkIsRUFEZ0IsRUFFaEJQLGdCQUFnQixDQUFDSSxVQUFELENBRkEsQ0FBbEI7QUFJQSxXQUFPRCxHQUFQO0FBQ0QsR0FORCxFQU1HLEVBTkgsQ0FMK0I7QUFBQSxDQUFqQzs7QUFhZUosdUZBQWYiLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvZGVwZW5kZW5jeS9pbXBvcnRUb0RlcGVuZGVuY3lDaGVja3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGRlcGVuZGVuY3lDaGVja0FkYXB0ZXIsIHtcbiAgRGVwZW5kZW5jeUNoZWNrLFxufSBmcm9tICcuL2RlcGVuZGVuY3lDaGVja0VudGl0eSc7XG5pbXBvcnQgeyBEZXBlbmRlbmN5Q2hlY2tzU3RhdGUgfSBmcm9tICcuL2RlcGVuZGVuY3lDaGVja1NsaWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJzZWREZXBlbmRlbmN5Q2hlY2tzIHtcbiAgW2tleTogc3RyaW5nXTogRGVwZW5kZW5jeUNoZWNrW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0VG9EZXBlbmRlbmN5Q2hlY2tzQXJncyB7XG4gIGRlcGVuZGVuY3lDaGVja3M/OiBQYXJzZWREZXBlbmRlbmN5Q2hlY2tzO1xuICB0eXBlczogc3RyaW5nW107XG59XG5cbmNvbnN0IGltcG9ydFRvRGVwZW5kZW5jeUNoZWNrcyA9ICh7XG4gIGRlcGVuZGVuY3lDaGVja3MsXG4gIHR5cGVzLFxufTogSW1wb3J0VG9EZXBlbmRlbmN5Q2hlY2tzQXJncykgPT5cbiAgZGVwZW5kZW5jeUNoZWNrcyAmJlxuICB0eXBlcy5yZWR1Y2U8RGVwZW5kZW5jeUNoZWNrc1N0YXRlPigob2JqLCBzY3JpcHRUeXBlKSA9PiB7XG4gICAgb2JqW3NjcmlwdFR5cGVdID0gZGVwZW5kZW5jeUNoZWNrQWRhcHRlci5zZXRBbGwoXG4gICAgICBkZXBlbmRlbmN5Q2hlY2tBZGFwdGVyLmdldEluaXRpYWxTdGF0ZSgpLFxuICAgICAgZGVwZW5kZW5jeUNoZWNrc1tzY3JpcHRUeXBlXVxuICAgICk7XG4gICAgcmV0dXJuIG9iajtcbiAgfSwge30pO1xuXG5leHBvcnQgZGVmYXVsdCBpbXBvcnRUb0RlcGVuZGVuY3lDaGVja3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/features/dependency/importToDependencyChecks.ts\n");

/***/ })

})