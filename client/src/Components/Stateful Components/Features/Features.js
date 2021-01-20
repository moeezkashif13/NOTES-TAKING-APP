import React from 'react';

import classes from '../S-FUL CSS/Features.module.css';
import EachFeature from './EachFeature';

class Features extends React.Component{

    render(){
    return(
        
        <section className={classes.features}>

<EachFeature/>

{/* <div className={classes.features__box}>

    PPPP
</div>

<div className={classes.features__box}>

    PPPP
</div>

<div className={classes.features__box}>

    PPPP
</div>

<div className={classes.features__box}>

    PPPP
</div>

<div className={classes.features__box}>

    PPPP
</div> */}


        </section>

    )

}
}

export default Features;