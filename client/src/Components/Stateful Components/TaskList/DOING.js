import React from 'react'
import EachTaskFromThree from './EachTaskFromThree';
import {connect} from 'react-redux';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import NewTask from './NewTASK';
import { BsThreeDots,BsPlusCircle } from "react-icons/bs";

class DOING extends React.Component{

    state = {
        quantity : 2,
    }

    render(){


    return(
<div className={`${classes.tasklist__DOING} ${classes.tasklist__conditions}`}>

<div className={` ${classes.tasklist__DoingCondition} ${classes.tasklist__allConditions}`}>

<a href="#!" style={{backgroundColor:'#fbeecc'}} className={`${classes.tasklist__task} ${classes.tasklist__DOINGTASK}`}>Doing</a>

<span>{this.state.quantity}</span>

<div className={classes.tasklist__twoSigns}>
    <a href="#!"><BsThreeDots/></a>
    <a href="#!"><BsPlusCircle/></a>
</div>

    </div>




    <NewTask   class={classes.tasklist__DOINGLINK}/>


</div>
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





export default connect(mapStateToProps,mapDispatchToProps)(DOING);