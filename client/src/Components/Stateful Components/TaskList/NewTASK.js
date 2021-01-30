import React from 'react';
import classes from '../S-FUL SCSS/TaskList.module.scss';
import Auxx from '../../Auxx/Auxx';
import EachTaskFromThree from './EachTaskFromThree';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
// import firebase from "firebase/app";

// // Add the Firebase services that you want to use
// import  "firebase/firebase-firestore";



class NewTask extends React.Component{

// console.log(props);

state = {
    
    // eachTaskArray : [],

    eachTaskArray : [],
    numb : 2,
}


addNewTask = event=>{

console.log('add new taskkk');

    
// UNDEFIENEDD KYUNN KE CLASSES ABHII DEFINEDD NHII




    // let db = firebase.firestore();
        
    console.log('clickeddd');
    
// // console.log(event.target.parentElement);
// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);             // Append the text to <li>

// console.log(node);

let eachTask = this.state.eachTaskArray.slice();

eachTask.push(<EachTaskFromThree id={uuidv4()} allArray = {eachTask} category='classes.tasklist__DOLINK' text = {uuidv4()}/>);
console.log(eachTask);

this.setState({eachTaskArray:eachTask})


// var docData = {
//     check : eachTask,
//     dateExample: firebase.firestore.Timestamp.fromDate(new Date("December 10, 1815")),
//     arrayExample: [5, true, "hello"],
    
// };




//  // Add a new document in collection "cities"
//  db.collection("cities").doc("arrayBro").set({
//      avien : node.innerHTML
//  })
// .then(function() {
//     console.log("Document successfully written!");
// })
// .catch(function(error) {
//     console.error("Error writing document: ", error);
// });


}




componentDidUpdate(prevProps,prevState){
 
    // console.log(prevState);
    
    if(prevProps.ItemDeleted!=this.props.ItemDeleted){
        this.setState({eachTaskArray : this.props.ItemDeleted})
    
    
    }
    // console.log(this.props.ItemDeleted);
    

    // console.log(prevProps);
    

    
}

render(){

    
let gotIt = this.state.eachTaskArray.slice();

let mapped = gotIt.map((elem,index)=>{
    
    return <Auxx key={index} >{elem}</Auxx>;

})



// console.log(mapped);

    return(

<Auxx>


 {mapped}

        <a onClick={this.addNewTask} href="#!" className={classes.tasklist__featuresNewTask}>+ New</a>
      

        </Auxx>
    
        )
    }
}

const mapStateToProps = state=>{
    return{
        ItemDeleted : state.ItemDeleted,
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        // ItemDeleted : arr=>dispatch({type:'ItemDeleted',newArray:arr}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTask);