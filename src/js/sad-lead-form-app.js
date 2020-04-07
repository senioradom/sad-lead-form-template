import SadLeadFormTemplate from './sad-lead-form-template';
import SadLeadFormModel from './sad-lead-form';

/**
 * @param {Object}                       : config
 * @param {type} config.htmlSelector     : HTML selector in which to generate the form
 * @param {type} config.rgpdDescription  : RGPD description appearing in the form
 * @param {type} config.callback         : Function to be called when the submitted form is valid
 * @param {type} config.distributorCode  : Code of the distributor
 * @param {type} config.agencyCode       : Code of the agency (NOT required)
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

    this._sadLeadFormTemplate = new SadLeadFormTemplate(config.rgpdDescription);
    document.querySelector(config.htmlSelector).innerHTML = this._sadLeadFormTemplate.getApplicationTemplate();

    const params = {
      distributorCode: config.distributorCode,
      callback: config.callback,
    };

    if (!config.hasOwnProperty('agencyCode')) {
      params.agencyCode = config.agencyCode;
    }

    new SadLeadFormModel(params);
  }
}

export default SadLeadFormApp;
