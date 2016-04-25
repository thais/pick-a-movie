import React, {Component} from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props); 
    this.state = {item: ''};
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.item);
    this.refs.item.focus();
    return;
  }

  onChange(e) {
    this.setState({item: e.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="item" onChange={this.onChange} value={this.state.item} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}
