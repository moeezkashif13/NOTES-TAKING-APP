import React from 'react';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import Auxx from '../../Auxx/Auxx';
import EachTaskFromThree from './EachTaskFromThree';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
import {BsPlus} from 'react-icons/bs';

 
// import firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import  "firebase/firebase-firestore";



class NewTask extends React.Component{

    state = {
        tasks : [
          // {name:'buy'},
          // {name:'purchase'},
          // {name : 'avienn'}
          
        ],
    
        
      }
    
      deleteTask = (event,index)=>{
    console.log(index);
    
        let tasks = this.state.tasks;
        console.log(tasks);
        
        tasks.splice(index,1);
        console.log(tasks);
      
        this.setState({
          tasks
        })
      
      }
    
      addNewTask = event=>{
    
      event.preventDefault();
      let tasks = this.state.tasks;
    
      
    
    tasks.push(1)
    
    this.setState({
      tasks,
      
    })
    
    }

    
    
render(){

    
    

    


    return(

<Auxx>



 {
     
   this.state.tasks.map((task, index) => {
     return <EachTaskFromThree text={'texttt'}
             key={index} 
             
             index={index} 
             deleteTask={this.deleteTask}
 />
   })
 }
   




{/* // {gotArrayOfComponents} */}
        

        <a onClick={this.addNewTask} href="#!" className={classes.tasklist__featuresNewTask}><BsPlus/> New</a>
      

        </Auxx>
        
        )
    }
}

const mapStateToProps = state=>{
    return{

    }
}

const mapDispatchToProps = dispatch=>{
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTask);