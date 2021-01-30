import React from 'react';
import {BsThreeDots} from 'react-icons/bs';
import { AiFillDelete,AiFillCopy } from "react-icons/ai";
import {connect} from 'react-redux';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import Auxx from '../../Auxx/Auxx';
import $ from 'jquery';
 


class EachTaskFromThree extends React.Component{

    state = {
        text : this.props.text
    }

    mouseEntering = event=>{

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
    
        console.log(event.target);

           
       let id =  $(event.target).parents()[4]
        

       console.log(id.id);
       let deleting = this.props.allArray
       console.log(deleting);
       
       
       deleting.forEach((elem,index)=>{
           
           console.log(elem.props.id);

           if(id.id == elem.props.id){
              
               let delIT = deleting.splice(index,1);
               console.log(deleting);
          this.props.ItemDeleted(delIT);
          
            }
           
       })
       
       
        
        
    }

    render(){


    return(

        <Auxx>
<a id={this.props.id} href="#!" onMouseEnter={this.mouseEntering} onMouseLeave={this.leaving}  className={`${this.props.category} ${classes.tasklist__conditionsLINK}`}>{this.state.text}

<div style={{display:'none'}}  onClick={this.dropdownFromThreeDots} className={classes.tasklist__eachTaskThreeDots}>
    
    <BsThreeDots style={{fontSize:'2rem'}}></BsThreeDots>

        {this.state.renderDropdown?
    <ul className={classes.tasklist__dropdown}>
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






    </ul>
    :null}



</div>

</a>




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
        ItemDeleted : arr=>dispatch({type:'ItemDeleted',newArray:arr}),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(EachTaskFromThree);