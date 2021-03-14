import React from 'react';
import './index.css';
import ReactDom from 'react-dom';
import reportwebvitals from './reportWebVitals';

class Toggle extends React.Component {
  constructor(props) {
      super(props);
      this.state = { isToggleOn: true };

      // binding ini dibutuhkan agar dapat bekerja ketika pemanggilan
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render () {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON - 1841720153' : 'OFF - Ika Lailatuzzahro'}
      </button>
    );
  }
}
ReactDom.render( <
  Toggle / > ,
  document.getElementById('root')
);

reportwebvitals();