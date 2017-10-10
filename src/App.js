import React, { Component } from 'react';
import './App.css';

const StoryTile = (props) => {
  return(
    <div className="Card">
      <a href={props.url} title={props.title} target="_blank">
        <div className="Title">{props.title}</div>
        <div className="Url">{props.url}</div>
      </a>
      <div>
        <span>{props.points} points by <span className="By">{props.by}</span>  {props.time} mins ago</span>
      </div>
    </div>
  )
}
class Story extends Component {
  initStory = (info) => {
    let curTime = Date.now()/1000;
    let delayMin = Math.round((curTime - info.time) / (60));
    this.setState({
      url : info.url,
      title : info.title,
      by : info.by,
      points : info.score,
      time : delayMin
    });
  };
  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${this.props.storyid}.json`)
    .then(res => res.json())
    .then(text => this.initStory(text))
    .catch((err) => console.log(err));
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
  initStories = (storylist) => {
    console.log(storylist)
    this.setState({
      stories : storylist
    });
  };
  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0/${this.props.title}.json`)
    .then(res => res.json())
    .then(text => this.initStories(text))
    .catch((err) => console.log(err));
  }
  render() {
    return(
        <div>
          {this.state.stories.map(story => <Story storyid={story}/>)}
        </div>
    )
  }
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

class TitleBar implements Component {

  render() {
    return(
      <div>

      </div>
    );
  }
}

class App extends Component {
  state = { title: "newstories" }
  setTitle = (newTitle) => {
    this.setState({
      title : newTitle
    });
  };
  render() {
    return (
      <div>
          <StoryList title={this.state.title}/>
      </div>
    );
  }
}

export default App;
