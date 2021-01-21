import React from 'react';
import classes from '../S-FUL SCSS/TaskList.module.scss';


const NewTask = props=>{

console.log(props);

    

    return(



        <a onClick={props.addNewTask} href="#!" className={classes.tasklist__featuresNewTask}>+ New</a>
    
    
        )

}

export default NewTask;