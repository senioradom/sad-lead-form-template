import SadLeadFormApp from './sad-lead-form-app';

import '../css/sad-lead-form-optional.scss';
import '../css/sad-lead-form.scss';
import '../css/sad-lead-form-demo.scss';

const formElement = document.getElementById('sad-lead-form');
const rgpdDescription = 'Lorem ipsum dolor sit amet..';

const callBackFunction = () => {
  const theObj = window.sad.leadFormModelInstance.getFormAsObject();
  const theJSON = window.sad.leadFormModelInstance.getFormAsJSON();

  document.getElementById('sad-lead-form-demo-result').innerHTML = `${theJSON}`;

  console.log(theObj);
  console.log(theJSON);
};

new SadLeadFormApp(formElement, rgpdDescription, callBackFunction);
