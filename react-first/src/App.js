import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";

import Navbar from './Home/Navbar.js';
import Description from './Home/Description.js';
import Conditions from './Home/Conditions.js';
import SignIn from './User/Enter.js';
import Registration from './User/Registration.js';
import Task from './Task/Task.js';

import { Provider } from 'react-redux';
import store from './store';

import { loadUser } from './actions/auth'

function Home() {
  return (
    <div className='wrapper'>
      <div>
        <Navbar/>
      </div>
      
      <div>
        <Description/>
      </div>
      
      <div>
        <Conditions/>
      </div>
    </div>
  );
}


class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
  return (
    <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/home/">
            <Home />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/task'>
            <Task />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}
}


export default App