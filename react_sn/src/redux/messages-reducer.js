const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


const messagesReducer = (state, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({ type: 'SEND_NEW_MESSAGE' })
export const updateNewMessageBodyCreator = (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text: text })


export default messagesReducer