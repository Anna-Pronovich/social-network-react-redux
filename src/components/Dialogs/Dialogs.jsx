import React from 'react';

import AddMessageForm from "./AddMessageFromRedux/AddMessageFormRedux";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import styles from './Dialogs.module.css';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message message={message.message} key={message.id} />);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div>{messagesElements}</div>
                <div>
                    <AddMessageForm onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;