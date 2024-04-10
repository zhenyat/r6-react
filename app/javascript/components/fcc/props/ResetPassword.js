import React from "react"

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <React.Fragment>
        <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
      </React.Fragment>
    );
  }
}

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <React.Fragment>
        <h3>Reset Password</h3>
        <h4>We've generated a new temporary password for you.</h4>
        <h4>Please reset this password from your account settings ASAP.</h4>
        <ReturnTempPassword tempPassword="Tmp-Password" />
      </React.Fragment>
    );
  }
}