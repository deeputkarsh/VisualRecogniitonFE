/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([73,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export register */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unregister; });
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if ( true && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.'); // Execute callback

            if (config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  })["catch"](function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  })["catch"](function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap);", ""]);
var getUrl = __webpack_require__(61);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(62));
// Module
exports.push([module.i, "html,body{margin:0;padding:0;font-family:\"Montserrat\", sans-serif;font-weight:400;font-size:14px;height:100vh;scroll-behavior:smooth}*{-webkit-box-sizing:border-box;box-sizing:border-box}html,body{margin:0;padding:0;background:#f4f8f9;font-family:\"Montserrat\", sans-serif;font-weight:400;font-size:14px}.index-mainWrapper_ovG9W{margin:12px}.index-notFound_T_K3u{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:250px}.index-buttonContainer_KHo_L{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly}.index-resultContainer_NAHKK{max-width:300px;padding:10px;margin:10px auto}.index-imageContainer_AkyOF{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:15px}.index-headerWrapper_r4c_D{width:100%;padding:20px;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.index-logoContainer_1jl18{background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;width:92px;height:46px;display:block}.index-headerLinkBtn_1PfRQ{text-decoration:none;display:-ms-flexbox;display:flex}.index-landingPageWrapper_3Bv8K{padding:60px}.index-landingPageItem_3jjsK{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:150px;cursor:pointer}@media (max-width: 599px){.index-landingPageItem_3jjsK{min-height:40px}}.index-loginInnerWrapper_2RioW{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.index-loginContent_8cr4Q{width:50%;padding:60px 30px}.index-loginInput_3O8mY{border-radius:4px;border:solid 1px #d3d3d3;background-color:#fbfbfb;margin-bottom:20px !important}.index-errorMsg_1wm65{color:red;font-size:12px;margin:0px 0px 8px 0px}.index-tabButtonsWrapper_3dRlU{width:100%;background-color:#fff}.index-tabButton_37Mqr{width:50%;text-align:center;font-family:\"Montserrat\", sans-serif;font-weight:700;color:#0b66af;font-size:16px;text-transform:capitalize}.index-textCenter_1Sf0b{text-align:center}\n", ""]);
// Exports
exports.locals = {
	"mainWrapper": "index-mainWrapper_ovG9W",
	"notFound": "index-notFound_T_K3u",
	"buttonContainer": "index-buttonContainer_KHo_L",
	"resultContainer": "index-resultContainer_NAHKK",
	"imageContainer": "index-imageContainer_AkyOF",
	"headerWrapper": "index-headerWrapper_r4c_D",
	"logoContainer": "index-logoContainer_1jl18",
	"headerLinkBtn": "index-headerLinkBtn_1PfRQ",
	"landingPageWrapper": "index-landingPageWrapper_3Bv8K",
	"landingPageItem": "index-landingPageItem_3jjsK",
	"loginInnerWrapper": "index-loginInnerWrapper_2RioW",
	"loginContent": "index-loginContent_8cr4Q",
	"loginInput": "index-loginInput_3O8mY",
	"errorMsg": "index-errorMsg_1wm65",
	"tabButtonsWrapper": "index-tabButtonsWrapper_3dRlU",
	"tabButton": "index-tabButton_37Mqr",
	"textCenter": "index-textCenter_1Sf0b"
};

/***/ }),

/***/ 62:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(59);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(63)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(10);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/serviceWorker.js
var serviceWorker = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(14);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/utils/auth.js
var authToken;
var Auth = {
  register: function register(token) {
    authToken = token;
    LocalStorageHelper.register(authToken);
  },
  isLoggedIn: function isLoggedIn() {
    return !!authToken || !!LocalStorageHelper.getToken();
  },
  deregister: function deregister() {
    LocalStorageHelper.deregister();
    authToken = undefined;
  },
  getToken: function getToken() {
    var token = '';
    authToken = authToken || LocalStorageHelper.getToken();

    if (authToken) {
      token = 'Bearer ' + authToken;
    }

    return token;
  }
};

var auth_ref = window || {},
    btoa = auth_ref.btoa,
    atob = auth_ref.atob,
    localStorage = auth_ref.localStorage;

var LocalStorageHelper = {
  register: function register(token) {
    var encodedObj = token ? btoa(token) : '';
    localStorage.setItem('USER', encodedObj);
  },
  deregister: function deregister() {
    localStorage.clear();
  },
  getToken: function getToken() {
    var user = localStorage.getItem('USER') || '';

    if (user) {
      user = user ? atob(user) : '';
    }

    return user;
  }
};
// CONCATENATED MODULE: ./src/utils/index.js

// CONCATENATED MODULE: ./src/interceptor.js

 // const localStorage = window.localStorage

var interceptor_setupInterceptors = function setupInterceptors(store) {
  axios_default.a.interceptors.request.use(function (config) {
    config.headers['content-type'] = 'application/json';

    if (config.headers.setBearerAuth) {
      config.headers.Authorization = Auth.getToken();
      delete config.headers.setBearerAuth;
    } // change any global config on request
    // store.dispatch(showLoader())


    return config;
  }, function (error) {
    // Do something with request error
    // store.dispatch(hideLoader())
    handleError(store, error);
    return Promise.reject(error);
  });
  axios_default.a.interceptors.response.use(function (config) {
    if (config.status === 200) {
      console.log(config); // change something on response success
      // store.dispatch(showLoader())

      return config;
    }
  }, function (error) {
    // store.dispatch(hideLoader())
    handleError(store, error);
    return Promise.reject(error);
  });
};

var handleError = function handleError(store, error) {
  var err = error.response ? error.response.data : error;
  err.timestamp = Date.now();

  if (error && error.response && error.response.status === 406) {}
  /* localStorage.clear()
  window.location.href = '/' */

  /* if (
    (err.statusCode === 500 &&
      err.message === 'INTERNAL SERVER ERROR: jwt expired!!') ||
    err.statusCode === 401
  ) {
    store.dispatch(errorHandler(err))
    store.dispatch(clearAuth())
  } else {
    store.dispatch(errorHandler(err))
  } */

};

/* harmony default export */ var interceptor = ({
  setupInterceptors: interceptor_setupInterceptors
});
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 17 modules
var createMuiTheme = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(87);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(7);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./src/components/Header.js


var Header_Header = function Header(_ref) {
  var login = _ref.login;
  return react_default.a.createElement("header", {
    className: styles_default.a.headerWrapper
  }, react_default.a.createElement("div", {
    className: styles_default.a.logoContainer
  }));
};
// CONCATENATED MODULE: ./src/components/index.js

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(20);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(34);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(21);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js + 12 modules
var Button = __webpack_require__(88);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js + 1 modules
var Paper = __webpack_require__(89);

// CONCATENATED MODULE: ./src/services/index.js
var apiUrl = {
  getToken: "https://iam.cloud.ibm.com/identity/token",
  visualRecog: "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19"
};
var ibmAccessData = {
  apiKey: "cm3HgaDCSOtpgHRBRkor37HkR_3L93XAWLqOfZsuYlBV",
  grantType: "urn:ibm:params:oauth:grant-type:apikey"
};
// CONCATENATED MODULE: ./src/routes/watson.js








/* harmony default export */ var watson = (function () {
  var _useState = Object(react["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = Object(react["useState"])({
    "class": '',
    score: 0
  }),
      _useState4 = slicedToArray_default()(_useState3, 2),
      result = _useState4[0],
      setResult = _useState4[1];

  var fileInput = Object(react["useRef"])(null);

  var onFileInputChange = function onFileInputChange(event) {
    setImageToRender(event.target.files[0]);
  };

  function callApi() {
    return _callApi.apply(this, arguments);
  }

  function _callApi() {
    _callApi = asyncToGenerator_default()(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var auth, config, formData, response, result;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!fileInput || !fileInput.current || !fileInput.current.files)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              auth = window.btoa("apikey:".concat(ibmAccessData.apiKey));
              config = {
                headers: {
                  Authorization: "Basic ".concat(auth),
                  'Content-Type': 'application/x-www-form-urlencoded'
                }
              };
              formData = new FormData(); // eslint-disable-line no-undef

              formData.append('images_file', fileInput.current.files[0]);
              formData.append('classifier_ids', 'DefaultCustomModel_1229742937');
              formData.append('threshold', 0.6);
              _context.next = 10;
              return axios_default.a.post(apiUrl.visualRecog, formData, config);

            case 10:
              response = _context.sent;
              result = response.data.images[0].classifiers[0].classes[0];
              setResult({
                "class": result["class"],
                score: result.score * 100
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _callApi.apply(this, arguments);
  }

  function setImageToRender(fileData) {
    if (fileData) {
      var base64Reader = new FileReader(); // eslint-disable-line no-undef

      base64Reader.onload = function (_) {
        setImage(base64Reader.result);
      };

      base64Reader.readAsDataURL(fileData);
    }
  }

  return react_default.a.createElement("div", {
    className: "watson"
  }, react_default.a.createElement("div", {
    className: styles_default.a.buttonContainer
  }, react_default.a.createElement("input", {
    accept: "image/*",
    ref: fileInput,
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: onFileInputChange
  }), react_default.a.createElement("label", {
    htmlFor: "raised-button-file"
  }, react_default.a.createElement(Button["a" /* default */], {
    color: "primary",
    size: "large",
    variant: "contained",
    component: "span"
  }, " Upload ")), react_default.a.createElement(Button["a" /* default */], {
    color: "primary",
    size: "large",
    variant: "contained",
    onClick: callApi
  }, " Classify ")), result["class"] && result.score && react_default.a.createElement(Paper["a" /* default */], {
    className: styles_default.a.resultContainer
  }, react_default.a.createElement("div", null, react_default.a.createElement("strong", null, "Class : "), result["class"]), react_default.a.createElement("div", null, react_default.a.createElement("strong", null, "Score : "), result.score)), react_default.a.createElement("div", {
    className: styles_default.a.imageContainer
  }, image && react_default.a.createElement("img", {
    src: image,
    alt: "uploaded"
  })));
});
// CONCATENATED MODULE: ./src/routes/index.js




/* harmony default export */ var routes = (function (props) {
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Header_Header, null), react_default.a.createElement("div", {
    className: styles_default.a.mainWrapper
  }, react_default.a.createElement(watson, null)));
});
// CONCATENATED MODULE: ./src/index.js







var theme = Object(createMuiTheme["a" /* default */])({
  palette: {
    primary: {
      main: '#0b66af'
    },
    secondary: {
      main: '#686868'
    }
  }
});
interceptor.setupInterceptors();
var renderDom = react_default.a.createElement(ThemeProvider["a" /* default */], {
  theme: theme
}, react_default.a.createElement(routes, null));
react_dom_default.a.render(renderDom, document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker["a" /* unregister */]();

/***/ })

/******/ });
//# sourceMappingURL=f8e13694ee8028d79266.js.map