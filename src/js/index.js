import SadLeadFormApp from './sad-lead-form-app';

import '../css/sad-lead-form-optional.scss';
import '../css/sad-lead-form.scss';

const formElement = document.getElementById('sad-lead-form');
const rgpdDescription = 'Lorem ipsum dolor sit amet..';

const callBackFunction = () => {
  const theObj = window.sad.leadFormModelInstance.getFormAsObject();
  const theJSON = window.sad.leadFormModelInstance.getFormAsJSON();

  formElement.innerHTML = `<pre>${theJSON}</pre>`;

  console.log(theObj);
  console.log(theJSON);
};

new SadLeadFormApp(formElement, rgpdDescription, callBackFunction);
