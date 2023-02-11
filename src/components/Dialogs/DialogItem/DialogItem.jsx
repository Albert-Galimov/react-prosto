import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem (props) {

    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id}
                     className={navData => navData.isActive ? s.active : s.colorWhite}>{props.name}</NavLink>
        </div>
    );

}

export default DialogItem;