import React, { Component } from 'react'

export default class Ddl extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            selected: '',
            options: this.props.option,
            amout: ''
        }
    }
    changeHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            selected: e.target.value
        })
    }
    showState = () => {
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <select name="ddl" id="" onChange={this.changeHandler}>
                    {/* {this.state.options.map( e => <option>{e}</option>)} */}
                    {this.props.options.map( e => <option>{e}</option>)}
                </select>
                Comments: <input type="text" ref={input => this.setState({amout: input})}/>
                <button onClick={this.showState}>State</button>
            </div>
        )
    }
}
