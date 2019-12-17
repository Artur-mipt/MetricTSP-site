import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from '../Home/Navbar.js';
import graph from './graph.png';
import Form from './Form';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTask, deleteTask } from "../actions/task"

export class Task extends React.Component {
  static propTypes = {
    task: PropTypes.array.isRequired,
    getTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getTask();
  }

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
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="row fixed-center" style={{marginTop: '40px'}}>
      <div className="col-lg-4">
        
        <React.Fragment>
        <div style={{maxWidth: '400px', marginLeft: '40px'}}>
          <Form />
        </div>
        </React.Fragment>


      </div>
      <div className="col-lg-8" style={{marginTop: '40px'}}>
      <h2 className="h3 mb-3 font-weight-normal">Задачи</h2>

      <React.Fragment>

          <table className="table table-striped" style={{width: '80%'}}>
          <thead>
            <tr>
              <th>ID задачи</th>
              <th>Ребро 1</th>
              <th>Ребро 2</th>
              <th>Ребро 3</th>
              <th>Ребро 4</th>
              <th>Ребро 5</th>
              <th>Ребро 6</th>
              <th>Ответ </th>
              <th>Визуализация</th>
              <th />
            </tr>
          </thead>
          <tbody>
            { this.props.task.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.edge1}</td>
                <td>{task.edge2}</td>
                <td>{task.edge3}</td>
                <td>{task.edge4}</td>
                <td>{task.edge5}</td>
                <td>{task.edge6}</td>
                <td>{task.answer}</td>
                <td> <img src={task.image} style={{maxHeight: '170px', maxWidth: '170px'}}/> </td>
                <td><button onClick={this.props.deleteTask.bind(this, task.id)}
                className="btn btn-danger btn-sm">
                Delete </button> </td>
              </tr>
              ))}
          </tbody>
          </table>
        </React.Fragment>

      </div>

    </div>
    </div>

  );
  }
}

const mapStateToProps = state => ({
  task: state.task.task
})

export default connect(mapStateToProps, 
                       { getTask, deleteTask })(Task);