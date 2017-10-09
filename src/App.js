import React, { Component } from 'react';
import './App.css';

const Result = (props) => {
  return(
    <div className="result">{props.counter}</div>
  )
};

class Button extends Component {
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  }
  render() {
    return(
        <button onClick={this.handleClick}> +{this.props.incrementValue}</button>
    )
  }
};

class App extends Component {
  state = { counter: 0 }
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };
  render() {
    return (
      <div>
        <Result counter={this.state.counter}/>
        <div className="wrapper">
          <Button incrementValue={1} onClickFunction={this.incrementCounter}/>
          <Button incrementValue={2} onClickFunction={this.incrementCounter}/>
          <Button incrementValue={3} onClickFunction={this.incrementCounter}/>
          <Button incrementValue={5} onClickFunction={this.incrementCounter}/>
        </div>
      </div>
    );
  }
}

export default App;
