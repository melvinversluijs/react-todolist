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
      <li
        className={completed ? "completed" : ""}
        onClick={e =>
          !e.target.classList.contains("delete") &&
          this.props.toggleCompleted(id)
        }
      >
        <span role="img" className="icon" arua-label="rocket">
          {completed ? "🚀" : ""}
        </span>
        <span className="item">{label}</span>
        <span className="delete" onClick={() => this.props.deleteItem(id)}>
          ×
        </span>
      </li>
    );
  }
}
