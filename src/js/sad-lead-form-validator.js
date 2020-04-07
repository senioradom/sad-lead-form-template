class SadLeadFormValidator {
  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  validateFrenchPhoneNumber(str) {
    return str.match(/^((\+)33|0)[1-9](\d{2}){4}$/g);
  }

  validateFrenchZipCode(str) {
    return str.match(/^(?:(?:(?:0[1-9]|[1-8]\d|9[0-5])(?:\d{3})?)|97[1-8]|98[4-9]|2[abAB])$/gm);
  }
}

export default SadLeadFormValidator;
