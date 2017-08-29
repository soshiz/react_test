import React, {Component} from 'react'

export default class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick() {
        this.setState({
            count: this.state.count + 2
        });
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={this.handleClick.bind(this)}>increment</button>
            </div>
        );
    }
}

const style = {
    container: {
      color: 'blue',
      fontSize: 32
    }
  };
  
  ReactDOM.render(
    <h1 style={style.container}>Hello, World</h1>,
    document.getElementById('form')
  );