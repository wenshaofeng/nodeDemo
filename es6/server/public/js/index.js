/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	// ES5 new一个正则对象
	{
	    var regex = new RegExp('xyz', 'i');
	    var regex2 = new RegExp(/xyz/i);
	    console.log(regex.test('xyz123'), regex2.test('xyz123')); // true true
	    //  ES6中第二个修饰符i 会覆盖第一个修饰符 ig
	    var regex3 = new RegExp(/xyz/ig, 'i');
	    console.log(regex3.flags); //flags用于获取修饰符
	}

	// y修饰符
	{
	    var s = 'bbb_bb_b';
	    var a1 = /b+/g;
	    var a2 = new RegExp('b+', 'y');

	    console.log("one", a1.exec(s), a2.exec(s));
	    console.log("two", a1.exec(s), a2.exec(s));
	}

/***/ })
/******/ ]);