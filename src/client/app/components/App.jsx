import React, {Component} from 'react';
import Header from './Header.jsx';
import Container from './Container.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Container />
        <Container />
      </div>
    );
  }
}

