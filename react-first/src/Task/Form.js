import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTask } from "../actions/task";

export class Form extends Component {
  state = {
    edge1: "",
    edge2: "",
    edge3: "",
    edge4: "",
    edge5: "",
    edge6: ""
  };

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { edge1, edge2, edge3, edge4, edge5, edge6 } = this.state;
    const task = { edge1, edge2, edge3, edge4, edge5, edge6 };
    this.props.addTask(task);
    this.setState({
      edge1: "",
      edge2: "",
      edge3: "",
      edge4: "",
      edge5: "",
      edge6: ""
    });
  };

  render() {
    const { edge1, edge2, edge3, edge4, edge5, edge6 } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Добавить задачу</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Ребро 1</label>
            <input
              className="form-control"
              type="text"
              name="edge1"
              onChange={this.onChange}
              value={edge1}
            />
          </div>
          <div className="form-group">
            <label>Ребро 2</label>
            <input
              className="form-control"
              type="text"
              name="edge2"
              onChange={this.onChange}
              value={edge2}
            />
          </div>
          <div className="form-group">
            <label>Ребро 3</label>
            <textarea
              className="form-control"
              type="text"
              name="edge3"
              onChange={this.onChange}
              value={edge3}
            />
          </div>
          <div className="form-group">
            <label>Ребро 4</label>
            <textarea
              className="form-control"
              type="text"
              name="edge4"
              onChange={this.onChange}
              value={edge4}
            />
          </div>
          <div className="form-group">
            <label>Ребро 5</label>
            <textarea
              className="form-control"
              type="text"
              name="edge5"
              onChange={this.onChange}
              value={edge5}
            />
          </div>
          <div className="form-group">
            <label>Ребро 6</label>
            <textarea
              className="form-control"
              type="text"
              name="edge6"
              onChange={this.onChange}
              value={edge6}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Решить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Form);