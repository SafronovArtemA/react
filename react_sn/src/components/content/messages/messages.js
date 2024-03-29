import UserMessage from './user_message/user_message';
import TextMessage from './text_message/text_message';
import css from './messages.module.css';
import React from 'react'


function Messages(props) {

    let userElements = props.messages.users.map(user => <UserMessage name={user.name} id={user.id}/>)
    let messageElements = props.messages.messages.map(message => <TextMessage message={message.message}/>)

    let onMessageChange = (e) => {
        let text = e.target.value
        props.messageChange(text)
    }

    let onSendMessageClick = () => {
        props.sendMessageClick()
    }


    return (
        <div className={css.messages}>
            <div>
                { userElements }
            </div>
            <div>
                { messageElements }
                <textarea onChange={onMessageChange} value={props.messages.newMessageText}/>
                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    );
}

export default Messages;