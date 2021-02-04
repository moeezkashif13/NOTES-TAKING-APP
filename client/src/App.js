import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import {Component} from 'react';
import Auxx from './Components/Auxx/Auxx';
import Navbar from './Components/Stateless Components/Navbar/Navbar';
import HomePage from './Components/Stateful Components/HomePage/HomePage';
import Features from './Components/Stateful Components/Features/Features';
import TaskList from './Components/Stateful Components/TaskList/TaskList';
import TodoItem from './TodoItem.js';
import TodoForm from './TodoForm.js';

class App extends Component {




  render(){




  return (
    
    <Auxx>
    {/* <Navbar/> */}

    {/* <HomePage/> */}

{/* <Features/> */}




<TaskList/> 






    </Auxx>



  );
}
}

export default App;
