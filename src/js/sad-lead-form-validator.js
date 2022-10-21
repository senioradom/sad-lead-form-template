class SadLeadFormValidator {
  isEmailValid(email) {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }

  isEmailBlackListed(email) {
    return email.toLowerCase().endsWith('@gouv.fr');
  }

  isFrenchPhoneNumberValid(str) {
    return str.match(/^((\+)33|0)[1-9](\d{2}){4}$/g);
  }

  isAddressValid(address) {
    const isEmptyL2L3L4 = address.l2 === '' && address.l3 === '' && address.l4 === '';
    const isEmptyZipCode = address.zipcode === '';
    const isEmptyCity = address.city === '';

    return !(isEmptyL2L3L4 || isEmptyZipCode || isEmptyCity);
  }

  isFrenchZipCodeValid(str) {
    return str.match(/^(?:(?:(?:0[1-9]|[1-8]\d|9[0-5])(?:\d{3})?)|97[1-8]|98[4-9]|2[abAB])$/gm);
  }

  isStringValidLatinAlphabet(str) {
    return str.match(/^[a-zA-Z\u00C0-\u00FF- ]*$/gm);
  }
}

export default SadLeadFormValidator;
