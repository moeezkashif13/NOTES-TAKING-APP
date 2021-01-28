import React from 'react'
import EachTaskFromThree from './EachTaskFromThree';
import classes from '../S-FUL CSS/TaskList.module.css';
import NewTask from './NewTASK';

import { BsThreeDots,BsPlusCircle } from "react-icons/bs";

class DONE extends React.Component{


    state = {
        quantity : 5,
    }

    render(){
    return(
<div className={`${classes.tasklist__DONE} ${classes.tasklist__conditions}`}>


<div className={` ${classes.tasklist__DoneCondition} ${classes.tasklist__allConditions}`}>

<a href="#!" className={classes.tasklist__task}>Done</a>

<span>{this.state.quantity}</span>

<div className={classes.tasklist__twoSigns}>
    <a href="#!"><BsThreeDots/></a>
    <a href="#!"><BsPlusCircle/></a>
</div>

    </div>

{/* <a href="#!" className={`${classes.tasklist__DOLINK} ${classes.tasklist__conditionsLINK}`}>texttt</a> */}

<EachTaskFromThree category={classes.tasklist__DONELINK} text = "text"/>

<NewTask/>


</div>
)
}
}



export default DONE;