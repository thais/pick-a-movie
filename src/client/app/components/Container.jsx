import React, {Component} from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Item from './Item.jsx';

export default class Container extends Component {
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
        <Form onFormSubmit={this.updateItems}/>
        <List items={this.state.items}/>
      </div>
    );
  }
}

