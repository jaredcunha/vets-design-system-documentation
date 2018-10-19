console.log("hi from the webpack/entry.js!");

//require('../node_modules/@department-of-veterans-affairs/formation/sass/core.scss');
require('../node_modules/formation/src/sass/site/site.scss');

/* use ?url=false on css-loader if using the @ version */


import React, { Component } from 'react';
import {render} from 'react-dom';
import AdditionalInfo from '@department-of-veterans-affairs/formation/AdditionalInfo'

import MyReactComponent from './components/myReactComponent';


class App extends Component {
 render() {
 return (
  <div>
  <MyReactComponent />
  <AdditionalInfo triggerText="Testing this thing">
    <ul>
      <li>info A</li>
      <li>info B</li>
      <li>info C</li>
      <li>info D</li>
    </ul>
  </AdditionalInfo>
  </div>

 )
 }
}


class Foo extends Component {
 render() {
   return (
    <div>
    <AdditionalInfo triggerText="Another thing">
      <ul>
        <li>info A</li>
        <li>info B</li>
        <li>info C</li>
        <li>info D</li>
      </ul>
    </AdditionalInfo>
    </div>
   )
 }
}

render(<Foo />, document.getElementById('testinfo'));
render(<App />, document.getElementById('reactComponentDemo'));



