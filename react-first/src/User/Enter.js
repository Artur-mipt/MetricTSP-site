import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";
import Navbar from '../Home/Navbar'

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/home" />;
    }
    const { username, password } = this.state;
    return (
      <div className='wrapper'>

      <div>
        <Navbar/>
      </div>

      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Вход</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Никнейм</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Пароль</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Войти
              </button>
            </div>
            <p>
              Нет аккаунта? <Link to="/registration">Регистрация</Link>
            </p>
          </form>
        </div>
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);