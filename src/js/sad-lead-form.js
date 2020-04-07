class SadLeadFormModel {
  constructor(sadLeadFormUtils, callback) {
    this._initElements();
    this._model = {};
    this._submitted = false;
    this._isValid = false;

    this._callback = callback;

    this._sadLeadFormUtils = sadLeadFormUtils;

    this._initEvents();

    window.sad = window.sad || {};
    window.sad.leadFormModelInstance = this;
  }

  getFormAsObject() {
    if (this._submitted && this._isValid) {
      return this._getFormattedModel();
    }

    return {};
  }

  getFormAsJSON() {
    if (this._submitted && this._isValid) {
      return JSON.stringify(this._getFormattedModel(), null, 4);
    }

    return JSON.stringify({}, null, 4);
  }

  _getFormattedModel() {
    const formattedModel = {};
    Object.assign(formattedModel, this._model);

    formattedModel.tags = ['Site Web Distribueur', 'No_vendor'];

    formattedModel.requestedActions = [];
    if (this._elements.toggle.email.checked || this._elements.toggle.address.checked) {
      formattedModel.requestedActions.push('send_subscription');
      formattedModel.requestedActions.push('send_brochures');
    }

    if (this._elements.toggle.phone.checked) {
      formattedModel.requestedActions.push('wants_to_be_called');
    }

    formattedModel.applicant.address.l2 = formattedModel.applicant.address.l2.toUpperCase();
    formattedModel.applicant.address.l3 = formattedModel.applicant.address.l3.toUpperCase();
    formattedModel.applicant.address.l4 = formattedModel.applicant.address.l4.toUpperCase();
    formattedModel.applicant.address.zipcode = formattedModel.applicant.address.zipcode.toUpperCase();
    formattedModel.applicant.address.city = formattedModel.applicant.address.city.toUpperCase();

    if (formattedModel.applicant.relation === 'himself') {
      formattedModel.beneficiary = {
        gender: formattedModel.applicant.gender,
        lastname: formattedModel.applicant.lastname,
        firstname: formattedModel.applicant.firstname,
      };

      formattedModel.beneficiary.address = formattedModel.applicant.address;
    }

    if (formattedModel.additionalinformation[0] !== '' && formattedModel.additionalinformation[1] !== '') {
      formattedModel.additionalinformation = `${formattedModel.additionalinformation[0]} - ${formattedModel.additionalinformation[1]}`;
    } else if (formattedModel.additionalinformation[0] !== '') {
      formattedModel.additionalinformation = `${formattedModel.additionalinformation[0]}`;
    } else if (formattedModel.additionalinformation[1] !== '') {
      formattedModel.additionalinformation = `${formattedModel.additionalinformation[1]}`;
    } else {
      formattedModel.additionalinformation = '';
    }

    return formattedModel;
  }

  _validate() {
    this._isValid = true;

    this._cleanErrors();

    this._validateGender();
    this._validateLastName();
    this._validateFirstName();
    this._validateRGPD();
    this._validateMeanOfCommunication();

    if (!this._isValid) {
      this._elements.submit.disabled = true;
      this._elements.containers.submit.classList.add('sad--invalid');
    }
  }

  _submit() {
    // console.log(JSON.stringify(this._model, null, 4));
    if (this._callback && typeof this._callback === 'function') {
      this._callback();
    }
  }

  _extractObject() {
    const formDataAsObject = this._sadLeadFormUtils.deepenDotNotationObject(
      Object.fromEntries(new FormData(this._elements.form))
    );

    /*
    formDataAsObject.need = Array.from(this._elements.extraFields.need)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    */

    formDataAsObject.additionalinformation = [];
    formDataAsObject.additionalinformation[0] = this._elements.extraFields.time.value;
    formDataAsObject.additionalinformation[1] = this._elements.extraFields.message.value;

    return formDataAsObject;
  }

  _updateModel() {
    this._model = this._extractObject();
  }

  _initEvents() {
    this._initClickToggleEvent();
    this._initClickSubmitEvent();
    this._initFormOnChangeEvent();
  }

  _initClickToggleEvent() {
    this._elements.toggle.all.forEach((checkbox) => {
      checkbox.addEventListener('change', (event) => {
        const targets = document.querySelectorAll(
          `[data-sad-lead-form-conditional-display-target="${event.currentTarget.dataset.sadLeadFormConditionalDisplayToggle}"]`
        );
        if (event.currentTarget.checked) {
          targets.forEach((target) => {
            target.classList.remove('sad--hidden');
          });
        } else {
          targets.forEach((target) => {
            target.classList.add('sad--hidden');
            target.value = '';
          });
        }
      });
    });
  }

  _initClickSubmitEvent() {
    this._elements.submit.addEventListener('click', (event) => {
      event.preventDefault();

      this._submitted = true;
      this._updateModel();

      this._validate(this._model);
      if (this._isValid) {
        this._submit();
      } else {
        this._elements.submit.disabled = true;
      }
    });
  }

  _initFormOnChangeEvent() {
    this._elements.form.addEventListener('change', () => {
      if (this._submitted) {
        this._updateModel();
        this._validate(this._model);
        if (this._isValid) {
          this._elements.submit.disabled = false;
        }
      }
    });
  }

  _cleanErrors() {
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

    this._elements.errors.phoneNumber.innerText = '';
    this._elements.errors.email.innerText = '';
    this._elements.errors.zipCode.innerText = '';
  }

  _validateGender() {
    if (this._model.applicant.gender === '') {
      this._elements.fields.iAm.classList.add('sad--invalid');
      this._isValid = false;
    }
  }

  _validateLastName() {
    if (this._model.applicant.lastname === '') {
      this._elements.fields.lastName.classList.add('sad--invalid');
      this._isValid = false;
    }
  }

  _validateFirstName() {
    if (this._model.applicant.firstname === '') {
      this._elements.fields.firstName.classList.add('sad--invalid');
      this._isValid = false;
    }
  }

  _validateRGPD() {
    if (!this._elements.fields.rgpd.checked) {
      this._elements.containers.rgpd.classList.add('sad--invalid');
      this._isValid = false;
    }
  }

  _validateMeanOfCommunication() {
    if (
      !this._elements.toggle.email.checked &&
      !this._elements.toggle.address.checked &&
      !this._elements.toggle.phone.checked
    ) {
      this._elements.containers.media.classList.add('sad--invalid');
      this._elements.containers.email.classList.add('sad--invalid');
      this._elements.containers.address.classList.add('sad--invalid');
      this._elements.containers.phone.classList.add('sad--invalid');
      this._isValid = false;
    } else {
      this._validateEmail();
      this._validateAddress();
      this._validatePhoneNumber();
    }
  }

  _validateEmail() {
    if (this._elements.toggle.email.checked && this._model.applicant.email === '') {
      this._elements.containers.email.classList.add('sad--invalid');
      this._elements.containers.emailField.classList.add('sad--invalid');
      this._isValid = false;
    } else if (
      this._elements.toggle.email.checked &&
      !this._sadLeadFormUtils.validateEmail(this._model.applicant.email)
    ) {
      this._elements.containers.email.classList.add('sad--invalid');
      this._elements.containers.emailField.classList.add('sad--invalid');

      this._elements.errors.email.innerText = 'L’adresse mail n’est pas valide.';

      this._isValid = false;
    }
  }

  _validateAddress() {
    if (
      this._elements.toggle.address.checked &&
      ((this._model.applicant.address.l2 === '' &&
        this._model.applicant.address.l3 === '' &&
        this._model.applicant.address.l4 === '') ||
        this._model.applicant.address.zipcode === '' ||
        this._model.applicant.address.city === '')
    ) {
      this._elements.containers.address.classList.add('sad--invalid');
      this._elements.containers.addressField.classList.add('sad--invalid');
      this._isValid = false;
    }

    if (
      !this._model.applicant.address.zipcode.match(
        /^(?:(?:(?:0[1-9]|[1-8]\d|9[0-5])(?:\d{3})?)|97[1-8]|98[4-9]|2[abAB])$/gm
      )
    ) {
      this._elements.containers.address.classList.add('sad--invalid');
      this._elements.containers.addressField.classList.add('sad--invalid');

      this._elements.errors.zipCode.innerText = 'Ce code postal n’est pas un code postal français valide.';

      this._isValid = false;
    }
  }

  _validatePhoneNumber() {
    if (this._elements.toggle.phone.checked && this._model.applicant.phoneNumber === '') {
      this._elements.containers.phone.classList.add('sad--invalid');
      this._elements.containers.phoneField.classList.add('sad--invalid');

      this._isValid = false;
    } else if (!this._model.applicant.phoneNumber.match(/^((\+)33|0)[1-9](\d{2}){4}$/g)) {
      this._elements.containers.phone.classList.add('sad--invalid');
      this._elements.containers.phoneField.classList.add('sad--invalid');

      this._elements.errors.phoneNumber.innerText = 'Ce numéro n’est pas un numéro de téléphone français valide.';

      this._isValid = false;
    }
  }

  _initElements() {
    this._elements = {
      form: document.getElementById('js-sad-lead-form'),
      submit: document.getElementById('js-sad-lead-form-button-submit'),
      toggle: {
        all: document.querySelectorAll('input[type=checkbox][data-sad-lead-form-conditional-display-toggle]'),
        email: document.getElementById('js-sad-lead-form-email-toggle'),
        address: document.getElementById('js-sad-lead-form-address-toggle'),
        phone: document.getElementById('js-sad-lead-form-phone-toggle'),
      },
      fields: {
        iAm: document.getElementById('js-sad-lead-form-field-i-am'),
        lastName: document.getElementById('js-sad-lead-form-field-lastname'),
        firstName: document.getElementById('js-sad-lead-form-field-first-name'),
        rgpd: document.getElementById('js-sad-lead-form-field-rgpd'),
      },
      extraFields: {
        // need: document.querySelectorAll('input[data-sad-lead-form-field-name-need-as-array]'),
        additionalinformation: document.querySelectorAll(
          '[data-sad-lead-form-field-name-additionalinformation-as-array]'
        ),
        time: document.querySelectorAll('[data-sad-lead-form-field-name-additionalinformation-as-array]')[0],
        message: document.querySelectorAll('[data-sad-lead-form-field-name-additionalinformation-as-array]')[1],
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
        submit: document.getElementById('js-sad-lead-form-field-submit'),
      },
      errors: {
        email: document.getElementById('js-sad-lead-form-field-email-error-message'),
        phoneNumber: document.getElementById('js-sad-lead-form-field-phone-error-message'),
        zipCode: document.getElementById('js-sad-lead-form-field-zipcode-error-message'),
      },
    };
  }
}

export default SadLeadFormModel;
