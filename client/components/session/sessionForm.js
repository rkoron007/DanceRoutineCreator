import React from "react";
import { connect } from "react-redux";
import { signUp, signIn } from "../../actions/sessionActions";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: props.formType === "/signin" ? "Sign In" : "Sign Up",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const userInfo = {
      username: this.state.username,
      password: this.state.password,
    };
    if (this.state.formType === "Sign Up") {
      this.props.signUp(userInfo);
    } else {
      //signin
      this.props.signIn(userInfo);
    }
  }

  updateInput(name) {
    return (e) => this.setState({ [name]: e.target.value });
  }

  render() {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.formType}</h1>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.updateInput("username")}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.updateInput("password")}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    formType: ownProps.match.url,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userInfo) => dispatch(signIn(userInfo)),
    signUp: (userInfo) => dispatch(signUp(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
