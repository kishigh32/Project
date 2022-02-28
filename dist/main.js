/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Game = /*#__PURE__*/function () {\n  function Game(gameHeight, gameWidth) {\n    _classCallCheck(this, Game);\n\n    // this.height = 25;\n    // this.width = 25;\n    this.position = {\n      x: gameWidth / 2 - 40,\n      y: gameHeight - 125\n    };\n  }\n\n  _createClass(Game, [{\n    key: \"ball\",\n    value: function ball(ctx) {\n      var _this = this;\n\n      //var ball = document.createElement(\"img\");\n      var ball = new Image();\n      ball.src = \"./assets/basketball.png\"; //document.body.appendChild(ball);\n      //ctx.drawImage(ball, this.position.x, this.position.y);\n\n      ball.onload = function () {\n        ctx.drawImage(ball, _this.position.x, _this.position.y, 100, 100);\n      }; //ctx.fillRect(this.position.x, this.position.y, this.width, this.height);\n\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtBQUVqQixnQkFBWUMsVUFBWixFQUF3QkMsU0FBeEIsRUFBbUM7QUFBQTs7QUFDL0I7QUFDQTtBQUVBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDWkMsTUFBQUEsQ0FBQyxFQUFFRixTQUFTLEdBQUcsQ0FBWixHQUFnQixFQURQO0FBRVpHLE1BQUFBLENBQUMsRUFBRUosVUFBVSxHQUFHO0FBRkosS0FBaEI7QUFJSDs7OztXQUVELGNBQUtLLEdBQUwsRUFBVTtBQUFBOztBQUNOO0FBQ0EsVUFBTUMsSUFBSSxHQUFHLElBQUlDLEtBQUosRUFBYjtBQUNBRCxNQUFBQSxJQUFJLENBQUNFLEdBQUwsR0FBVyx5QkFBWCxDQUhNLENBSU47QUFDQTs7QUFDQUYsTUFBQUEsSUFBSSxDQUFDRyxNQUFMLEdBQWMsWUFBTTtBQUNoQkosUUFBQUEsR0FBRyxDQUFDSyxTQUFKLENBQWNKLElBQWQsRUFBb0IsS0FBSSxDQUFDSixRQUFMLENBQWNDLENBQWxDLEVBQXFDLEtBQUksQ0FBQ0QsUUFBTCxDQUFjRSxDQUFuRCxFQUFzRCxHQUF0RCxFQUEyRCxHQUEzRDtBQUNILE9BRkQsQ0FOTSxDQVNOOztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUHJvamVjdC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lSGVpZ2h0LCBnYW1lV2lkdGgpIHtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSAyNTtcbiAgICAgICAgLy8gdGhpcy53aWR0aCA9IDI1O1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiBnYW1lV2lkdGggLyAyIC0gNDAsXG4gICAgICAgICAgICB5OiBnYW1lSGVpZ2h0IC0gMTI1LFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGJhbGwoY3R4KSB7XG4gICAgICAgIC8vdmFyIGJhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjb25zdCBiYWxsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhbGwuc3JjID0gXCIuL2Fzc2V0cy9iYXNrZXRiYWxsLnBuZ1wiO1xuICAgICAgICAvL2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYmFsbCk7XG4gICAgICAgIC8vY3R4LmRyYXdJbWFnZShiYWxsLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgICAgIGJhbGwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiYWxsLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAwLCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIC8vY3R4LmZpbGxSZWN0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkdhbWUiLCJnYW1lSGVpZ2h0IiwiZ2FtZVdpZHRoIiwicG9zaXRpb24iLCJ4IiwieSIsImN0eCIsImJhbGwiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsImRyYXdJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext(\"2d\"); // ctx.clearRect(0, 0, 500, 350);\n  // ctx.fillStyle = \"red\";\n  // ctx.fillRect(10, 100, 50, 75);\n\n  var GAME_WIDTH = 400;\n  var GAME_HEIGHT = 600;\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_HEIGHT, GAME_WIDTH);\n  game.ball(ctx); //var ball = new Image();\n  //var ball = document.getElementById(\"basketball.png\");\n  //ball.src = \"./assets/basketball.png\";\n  //document.body.appendChild(ball);\n  //ctx.drawImage(ball, 250, 250);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWLENBRmdELENBSWhEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxNQUFJQyxJQUFJLEdBQUcsSUFBSVQsNkNBQUosQ0FBU1EsV0FBVCxFQUFzQkQsVUFBdEIsQ0FBWDtBQUVBRSxFQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVUwsR0FBVixFQWJnRCxDQWVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0FwQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIDUwMCwgMzUwKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMTAsIDEwMCwgNTAsIDc1KTtcblxuICAgIGNvbnN0IEdBTUVfV0lEVEggPSA0MDA7XG4gICAgY29uc3QgR0FNRV9IRUlHSFQgPSA2MDA7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfSEVJR0hULCBHQU1FX1dJRFRIKTtcblxuICAgIGdhbWUuYmFsbChjdHgpO1xuXG4gICAgLy92YXIgYmFsbCA9IG5ldyBJbWFnZSgpO1xuICAgIC8vdmFyIGJhbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldGJhbGwucG5nXCIpO1xuICAgIC8vYmFsbC5zcmMgPSBcIi4vYXNzZXRzL2Jhc2tldGJhbGwucG5nXCI7XG4gICAgLy9kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhbGwpO1xuICAgIC8vY3R4LmRyYXdJbWFnZShiYWxsLCAyNTAsIDI1MCk7XG59KTsiXSwibmFtZXMiOlsiR2FtZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsImdhbWUiLCJiYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;