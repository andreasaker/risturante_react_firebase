import React, { useState } from "react";
import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const Authentication = ({ setLoginStatus }) => {
  const loginInit = { username: "", password: "" };
  const [loginInfo, setLoginInfo] = useState(loginInit);

  const errorInit = { status: false, msg: "" };
  const [error, setError] = useState(errorInit);

  const USERNAME = process.env.REACT_APP_USERNAME;
  const PASSWORD = process.env.REACT_APP_PASSWORD;

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (loginInfo.password === PASSWORD && loginInfo.username === USERNAME) {
      setLoginStatus(true);
      setLoginInfo(loginInit);
    } else {
      setError({
        status: true,
        msg: "The Username or Password is incorrect. Try again."
      });
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="title">Log in</div>
      <input
        required
        type="text"
        name="username"
        value={loginInfo.username}
        onChange={e => handleChange(e)}
        placeholder="Username"
      />
      <input
        required
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={e => handleChange(e)}
        placeholder="Password"
      />
      {error.status && <div className="error_msg">{error.msg}</div>}
      <button>Login</button>
    </form>
  );
};

const mapDisptachToProps = dispatch => ({
  setLoginStatus: status => dispatch(loggedIn(status))
});

export default connect(null, mapDisptachToProps)(Authentication);
