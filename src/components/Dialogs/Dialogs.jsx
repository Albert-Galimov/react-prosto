import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

let DataDialogs = [
    {name: 'Альберт', id: 1},
    {name: 'Стас', id: 2},
    {name: 'Гузель', id: 3},
    {name: 'Денис', id: 4}
];

let DataMessages = [
    {message: 'Привет, как дела?'},
    {message: 'как проект?'},
    {message: 'Да посмотрела видео'},
    {message: 'Только вперёд!'}
];

let dialogsElement = DataDialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
let messageElement = DataMessages.map(m => <Context message={m.message}/>);

function DialogItem(props) {

    return (
        <div className={s.item}>
            <NavLink to={'/dialogs/' + props.id}
                     className={navData => navData.isActive ? s.active : s.colorWhite}>{props.name}</NavLink>
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
                {dialogsElement}
            </div>
            <div className={s.MessagesContexts}>
                {messageElement}
            </div>
        </div>
    )

}

export default Dialogs;