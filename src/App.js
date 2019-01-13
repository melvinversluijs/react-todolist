import React from "react";
import List from "./components/List";
import AddItem from "./components/AddItem";
import "./App.css";

class App extends React.Component {
  state = {
    items: []
  };

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

  render() {
    return (
      <div className="App">
        <h1>TODO List</h1>
        <List items={this.state.items} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
