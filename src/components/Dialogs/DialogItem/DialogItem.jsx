import React from "react";
import s from "../Dialogs.module.css";

function DialogItem(props) {

    return (
        <div className={s.item}>
            {props.name}
        </div>
    );

}

export default DialogItem;