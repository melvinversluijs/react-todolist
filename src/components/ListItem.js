import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
      <li className="list-item">
        <input
          type="checkbox"
          name="completed"
          defaultChecked={completed}
          onChange={() => this.props.toggleCompleted(id)}
        />
        <span className="list-item-label">{label}</span>
        <button
          className="list-item-remove"
          onClick={() => this.props.deleteItem(id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  }
}
