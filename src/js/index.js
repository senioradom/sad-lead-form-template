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
};

new SadLeadFormApp({
  htmlSelector: '#sad-lead-form',
  rgpdDescription: 'Lorem ipsum dolor sit amet..',
  callback: callBackFunction,
  distributorCode: '5d28a6aa11df4567539b6506',
  // agencyCode: 'XXXXXXXXXXX'
});
