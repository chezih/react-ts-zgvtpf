import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './Button/Button'
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Button/>
    );
  }
}

render(<App />, document.getElementById('root'));
