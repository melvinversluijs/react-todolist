import React from "react";
import PropTypes from "prop-types";

export default class AddItem extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: ""});
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Add task
          <input
            type="text"
            name="label"
            placeholder="Describe your new task"
            id="label"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" className="button" value="Submit" />
      </form>
    );
  }
}

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired
};
