import React, {Component} from 'react';
import Item from './Item.jsx'

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  
  createItem(itemText) {
    return (
      <Item>{itemText}</Item>
    );
  }

  render() {
    return(
      <ul>{this.props.items.map(this.createItem)}</ul>
    );
  }
}

