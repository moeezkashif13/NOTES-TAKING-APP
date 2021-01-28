import React from 'react';

import classes from '../S-FUL CSS/TaskList.module.css';
class EachTaskFromThree extends React.Component{

    state = {
        text : this.props.text
    }

     clickedOnTask = event=>{

    }
    render(){


    return(
<a href="#!"  onClick={this.clickedOnTask} className={`${this.props.category} ${classes.tasklist__conditionsLINK}`}>{this.state.text}</a>




    )
}
}

export default EachTaskFromThree;