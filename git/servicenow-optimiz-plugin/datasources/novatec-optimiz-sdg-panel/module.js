define(["@grafana/data","@grafana/runtime","@grafana/ui","lodash","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./datasources/novatec-optimiz-sdg-panel/module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".service-dependency-graph-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.graph-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.service-dependency-graph {\n  position: relative;\n  flex-grow: 1;\n  min-width: 0;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.zoom-button-container {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  z-index: 99;\n  width: 35px;\n}\n\n.statistics {\n  flex-basis: 0;\n  transition: flex-basis 250ms ease-in-out;\n  overflow-y: scroll;\n}\n\n.statistics.show {\n  flex-basis: 30rem;\n  padding-left: 0.5%;\n}\n\n.header--selection {\n  font-size: 1.25em;\n  text-align: center;\n  border-bottom: 2px solid #161719;\n  font-weight: 500;\n  color: #d8d9da;\n}\n\n.secondHeader--selection {\n  font-size: 1.2em;\n  text-align: center;\n  padding-bottom: 0.5rem;\n}\n\n.no-data--selection {\n  color: #888888;\n  text-align: center;\n}\n\n.table--selection {\n  width: 99%;\n  table-layout: fixed;\n  border: 2px solid #286bc7;\n}\n\n.table--selection th, .table--selection td {\n  padding: 3px 5px;\n}\n\n.table--selection tr {\n  border-bottom: 2px solid #161719;\n}\n\n.table--td--selection {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.threshold--bad {\n  color: #f2495c;\n}\n\n.threshold--good {\n  color: #73bf69;\n}\n\n.table--th--selectionSmall {\n  width: 5.5rem;\n}\n\n.table--th--selectionMedium {\n  width: 8rem;\n}\n\n.table--selection--head {\n  background-color: #28282a;\n  border-top: 2px solid #161719;\n  color: #33b5e5;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.table--th, .table--td {\n  border: 2px solid #286bc7;\n}", "",{"version":3,"sources":["novatec-service-dependency-graph-panel.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,WAAW;EACX,WAAW;AACb;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gCAAgC;EAChC,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;AAC3B","file":"novatec-service-dependency-graph-panel.css","sourcesContent":[".service-dependency-graph-panel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.graph-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.service-dependency-graph {\n  position: relative;\n  flex-grow: 1;\n  min-width: 0;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.zoom-button-container {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  z-index: 99;\n  width: 35px;\n}\n\n.statistics {\n  flex-basis: 0;\n  transition: flex-basis 250ms ease-in-out;\n  overflow-y: scroll;\n}\n\n.statistics.show {\n  flex-basis: 30rem;\n  padding-left: 0.5%;\n}\n\n.header--selection {\n  font-size: 1.25em;\n  text-align: center;\n  border-bottom: 2px solid #161719;\n  font-weight: 500;\n  color: #d8d9da;\n}\n\n.secondHeader--selection {\n  font-size: 1.2em;\n  text-align: center;\n  padding-bottom: 0.5rem;\n}\n\n.no-data--selection {\n  color: #888888;\n  text-align: center;\n}\n\n.table--selection {\n  width: 99%;\n  table-layout: fixed;\n  border: 2px solid #286bc7;\n}\n\n.table--selection th, .table--selection td {\n  padding: 3px 5px;\n}\n\n.table--selection tr {\n  border-bottom: 2px solid #161719;\n}\n\n.table--td--selection {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.threshold--bad {\n  color: #f2495c;\n}\n\n.threshold--good {\n  color: #73bf69;\n}\n\n.table--th--selectionSmall {\n  width: 5.5rem;\n}\n\n.table--th--selectionMedium {\n  width: 8rem;\n}\n\n.table--selection--head {\n  background-color: #28282a;\n  border-top: 2px solid #161719;\n  color: #33b5e5;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.table--th, .table--td {\n  border: 2px solid #286bc7;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.css":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.css ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".suggestion {\n  width: 100%;\n  border-right: 1px solid #3865AB;\n  border-left: 1px solid #3865AB;\n  background-color: #0B0C0E;\n  padding-left: 10px;\n}\n\nul {\n  list-style-type: none;\n}\n\nul:last-child {\n  border-bottom: 1px solid #3865AB;\n}", "",{"version":3,"sources":["TypeaheadTextfield.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,+BAA+B;EAC/B,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;AAClC","file":"TypeaheadTextfield.css","sourcesContent":[".suggestion {\n  width: 100%;\n  border-right: 1px solid #3865AB;\n  border-left: 1px solid #3865AB;\n  background-color: #0B0C0E;\n  padding-left: 10px;\n}\n\nul {\n  list-style-type: none;\n}\n\nul:last-child {\n  border-bottom: 1px solid #3865AB;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.css":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.css ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".no-background {\n  background-color: transparent;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.icon-mapping-button {\n  width: 46.5%;\n  margin-left: 0;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.width-half {\n  width: 47%;\n  text-overflow: ellipsis;\n}", "",{"version":3,"sources":["IconMapping.css"],"names":[],"mappings":"AAAA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB","file":"IconMapping.css","sourcesContent":[".no-background {\n  background-color: transparent;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.icon-mapping-button {\n  width: 46.5%;\n  margin-left: 0;\n}\n\n.width-100 {\n  width: 100%;\n}\n\n.width-half {\n  width: 47%;\n  text-overflow: ellipsis;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.css":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.css ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".graph-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.zoom-button-container {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: 99;\n}\n\n.navbar-button {\n  background-color: black;\n  opacity: 1;\n}\n\n.navbar-button-fa {\n  color: #FEE75C;\n}", "",{"version":3,"sources":["ServiceDependencyGraph.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,UAAU;AACZ;;AAEA;EACE,cAAc;AAChB","file":"ServiceDependencyGraph.css","sourcesContent":[".graph-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.zoom-button-container {\n  position: absolute;\n  top: 0;\n  left: 1rem;\n  z-index: 99;\n}\n\n.navbar-button {\n  background-color: black;\n  opacity: 1;\n}\n\n.navbar-button-fa {\n  color: #FEE75C;\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".margin {\n  margin: 10px;\n}\n\n.statistics {\n  flex-basis: 0;\n  transition: flex-basis 500ms ease-in-out;\n  overflow-y: scroll;\n}\n\n.statistics.show {\n  position: absolute;\n  flex-basis: 30rem;\n  padding-left: 0.5%;\n  height: 250px !important;\n  width: 375px !important;\n  right: 0;\n  z-index: 999;\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n}", "",{"version":3,"sources":["Statistics.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,wCAAwC;EACxC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,wBAAwB;EACxB,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,0BAA0B;EAC1B,kCAAkC;AACpC","file":"Statistics.css","sourcesContent":[".margin {\n  margin: 10px;\n}\n\n.statistics {\n  flex-basis: 0;\n  transition: flex-basis 500ms ease-in-out;\n  overflow-y: scroll;\n}\n\n.statistics.show {\n  position: absolute;\n  flex-basis: 30rem;\n  padding-left: 0.5%;\n  height: 250px !important;\n  width: 375px !important;\n  right: 0;\n  z-index: 999;\n  backdrop-filter: blur(4px);\n  -webkit-backdrop-filter: blur(4px);\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css":
/*!**********************************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js!./novatec-service-dependency-graph-panel.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/dummy_data_frame.ts":
/*!*******************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/dummy_data_frame.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);

var data = [{
  refId: 'A',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }, {
    name: 'origin_external',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', '', '', '', '', '', '', '', '', 'tcp://localhost:61616', 'tcp://10.10.10.10:61616'])
  }, {
    name: 'origin_service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'customers-service', 'vets-service', 'visits-service', 'vets-service', ''])
  }, {
    name: 'protocol',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'jms', 'jms'])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'config-server', 'discovery-server', 'api-gateway', 'customers-service', 'discovery-server', 'vets-service', 'visits-service', 'discovery-server', 'discovery-server', 'discovery-server', 'visits-service', 'api-gateway'])
  }, {
    name: 'in_count',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([508, 0, 0, 100, 347, 20, 63, 100, 20, 20, 20, 300, 300])
  }],
  length: 13
}, {
  refId: 'B',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }, {
    name: 'protocol',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'jms', 'http', 'jdbc', 'jdbc', 'jdbc'])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'config-server', 'customers-service', 'vets-service', 'vets-service', 'visits-service', 'customers-service', 'vets-service', 'visits-service'])
  }, {
    name: 'target_external',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', '', '', '7a8dce897616:8080', 'github.com', '', '', 'tcp://localhost:61616', '', 'jdbc:hsqldb:mem:testdb', 'jdbc:hsqldb:mem:testdb', 'jdbc:hsqldb:mem:testdb'])
  }, {
    name: 'target_service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'customers-service', 'discovery-server', 'vets-service', 'visits-service', '', '', 'discovery-server', 'discovery-server', 'visits-service', 'discovery-server', '', '', ''])
  }, {
    name: 'out_count',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([100, 347, 20, 62, 100, 0, 0, 20, 20, 300, 20, 1847, 441, 100])
  }],
  length: 14
}, {
  refId: 'C',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }, {
    name: 'origin_service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'customers-service', 'vets-service', 'visits-service'])
  }, {
    name: 'protocol',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http'])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'config-server', 'discovery-server', 'api-gateway', 'customers-service', 'discovery-server', 'vets-service', 'visits-service', 'discovery-server', 'discovery-server', 'discovery-server'])
  }, {
    name: 'target_external',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', '', '', '', '', '', '', '', ''])
  }, {
    name: 'in_timesum',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([45140.008427999986, 0, 0, 1511.9842349999872, 819.3634589999965, 21.881731999999943, 281.0465210000002, 325.85070300000007, 21.53124399999996, 21.40604300000001, 20.813048000000038])
  }],
  length: 11
}, {
  refId: 'D',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  }, {
    name: 'protocol',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'http', 'jdbc', 'jdbc', 'jdbc'])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'api-gateway', 'config-server', 'customers-service', 'vets-service', 'visits-service', 'customers-service', 'vets-service', 'visits-service'])
  }, {
    name: 'target_external',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', '', '', '7a8dce897616:8080', 'github.com', '', '', '', 'jdbc:hsqldb:mem:testdb', 'jdbc:hsqldb:mem:testdb', 'jdbc:hsqldb:mem:testdb'])
  }, {
    name: 'target_service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'customers-service', 'discovery-server', 'vets-service', 'visits-service', '', '', 'discovery-server', 'discovery-server', 'discovery-server', '', '', ''])
  }, {
    name: 'out_timesum',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([1700.468872999987, 1481.533606999972, 540.746261, 501.65547400000014, 394.81158100000175, 0, 0, 84.59527999999978, 381.87400800000023, 225.65933600000017, 35.9093940000007, 13.000189000000091, 12.258137999999946])
  }],
  length: 13
}, {
  refId: 'E',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0, 0, 0])
  }, {
    name: 'origin_service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', ''])
  }, {
    name: 'protocol',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['http', 'http', 'http', 'http'])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'discovery-server', 'customers-service', 'vets-service'])
  }, {
    name: 'target_external',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', ''])
  }, {
    name: 'error_in',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([14, 20, 20, 0])
  }],
  length: 4
}, {
  refId: 'F',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0, 0, 0])
  }, {
    name: 'origin_service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'api-gateway', 'api-gateway', 'customers-service'])
  }, {
    name: 'protocol',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['http', 'http', 'http', 'http'])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['customers-service', 'vets-service', 'visits-service', 'discovery-server'])
  }, {
    name: 'target_external',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['', '', '', ''])
  }, {
    name: 'error_out',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([14, 0, 0, 20])
  }],
  length: 4
}, {
  refId: 'G',
  name: undefined,
  meta: undefined,
  fields: [{
    name: 'time',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].time,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([0, 0])
  }, {
    name: 'service',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].string,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"](['api-gateway', 'customers-service'])
  }, {
    name: 'threshold',
    type: _grafana_data__WEBPACK_IMPORTED_MODULE_0__["FieldType"].number,
    config: {},
    values: new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["ArrayVector"]([40.40604300000001, 10])
  }],
  length: 2
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/migration/PanelMigration.tsx":
/*!****************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/migration/PanelMigration.tsx ***!
  \****************************************************************************/
/*! exports provided: PanelMigrationHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelMigrationHandler", function() { return PanelMigrationHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'options/DefaultSettings'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/**
 * Checks if the given options are in the format of version < 4.0.0.
 * @param options The options object which should be checked.
 */

function isLegacyFormat(options) {
  return !('showDummyData' in options['dataMapping']);
}
/**
 * Migrates the legacy iconMapping format to the iconMapping format of version > 4.0.0.
 * @param iconMappings The iconMappings object to be migrated.
 */


function migrateIconMapping(iconMappings) {
  var e_1, _a;

  var migratedIconMapping = [];

  try {
    for (var iconMappings_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(iconMappings), iconMappings_1_1 = iconMappings_1.next(); !iconMappings_1_1.done; iconMappings_1_1 = iconMappings_1.next()) {
      var iconMapping = iconMappings_1_1.value;
      migratedIconMapping.push({
        pattern: iconMapping.name,
        filename: iconMapping.filename
      });
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (iconMappings_1_1 && !iconMappings_1_1.done && (_a = iconMappings_1["return"])) _a.call(iconMappings_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return migratedIconMapping;
}
/**
 * Migrates the legacy panel settings from version < 4.0.0 to the new format introduced in version 4.0.0
 * The newly introduced variable aggregationType will be set to $aggregationTyoe in order to ensure functionality with
 * the legacy setup of the panel.
 * All other newly added options will be set to their respective default values.
 * @param panel The panel object which should be migrated.
 */


var PanelMigrationHandler = function PanelMigrationHandler(panel) {
  var settings = panel.settings;

  if (isLegacyFormat(settings)) {
    return {
      animate: settings.animate,
      sumTimings: settings.sumTimings,
      filterEmptyConnections: settings.filterEmptyConnections,
      style: {
        healthyColor: settings.style.healthyColor,
        dangerColor: settings.style.dangerColor,
        noDataColor: settings.style.unknownColor
      },
      showDebugInformation: settings.showDebugInformation,
      showConnectionStats: settings.showConnectionStats,
      externalIcons: migrateIconMapping(settings.externalIcons),
      icons: settings.serviceIcons,
      dataMapping: {
        aggregationType: '$aggregationType',
        sourceColumn: settings.dataMapping.sourceComponentPrefix + '$aggregationType',
        targetColumn: settings.dataMapping.targetComponentPrefix + '$aggregationType',
        responseTimeColumn: settings.dataMapping.responseTimeColumn,
        requestRateColumn: settings.dataMapping.requestRateColumn,
        errorRateColumn: settings.dataMapping.errorRateColumn,
        responseTimeOutgoingColumn: settings.dataMapping.responseTimeOutgoingColumn,
        requestRateOutgoingColumn: settings.dataMapping.requestRateOutgoingColumn,
        errorRateOutgoingColumn: settings.dataMapping.errorRateOutgoingColumn,
        extOrigin: settings.dataMapping.extOrigin,
        extTarget: settings.dataMapping.extTarget,
        type: settings.dataMapping.type,
        showDummyData: settings.showDummyData,
        baselineRtUpper: settings.dataMapping.baselineRtUpper
      },
      drillDownLink: settings.drillDownLink,
      showBaselines: settings.showBaselines,
      timeFormat: !(function webpackMissingModule() { var e = new Error("Cannot find module 'options/DefaultSettings'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).timeFormat
    };
  }

  return settings;
};

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/module.ts":
/*!*********************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/module.ts ***!
  \*********************************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _panel_PanelController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel/PanelController */ "./datasources/novatec-optimiz-sdg-panel/panel/PanelController.tsx");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/options */ "./datasources/novatec-optimiz-sdg-panel/options/options.tsx");
/* harmony import */ var _migration_PanelMigration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./migration/PanelMigration */ "./datasources/novatec-optimiz-sdg-panel/migration/PanelMigration.tsx");




var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_panel_PanelController__WEBPACK_IMPORTED_MODULE_1__["PanelController"]).setPanelOptions(_options_options__WEBPACK_IMPORTED_MODULE_2__["optionsBuilder"]).setMigrationHandler(_migration_PanelMigration__WEBPACK_IMPORTED_MODULE_3__["PanelMigrationHandler"]);

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/DefaultSettings.tsx":
/*!***************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/DefaultSettings.tsx ***!
  \***************************************************************************/
/*! exports provided: DefaultSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSettings", function() { return DefaultSettings; });
var DefaultSettings = {
  animate: true,
  dataMapping: {
    aggregationType: 'app',
    sourceColumn: 'origin_app',
    targetColumn: 'target_app',
    responseTimeColumn: 'response-time',
    requestRateColumn: 'req_rate',
    errorRateColumn: 'error-rate',
    responseTimeOutgoingColumn: 'response-time-out',
    requestRateOutgoingColumn: 'request-rate-out',
    errorRateOutgoingColumn: 'error-rate-out',
    extOrigin: 'external_origin',
    extTarget: 'external_target',
    type: 'type',
    classColumn: 'type',
    baselineRtUpper: 'threshold',
    showDummyData: false
  },
  sumTimings: true,
  filterEmptyConnections: false,
  showDebugInformation: false,
  showConnectionStats: false,
  showBaselines: false,
  style: {
    healthyColor: 'rgb(87, 148, 242)',
    dangerColor: 'rgb(196, 22, 42)',
    noDataColor: 'rgb(123, 123, 138)'
  },
  icons: [{
    pattern: 'Disk Partition|Disk',
    filename: 'disk'
  }, {
    pattern: 'File System',
    filename: 'aws_filesystem'
  }, {
    pattern: 'IP Address',
    filename: 'ip'
  }, {
    pattern: 'Network Adapter',
    filename: 'nic'
  }, {
    pattern: 'Windows Server',
    filename: 'windows'
  }, {
    pattern: 'Linux Server',
    filename: 'linux'
  }, {
    pattern: 'Kubernetes Service',
    filename: 'k8s-svc'
  }, {
    pattern: 'Kubernetes Pod',
    filename: 'k8s-pod'
  }, {
    pattern: 'Docker Container|Docker Image',
    filename: 'docker_container'
  }, {
    pattern: 'Manual Endpoint',
    filename: 'manual_entrypoint'
  }, {
    pattern: 'ServiceNow Application Component',
    filename: 'application_generic'
  }, {
    pattern: 'ServiceNow Application',
    filename: 'application_svc'
  }, {
    pattern: 'ServiceNow MID Server',
    filename: 'gear'
  }, {
    pattern: 'Kubernetes Volume',
    filename: 'k8s-volume'
  }, {
    pattern: 'Tag-Based Application Service',
    filename: 'tag'
  }, {
    pattern: '',
    filename: 'default'
  }],
  externalIcons: [{
    pattern: 'web',
    filename: 'web'
  }, {
    pattern: 'jms',
    filename: 'message'
  }, {
    pattern: 'jdbc',
    filename: 'database'
  }, {
    pattern: 'http',
    filename: 'http'
  }],
  drillDownLink: '',
  timeFormat: 'm',
  datasourceName: 'servicenow-optimiz-plugin'
};

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.css":
/*!*************************************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js!./TypeaheadTextfield.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.tsx":
/*!*************************************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.tsx ***!
  \*************************************************************************************************/
/*! exports provided: TypeaheadTextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeaheadTextField", function() { return TypeaheadTextField; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-autosuggest'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _TypeaheadTextfield_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeaheadTextfield.css */ "./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.css");
/* harmony import */ var _TypeaheadTextfield_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TypeaheadTextfield_css__WEBPACK_IMPORTED_MODULE_3__);





var TypeaheadTextField =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(TypeaheadTextField, _super);

  function TypeaheadTextField(props) {
    var _this = _super.call(this, props) || this;

    _this.onChange = function (event, _a) {
      var newValue = _a.newValue; //TODO make this type nicer!

      var path = _this.props.item.path;
      var value = event.currentTarget.value;

      _this.setState({
        value: value
      });

      _this.props.onChange.call(path, newValue);
    };

    _this.getSuggestions = function (value) {
      var inputValue = '';

      if (value !== undefined) {
        return [];
      }

      if (value !== undefined && value !== null && value !== '') {
        inputValue = value.trim().toLowerCase();
      }

      var inputLength = inputValue.length;

      if (inputLength === 0 || inputValue === undefined) {
        return [];
      }

      return _this.getColumnNames().filter(function (columnName) {
        return columnName.toLowerCase().startsWith(inputValue);
      });
    };

    _this.onSuggestionsFetchRequested = function (value) {
      _this.setState({
        suggestions: _this.getSuggestions(value)
      });
    };

    _this.getSuggestionValue = function (suggestion) {
      return suggestion;
    };

    _this.onSuggestionsClearRequested = function () {
      _this.setState({
        suggestions: []
      });
    };

    var value = props.value;

    if (value === undefined) {
      value = props.item.defaultValue;
    }

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), {
      value: value,
      suggestions: []
    });
    return _this;
  }

  TypeaheadTextField.prototype.renderSuggestion = function (suggestion) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, suggestion);
  };

  TypeaheadTextField.prototype.getColumnNames = function () {
    var data = this.props.context.data;
    var series;
    var columnNames = [];

    if (data !== undefined && data.length > 0) {
      series = data[0].fields;

      for (var index in series) {
        var field = series[index];
        var config = field.config,
            name = field.name;

        if (config !== undefined && config.displayName !== undefined) {
          columnNames.push(config.displayName);
        } else {
          columnNames.push(name);
        }
      }
    }

    return columnNames;
  };

  TypeaheadTextField.prototype.render = function () {
    var value = this.props.value;

    if (value === undefined) {
      value = this.props.item.defaultValue;
    }

    var suggestions = this.getSuggestions(value);
    var inputProps = {
      placeholder: 'Enter cloumn name...',
      value: value,
      onChange: this.onChange
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-autosuggest'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.onSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
      inputProps: inputProps,
      theme: {
        input: 'input-small gf-form-input width-100',
        suggestion: 'suggestion'
      }
    });
  };

  return TypeaheadTextField;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);



/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/dummyDataSwitch/DummyDataSwitch.tsx":
/*!*******************************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/dummyDataSwitch/DummyDataSwitch.tsx ***!
  \*******************************************************************************************/
/*! exports provided: DummyDataSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DummyDataSwitch", function() { return DummyDataSwitch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);




var DummyDataSwitch =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DummyDataSwitch, _super);

  function DummyDataSwitch(props) {
    var _this = _super.call(this, props) || this;

    _this.getDummyDataMapping = function () {
      return {
        aggregationType: 'service',
        sourceColumn: 'origin_service',
        targetColumn: 'target_service',
        responseTimeColumn: 'in_timesum',
        requestRateColumn: 'in_count',
        errorRateColumn: 'error_in',
        responseTimeOutgoingColumn: 'out_timesum',
        requestRateOutgoingColumn: 'out_count',
        errorRateOutgoingColumn: 'error_out',
        extOrigin: '',
        extTarget: '',
        type: '',
        showDummyData: true,
        baselineRtUpper: 'threshold'
      };
    };

    _this.onChange = function () {
      var dataMapping = _this.props.context.options.dataMapping;
      var item = _this.state.item;
      var onChange = _this.props.onChange;
      var newValue = !dataMapping.showDummyData;

      if (newValue) {
        _this.setState({
          dataMapping: dataMapping
        });

        dataMapping = _this.getDummyDataMapping();
      }

      dataMapping.showDummyData = newValue;
      onChange.call(item.path, dataMapping);
    };

    var dataMapping = props.context.options.dataMapping;

    if (dataMapping === undefined) {
      dataMapping = props.item.defaultValue;
    }

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      dataMapping: dataMapping
    }, props);
    return _this;
  }

  DummyDataSwitch.prototype.render = function () {
    var _this = this;

    var dataMapping = this.props.context.options.dataMapping;

    if (dataMapping === undefined) {
      dataMapping = this.props.item.defaultValue;
      this.props.context.options.dataMapping = this.props.item.defaultValue;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      value: dataMapping.showDummyData,
      css: {},
      onChange: function onChange() {
        return _this.onChange();
      }
    }));
  };

  return DummyDataSwitch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);



/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.css":
/*!***********************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js!./IconMapping.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.tsx":
/*!***********************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.tsx ***!
  \***********************************************************************************/
/*! exports provided: IconMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconMapping", function() { return IconMapping; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _panel_asset_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panel/asset_utils */ "./datasources/novatec-optimiz-sdg-panel/panel/asset_utils.tsx");
/* harmony import */ var _IconMapping_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconMapping.css */ "./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.css");
/* harmony import */ var _IconMapping_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_IconMapping_css__WEBPACK_IMPORTED_MODULE_3__);





var IconMapping =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(IconMapping, _super);

  function IconMapping(props) {
    var _this = _super.call(this, props) || this;

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), {
      icons: []
    });
    fetch(_panel_asset_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getAssetUrl('icon_index.json')).then(function (response) {
      return response.json();
    }).then(function (data) {
      data.sort();

      _this.setState({
        icons: data
      });
    })["catch"](function () {
      console.error('Could not load service icons mapping index. Please verify the "icon_index.json" in the plugin\'s asset directory.');
    });
    return _this;
  }

  IconMapping.prototype.addMapping = function () {
    var path = this.state.item.path;
    var icons = this.state.context.options[path];
    icons.push({
      pattern: '',
      filename: 'default'
    });
    this.state.onChange.call(path, icons);
  };

  IconMapping.prototype.removeMapping = function (index) {
    var path = this.state.item.path;
    var icons = this.state.context.options[path];
    icons.splice(index, 1);
    this.state.onChange.call(path, icons);
  };

  IconMapping.prototype.setPatternValue = function (event, index) {
    var path = this.state.item.path;
    var icons = this.state.context.options[path];
    icons[index].pattern = event.currentTarget.value;
    this.state.onChange.call(path, icons);
  };

  IconMapping.prototype.setFileNameValue = function (event, index) {
    var path = this.state.item.path;
    var icons = this.state.context.options[path];
    icons[index].filename = event.currentTarget.value.toString();
    this.props.onChange.call(path, icons);
  };

  IconMapping.prototype.render = function () {
    var _this = this;

    var path = this.state.item.path;
    var iconNames = this.state.icons;
    var icons = this.state.context.options[path];

    if (icons === undefined) {
      icons = this.state.item.defaultValue;
      this.state.context.options[path] = this.state.item.defaultValue;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form-inline"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "gf-form width-100"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label no-background no-padding-left width-half"
    }, "Target Name (RegEx)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
      className: "gf-form-label no-background no-padding-left width-half"
    }, "Icon"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, icons.map(function (icon, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gf-form"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "input-small gf-form-input",
        value: icon.pattern,
        onChange: function onChange(e) {
          return _this.setPatternValue(e, index);
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "input-small gf-form-input",
        value: icon.filename,
        onChange: function onChange(e) {
          return _this.setFileNameValue(e, index);
        }
      }, iconNames.map(function (iconNames) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: iconNames
        }, iconNames);
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "gf-form-label tight-form-func no-background",
        onClick: function onClick() {
          return _this.removeMapping(index);
        }
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "fa fa-trash"
      }))));
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "btn navbar-button navbar-button--primary icon-mapping-button",
      onClick: function onClick() {
        return _this.addMapping();
      }
    }, "Add Icon Mapping"));
  };

  return IconMapping;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);



/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/options/options.tsx":
/*!*******************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/options/options.tsx ***!
  \*******************************************************************/
/*! exports provided: optionsBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsBuilder", function() { return optionsBuilder; });
/* harmony import */ var _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeAheadTextfield/TypeaheadTextfield */ "./datasources/novatec-optimiz-sdg-panel/options/TypeAheadTextfield/TypeaheadTextfield.tsx");
/* harmony import */ var _iconMapping_IconMapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iconMapping/IconMapping */ "./datasources/novatec-optimiz-sdg-panel/options/iconMapping/IconMapping.tsx");
/* harmony import */ var _dummyDataSwitch_DummyDataSwitch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dummyDataSwitch/DummyDataSwitch */ "./datasources/novatec-optimiz-sdg-panel/options/dummyDataSwitch/DummyDataSwitch.tsx");
/* harmony import */ var _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultSettings */ "./datasources/novatec-optimiz-sdg-panel/options/DefaultSettings.tsx");




var optionsBuilder = function optionsBuilder(builder) {
  return builder //Connection Mapping
  .addCustomEditor({
    path: 'dataMapping.aggregationType',
    id: 'aggregationType',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    name: 'Component Column',
    category: ['Connection Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.aggregationType
  }).addCustomEditor({
    path: 'dataMapping.sourceColumn',
    id: 'sourceComponentPrefix',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    name: 'Source Component Column',
    category: ['Connection Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.sourceColumn
  }).addCustomEditor({
    path: 'dataMapping.targetColumn',
    id: 'targetComponentPrefix',
    name: 'Target Component Column',
    category: ['Connection Mapping'],
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.targetColumn
  }).addCustomEditor({
    path: 'dataMapping.type',
    id: 'type',
    name: 'Type',
    category: ['Connection Mapping'],
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.type
  }).addCustomEditor({
    path: 'dataMapping.extOrigin',
    id: 'externalOrigin',
    name: 'External Origin',
    category: ['Connection Mapping'],
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.extOrigin
  }).addCustomEditor({
    path: 'dataMapping.extTarget',
    id: 'externalTarget',
    name: 'External Target',
    category: ['Connection Mapping'],
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.extTarget
  }) //Data Mapping
  .addCustomEditor({
    id: 'classColumn',
    path: 'dataMapping.classColumn',
    name: 'Class Column',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.classColumn
  }).addCustomEditor({
    id: 'responseTime',
    path: 'dataMapping.responseTimeColumn',
    name: 'Response Time Column',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.responseTimeColumn
  }).addCustomEditor({
    id: 'requestRateColumn',
    path: 'dataMapping.requestRateColumn',
    name: 'Request Rate Column',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.requestRateColumn
  }).addCustomEditor({
    id: 'errorRateColumn',
    path: 'dataMapping.errorRateColumn',
    name: 'Error Rate Column',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.errorRateColumn
  }).addCustomEditor({
    id: 'responseTimeOutgoingColumn',
    path: 'dataMapping.responseTimeOutgoingColumn',
    name: 'Response Time Column (Outgoing)',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.responseTimeOutgoingColumn
  }).addCustomEditor({
    id: 'requestRateOutgoingColumn',
    path: 'dataMapping.requestRateOutgoingColumn',
    name: 'Request Rate Column (Outgoing)',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.requestRateOutgoingColumn
  }).addCustomEditor({
    id: 'errorRateOutgoingColumn',
    path: 'dataMapping.errorRateOutgoingColumn',
    name: 'Error Rate Column (Outgoing)',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.errorRateOutgoingColumn
  }).addCustomEditor({
    id: 'baselineRtUpper',
    path: 'dataMapping.baselineRtUpper',
    name: 'Response Time Baseline (Upper)',
    editor: _TypeAheadTextfield_TypeaheadTextfield__WEBPACK_IMPORTED_MODULE_0__["TypeaheadTextField"],
    category: ['Data Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping.baselineRtUpper
  }) //General Settings
  .addBooleanSwitch({
    path: 'showConnectionStats',
    name: 'Show Connection Statistics',
    category: ['General Settings'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].showConnectionStats
  }).addBooleanSwitch({
    path: 'sumTimings',
    name: 'Handle Timings as Sums',
    description: 'If this setting is active, the timings provided' + 'by the mapped response time columns are considered as a ' + 'continually increasing sum of response times. When ' + 'deactivated, it is considered that the timings provided ' + 'by columns are the actual average response times.',
    category: ['General Settings'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].sumTimings
  }).addBooleanSwitch({
    path: 'filterEmptyConnections',
    name: 'Filter Empty Data',
    description: 'If this setting is active, the timings provided by ' + 'the mapped response time columns are considered as a continually ' + 'increasing sum of response times. When deactivated, it is considered ' + 'that the timings provided by columns are the actual average response times.',
    category: ['General Settings'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].filterEmptyConnections
  }).addBooleanSwitch({
    path: 'showDebugInformation',
    name: 'Show Debug Information',
    category: ['General Settings'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].showDebugInformation
  }).addCustomEditor({
    path: 'dataMapping',
    id: 'dummyDataSwitch',
    name: 'Show Dummy Data',
    editor: _dummyDataSwitch_DummyDataSwitch__WEBPACK_IMPORTED_MODULE_2__["DummyDataSwitch"],
    category: ['General Settings'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].dataMapping
  }).addBooleanSwitch({
    path: 'showBaselines',
    name: 'Show Baselines',
    category: ['General Settings'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].showBaselines
  }).addSelect({
    path: 'timeFormat',
    name: 'Maximum Time Unit to Resolve',
    description: 'This setting controls to which time unit time values will be resolved to. ' + 'Each value always includes the smaller units.',
    category: ['General Settings'],
    settings: {
      options: [{
        value: 'ms',
        label: 'ms'
      }, {
        value: 's',
        label: 's'
      }, {
        value: 'm',
        label: 'm'
      }]
    },
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].timeFormat
  }) //Appearance
  .addColorPicker({
    path: 'style.healthyColor',
    name: 'Healthy Color',
    category: ['Appearance'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].style.healthyColor
  }).addColorPicker({
    path: 'style.dangerColor',
    name: 'Danger Color',
    category: ['Appearance'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].style.dangerColor
  }).addColorPicker({
    path: 'style.noDataColor',
    name: 'No Data Color',
    category: ['Appearance'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].style.noDataColor
  }) //Icon Mapping
  .addCustomEditor({
    path: 'icons',
    id: 'iconMapping',
    editor: _iconMapping_IconMapping__WEBPACK_IMPORTED_MODULE_1__["IconMapping"],
    name: '',
    description: 'This setting controls which images should be mapped to your directly monitored nodes. ' + 'The node names are matched by the regex pattern provided in the "Target Name(Regex) column.',
    category: ['Icon Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].icons
  }) //External Icon Mapping
  .addCustomEditor({
    path: 'externalIcons',
    id: 'externalIconMapping',
    editor: _iconMapping_IconMapping__WEBPACK_IMPORTED_MODULE_1__["IconMapping"],
    name: '',
    description: 'This setting controls which images should be mapped to the external nodes. ' + 'The given type column is matched by the regex pattern provided in the "Target Name(Regex) column.',
    category: ['External Icon Mapping'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].externalIcons
  }) //Tracing Drilldown
  .addTextInput({
    path: 'drillDownLink',
    name: 'Backend URL',
    category: ['Tracing Drilldown'],
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].drillDownLink
  }).addTextInput({
    path: 'datasourceName',
    name: 'Datasource Name',
    category: ['Datasource'],
    description: 'Datasource name will be used to make calls to other pannels in the dashboard.',
    defaultValue: _DefaultSettings__WEBPACK_IMPORTED_MODULE_3__["DefaultSettings"].datasourceName
  });
};

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/PanelController.tsx":
/*!*************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/PanelController.tsx ***!
  \*************************************************************************/
/*! exports provided: PanelController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelController", function() { return PanelController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _serviceDependencyGraph_ServiceDependencyGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceDependencyGraph/ServiceDependencyGraph */ "./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_novatec_service_dependency_graph_panel_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/novatec-service-dependency-graph-panel.css */ "./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css");
/* harmony import */ var _css_novatec_service_dependency_graph_panel_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_novatec_service_dependency_graph_panel_css__WEBPACK_IMPORTED_MODULE_4__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'processing/graph_generator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'processing/pre_processor'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _dummy_data_frame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dummy_data_frame */ "./datasources/novatec-optimiz-sdg-panel/dummy_data_frame.ts");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__);











var PanelController =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PanelController, _super);

  function PanelController(props) {
    var _this = _super.call(this, props) || this;

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props);
    _this.ref = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    _this.graphGenerator = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'processing/graph_generator'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this);
    _this.preProcessor = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'processing/pre_processor'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_this);
    return _this;
  }

  PanelController.prototype.getSettings = function (resolveVariables) {
    if (resolveVariables) {
      return this.resolveVariables(this.props.options);
    }

    return this.props.options;
  };

  PanelController.prototype.resolveVariables = function (element) {
    var e_1, _a;

    if (element instanceof Object) {
      var newObject = {};

      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(element)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          newObject[key] = this.resolveVariables(element[key]);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      return newObject;
    }

    if (element instanceof String || typeof element === 'string') {
      return Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])().replace(element.toString());
    }

    return element;
  };

  PanelController.prototype.resolveTemplateVars = function (input, copy) {
    var e_2, _a;

    var value = input;

    if (copy) {
      value = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.cloneDeep(value);
    }

    if (typeof value === 'string' || value instanceof String) {
      value = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_7__["getTemplateSrv"])().replace(value.toString());
    }

    if (value instanceof Object) {
      try {
        for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(Object.keys(value)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          value[key] = this.resolveTemplateVars(value[key], false);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }

    return value;
  };

  PanelController.prototype.componentDidUpdate = function () {
    this.processData();
  };

  PanelController.prototype.processQueryData = function (data) {
    this.validQueryTypes = this.hasOnlyTableQueries(data);
    var graphData = this.preProcessor.processData(data);
    this.currentData = graphData;
  };

  PanelController.prototype.hasOnlyTableQueries = function (inputData) {
    var result = true;

    lodash__WEBPACK_IMPORTED_MODULE_3___default.a.each(inputData, function (dataElement) {
      if (!lodash__WEBPACK_IMPORTED_MODULE_3___default.a.has(dataElement, 'columns')) {
        result = false;
      }
    });

    return result;
  };

  PanelController.prototype.processData = function () {
    var inputData = this.props.data.series;

    if (this.getSettings(true).dataMapping.showDummyData) {
      inputData = _dummy_data_frame__WEBPACK_IMPORTED_MODULE_6__["default"];
    }

    this.processQueryData(inputData);
    var graph = this.graphGenerator.generateGraph(this.currentData.graph);
    return graph;
  };

  PanelController.prototype._transformEdges = function (edges) {
    var cyEdges = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(edges, function (edge) {
      var cyEdge = {
        group: 'edges',
        data: {
          id: edge.source + ':' + edge.target,
          source: edge.source,
          target: edge.target,
          metrics: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, edge.metrics)
        }
      };
      return cyEdge;
    });

    return cyEdges;
  };

  PanelController.prototype._transformNodes = function (nodes) {
    var cyNodes = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.map(nodes, function (node) {
      var result = {
        group: 'nodes',
        data: {
          id: node.data.id,
          type: node.data.type,
          external_type: node.data.external_type,
          metrics: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node.data.metrics)
        }
      };
      return result;
    });

    return cyNodes;
  };

  PanelController.prototype._updateOrRemove = function (dataArray, inputArray) {
    var elements = [];

    var _loop_1 = function _loop_1(i) {
      var element = dataArray[i];

      var cyNode = lodash__WEBPACK_IMPORTED_MODULE_3___default.a.find(inputArray, {
        data: {
          id: element.id()
        }
      });

      if (cyNode) {
        element.data(cyNode.data);

        lodash__WEBPACK_IMPORTED_MODULE_3___default.a.remove(inputArray, function (n) {
          return n.data.id === cyNode.data.id;
        });

        elements.push(element);
      } else {
        element.remove();
      }
    };

    for (var i = 0; i < dataArray.length; i++) {
      _loop_1(i);
    }

    return elements;
  };

  PanelController.prototype.getError = function () {
    if (!this.isDataAvailable()) {
      return 'No data to show - the query returned no data.';
    }

    return null;
  };

  PanelController.prototype.isDataAvailable = function () {
    var dataExist = !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isUndefined(this.currentData) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isUndefined(this.currentData.graph) && this.currentData.graph.length > 0;
    return dataExist;
  };

  PanelController.prototype.render = function () {
    var data = this.processData();
    var error = this.getError();

    if (error === null) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "service-dependency-graph-panel",
        style: {
          height: this.props.height,
          width: this.props.width
        },
        ref: this.ref,
        id: "cy"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_serviceDependencyGraph_ServiceDependencyGraph__WEBPACK_IMPORTED_MODULE_2__["ServiceDependencyGraph"], {
        data: data,
        zoom: 2,
        controller: this,
        animate: false,
        showStatistics: false,
        settings: this.props.options
      })));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, error);
    }
  };

  return PanelController;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/asset_utils.tsx":
/*!*********************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/asset_utils.tsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  getAssetUrl: function getAssetUrl(assetName) {
    var baseUrl = 'public/plugins/novatec-sdg-panel';
    return baseUrl + '/assets/icons/' + assetName;
  },
  getTypeSymbol: function getTypeSymbol(type, externalIcons, resolveName) {
    if (resolveName === void 0) {
      resolveName = true;
    }

    if (!type) {
      return this.getAssetUrl('default.png');
    }

    if (!resolveName) {
      return this.getAssetUrl(type);
    }

    var icon = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(externalIcons, function (icon) {
      return icon.pattern.toLowerCase() === type.toLowerCase();
    });

    if (icon !== undefined) {
      return this.getAssetUrl(icon.filename + '.png');
    } else {
      return this.getAssetUrl('default.png');
    }
  }
});

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/layout_options.ts":
/*!***********************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/layout_options.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var options = {
  name: 'cola',
  animate: true,
  refresh: 1,
  maxSimulationTime: 3000,
  ungrabifyWhileSimulating: false,
  fit: true,
  padding: 90,
  boundingBox: undefined,
  nodeDimensionsIncludeLabels: false,
  // layout event callbacks
  ready: function ready() {},
  stop: function stop() {},
  // positioning options
  randomize: false,
  avoidOverlap: true,
  handleDisconnected: true,
  convergenceThreshold: 0.01,
  nodeSpacing: function nodeSpacing(node) {
    return 40;
  },
  flow: undefined,
  alignment: undefined,
  gapInequalities: undefined,
  // different methods of specifying edge length
  // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
  edgeLength: undefined,
  edgeSymDiffLength: undefined,
  edgeJaccardLength: undefined,
  // iterations of cola algorithm; uses default values on undefined
  unconstrIter: 50,
  userConstIter: undefined,
  allConstIter: undefined,
  // infinite layout options
  infinite: false // overrides all other options for a forces-all-the-time mode

};
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.css":
/*!*******************************************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js!./ServiceDependencyGraph.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.tsx":
/*!*******************************************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: ServiceDependencyGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceDependencyGraph", function() { return ServiceDependencyGraph; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'panel/canvas/graph_canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape-canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape-cola'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _layout_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout_options */ "./datasources/novatec-optimiz-sdg-panel/panel/layout_options.ts");
/* harmony import */ var _statistics_Statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../statistics/Statistics */ "./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ServiceDependencyGraph_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ServiceDependencyGraph.css */ "./datasources/novatec-optimiz-sdg-panel/panel/serviceDependencyGraph/ServiceDependencyGraph.css");
/* harmony import */ var _ServiceDependencyGraph_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ServiceDependencyGraph_css__WEBPACK_IMPORTED_MODULE_7__);











!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape-canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).use(!(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape-cola'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var ServiceDependencyGraph =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ServiceDependencyGraph, _super);

  function ServiceDependencyGraph(props) {
    var _this = _super.call(this, props) || this;

    _this.initResize = true;
    var animateButtonClass = 'navbar-button-fa fa fa-play-circle';

    if (props.animate) {
      animateButtonClass = 'navbar-button-fa fa fa-pause-circle';
    }

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), {
      showStatistics: false,
      animateButtonClass: animateButtonClass,
      animate: false
    });
    _this.ref = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
    _this.templateSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__["getTemplateSrv"])();
    _this.datasourceSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_6__["getDataSourceSrv"])();
    return _this;
  }

  ServiceDependencyGraph.prototype.componentDidMount = function () {
    var _this = this;

    var cy = !(function webpackMissingModule() { var e = new Error("Cannot find module 'cytoscape'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      container: this.ref,
      zoom: this.state.zoom,
      elements: this.props.data,
      style: [{
        selector: 'node',
        style: {
          'background-opacity': 0
        }
      }, {
        selector: 'edge',
        style: {
          visibility: 'hidden'
        }
      }],
      wheelSensitivity: 0.125
    });
    var graphCanvas = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'panel/canvas/graph_canvas'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(this, cy, cy.cyCanvas({
      zIndex: 1
    }));
    cy.on('render cyCanvas.resize', function () {
      graphCanvas.repaint(true);
      console.log("render resize");
    });
    cy.on('select', 'node', function () {
      return _this.onSelectionChange();
    });
    cy.on('unselect', 'node', function () {
      return _this.onSelectionChange();
    }); //Zoom in on load

    cy.on('layoutstop', function () {
      _this.zoom(1.5);

      _this.toggleAnimation();
    });
    this.setState({
      cy: cy,
      graphCanvas: graphCanvas
    });
    graphCanvas.start();
  };

  ServiceDependencyGraph.prototype.componentDidUpdate = function () {
    this._updateGraph(this.props.data);
  };

  ServiceDependencyGraph.prototype._updateGraph = function (graph) {
    var cyNodes = this._transformNodes(graph.nodes);

    var cyEdges = this._transformEdges(graph.edges);

    var nodes = this.state.cy.nodes().toArray();

    var updatedNodes = this._updateOrRemove(nodes, cyNodes); // add new nodes


    this.state.cy.add(cyNodes);
    var edges = this.state.cy.edges().toArray();

    this._updateOrRemove(edges, cyEdges); // add new edges


    this.state.cy.add(cyEdges);

    if (this.initResize) {
      this.initResize = false;
      this.state.cy.resize();
      this.state.cy.reset();
      this.runLayout();
    } else {
      if (cyNodes.length > 0) {
        lodash__WEBPACK_IMPORTED_MODULE_5___default.a.each(updatedNodes, function (node) {
          node.lock();
        });

        this.runLayout(true);
      }
    }

    this.state.graphCanvas.repaint(true);
  };

  ServiceDependencyGraph.prototype._transformNodes = function (nodes) {
    var cyNodes = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(nodes, function (node) {
      var result = {
        group: 'nodes',
        data: {
          id: node.data.id,
          type: node.data.type,
          external_type: node.data.external_type,
          metrics: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node.data.metrics)
        }
      };
      return result;
    });

    return cyNodes;
  };

  ServiceDependencyGraph.prototype._transformEdges = function (edges) {
    var cyEdges = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.map(edges, function (edge) {
      var cyEdge = {
        group: 'edges',
        data: {
          id: edge.data.source + ':' + edge.data.target,
          source: edge.data.source,
          target: edge.data.target,
          metrics: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, edge.data.metrics)
        }
      };
      return cyEdge;
    });

    return cyEdges;
  };

  ServiceDependencyGraph.prototype._updateOrRemove = function (dataArray, inputArray) {
    var elements = []; //(NodeSingular | EdgeSingular)[]

    var _loop_1 = function _loop_1(i) {
      var element = dataArray[i];

      var cyNode = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.find(inputArray, {
        data: {
          id: element.id()
        }
      });

      if (cyNode) {
        element.data(cyNode.data);

        lodash__WEBPACK_IMPORTED_MODULE_5___default.a.remove(inputArray, function (n) {
          return n.data.id === cyNode.data.id;
        });

        elements.push(element);
      } else {
        element.remove();
      }
    };

    for (var i = 0; i < dataArray.length; i++) {
      _loop_1(i);
    }

    return elements;
  };

  ServiceDependencyGraph.prototype.onSelectionChange = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var selection;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            selection = this.state.cy.$(':selected');
            if (!(selection.length === 1)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , this.updateStatisticTable()];

          case 1:
            _a.sent();

            this.setState({
              showStatistics: true
            });
            return [3
            /*break*/
            , 3];

          case 2:
            this.setState({
              showStatistics: false
            });
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  ServiceDependencyGraph.prototype.getSettings = function (resolveVariables) {
    return this.state.controller.getSettings(resolveVariables);
  };

  ServiceDependencyGraph.prototype.toggleAnimation = function () {
    var newValue = !this.state.animate;
    var animateButtonClass = 'navbar-button-fa fa fa-play-circle';

    if (newValue) {
      this.state.graphCanvas.startAnimation();
      animateButtonClass = 'navbar-button-fa fa fa-pause-circle';
    } else {
      this.state.graphCanvas.stopAnimation();
    }

    this.setState({
      animate: newValue,
      animateButtonClass: animateButtonClass
    });
  };

  ServiceDependencyGraph.prototype.runLayout = function (unlockNodes) {
    if (unlockNodes === void 0) {
      unlockNodes = false;
    }

    var that = this;

    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _layout_options__WEBPACK_IMPORTED_MODULE_3__["default"]), {
      stop: function stop() {
        if (unlockNodes) {
          that.unlockNodes();
        }

        that.setState({
          zoom: that.state.cy.zoom()
        });
      }
    });

    this.state.cy.layout(options).run();
  };

  ServiceDependencyGraph.prototype.unlockNodes = function () {
    this.state.cy.nodes().forEach(function (node) {
      node.unlock();
    });
  };

  ServiceDependencyGraph.prototype.fit = function () {
    var selection = this.state.graphCanvas.selectionNeighborhood;

    if (selection && !selection.empty()) {
      this.state.cy.fit(selection, 30);
    } else {
      this.state.cy.fit();
    }

    this.setState({
      zoom: this.state.cy.zoom()
    });
  };

  ServiceDependencyGraph.prototype.zoom = function (zoom) {
    var zoomStep = 0.25 * zoom;
    var zoomLevel = Math.max(0.1, this.state.zoom + zoomStep);
    this.setState({
      zoom: zoomLevel
    });
    this.state.cy.zoom(zoomLevel);
    this.state.cy.center();
  };

  ServiceDependencyGraph.prototype.updateStatisticTable = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var selection, currentNode, nodeValues, summaryTable, className, dataSource, dataSourceData;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        switch (_a.label) {
          case 0:
            selection = this.state.cy.$(':selected');
            if (!(selection.length === 1)) return [3
            /*break*/
            , 5];
            this.selectionStatistics = {};
            currentNode = selection[0];
            this.selectionId = currentNode.id().toString();
            nodeValues = this.selectionId.split('||');
            this.selectionId = nodeValues[0];
            summaryTable = [];
            className = currentNode.data('className').toString();
            console.log("current node: ", className);
            if (!(typeof currentNode.data('className') !== 'undefined')) return [3
            /*break*/
            , 1];
            summaryTable.push({
              name: "Class",
              value: className
            });
            return [3
            /*break*/
            , 4];

          case 1:
            return [4
            /*yield*/
            , this.datasourceSrv.get(this.state.settings.datasourceName)];

          case 2:
            dataSource = _a.sent();
            return [4
            /*yield*/
            , dataSource.snowConnection.getTopologyCISummary(this.selectionId)];

          case 3:
            dataSourceData = _a.sent();
            summaryTable.push({
              name: "Class",
              value: dataSourceData.classType
            });
            summaryTable.push({
              name: "Environment",
              value: dataSourceData.environment
            });
            summaryTable.push({
              name: "Support Group",
              value: dataSourceData.support_group
            });
            summaryTable.push({
              name: "In Maintinance",
              value: dataSourceData.maintenance_schedule
            });
            _a.label = 4;

          case 4:
            this.summary = summaryTable;
            console.log("Summary Table", this.summary);
            this.generateDrillDownLink(className);
            _a.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  ServiceDependencyGraph.prototype.generateDrillDownLink = function (className) {
    var drillDownLink = this.getSettings(false).drillDownLink;

    if (drillDownLink !== undefined) {
      var link = drillDownLink.replace('{node}', this.selectionId);
      link = link.replace('{nodeClass}', className);
      this.resolvedDrillDownLink = this.templateSrv.replace(link);
    }
  };

  ServiceDependencyGraph.prototype.render = function () {
    var _this = this;

    if (this.state.cy !== undefined) {
      this._updateGraph(this.props.data);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "graph-container"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "service-dependency-graph"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "canvas-container",
      ref: function ref(_ref) {
        return _this.ref = _ref;
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "zoom-button-container"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn navbar-button width-100",
      onClick: function onClick() {
        return _this.componentDidMount();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "navbar-button-fa fa fa-refresh"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn navbar-button width-100",
      onClick: function onClick() {
        return _this.toggleAnimation();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: this.state.animateButtonClass
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn navbar-button width-100",
      onClick: function onClick() {
        return _this.runLayout();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "navbar-button-fa fa fa-sitemap"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn navbar-button width-100",
      onClick: function onClick() {
        return _this.fit();
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "navbar-button-fa fa fa-dot-circle-o"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn navbar-button width-100",
      onClick: function onClick() {
        return _this.zoom(+1);
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "navbar-button-fa fa fa-plus"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "btn navbar-button width-100",
      onClick: function onClick() {
        return _this.zoom(-1);
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "navbar-button-fa fa fa-minus"
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_statistics_Statistics__WEBPACK_IMPORTED_MODULE_4__["Statistics"], {
      show: this.state.showStatistics,
      selectionId: this.selectionId,
      resolvedDrillDownLink: this.resolvedDrillDownLink,
      selectionStatistics: this.selectionStatistics,
      currentType: this.currentType,
      showBaselines: this.getSettings(true).showBaselines,
      receiving: this.receiving,
      sending: this.sending,
      summary: this.summary
    }));
  };

  return ServiceDependencyGraph;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.css":
/*!*******************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--8-1!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js!./Statistics.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.tsx":
/*!*******************************************************************************!*\
  !*** ./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.tsx ***!
  \*******************************************************************************/
/*! exports provided: Statistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Statistics", function() { return Statistics; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_novatec_service_dependency_graph_panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/novatec-service-dependency-graph-panel.css */ "./datasources/novatec-optimiz-sdg-panel/css/novatec-service-dependency-graph-panel.css");
/* harmony import */ var _css_novatec_service_dependency_graph_panel_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_novatec_service_dependency_graph_panel_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Statistics_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statistics.css */ "./datasources/novatec-optimiz-sdg-panel/panel/statistics/Statistics.css");
/* harmony import */ var _Statistics_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Statistics_css__WEBPACK_IMPORTED_MODULE_2__);
 //import { NodeStatistics } from './NodeStatistics';



var Statistics = function Statistics(_a) {
  var show = _a.show,
      selectionId = _a.selectionId,
      resolvedDrillDownLink = _a.resolvedDrillDownLink,
      selectionStatistics = _a.selectionStatistics,
      currentType = _a.currentType,
      showBaselines = _a.showBaselines,
      receiving = _a.receiving,
      sending = _a.sending,
      summary = _a.summary;
  var statisticsClass = 'statistics';
  var statistics = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

  if (show) {
    statisticsClass = 'statistics show';
    var drilldownLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);

    if (resolvedDrillDownLink && resolvedDrillDownLink.length > 0) {
      drilldownLink = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        href: resolvedDrillDownLink
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-paper-plane-o margin"
      }));
    }

    var summaryTd = summary ? summary.map(function (value) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "table--td--selection table--td"
      }, value.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "table--td--selection table--td"
      }, value.value));
    }) : null;
    statistics = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "statistics"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "header--selection"
    }, selectionId), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "secondHeader--selection"
    }, drilldownLink), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      className: "table--selection"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "table--selection--head"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "table--th table--th--selectionMedium"
    }, "CI Attribute"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "table--th"
    }, "Value")), summaryTd));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: statisticsClass
  }, statistics);
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map