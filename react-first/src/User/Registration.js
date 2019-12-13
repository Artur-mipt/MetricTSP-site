import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../Home/Navbar.js'

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <div className='enter-form'>
      <div>
        <Navbar/>
      </div>

      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Зарегистрируйтесь</h1>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" 
               className="form-control" placeholder="Email address"
               required autofocus value={this.state.value} onChange={this.handleChange}/>
        
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />

        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Confirm password" required />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        	
        <button className="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2019</p>
        </form>
      </div>
    </div>

  );
  }
}

export default Registration