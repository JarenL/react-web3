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
          web3 = _window.web3;

      var ethAccounts = this.getAccounts();

      if (isEmpty(ethAccounts)) {
        window.ethereum && ethereum.enable().then(function (accounts) {
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
          web3 = _window2.web3;

      var ethAccounts = this.getAccounts();

      if (isEmpty(ethAccounts)) {
        web3 && web3.currentProvider && web3.currentProvider.sendAsync({
          "jsonrpc": "2.0", "method": "eth_accounts", "params": []
        }, function (err, response) {
          if (err || response.error) {
            return _this3.setState({
              accountsError: err
            });
          }

          _this3.handleAccounts(response.result);
        });
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
          web3 = _window3.web3;


      if (web3) {
        var isV1 = /^1/.test(web3.version);
        var _getNetwork = isV1 ? web3.eth.net.getId : web3.version.getNetwork;

        _getNetwork(function (err, netId) {
          if (err) {
            _this4.setState({
              networkError: err
            });
          } else {
            if (netId != _this4.state.networkId) {
              _this4.setState({
                networkError: null,
                networkId: netId
              });
            }
          }
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
      var _window4 = window,
          web3 = _window4.web3;


      try {
        var _window5 = window,
            _web = _window5.web3;

        var isV1 = /^1/.test(_web.version);
        // throws if no account selected
        var getV1Wallets = function getV1Wallets() {
          return range(_web.eth.accounts.wallet.length).map(function (i) {
            return _web.eth.accounts.wallet[i];
          }).map(function (w) {
            return w.address;
          });
        };
        var accounts = isV1 ? getV1Wallets() : _web.eth.accounts;

        return accounts;
      } catch (e) {
        return [];
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _window6 = window,
          web3 = _window6.web3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjY3YWI0MjdiZmUwMGRkMmMzMDkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvSWNvbk5vV2ViMy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlc2hlZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Vycm9yVGVtcGxhdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvV2ViM1Byb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoL2lzRW1wdHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvcmFuZ2VcIiIsIndlYnBhY2s6Ly8vLi9zcmMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL3NyYy9XZWIzVW5hdmFpbGFibGUuanN4Il0sIm5hbWVzIjpbIkljb25Ob1dlYjMiLCJwcm9wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJSZWFjdCIsInJlcXVpcmUiLCJzdHlsZXNoZWV0IiwiRXJyb3JUZW1wbGF0ZSIsIl9faHRtbCIsInRpdGxlIiwibWVzc2FnZSIsIldlYjNQcm92aWRlciIsIlByb3BUeXBlcyIsImlzRW1wdHkiLCJyYW5nZSIsIkFjY291bnRVbmF2YWlsYWJsZSIsIldlYjNVbmF2YWlsYWJsZSIsIk9ORV9TRUNPTkQiLCJPTkVfTUlOVVRFIiwicHJvcFR5cGVzIiwid2ViM1VuYXZhaWxhYmxlU2NyZWVuIiwiYW55IiwiYWNjb3VudFVuYXZhaWxhYmxlU2NyZWVuIiwib25DaGFuZ2VBY2NvdW50IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInBhc3NpdmUiLCJjaGlsZENvbnRleHRUeXBlcyIsIndlYjMiLCJzaGFwZSIsImFjY291bnRzIiwiYXJyYXkiLCJzZWxlY3RlZEFjY291bnQiLCJzdHJpbmciLCJuZXR3b3JrIiwibmV0d29ya0lkIiwiY29udGV4dCIsImdldEFjY291bnRzIiwic3RhdGUiLCJuZXR3b3JrRXJyb3IiLCJpbnRlcnZhbCIsIm5ldHdvcmtJbnRlcnZhbCIsImZldGNoQWNjb3VudHMiLCJiaW5kIiwiZmV0Y2hOZXR3b3JrIiwiaGFuZGxlQWNjb3VudHMiLCJnZXROZXR3b3JrIiwiaW5pdFBvbGwiLCJpbml0TmV0d29ya1BvbGwiLCJzZXRJbnRlcnZhbCIsIndpbmRvdyIsImV0aEFjY291bnRzIiwiZXRoZXJldW0iLCJlbmFibGUiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJzZXRTdGF0ZSIsImFjY291bnRzRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJzZW5kQXN5bmMiLCJyZXNwb25zZSIsImVycm9yIiwicmVzdWx0IiwiaXNDb25zdHJ1Y3RvciIsInN0b3JlIiwibmV4dCIsImN1cnIiLCJ0b0xvd2VyQ2FzZSIsImRpZENoYW5nZSIsImRpc3BhdGNoIiwiZGlkTG9naW4iLCJkaWRMb2dvdXQiLCJ0eXBlIiwiYWRkcmVzcyIsImlzVjEiLCJ0ZXN0IiwidmVyc2lvbiIsImV0aCIsIm5ldCIsImdldElkIiwibmV0SWQiLCJnZXRWMVdhbGxldHMiLCJ3YWxsZXQiLCJsZW5ndGgiLCJtYXAiLCJpIiwidyIsImUiLCJXZWIzVW5hdmFpbGFibGVDb21wb25lbnQiLCJBY2NvdW50VW5hdmFpbGFibGVDb21wb25lbnQiLCJjaGlsZHJlbiIsInJlcXVlc3RMb2dpbiIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIm9iamVjdCIsIkxvZ2luVmlldyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNM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QWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLG9CQUFmO0FBQ0UsNEJBQUMsVUFBRDtBQURGLE9BREY7QUFJRTtBQUNFLG1CQUFVLG9CQURaO0FBRUUsaUNBQXlCLEVBQUVFLFFBQVEsMEJBQVY7QUFGM0IsUUFKRjtBQVFFO0FBQ0UsbUJBQVUsc0JBRFo7QUFFRSxpQ0FBeUIsRUFBRUEsUUFBUSw0QkFBVjtBQUYzQixRQVJGO0FBWUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxtQkFBbEIsRUFBc0MsU0FBU29GLFlBQS9DO0FBQUE7QUFBQTtBQURGO0FBWkY7QUFIRixHQURGO0FBd0JEOztBQUVEMUYsT0FBT0MsT0FBUCxHQUFpQjZGLFNBQWpCLEM7Ozs7Ozs7OztBQ2pDQSxJQUFNNUYsUUFBUSxtQkFBQUMsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNRSxnQkFBZ0IsbUJBQUFGLENBQVEsQ0FBUixDQUF0Qjs7QUFFQSxJQUFNVyxrQkFBa0JULGNBQWNvQyxJQUFkLENBQW1CLElBQW5CLEVBQXlCO0FBQy9DbEMsU0FBTyxnQkFEd0M7QUFFL0NDO0FBRitDLENBQXpCLENBQXhCOztBQVVBUixPQUFPQyxPQUFQLEdBQWlCYSxlQUFqQixDIiwiZmlsZSI6Ii4vZGlzdC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2N2FiNDI3YmZlMDBkZDJjMzA5IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIEljb25Ob1dlYjMocHJvcHMpIHtcbiAgcmV0dXJuIChcblxuICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMzMyIDQxN1wiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8ZGVmcz5cbiAgICAgIDxwYXRoIGQ9XCJNMTk4LjYxMDY4NSw0My4xMDE3ODA4IEMxMDcuMjQ5NzcsNDMuMTAxNzgwOCAzMy4xMDE3ODA4LDExNy4yNDk3NyAzMy4xMDE3ODA4LDIwOC42MTA2ODUgQzMzLjEwMTc4MDgsMjk5Ljk3MTU5OSAxMDcuMjQ5NzcsMzc0LjExOTU4OCAxOTguNjEwNjg1LDM3NC4xMTk1ODggQzI4OS45NzE1OTksMzc0LjExOTU4OCAzNjQuMTE5NTg4LDI5OS45NzE1OTkgMzY0LjExOTU4OCwyMDguNjEwNjg1IEMzNjQuMTE5NTg4LDExNy4yNDk3NyAyODkuOTcxNTk5LDQzLjEwMTc4MDggMTk4LjYxMDY4NSw0My4xMDE3ODA4IEwxOTguNjEwNjg1LDQzLjEwMTc4MDggWiBNMTk4LjYxMDY4NSwzNDEuMDE3ODA4IEMxMjUuNDU1NzQ5LDM0MS4wMTc4MDggNjYuMjAzNTYxNSwyODEuNzY1NjIgNjYuMjAzNTYxNSwyMDguNjEwNjg1IEM2Ni4yMDM1NjE1LDE3Ny45OTE1MzcgNzYuNjMwNjIyNSwxNDkuODU1MDI0IDk0LjE3NDU2NjMsMTI3LjUxMTMyMiBMMjc5LjcxMDA0NywzMTMuMDQ2ODAzIEMyNTcuMzY2MzQ1LDMzMC41OTA3NDcgMjI5LjIyOTgzMiwzNDEuMDE3ODA4IDE5OC42MTA2ODUsMzQxLjAxNzgwOCBMMTk4LjYxMDY4NSwzNDEuMDE3ODA4IFogTTMwMy4wNDY4MDMsMjg5LjcxMDA0NyBMMTE3LjUxMTMyMiwxMDQuMTc0NTY2IEMxMzkuODU1MDI0LDg2LjYzMDYyMjUgMTY3Ljk5MTUzNyw3Ni4yMDM1NjE1IDE5OC42MTA2ODUsNzYuMjAzNTYxNSBDMjcxLjc2NTYyLDc2LjIwMzU2MTUgMzMxLjAxNzgwOCwxMzUuNDU1NzQ5IDMzMS4wMTc4MDgsMjA4LjYxMDY4NSBDMzMxLjAxNzgwOCwyMzkuMjI5ODMyIDMyMC41OTA3NDcsMjY3LjM2NjM0NSAzMDMuMDQ2ODAzLDI4OS43MTAwNDcgTDMwMy4wNDY4MDMsMjg5LjcxMDA0NyBaXCIgaWQ9XCJwYXRoLTFcIj48L3BhdGg+XG4gICAgPC9kZWZzPlxuICAgIDxnIGlkPVwiUGFnZS0xXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZVdpZHRoPVwiMVwiIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XG4gICAgICA8ZyBpZD1cIkdyb3VwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zMy4wMDAwMDAsIDAuMDAwMDAwKVwiPlxuICAgICAgICA8ZyBpZD1cIkV0aGVyZXVtX2xvZ29fMjAxNFwiIG9wYWNpdHk9XCIwLjIwODg5OTQ1N1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg3MS4wMDAwMDAsIDAuMDAwMDAwKVwiIGZpbGxSdWxlPVwibm9uemVyb1wiPlxuICAgICAgICAgIDxwb2x5Z29uIGlkPVwiU2hhcGVcIiBmaWxsPVwiIzM0MzQzNFwiIHBvaW50cz1cIjEyNy45NjExIDAgMTI1LjE2NjEgOS41IDEyNS4xNjYxIDI4NS4xNjggMTI3Ljk2MTEgMjg3Ljk1OCAyNTUuOTIzMSAyMTIuMzJcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjOEM4QzhDXCIgcG9pbnRzPVwiMTI3Ljk2MiAwIDAgMjEyLjMyIDEyNy45NjIgMjg3Ljk1OSAxMjcuOTYyIDE1NC4xNThcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjM0MzQzNCXCIgcG9pbnRzPVwiMTI3Ljk2MTEgMzEyLjE4NjYgMTI2LjM4NjEgMzE0LjEwNjYgMTI2LjM4NjEgNDEyLjMwNTYgMTI3Ljk2MTEgNDE2LjkwNjYgMjU1Ljk5OTEgMjM2LjU4NjZcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjOEM4QzhDXCIgcG9pbnRzPVwiMTI3Ljk2MiA0MTYuOTA1MiAxMjcuOTYyIDMxMi4xODUyIDAgMjM2LjU4NTJcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMTQxNDE0XCIgcG9pbnRzPVwiMTI3Ljk2MTEgMjg3Ljk1NzcgMjU1LjkyMTEgMjEyLjMyMDcgMTI3Ljk2MTEgMTU0LjE1ODdcIj48L3BvbHlnb24+XG4gICAgICAgICAgPHBvbHlnb24gaWQ9XCJTaGFwZVwiIGZpbGw9XCIjMzkzOTM5XCIgcG9pbnRzPVwiMC4wMDA5IDIxMi4zMjA4IDEyNy45NjA5IDI4Ny45NTc4IDEyNy45NjA5IDE1NC4xNTg4XCI+PC9wb2x5Z29uPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGlkPVwiaWNfZG9fbm90X2Rpc3R1cmJcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEwLjAwMDAwMClcIj48L2c+XG4gICAgICAgIDxwb2x5Z29uIGlkPVwiQm91bmRzXCIgcG9pbnRzPVwiMCAxMCAzOTcuMjIxMzY5IDEwIDM5Ny4yMjEzNjkgNDA3LjIyMTM2OSAwIDQwNy4yMjEzNjlcIj48L3BvbHlnb24+XG4gICAgICAgIDxnIGlkPVwiSWNvblwiPlxuICAgICAgICAgIDx1c2UgZmlsbD1cIiNGRkUxREVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiB4bGlua0hyZWY9XCIjcGF0aC0xXCI+PC91c2U+XG4gICAgICAgICAgPHBhdGggc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZVdpZHRoPVwiNlwiIGQ9XCJNMTk4LjYxMDY4NSw0Ni4xMDE3ODA4IEMyODguMzE0NzQ1LDQ2LjEwMTc4MDggMzYxLjExOTU4OCwxMTguOTA2NjI0IDM2MS4xMTk1ODgsMjA4LjYxMDY4NSBDMzYxLjExOTU4OCwyOTguMzE0NzQ1IDI4OC4zMTQ3NDUsMzcxLjExOTU4OCAxOTguNjEwNjg1LDM3MS4xMTk1ODggQzEwOC45MDY2MjQsMzcxLjExOTU4OCAzNi4xMDE3ODA4LDI5OC4zMTQ3NDUgMzYuMTAxNzgwOCwyMDguNjEwNjg1IEMzNi4xMDE3ODA4LDExOC45MDY2MjQgMTA4LjkwNjYyNCw0Ni4xMDE3ODA4IDE5OC42MTA2ODUsNDYuMTAxNzgwOCBaIE0xOTguNjEwNjg1LDM0NC4wMTc4MDggQzEyMy43OTg4OTUsMzQ0LjAxNzgwOCA2My4yMDM1NjE1LDI4My40MjI0NzQgNjMuMjAzNTYxNSwyMDguNjEwNjg1IEM2My4yMDM1NjE1LDE3OC4wNzc0NDIgNzMuMzczNjcxNCwxNDkuMTQ1MjMzIDkxLjgxNTAwNDksMTI1LjY1ODYyOSBMOTMuOTA0MDAwNywxMjIuOTk4MTE1IEwyODQuMjIzMjU0LDMxMy4zMTczNjggTDI4MS41NjI3NCwzMTUuNDA2MzY0IEMyNTguMDc2MTM2LDMzMy44NDc2OTggMjI5LjE0MzkyNywzNDQuMDE3ODA4IDE5OC42MTA2ODUsMzQ0LjAxNzgwOCBaIE0zMDMuMzE3MzY4LDI5NC4yMjMyNTQgTDExMi45OTgxMTUsMTAzLjkwNDAwMSBMMTE1LjY1ODYyOSwxMDEuODE1MDA1IEMxMzkuMTQ1MjMzLDgzLjM3MzY3MTQgMTY4LjA3NzQ0Miw3My4yMDM1NjE1IDE5OC42MTA2ODUsNzMuMjAzNTYxNSBDMjczLjQyMjQ3NCw3My4yMDM1NjE1IDMzNC4wMTc4MDgsMTMzLjc5ODg5NSAzMzQuMDE3ODA4LDIwOC42MTA2ODUgQzMzNC4wMTc4MDgsMjM5LjE0MzkyNyAzMjMuODQ3Njk4LDI2OC4wNzYxMzYgMzA1LjQwNjM2NCwyOTEuNTYyNzQgTDMwMy4zMTczNjgsMjk0LjIyMzI1NCBaXCI+PC9wYXRoPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L3N2Zz5cbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJY29uTm9XZWIzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0ljb25Ob1dlYjMuanN4IiwibW9kdWxlLmV4cG9ydHMgPSBgXG4uV2ViM1Byb3ZpZGVyLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsO1xuICBjb2xvcjogaHNsKDAsMCUsNTAlKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTUlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoaHNsKDAsIDAlLCAxMDAlKSwgaHNsKDAsIDAlLCA5NSUpKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGhzbCgwLCAwJSwgMTAwJSksIGhzbCgwLCAwJSwgOTUlKSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChoc2woMCwgMCUsIDEwMCUpLCBoc2woMCwgMCUsIDk1JSkpO1xufVxuLldlYjNQcm92aWRlci13cmFwcGVyIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjA3LCA5MCUsIDU0JSk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCA0MHB4O1xuICBtYXJnaW46IDgwcHggYXV0bztcbn1cbi5XZWIzUHJvdmlkZXItaW1hZ2Uge1xuICBtYXgtaGVpZ2h0OiAxNzVweDtcbn1cbi5XZWIzUHJvdmlkZXItdGl0bGUge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBjb2xvcjogaHNsKDAsMCUsMjUlKTtcbn1cbi5XZWIzUHJvdmlkZXItbWVzc2FnZSB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBoc2woMCwwJSw1MCUpO1xufVxuXG4ud2ViM0Nvbm5lY3RCdXR0b24ge1xuXHQtbW96LWJveC1zaGFkb3c6aW5zZXQgMHB4IC0zcHggN3B4IDBweCAjMjliYmZmO1xuXHQtd2Via2l0LWJveC1zaGFkb3c6aW5zZXQgMHB4IC0zcHggN3B4IDBweCAjMjliYmZmO1xuXHRib3gtc2hhZG93Omluc2V0IDBweCAtM3B4IDdweCAwcHggIzI5YmJmZjtcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICMyZGFiZjkpLCBjb2xvci1zdG9wKDEsICMwNjg4ZmEpKTtcblx0YmFja2dyb3VuZDotbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMyZGFiZjkgNSUsICMwNjg4ZmEgMTAwJSk7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMmRhYmY5IDUlLCAjMDY4OGZhIDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMyZGFiZjkgNSUsICMwNjg4ZmEgMTAwJSk7XG5cdGJhY2tncm91bmQ6LW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICMyZGFiZjkgNSUsICMwNjg4ZmEgMTAwJSk7XG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzJkYWJmOSA1JSwgIzA2ODhmYSAxMDAlKTtcblx0ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjMmRhYmY5JywgZW5kQ29sb3JzdHI9JyMwNjg4ZmEnLEdyYWRpZW50VHlwZT0wKTtcblx0YmFja2dyb3VuZC1jb2xvcjojMmRhYmY5O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6M3B4O1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6M3B4O1xuXHRib3JkZXItcmFkaXVzOjNweDtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdGN1cnNvcjpwb2ludGVyO1xuXHRjb2xvcjojZmZmZmZmO1xuXHRmb250LWZhbWlseTpBcmlhbDtcblx0Zm9udC1zaXplOjE1cHg7XG5cdHBhZGRpbmc6OXB4IDIzcHg7XG5cdHRleHQtZGVjb3JhdGlvbjpub25lO1xuXHR0ZXh0LXNoYWRvdzowcHggMXB4IDBweCAjMjYzNjY2O1xufVxuLndlYjNDb25uZWN0QnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZDotd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMDUsICMwNjg4ZmEpLCBjb2xvci1zdG9wKDEsICMyZGFiZjkpKTtcblx0YmFja2dyb3VuZDotbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMwNjg4ZmEgNSUsICMyZGFiZjkgMTAwJSk7XG5cdGJhY2tncm91bmQ6LXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMDY4OGZhIDUlLCAjMmRhYmY5IDEwMCUpO1xuXHRiYWNrZ3JvdW5kOi1vLWxpbmVhci1ncmFkaWVudCh0b3AsICMwNjg4ZmEgNSUsICMyZGFiZjkgMTAwJSk7XG5cdGJhY2tncm91bmQ6LW1zLWxpbmVhci1ncmFkaWVudCh0b3AsICMwNjg4ZmEgNSUsICMyZGFiZjkgMTAwJSk7XG5cdGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzA2ODhmYSA1JSwgIzJkYWJmOSAxMDAlKTtcblx0ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjMDY4OGZhJywgZW5kQ29sb3JzdHI9JyMyZGFiZjknLEdyYWRpZW50VHlwZT0wKTtcblx0YmFja2dyb3VuZC1jb2xvcjojMDY4OGZhO1xufVxuLndlYjNDb25uZWN0QnV0dG9uOmFjdGl2ZSB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xuXHR0b3A6MXB4O1xufVxuXG5gO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlc2hlZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBJY29uTm9XZWIzID0gcmVxdWlyZSgnLi9JY29uTm9XZWIzJyk7XG5jb25zdCBzdHlsZXNoZWV0ID0gcmVxdWlyZSgnLi9zdHlsZXNoZWV0Jyk7XG5cbmZ1bmN0aW9uIEVycm9yVGVtcGxhdGUocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1jb250YWluZXJcIj5cbiAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0eWxlc2hlZXQgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiV2ViM1Byb3ZpZGVyLWltYWdlXCI+XG4gICAgICAgICAgPEljb25Ob1dlYjMgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMVxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci10aXRsZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy50aXRsZSB9fVxuICAgICAgICAvPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1tZXNzYWdlXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLm1lc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JUZW1wbGF0ZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FcnJvclRlbXBsYXRlLmpzeCIsImNvbnN0IFdlYjNQcm92aWRlciA9IHJlcXVpcmUoJy4vV2ViM1Byb3ZpZGVyJyk7XG5jb25zdCBFcnJvclRlbXBsYXRlID0gcmVxdWlyZSgnLi9FcnJvclRlbXBsYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzLldlYjNQcm92aWRlciA9IFdlYjNQcm92aWRlcjtcbm1vZHVsZS5leHBvcnRzLkVycm9yVGVtcGxhdGUgPSBFcnJvclRlbXBsYXRlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2ViM1Byb3ZpZGVyLFxuICBFcnJvclRlbXBsYXRlXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuY29uc3QgaXNFbXB0eSA9IHJlcXVpcmUoJ2xvZGFzaC9pc0VtcHR5Jyk7XG5jb25zdCByYW5nZSA9IHJlcXVpcmUoJ2xvZGFzaC9yYW5nZScpO1xuY29uc3QgQWNjb3VudFVuYXZhaWxhYmxlID0gcmVxdWlyZSgnLi9Mb2dpbicpO1xuY29uc3QgV2ViM1VuYXZhaWxhYmxlID0gcmVxdWlyZSgnLi9XZWIzVW5hdmFpbGFibGUnKTtcblxuY29uc3QgT05FX1NFQ09ORCA9IDEwMDA7XG5jb25zdCBPTkVfTUlOVVRFID0gT05FX1NFQ09ORCAqIDYwO1xuY29uc3QgcHJvcFR5cGVzID0ge1xuICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFByb3BUeXBlcy5hbnksXG4gIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogUHJvcFR5cGVzLmFueSxcbiAgb25DaGFuZ2VBY2NvdW50OiBQcm9wVHlwZXMuZnVuY1xufTtcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgcGFzc2l2ZTogZmFsc2UsXG4gIHdlYjNVbmF2YWlsYWJsZVNjcmVlbjogV2ViM1VuYXZhaWxhYmxlLFxuICBhY2NvdW50VW5hdmFpbGFibGVTY3JlZW46IEFjY291bnRVbmF2YWlsYWJsZSxcbn07XG5jb25zdCBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgd2ViMzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBhY2NvdW50czogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlbGVjdGVkQWNjb3VudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXR3b3JrOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG5ldHdvcmtJZDogUHJvcFR5cGVzLnN0cmluZ1xuICB9KVxufTtcblxuY2xhc3MgV2ViM1Byb3ZpZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgY29uc3QgYWNjb3VudHMgPSB0aGlzLmdldEFjY291bnRzKCk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWNjb3VudHMsXG4gICAgICBuZXR3b3JrSWQ6IG51bGwsXG4gICAgICBuZXR3b3JrRXJyb3I6IG51bGxcbiAgICB9O1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xuICAgIHRoaXMubmV0d29ya0ludGVydmFsID0gbnVsbDtcbiAgICB0aGlzLmZldGNoQWNjb3VudHMgPSB0aGlzLmZldGNoQWNjb3VudHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZldGNoTmV0d29yayA9IHRoaXMuZmV0Y2hOZXR3b3JrLmJpbmQodGhpcyk7XG5cbiAgICBpZiAoYWNjb3VudHMpIHtcbiAgICAgIHRoaXMuaGFuZGxlQWNjb3VudHMoYWNjb3VudHMsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2ViMzoge1xuICAgICAgICBhY2NvdW50czogdGhpcy5zdGF0ZS5hY2NvdW50cyxcbiAgICAgICAgc2VsZWN0ZWRBY2NvdW50OiB0aGlzLnN0YXRlLmFjY291bnRzICYmIHRoaXMuc3RhdGUuYWNjb3VudHNbMF0sXG4gICAgICAgIG5ldHdvcms6IGdldE5ldHdvcmsodGhpcy5zdGF0ZS5uZXR3b3JrSWQpLFxuICAgICAgICBuZXR3b3JrSWQ6IHRoaXMuc3RhdGUubmV0d29ya0lkXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCBwb2xsaW5nIGFjY291bnRzLCAmIG5ldHdvcmsuIFdlIHBvbGwgaW5kZWZpbml0ZWx5IHNvIHRoYXQgd2UgY2FuXG4gICAqIHJlYWN0IHRvIHRoZSB1c2VyIGNoYW5naW5nIGFjY291bnRzIG9yIG5ldG93cmtzLlxuICAgKi9cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5mZXRjaE5ldHdvcmsoKTtcbiAgICB0aGlzLmluaXRQb2xsKCk7XG4gICAgdGhpcy5pbml0TmV0d29ya1BvbGwoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IHdlYjMvYWNjb3VudCBwb2xsaW5nLCBhbmQgcHJldmVudCBkdXBsaWNhdGUgaW50ZXJ2YWwuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBpbml0UG9sbCgpIHtcbiAgICBpZiAoIXRoaXMuaW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmZldGNoQWNjb3VudHMsIE9ORV9TRUNPTkQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0IG5ldHdvcmsgcG9sbGluZywgYW5kIHByZXZlbnQgZHVwbGljYXRlIGludGVydmFscy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGluaXROZXR3b3JrUG9sbCgpIHtcbiAgICBpZiAoIXRoaXMubmV0d29ya0ludGVydmFsKSB7XG4gICAgICB0aGlzLm5ldHdvcmtJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuZmV0Y2hOZXR3b3JrLCBPTkVfTUlOVVRFKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVxdWVzdCBsb2dpbiBmcm9tIHVzZXJzIGZvciBFSVAgMTEwMiBwcml2YWN5IHN1cHBvcnRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlcXVlc3RMb2dpbigpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcbiAgICBjb25zdCBldGhBY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIGlmIChpc0VtcHR5KGV0aEFjY291bnRzKSkge1xuICAgICAgd2luZG93LmV0aGVyZXVtICYmIGV0aGVyZXVtLmVuYWJsZSgpXG4gICAgICAudGhlbihhY2NvdW50cyA9PiB0aGlzLmhhbmRsZUFjY291bnRzKGFjY291bnRzKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjY291bnRzRXJyb3I6IGVyclxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUFjY291bnRzKGV0aEFjY291bnRzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0YXRlIHJlZ2FyZGluZyB0aGUgYXZhaWxhYmlsaXR5IG9mIHdlYjMgYW5kIGFuIEVUSCBhY2NvdW50LlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgZmV0Y2hBY2NvdW50cygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcbiAgICBjb25zdCBldGhBY2NvdW50cyA9IHRoaXMuZ2V0QWNjb3VudHMoKTtcblxuICAgIGlmIChpc0VtcHR5KGV0aEFjY291bnRzKSkge1xuICAgICAgd2ViMyAmJiB3ZWIzLmN1cnJlbnRQcm92aWRlciAmJiB3ZWIzLmN1cnJlbnRQcm92aWRlci5zZW5kQXN5bmMoe1xuICAgICAgICBcImpzb25ycGNcIjpcIjIuMFwiLFwibWV0aG9kXCI6XCJldGhfYWNjb3VudHNcIiwgXCJwYXJhbXNcIjpbXVxuICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKGVyciB8fCByZXNwb25zZS5lcnJvcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjY291bnRzRXJyb3I6IGVyclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVBY2NvdW50cyhyZXNwb25zZS5yZXN1bHQpXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUFjY291bnRzKGFjY291bnRzLCBpc0NvbnN0cnVjdG9yID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlQWNjb3VudCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHN0b3JlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgbGV0IG5leHQgPSBhY2NvdW50c1swXTtcbiAgICBsZXQgY3VyciA9IHRoaXMuc3RhdGUuYWNjb3VudHNbMF07XG4gICAgbmV4dCA9IG5leHQgJiYgbmV4dC50b0xvd2VyQ2FzZSgpO1xuICAgIGN1cnIgPSBjdXJyICYmIGN1cnIudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBkaWRDaGFuZ2UgPSBjdXJyICYmIG5leHQgJiYgKGN1cnIgIT09IG5leHQpO1xuXG4gICAgaWYgKGlzRW1wdHkodGhpcy5zdGF0ZS5hY2NvdW50cykgJiYgIWlzRW1wdHkoYWNjb3VudHMpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYWNjb3VudHM6IGFjY291bnRzXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoZGlkQ2hhbmdlICYmICFpc0NvbnN0cnVjdG9yKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYWNjb3VudHNFcnJvcjogbnVsbCxcbiAgICAgICAgYWNjb3VudHNcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElmIHByb3ZpZGVkLCBleGVjdXRlIGNhbGxiYWNrXG4gICAgaWYgKGRpZENoYW5nZSAmJiB0eXBlb2Ygb25DaGFuZ2VBY2NvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNoYW5nZUFjY291bnQobmV4dCk7XG4gICAgfVxuXG4gICAgLy8gSWYgYXZhaWxhYmxlLCBkaXNwYXRjaCByZWR1eCBhY3Rpb25cbiAgICBpZiAoc3RvcmUgJiYgdHlwZW9mIHN0b3JlLmRpc3BhdGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBkaWRMb2dpbiA9ICFjdXJyICYmIG5leHQ7XG4gICAgICBjb25zdCBkaWRMb2dvdXQgPSBjdXJyICYmICFuZXh0O1xuXG4gICAgICBpZiAoZGlkTG9nb3V0KSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9MT0dPVVQnLFxuICAgICAgICAgIGFkZHJlc3M6IG51bGxcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoZGlkTG9naW4gfHwgKGlzQ29uc3RydWN0b3IgJiYgbmV4dCkpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgIHR5cGU6ICd3ZWIzL1JFQ0VJVkVfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZGlkQ2hhbmdlKSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiAnd2ViMy9DSEFOR0VfQUNDT1VOVCcsXG4gICAgICAgICAgYWRkcmVzczogbmV4dFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5ldHdvcmsgYW5kIHVwZGF0ZSBzdGF0ZSBhY2NvcmRpbmdseS5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGZldGNoTmV0d29yaygpIHtcbiAgICBjb25zdCB7IHdlYjMgfSA9IHdpbmRvdztcblxuICAgIGlmICh3ZWIzKSB7XG4gICAgICBjb25zdCBpc1YxID0gL14xLy50ZXN0KHdlYjMudmVyc2lvbik7XG4gICAgICBjb25zdCBnZXROZXR3b3JrID0gaXNWMSA/IHdlYjMuZXRoLm5ldC5nZXRJZCA6IHdlYjMudmVyc2lvbi5nZXROZXR3b3JrO1xuXG4gICAgICBnZXROZXR3b3JrKChlcnIsIG5ldElkKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5ldHdvcmtFcnJvcjogZXJyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG5ldElkICE9IHRoaXMuc3RhdGUubmV0d29ya0lkKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgbmV0d29ya0Vycm9yOiBudWxsLFxuICAgICAgICAgICAgICBuZXR3b3JrSWQ6IG5ldElkXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBhY2NvdW50LiBXZSB3cmFwIGluIHRyeS9jYXRjaCBiZWNhdXNlIHJlYWRpbmcgYHdlYjMuZXRoLmFjY291bnRzYFxuICAgKiB3aWxsIHRocm93IGlmIG5vIGFjY291bnQgaXMgc2VsZWN0ZWQuXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGdldEFjY291bnRzKCkge1xuICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuICAgICAgY29uc3QgaXNWMSA9IC9eMS8udGVzdCh3ZWIzLnZlcnNpb24pO1xuICAgICAgLy8gdGhyb3dzIGlmIG5vIGFjY291bnQgc2VsZWN0ZWRcbiAgICAgIGNvbnN0IGdldFYxV2FsbGV0cyA9ICgpID0+IHJhbmdlKHdlYjMuZXRoLmFjY291bnRzLndhbGxldC5sZW5ndGgpLm1hcChpID0+IHdlYjMuZXRoLmFjY291bnRzLndhbGxldFtpXSkubWFwKHcgPT4gdy5hZGRyZXNzKTtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gaXNWMSA/IGdldFYxV2FsbGV0cygpIDogd2ViMy5ldGguYWNjb3VudHM7XG5cbiAgICAgIHJldHVybiBhY2NvdW50cztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgd2ViMyB9ID0gd2luZG93O1xuICAgIGNvbnN0IHtcbiAgICAgIHBhc3NpdmUsXG4gICAgICB3ZWIzVW5hdmFpbGFibGVTY3JlZW46IFdlYjNVbmF2YWlsYWJsZUNvbXBvbmVudCxcbiAgICAgIGFjY291bnRVbmF2YWlsYWJsZVNjcmVlbjogQWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhc3NpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIGlmICghd2ViMykge1xuICAgICAgcmV0dXJuIDxXZWIzVW5hdmFpbGFibGVDb21wb25lbnQgLz47XG4gICAgfVxuXG4gICAgaWYgKGlzRW1wdHkodGhpcy5zdGF0ZS5hY2NvdW50cykpIHtcbiAgICAgIHJldHVybiA8QWNjb3VudFVuYXZhaWxhYmxlQ29tcG9uZW50XG4gICAgICAgIHJlcXVlc3RMb2dpbj17IHRoaXMucmVxdWVzdExvZ2luLmJpbmQodGhpcykgfVxuICAgICAgLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn1cblxuV2ViM1Byb3ZpZGVyLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbldlYjNQcm92aWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5XZWIzUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBXZWIzUHJvdmlkZXI7XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG49ICAgIERlcHNcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5mdW5jdGlvbiBnZXROZXR3b3JrKG5ldHdvcmtJZCkge1xuICBzd2l0Y2ggKG5ldHdvcmtJZCkge1xuICAgIGNhc2UgJzEnOlxuICAgICAgcmV0dXJuICdNQUlOTkVUJztcbiAgICBjYXNlICcyJzpcbiAgICAgIHJldHVybiAnTU9SREVOJztcbiAgICBjYXNlICczJzpcbiAgICAgIHJldHVybiAnUk9QU1RFTic7XG4gICAgY2FzZSAnNCc6XG4gICAgICByZXR1cm4gJ1JJTktFQlknO1xuICAgIGNhc2UgJzQyJzpcbiAgICAgIHJldHVybiAnS09WQU4nO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ1VOS05PV04nO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvV2ViM1Byb3ZpZGVyLmpzeCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2lzRW1wdHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFbXB0eVwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC9yYW5nZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImxvZGFzaC9yYW5nZVwiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEljb25Ob1dlYjMgPSByZXF1aXJlKCcuL0ljb25Ob1dlYjMnKTtcbmNvbnN0IHN0eWxlc2hlZXQgPSByZXF1aXJlKCcuL3N0eWxlc2hlZXQnKTtcblxubGV0IHJlcXVlc3RMb2dpblxuZnVuY3Rpb24gTG9naW5WaWV3KHByb3BzKSB7XG4gIHJlcXVlc3RMb2dpbiA9IHByb3BzLnJlcXVlc3RMb2dpbi5iaW5kKHRoaXMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItY29udGFpbmVyXCI+XG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdHlsZXNoZWV0IH19XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIldlYjNQcm92aWRlci1pbWFnZVwiPlxuICAgICAgICAgIDxJY29uTm9XZWIzIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDFcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItdGl0bGVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogJ05vIEVUSCBBY2NvdW50IEF2YWlsYWJsZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9XCJXZWIzUHJvdmlkZXItbWVzc2FnZVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnWW91IGFyZSBub3QgeWV0IGxvZ2dlZCBpbi4nIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3ZWIzQ29ubmVjdEJ1dHRvblwiIG9uQ2xpY2s9e3JlcXVlc3RMb2dpbn0+XG4gICAgICAgICAgICBDb25uZWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMb2dpblZpZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTG9naW4uanN4IiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgRXJyb3JUZW1wbGF0ZSA9IHJlcXVpcmUoJy4vRXJyb3JUZW1wbGF0ZScpO1xuXG5jb25zdCBXZWIzVW5hdmFpbGFibGUgPSBFcnJvclRlbXBsYXRlLmJpbmQobnVsbCwge1xuICB0aXRsZTogJ1dlYjMgTm90IEZvdW5kJyxcbiAgbWVzc2FnZTogYFxuSXQgc2VlbXMgdGhhdCB5b3UgYXJlIHVzaW5nIGEgYnJvd3NlciB3aXRob3V0IFdlYjMgY2FwYWJpbGl0aWVzLiBQbGVhc2Vcbm1ha2Ugc3VyZSB0aGF0IHlvdSBhcmUgdXNpbmcgYSB3ZWIzLWNhcGFibGUgYnJvd3NlciBsaWtlIG1pc3Qgb3IgcGFyaXR5LlxuSWYgeW91IGFyZSB1c2luZyBNZXRhTWFzayBvciBQYXJpdHkgZXh0ZW5zaW9uLCBtYWtlIHN1cmUgdGhhdCBpdCBpc1xuZW5hYmxlZC5cbmBcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYjNVbmF2YWlsYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9XZWIzVW5hdmFpbGFibGUuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==