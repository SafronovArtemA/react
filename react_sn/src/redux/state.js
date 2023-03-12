let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: 'Hello', like: 30},
                {id: 2, text: 'Bye', like: 50},
            ],
            newPostText: '',
        },
        messagesPage:{
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
        },
    },
    _rerenderEntireTree() {
        console.log('rerenderEntireTree');
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },


//    addPost() {
//        let newPost = {
//            id: 3,
//            text: this._state.profilePage.newPostText,
//            like: 0
//        }
//        this._state.profilePage.posts.push(newPost)
//        this._rerenderEntireTree(this._state)
//        this._state.profilePage.newPostText = ''
//    },
//    updateNewPostText(text) {
//        this._state.profilePage.newPostText = text
//        this._rerenderEntireTree(this._state)
//    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 3,
                text: this._state.profilePage.newPostText,
                like: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._rerenderEntireTree(this._state)
            this._state.profilePage.newPostText = ''
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.text
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'SEND_NEW_MESSAGE') {
            let newMessage = {
                id: 4,
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.messagesPage.newMessageText = action.text
            this._rerenderEntireTree(this._state)
        }
    },
}


export const addPostActionCreator = () => ({ type: 'ADD_POST' })
export const updateNewPostActionCreator = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', text: text })
export const sendMessageCreator = () => ({ type: 'SEND_NEW_MESSAGE' })
export const updateNewMessageBodyCreator = (text) => ({ type: 'UPDATE_NEW_MESSAGE_TEXT', text: text })


export default store;