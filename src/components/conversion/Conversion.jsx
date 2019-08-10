import React, { Component } from 'react';
import axios from 'axios';
import devounce from 'lodash/debounce';
import Ddl from '../ddl/Ddl';

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
