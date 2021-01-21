import React from 'react'
import EachTaskFromThree from './EachTaskFromThree';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import NewTask from './NewTASK';
import { BsThreeDots,BsPlusCircle } from "react-icons/bs";

class DO extends React.Component{

    state = {
        quantity : 2,
 
arra : [],
    }
   
    addNewTask = ()=>{

let arra = this.state.arra;
let slice = arra.slice();

slice.push(<EachTaskFromThree category={classes.tasklist__DOLINK} text = "text"/>,);

this.setState({arra:slice});



    }

    render(){

let gotIt = this.state.arra;
let spiled = gotIt.slice();

let mapped = spiled.map(elem=>{
    return elem;
})


    return(
<div className={`${classes.tasklist__DO} ${classes.tasklist__conditions}`} id="do">

    <div className={` ${classes.tasklist__ToDoCondition} ${classes.tasklist__allConditions}`}>

<a href="#!" className={classes.tasklist__task}>TO DO</a>

<span>{this.state.quantity}</span>

<div className={classes.tasklist__twoSigns}>
    <a href="#!"><BsThreeDots/></a>
    <a href="#!"><BsPlusCircle/></a>
</div>

    </div>

{/* <a href="#!" className={`${classes.tasklist__DOLINK} ${classes.tasklist__conditionsLINK}`}>texttt</a> */}

 {/* <EachTaskFromThree category={classes.tasklist__DOLINK} text = "textpop"/> */}


 {/* <EachTaskFromThree category={classes.tasklist__DOLINK} text = "text"/>*/}


<EachTaskFromThree category={classes.tasklist__DOLINK} text = "text"/>

{/* // {this.state.truey?<EachTaskFromThree category={classes.tasklist__DOLINK} text = "text"/>:null} */}
{mapped}


<NewTask addNewTask={this.addNewTask}/>



</div>
)
}
}



export default DO;