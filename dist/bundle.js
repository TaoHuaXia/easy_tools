/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar checkType = function checkType(target, type) {\n  return toString.call(target).toLowerCase() === '[object ' + type.toLowerCase() + ']';\n};\n\n/*\n * target: 目标源对象\n * key: 要获取的对象的Key，多层用.来隔开\n * 例如要获取name\n * obj = {\n *   person: {\n *     name: 'sssss'\n *   }\n * }\n * key为\n * person.name\n * 适用场景：\n * 当某个字段不确定是否存在或者有值时，可以摆脱痛苦的 obj && obj.person && obj.person.name这种写法\n * 可直接使用getKey迭代器来进行判断该字段是否有值\n * */\nvar getKey = function getKey(target, key) {\n  if (!target || !checkType(target, 'Object')) {\n    console.error('target is required and must be a object');\n    return;\n  } else if (!key || typeof key !== 'string') {\n    console.error('key is required and must be a string');\n    return;\n  }\n  var keys = key.split('.');\n  for (var i = 0, len = keys.length; i < len; i++) {\n    if (target[keys[i]] !== undefined) {\n      target = target[keys[i]];\n    } else {\n      return undefined;\n    }\n  }\n  return target;\n};\nconsole.log(getKey([], 'a.b'));\nconsole.log(getKey({\n  a: {\n    b: 'sss'\n  }\n}, 'a.b'));\n\nconsole.log(checkType([], 'array'));\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });