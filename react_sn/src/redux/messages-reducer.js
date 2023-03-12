const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


const initialState = {
            users: [
                {id: 1, name: 'Ivan'},
                {id: 2, name: 'Petr'},
                {id: 3, name: 'Alex'},
            ],
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Welcome'},
            ],
            newMessageText: '',
        }

const messagesReducer = (state = initialState, action) => {
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