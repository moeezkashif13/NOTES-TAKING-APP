import React from 'react';

// import classesFROMCSS from '../CSS/Navbar.css';
import classes from '../S-LESS CSS/Navbar.module.css';

// import Button from 'react-bootstrap/Button';


const Navbar = ()=>{

    
       return(
        
        <nav className={classes.navbar}>

<div className={classes.navbar__logoContainer}>

<a href="#!" className={classes.navbar__logoContainerATAG}>

<div className={classes.navbar__img}></div>
<div className={classes.navbar__text}>Notion</div>


</a>


</div>

{/* https://i.ibb.co/gzVHXQq/710c9512be09db6832b6720931e13625-removebg-preview.png */}


<div className={classes.navbar__mainLists}>

<ul className={classes.navbar_UL}>


<li className={classes.navbar__listItem}>
<a href="#!" className={classes.navbar__links}>Download</a>

</li>




<li className={classes.navbar__listItem}>
<a href="#!" className={classes.navbar__links}>Pricing</a>
</li>



<li className={classes.navbar__listItem}>
<a href="#!" className={classes.navbar__links}>Login</a>
</li>



<li className={classes.navbar__listItem}>
<a href="#!" className={classes.navbar__links}>Sign Up</a>

</li>









</ul>




</div>


        </nav>
         

       )

}


export default Navbar;

