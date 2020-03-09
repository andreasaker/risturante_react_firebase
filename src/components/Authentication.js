import React from "react";
import { connect } from "react-redux";
import { loggedIn } from "../redux/actions";

const Authentication = () => {
  return (
    <form>
      <input type="text" name="username" />
      <input type="password" name="password" />
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
