import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ArticleDisplay from "./components/ArticleDisplay";
import AppNavbar from "./components/AppNavbar";

const testArray = [
    {
        title: "test1",
        summary: "test1",
        date: "test1"
    },

    {
        title: "test2",
        summary: "test2",
        date: "test2"
    },

    {
        title: "test3",
        summary: "test3",
        date: "test3"
    },

    {
        title: "test4",
        summary: "test4",
        date: "test4"
    },

    {
        title: "test5",
        summary: "test5",
        date: "test5"
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

    // selectObject = (array) => {
    //     return array[0];
    // }

    render() {
        return(
            <div>
                <AppNavbar/>
                {/* <ArticleDisplay entry = {this.selectObject(testArray)}/> */}
                <ArticleDisplay array = {testArray}/>
            </div>
        )
    }
};



export default App;
