import React, { Component } from "react";

export default class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            originalCurrency: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange = (event) => {
    handleChange(event) {
        event.preventDefault();
        this.setState({
            name: event.target.value.toUpperCase(),
            originalCurrency: event.target.value
        })

        console.log(event.target.value);
        console.log(this.state.originalCurrency);
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(e.target.value);
        console.log(this.state);

    }
    /**
     * This form has the default HTML form behavior of browsing to a new page when the user submits the form. 
     * If you want this behavior in React, it just works. But in most cases, 
     * it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. 
     * The standard way to achieve this is with a technique called 
     * “controlled components”.
     * We can combine the two by making the React state be the “single source of truth”. 
     * Then the React component that renders a form also controls what happens in that form on subsequent user input. 
     * An input form element whose value is controlled by React in this way is called a “controlled component”.
     * 
     * In React, a <textarea> uses a value attribute instead. This way, a form using a 
     * <textarea> can be written very similarly to a form that uses a single-line input:
     */
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange}/>
            <select value={this.state.originalCurrency} onChange={this.handleChange}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CDN">CDN</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <div>{this.state.originalCurrency}</div>
          <textarea name="" id="" cols="30" rows="10" defaultValue={JSON.stringify(this.state)}>
              
          </textarea>
        </form>
      </div>
    );
  }
}
