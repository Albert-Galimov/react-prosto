import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";


function DialogItem(props) {

    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.colorWhite}>{props.name}</NavLink>
        </div>
    );

}

function Context(props) {

    return (
        <div className={s.context}>
            {props.message}
        </div>
    );

}

function Dialogs() {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Альберт" id='1'/>
                <DialogItem name="Стас" id='2'/>
                <DialogItem name="Гузель" id='3'/>
                <DialogItem name="Денис" id='4'/>
            </div>
            <div className={s.MessagesContexts}>
                <Context message='Привет'/>
                <Context message='как проект?' />
                <Context message='Да посмотрела видео'/>
                <Context message='Только вперёд!'/>
            </div>
        </div>
    )

}

export default Dialogs;