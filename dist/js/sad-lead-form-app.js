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
})({"PMAL":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SadLeadFormTemplate = /*#__PURE__*/function () {
  function SadLeadFormTemplate(rgpdDescription, providerConfig, sourceConfig) {
    _classCallCheck(this, SadLeadFormTemplate);

    this._rgpdDescription = rgpdDescription;
    this._providerSelectorTemplate = this.getProviderTemplate(providerConfig);
    this._campaignsSelectorTemplate = this.getCampaignsTemplate(sourceConfig);
  }

  _createClass(SadLeadFormTemplate, [{
    key: "getProviderTemplate",
    value: function getProviderTemplate(providerConfig) {
      if (!providerConfig) {
        return "";
      }

      var options = '';

      var _iterator = _createForOfIteratorHelper(providerConfig.selections),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var provider = _step.value;
          options += "<option value=\"".concat(provider.code, "\">").concat(provider.name, "</option>");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return "\n    <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-provider\">\n            <label class=\"sad-lead-form-label\"><span class=\"sad-lead-form-text-inline\">Point de vente<sup>*</sup></span></label>\n            <select name=\"provider\" class=\"sad-lead-form-select\">\n                <option selected value=\"\">-</option>\n                ".concat(options, "\n            </select>\n\n            <div class=\"sad-lead-form-error\">\n                Ce champ est obligatoire.\n            </div>\n        </div>");
    }
  }, {
    key: "getCampaignsTemplate",
    value: function getCampaignsTemplate(sourceConfig) {
      if (!sourceConfig) {
        return "";
      }

      var options = '';

      var _iterator2 = _createForOfIteratorHelper(sourceConfig.campaigns),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var campaign = _step2.value;
          options += "<option value=\"".concat(campaign.code, "\">").concat(campaign.name, "</option>");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return "\n    <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-provider\">\n            <label class=\"sad-lead-form-label\"><span class=\"sad-lead-form-text-inline\">Campagne<sup>*</sup></span></label>\n            <select name=\"campaign\" class=\"sad-lead-form-select\">\n                <option selected value=\"\">-</option>\n                ".concat(options, "\n            </select>\n\n            <div class=\"sad-lead-form-error\">\n                Ce champ est obligatoire.\n            </div>\n        </div>");
    }
  }, {
    key: "getApplicationTemplate",
    value: function getApplicationTemplate() {
      return "\n<form action=\"#\" class=\"sad-lead-form\" id=\"js-sad-lead-form\">\n    <!-- ------------------\n     Left column\n    ------------------- -->\n    <div class=\"sad-lead-form__column sad-lead-form__column--half\">\n        <!-- ------------------\n         Je suis : applicant.lastname\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-i-am\">\n            <label class=\"sad-lead-form-label\"><span class=\"sad-lead-form-text-inline\">Je suis<sup>*</sup></span></label>\n            <select name=\"applicant.gender\" class=\"sad-lead-form-select\">\n                <option selected value=\"\">-</option>\n                <option value=\"M\">M.</option>\n                <option value=\"F\">Mme</option>\n            </select>\n\n            <div class=\"sad-lead-form-error\">\n                Ce champ est obligatoire.\n            </div>\n        </div>\n\n        <!-- ------------------\n         Nom : applicant.lastname\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-lastname\">\n            <label class=\"sad-lead-form-label\" for=\"applicant-lastname\"><span class=\"sad-lead-form-text-inline\">Nom<sup>*</sup></span></label>\n            <input class=\"sad-lead-form-input\" id=\"applicant-lastname\" name=\"applicant.lastname\" type=\"text\" autocorrect=\"off\" autocomplete=\"family-name\" placeholder=\"Nom\">\n\n            <div class=\"sad-lead-form-error\" id=\"js-sad-lead-form-field-lastname-error-message\">\n                Ce champ est obligatoire.\n            </div>\n        </div>\n\n        <!-- ------------------\n         Pr\xE9nom : applicant.lastname\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-first-name\">\n            <label class=\"sad-lead-form-label\" for=\"applicant-firstname\"><span class=\"sad-lead-form-text-inline\">Pr\xE9nom<sup>*</sup></span></label>\n            <input class=\"sad-lead-form-input\" id=\"applicant-firstname\" name=\"applicant.firstname\" type=\"text\" autocorrect=\"off\" autocomplete=\"family-name\" placeholder=\"Pr\xE9nom\">\n\n            <div class=\"sad-lead-form-error\" id=\"js-sad-lead-form-field-firstname-error-message\">\n                Ce champ est obligatoire.\n            </div>\n        </div>\n\n        <!-- ------------------\n         Je souhaite des informations : applicant.relation\n        ------------------- -->\n        <div class=\"sad-lead-form-control\">\n            <label for=\"applicant-relation\" class=\"sad-lead-form-label\">Je souhaite des informations</label>\n            <select id=\"applicant-relation\" name=\"applicant.relation\" class=\"sad-lead-form-select\">\n                <option value=\"himself\" selected>Pour moi</option>\n                <option value=\"other\">Pour un proche</option>\n            </select>\n        </div>\n    </div>\n\n    <!-- ------------------\n     Right column\n    ------------------- -->\n    <div class=\"sad-lead-form__column sad-lead-form__column--half\">\n\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-media\">\n            <label class=\"sad-lead-form-label\">\n                Je souhaite&nbsp;:\n            </label>\n\n            <div class=\"sad-lead-form-error\">\n                Merci de renseigner au moins un num\xE9ro de t\xE9l\xE9phone ou une adresse mail\n            </div>\n        </div>\n\n        <!-- ------------------\n         Phone : applicant.phoneNumber\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-phone\">\n            <input class=\"sad-lead-form-control__input\" id=\"js-sad-lead-form-phone-toggle\" type=\"checkbox\" data-sad-lead-form-conditional-display-toggle=\"applicant.phoneNumber\">\n            <label class=\"sad-lead-form-control__label\" for=\"js-sad-lead-form-phone-toggle\">\xCAtre rappel\xE9</label>\n        </div>\n        <div class=\"sad-lead-form-control sad--hidden\" data-sad-lead-form-conditional-display-target=\"applicant.phoneNumber\">\n            <input class=\"sad-lead-form-input sad--hidden\" data-sad-lead-form-conditional-display-target=\"applicant.phoneNumber\" name=\"applicant.phoneNumber\" placeholder=\"Saisissez votre num\xE9ro de t\xE9l\xE9phone \" type=\"number\" autocorrect=\"off\" autocomplete=\"tel\">\n\n            <div class=\"sad-lead-form-error\" id=\"js-sad-lead-form-field-phone-error-message\"></div>\n        </div>\n\n        <!-- ------------------\n         Je suis disponible : additionalInformation\n        ------------------- -->\n        <div class=\"sad-lead-form-control sad--hidden\" data-sad-lead-form-conditional-display-target=\"applicant.phoneNumber\">\n            <label class=\"sad-lead-form-label\">Je suis disponible</label>\n            <select class=\"sad-lead-form-select\" data-sad-lead-form-conditional-display-target=\"applicant.phoneNumber\" data-sad-lead-form-field-name-additional-information-as-array>\n                <option selected value=\"\">-</option>\n                <option value=\"Le matin\">Le matin</option>\n                <option value=\"L\u2019apr\xE8s-midi\">L\u2019apr\xE8s-midi</option>\n                <option value=\"Toute la journ\xE9e\">Toute la journ\xE9e</option>\n            </select>\n        </div>\n\n        <!-- ------------------\n         E-mail : applicant.email\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-email\">\n            <input class=\"sad-lead-form-control__input\" id=\"js-sad-lead-form-email-toggle\" type=\"checkbox\" data-sad-lead-form-conditional-display-toggle=\"applicant.email\">\n            <label class=\"sad-lead-form-control__label\" for=\"js-sad-lead-form-email-toggle\">Recevoir de la documentation par E-mail</label>\n        </div>\n        <div class=\"sad-lead-form-control sad--hidden\" data-sad-lead-form-conditional-display-target=\"applicant.email\">\n            <input class=\"sad-lead-form-input sad--hidden\" data-sad-lead-form-conditional-display-target=\"applicant.email\" name=\"applicant.email\" type=\"email\" autocapitalize=\"off\" autocorrect=\"off\" autocomplete=\"email\" placeholder=\"Saisissez votre adresse e-mail\">\n\n            <div class=\"sad-lead-form-error\" id=\"js-sad-lead-form-field-email-error-message\"></div>\n        </div>\n\n        <!-- ------------------\n         Address : applicant.address.xxx\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-address\">\n            <input class=\"sad-lead-form-control__input\" id=\"js-sad-lead-form-address-toggle\" type=\"checkbox\" data-sad-lead-form-conditional-display-toggle=\"applicant.address\">\n            <label class=\"sad-lead-form-control__label\" for=\"js-sad-lead-form-address-toggle\">Recevoir de la documentation par courrier</label>\n        </div>\n        <div class=\"sad-lead-form-control sad--hidden\" data-sad-lead-form-conditional-display-target=\"applicant.address\">\n            <input class=\"sad-lead-form-input sad--hidden sad-uppercase\" data-sad-lead-form-conditional-display-target=\"applicant.address\" name=\"applicant.address.l2\" placeholder=\"Appt / Esc / Etage\" type=\"text\" autocorrect=\"off\">\n            <input class=\"sad-lead-form-input sad--hidden sad-uppercase\" data-sad-lead-form-conditional-display-target=\"applicant.address\" name=\"applicant.address.l3\" placeholder=\"B\xE2timent/R\xE9sidence\" type=\"text\" autocorrect=\"off\">\n            <input class=\"sad-lead-form-input sad--hidden sad-uppercase\" data-sad-lead-form-conditional-display-target=\"applicant.address\" name=\"applicant.address.l4\" placeholder=\"Adresse\" type=\"text\" autocorrect=\"off\" autocomplete=\"address-line1\">\n\n            <div class=\"sad-lead-form-flex__container\">\n                <div class=\"sad-lead-form-flex__element sad-lead-form-width-382pc\">\n                    <input class=\"sad-lead-form-input sad--hidden sad-uppercase\" data-sad-lead-form-conditional-display-target=\"applicant.address\" name=\"applicant.address.zipcode\" placeholder=\"Code Postal\" type=\"text\" pattern=\"\\d*\" novalidate autocorrect=\"off\" autocomplete=\"postal-code\">\n                </div>\n\n                <div class=\"sad-lead-form-flex__element sad-lead-form-width-flex-grow-1\">\n                    <input class=\"sad-lead-form-input sad--hidden sad-uppercase\" data-sad-lead-form-conditional-display-target=\"applicant.address\" name=\"applicant.address.city\" placeholder=\"Ville\" type=\"text\" autocorrect=\"off\" autocomplete=\"address-level2\">\n                </div>\n            </div>\n\n             <div class=\"sad-lead-form-error\" id=\"js-sad-lead-form-field-zipcode-error-message\"></div>\n        </div>\n\n        <!-- ------------------\n         Provider\n        ------------------- -->\n        ".concat(this._providerSelectorTemplate, "\n\n        <!-- ------------------\n         Campaign\n        ------------------- -->\n        ").concat(this._campaignsSelectorTemplate, "\n    </div>\n\n    <div class=\"sad-lead-form__column sad-lead-form__column--full\">\n        <!-- ------------------\n         Informations compl\xE9mentaires : additionalInformation\n        ------------------- -->\n        <div class=\"sad-lead-form-control\">\n            <label class=\"sad-lead-form-label\" for=\"additionalInformation-line2\">Informations compl\xE9mentaires :</label>\n            <textarea class=\"sad-lead-form-input\" id=\"additionalInformation-line2\" rows=\"8\" cols=\"40\" data-sad-lead-form-field-name-additional-information-as-array></textarea>\n        </div>\n\n        <div class=\"sad-lead-form-control\">\n            <em><small><sup>*</sup> Mentions obligatoires</small></em>\n        </div>\n\n        <!-- ------------------\n         RGPD\n        ------------------- -->\n        <div class=\"sad-lead-form-control\" id=\"js-sad-lead-form-field-rgpd-container\">\n            <input class=\"sad-lead-form-control__input\" id=\"js-sad-lead-form-field-rgpd\" type=\"checkbox\">\n            <label class=\"sad-lead-form-control__label\" for=\"js-sad-lead-form-field-rgpd\">\n                <small>").concat(this._rgpdDescription, "</small>\n            </label>\n\n            <div class=\"sad-lead-form-error sad-pt-8\">\n                Autorisation obligatoire.\n            </div>\n        </div>\n    </div>\n\n    <div class=\"sad-lead-form__column sad-lead-form__column--half\">\n        <div class=\"sad-lead-form__submit-container\">\n            <!-- ------------------\n             Envoyer\n            ------------------- -->\n            <div class=\"sad-lead-form-text-center\" id=\"js-sad-lead-form-field-submit\">\n                <button type=\"submit\" class=\"sad-lead-form-button sad-lead-form__submit-button sad-lead-form-button--dark\" id=\"js-sad-lead-form-button-submit\">Envoyer</button>\n\n                <div class=\"sad-lead-form-error sad-pt-8\">\n                    Merci de compl\xE9ter les informations manquantes.\n                </div>\n            </div>\n        </div>\n    </div>\n</form>");
    }
  }]);

  return SadLeadFormTemplate;
}();

var _default = SadLeadFormTemplate;
exports.default = _default;
},{}],"dhlN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SadLeadFormValidator = /*#__PURE__*/function () {
  function SadLeadFormValidator() {
    _classCallCheck(this, SadLeadFormValidator);
  }

  _createClass(SadLeadFormValidator, [{
    key: "validateEmail",
    value: function validateEmail(email) {
      // eslint-disable-next-line no-useless-escape
      var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(String(email).toLowerCase());
    }
  }, {
    key: "validateFrenchPhoneNumber",
    value: function validateFrenchPhoneNumber(str) {
      return str.match(/^((\+)33|0)[1-9](\d{2}){4}$/g);
    }
  }, {
    key: "validateFrenchZipCode",
    value: function validateFrenchZipCode(str) {
      return str.match(/^(?:(?:(?:0[1-9]|[1-8]\d|9[0-5])(?:\d{3})?)|97[1-8]|98[4-9]|2[abAB])$/gm);
    }
  }, {
    key: "validateStringWithoutSpecialCharacters",
    value: function validateStringWithoutSpecialCharacters(str) {
      return str.match(/^[a-zA-Z\u00C0-\u00FF- ]*$/gm);
    }
  }]);

  return SadLeadFormValidator;
}();

var _default = SadLeadFormValidator;
exports.default = _default;
},{}],"TiX8":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SadLeadFormUtils = /*#__PURE__*/function () {
  function SadLeadFormUtils() {
    _classCallCheck(this, SadLeadFormUtils);
  }

  _createClass(SadLeadFormUtils, [{
    key: "deepenDotNotationObject",
    value: function deepenDotNotationObject(dotNotationObject) {
      var resultObject = {};
      var temporaryObjectReference; // eslint-disable-next-line guard-for-in,no-restricted-syntax

      for (var dotNotationObjectKey in dotNotationObject) {
        temporaryObjectReference = resultObject;
        var parts = dotNotationObjectKey.split('.');
        var nestedKeys = parts.pop();

        while (parts.length) {
          var part = parts.shift(); // eslint-disable-next-line no-multi-assign

          temporaryObjectReference = temporaryObjectReference[part] = temporaryObjectReference[part] || {};
        }

        temporaryObjectReference[nestedKeys] = dotNotationObject[dotNotationObjectKey];
      }

      return resultObject;
    }
  }]);

  return SadLeadFormUtils;
}();

var _default = SadLeadFormUtils;
exports.default = _default;
},{}],"U5mT":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sadLeadFormValidator = _interopRequireDefault(require("./sad-lead-form-validator"));

var _sadLeadFormUtils = _interopRequireDefault(require("./sad-lead-form-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SadLeadFormModel = /*#__PURE__*/function () {
  function SadLeadFormModel(config) {
    _classCallCheck(this, SadLeadFormModel);

    this._initElements();

    this._model = {};
    this._submitted = false;
    this._isValid = false;
    this._distributorCode = config.distributorCode;
    this._agencyCode = config.agencyCode;
    this._providerConfig = config.providerConfig;
    this._sourceConfig = config.sourceConfig;
    this._callback = config.callback;
    this._sadLeadFormUtils = new _sadLeadFormUtils.default();
    this._sadLeadFormValidator = new _sadLeadFormValidator.default();

    this._initEvents();

    window.sad = window.sad || {};
    window.sad.leadFormModelInstance = this;
  }

  _createClass(SadLeadFormModel, [{
    key: "getFormAsObject",
    value: function getFormAsObject() {
      if (this._submitted && this._isValid) {
        return this._getFormattedModel();
      }

      return {};
    }
  }, {
    key: "getFormAsJSON",
    value: function getFormAsJSON() {
      if (this._submitted && this._isValid) {
        return JSON.stringify(this._getFormattedModel(), null, 4);
      }

      return JSON.stringify({}, null, 4);
    }
  }, {
    key: "_getFormattedModel",
    value: function _getFormattedModel() {
      var formattedModel = JSON.parse(JSON.stringify(this._model));
      formattedModel.distributor = this._distributorCode;
      formattedModel.agency = this._agencyCode;

      if (this._providerConfig) {
        formattedModel.provider = {
          type: this._providerConfig.type,
          code: formattedModel.provider
        };
      }

      if (this._sourceConfig) {
        formattedModel.source = this._sourceConfig.sourceCode;
      }

      formattedModel.tags = ['Site Web Distributeur', 'No_vendor'];
      formattedModel.requestedActions = [];

      if (this._elements.toggle.email.checked || this._elements.toggle.address.checked) {
        formattedModel.requestedActions.push('send_subscription');
        formattedModel.requestedActions.push('send_brochures');
      }

      formattedModel.applicant.phoneNumbers = [];

      if (this._elements.toggle.phone.checked) {
        formattedModel.requestedActions.push('wants_to_be_called'); // Actually, we manage multiple phone numbers so we put the input phone number in an array named phoneNumbers

        formattedModel.applicant.phoneNumbers.push({
          countryCode: 33,
          nationalNumber: formattedModel.applicant.phoneNumber
        });
      }

      delete formattedModel.applicant.phoneNumber;

      if (this._elements.toggle.address.checked) {
        formattedModel.applicant.address.l2 = formattedModel.applicant.address.l2.toUpperCase();
        formattedModel.applicant.address.l3 = formattedModel.applicant.address.l3.toUpperCase();
        formattedModel.applicant.address.l4 = formattedModel.applicant.address.l4.toUpperCase();
        formattedModel.applicant.address.zipcode = formattedModel.applicant.address.zipcode.toUpperCase();
        formattedModel.applicant.address.city = formattedModel.applicant.address.city.toUpperCase();
      } else {
        delete formattedModel.applicant.address;
      }

      if (!this._elements.toggle.email.checked) {
        delete formattedModel.applicant.email;
      }

      if (formattedModel.applicant.relation === 'himself') {
        formattedModel.beneficiary = {
          gender: formattedModel.applicant.gender,
          lastname: formattedModel.applicant.lastname,
          firstname: formattedModel.applicant.firstname
        };

        if (formattedModel.applicant.hasOwnProperty('email')) {
          formattedModel.beneficiary.email = formattedModel.applicant.email;
        }

        if (formattedModel.applicant.hasOwnProperty('address')) {
          formattedModel.beneficiary.address = formattedModel.applicant.address;
        }

        formattedModel.beneficiary.phoneNumbers = formattedModel.applicant.phoneNumbers;
      }

      if (formattedModel.additionalInformation[0] !== '' && formattedModel.additionalInformation[1] !== '') {
        formattedModel.additionalInformation = "".concat(formattedModel.additionalInformation[0], " - ").concat(formattedModel.additionalInformation[1]);
      } else if (formattedModel.additionalInformation[0] !== '') {
        formattedModel.additionalInformation = "".concat(formattedModel.additionalInformation[0]);
      } else if (formattedModel.additionalInformation[1] !== '') {
        formattedModel.additionalInformation = "".concat(formattedModel.additionalInformation[1]);
      } else {
        delete formattedModel.additionalInformation;
      }

      return formattedModel;
    }
  }, {
    key: "_validate",
    value: function _validate() {
      this._isValid = true;

      this._cleanErrors();

      this._validateGender();

      if (this._providerConfig) {
        this._validateProvider();
      }

      if (this._sourceConfig) {
        this._validateCampaign();
      }

      this._validateLastName();

      this._validateFirstName();

      this._validateRGPD();

      this._validateMeanOfCommunication();

      if (!this._isValid) {
        this._elements.submit.disabled = true;

        this._elements.containers.submit.classList.add('sad--invalid');
      }
    }
  }, {
    key: "_submit",
    value: function _submit() {
      // console.log(JSON.stringify(this._model, null, 4));
      if (this._callback && typeof this._callback === 'function') {
        this._callback();
      }
    }
  }, {
    key: "_extractObject",
    value: function _extractObject() {
      var formDataAsObject = this._sadLeadFormUtils.deepenDotNotationObject(Object.fromEntries(new FormData(this._elements.form)));

      formDataAsObject.additionalInformation = [];
      formDataAsObject.additionalInformation[0] = this._elements.extraFields.time.value;
      formDataAsObject.additionalInformation[1] = this._elements.extraFields.message.value;
      return formDataAsObject;
    }
  }, {
    key: "_updateModel",
    value: function _updateModel() {
      this._model = this._extractObject();
    }
  }, {
    key: "_initEvents",
    value: function _initEvents() {
      this._initClickToggleEvent();

      this._initClickSubmitEvent();

      this._initFormOnChangeEvent();
    }
  }, {
    key: "_initClickToggleEvent",
    value: function _initClickToggleEvent() {
      this._elements.toggle.all.forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
          var targets = document.querySelectorAll("[data-sad-lead-form-conditional-display-target=\"".concat(event.currentTarget.dataset.sadLeadFormConditionalDisplayToggle, "\"]"));

          if (event.currentTarget.checked) {
            targets.forEach(function (target) {
              target.classList.remove('sad--hidden');
            });
          } else {
            targets.forEach(function (target) {
              target.classList.add('sad--hidden');
              target.value = '';
            });
          }
        });
      });
    }
  }, {
    key: "_initClickSubmitEvent",
    value: function _initClickSubmitEvent() {
      var _this = this;

      this._elements.submit.addEventListener('click', function (event) {
        event.preventDefault();
        _this._submitted = true;

        _this._updateModel();

        _this._validate(_this._model);

        if (_this._isValid) {
          _this._submit();
        } else {
          _this._elements.submit.disabled = true;
        }
      });
    }
  }, {
    key: "_checkFormIsValid",
    value: function _checkFormIsValid() {
      if (this._submitted) {
        this._updateModel();

        this._validate(this._model);

        if (this._isValid) {
          this._elements.submit.disabled = false;
        }
      }
    }
  }, {
    key: "_initFormOnChangeEvent",
    value: function _initFormOnChangeEvent() {
      var _this2 = this;

      this._elements.form.addEventListener('change', function () {
        _this2._checkFormIsValid();
      });

      this._elements.form.querySelectorAll('input, textarea').forEach(function (el) {
        el.oninput = function () {
          _this2._checkFormIsValid();
        };
      });
    }
  }, {
    key: "_cleanErrors",
    value: function _cleanErrors() {
      this._elements.fields.iAm.classList.remove('sad--invalid');

      this._elements.fields.lastName.classList.remove('sad--invalid');

      this._elements.fields.firstName.classList.remove('sad--invalid');

      this._elements.containers.rgpd.classList.remove('sad--invalid');

      this._elements.containers.media.classList.remove('sad--invalid');

      this._elements.containers.email.classList.remove('sad--invalid');

      this._elements.containers.address.classList.remove('sad--invalid');

      this._elements.containers.phone.classList.remove('sad--invalid');

      this._elements.containers.emailField.classList.remove('sad--invalid');

      this._elements.containers.addressField.classList.remove('sad--invalid');

      this._elements.containers.phoneField.classList.remove('sad--invalid');

      this._elements.containers.submit.classList.remove('sad--invalid');

      if (this._elements.fields.provider && this._elements.fields.provider.classList) {
        this._elements.fields.provider.classList.remove('sad--invalid');
      }

      if (this._elements.fields.campaign && this._elements.fields.campaign.classList) {
        this._elements.fields.campaign.classList.remove('sad--invalid');
      }

      this._elements.errors.lastName.innerText = '';
      this._elements.errors.firstName.innerText = '';
      this._elements.errors.phoneNumber.innerText = '';
      this._elements.errors.email.innerText = '';
      this._elements.errors.zipCode.innerText = '';
    }
  }, {
    key: "_validateGender",
    value: function _validateGender() {
      if (this._model.applicant.gender === '') {
        this._elements.fields.iAm.classList.add('sad--invalid');

        this._isValid = false;
      }
    }
  }, {
    key: "_validateProvider",
    value: function _validateProvider() {
      if (this._model.provider === '') {
        this._elements.fields.provider.classList.add('sad--invalid');

        this._isValid = false;
      }
    }
  }, {
    key: "_validateCampaign",
    value: function _validateCampaign() {
      if (this._model.campaign === '') {
        this._elements.fields.campaign.classList.add('sad--invalid');

        this._isValid = false;
      }
    }
  }, {
    key: "_validateLastName",
    value: function _validateLastName() {
      if (this._model.applicant.lastname === '') {
        this._elements.fields.lastName.classList.add('sad--invalid');

        this._elements.errors.lastName.innerText = 'Ce champ est obligatoire.';
        this._isValid = false;
      } else if (!this._sadLeadFormValidator.validateStringWithoutSpecialCharacters(this._model.applicant.lastname)) {
        this._elements.fields.lastName.classList.add('sad--invalid');

        this._elements.errors.lastName.innerText = 'Ce champ est obligatoire.';
        this._elements.errors.lastName.innerText = 'Ce champ ne peut contenir de caractères spéciaux';
        this._isValid = false;
      }
    }
  }, {
    key: "_validateFirstName",
    value: function _validateFirstName() {
      if (this._model.applicant.firstname === '') {
        this._elements.fields.firstName.classList.add('sad--invalid');

        this._elements.errors.firstName.innerText = 'Ce champ est obligatoire.';
        this._isValid = false;
      } else if (!this._sadLeadFormValidator.validateStringWithoutSpecialCharacters(this._model.applicant.firstname)) {
        this._elements.fields.firstName.classList.add('sad--invalid');

        this._elements.errors.firstName.innerText = 'Ce champ est obligatoire.';
        this._elements.errors.firstName.innerText = 'Ce champ ne peut contenir de caractères spéciaux';
        this._isValid = false;
      }
    }
  }, {
    key: "_validateRGPD",
    value: function _validateRGPD() {
      if (!this._elements.fields.rgpd.checked) {
        this._elements.containers.rgpd.classList.add('sad--invalid');

        this._isValid = false;
      }
    }
  }, {
    key: "_validateMeanOfCommunication",
    value: function _validateMeanOfCommunication() {
      this._validateAddress();

      if (!this._elements.toggle.phone.checked && !this._elements.toggle.email.checked) {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.phone.classList.add('sad--invalid');

        this._elements.containers.email.classList.add('sad--invalid');

        this._isValid = false;
      } else {
        this._validatePhoneNumber();

        this._validateEmail();
      }
    }
  }, {
    key: "_validateEmail",
    value: function _validateEmail() {
      if (this._elements.toggle.email.checked && this._model.applicant.email === '') {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.email.classList.add('sad--invalid');

        this._elements.containers.emailField.classList.add('sad--invalid');

        this._isValid = false;
      } else if (this._elements.toggle.email.checked && !this._sadLeadFormValidator.validateEmail(this._model.applicant.email)) {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.email.classList.add('sad--invalid');

        this._elements.containers.emailField.classList.add('sad--invalid');

        this._elements.errors.email.innerText = 'L’adresse mail n’est pas valide.';
        this._isValid = false;
      }
    }
  }, {
    key: "_validateAddress",
    value: function _validateAddress() {
      if (this._elements.toggle.address.checked && (this._model.applicant.address.l2 === '' && this._model.applicant.address.l3 === '' && this._model.applicant.address.l4 === '' || this._model.applicant.address.zipcode === '' || this._model.applicant.address.city === '')) {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.address.classList.add('sad--invalid');

        this._elements.containers.addressField.classList.add('sad--invalid');

        this._isValid = false;
      } else if (this._elements.toggle.address.checked && !this._sadLeadFormValidator.validateFrenchZipCode(this._model.applicant.address.zipcode)) {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.address.classList.add('sad--invalid');

        this._elements.containers.addressField.classList.add('sad--invalid');

        this._elements.errors.zipCode.innerText = 'Ce code postal n’est pas un code postal français valide.';
        this._isValid = false;
      }
    }
  }, {
    key: "_validatePhoneNumber",
    value: function _validatePhoneNumber() {
      if (this._elements.toggle.phone.checked && this._model.applicant.phoneNumber === '') {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.phone.classList.add('sad--invalid');

        this._elements.containers.phoneField.classList.add('sad--invalid');

        this._isValid = false;
      } else if (this._elements.toggle.phone.checked && !this._sadLeadFormValidator.validateFrenchPhoneNumber(this._model.applicant.phoneNumber)) {
        this._elements.containers.media.classList.add('sad--invalid');

        this._elements.containers.phone.classList.add('sad--invalid');

        this._elements.containers.phoneField.classList.add('sad--invalid');

        this._elements.errors.phoneNumber.innerText = 'Ce numéro n’est pas un numéro de téléphone français valide.';
        this._isValid = false;
      }
    }
  }, {
    key: "_initElements",
    value: function _initElements() {
      this._elements = {
        form: document.getElementById('js-sad-lead-form'),
        submit: document.getElementById('js-sad-lead-form-button-submit'),
        toggle: {
          all: document.querySelectorAll('input[type=checkbox][data-sad-lead-form-conditional-display-toggle]'),
          email: document.getElementById('js-sad-lead-form-email-toggle'),
          address: document.getElementById('js-sad-lead-form-address-toggle'),
          phone: document.getElementById('js-sad-lead-form-phone-toggle')
        },
        fields: {
          iAm: document.getElementById('js-sad-lead-form-field-i-am'),
          lastName: document.getElementById('js-sad-lead-form-field-lastname'),
          firstName: document.getElementById('js-sad-lead-form-field-first-name'),
          rgpd: document.getElementById('js-sad-lead-form-field-rgpd'),
          provider: document.getElementById('js-sad-lead-form-field-provider'),
          campaign: document.getElementById('js-sad-lead-form-field-campaign')
        },
        extraFields: {
          additionalInformation: document.querySelectorAll('[data-sad-lead-form-field-name-additional-information-as-array]'),
          time: document.querySelectorAll('[data-sad-lead-form-field-name-additional-information-as-array]')[0],
          message: document.querySelectorAll('[data-sad-lead-form-field-name-additional-information-as-array]')[1]
        },
        containers: {
          rgpd: document.getElementById('js-sad-lead-form-field-rgpd-container'),
          media: document.getElementById('js-sad-lead-form-field-media'),
          email: document.getElementById('js-sad-lead-form-field-email'),
          address: document.getElementById('js-sad-lead-form-field-address'),
          phone: document.getElementById('js-sad-lead-form-field-phone'),
          emailField: document.querySelector('[data-sad-lead-form-conditional-display-target="applicant.email"]'),
          addressField: document.querySelector('[data-sad-lead-form-conditional-display-target="applicant.address"]'),
          phoneField: document.querySelector('[data-sad-lead-form-conditional-display-target="applicant.phoneNumber"]'),
          submit: document.getElementById('js-sad-lead-form-field-submit')
        },
        errors: {
          lastName: document.getElementById('js-sad-lead-form-field-lastname-error-message'),
          firstName: document.getElementById('js-sad-lead-form-field-firstname-error-message'),
          email: document.getElementById('js-sad-lead-form-field-email-error-message'),
          phoneNumber: document.getElementById('js-sad-lead-form-field-phone-error-message'),
          zipCode: document.getElementById('js-sad-lead-form-field-zipcode-error-message')
        }
      };
    }
  }]);

  return SadLeadFormModel;
}();

var _default = SadLeadFormModel;
exports.default = _default;
},{"./sad-lead-form-validator":"dhlN","./sad-lead-form-utils":"TiX8"}],"X6st":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sadLeadFormTemplate = _interopRequireDefault(require("./sad-lead-form-template"));

var _sadLeadForm = _interopRequireDefault(require("./sad-lead-form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @param {Object}                       : config
 * @param {type} config.htmlSelector     : HTML selector in which to generate the form
 * @param {type} config.rgpdDescription  : RGPD description appearing in the form
 * @param {type} config.callback         : Function to be called when the submitted form is valid
 * @param {type} config.distributorCode  : Code of the distributor
 * @param {type} config.agencyCode       : Code of the agency
 *
 * new SadLeadFormApp({
 *   htmlSelector: '#sad-lead-form',
 *   rgpdDescription: 'Lorem ipsum dolor sit amet..',
 *   callback: callBackFunction,
 *   distributorCode: 'XXXXXXXXXX',
 *   agencyCode: 'XXXXXXXXXX',
 * });
 *
 */
var SadLeadFormApp = function SadLeadFormApp(config) {
  _classCallCheck(this, SadLeadFormApp);

  if (!config.hasOwnProperty('distributorCode')) {
    document.querySelector(config.htmlSelector).innerHTML = 'Le code du distributeur est requis…';
    return;
  }

  if (!config.hasOwnProperty('agencyCode')) {
    document.querySelector(config.htmlSelector).innerHTML = "Le code de l'agence est requis…";
    return;
  }

  this._sadLeadFormTemplate = new _sadLeadFormTemplate.default(config.rgpdDescription, config.providerConfig, config.sourceConfig);
  document.querySelector(config.htmlSelector).innerHTML = this._sadLeadFormTemplate.getApplicationTemplate();
  var params = {
    distributorCode: config.distributorCode,
    agencyCode: config.agencyCode,
    providerConfig: config.providerConfig,
    sourceConfig: config.sourceConfig,
    callback: config.callback
  };
  new _sadLeadForm.default(params);
};

var _default = SadLeadFormApp;
exports.default = _default;
},{"./sad-lead-form-template":"PMAL","./sad-lead-form":"U5mT"}]},{},["X6st"], "SadLeadFormApp")
//# sourceMappingURL=sad-lead-form-app.js.map