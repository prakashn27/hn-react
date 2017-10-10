import React, { Component } from 'react';
import './App.css';

const StoryTile = (props) => {
  return(
    <div className="Card">
      <a href={props.url} title={props.title} target="_blank">
        <div className="Title">{props.title}</div>
        <div className="Url">{props.url}</div>
      </a>
      <div className="By">{props.by}</div>
    </div>
  )
}
class Story extends Component {
  initStory = (info) => {
    this.setState({
      url : info.url,
      title : info.title,
      by : info.by
    });
  };
  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.storyid}.json`)
    .then(res => res.json())
    .then(text => this.initStory(text))
    .catch((err) => console.log(err));
  }
  constructor(props) {
    super(props);
    this.state = {
      title : "",
      url : "",
      by : ""
    }
  }
  render() {
    return(
      <StoryTile
        {...this.state}
      />
    )
  }
}

class StoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories : []
    }
  }
  rrender() {
    return(
        <div> stories </div>
    )
  }
};
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
          <Story storyid={15435822} />
      </div>
    );
  }
}

export default App;
