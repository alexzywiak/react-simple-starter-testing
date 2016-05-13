import React from 'react';
import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiJquery from 'chai-jquery';
import reducer from '../src/reducers';

// Set up environment to run like a browser in cli

// Create mock document and window bound to node global object
global.document = jsdom.jsdom('<!doctype html><<html><body></body></html>');
global.window = global.document.defaultView;

// Bootstrap jquery with mocked window object
const $ = _$(global.window);

// build renderComponent helper that will render given react class
function renderComponent(ComponentClass, props, state) {
  // Renders class into mocked DOM
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={ createStore(reducer, state) }>
      <ComponentClass {...props} />
    </Provider>
  );

  // Returns DOM element and wraps it in jquery goodness
  return $(ReactDOM.findDOMNode(componentInstance));
}

// build helper for simulating events
$.fn.simulate = function(eventName, value){
  
  if(value){
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]);
};

// set up chai-jquery
chaiJquery(chai, chai.util, $);

export {renderComponent, expect}