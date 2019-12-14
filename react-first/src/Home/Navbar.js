import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';


export class Navbar extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {

    const { isAuthenticated, user } = this.props.auth;

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-md-center">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/home">Travelling salesman problem <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Вход</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/registration">Регистрация</a>
        </li>

        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-sm">
            Выход
          </button>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/task">Задача</a>
        </li>
      </ul>
    </div>
    </nav>
  );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);