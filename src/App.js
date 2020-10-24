import React, { Component } from "react";

export class App extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClassName = () => {
    return this.state.count === 0
      ? "badge m-2 badge-warning"
      : "badge m-2 badge-primary";
  };

  render() {
    return (
      <>
        <span className={this.handleClassName()}>
          {this.state.count === 0 ? "Zero" : this.state.count}
        </span>
        <button className='btn btn-secondary m-2' onClick={this.handleClick}>
          Counter
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
