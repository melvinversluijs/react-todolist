import React from "react";
import ListItem from "./ListItem";
import PropTypes from "prop-types";

/**
 * List component, will iterate through list items.
 */
export default class List extends React.Component {
  static propTypes = {
    deleteItem: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired
  };

  /**
   * Render function.
   */
  render() {
    return (
      <div className="list-container">
        <ul className="list">
          {this.props.items.map(item => {
            return (
              <ListItem
                key={item.id}
                item={item}
                deleteItem={this.props.deleteItem}
                toggleCompleted={this.props.toggleCompleted}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
