// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/jarallax-element.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

/*!
 * Name    : DEPRECATED Elements Extension for Jarallax. Use laxxx instead https://github.com/alexfoxy/laxxx
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */

/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = [
    /* 0 */
  ,
  /* 1 */

  /***/
  function (module) {
    module.exports = function (callback) {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        // Already ready or interactive, execute callback
        callback.call();
      } else if (document.attachEvent) {
        // Old browsers
        document.attachEvent('onreadystatechange', function () {
          if (document.readyState === 'interactive') callback.call();
        });
      } else if (document.addEventListener) {
        // Modern browsers
        document.addEventListener('DOMContentLoaded', callback);
      }
    };
    /***/

  },
  /* 2 */

  /***/
  function (module, __unused_webpack_exports, __webpack_require__) {
    var win;

    if (typeof window !== "undefined") {
      win = window;
    } else if (typeof __webpack_require__.g !== "undefined") {
      win = __webpack_require__.g;
    } else if (typeof self !== "undefined") {
      win = self;
    } else {
      win = {};
    }

    module.exports = win;
    /***/
  },
  /* 3 */

  /***/
  function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export */


    __webpack_require__.d(__webpack_exports__, {
      /* harmony export */
      "default": function _default() {
        return (
          /* binding */
          jarallaxElement
        );
      }
      /* harmony export */

    });
    /* harmony import */


    var global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
    /* harmony import */


    var global__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_0__);
    /* eslint no-case-declarations: "off" */


    function jarallaxElement() {
      var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : global__WEBPACK_IMPORTED_MODULE_0___default().jarallax;

      if ('undefined' === typeof jarallax) {
        return;
      }

      var Jarallax = jarallax.constructor; // redefine default methods

      ['initImg', 'canInitParallax', 'init', 'destroy', 'clipContainer', 'coverImage', 'isVisible', 'onScroll', 'onResize'].forEach(function (key) {
        var def = Jarallax.prototype[key];

        Jarallax.prototype[key] = function () {
          var self = this;

          if ('initImg' === key && null !== self.$item.getAttribute('data-jarallax-element')) {
            self.options.type = 'element';
            self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if ('element' !== self.options.type) {
            return def.apply(self, args);
          }

          self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';

          switch (key) {
            case 'init':
              var speedArr = self.pureOptions.speed.split(' ');
              self.options.speed = self.pureOptions.speed || 0;
              self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
              self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
              var thresholdArr = self.pureOptions.threshold.split(' ');
              self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
              self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
              def.apply(self, args); // restore background image if available.

              var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');

              if (originalStylesTag) {
                self.$item.setAttribute('style', originalStylesTag);
              }

              return true;

            case 'onResize':
              var defTransform = self.css(self.$item, 'transform');
              self.css(self.$item, {
                transform: ''
              });
              var rect = self.$item.getBoundingClientRect();
              self.itemData = {
                width: rect.width,
                height: rect.height,
                y: rect.top + self.getWindowData().y,
                x: rect.left
              };
              self.css(self.$item, {
                transform: defTransform
              });
              break;

            case 'onScroll':
              var wnd = self.getWindowData();
              var centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
              var moveY = centerPercent * self.options.speedY;
              var moveX = centerPercent * self.options.speedX;
              var my = moveY;
              var mx = moveX;
              if (null !== self.options.thresholdY && moveY > self.options.thresholdY) my = 0;
              if (null !== self.options.thresholdX && moveX > self.options.thresholdX) mx = 0;
              self.css(self.$item, {
                transform: "translate3d(".concat(mx, "px,").concat(my, "px,0)")
              });
              break;

            case 'initImg':
            case 'isVisible':
            case 'clipContainer':
            case 'coverImage':
              return true;
            // no default
          }

          return def.apply(self, args);
        };
      });
    }
    /***/

  }
  /******/
  ];
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/compat get default export */

  /******/


  !function () {
    /******/
    // getDefaultExport function for compatibility with non-harmony modules

    /******/
    __webpack_require__.n = function (module) {
      /******/
      var getter = module && module.__esModule ?
      /******/
      function () {
        return module['default'];
      } :
      /******/
      function () {
        return module;
      };
      /******/

      __webpack_require__.d(getter, {
        a: getter
      });
      /******/


      return getter;
      /******/
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/define property getters */

  /******/

  !function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/global */

  /******/

  !function () {
    /******/
    __webpack_require__.g = function () {
      /******/
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === 'object') return globalThis;
      /******/

      try {
        /******/
        return this || new Function('return this')();
        /******/
      } catch (e) {
        /******/
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') return window;
        /******/
      }
      /******/

    }();
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/

  !function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  }();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/

  !function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  }();
  /******/

  /************************************************************************/

  var __webpack_exports__ = {}; // This entry need to be wrapped in an IIFE because it need to be in strict mode.

  !function () {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var lite_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
    /* harmony import */


    var lite_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lite_ready__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
    /* harmony import */


    var global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(global__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _jarallax_element_esm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

    (0, _jarallax_element_esm__WEBPACK_IMPORTED_MODULE_2__["default"])(); // data-jarallax-element initialization

    lite_ready__WEBPACK_IMPORTED_MODULE_0___default()(function () {
      if ('undefined' !== typeof global__WEBPACK_IMPORTED_MODULE_1___default().jarallax) {
        global__WEBPACK_IMPORTED_MODULE_1___default().jarallax(document.querySelectorAll('[data-jarallax-element]'));
      }
    });
  }();
  /******/
})();
},{}],"../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50250" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/jarallax-element.js"], null)
//# sourceMappingURL=/jarallax-element.63e73735.js.map