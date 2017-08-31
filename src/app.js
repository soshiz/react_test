import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Counter from './counter.js';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { AppBar, MenuItem, Drawer} from 'material-ui';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <AppBar title="My AppBar" />
  </MuiThemeProvider>
);

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );



class NavBar extends React.Component{
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Drawer
            docked={false}
            width={200}
            open={this.props.open}
            onRequestChange={() => this.props.onToggle()}
          >
            <MenuItem>React</MenuItem>
            <MenuItem>Redux</MenuItem>
            <MenuItem>React Router</MenuItem>
            <MenuItem>Material UI</MenuItem>
            <MenuItem>Electron</MenuItem>
          </Drawer>
          <AppBar
            title="React Study"
            onLeftIconButtonTouchTap={ () => this.props.onToggle()}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('app')
);



import { createStore } from "redux";

//console.log(store.getState());

// ToDo を一意に特定できる ID
let nextTodoId = 0;

// ToDo の追加
const addToDo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: text,
    };
}
// ToDo の完了／未完了
const toggleToDo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id: id,
    };
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TODO':
          return {
              todo: state.todo.concat({
                  id: action.id,
                  text: action.text,
                  completed: false
              })
          };
      case 'TOGGLE_TODO':
          return {
              todo: state.todo.map(t => {
                  if (t.id !== action.id) {
                      return t;
                  }

                  return Object.assign({}, t, {completed: !t.completed});
              })
          };
      default:
          return state;
  }
}

const store = createStore(reducer, {todo: []});

// Store に変更があれば、state を console に出力する
store.subscribe(() => console.log(store.getState()));

console.log("買い物を追加");
store.dispatch(addToDo("買い物に行く"));

console.log("銀行を追加");
store.dispatch(addToDo("銀行に行く"));

console.log("銀行に行くのをDone");
store.dispatch(toggleToDo(1));



ReactDOM.render(
  <MuiThemeProvider>
      <Counter />
  </MuiThemeProvider>,
  document.getElementById('root')
);


class Hoge extends React.Component {
  render(){
    return(
      <div className="hoge">
        中身
      </div>
    )
  }
}

ReactDOM.render(
  <Hoge />,
  document.getElementById('form2')
);

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
      this.onClick = this.onClick.bind(this);
      this.renderList = this.renderList.bind(this);
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

//ReactDOM.render(<SampleComponent/>, document.getElementById('form'));


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
      <div className="hoge">
        myState : {this.state.myState}
      </div>
    )
  }
};
 //コンポーネントの描画
ReactDOM.render(
  <MyComponent />,
  document.getElementById('form')
);


// ReactDOM.render(
//   <SampleComponent />,
//   document.getElementById('root')
// );