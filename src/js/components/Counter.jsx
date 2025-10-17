import React from "react";


const Counter = (props) => {
    return (
        <div className="bigCounter">
            <div className="calendar">
                {<i className="fa-regular fa-clock"></i>}
            </div>
            <div className="six">{props.digitSix}</div>
            <div className="five">{props.digitFive}</div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="seconds">{props.digitOne}</div>
            
        </div>
    );
};

export default Counter;