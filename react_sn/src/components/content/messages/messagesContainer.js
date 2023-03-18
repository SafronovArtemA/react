//import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../../redux/messages-reducer'
import Messages from './messages'
//import StoreContext from '../../../store_context'
import {connect} from 'react-redux'


//function MessagesContainer(props) {
//
//
//    return (
//    <StoreContext.Consumer>
//        {
//            (store) => {
//                let state = store.getState().messagesPage
//
//                let MessageChange = (text) => {
//                    store.dispatch(updateNewMessageBodyCreator(text))
//                }
//
//                let SendMessageClick = () => {
//                    store.dispatch(sendMessageCreator())
//                }
//
//                return (
//                    <Messages messageChange={MessageChange} sendMessageClick={SendMessageClick} messages={state}/>
//                )
//            }
//        }
//    </StoreContext.Consumer>
//    );
//}

const mapStateToProps = (state) => {
    return {
        messages: state.messagesPage
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageClick: () => {
            dispatch(sendMessageCreator())
        },
        messageChange: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        }
    }
}


const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;