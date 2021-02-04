import React from 'react'
import EachTaskFromThree from './EachTaskFromThree';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import NewTask from './NewTASK';
import { BsThreeDots,BsPlusCircle } from "react-icons/bs";

class DO extends React.Component{

    state = {
        quantity : 2,
 
// arra : [],
    }
   
//     addNewTask = ()=>{

// let arra = this.state.arra;
// let slice = arra.slice();

// slice.push(<EachTaskFromThree category={classes.tasklist__DOLINK} text = "text"/>);

// this.setState({arra:slice});



//     }

    render(){

// let gotIt = this.state.arra;
// let spiled = gotIt.slice();

// let mapped = spiled.map(elem=>{
//     return elem;
// })


    return(
<div className={`${classes.tasklist__DO} ${classes.tasklist__conditions}`} id="do">

    <div className={` ${classes.tasklist__ToDoCondition} ${classes.tasklist__allConditions}`}>

<a href="#!" style={{backgroundColor:'#e8d5cc'}} className={`${classes.tasklist__task} ${classes.tasklist__DOTASK}`}>TO DO</a>

<span>{this.state.quantity}</span>

<div className={classes.tasklist__twoSigns}>
    <a href="#!"><BsThreeDots/></a>
    <a href="#!"><BsPlusCircle/></a>
</div>

    </div>


<NewTask class={classes.tasklist__DOLINK}/>



</div>
)
}
}



export default DO;