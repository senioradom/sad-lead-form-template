import SadLeadFormUtils from './sad-lead-form-utils';
import SadLeadFormTemplate from './sad-lead-form-template';
import SadLeadFormModel from './sad-lead-form';

class SadLeadFormApp {
  constructor(element, rgpdDescription, callback) {
    this._sadLeadFormTemplate = new SadLeadFormTemplate(rgpdDescription);
    element.innerHTML = this._sadLeadFormTemplate.getApplicationTemplate();
    this._sadLeadFormUtils = new SadLeadFormUtils();

    this._sadLeadFormModel = new SadLeadFormModel(this._sadLeadFormUtils, callback);
  }
}

export default SadLeadFormApp;
