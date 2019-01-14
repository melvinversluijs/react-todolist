import React from "react";
import PropTypes from "prop-types";

/**
 * AddItem component, form for adding a new List item.
 */
export default class AddItem extends React.Component {
  state = {
    value: ""
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired
  };

  /**
   * Handle submit action for form.
   */
  handleSubmit = event => {
    //Prevent default form action.
    event.preventDefault();

    //Add item by calling the addItem function in props and set value state back to empty string.
    this.props.addItem(this.state.value);
    this.setState({ value: "" });
  };

  /**
   * Handle change on input field.
   */
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  /**
   * Render function.
   */
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
