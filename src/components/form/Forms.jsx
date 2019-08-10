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
      switch (event.target.name) {
        case 'name':
          console.log(event.target.name, event.target.value);
          break;
        case 'textarea':
          console.log(event.target.name, event.target.value);
          break;
        case 'fruits':
          console.log(event.target.name, event.target.value);
          break;
        default:
          break;
      }
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
     * 
     * Overall, this makes it so that 
     * <input type="text">, <textarea>, and <select> all work very similarly - t
     * hey all accept a value attribute that you can use to implement a controlled component.
     * 
     * In HTML, an <input type="file"> lets the user choose one or more files from their device storage to be uploaded to a server or 
     * manipulated by JavaScript via the File API.
     * <input type="file" />
     * Because its value is read-only, it is an uncontrolled component in React. 
     * It is discussed together with other uncontrolled components later in the documentation.
     * https://reactjs.org/docs/forms.html
     * 
     * When you need to handle multiple controlled input elements, you can add a 
     * name attribute to each element and let the 
     * handler function choose what to do based on the value of event.target.name.
     */
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange}/>
            <select name="currency" value={this.state.originalCurrency} onChange={this.handleChange}>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="CDN">CDN</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
          <div>{this.state.originalCurrency}</div>
          <textarea name="textarea" id="" cols="30" rows="10" defaultValue={JSON.stringify(this.state)}>
              
          </textarea>
          <br/>
          <select name="fruits" multiple={true} value={['One', 'Two', 'Three']} onChange={this.handleChange}>
            <option value="one">Orange</option>
            <option value="two">Apple</option>
            <option value="three">Banana</option>
          </select>
          <input type="file" />
        </form>
      </div>
    );
  }
}
