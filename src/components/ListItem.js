import React from "react";
import PropTypes from "prop-types";

class ListItem extends React.Component {
  render() {
    return (
      <li className="list-item">
        <input type="checkbox" name="completed" />
        <span className="list-item-label">{this.props.item.label}</span>
      </li>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default ListItem;
