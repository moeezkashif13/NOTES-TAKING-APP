import React from 'react';

import classes from '../S-FUL CSS/HomePage.module.css';

class HomePage extends React.Component{

    render(){

        let small = 'https://i.postimg.cc/RFTNqdJP/hero-small-400.png';
        let medium = 'https://i.postimg.cc/4dGYJqy7/hero-medium-600.png';
        let large = 'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/product/hero.png';

        return(
            <section className={classes.homepage}>
{/* ${medium} 768w, ${large} 1280w */}
<div className={classes.homepage__imageContainer}>
    <img width={100} height={100} srcSet={`${small} 400w,${medium} 600w,${large} 1000w`}  src={large} className={classes.homepage__image} />
</div>


<div className={classes.homepage__textsContainer}>

<h1 className={classes.homepage__h1}>All-in-one workspace</h1>

<h2 className={classes.homepage__h2}>One tool for your whole team. Write, plan, and get organized.</h2>


{/* <div className={classes.homepage__inputContainer}> */}



<form className={classes.homepage__loginform}>
        <div className={classes.homepage__inputfloatinglabel}>
          <input className={classes.homepage__input} type="text" id="input" placeholder="Enter Your Email" />
        </div>
     
        <button id="submit" className={classes.homepage__btnsubmit}>Login</button>

        
      </form>





<h4 className={classes.homepage__h4}>For teams, individuals — web, mobile, Mac, Windows.</h4>




</div>



{/* </div> */}


            </section>
        )

    }

}

export default HomePage;