import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
  render() {
    return (
      <div className="list-container">
        <ul className="list">
          {this.props.items.map(item => {
            return <ListItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
    );
  }
}

export default List;
