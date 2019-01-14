import React from "react";
import List from "./components/List";
import AddItem from "./components/AddItem";
import "./App.css";

/**
 * Class App, starting component.
 */
class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        label: "TODO 1",
        completed: true
      }
    ]
  };

  /**
   * Add item
   *
   * @param label - label for the new list item.
   */
  addItem = label => {
    this.setState(prev => ({
      items: [
        ...prev.items,
        {
          id: Math.ceil(Math.random() * Math.floor(99999)),
          label: label,
          completed: false
        }
      ]
    }));
  };

  /**
   * Delete specified item.
   *
   * @param id - id for the to be deleted item.
   */
  deleteItem = id => {
    this.setState(prev => ({
      items: prev.items.filter(item => id !== item.id)
    }));
  };

  /**
   * Toggle completed for given item.
   *
   * @param id - id for the updated item.
   */
  toggleCompleted = id => {
    this.setState(prev => ({
      items: prev.items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }

        return item;
      })
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <List
          items={this.state.items}
          deleteItem={this.deleteItem}
          toggleCompleted={this.toggleCompleted}
        />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
