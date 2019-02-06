import React from "react";
import List from "./components/List";
import AddItem from "./components/AddItem";
import "./App.css";

//Local storage key for items.
const LOCAL_STORAGE_ITEMS_KEY = "list_items";

/**
 * Class App, starting component.
 */
class App extends React.Component {
  constructor() {
    super();

    const items = localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY);
    this.state = {
      items: items ? JSON.parse(items) : []
    };
  }

  /**
   * Add item
   *
   * @param label - label for the new list item.
   */
  addItem = label => {
    this.setState(
      prev => ({
        items: [
          ...prev.items,
          {
            id: Math.ceil(Math.random() * Math.floor(99999)),
            label: label,
            completed: false
          }
        ]
      }),
      () => {
        localStorage.setItem(
          LOCAL_STORAGE_ITEMS_KEY,
          JSON.stringify(this.state.items)
        );
      }
    );
  };

  /**
   * Delete specified item.
   *
   * @param id - id for the to be deleted item.
   */
  deleteItem = id => {
    this.setState(
      prev => ({
        items: prev.items.filter(item => id !== item.id)
      }),
      () => {
        localStorage.setItem(
          LOCAL_STORAGE_ITEMS_KEY,
          JSON.stringify(this.state.items)
        );
      }
    );
  };

  /**
   * Toggle completed for given item.
   *
   * @param id - id for the updated item.
   */
  toggleCompleted = id => {
    this.setState(
      prev => ({
        items: prev.items.map(item => {
          if (item.id === id) {
            item.completed = !item.completed;
          }

          return item;
        })
      }),
      () => {
        localStorage.setItem(
          LOCAL_STORAGE_ITEMS_KEY,
          JSON.stringify(this.state.items)
        );
      }
    );
  };

  render() {
    return (
      <div className="App">
          <h1>TODO List</h1>
          <AddItem addItem={this.addItem} />
          <List
            items={this.state.items}
            deleteItem={this.deleteItem}
            toggleCompleted={this.toggleCompleted}
          />
      </div>
    );
  }
}

export default App;
