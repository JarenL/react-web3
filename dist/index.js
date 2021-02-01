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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2EzMDNhN2JiZWUzZGZmZTAxNGIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvSWNvbk5vV2ViMy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yVGVtcGxhdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1Byb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvcmFuZ2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9XZWIzVW5hdmFpbGFibGUuanN4Il0sIm5hbWVzIjpbIkljb25Ob1dlYjMiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZWFjdCIsInJlcXVpcmUiLCJzdHlsZXNoZWV0IiwiRXJyb3JUZW1wbGF0ZSIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIldlYjNQcm92aWRlciIsIlByb3BUeXBlcyIsImlzRW1wdHkiLCJyYW5nZSIsIkFjY291bnRVbmF2YWlsYWJsZSIsIldlYjNVbmF2YWlsYWJsZSIsIk9ORV9TRUNPTkQiLCJPTkVfTUlOVVRFIiwicHJvcFR5cGVzIiwid2ViM1VuYXZhaWxhYmxlU2NyZWVuIiwiYW55IiwiYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuIiwib25DaGFuZ2VBY2NvdW50IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiLCJjaGlsZENvbnRleHRUeXBlcyIsIndlYjMiLCJzaGFwZSIsImFjY291bnRzIiwiYXJyYXkiLCJzZWxlY3RlZEFjY291bnQiLCJzdHJpbmciLCJuZXR3b3JrIiwibmV0d29ya0lkIiwiY29udGV4dCIsImdldEFjY291bnRzIiwic3RhdGUiLCJuZXR3b3JrRXJyb3IiLCJpbnRlcnZhbCIsIm5ldHdvcmtJbnRlcnZhbCIsImZldGNoQWNjb3VudHMiLCJiaW5kIiwiZmV0Y2hOZXR3b3JrIiwiaGFuZGxlQWNjb3VudHMiLCJnZXROZXR3b3JrIiwiaW5pdFBvbGwiLCJpbml0TmV0d29ya1BvbGwiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsImV0aGVyZXVtIiwiZXRoQWNjb3VudHMiLCJlbmFibGUiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJzZXRTdGF0ZSIsImFjY291bnRzRXJyb3IiLCJpc0NvbnN0cnVjdG9yIiwic3RvcmUiLCJuZXh0IiwiY3VyciIsInRvTG93ZXJDYXNlIiwiZGlkQ2hhbmdlIiwiZGlzcGF0Y2giLCJkaWRMb2dpbiIsImRpZExvZ291dCIsInR5cGUiLCJhZGRyZXNzIiwicmVxdWVzdCIsIm1ldGhvZCIsIm5ldElkIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiV2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50IiwiQWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJyZXF1ZXN0TG9naW4iLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJvYmplY3QiLCJMb2dpblZpZXciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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QkFBSjtBQUNBLFNBQVNJLFNBQVQsQ0FBbUJoRixLQUFuQixFQUEwQjtBQUN4QjRFLGlCQUFlNUUsTUFBTTRFLFlBQU4sQ0FBbUJsQyxJQUFuQixDQUF3QixJQUF4QixDQUFmO0FBQ0EsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0UsbUNBQU8seUJBQXlCLEVBQUVuQyxRQUFRRixVQUFWO0FBQWhDLE1BREY7QUFHRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZjtBQUNFLDRCQUFDLFVBQUQ7QUFERixPQURGO0FBSUU7QUFDRSxtQkFBVSxvQkFEWjtBQUVFLGlDQUF5QixFQUFFRSxRQUFRLDBCQUFWO0FBRjNCLFFBSkY7QUFRRTtBQUNFLG1CQUFVLHNCQURaO0FBRUUsaUNBQXlCLEVBQUVBLFFBQVEsNEJBQVY7QUFGM0IsUUFSRjtBQVlFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLFdBQVUsbUJBQWxCLEVBQXNDLFNBQVNxRSxZQUEvQztBQUFBO0FBQUE7QUFERjtBQVpGO0FBSEYsR0FERjtBQXdCRDs7QUFFRDNFLE9BQU9DLE9BQVAsR0FBaUI4RSxTQUFqQixDOzs7Ozs7Ozs7QUNqQ0EsSUFBTTdFLFFBQVEsbUJBQUFDLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTUUsZ0JBQWdCLG1CQUFBRixDQUFRLENBQVIsQ0FBdEI7O0FBRUEsSUFBTVcsa0JBQWtCVCxjQUFjb0MsSUFBZCxDQUFtQixJQUFuQixFQUF5QjtBQUMvQ2xDLFNBQU8sZ0JBRHdDO0FBRS9DQztBQUYrQyxDQUF6QixDQUF4Qjs7QUFVQVIsT0FBT0MsT0FBUCxHQUFpQmEsZUFBakIsQyIsImZpbGUiOiIuL2Rpc3QvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYTMwM2E3YmJlZTNkZmZlMDE0YiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBJY29uTm9XZWIzKHByb3BzKSB7XG4gIHJldHVybiAoXG5cbiAgICA8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDMzMiA0MTdcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gICAgPGRlZnM+XG4gICAgICA8cGF0aCBkPVwiTTE5OC42MTA2ODUsNDMuMTAxNzgwOCBDMTA3LjI0OTc3LDQzLjEwMTc4MDggMzMuMTAxNzgwOCwxMTcuMjQ5NzcgMzMuMTAxNzgwOCwyMDguNjEwNjg1IEMzMy4xMDE3ODA4LDI5OS45NzE1OTkgMTA3LjI0OTc3LDM3NC4xMTk1ODggMTk4LjYxMDY4NSwzNzQuMTE5NTg4IEMyODkuOTcxNTk5LDM3NC4xMTk1ODggMzY0LjExOTU4OCwyOTkuOTcxNTk5IDM2NC4xMTk1ODgsMjA4LjYxMDY4NSBDMzY0LjExOTU4OCwxMTcuMjQ5NzcgMjg5Ljk3MTU5OSw0My4xMDE3ODA4IDE5OC42MTA2ODUsNDMuMTAxNzgwOCBMMTk4LjYxMDY4NSw0My4xMDE3ODA4IFogTTE5OC42MTA2ODUsMzQxLjAxNzgwOCBDMTI1LjQ1NTc0OSwzNDEuMDE3ODA4IDY2LjIwMzU2MTUsMjgxLjc2NTYyIDY2LjIwMzU2MTUsMjA4LjYxMDY4NSBDNjYuMjAzNTYxNSwxNzcuOTkxNTM3IDc2LjYzMDYyMjUsMTQ5Ljg1NTAyNCA5NC4xNzQ1NjYzLDEyNy41MTEzMjIgTDI3OS43MTAwNDcsMzEzLjA0NjgwMyBDMjU3LjM2NjM0NSwzMzAuNTkwNzQ3IDIyOS4yMjk4MzIsMzQxLjAxNzgwOCAxOTguNjEwNjg1LDM0MS4wMTc4MDggTDE5OC42MTA2ODUsMzQxLjAxNzgwOCBaIE0zMDMuMDQ2ODAzLDI4OS43MTAwNDcgTDExNy41MTEzMjIsMTA0LjE3NDU2NiBDMTM5Ljg1NTAyNCw4Ni42MzA2MjI1IDE2Ny45OTE1MzcsNzYuMjAzNTYxNSAxOTguNjEwNjg1LDc2LjIwMzU2MTUgQzI3MS43NjU2Miw3Ni4yMDM1NjE1IDMzMS4wMTc4MDgsMTM1LjQ1NTc0OSAzMzEuMDE3ODA4LDIwOC42MTA2ODUgQzMzMS4wMTc4MDgsMjM5LjIyOTgzMiAzMjAuNTkwNzQ3LDI2Ny4zNjYzNDUgMzAzLjA0NjgwMywyODkuNzEwMDQ3IEwzMDMuMDQ2ODAzLDI4OS43MTAwNDcgWlwiIGlkPVwicGF0aC0xXCI+PC9wYXRoPlxuICAgIDwvZGVmcz5cbiAgICA8ZyBpZD1cIlBhZ2UtMVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2VXaWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxuICAgICAgPGcgaWQ9XCJHcm91cFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzMuMDAwMDAwLCAwLjAwMDAwMClcIj5cbiAgICAgICAgPGcgaWQ9XCJFdGhlcmV1bV9sb2dvXzIwMTRcIiBvcGFjaXR5PVwiMC4yMDg4OTk0NTdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzEuMDAwMDAwLCAwLjAwMDAwMClcIiBmaWxsUnVsZT1cIm5vbnplcm9cIj5cbiAgICAgICAgICA8cG9seWdvbiBpZD1cIlNoYXBlXCIgZmlsbD1cIiMzNDM0MzRcIiBwb2ludHM9XCIxMjcuOTYxMSAwIDEyNS4xNjYxIDkuNSAxMjUuMTY2MSAyODUuMTY4IDEyNy45NjExIDI4Ny45NTggMjU1LjkyMzEgMjEyLjMyXCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzhDOEM4Q1wiIHBvaW50cz1cIjEyNy45NjIgMCAwIDIxMi4zMiAxMjcuOTYyIDI4Ny45NTkgMTI3Ljk2MiAxNTQuMTU4XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzNDM0MzQlwiIHBvaW50cz1cIjEyNy45NjExIDMxMi4xODY2IDEyNi4zODYxIDMxNC4xMDY2IDEyNi4zODYxIDQxMi4zMDU2IDEyNy45NjExIDQxNi45MDY2IDI1NS45OTkxIDIzNi41ODY2XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzhDOEM4Q1wiIHBvaW50cz1cIjEyNy45NjIgNDE2LjkwNTIgMTI3Ljk2MiAzMTIuMTg1MiAwIDIzNi41ODUyXCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzE0MTQxNFwiIHBvaW50cz1cIjEyNy45NjExIDI4Ny45NTc3IDI1NS45MjExIDIxMi4zMjA3IDEyNy45NjExIDE1NC4xNTg3XCI+PC9wb2x5Z29uPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzM5MzkzOVwiIHBvaW50cz1cIjAuMDAwOSAyMTIuMzIwOCAxMjcuOTYwOSAyODcuOTU3OCAxMjcuOTYwOSAxNTQuMTU4OFwiPjwvcG9seWdvbj5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyBpZD1cImljX2RvX25vdF9kaXN0dXJiXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLCAxMC4wMDAwMDApXCI+PC9nPlxuICAgICAgICA8cG9seWdvbiBpZD1cIkJvdW5kc1wiIHBvaW50cz1cIjAgMTAgMzk3LjIyMTM2OSAxMCAzOTcuMjIxMzY5IDQwNy4yMjEzNjkgMCA0MDcuMjIxMzY5XCI+PC9wb2x5Z29uPlxuICAgICAgICA8ZyBpZD1cIkljb25cIj5cbiAgICAgICAgICA8dXNlIGZpbGw9XCIjRkZFMURFXCIgZmlsbFJ1bGU9XCJldmVub2RkXCIgeGxpbmtIcmVmPVwiI3BhdGgtMVwiPjwvdXNlPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2VXaWR0aD1cIjZcIiBkPVwiTTE5OC42MTA2ODUsNDYuMTAxNzgwOCBDMjg4LjMxNDc0NSw0Ni4xMDE3ODA4IDM2MS4xMTk1ODgsMTE4LjkwNjYyNCAzNjEuMTE5NTg4LDIwOC42MTA2ODUgQzM2MS4xMTk1ODgsMjk4LjMxNDc0NSAyODguMzE0NzQ1LDM3MS4xMTk1ODggMTk4LjYxMDY4NSwzNzEuMTE5NTg4IEMxMDguOTA2NjI0LDM3MS4xMTk1ODggMzYuMTAxNzgwOCwyOTguMzE0NzQ1IDM2LjEwMTc4MDgsMjA4LjYxMDY4NSBDMzYuMTAxNzgwOCwxMTguOTA2NjI0IDEwOC45MDY2MjQsNDYuMTAxNzgwOCAxOTguNjEwNjg1LDQ2LjEwMTc4MDggWiBNMTk4LjYxMDY4NSwzNDQuMDE3ODA4IEMxMjMuNzk4ODk1LDM0NC4wMTc4MDggNjMuMjAzNTYxNSwyODMuNDIyNDc0IDYzLjIwMzU2MTUsMjA4LjYxMDY4NSBDNjMuMjAzNTYxNSwxNzguMDc3NDQyIDczLjM3MzY3MTQsMTQ5LjE0NTIzMyA5MS44MTUwMDQ5LDEyNS42NTg2MjkgTDkzLjkwNDAwMDcsMTIyLjk5ODExNSBMMjg0LjIyMzI1NCwzMTMuMzE3MzY4IEwyODEuNTYyNzQsMzE1LjQwNjM2NCBDMjU4LjA3NjEzNiwzMzMuODQ3Njk4IDIyOS4xNDM5MjcsMzQ0LjAxNzgwOCAxOTguNjEwNjg1LDM0NC4wMTc4MDggWiBNMzAzLjMxNzM2OCwyOTQuMjIzMjU0IEwxMTIuOTk4MTE1LDEwMy45MDQwMDEgTDExNS42NTg2MjksMTAxLjgxNTAwNSBDMTM5LjE0NTIzMyw4My4zNzM2NzE0IDE2OC4wNzc0NDIsNzMuMjAzNTYxNSAxOTguNjEwNjg1LDczLjIwMzU2MTUgQzI3My40MjI0NzQsNzMuMjAzNTYxNSAzMzQuMDE3ODA4LDEzMy43OTg4OTUgMzM0LjAxNzgwOCwyMDguNjEwNjg1IEMzMzQuMDE3ODA4LDIzOS4xNDM5MjcgMzIzLjg0NzY5OCwyNjguMDc2MTM2IDMwNS40MDYzNjQsMjkxLjU2Mjc0IEwzMDMuMzE3MzY4LDI5NC4yMjMyNTQgWlwiPjwvcGF0aD5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4gICk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSWNvbk5vV2ViMztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9JY29uTm9XZWIzLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gYFxuLldlYjNQcm92aWRlci1jb250YWluZXIge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbDtcbiAgY29sb3I6IGhzbCgwLDAlLDUwJSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk1JSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbn1cbi5XZWIzUHJvdmlkZXItd3JhcHBlciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIwNywgOTAlLCA1NCUpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDUwcHggNDBweDtcbiAgbWFyZ2luOiA4MHB4IGF1dG87XG59XG4uV2ViM1Byb3ZpZGVyLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMTc1cHg7XG59XG4uV2ViM1Byb3ZpZGVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgY29sb3I6IGhzbCgwLDAlLDI1JSk7XG59XG4uV2ViM1Byb3ZpZGVyLW1lc3NhZ2Uge1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogaHNsKDAsMCUsNTAlKTtcbn1cblxuLndlYjNDb25uZWN0QnV0dG9uIHtcblx0LW1vei1ib3gtc2hhZG93Omluc2V0IDBweCAtM3B4IDdweCAwcHggIzI5YmJmZjtcblx0LXdlYmtpdC1ib3gtc2hhZG93Omluc2V0IDBweCAtM3B4IDdweCAwcHggIzI5YmJmZjtcblx0Ym94LXNoYWRvdzppbnNldCAwcHggLTNweCA3cHggMHB4ICMyOWJiZmY7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjA1LCAjMmRhYmY5KSwgY29sb3Itc3RvcCgxLCAjMDY4OGZhKSk7XG5cdGJhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMmRhYmY5IDUlLCAjMDY4OGZhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzJkYWJmOSA1JSwgIzA2ODhmYSAxMDAlKTtcblx0YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQodG9wLCAjMmRhYmY5IDUlLCAjMDY4OGZhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjMmRhYmY5IDUlLCAjMDY4OGZhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMyZGFiZjkgNSUsICMwNjg4ZmEgMTAwJSk7XG5cdGZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzJkYWJmOScsIGVuZENvbG9yc3RyPScjMDY4OGZhJyxHcmFkaWVudFR5cGU9MCk7XG5cdGJhY2tncm91bmQtY29sb3I6IzJkYWJmOTtcblx0LW1vei1ib3JkZXItcmFkaXVzOjNweDtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOjNweDtcblx0Ym9yZGVyLXJhZGl1czozcHg7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRjdXJzb3I6cG9pbnRlcjtcblx0Y29sb3I6I2ZmZmZmZjtcblx0Zm9udC1mYW1pbHk6QXJpYWw7XG5cdGZvbnQtc2l6ZToxNXB4O1xuXHRwYWRkaW5nOjlweCAyM3B4O1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcblx0dGV4dC1zaGFkb3c6MHB4IDFweCAwcHggIzI2MzY2Njtcbn1cbi53ZWIzQ29ubmVjdEJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjA1LCAjMDY4OGZhKSwgY29sb3Itc3RvcCgxLCAjMmRhYmY5KSk7XG5cdGJhY2tncm91bmQ6LW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjMDY4OGZhIDUlLCAjMmRhYmY5IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIzA2ODhmYSA1JSwgIzJkYWJmOSAxMDAlKTtcblx0YmFja2dyb3VuZDotby1saW5lYXItZ3JhZGllbnQodG9wLCAjMDY4OGZhIDUlLCAjMmRhYmY5IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAjMDY4OGZhIDUlLCAjMmRhYmY5IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwNjg4ZmEgNSUsICMyZGFiZjkgMTAwJSk7XG5cdGZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nIzA2ODhmYScsIGVuZENvbG9yc3RyPScjMmRhYmY5JyxHcmFkaWVudFR5cGU9MCk7XG5cdGJhY2tncm91bmQtY29sb3I6IzA2ODhmYTtcbn1cbi53ZWIzQ29ubmVjdEJ1dHRvbjphY3RpdmUge1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0dG9wOjFweDtcbn1cblxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXNoZWV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSWNvbk5vV2ViMyA9IHJlcXVpcmUoJy4vSWNvbk5vV2ViMycpO1xuY29uc3Qgc3R5bGVzaGVldCA9IHJlcXVpcmUoJy4vc3R5bGVzaGVldCcpO1xuXG5mdW5jdGlvbiBFcnJvclRlbXBsYXRlKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItY29udGFpbmVyXCI+XG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1pbWFnZVwiPlxuICAgICAgICAgIDxJY29uTm9XZWIzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItdGl0bGVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMudGl0bGUgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItbWVzc2FnZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5tZXNzYWdlIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEVycm9yVGVtcGxhdGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRXJyb3JUZW1wbGF0ZS5qc3giLCJjb25zdCBXZWIzUHJvdmlkZXIgPSByZXF1aXJlKCcuL1dlYjNQcm92aWRlcicpO1xuY29uc3QgRXJyb3JUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRXJyb3JUZW1wbGF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cy5XZWIzUHJvdmlkZXIgPSBXZWIzUHJvdmlkZXI7XG5tb2R1bGUuZXhwb3J0cy5FcnJvclRlbXBsYXRlID0gRXJyb3JUZW1wbGF0ZTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFdlYjNQcm92aWRlcixcbiAgRXJyb3JUZW1wbGF0ZVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbmNvbnN0IGlzRW1wdHkgPSByZXF1aXJlKCdsb2Rhc2gvaXNFbXB0eScpO1xuY29uc3QgcmFuZ2UgPSByZXF1aXJlKCdsb2Rhc2gvcmFuZ2UnKTtcbmNvbnN0IEFjY291bnRVbmF2YWlsYWJsZSA9IHJlcXVpcmUoJy4vTG9naW4nKTtcbmNvbnN0IFdlYjNVbmF2YWlsYWJsZSA9IHJlcXVpcmUoJy4vV2ViM1VuYXZhaWxhYmxlJyk7XG5cbmNvbnN0IE9ORV9TRUNPTkQgPSAxMDAwO1xuY29uc3QgT05FX01JTlVURSA9IE9ORV9TRUNPTkQgKiA2MDtcbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgd2ViM1VuYXZhaWxhYmxlU2NyZWVuOiBQcm9wVHlwZXMuYW55LFxuICBhY2NvdW50VW5hdmFpbGFibGVTY3JlZW46IFByb3BUeXBlcy5hbnksXG4gIG9uQ2hhbmdlQWNjb3VudDogUHJvcFR5cGVzLmZ1bmNcbn07XG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XG4gIHBhc3NpdmU6IGZhbHNlLFxuICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFdlYjNVbmF2YWlsYWJsZSxcbiAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBBY2NvdW50VW5hdmFpbGFibGUsXG59O1xuY29uc3QgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gIHdlYjM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYWNjb3VudHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3RlZEFjY291bnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbmV0d29yazogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXR3b3JrSWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSlcbn07XG5cbmNsYXNzIFdlYjNQcm92aWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIGNvbnN0IGFjY291bnRzID0gdGhpcy5nZXRBY2NvdW50cygpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjY291bnRzLFxuICAgICAgbmV0d29ya0lkOiBudWxsLFxuICAgICAgbmV0d29ya0Vycm9yOiBudWxsXG4gICAgfTtcbiAgICB0aGlzLmludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLm5ldHdvcmtJbnRlcnZhbCA9IG51bGw7XG4gICAgdGhpcy5mZXRjaEFjY291bnRzID0gdGhpcy5mZXRjaEFjY291bnRzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mZXRjaE5ldHdvcmsgPSB0aGlzLmZldGNoTmV0d29yay5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKGFjY291bnRzKSB7XG4gICAgICB0aGlzLmhhbmRsZUFjY291bnRzKGFjY291bnRzLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdlYjM6IHtcbiAgICAgICAgYWNjb3VudHM6IHRoaXMuc3RhdGUuYWNjb3VudHMsXG4gICAgICAgIHNlbGVjdGVkQWNjb3VudDogdGhpcy5zdGF0ZS5hY2NvdW50cyAmJiB0aGlzLnN0YXRlLmFjY291bnRzWzBdLFxuICAgICAgICBuZXR3b3JrOiBnZXROZXR3b3JrKHRoaXMuc3RhdGUubmV0d29ya0lkKSxcbiAgICAgICAgbmV0d29ya0lkOiB0aGlzLnN0YXRlLm5ldHdvcmtJZFxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgcG9sbGluZyBhY2NvdW50cywgJiBuZXR3b3JrLiBXZSBwb2xsIGluZGVmaW5pdGVseSBzbyB0aGF0IHdlIGNhblxuICAgKiByZWFjdCB0byB0aGUgdXNlciBjaGFuZ2luZyBhY2NvdW50cyBvciBuZXRvd3Jrcy5cbiAgICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZmV0Y2hOZXR3b3JrKCk7XG4gICAgdGhpcy5pbml0UG9sbCgpO1xuICAgIHRoaXMuaW5pdE5ldHdvcmtQb2xsKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdCB3ZWIzL2FjY291bnQgcG9sbGluZywgYW5kIHByZXZlbnQgZHVwbGljYXRlIGludGVydmFsLlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaW5pdFBvbGwoKSB7XG4gICAgaWYgKCF0aGlzLmludGVydmFsKSB7XG4gICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5mZXRjaEFjY291bnRzLCBPTkVfU0VDT05EKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdCBuZXR3b3JrIHBvbGxpbmcsIGFuZCBwcmV2ZW50IGR1cGxpY2F0ZSBpbnRlcnZhbHMuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0TmV0d29ya1BvbGwoKSB7XG4gICAgaWYgKCF0aGlzLm5ldHdvcmtJbnRlcnZhbCkge1xuICAgICAgdGhpcy5uZXR3b3JrSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmZldGNoTmV0d29yaywgT05FX01JTlVURSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgbG9naW4gZnJvbSB1c2VycyBmb3IgRUlQIDExMDIgcHJpdmFjeSBzdXBwb3J0XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZXF1ZXN0TG9naW4oKSB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuICAgIGNvbnN0IGV0aEFjY291bnRzID0gdGhpcy5nZXRBY2NvdW50cygpO1xuXG4gICAgaWYgKGlzRW1wdHkoZXRoQWNjb3VudHMpKSB7XG4gICAgICBldGhlcmV1bSAmJiBldGhlcmV1bS5lbmFibGUoKVxuICAgICAgLnRoZW4oYWNjb3VudHMgPT4gdGhpcy5oYW5kbGVBY2NvdW50cyhhY2NvdW50cykpXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY2NvdW50c0Vycm9yOiBlcnJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhldGhBY2NvdW50cyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBzdGF0ZSByZWdhcmRpbmcgdGhlIGF2YWlsYWJpbGl0eSBvZiB3ZWIzIGFuZCBhbiBFVEggYWNjb3VudC5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoQWNjb3VudHMoKSB7XG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93O1xuICAgIGNvbnN0IGV0aEFjY291bnRzID0gdGhpcy5nZXRBY2NvdW50cygpO1xuXG4gICAgaWYgKGlzRW1wdHkoZXRoQWNjb3VudHMpKSB7XG4gICAgICBldGhlcmV1bSAmJiBldGhlcmV1bS5lbmFibGUoKVxuICAgICAgICAudGhlbihhY2NvdW50cyA9PiB0aGlzLmhhbmRsZUFjY291bnRzKGFjY291bnRzKSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjY291bnRzRXJyb3I6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhldGhBY2NvdW50cyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWNjb3VudHMoYWNjb3VudHMsIGlzQ29uc3RydWN0b3IgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgb25DaGFuZ2VBY2NvdW50IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc3RvcmUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBsZXQgbmV4dCA9IGFjY291bnRzWzBdO1xuICAgIGxldCBjdXJyID0gdGhpcy5zdGF0ZS5hY2NvdW50c1swXTtcbiAgICBuZXh0ID0gbmV4dCAmJiBuZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgY3VyciA9IGN1cnIgJiYgY3Vyci50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGRpZENoYW5nZSA9IGN1cnIgJiYgbmV4dCAmJiAoY3VyciAhPT0gbmV4dCk7XG5cbiAgICBpZiAoaXNFbXB0eSh0aGlzLnN0YXRlLmFjY291bnRzKSAmJiAhaXNFbXB0eShhY2NvdW50cykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50czogYWNjb3VudHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChkaWRDaGFuZ2UgJiYgIWlzQ29uc3RydWN0b3IpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBhY2NvdW50c0Vycm9yOiBudWxsLFxuICAgICAgICBhY2NvdW50c1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgcHJvdmlkZWQsIGV4ZWN1dGUgY2FsbGJhY2tcbiAgICBpZiAoZGlkQ2hhbmdlICYmIHR5cGVvZiBvbkNoYW5nZUFjY291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uQ2hhbmdlQWNjb3VudChuZXh0KTtcbiAgICB9XG5cbiAgICAvLyBJZiBhdmFpbGFibGUsIGRpc3BhdGNoIHJlZHV4IGFjdGlvblxuICAgIGlmIChzdG9yZSAmJiB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnN0IGRpZExvZ2luID0gIWN1cnIgJiYgbmV4dDtcbiAgICAgIGNvbnN0IGRpZExvZ291dCA9IGN1cnIgJiYgIW5leHQ7XG5cbiAgICAgIGlmIChkaWRMb2dvdXQpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL0xPR09VVCcsXG4gICAgICAgICAgYWRkcmVzczogbnVsbFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChkaWRMb2dpbiB8fCAoaXNDb25zdHJ1Y3RvciAmJiBuZXh0KSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogJ3dlYjMvUkVDRUlWRV9BQ0NPVU5UJyxcbiAgICAgICAgICBhZGRyZXNzOiBuZXh0XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChkaWRDaGFuZ2UpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL0NIQU5HRV9BQ0NPVU5UJyxcbiAgICAgICAgICBhZGRyZXNzOiBuZXh0XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV0d29yayBhbmQgdXBkYXRlIHN0YXRlIGFjY29yZGluZ2x5LlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmV0Y2hOZXR3b3JrKCkge1xuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdztcblxuICAgIGlmIChldGhlcmV1bSkge1xuICAgICAgZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9jaGFpbklkJyB9KS50aGVuKG5ldHdvcmtJZCA9PiB7XG4gICAgICAgIGlmIChuZXR3b3JrSWQgIT0gdGhpcy5zdGF0ZS5uZXR3b3JrSWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogbnVsbCxcbiAgICAgICAgICAgIG5ldHdvcmtJZDogbmV0SWRcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhY2NvdW50LiBXZSB3cmFwIGluIHRyeS9jYXRjaCBiZWNhdXNlIHJlYWRpbmcgYHdlYjMuZXRoLmFjY291bnRzYFxuICAgKiB3aWxsIHRocm93IGlmIG5vIGFjY291bnQgaXMgc2VsZWN0ZWQuXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGdldEFjY291bnRzKCkge1xuICAgIGNvbnN0IGV0aGVyZXVtID0gd2luZG93LmV0aGVyZXVtO1xuICAgIGV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pLnRoZW4oYWNjb3VudHMgPT4ge1xuICAgICAgcmV0dXJuIGFjY291bnRzO1xuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9KTtcbiAgICB0aGlzLmhhbmRsZUFjY291bnRzQ2hhbmdlZChhY2NvdW50cyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB3ZWIzIH0gPSB3aW5kb3c7XG4gICAgY29uc3Qge1xuICAgICAgcGFzc2l2ZSxcbiAgICAgIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlQ29tcG9uZW50LFxuICAgICAgYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuOiBBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFzc2l2ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgaWYgKCF3ZWIzKSB7XG4gICAgICByZXR1cm4gPFdlYjNVbmF2YWlsYWJsZUNvbXBvbmVudCAvPjtcbiAgICB9XG5cbiAgICBpZiAoaXNFbXB0eSh0aGlzLnN0YXRlLmFjY291bnRzKSkge1xuICAgICAgcmV0dXJuIDxBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnRcbiAgICAgICAgcmVxdWVzdExvZ2luPXsgdGhpcy5yZXF1ZXN0TG9naW4uYmluZCh0aGlzKSB9XG4gICAgICAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufVxuXG5XZWIzUHJvdmlkZXIucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuV2ViM1Byb3ZpZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbldlYjNQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IGNoaWxkQ29udGV4dFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNQcm92aWRlcjtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbj0gICAgRGVwc1xuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbmZ1bmN0aW9uIGdldE5ldHdvcmsobmV0d29ya0lkKSB7XG4gIHN3aXRjaCAobmV0d29ya0lkKSB7XG4gICAgY2FzZSAnMSc6XG4gICAgICByZXR1cm4gJ01BSU5ORVQnO1xuICAgIGNhc2UgJzInOlxuICAgICAgcmV0dXJuICdNT1JERU4nO1xuICAgIGNhc2UgJzMnOlxuICAgICAgcmV0dXJuICdST1BTVEVOJztcbiAgICBjYXNlICc0JzpcbiAgICAgIHJldHVybiAnUklOS0VCWSc7XG4gICAgY2FzZSAnNDInOlxuICAgICAgcmV0dXJuICdLT1ZBTic7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnVU5LTk9XTic7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XZWIzUHJvdmlkZXIuanN4IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInByb3AtdHlwZXNcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFbXB0eVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9pc0VtcHR5XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL3JhbmdlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibG9kYXNoL3JhbmdlXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSWNvbk5vV2ViMyA9IHJlcXVpcmUoJy4vSWNvbk5vV2ViMycpO1xuY29uc3Qgc3R5bGVzaGVldCA9IHJlcXVpcmUoJy4vc3R5bGVzaGVldCcpO1xuXG5sZXQgcmVxdWVzdExvZ2luXG5mdW5jdGlvbiBMb2dpblZpZXcocHJvcHMpIHtcbiAgcmVxdWVzdExvZ2luID0gcHJvcHMucmVxdWVzdExvZ2luLmJpbmQodGhpcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1jb250YWluZXJcIj5cbiAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLWltYWdlXCI+XG4gICAgICAgICAgPEljb25Ob1dlYjMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci10aXRsZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnTm8gRVRIIEFjY291bnQgQXZhaWxhYmxlJyB9fVxuICAgICAgICAvPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1tZXNzYWdlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6ICdZb3UgYXJlIG5vdCB5ZXQgbG9nZ2VkIGluLicgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndlYjNDb25uZWN0QnV0dG9uXCIgb25DbGljaz17cmVxdWVzdExvZ2lufT5cbiAgICAgICAgICAgIENvbm5lY3RcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2luVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Mb2dpbi5qc3giLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbmNvbnN0IFdlYjNVbmF2YWlsYWJsZSA9IEVycm9yVGVtcGxhdGUuYmluZChudWxsLCB7XG4gIHRpdGxlOiAnV2ViMyBOb3QgRm91bmQnLFxuICBtZXNzYWdlOiBgXG5JdCBzZWVtcyB0aGF0IHlvdSBhcmUgdXNpbmcgYSBicm93c2VyIHdpdGhvdXQgV2ViMyBjYXBhYmlsaXRpZXMuIFBsZWFzZVxubWFrZSBzdXJlIHRoYXQgeW91IGFyZSB1c2luZyBhIHdlYjMtY2FwYWJsZSBicm93c2VyIGxpa2UgbWlzdCBvciBwYXJpdHkuXG5JZiB5b3UgYXJlIHVzaW5nIE1ldGFNYXNrIG9yIFBhcml0eSBleHRlbnNpb24sIG1ha2Ugc3VyZSB0aGF0IGl0IGlzXG5lbmFibGVkLlxuYFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViM1VuYXZhaWxhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1dlYjNVbmF2YWlsYWJsZS5qc3giXSwic291cmNlUm9vdCI6IiJ9