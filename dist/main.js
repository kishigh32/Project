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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Game = /*#__PURE__*/function () {\n  function Game(gameHeight, gameWidth) {\n    _classCallCheck(this, Game);\n\n    // this.height = 25;\n    // this.width = 25;\n    this.position = {\n      x: 101,\n      y: 70\n    };\n  }\n\n  _createClass(Game, [{\n    key: \"ball\",\n    value: function ball(ctx) {\n      var ball = new Image();\n      ball.src = \"./assets/hoop.jpg\";\n\n      ball.onload = function () {\n        // 475\n        ctx.drawImage(ball, 160, 20, 85, 85);\n      };\n    }\n  }, {\n    key: \"hoop\",\n    value: function hoop(ctx) {\n      var _this = this;\n\n      var hoop = new Image();\n      hoop.src = \"./assets/hoop.jpg\";\n\n      hoop.onload = function () {\n        ctx.drawImage(hoop, _this.position.x, _this.position.y, 200, 200);\n      };\n    }\n  }, {\n    key: \"updateHoopHor\",\n    value: function updateHoopHor(deltaTime) {\n      if (!deltaTime) return;\n      this.position.x += 10 / deltaTime;\n\n      if (this.position.x < 0) {\n        this.position.x += 50 / deltaTime;\n      }\n\n      if (this.position.x > 400) {\n        this.position.x = 400;\n\n        while (this.position.x > -10) {\n          this.position.x -= 10 / deltaTime;\n        }\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtBQUVqQixnQkFBWUMsVUFBWixFQUF3QkMsU0FBeEIsRUFBbUM7QUFBQTs7QUFDL0I7QUFDQTtBQUVBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDWkMsTUFBQUEsQ0FBQyxFQUFFLEdBRFM7QUFFWkMsTUFBQUEsQ0FBQyxFQUFFO0FBRlMsS0FBaEI7QUFJSDs7OztXQUVELGNBQUtDLEdBQUwsRUFBVTtBQUNOLFVBQU1DLElBQUksR0FBRyxJQUFJQyxLQUFKLEVBQWI7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxHQUFMLEdBQVcsbUJBQVg7O0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0csTUFBTCxHQUFjLFlBQU07QUFDaEI7QUFDQUosUUFBQUEsR0FBRyxDQUFDSyxTQUFKLENBQWNKLElBQWQsRUFBb0IsR0FBcEIsRUFBeUIsRUFBekIsRUFBNkIsRUFBN0IsRUFBaUMsRUFBakM7QUFDSCxPQUhEO0FBSUg7OztXQUVELGNBQUtELEdBQUwsRUFBVTtBQUFBOztBQUNOLFVBQU1NLElBQUksR0FBRyxJQUFJSixLQUFKLEVBQWI7QUFDQUksTUFBQUEsSUFBSSxDQUFDSCxHQUFMLEdBQVcsbUJBQVg7O0FBQ0FHLE1BQUFBLElBQUksQ0FBQ0YsTUFBTCxHQUFjLFlBQU07QUFDaEJKLFFBQUFBLEdBQUcsQ0FBQ0ssU0FBSixDQUFjQyxJQUFkLEVBQW9CLEtBQUksQ0FBQ1QsUUFBTCxDQUFjQyxDQUFsQyxFQUFxQyxLQUFJLENBQUNELFFBQUwsQ0FBY0UsQ0FBbkQsRUFBc0QsR0FBdEQsRUFBMkQsR0FBM0Q7QUFDSCxPQUZEO0FBR0g7OztXQUVELHVCQUFjUSxTQUFkLEVBQXlCO0FBQ3JCLFVBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNoQixXQUFLVixRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS1MsU0FBeEI7O0FBQ0EsVUFBSSxLQUFLVixRQUFMLENBQWNDLENBQWQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsYUFBS0QsUUFBTCxDQUFjQyxDQUFkLElBQW1CLEtBQUtTLFNBQXhCO0FBQ0g7O0FBQ0QsVUFBSSxLQUFLVixRQUFMLENBQWNDLENBQWQsR0FBa0IsR0FBdEIsRUFBMkI7QUFDdkIsYUFBS0QsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEdBQWxCOztBQUNBLGVBQU8sS0FBS0QsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQUMsRUFBMUIsRUFBOEI7QUFDMUIsZUFBS0QsUUFBTCxDQUFjQyxDQUFkLElBQW1CLEtBQUtTLFNBQXhCO0FBQ0g7QUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUHJvamVjdC8uL3NyYy9nYW1lLmpzPzdkZTAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihnYW1lSGVpZ2h0LCBnYW1lV2lkdGgpIHtcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSAyNTtcbiAgICAgICAgLy8gdGhpcy53aWR0aCA9IDI1O1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB4OiAxMDEsXG4gICAgICAgICAgICB5OiA3MCxcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBiYWxsKGN0eCkge1xuICAgICAgICBjb25zdCBiYWxsID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGJhbGwuc3JjID0gXCIuL2Fzc2V0cy9ob29wLmpwZ1wiO1xuICAgICAgICBiYWxsLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIDQ3NVxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiYWxsLCAxNjAsIDIwLCA4NSwgODUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaG9vcChjdHgpIHtcbiAgICAgICAgY29uc3QgaG9vcCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBob29wLnNyYyA9IFwiLi9hc3NldHMvaG9vcC5qcGdcIjtcbiAgICAgICAgaG9vcC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGhvb3AsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAyMDAsIDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVIb29wSG9yKGRlbHRhVGltZSkge1xuICAgICAgICBpZiAoIWRlbHRhVGltZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gMTAgLyBkZWx0YVRpbWU7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gNTAgLyBkZWx0YVRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IDQwMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gNDAwO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24ueCA+IC0xMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSAxMCAvIGRlbHRhVGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJHYW1lIiwiZ2FtZUhlaWdodCIsImdhbWVXaWR0aCIsInBvc2l0aW9uIiwieCIsInkiLCJjdHgiLCJiYWxsIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJob29wIiwiZGVsdGFUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var ctx = canvas.getContext(\"2d\"); // ctx.clearRect(0, 0, 500, 350);\n  // ctx.fillStyle = \"red\";\n  // ctx.fillRect(10, 100, 50, 75);\n\n  var GAME_WIDTH = 400;\n  var GAME_HEIGHT = 600;\n  var game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_HEIGHT, GAME_WIDTH);\n  game.ball(ctx);\n  game.hoop(ctx);\n  var lastTime = 0;\n\n  function gameLoop(timestamp) {\n    var deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n    game.updateHoopHor(deltaTime);\n    game.hoop(ctx);\n    requestAnimationFrame(gameLoop);\n  }\n\n  gameLoop();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWLENBRmdELENBSWhEO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsR0FBcEI7QUFFQSxNQUFJQyxJQUFJLEdBQUcsSUFBSVQsNkNBQUosQ0FBU1EsV0FBVCxFQUFzQkQsVUFBdEIsQ0FBWDtBQUVBRSxFQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVUwsR0FBVjtBQUNBSSxFQUFBQSxJQUFJLENBQUNFLElBQUwsQ0FBVU4sR0FBVjtBQUVBLE1BQUlPLFFBQVEsR0FBRyxDQUFmOztBQUNBLFdBQVNDLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCO0FBQ3pCLFFBQUlDLFNBQVMsR0FBR0QsU0FBUyxHQUFHRixRQUE1QjtBQUNBQSxJQUFBQSxRQUFRLEdBQUdFLFNBQVg7QUFFQUwsSUFBQUEsSUFBSSxDQUFDTyxhQUFMLENBQW1CRCxTQUFuQjtBQUNBTixJQUFBQSxJQUFJLENBQUNFLElBQUwsQ0FBVU4sR0FBVjtBQUVBWSxJQUFBQSxxQkFBcUIsQ0FBQ0osUUFBRCxDQUFyQjtBQUNIOztBQUVEQSxFQUFBQSxRQUFRO0FBQ1gsQ0E1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Qcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIik7XG4gICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICAvLyBjdHguY2xlYXJSZWN0KDAsIDAsIDUwMCwgMzUwKTtcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAvLyBjdHguZmlsbFJlY3QoMTAsIDEwMCwgNTAsIDc1KTtcblxuICAgIGNvbnN0IEdBTUVfV0lEVEggPSA0MDA7XG4gICAgY29uc3QgR0FNRV9IRUlHSFQgPSA2MDA7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKEdBTUVfSEVJR0hULCBHQU1FX1dJRFRIKTtcblxuICAgIGdhbWUuYmFsbChjdHgpO1xuICAgIGdhbWUuaG9vcChjdHgpO1xuXG4gICAgbGV0IGxhc3RUaW1lID0gMDtcbiAgICBmdW5jdGlvbiBnYW1lTG9vcCh0aW1lc3RhbXApIHtcbiAgICAgICAgbGV0IGRlbHRhVGltZSA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICAgICAgICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICAgICAgICBnYW1lLnVwZGF0ZUhvb3BIb3IoZGVsdGFUaW1lKTtcbiAgICAgICAgZ2FtZS5ob29wKGN0eCk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgICB9XG5cbiAgICBnYW1lTG9vcCgpO1xufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJHQU1FX1dJRFRIIiwiR0FNRV9IRUlHSFQiLCJnYW1lIiwiYmFsbCIsImhvb3AiLCJsYXN0VGltZSIsImdhbWVMb29wIiwidGltZXN0YW1wIiwiZGVsdGFUaW1lIiwidXBkYXRlSG9vcEhvciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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