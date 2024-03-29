import React from "react";

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element.",
      ddl: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
        value: event.target.value,
        ddl: event.target.value
     });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <select value={this.state.ddl} onChange={this.handleChange} > */}
        <select def={this.state.ddl} onChange={this.handleChange} >
          <option defaultValue={this.state.ddl} >Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
