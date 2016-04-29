import React, {Component} from 'react';
import Header from './Header.jsx';
import Container from './Container.jsx';
import Match from './Match.jsx';
import Social from './Social.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Container />
        <Match />
        <Container />
        <Social />
      </div>
    );
  }
}

