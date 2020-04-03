class SadLeadFormUtils {
  deepenDotNotationObject(dotNotationObject) {
    const resultObject = {};
    let temporaryObjectReference;

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const dotNotationObjectKey in dotNotationObject) {
      temporaryObjectReference = resultObject;
      const parts = dotNotationObjectKey.split('.');
      const nestedKeys = parts.pop();

      while (parts.length) {
        const part = parts.shift();
        // eslint-disable-next-line no-multi-assign
        temporaryObjectReference = temporaryObjectReference[part] = temporaryObjectReference[part] || {};
      }

      temporaryObjectReference[nestedKeys] = dotNotationObject[dotNotationObjectKey];
    }
    return resultObject;
  }

  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }
}

export default SadLeadFormUtils;
