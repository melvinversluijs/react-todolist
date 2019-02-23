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
    const { value } = this.state;

    return (
      <form className="add-list-item" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What todo?"
          onChange={this.handleChange}
          value={value}
          name="name"
        />
        <button type="submit">
          <span role="img" aria-label="Thumbsup">
            👍
          </span>
        </button>
      </form>
    );
  }
}
