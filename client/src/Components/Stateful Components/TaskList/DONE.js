import React from 'react'
import EachTaskFromThree from './EachTaskFromThree';
import classes from '../S-FUL SCSS/TaskList.module.scss';
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

<a href="#!" style={{backgroundColor:'#ffccd1'}} className={`${classes.tasklist__task} ${classes.tasklist__DONETASK}`}>Done</a>

<span>{this.state.quantity}</span>

<div className={classes.tasklist__twoSigns}>
    <a href="#!"><BsThreeDots/></a>
    <a href="#!"><BsPlusCircle/></a>
</div>

    </div>

{/* <a href="#!" className={`${classes.tasklist__DOLINK} ${classes.tasklist__conditionsLINK}`}>texttt</a> */}




<NewTask class={classes.tasklist__DONELINK}/>


</div>
)
}
}



export default DONE;