import UserMessage from './user_message/user_message';
import TextMessage from './text_message/text_message';
import css from './messages.module.css';
import React from 'react'

function Messages(props) {

    let userElements = props.messages.users.map(user => <UserMessage name={user.name} id={user.id}/>)
    let messageElements = props.messages.messages.map(message => <TextMessage message={message.message}/>)

    let newMessage = React.createRef()
    let addMessage = () => {
        let message = newMessage.current.value;
        alert(message)
    }

    return (
        <div className={css.messages}>
            <div>
                { userElements }
            </div>
            <div>
                { messageElements }
                <textarea ref={newMessage}/>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    );
}

export default Messages;