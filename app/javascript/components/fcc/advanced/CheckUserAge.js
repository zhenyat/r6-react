import React     from "react"
import PropTypes from "prop-types"

const inpStyle = {
  width: 235,
  margin: 5
};

export default class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {input: '', userAge: ''};
    // change code above this line
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState({
      userAge: this.state.input
    });
  }
  render() {
    const buttonOne   = <button onClick={this.submit}>Submit</button>;
    const buttonTwo   = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <React.Fragment>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inpStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {this.state.userAge >= 18 ? buttonTwo : (this.state.userAge === '')? buttonOne: buttonThree}
      </React.Fragment>
    );
  }
};
