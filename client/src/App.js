import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ArticleDisplay from "./components/ArticleDisplay";

const testArray = [
    {
        title: "glurb",
        date: "now"
    }

]

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends Component {

    selectObject = (array) => {
        return array[0];
    }

    render() {
        return(
            <div>
                <ArticleDisplay entry = {this.selectObject(testArray)}/>
            </div>
        )
    }
};



export default App;
