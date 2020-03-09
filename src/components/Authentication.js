import React, { useState } from "react";
import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const Authentication = ({ setStatus }) => {
  const loginInit = { username: "", password: "" };
  const [loginInfo, setLoginInfo] = useState(loginInit);

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setStatus(true);
    setLoginInfo(loginInit);
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="text"
        name="username"
        value={loginInfo.username}
        onChange={e => handleChange(e)}
      />
      <input
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={e => handleChange(e)}
      />
      <button>Login</button>
    </form>
  );
};

const mapDisptachToProps = dispatch => ({
  setStatus: status => dispatch(loggedIn(status))
});

export default connect(
  null,
  mapDisptachToProps
)(Authentication);
