module.exports =
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IconNoWeb3(props) {
  return _react2.default.createElement(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 332 417", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
    _react2.default.createElement(
      "defs",
      null,
      _react2.default.createElement("path", { d: "M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z", id: "path-1" })
    ),
    _react2.default.createElement(
      "g",
      { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      _react2.default.createElement(
        "g",
        { id: "Group", transform: "translate(-33.000000, 0.000000)" },
        _react2.default.createElement(
          "g",
          { id: "Ethereum_logo_2014", opacity: "0.208899457", transform: "translate(71.000000, 0.000000)", fillRule: "nonzero" },
          _react2.default.createElement("polygon", { id: "Shape", fill: "#343434", points: "127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 0 0 212.32 127.962 287.959 127.962 154.158" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#3C3C3B", points: "127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#8C8C8C", points: "127.962 416.9052 127.962 312.1852 0 236.5852" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#141414", points: "127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" }),
          _react2.default.createElement("polygon", { id: "Shape", fill: "#393939", points: "0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" })
        ),
        _react2.default.createElement("g", { id: "ic_do_not_disturb", transform: "translate(0.000000, 10.000000)" }),
        _react2.default.createElement("polygon", { id: "Bounds", points: "0 10 397.221369 10 397.221369 407.221369 0 407.221369" }),
        _react2.default.createElement(
          "g",
          { id: "Icon" },
          _react2.default.createElement("use", { fill: "#FFE1DE", fillRule: "evenodd", xlinkHref: "#path-1" }),
          _react2.default.createElement("path", { stroke: "#FFFFFF", strokeWidth: "6", d: "M198.610685,46.1017808 C288.314745,46.1017808 361.119588,118.906624 361.119588,208.610685 C361.119588,298.314745 288.314745,371.119588 198.610685,371.119588 C108.906624,371.119588 36.1017808,298.314745 36.1017808,208.610685 C36.1017808,118.906624 108.906624,46.1017808 198.610685,46.1017808 Z M198.610685,344.017808 C123.798895,344.017808 63.2035615,283.422474 63.2035615,208.610685 C63.2035615,178.077442 73.3736714,149.145233 91.8150049,125.658629 L93.9040007,122.998115 L284.223254,313.317368 L281.56274,315.406364 C258.076136,333.847698 229.143927,344.017808 198.610685,344.017808 Z M303.317368,294.223254 L112.998115,103.904001 L115.658629,101.815005 C139.145233,83.3736714 168.077442,73.2035615 198.610685,73.2035615 C273.422474,73.2035615 334.017808,133.798895 334.017808,208.610685 C334.017808,239.143927 323.847698,268.076136 305.406364,291.56274 L303.317368,294.223254 Z" })
        )
      )
    )
  );
}

module.exports = IconNoWeb3;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "\n.Web3Provider-container {\n  font-family: Helvetica, Arial;\n  color: hsl(0,0%,50%);\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  background: hsl(0, 0%, 95%);\n  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));\n}\n.Web3Provider-wrapper {\n  width: 400px;\n  border: 1px solid hsl(207, 90%, 54%);\n  border-radius: 20px;\n  text-align: center;\n  padding: 50px 40px;\n  margin: 80px auto;\n}\n.Web3Provider-image {\n  max-height: 175px;\n}\n.Web3Provider-title {\n  margin-top: 50px;\n  color: hsl(0,0%,25%);\n}\n.Web3Provider-message {\n  line-height: 27px;\n  font-size: 18px;\n  color: hsl(0,0%,50%);\n}\n\n.web3ConnectButton {\n\t-moz-box-shadow:inset 0px -3px 7px 0px #29bbff;\n\t-webkit-box-shadow:inset 0px -3px 7px 0px #29bbff;\n\tbox-shadow:inset 0px -3px 7px 0px #29bbff;\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #2dabf9), color-stop(1, #0688fa));\n\tbackground:-moz-linear-gradient(top, #2dabf9 5%, #0688fa 100%);\n\tbackground:-webkit-linear-gradient(top, #2dabf9 5%, #0688fa 100%);\n\tbackground:-o-linear-gradient(top, #2dabf9 5%, #0688fa 100%);\n\tbackground:-ms-linear-gradient(top, #2dabf9 5%, #0688fa 100%);\n\tbackground:linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#2dabf9', endColorstr='#0688fa',GradientType=0);\n\tbackground-color:#2dabf9;\n\t-moz-border-radius:3px;\n\t-webkit-border-radius:3px;\n\tborder-radius:3px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#ffffff;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tpadding:9px 23px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #263666;\n}\n.web3ConnectButton:hover {\n\tbackground:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #0688fa), color-stop(1, #2dabf9));\n\tbackground:-moz-linear-gradient(top, #0688fa 5%, #2dabf9 100%);\n\tbackground:-webkit-linear-gradient(top, #0688fa 5%, #2dabf9 100%);\n\tbackground:-o-linear-gradient(top, #0688fa 5%, #2dabf9 100%);\n\tbackground:-ms-linear-gradient(top, #0688fa 5%, #2dabf9 100%);\n\tbackground:linear-gradient(to bottom, #0688fa 5%, #2dabf9 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#0688fa', endColorstr='#2dabf9',GradientType=0);\n\tbackground-color:#0688fa;\n}\n.web3ConnectButton:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var IconNoWeb3 = __webpack_require__(1);
var stylesheet = __webpack_require__(2);

function ErrorTemplate(props) {
  return React.createElement(
    'div',
    { className: 'Web3Provider-container' },
    React.createElement('style', { dangerouslySetInnerHTML: { __html: stylesheet }
    }),
    React.createElement(
      'div',
      { className: 'Web3Provider-wrapper' },
      React.createElement(
        'div',
        { className: 'Web3Provider-image' },
        React.createElement(IconNoWeb3, null)
      ),
      React.createElement('h1', {
        className: 'Web3Provider-title',
        dangerouslySetInnerHTML: { __html: props.title }
      }),
      React.createElement('p', {
        className: 'Web3Provider-message',
        dangerouslySetInnerHTML: { __html: props.message }
      })
    )
  );
}

module.exports = ErrorTemplate;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Web3Provider = __webpack_require__(5);
var ErrorTemplate = __webpack_require__(3);

module.exports.Web3Provider = Web3Provider;
module.exports.ErrorTemplate = ErrorTemplate;

module.exports = {
  Web3Provider: Web3Provider,
  ErrorTemplate: ErrorTemplate
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(0);
var PropTypes = __webpack_require__(6);
var isEmpty = __webpack_require__(7);
var range = __webpack_require__(8);
var AccountUnavailable = __webpack_require__(9);
var Web3Unavailable = __webpack_require__(10);

var ONE_SECOND = 1000;
var ONE_MINUTE = ONE_SECOND * 60;
var propTypes = {
  web3UnavailableScreen: PropTypes.any,
  accountUnavailableScreen: PropTypes.any,
  onChangeAccount: PropTypes.func
};
var defaultProps = {
  passive: false,
  web3UnavailableScreen: Web3Unavailable,
  accountUnavailableScreen: AccountUnavailable
};
var childContextTypes = {
  web3: PropTypes.shape({
    accounts: PropTypes.array,
    selectedAccount: PropTypes.string,
    network: PropTypes.string,
    networkId: PropTypes.string
  })
};

var Web3Provider = function (_React$Component) {
  _inherits(Web3Provider, _React$Component);

  function Web3Provider(props, context) {
    _classCallCheck(this, Web3Provider);

    var _this = _possibleConstructorReturn(this, (Web3Provider.__proto__ || Object.getPrototypeOf(Web3Provider)).call(this, props, context));

    var accounts = _this.getAccounts();

    _this.state = {
      accounts: accounts,
      networkId: null,
      networkError: null
    };
    _this.interval = null;
    _this.networkInterval = null;
    _this.fetchAccounts = _this.fetchAccounts.bind(_this);
    _this.fetchNetwork = _this.fetchNetwork.bind(_this);

    if (accounts) {
      _this.handleAccounts(accounts, true);
    }
    return _this;
  }

  _createClass(Web3Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        web3: {
          accounts: this.state.accounts,
          selectedAccount: this.state.accounts && this.state.accounts[0],
          network: getNetwork(this.state.networkId),
          networkId: this.state.networkId
        }
      };
    }

    /**
     * Start polling accounts, & network. We poll indefinitely so that we can
     * react to the user changing accounts or netowrks.
     */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchNetwork();
      this.initPoll();
      this.initNetworkPoll();
    }

    /**
     * Init web3/account polling, and prevent duplicate interval.
     * @return {void}
     */

  }, {
    key: 'initPoll',
    value: function initPoll() {
      if (!this.interval) {
        this.interval = setInterval(this.fetchAccounts, ONE_SECOND);
      }
    }

    /**
     * Init network polling, and prevent duplicate intervals.
     * @return {void}
     */

  }, {
    key: 'initNetworkPoll',
    value: function initNetworkPoll() {
      if (!this.networkInterval) {
        this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE);
      }
    }

    /**
     * Request login from users for EIP 1102 privacy support
     * @return {void}
     */

  }, {
    key: 'requestLogin',
    value: function requestLogin() {
      var _this2 = this;

      var _window = window,
          ethereum = _window.ethereum;

      var ethAccounts = this.getAccounts();

      if (isEmpty(ethAccounts)) {
        ethereum && ethereum.enable().then(function (accounts) {
          return _this2.handleAccounts(accounts);
        }).catch(function (err) {
          _this2.setState({
            accountsError: err
          });
        });
      } else {
        this.handleAccounts(ethAccounts);
      }
    }

    /**
     * Update state regarding the availability of web3 and an ETH account.
     * @return {void}
     */

  }, {
    key: 'fetchAccounts',
    value: function fetchAccounts() {
      var _this3 = this;

      var _window2 = window,
          ethereum = _window2.ethereum;

      var ethAccounts = this.getAccounts();

      if (isEmpty(ethAccounts)) {
        ethereum && ethereum.enable().then(function (accounts) {
          return _this3.handleAccounts(accounts);
        }).catch(function (err) {
          _this3.setState({
            accountsError: err
          });
        });
      } else {
        this.handleAccounts(ethAccounts);
      }
    }
  }, {
    key: 'handleAccounts',
    value: function handleAccounts(accounts) {
      var isConstructor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onChangeAccount = this.props.onChangeAccount;
      var store = this.context.store;

      var next = accounts[0];
      var curr = this.state.accounts[0];
      next = next && next.toLowerCase();
      curr = curr && curr.toLowerCase();
      var didChange = curr && next && curr !== next;

      if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
        this.setState({
          accountsError: null,
          accounts: accounts
        });
      }

      if (didChange && !isConstructor) {
        this.setState({
          accountsError: null,
          accounts: accounts
        });
      }

      // If provided, execute callback
      if (didChange && typeof onChangeAccount === 'function') {
        onChangeAccount(next);
      }

      // If available, dispatch redux action
      if (store && typeof store.dispatch === 'function') {
        var didLogin = !curr && next;
        var didLogout = curr && !next;

        if (didLogout) {
          store.dispatch({
            type: 'web3/LOGOUT',
            address: null
          });
        } else if (didLogin || isConstructor && next) {
          store.dispatch({
            type: 'web3/RECEIVE_ACCOUNT',
            address: next
          });
        } else if (didChange) {
          store.dispatch({
            type: 'web3/CHANGE_ACCOUNT',
            address: next
          });
        }
      }
    }

    /**
     * Get the network and update state accordingly.
     * @return {void}
     */

  }, {
    key: 'fetchNetwork',
    value: function fetchNetwork() {
      var _this4 = this;

      var _window3 = window,
          ethereum = _window3.ethereum;


      if (ethereum) {
        ethereum.request({ method: 'eth_chainId' }).then(function (networkId) {
          if (networkId != _this4.state.networkId) {
            _this4.setState({
              networkError: null,
              networkId: netId
            });
          }
        }).catch(function (error) {
          _this4.setState({
            networkError: err
          });
        });
      }
    }

    /**
     * Get the account. We wrap in try/catch because reading `web3.eth.accounts`
     * will throw if no account is selected.
     * @return {String}
     */

  }, {
    key: 'getAccounts',
    value: function getAccounts() {
      var ethereum = window.ethereum;
      ethereum.request({ method: 'eth_accounts' }).then(function (accounts) {
        return accounts;
      }).catch(function (error) {
        return [];
      });
      this.handleAccountsChanged(accounts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _window4 = window,
          web3 = _window4.web3;
      var _props = this.props,
          passive = _props.passive,
          Web3UnavailableComponent = _props.web3UnavailableScreen,
          AccountUnavailableComponent = _props.accountUnavailableScreen;


      if (passive) {
        return this.props.children;
      }

      if (!web3) {
        return React.createElement(Web3UnavailableComponent, null);
      }

      if (isEmpty(this.state.accounts)) {
        return React.createElement(AccountUnavailableComponent, {
          requestLogin: this.requestLogin.bind(this)
        });
      }

      return this.props.children;
    }
  }]);

  return Web3Provider;
}(React.Component);

Web3Provider.contextTypes = {
  store: PropTypes.object
};


Web3Provider.propTypes = propTypes;
Web3Provider.defaultProps = defaultProps;
Web3Provider.childContextTypes = childContextTypes;

module.exports = Web3Provider;

/* =============================================================================
=    Deps
============================================================================= */
function getNetwork(networkId) {
  switch (networkId) {
    case '1':
      return 'MAINNET';
    case '2':
      return 'MORDEN';
    case '3':
      return 'ROPSTEN';
    case '4':
      return 'RINKEBY';
    case '42':
      return 'KOVAN';
    default:
      return 'UNKNOWN';
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEmpty");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/range");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var IconNoWeb3 = __webpack_require__(1);
var stylesheet = __webpack_require__(2);

var requestLogin = void 0;
function LoginView(props) {
  requestLogin = props.requestLogin.bind(this);
  return React.createElement(
    'div',
    { className: 'Web3Provider-container' },
    React.createElement('style', { dangerouslySetInnerHTML: { __html: stylesheet }
    }),
    React.createElement(
      'div',
      { className: 'Web3Provider-wrapper' },
      React.createElement(
        'div',
        { className: 'Web3Provider-image' },
        React.createElement(IconNoWeb3, null)
      ),
      React.createElement('h1', {
        className: 'Web3Provider-title',
        dangerouslySetInnerHTML: { __html: 'No ETH Account Available' }
      }),
      React.createElement('p', {
        className: 'Web3Provider-message',
        dangerouslySetInnerHTML: { __html: 'You are not yet logged in.' }
      }),
      React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { className: 'web3ConnectButton', onClick: requestLogin },
          'Connect'
        )
      )
    )
  );
}

module.exports = LoginView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ErrorTemplate = __webpack_require__(3);

var Web3Unavailable = ErrorTemplate.bind(null, {
  title: 'Web3 Not Found',
  message: '\nIt seems that you are using a browser without Web3 capabilities. Please\nmake sure that you are using a web3-capable browser like mist or parity.\nIf you are using MetaMask or Parity extension, make sure that it is\nenabled.\n'
});

module.exports = Web3Unavailable;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2VjY2Y3NmIzNDllZmY5MjMzYWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvSWNvbk5vV2ViMy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yVGVtcGxhdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1Byb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvcmFuZ2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9XZWIzVW5hdmFpbGFibGUuanN4Il0sIm5hbWVzIjpbIkljb25Ob1dlYjMiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZWFjdCIsInJlcXVpcmUiLCJzdHlsZXNoZWV0IiwiRXJyb3JUZW1wbGF0ZSIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIldlYjNQcm92aWRlciIsIlByb3BUeXBlcyIsImlzRW1wdHkiLCJyYW5nZSIsIkFjY291bnRVbmF2YWlsYWJsZSIsIldlYjNVbmF2YWlsYWJsZSIsIk9ORV9TRUNPTkQiLCJPTkVfTUlOVVRFIiwicHJvcFR5cGVzIiwid2ViM1VuYXZhaWxhYmxlU2NyZWVuIiwiYW55IiwiYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuIiwib25DaGFuZ2VBY2NvdW50IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiLCJjaGlsZENvbnRleHRUeXBlcyIsIndlYjMiLCJzaGFwZSIsImFjY291bnRzIiwiYXJyYXkiLCJzZWxlY3RlZEFjY291bnQiLCJzdHJpbmciLCJuZXR3b3JrIiwibmV0d29ya0lkIiwiY29udGV4dCIsImdldEFjY291bnRzIiwic3RhdGUiLCJuZXR3b3JrRXJyb3IiLCJpbnRlcnZhbCIsIm5ldHdvcmtJbnRlcnZhbCIsImZldGNoQWNjb3VudHMiLCJiaW5kIiwiZmV0Y2hOZXR3b3JrIiwiaGFuZGxlQWNjb3VudHMiLCJnZXROZXR3b3JrIiwiaW5pdFBvbGwiLCJpbml0TmV0d29ya1BvbGwiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsImV0aGVyZXVtIiwiZXRoQWNjb3VudHMiLCJlbmFibGUiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJzZXRTdGF0ZSIsImFjY291bnRzRXJyb3IiLCJpc0NvbnN0cnVjdG9yIiwic3RvcmUiLCJuZXh0IiwiY3VyciIsInRvTG93ZXJDYXNlIiwiZGlkQ2hhbmdlIiwiZGlzcGF0Y2giLCJkaWRMb2dpbiIsImRpZExvZ291dCIsInR5cGUiLCJhZGRyZXNzIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ldElkIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiV2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50IiwiQWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJyZXF1ZXN0TG9naW4iLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJvYmplY3QiLCJMb2dpblZpZXciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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O0FBRUEsSUFBSXdFLHFCQUFKO0FBQ0EsU0FBU0ksU0FBVCxDQUFtQmhGLEtBQW5CLEVBQTBCO0FBQ3hCNEUsaUJBQWU1RSxNQUFNNEUsWUFBTixDQUFtQmxDLElBQW5CLENBQXdCLElBQXhCLENBQWY7QUFDQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRSxtQ0FBTyx5QkFBeUIsRUFBRW5DLFFBQVFGLFVBQVY7QUFBaEMsTUFERjtBQUdFO0FBQUE7QUFBQSxRQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0UsNEJBQUMsVUFBRDtBQURGLE9BREY7QUFJRTtBQUNFLG1CQUFVLG9CQURaO0FBRUUsaUNBQXlCLEVBQUVFLFFBQVEsMEJBQVY7QUFGM0IsUUFKRjtBQVFFO0FBQ0UsbUJBQVUsc0JBRFo7QUFFRSxpQ0FBeUIsRUFBRUEsUUFBUSw0QkFBVjtBQUYzQixRQVJGO0FBWUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxtQkFBbEIsRUFBc0MsU0FBU3FFLFlBQS9DO0FBQUE7QUFBQTtBQURGO0FBWkY7QUFIRixHQURGO0FBd0JEOztBQUVEM0UsT0FBT0MsT0FBUCxHQUFpQjhFLFNBQWpCLEM7Ozs7Ozs7OztBQ2pDQSxJQUFNN0UsUUFBUUMsbUJBQU9BLENBQUMsQ0FBUixDQUFkO0FBQ0EsSUFBTUUsZ0JBQWdCRixtQkFBT0EsQ0FBQyxDQUFSLENBQXRCOztBQUVBLElBQU1XLGtCQUFrQlQsY0FBY29DLElBQWQsQ0FBbUIsSUFBbkIsRUFBeUI7QUFDL0NsQyxTQUFPLGdCQUR3QztBQUUvQ0M7QUFGK0MsQ0FBekIsQ0FBeEI7O0FBVUFSLE9BQU9DLE9BQVAsR0FBaUJhLGVBQWpCLEMiLCJmaWxlIjoiLi9kaXN0L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgN2VjY2Y3NmIzNDllZmY5MjMzYWYiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gSWNvbk5vV2ViMyhwcm9wcykge1xuICByZXR1cm4gKFxuXG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCAzMzIgNDE3XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDxkZWZzPlxuICAgICAgPHBhdGggZD1cIk0xOTguNjEwNjg1LDQzLjEwMTc4MDggQzEwNy4yNDk3Nyw0My4xMDE3ODA4IDMzLjEwMTc4MDgsMTE3LjI0OTc3IDMzLjEwMTc4MDgsMjA4LjYxMDY4NSBDMzMuMTAxNzgwOCwyOTkuOTcxNTk5IDEwNy4yNDk3NywzNzQuMTE5NTg4IDE5OC42MTA2ODUsMzc0LjExOTU4OCBDMjg5Ljk3MTU5OSwzNzQuMTE5NTg4IDM2NC4xMTk1ODgsMjk5Ljk3MTU5OSAzNjQuMTE5NTg4LDIwOC42MTA2ODUgQzM2NC4xMTk1ODgsMTE3LjI0OTc3IDI4OS45NzE1OTksNDMuMTAxNzgwOCAxOTguNjEwNjg1LDQzLjEwMTc4MDggTDE5OC42MTA2ODUsNDMuMTAxNzgwOCBaIE0xOTguNjEwNjg1LDM0MS4wMTc4MDggQzEyNS40NTU3NDksMzQxLjAxNzgwOCA2Ni4yMDM1NjE1LDI4MS43NjU2MiA2Ni4yMDM1NjE1LDIwOC42MTA2ODUgQzY2LjIwMzU2MTUsMTc3Ljk5MTUzNyA3Ni42MzA2MjI1LDE0OS44NTUwMjQgOTQuMTc0NTY2MywxMjcuNTExMzIyIEwyNzkuNzEwMDQ3LDMxMy4wNDY4MDMgQzI1Ny4zNjYzNDUsMzMwLjU5MDc0NyAyMjkuMjI5ODMyLDM0MS4wMTc4MDggMTk4LjYxMDY4NSwzNDEuMDE3ODA4IEwxOTguNjEwNjg1LDM0MS4wMTc4MDggWiBNMzAzLjA0NjgwMywyODkuNzEwMDQ3IEwxMTcuNTExMzIyLDEwNC4xNzQ1NjYgQzEzOS44NTUwMjQsODYuNjMwNjIyNSAxNjcuOTkxNTM3LDc2LjIwMzU2MTUgMTk4LjYxMDY4NSw3Ni4yMDM1NjE1IEMyNzEuNzY1NjIsNzYuMjAzNTYxNSAzMzEuMDE3ODA4LDEzNS40NTU3NDkgMzMxLjAxNzgwOCwyMDguNjEwNjg1IEMzMzEuMDE3ODA4LDIzOS4yMjk4MzIgMzIwLjU5MDc0NywyNjcuMzY2MzQ1IDMwMy4wNDY4MDMsMjg5LjcxMDA0NyBMMzAzLjA0NjgwMywyODkuNzEwMDQ3IFpcIiBpZD1cInBhdGgtMVwiPjwvcGF0aD5cbiAgICA8L2RlZnM+XG4gICAgPGcgaWQ9XCJQYWdlLTFcIiBzdHJva2U9XCJub25lXCIgc3Ryb2tlV2lkdGg9XCIxXCIgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cbiAgICAgIDxnIGlkPVwiR3JvdXBcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTMzLjAwMDAwMCwgMC4wMDAwMDApXCI+XG4gICAgICAgIDxnIGlkPVwiRXRoZXJldW1fbG9nb18yMDE0XCIgb3BhY2l0eT1cIjAuMjA4ODk5NDU3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcxLjAwMDAwMCwgMC4wMDAwMDApXCIgZmlsbFJ1bGU9XCJub256ZXJvXCI+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMzQzNDM0XCIgcG9pbnRzPVwiMTI3Ljk2MTEgMCAxMjUuMTY2MSA5LjUgMTI1LjE2NjEgMjg1LjE2OCAxMjcuOTYxMSAyODcuOTU4IDI1NS45MjMxIDIxMi4zMlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiM4QzhDOENcIiBwb2ludHM9XCIxMjcuOTYyIDAgMCAyMTIuMzIgMTI3Ljk2MiAyODcuOTU5IDEyNy45NjIgMTU0LjE1OFwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzQzNDM0JcIiBwb2ludHM9XCIxMjcuOTYxMSAzMTIuMTg2NiAxMjYuMzg2MSAzMTQuMTA2NiAxMjYuMzg2MSA0MTIuMzA1NiAxMjcuOTYxMSA0MTYuOTA2NiAyNTUuOTk5MSAyMzYuNTg2NlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiM4QzhDOENcIiBwb2ludHM9XCIxMjcuOTYyIDQxNi45MDUyIDEyNy45NjIgMzEyLjE4NTIgMCAyMzYuNTg1MlwiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMxNDE0MTRcIiBwb2ludHM9XCIxMjcuOTYxMSAyODcuOTU3NyAyNTUuOTIxMSAyMTIuMzIwNyAxMjcuOTYxMSAxNTQuMTU4N1wiPjwvcG9seWdvbj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzOTM5MzlcIiBwb2ludHM9XCIwLjAwMDkgMjEyLjMyMDggMTI3Ljk2MDkgMjg3Ljk1NzggMTI3Ljk2MDkgMTU0LjE1ODhcIj48L3BvbHlnb24+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgaWQ9XCJpY19kb19ub3RfZGlzdHVyYlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCwgMTAuMDAwMDAwKVwiPjwvZz5cbiAgICAgICAgPHBvbHlnb24gaWQ9XCJCb3VuZHNcIiBwb2ludHM9XCIwIDEwIDM5Ny4yMjEzNjkgMTAgMzk3LjIyMTM2OSA0MDcuMjIxMzY5IDAgNDA3LjIyMTM2OVwiPjwvcG9seWdvbj5cbiAgICAgICAgPGcgaWQ9XCJJY29uXCI+XG4gICAgICAgICAgPHVzZSBmaWxsPVwiI0ZGRTFERVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiIHhsaW5rSHJlZj1cIiNwYXRoLTFcIj48L3VzZT5cbiAgICAgICAgICA8cGF0aCBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlV2lkdGg9XCI2XCIgZD1cIk0xOTguNjEwNjg1LDQ2LjEwMTc4MDggQzI4OC4zMTQ3NDUsNDYuMTAxNzgwOCAzNjEuMTE5NTg4LDExOC45MDY2MjQgMzYxLjExOTU4OCwyMDguNjEwNjg1IEMzNjEuMTE5NTg4LDI5OC4zMTQ3NDUgMjg4LjMxNDc0NSwzNzEuMTE5NTg4IDE5OC42MTA2ODUsMzcxLjExOTU4OCBDMTA4LjkwNjYyNCwzNzEuMTE5NTg4IDM2LjEwMTc4MDgsMjk4LjMxNDc0NSAzNi4xMDE3ODA4LDIwOC42MTA2ODUgQzM2LjEwMTc4MDgsMTE4LjkwNjYyNCAxMDguOTA2NjI0LDQ2LjEwMTc4MDggMTk4LjYxMDY4NSw0Ni4xMDE3ODA4IFogTTE5OC42MTA2ODUsMzQ0LjAxNzgwOCBDMTIzLjc5ODg5NSwzNDQuMDE3ODA4IDYzLjIwMzU2MTUsMjgzLjQyMjQ3NCA2My4yMDM1NjE1LDIwOC42MTA2ODUgQzYzLjIwMzU2MTUsMTc4LjA3NzQ0MiA3My4zNzM2NzE0LDE0OS4xNDUyMzMgOTEuODE1MDA0OSwxMjUuNjU4NjI5IEw5My45MDQwMDA3LDEyMi45OTgxMTUgTDI4NC4yMjMyNTQsMzEzLjMxNzM2OCBMMjgxLjU2Mjc0LDMxNS40MDYzNjQgQzI1OC4wNzYxMzYsMzMzLjg0NzY5OCAyMjkuMTQzOTI3LDM0NC4wMTc4MDggMTk4LjYxMDY4NSwzNDQuMDE3ODA4IFogTTMwMy4zMTczNjgsMjk0LjIyMzI1NCBMMTEyLjk5ODExNSwxMDMuOTA0MDAxIEwxMTUuNjU4NjI5LDEwMS44MTUwMDUgQzEzOS4xNDUyMzMsODMuMzczNjcxNCAxNjguMDc3NDQyLDczLjIwMzU2MTUgMTk4LjYxMDY4NSw3My4yMDM1NjE1IEMyNzMuNDIyNDc0LDczLjIwMzU2MTUgMzM0LjAxNzgwOCwxMzMuNzk4ODk1IDMzNC4wMTc4MDgsMjA4LjYxMDY4NSBDMzM0LjAxNzgwOCwyMzkuMTQzOTI3IDMyMy44NDc2OTgsMjY4LjA3NjEzNiAzMDUuNDA2MzY0LDI5MS41NjI3NCBMMzAzLjMxNzM2OCwyOTQuMjIzMjU0IFpcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEljb25Ob1dlYjM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSWNvbk5vV2ViMy5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IGBcbi5XZWIzUHJvdmlkZXItY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWw7XG4gIGNvbG9yOiBoc2woMCwwJSw1MCUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA5NSUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG59XG4uV2ViM1Byb3ZpZGVyLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMDcsIDkwJSwgNTQlKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1MHB4IDQwcHg7XG4gIG1hcmdpbjogODBweCBhdXRvO1xufVxuLldlYjNQcm92aWRlci1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDE3NXB4O1xufVxuLldlYjNQcm92aWRlci10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGNvbG9yOiBoc2woMCwwJSwyNSUpO1xufVxuLldlYjNQcm92aWRlci1tZXNzYWdlIHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGhzbCgwLDAlLDUwJSk7XG59XG5cbi53ZWIzQ29ubmVjdEJ1dHRvbiB7XG5cdC1tb3otYm94LXNoYWRvdzppbnNldCAwcHggLTNweCA3cHggMHB4ICMyOWJiZmY7XG5cdC13ZWJraXQtYm94LXNoYWRvdzppbnNldCAwcHggLTNweCA3cHggMHB4ICMyOWJiZmY7XG5cdGJveC1zaGFkb3c6aW5zZXQgMHB4IC0zcHggN3B4IDBweCAjMjliYmZmO1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wNSwgIzJkYWJmOSksIGNvbG9yLXN0b3AoMSwgIzA2ODhmYSkpO1xuXHRiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzJkYWJmOSA1JSwgIzA2ODhmYSAxMDAlKTtcblx0YmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyZGFiZjkgNSUsICMwNjg4ZmEgMTAwJSk7XG5cdGJhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzJkYWJmOSA1JSwgIzA2ODhmYSAxMDAlKTtcblx0YmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzJkYWJmOSA1JSwgIzA2ODhmYSAxMDAlKTtcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmRhYmY5IDUlLCAjMDY4OGZhIDEwMCUpO1xuXHRmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMyZGFiZjknLCBlbmRDb2xvcnN0cj0nIzA2ODhmYScsR3JhZGllbnRUeXBlPTApO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMyZGFiZjk7XG5cdC1tb3otYm9yZGVyLXJhZGl1czozcHg7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czozcHg7XG5cdGJvcmRlci1yYWRpdXM6M3B4O1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0Y3Vyc29yOnBvaW50ZXI7XG5cdGNvbG9yOiNmZmZmZmY7XG5cdGZvbnQtZmFtaWx5OkFyaWFsO1xuXHRmb250LXNpemU6MTVweDtcblx0cGFkZGluZzo5cHggMjNweDtcblx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XG5cdHRleHQtc2hhZG93OjBweCAxcHggMHB4ICMyNjM2NjY7XG59XG4ud2ViM0Nvbm5lY3RCdXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wNSwgIzA2ODhmYSksIGNvbG9yLXN0b3AoMSwgIzJkYWJmOSkpO1xuXHRiYWNrZ3JvdW5kOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIzA2ODhmYSA1JSwgIzJkYWJmOSAxMDAlKTtcblx0YmFja2dyb3VuZDotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMwNjg4ZmEgNSUsICMyZGFiZjkgMTAwJSk7XG5cdGJhY2tncm91bmQ6LW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIzA2ODhmYSA1JSwgIzJkYWJmOSAxMDAlKTtcblx0YmFja2dyb3VuZDotbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgIzA2ODhmYSA1JSwgIzJkYWJmOSAxMDAlKTtcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDY4OGZhIDUlLCAjMmRhYmY5IDEwMCUpO1xuXHRmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyMwNjg4ZmEnLCBlbmRDb2xvcnN0cj0nIzJkYWJmOScsR3JhZGllbnRUeXBlPTApO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMwNjg4ZmE7XG59XG4ud2ViM0Nvbm5lY3RCdXR0b246YWN0aXZlIHtcblx0cG9zaXRpb246cmVsYXRpdmU7XG5cdHRvcDoxcHg7XG59XG5cbmA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzaGVldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEljb25Ob1dlYjMgPSByZXF1aXJlKCcuL0ljb25Ob1dlYjMnKTtcbmNvbnN0IHN0eWxlc2hlZXQgPSByZXF1aXJlKCcuL3N0eWxlc2hlZXQnKTtcblxuZnVuY3Rpb24gRXJyb3JUZW1wbGF0ZShwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3R5bGVzaGVldCB9fVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItaW1hZ2VcIj5cbiAgICAgICAgICA8SWNvbk5vV2ViMyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxXG4gICAgICAgICAgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLXRpdGxlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLnRpdGxlIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLW1lc3NhZ2VcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMubWVzc2FnZSB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvclRlbXBsYXRlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0Vycm9yVGVtcGxhdGUuanN4IiwiY29uc3QgV2ViM1Byb3ZpZGVyID0gcmVxdWlyZSgnLi9XZWIzUHJvdmlkZXInKTtcbmNvbnN0IEVycm9yVGVtcGxhdGUgPSByZXF1aXJlKCcuL0Vycm9yVGVtcGxhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMuV2ViM1Byb3ZpZGVyID0gV2ViM1Byb3ZpZGVyO1xubW9kdWxlLmV4cG9ydHMuRXJyb3JUZW1wbGF0ZSA9IEVycm9yVGVtcGxhdGU7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBXZWIzUHJvdmlkZXIsXG4gIEVycm9yVGVtcGxhdGVcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5jb25zdCBpc0VtcHR5ID0gcmVxdWlyZSgnbG9kYXNoL2lzRW1wdHknKTtcbmNvbnN0IHJhbmdlID0gcmVxdWlyZSgnbG9kYXNoL3JhbmdlJyk7XG5jb25zdCBBY2NvdW50VW5hdmFpbGFibGUgPSByZXF1aXJlKCcuL0xvZ2luJyk7XG5jb25zdCBXZWIzVW5hdmFpbGFibGUgPSByZXF1aXJlKCcuL1dlYjNVbmF2YWlsYWJsZScpO1xuXG5jb25zdCBPTkVfU0VDT05EID0gMTAwMDtcbmNvbnN0IE9ORV9NSU5VVEUgPSBPTkVfU0VDT05EICogNjA7XG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogUHJvcFR5cGVzLmFueSxcbiAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBQcm9wVHlwZXMuYW55LFxuICBvbkNoYW5nZUFjY291bnQ6IFByb3BUeXBlcy5mdW5jXG59O1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICBwYXNzaXZlOiBmYWxzZSxcbiAgd2ViM1VuYXZhaWxhYmxlU2NyZWVuOiBXZWIzVW5hdmFpbGFibGUsXG4gIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogQWNjb3VudFVuYXZhaWxhYmxlLFxufTtcbmNvbnN0IGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB3ZWIzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjY291bnRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWRBY2NvdW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5ldHdvcms6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV0d29ya0lkOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pXG59O1xuXG5jbGFzcyBXZWIzUHJvdmlkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBjb25zdCBhY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY2NvdW50cyxcbiAgICAgIG5ldHdvcmtJZDogbnVsbCxcbiAgICAgIG5ldHdvcmtFcnJvcjogbnVsbFxuICAgIH07XG4gICAgdGhpcy5pbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5uZXR3b3JrSW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMuZmV0Y2hBY2NvdW50cyA9IHRoaXMuZmV0Y2hBY2NvdW50cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZmV0Y2hOZXR3b3JrID0gdGhpcy5mZXRjaE5ldHdvcmsuYmluZCh0aGlzKTtcblxuICAgIGlmIChhY2NvdW50cykge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhhY2NvdW50cywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3ZWIzOiB7XG4gICAgICAgIGFjY291bnRzOiB0aGlzLnN0YXRlLmFjY291bnRzLFxuICAgICAgICBzZWxlY3RlZEFjY291bnQ6IHRoaXMuc3RhdGUuYWNjb3VudHMgJiYgdGhpcy5zdGF0ZS5hY2NvdW50c1swXSxcbiAgICAgICAgbmV0d29yazogZ2V0TmV0d29yayh0aGlzLnN0YXRlLm5ldHdvcmtJZCksXG4gICAgICAgIG5ldHdvcmtJZDogdGhpcy5zdGF0ZS5uZXR3b3JrSWRcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0IHBvbGxpbmcgYWNjb3VudHMsICYgbmV0d29yay4gV2UgcG9sbCBpbmRlZmluaXRlbHkgc28gdGhhdCB3ZSBjYW5cbiAgICogcmVhY3QgdG8gdGhlIHVzZXIgY2hhbmdpbmcgYWNjb3VudHMgb3IgbmV0b3dya3MuXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZldGNoTmV0d29yaygpO1xuICAgIHRoaXMuaW5pdFBvbGwoKTtcbiAgICB0aGlzLmluaXROZXR3b3JrUG9sbCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgd2ViMy9hY2NvdW50IHBvbGxpbmcsIGFuZCBwcmV2ZW50IGR1cGxpY2F0ZSBpbnRlcnZhbC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGluaXRQb2xsKCkge1xuICAgIGlmICghdGhpcy5pbnRlcnZhbCkge1xuICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hBY2NvdW50cywgT05FX1NFQ09ORCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXQgbmV0d29yayBwb2xsaW5nLCBhbmQgcHJldmVudCBkdXBsaWNhdGUgaW50ZXJ2YWxzLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdE5ldHdvcmtQb2xsKCkge1xuICAgIGlmICghdGhpcy5uZXR3b3JrSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMubmV0d29ya0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaE5ldHdvcmssIE9ORV9NSU5VVEUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IGxvZ2luIGZyb20gdXNlcnMgZm9yIEVJUCAxMTAyIHByaXZhY3kgc3VwcG9ydFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVxdWVzdExvZ2luKCkge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICBjb25zdCBldGhBY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIGlmIChpc0VtcHR5KGV0aEFjY291bnRzKSkge1xuICAgICAgZXRoZXJldW0gJiYgZXRoZXJldW0uZW5hYmxlKClcbiAgICAgIC50aGVuKGFjY291bnRzID0+IHRoaXMuaGFuZGxlQWNjb3VudHMoYWNjb3VudHMpKVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWNjb3VudHNFcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoZXRoQWNjb3VudHMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgc3RhdGUgcmVnYXJkaW5nIHRoZSBhdmFpbGFiaWxpdHkgb2Ygd2ViMyBhbmQgYW4gRVRIIGFjY291bnQuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBmZXRjaEFjY291bnRzKCkge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcbiAgICBjb25zdCBldGhBY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIGlmIChpc0VtcHR5KGV0aEFjY291bnRzKSkge1xuICAgICAgZXRoZXJldW0gJiYgZXRoZXJldW0uZW5hYmxlKClcbiAgICAgICAgLnRoZW4oYWNjb3VudHMgPT4gdGhpcy5oYW5kbGVBY2NvdW50cyhhY2NvdW50cykpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY2NvdW50c0Vycm9yOiBlcnJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoZXRoQWNjb3VudHMpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFjY291bnRzKGFjY291bnRzLCBpc0NvbnN0cnVjdG9yID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlQWNjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgbGV0IG5leHQgPSBhY2NvdW50c1swXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuc3RhdGUuYWNjb3VudHNbMF07XG4gICAgbmV4dCA9IG5leHQgJiYgbmV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIGN1cnIgPSBjdXJyICYmIGN1cnIudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBkaWRDaGFuZ2UgPSBjdXJyICYmIG5leHQgJiYgKGN1cnIgIT09IG5leHQpO1xuXG4gICAgaWYgKGlzRW1wdHkodGhpcy5zdGF0ZS5hY2NvdW50cykgJiYgIWlzRW1wdHkoYWNjb3VudHMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYWNjb3VudHM6IGFjY291bnRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGlkQ2hhbmdlICYmICFpc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYWNjb3VudHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElmIHByb3ZpZGVkLCBleGVjdXRlIGNhbGxiYWNrXG4gICAgaWYgKGRpZENoYW5nZSAmJiB0eXBlb2Ygb25DaGFuZ2VBY2NvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNoYW5nZUFjY291bnQobmV4dCk7XG4gICAgfVxuXG4gICAgLy8gSWYgYXZhaWxhYmxlLCBkaXNwYXRjaCByZWR1eCBhY3Rpb25cbiAgICBpZiAoc3RvcmUgJiYgdHlwZW9mIHN0b3JlLmRpc3BhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBkaWRMb2dpbiA9ICFjdXJyICYmIG5leHQ7XG4gICAgICBjb25zdCBkaWRMb2dvdXQgPSBjdXJyICYmICFuZXh0O1xuXG4gICAgICBpZiAoZGlkTG9nb3V0KSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9MT0dPVVQnLFxuICAgICAgICAgIGFkZHJlc3M6IG51bGxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZGlkTG9naW4gfHwgKGlzQ29uc3RydWN0b3IgJiYgbmV4dCkpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL1JFQ0VJVkVfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZGlkQ2hhbmdlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9DSEFOR0VfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5ldHdvcmsgYW5kIHVwZGF0ZSBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoTmV0d29yaygpIHtcbiAgICBjb25zdCB7IGV0aGVyZXVtIH0gPSB3aW5kb3c7XG5cbiAgICBpZiAoZXRoZXJldW0pIHtcbiAgICAgIGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfY2hhaW5JZCcgfSkudGhlbihuZXR3b3JrSWQgPT4ge1xuICAgICAgICBpZiAobmV0d29ya0lkICE9IHRoaXMuc3RhdGUubmV0d29ya0lkKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG51bGwsXG4gICAgICAgICAgICBuZXR3b3JrSWQ6IG5ldElkXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBuZXR3b3JrRXJyb3I6IGVyclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWNjb3VudC4gV2Ugd3JhcCBpbiB0cnkvY2F0Y2ggYmVjYXVzZSByZWFkaW5nIGB3ZWIzLmV0aC5hY2NvdW50c2BcbiAgICogd2lsbCB0aHJvdyBpZiBubyBhY2NvdW50IGlzIHNlbGVjdGVkLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBnZXRBY2NvdW50cygpIHtcbiAgICBjb25zdCBldGhlcmV1bSA9IHdpbmRvdy5ldGhlcmV1bTtcbiAgICBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KS50aGVuKGFjY291bnRzID0+IHtcbiAgICAgIHJldHVybiBhY2NvdW50cztcbiAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICByZXR1cm4gW107XG4gICAgfSk7XG4gICAgdGhpcy5oYW5kbGVBY2NvdW50c0NoYW5nZWQoYWNjb3VudHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuICAgIGNvbnN0IHtcbiAgICAgIHBhc3NpdmUsXG4gICAgICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFdlYjNVbmF2YWlsYWJsZUNvbXBvbmVudCxcbiAgICAgIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogQWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhc3NpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGlmICghd2ViMykge1xuICAgICAgcmV0dXJuIDxXZWIzVW5hdmFpbGFibGVDb21wb25lbnQgLz47XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkodGhpcy5zdGF0ZS5hY2NvdW50cykpIHtcbiAgICAgIHJldHVybiA8QWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50XG4gICAgICAgIHJlcXVlc3RMb2dpbj17IHRoaXMucmVxdWVzdExvZ2luLmJpbmQodGhpcykgfVxuICAgICAgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuV2ViM1Byb3ZpZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbldlYjNQcm92aWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5XZWIzUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBXZWIzUHJvdmlkZXI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49ICAgIERlcHNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5mdW5jdGlvbiBnZXROZXR3b3JrKG5ldHdvcmtJZCkge1xuICBzd2l0Y2ggKG5ldHdvcmtJZCkge1xuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuICdNQUlOTkVUJztcbiAgICBjYXNlICcyJzpcbiAgICAgIHJldHVybiAnTU9SREVOJztcbiAgICBjYXNlICczJzpcbiAgICAgIHJldHVybiAnUk9QU1RFTic7XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4gJ1JJTktFQlknO1xuICAgIGNhc2UgJzQyJzpcbiAgICAgIHJldHVybiAnS09WQU4nO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ1VOS05PV04nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2ViM1Byb3ZpZGVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2lzRW1wdHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9yYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9yYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEljb25Ob1dlYjMgPSByZXF1aXJlKCcuL0ljb25Ob1dlYjMnKTtcbmNvbnN0IHN0eWxlc2hlZXQgPSByZXF1aXJlKCcuL3N0eWxlc2hlZXQnKTtcblxubGV0IHJlcXVlc3RMb2dpblxuZnVuY3Rpb24gTG9naW5WaWV3KHByb3BzKSB7XG4gIHJlcXVlc3RMb2dpbiA9IHByb3BzLnJlcXVlc3RMb2dpbi5iaW5kKHRoaXMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItY29udGFpbmVyXCI+XG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1pbWFnZVwiPlxuICAgICAgICAgIDxJY29uTm9XZWIzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItdGl0bGVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJ05vIEVUSCBBY2NvdW50IEF2YWlsYWJsZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItbWVzc2FnZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnWW91IGFyZSBub3QgeWV0IGxvZ2dlZCBpbi4nIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZWIzQ29ubmVjdEJ1dHRvblwiIG9uQ2xpY2s9e3JlcXVlc3RMb2dpbn0+XG4gICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpblZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9naW4uanN4IiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgRXJyb3JUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRXJyb3JUZW1wbGF0ZScpO1xuXG5jb25zdCBXZWIzVW5hdmFpbGFibGUgPSBFcnJvclRlbXBsYXRlLmJpbmQobnVsbCwge1xuICB0aXRsZTogJ1dlYjMgTm90IEZvdW5kJyxcbiAgbWVzc2FnZTogYFxuSXQgc2VlbXMgdGhhdCB5b3UgYXJlIHVzaW5nIGEgYnJvd3NlciB3aXRob3V0IFdlYjMgY2FwYWJpbGl0aWVzLiBQbGVhc2Vcbm1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgdXNpbmcgYSB3ZWIzLWNhcGFibGUgYnJvd3NlciBsaWtlIG1pc3Qgb3IgcGFyaXR5LlxuSWYgeW91IGFyZSB1c2luZyBNZXRhTWFzayBvciBQYXJpdHkgZXh0ZW5zaW9uLCBtYWtlIHN1cmUgdGhhdCBpdCBpc1xuZW5hYmxlZC5cbmBcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNVbmF2YWlsYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XZWIzVW5hdmFpbGFibGUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==