import React, { Component } from 'react';
import axios from 'axios';
import devounce from 'lodash/debounce';
import Ddl from '../ddl/Ddl';
import store from '../../store/configStore';

/**
 * Read from the store
 * subscribe
 */
store.subscribe(function() {
    console.log('state', store.getState());
})
  
  /**
   * update state/store
   * dispatch
   */
  store.dispatch({type: 'INCREASE'});
  store.dispatch({type: 'CHANGE_ORIGINAL_AMMOUTN', data: 100});
  store.dispatch({type: 'INCREASE'});
  store.dispatch({type: ''});

  

export default class Conversion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromCurrency: '',
            toCurrency: ''
        }
    }
    render() {
        return (
            <div>
                <Ddl options={['EUR', 'USD', 'CDN']}/>
                <Ddl options={['EUR', 'USD', 'CDN']}/>
            </div>
        )
    }
}
