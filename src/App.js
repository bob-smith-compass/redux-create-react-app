import React from 'react';
import './App.css';
import Form from './components/form/Forms';
import TextArea from './components/textarea/TextArea';
import Conversion from './components/conversion/Conversion';



import { createStore } from 'redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import debounce from 'lodash/debounce';

let defaultState = 0; // does not have to be an object

function reducer(amount, state) {
    return state + 1;
}

let store = createStore(reducer);

/**
 * update state/store
 * dispatch
 */
store.dispatch()

function App() {
  return (
    <div className="App">
      {/* <Form /> */}

      {/* <TextArea /> */}
      <Conversion />
    </div>
  );
}

export default App;
