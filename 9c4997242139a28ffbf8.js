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
/******/ 	deferredModules.push([100,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(5);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./src/serviceWorker.js
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
    var publicUrl = new URL("https://visual-recognition-fe.herokuapp.com", window.location);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat("https://visual-recognition-fe.herokuapp.com", "/service-worker.js");

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
  fetch(swUrl) // eslint-disable-line no-undef
  .then(function (response) {
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
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(30);
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
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 15 modules
var createMuiTheme = __webpack_require__(57);

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(126);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(7);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(20);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Dehaze.js
var Dehaze = __webpack_require__(53);
var Dehaze_default = /*#__PURE__*/__webpack_require__.n(Dehaze);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Menu/Menu.js + 18 modules
var Menu = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js + 2 modules
var MenuItem = __webpack_require__(128);

// CONCATENATED MODULE: ./src/services/index.js
var visualRecog = {
  apiKey: "cm3HgaDCSOtpgHRBRkor37HkR_3L93XAWLqOfZsuYlBV",
  apiUrl: "https://gateway.watsonplatform.net/visual-recognition/api/v3/classify?version=2018-03-19"
};
var baseUrl = "/";
// CONCATENATED MODULE: ./src/components/Header.js








var Header_Header = function Header(_ref) {
  var login = _ref.login;

  var _React$useState = react_default.a.useState(null),
      _React$useState2 = slicedToArray_default()(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  return react_default.a.createElement("header", {
    className: styles_default.a.headerWrapper
  }, react_default.a.createElement("div", {
    className: styles_default.a.acnlogoContainer
  }), react_default.a.createElement("div", {
    className: styles_default.a.linkContainer
  }, react_default.a.createElement(Dehaze_default.a, {
    onClick: handleClick
  }), react_default.a.createElement(Menu["a" /* default */], {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose
  }, react_default.a.createElement(MenuItem["a" /* default */], {
    onClick: handleClose
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: styles_default.a.link,
    to: "".concat(baseUrl)
  }, "Image Recognition Watson")), react_default.a.createElement(MenuItem["a" /* default */], {
    onClick: handleClose
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    className: styles_default.a.link,
    to: "".concat(baseUrl, "speech")
  }, "Speech To Text")))));
};
// CONCATENATED MODULE: ./src/components/index.js

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(39);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(56);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(125);

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
      var auth, config, formData, response, _result;

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
              auth = window.btoa("apikey:".concat(visualRecog.apiKey));
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
              return axios_default.a.post(visualRecog.apiUrl, formData, config);

            case 10:
              response = _context.sent;

              if (response.data && response.data.images && response.data.images.length) {
                _result = response.data.images[0].classifiers[0].classes[0];
                setResult({
                  "class": _result["class"],
                  score: _result.score * 100
                });
              }

            case 12:
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
  }, react_default.a.createElement(Paper["a" /* default */], {
    className: styles_default.a.imageContainer
  }, react_default.a.createElement("input", {
    accept: "image/*",
    ref: fileInput,
    style: {
      display: 'none'
    },
    id: "raised-button-file",
    type: "file",
    onChange: onFileInputChange
  }), image ? react_default.a.createElement("img", {
    src: image,
    alt: "uploaded"
  }) : react_default.a.createElement("label", {
    className: styles_default.a.uploadContainer,
    htmlFor: "raised-button-file"
  }, react_default.a.createElement("span", null, " Upload Image"))), react_default.a.createElement("div", {
    className: styles_default.a.buttonContainer
  }, react_default.a.createElement(Button["a" /* default */], {
    color: "primary",
    size: "large",
    variant: "contained",
    onClick: callApi
  }, " Classify ")), result["class"] && result.score && react_default.a.createElement(Paper["a" /* default */], {
    className: styles_default.a.resultContainer
  }, react_default.a.createElement("div", null, react_default.a.createElement("strong", null, "Class : "), result["class"]), react_default.a.createElement("div", null, react_default.a.createElement("strong", null, "Score : "), result.score)));
});
// CONCATENATED MODULE: ./src/routes/speechtotext.js




window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
var isSpeechRecognitionSupported = 'SpeechRecognition' in window;
var recognition = isSpeechRecognitionSupported ? new window.SpeechRecognition() : {};
/* harmony default export */ var speechtotext = (function () {
  if (!isSpeechRecognitionSupported) {
    return react_default.a.createElement("div", null, "Speech Recgnition API not supported!");
  }

  var _useState = Object(react["useState"])({
    text: '',
    confidence: 0
  }),
      _useState2 = slicedToArray_default()(_useState, 2),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isListening = _useState4[0],
      setIsListening = _useState4[1];

  recognition.onsoundstart = function (_) {
    return setIsListening(true);
  };

  recognition.onsoundend = function (_) {
    return setIsListening(false);
  };

  recognition.onresult = function (event) {
    var result = event.results[0][0];
    setResult({
      text: result.transcript,
      confidence: result.confidence
    });
  };

  var startStopListening = function startStopListening(_) {
    isListening ? recognition.stop() : recognition.start();
  };

  return react_default.a.createElement("div", null, react_default.a.createElement(Paper["a" /* default */], {
    className: styles_default.a.resultContainer
  }, react_default.a.createElement("div", null, isListening ? 'Listening' : 'Ready to Listen'), result.text ? react_default.a.createElement("div", null, react_default.a.createElement("strong", null, "Text : "), result.text) : null, result.confidence ? react_default.a.createElement("div", null, react_default.a.createElement("strong", null, "Confidence : "), result.confidence) : null), react_default.a.createElement("div", {
    className: styles_default.a.buttonContainer
  }, react_default.a.createElement(Button["a" /* default */], {
    color: "primary",
    size: "large",
    variant: "contained",
    onClick: function onClick(_) {
      return startStopListening();
    }
  }, " Start/Stop ")));
});
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(22);

// CONCATENATED MODULE: ./src/routes/index.js







/* harmony default export */ var routes = (function (props) {
  return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement(Header_Header, null), react_default.a.createElement("div", {
    className: styles_default.a.mainWrapper
  }, react_default.a.createElement(react_router["c" /* Switch */], null, react_default.a.createElement(react_router["a" /* Route */], {
    exact: true,
    path: "".concat(baseUrl)
  }, react_default.a.createElement(watson, null)), react_default.a.createElement(react_router["a" /* Route */], {
    exact: true,
    path: "".concat(baseUrl, "speech")
  }, react_default.a.createElement(speechtotext, null)))));
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

register();

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(83);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(87)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(84)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i&display=swap);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap);", ""]);
var getUrl = __webpack_require__(85);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(86));
// Module
exports.push([module.i, "html,body{margin:0;padding:0;font-family:\"Montserrat\", sans-serif;font-weight:400;font-size:14px;height:100vh;scroll-behavior:smooth}*{-webkit-box-sizing:border-box;box-sizing:border-box}html,body{margin:0;padding:0;background:#f4f8f9;font-family:\"Montserrat\", sans-serif;font-weight:400;font-size:14px}.index-mainWrapper_ovG9W{margin:12px}.index-notFound_T_K3u{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:250px}.index-buttonContainer_KHo_L{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly}.index-linkContainer_3dO0u{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-align:start;align-items:flex-start}.index-linkContainer_3dO0u .index-link_2A7Cv{margin-left:10px}.index-resultContainer_NAHKK{max-width:300px;padding:10px;margin:10px auto}.index-imageContainer_AkyOF{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:15px;height:250px;width:40%;margin:auto;margin-bottom:10px}@media (max-width: 768px){.index-imageContainer_AkyOF{width:100%}}.index-imageContainer_AkyOF .index-uploadContainer_1n3Xt{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;height:100%}@media (max-width: 768px){.index-imageContainer_AkyOF img{width:100%}}.index-headerWrapper_r4c_D{width:100%;padding:20px;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.index-logoContainer_1jl18{background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;width:92px;height:46px;display:block}.index-acnlogoContainer_1338F{background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;width:160px;height:125px;display:block}.index-headerLinkBtn_1PfRQ{text-decoration:none;display:-ms-flexbox;display:flex}.index-landingPageWrapper_3Bv8K{padding:60px}.index-landingPageItem_3jjsK{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:150px;cursor:pointer}@media (max-width: 599px){.index-landingPageItem_3jjsK{min-height:40px}}.index-loginInnerWrapper_2RioW{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.index-loginContent_8cr4Q{width:50%;padding:60px 30px}.index-loginInput_3O8mY{border-radius:4px;border:solid 1px #d3d3d3;background-color:#fbfbfb;margin-bottom:20px !important}.index-errorMsg_1wm65{color:red;font-size:12px;margin:0px 0px 8px 0px}.index-tabButtonsWrapper_3dRlU{width:100%;background-color:#fff}.index-tabButton_37Mqr{width:50%;text-align:center;font-family:\"Montserrat\", sans-serif;font-weight:700;color:#0b66af;font-size:16px;text-transform:capitalize}.index-textCenter_1Sf0b{text-align:center}\n", ""]);
// Exports
exports.locals = {
	"mainWrapper": "index-mainWrapper_ovG9W",
	"notFound": "index-notFound_T_K3u",
	"buttonContainer": "index-buttonContainer_KHo_L",
	"linkContainer": "index-linkContainer_3dO0u",
	"link": "index-link_2A7Cv",
	"resultContainer": "index-resultContainer_NAHKK",
	"imageContainer": "index-imageContainer_AkyOF",
	"uploadContainer": "index-uploadContainer_1n3Xt",
	"headerWrapper": "index-headerWrapper_r4c_D",
	"logoContainer": "index-logoContainer_1jl18",
	"acnlogoContainer": "index-acnlogoContainer_1338F",
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

/***/ 86:
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ })

/******/ });
//# sourceMappingURL=9c4997242139a28ffbf8.js.map