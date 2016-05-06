import React, {Component} from 'react';
import Header from './Header.jsx';
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
        <Match />
        <Social />
      </div>
    );
  }
}

