import React from 'react';
import ReactDom from 'react-dom';
import Counter from './counter.js';


var App = {
    render:  () => {
        ReactDom.render(
            <Counter />,
            document.getElementById('root')
        );
    }
};

class SampleComponent2 extends React.Component {
  render() {
    return (
      <div>This article is written by leader22</div>
    );
  }
}

class SampleComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        array: [
          'hoge',
          'poge'
        ]
      }
      // ライフサイクル外の関数から this を参照するための bind
      //this.onClick = this.onClick.bind(this);
      //this.renderList = this.renderList.bind(this);
    }
  
    onClick() {
      let currentState = this.state.array;
      currentState.push('foo');
      this.setState({ array: currentState });
    }
  
    renderList() {
      return this.state.array.map(item => {
        return (
          <li key={item}>{item}</li>
        );
      });
    }
  
    render() {
      <div>
        <ul>
          {this.renderList()}
        </ul>
        <button onClick={this.onClick}>Add Item</button>
      </div>
    }
  }

//App.render();

//ReactDom.render(<SampleComponent/>, document.getElementById('form'));


//コンポーネントの作成
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState : 1
    };
    setInterval(()=>{
      this.setState({
        myState : this.state.myState + 1
      });
    },1000);
  }
  render() {
    return (
      <div>
        myState : {this.state.myState}
      </div>
    )
  }
};
 //コンポーネントの描画
ReactDom.render(
  <MyComponent />,
  document.getElementById('form')
);


ReactDom.render(
  <SampleComponent />,
  document.getElementById('root')
);