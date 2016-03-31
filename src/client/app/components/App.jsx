import React, {Component} from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class App extends Component {
  label() {
    return 'Thais';
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <RaisedButton label={this.label()} />
      </div>
    );
  }
}

