import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/messages-reducer'
import Messages from './messages'


function MessagesContainer(props) {

    let state = props.store.getState().messagesPage

    let MessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }

    let SendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }


    return (
        <Messages messageChange={MessageChange} sendMessageClick={SendMessageClick} messages={state}/>
    );
}

export default MessagesContainer;