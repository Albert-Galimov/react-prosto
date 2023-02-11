import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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
let messageElement = DataMessages.map(m => <Message message={m.message}/>);

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