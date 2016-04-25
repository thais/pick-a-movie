import React, {Component} from 'react';
import Item from './Item.jsx'

export default class List extends Component {
  createItem(itemText, index) {
    return (
      <Item key={index}>{itemText}</Item>
    );
  }

  render() {
    return(
      <ul>{this.props.items.map(this.createItem)}</ul>
    );
  }
}

