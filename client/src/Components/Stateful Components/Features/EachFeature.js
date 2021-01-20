import React from 'react';

import classes from '../S-FUL CSS/EachFeature.module.css';

const allDetails = [
    {
        image:'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/product.png',
        heading : 'Product',
        first:'Visualize your product roadmap',
        second : 'Write feature specs',
        third : 'Cross-functional collaboration',
},

{
    image:'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/engineering.png',
    heading : 'Engineering',
    first:'Coordinate releases',
    second : 'Codify processes',
    third : 'Write docs to ship fast',
},

{
    image:'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/hr.png',
    heading : 'HR',
    first:'Create a company wiki',
    second : 'Answer questions at scale',
    third : 'Onboard new employees',
},




{
    image:'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/design.png',
    heading : 'Design',
    first:'Track every project',
    second : 'Catalog logos, fonts, and assets',
    third : 'Publish a design system',
},

{
    image:'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/sales.png',
    heading : 'Sales',
    first:'Build a flexible CRM',
    second : 'Organize all meeting notes',
    third : 'Share a single playbook',
},

{
    image:'https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/marketing.png',
    heading : 'Marketing',
    first:'Make a style guide',
    second : 'Track your content calendar',
    third : 'Keep tabs on everything',
}

]

const EachFeature = ()=>{

    let generateEach = allDetails.map(elem=>{
        console.log(elem);
        
        return <div className={classes.features__box}>

    
        <div className={classes.features__imageContainer}>
            <img src={elem.image}
               className={classes.features__image}
            />
        </div>
        
        
        <h4 className={classes.features__h4}>{elem.heading}</h4>
        
        <ul className={classes.features__UL}>
        
        <li className={classes.features__LI}>{elem.first}</li>
        
        <li className={classes.features__LI}>{elem.second}</li>
        
        
        <li className={classes.features__LI}>{elem.third}</li>
        
        
        
        </ul>
        
        </div>
    })

    return(

        generateEach

    )

}

export default EachFeature;