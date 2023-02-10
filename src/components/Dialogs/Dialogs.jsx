import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import {NavLink} from "react-router-dom";

function Dialogs() {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <NavLink to='/dialogs/1'><DialogItem name="Альберт"/></NavLink>
                <NavLink to='/dialogs/2'><DialogItem name="Стас"/></NavLink>
                <NavLink to='/dialogs/3'><DialogItem name="Гузель"/></NavLink>
                <NavLink to='/dialogs/4'><DialogItem name="Денис"/></NavLink>
            </div>
            <div className={s.MessagesContexts}>
                <div className={s.context}>
                    HI
                </div>
            </div>
        </div>
    )

}

export default Dialogs;