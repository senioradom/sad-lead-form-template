import SadLeadFormTemplate from './sad-lead-form-template';
import SadLeadFormModel from './sad-lead-form';

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
class SadLeadFormApp {
  constructor(config) {
    if (!config.hasOwnProperty('distributorCode')) {
      document.querySelector(config.htmlSelector).innerHTML = 'Le code du distributeur est requis…';
      return;
    }

    if (!config.hasOwnProperty('agencyCode')) {
      document.querySelector(config.htmlSelector).innerHTML = "Le code de l'agence est requis…";
      return;
    }

    if (config.hasOwnProperty('providerConfig') && !config.providerConfig.hasOwnProperty('type')) {
      document.querySelector(config.htmlSelector).innerHTML = "Le type de provider est requis…";
      return;
    }

    this._sadLeadFormTemplate = new SadLeadFormTemplate(config.rgpdDescription, config.providerConfig);
    document.querySelector(config.htmlSelector).innerHTML = this._sadLeadFormTemplate.getApplicationTemplate();

    const params = {
      distributorCode: config.distributorCode,
      agencyCode: config.agencyCode,
      providerConfig: config.providerConfig,
      callback: config.callback
    };

    new SadLeadFormModel(params);
  }
}

export default SadLeadFormApp;
