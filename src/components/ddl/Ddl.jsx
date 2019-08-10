import React, { Component } from 'react'

export default class Ddl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            options: ['Apple', 'Orange', 'Banana']
        }
    }
    render() {
        return (
            <div>
                <select name="ddl" id="">
                    {this.state.options.map( e => <option>{e}</option>)}
                </select>
            </div>
        )
    }
}
