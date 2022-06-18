//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props){
    return (<div className="bigCounter">
        
        <div className="calendar">
        <i className="fa-solid fa-clock"></i>
        </div>
        <div className="four">{props.digitFour}</div>
        <div className="three">{props.digitThree}</div>
        <div className="two">{props.digitTwo}</div>
        <div className="one">{props.digitOne}</div>
        
    </div>);
}

let counter = 0;
setInterval(function() { 
    const Four = Math.floor(counter/10000);
    const Three = Math.floor(counter/1000);
    const Two = Math.floor(counter/100);
    const One = Math.floor(counter/10);
    console.log(F)


    ReactDOM.render(
        <SimpleCounter digitOne={counter.indexOf()} />,
        document.querySelector('#app')
    );
},100);


//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
