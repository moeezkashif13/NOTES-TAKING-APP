import React from 'react';

import classes from '../S-FUL SCSS/TaskList.module.scss';
import DO from './DO';
import DOING from './DOING';
import DONE from './DONE';
import { BsClipboard,BsFillCaretDownFill } from "react-icons/bs";

// import EachTaskThreeDots from './EachTaskThreeDots/EachTaskThreeDots';



class TaskList extends React.Component{

    changeInstructions = event=>{

        console.log(event.target);

        event.target.setAttribute('contenteditable','true');
        

    }

    render(){
        return(
            
            <section className={classes.tasklist}>

<div className={classes.tasklist__sidebar}></div>
{/* tasklist__taskArea */}
<div className={classes.tasklist__taskArea}>
    
{/* tasklist__instructions */}
<div className={classes.tasklist__instructions} onClick={this.changeInstructions}>

    <h1 className={classes.tasklist__heading}>(ICON) Task List</h1>

<p className={classes.tasklist__PTAG}>Use this template to track your personal tasks.</p>

<p className={classes.tasklist__PTAG}>Click + New to create a new task directly on this board.</p>


<p className={classes.tasklist__PTAG}>Click an existing task to add additional context or subtasks.</p>


</div>
{/* tasklist__instructions */}

{/* tasklist__navbar */}


<ul className={classes.tasklist__navbar}>

<li className={classes.tasklist__LITAG}>
    <a href="#!" className={classes.tasklist__linkTAG}><BsClipboard/> <span style={{margin:'0 3px'}}>Board View</span> <BsFillCaretDownFill/></a>
</li>

<div className={classes.tasklist__toTheRight}>


<li className={classes.tasklist__LITAG}>

<a href="#!" className={classes.tasklist__linkTAG}>Properties</a>

</li>

<li className={classes.tasklist__LITAG}>

<a href="#!" className={classes.tasklist__linkTAG}>Filter</a>

</li>

<li className={classes.tasklist__LITAG}>

<a href="#!" className={classes.tasklist__linkTAG}>Sort</a>

</li>

<li className={classes.tasklist__LITAG}>

<a href="#!" className={classes.tasklist__linkTAG}>Search</a>

</li>



</div>

</ul>

{/* tasklist__navbar */}


<div className={classes.tasklist__threeConditionsDIV}>


<DO />
<DOING/>

{/* kyunn ke kchh classes abhii undeifned hainn iss liye EACH TASK FROM THERE KE PROPS UNDEFIENED DIKHAA SAKTE */}


<DONE/>


{/* <EachTaskThreeDots/> */}

</div>



</div>
{/* tasklist__taskArea */}
            </section>
            

        )
    }
}


export default TaskList;