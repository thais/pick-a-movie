import React, {Component} from 'react';
import Header from './Header.jsx';
import List from './List.jsx';
import Form from './Form.jsx';
import Item from './Item.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this.updateItems = this.updateItems.bind(this);
  }

  updateItems(newItem) {
    let allItems = this.state.items.concat([newItem]);
    this.setState({items: allItems});
  }

  render() {
    return (
      <div>
        <Header />
        <Form onFormSubmit={this.updateItems}/>
        <List items={this.state.items}/>
        <Form onFormSubmit={this.updateItems}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

