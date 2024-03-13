import React, { Component } from 'react';


const Completed = (props) => {
    let classes = "fa fa-check-square-o";
    if(!props.completed) classes += "fa fa-square-o";
    return(
        <i 
        onClick={props.onClick}
        style={{ cursor:'pointer' }} 
        className={classes} 
        aria-hidden="true" 
        />
    );   
}

export default Completed;

/*

render() { 
        let classes = "fa fa-check-square-o";
        if(!this.props.checked){ classes += "-check"
            return (<i className={classes} aria-hidden="true" />);
       }
    }


return (<i class="fa fa-check-square-o" aria-hidden="true"></i>);
*/