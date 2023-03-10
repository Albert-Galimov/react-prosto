import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs(props) {

    let dialogsElement = props.state.items.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = props.state.messages.map(m => <Message message={m.message}/>);

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