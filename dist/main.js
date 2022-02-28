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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Game = /*#__PURE__*/function () {\n  function Game(gameHeight, gameWidth) {\n    _classCallCheck(this, Game);\n\n    // this.height = 25;\n    // this.width = 25;\n    this.position = {\n      x: 101,\n      y: 70\n    };\n  }\n\n  _createClass(Game, [{\n    key: \"ball\",\n    value: function ball(ctx) {\n      var ball = new Image();\n      ball.src = \"./assets/basketball1.png\";\n\n      ball.onload = function () {\n        ctx.drawImage(ball, 160, 475, 85, 85);\n      };\n    }\n  }, {\n    key: \"hoop\",\n    value: function hoop(ctx) {\n      var _this = this;\n\n      var hoop = new Image();\n      hoop.src = \"./assets/hoop.jpg\";\n\n      hoop.onload = function () {\n        ctx.drawImage(hoop, _this.position.x, _this.position.y, 200, 200);\n      };\n    }\n  }, {\n    key: \"updateHoopHor\",\n    value: function updateHoopHor(deltaTime) {\n      if (!deltaTime) return;\n      this.position.x += 10 / deltaTime;\n\n      if (this.position.x < 0) {\n        this.position.x += 50 / deltaTime;\n      }\n\n      if (this.position.x > 400) {\n        this.position.x = 400;\n\n        while (this.position.x > -10) {\n          this.position.x -= 10 / deltaTime;\n        }\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2FtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtBQUVqQixnQkFBWUMsVUFBWixFQUF3QkMsU0FBeEIsRUFBbUM7QUFBQTs7QUFDL0I7QUFDQTtBQUVBLFNBQUtDLFFBQUwsR0FBZ0I7QUFDWkMsTUFBQUEsQ0FBQyxFQUFFLEdBRFM7QUFFWkMsTUFBQUEsQ0FBQyxFQUFFO0FBRlMsS0FBaEI7QUFJSDs7OztXQUVELGNBQUtDLEdBQUwsRUFBVTtBQUNOLFVBQU1DLElBQUksR0FBRyxJQUFJQyxLQUFKLEVBQWI7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxHQUFMLEdBQVcsMEJBQVg7O0FBQ0FGLE1BQUFBLElBQUksQ0FBQ0csTUFBTCxHQUFjLFlBQU07QUFDaEJKLFFBQUFBLEdBQUcsQ0FBQ0ssU0FBSixDQUFjSixJQUFkLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCLEVBQThCLEVBQTlCLEVBQWtDLEVBQWxDO0FBQ0gsT0FGRDtBQUdIOzs7V0FFRCxjQUFLRCxHQUFMLEVBQVU7QUFBQTs7QUFDTixVQUFNTSxJQUFJLEdBQUcsSUFBSUosS0FBSixFQUFiO0FBQ0FJLE1BQUFBLElBQUksQ0FBQ0gsR0FBTCxHQUFXLG1CQUFYOztBQUNBRyxNQUFBQSxJQUFJLENBQUNGLE1BQUwsR0FBYyxZQUFNO0FBQ2hCSixRQUFBQSxHQUFHLENBQUNLLFNBQUosQ0FBY0MsSUFBZCxFQUFvQixLQUFJLENBQUNULFFBQUwsQ0FBY0MsQ0FBbEMsRUFBcUMsS0FBSSxDQUFDRCxRQUFMLENBQWNFLENBQW5ELEVBQXNELEdBQXRELEVBQTJELEdBQTNEO0FBQ0gsT0FGRDtBQUdIOzs7V0FFRCx1QkFBY1EsU0FBZCxFQUF5QjtBQUNyQixVQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDaEIsV0FBS1YsUUFBTCxDQUFjQyxDQUFkLElBQW1CLEtBQUtTLFNBQXhCOztBQUNBLFVBQUksS0FBS1YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLGFBQUtELFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLUyxTQUF4QjtBQUNIOztBQUNELFVBQUksS0FBS1YsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEdBQXRCLEVBQTJCO0FBQ3ZCLGFBQUtELFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixHQUFsQjs7QUFDQSxlQUFPLEtBQUtELFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixDQUFDLEVBQTFCLEVBQThCO0FBQzFCLGVBQUtELFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLUyxTQUF4QjtBQUNIO0FBQ0o7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL1Byb2plY3QvLi9zcmMvZ2FtZS5qcz83ZGUwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuXG4gICAgY29uc3RydWN0b3IoZ2FtZUhlaWdodCwgZ2FtZVdpZHRoKSB7XG4gICAgICAgIC8vIHRoaXMuaGVpZ2h0ID0gMjU7XG4gICAgICAgIC8vIHRoaXMud2lkdGggPSAyNTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogMTAxLFxuICAgICAgICAgICAgeTogNzAsXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgYmFsbChjdHgpIHtcbiAgICAgICAgY29uc3QgYmFsbCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBiYWxsLnNyYyA9IFwiLi9hc3NldHMvYmFza2V0YmFsbDEucG5nXCI7XG4gICAgICAgIGJhbGwub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShiYWxsLCAxNjAsIDQ3NSwgODUsIDg1KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhvb3AoY3R4KSB7XG4gICAgICAgIGNvbnN0IGhvb3AgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaG9vcC5zcmMgPSBcIi4vYXNzZXRzL2hvb3AuanBnXCI7XG4gICAgICAgIGhvb3Aub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShob29wLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMjAwLCAyMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlSG9vcEhvcihkZWx0YVRpbWUpIHtcbiAgICAgICAgaWYgKCFkZWx0YVRpbWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDEwIC8gZGVsdGFUaW1lO1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IDUwIC8gZGVsdGFUaW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiA0MDApIHtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDQwMDtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uLnggPiAtMTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gMTAgLyBkZWx0YVRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiR2FtZSIsImdhbWVIZWlnaHQiLCJnYW1lV2lkdGgiLCJwb3NpdGlvbiIsIngiLCJ5IiwiY3R4IiwiYmFsbCIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiZHJhd0ltYWdlIiwiaG9vcCIsImRlbHRhVGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game.js\n");

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