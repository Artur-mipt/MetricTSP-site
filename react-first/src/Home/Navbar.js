import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

function Navbar() {
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
          <a className="nav-link" href="/enter">Вход</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/registration">Регистрация</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/task">Задача</a>
        </li>
      </ul>
    </div>
    </nav>
  );
}

export default Navbar