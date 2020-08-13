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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nBrowserslistError: [BABEL] C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\src\\\\index.js: Browserslist config should be a string or an array of strings with browser queries (While processing: \\\"C:\\\\\\\\Users\\\\\\\\nonsk\\\\\\\\WebstormProject\\\\\\\\React\\\\\\\\tot-systems-frontend-test\\\\\\\\node_modules\\\\\\\\@babel\\\\\\\\preset-env\\\\\\\\lib\\\\\\\\index.js\\\")\\n    at check (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\node.js:63:11)\\n    at parsePackage (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\node.js:96:5)\\n    at C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\node.js:319:29\\n    at eachParent (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\node.js:49:18)\\n    at Object.findConfig (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\node.js:305:20)\\n    at Function.loadConfig (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\node.js:223:37)\\n    at browserslist (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\browserslist\\\\index.js:411:31)\\n    at getTargets (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\helper-compilation-targets\\\\lib\\\\index.js:199:48)\\n    at C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\preset-env\\\\lib\\\\index.js:258:57\\n    at C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\helper-plugin-utils\\\\lib\\\\index.js:19:12\\n    at C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:199:14\\n    at Generator.next (<anonymous>)\\n    at Function.<anonymous> (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:26:3)\\n    at Generator.next (<anonymous>)\\n    at step (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\gensync\\\\index.js:254:32)\\n    at evaluateAsync (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\gensync\\\\index.js:284:5)\\n    at Function.errback (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\gensync\\\\index.js:108:7)\\n    at errback (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\gensync-utils\\\\async.js:70:18)\\n    at async (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\gensync\\\\index.js:183:31)\\n    at onFirstPause (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\gensync\\\\index.js:209:13)\\n    at Generator.next (<anonymous>)\\n    at cachedFunction (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\caching.js:68:46)\\n    at cachedFunction.next (<anonymous>)\\n    at loadPresetDescriptor (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:292:43)\\n    at loadPresetDescriptor.next (<anonymous>)\\n    at recurseDescriptors (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:107:30)\\n    at recurseDescriptors.next (<anonymous>)\\n    at loadFullConfig (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\config\\\\full.js:142:6)\\n    at loadFullConfig.next (<anonymous>)\\n    at Function.transform (C:\\\\Users\\\\nonsk\\\\WebstormProject\\\\React\\\\tot-systems-frontend-test\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transform.js:25:45)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });