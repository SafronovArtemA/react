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
        }
    },
}


export const addPostActionCreator = () => {
    return {
        type: 'ADD_POST'
    }
}


export const updateNewPostActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        text: text
    }
}


export default store;