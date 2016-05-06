import React, {Component} from 'react';
import Container from './Container.jsx';

export default class Match extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movieListOne: ['Procurando Nemo', 'HP1'],
      movieListTwo: ['HP1']
    };

    this.updateListOne = this.updateListOne.bind(this);
    this.updateListTwo = this.updateListTwo.bind(this);
  }

    updateListOne(newItem) {
    let allItems = this.state.movieListOne.concat([newItem]);
    this.setState({movieListOne: allItems});
  }

  updateListTwo(newItem) {
    let allItems = this.state.movieListTwo.concat([newItem]);
    this.setState({movieListTwo: allItems});
  }

  render() {
    return(
      <div onChange={this.match}>
        <Container items={this.state.movieListOne} updateItems={this.updateListOne} />
        <Container items={this.state.movieListTwo} updateItems={this.updateListTwo} />
      </div>
    );
  }
}
