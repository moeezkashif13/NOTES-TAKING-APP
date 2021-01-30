import React from 'react'
import EachTaskFromThree from './EachTaskFromThree';
import {connect} from 'react-redux';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import NewTask from './NewTASK';
import { BsThreeDots,BsPlusCircle } from "react-icons/bs";

class DOING extends React.Component{

    state = {
        quantity : 7,
    }

    render(){

console.log('wwwww');

        console.log(this.props);
        

    return(
<div className={`${classes.tasklist__DOING} ${classes.tasklist__conditions}`}>

<div className={` ${classes.tasklist__DoingCondition} ${classes.tasklist__allConditions}`}>

<a href="#!" className={classes.tasklist__task}>Doing</a>

<span>{this.state.quantity}</span>

<div className={classes.tasklist__twoSigns}>
    <a href="#!"><BsThreeDots/></a>
    <a href="#!"><BsPlusCircle/></a>
</div>

    </div>




<NewTask class={classes.tasklist__DOINGLINK}/>


</div>
)
}
}

const mapStateToProps = state=>{
    return{
ItemDeleted : state.ItemDeleted
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        // ItemDeleted : arr=>dispatch({type:'ItemDeleted',newArray:arr}),
    }
}





export default connect(mapStateToProps,mapDispatchToProps)(DOING);