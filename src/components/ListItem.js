import React from "react";
import PropTypes from "prop-types";

/**
 * ListItem component, singular list item.
 */
export default class ListItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired
  };

  /**
   * Render function.
   */
  render() {
    const { id, label, completed } = this.props.item;
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          name="completed"
          onChange={() => this.props.toggleCompleted(id)}
          checked={completed}
        />
        <span>{label}</span>
        <button onClick={() => this.props.deleteItem(id)}>
          <i>x</i>
        </button>
      </li>
    );
  }
}
