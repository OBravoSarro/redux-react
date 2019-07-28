import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getCounterState } from './store/counter/counter.selectors';
import { incrementAction, decrementAction, setValueAction } from './store/counter/counter.actions';


class App extends Component {

  handleSetValue = () => {
    const { setValue } = this.props;
    const { inputCounterValue } = this.state;
    setValue(inputCounterValue);
  }
  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ inputCounterValue: value });
  }

  render() {
    const { increment, decrement, counter } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{counter}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <input name="counter" type="number" onChange={this.handleChange} />
          <button onClick={this.handleSetValue}>set value</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const counter = getCounterState(state);
  return { counter: counter };
}

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction()),
  decrement: () => dispatch(decrementAction()),
  setValue: payload => dispatch(setValueAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
