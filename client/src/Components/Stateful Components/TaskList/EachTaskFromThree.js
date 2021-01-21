import React from 'react';
import {BsThreeDots} from 'react-icons/bs';
import { AiFillDelete,AiFillCopy } from "react-icons/ai";

import classes from '../S-FUL SCSS/TaskList.module.scss';
import Auxx from '../../Auxx/Auxx';
import Dropdown from 'react-bootstrap/Dropdown';
 


class EachTaskFromThree extends React.Component{

    state = {
        text : this.props.text
    }

    mouseEntering = event=>{
        console.log(event.target.firstElementChild);
        this.setState({renderDropdown:false})
        
        event.target.firstElementChild.style.display = 'block';
        

    }
    
    dropdownFromThreeDots = event=>{


        this.setState({renderDropdown:true})


    }

    leaving = event=>{
        this.setState({renderDropdown:false})
        event.target.firstElementChild.style.display = 'none';

    }


    deleteTask = event=>{
        console.log('wwww');

        event.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        


        
    }

    render(){


    return(

        <Auxx>
<a href="#!" onMouseEnter={this.mouseEntering} onMouseLeave={this.leaving}  className={`${this.props.category} ${classes.tasklist__conditionsLINK}`}>{this.state.text}

<div style={{display:'none'}}  onClick={this.dropdownFromThreeDots} className={classes.tasklist__eachTaskThreeDots}>
    
    <BsThreeDots style={{fontSize:'2rem'}}></BsThreeDots>
    <ul className={classes.tasklist__dropdown}>

        {this.state.renderDropdown?
        <Auxx>
        <li className={classes.tasklist__dropdown__LITAG}>
    <a href="#!" onClick={this.deleteTask}>
        <i style={{backgroundColor:'transparent',marginRight:'3px'}}><AiFillDelete/> </i>
        <li>Delete</li>
    </a>
</li>

<li className={classes.tasklist__dropdown__LITAG}>
    <a href="#!">
        <i style={{backgroundColor:'transparent',marginRight:'3px',marginLeft:'13px'}}><AiFillCopy/> </i>
        <li>Duplicate</li>
    </a>
</li>


</Auxx>:null}
        





    </ul>



</div>

</a>




</Auxx>


   )
}
}

export default EachTaskFromThree;