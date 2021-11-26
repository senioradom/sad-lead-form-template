import SadLeadFormApp from './sad-lead-form-app';

import '../css/sad-lead-form-optional.scss';
import '../css/sad-lead-form.scss';
import '../css/sad-lead-form-demo.scss';

const callBackFunction = () => {
  const theObj = window.sad.leadFormModelInstance.getFormAsObject();
  const theJSON = window.sad.leadFormModelInstance.getFormAsJSON();

  document.getElementById('sad-lead-form-demo-result').innerHTML = `${theJSON}`;

  console.log(theObj);
  console.log(theJSON);

  const basicAuth = 'Basic basicAuthExample';
  const postURL = 'https://example.com/api/3/leads';

  const myHeaders = new Headers();
  myHeaders.append('Authorization', basicAuth);
  myHeaders.append('Content-Type', 'application/json');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: theJSON,
    redirect: 'follow',
  };

  fetch(postURL, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
};

new SadLeadFormApp({
  htmlSelector: '#sad-lead-form',
  rgpdDescription: 'Lorem ipsum dolor sit amet..',
  callback: callBackFunction,
  distributorCode: 'XXXXXXXXXXX',
  agencyCode: 'XXXXXXXXXXX',
  providerConfig: {
    type: 'agency',
    selections: [{code: 'code1', name: 'Name1'}, {code: 'code2', name: 'Name2'}]
  },
  sourceConfig: {
    sourceCode: 'XXXXXXXXXXX',
    campaigns: [{code: 'code1', name: 'Name1'}]
  }
});
