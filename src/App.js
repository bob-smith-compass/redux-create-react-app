import React, { useEffect } from 'react';
import './App.css';
import Form from './components/form/Forms';
import TextArea from './components/textarea/TextArea';
import Conversion from './components/conversion/Conversion';
import store from './store/configStore';
import Hook from './hooks/Hook';



// import { createStore } from 'redux';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import debounce from 'lodash/debounce';

// let defaultState = 0; // does not have to be an object

// function reducer(amount, state) {
//     return state + 1;
// }

// let store = createStore(reducer);


// /**
//  * Read from the store
//  * subscribe
//  */
// store.subscribe(function() {
//   console.log('state', store.getState());
// })

// /**
//  * update state/store
//  * dispatch
//  */
// store.dispatch({type: 'INCREASE'});

let textArea




// function App() {
class App extends React.Component {

  // useEffect(() => {
  //   store.subscribe(function () {
  //     textArea = store.getState()
  //     console.log(textArea)
  //   })
  //   // console.log(textArea)
  //   // store.setState({})
  // })

  componentDidMount() {
    store.subscribe(function () {
      textArea = store.getState()
      console.log(textArea)
    })
  }

  handleChange(e) {
    // store.setState({})
    store.getState()
    console.log(e)
    // console.log(store)
    console.log(store.getState())
  }

  render() {

    return (
      <div className="App">
        {/* <Form /> */}

        {/* <TextArea /> */}
        <Conversion />
        <textarea
          onChange={this.handleChange}
          // value={JSON.stringify(store)} 
          // value={JSON.stringify(store.getState())} 
          defaultValue={JSON.stringify(store.getState())}
          // value={JSON.stringify(store.getState())}
          value={JSON.stringify(textArea)}
          name="" id="" cols="30" rows="10" >
        </textarea>
        <button onClick={store.subscribe(function () { console.log(store) })}>Subscribe to store</button>
        <Hook />
      </div>
    );
  }

}

export default App;
