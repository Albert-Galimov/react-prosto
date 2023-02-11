import React from "react";

function Friend (props) {

    return (
        <div className="mr-2">
            <img className="w-16 h-16 rounded-full" src={props.img} alt=""/>
            <span>{props.name}</span>
        </div>
    );

}

export default Friend;