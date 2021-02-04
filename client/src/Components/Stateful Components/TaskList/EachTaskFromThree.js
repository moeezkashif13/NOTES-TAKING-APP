import React from 'react';
import {BsThreeDots} from 'react-icons/bs';
import { AiFillDelete,AiFillCopy } from "react-icons/ai";
import {connect} from 'react-redux';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import Auxx from '../../Auxx/Auxx';




class EachTaskFromThree extends React.Component{

    render(){

        
    return(

        <Auxx>

            
<div id={this.props.index} className={classes.tasklist__conditionsLINK}>

<p>{this.props.text}</p>

<a href="#!" onClick={(event,index)=>this.props.deleteTask(event,this.props.index)}>DELETE</a>

</div>


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


export default connect(mapStateToProps,mapDispatchToProps)(EachTaskFromThree);