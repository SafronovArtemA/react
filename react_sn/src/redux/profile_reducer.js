const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'


const initialState = {
            posts: [
                {id: 1, text: 'Hello', like: 30},
                {id: 2, text: 'Bye', like: 50},
            ],
            newPostText: '',
        }


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST:
        let newPost = {
            id: 3,
            text: state.newPostText,
            like: 0
        }
        state.posts.push(newPost)
        state.newPostText = ''
        return state
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.text
        return state
    default:
        return state
    }
}


export const addPostActionCreator = () => ({ type: 'ADD_POST' })
export const updateNewPostActionCreator = (text) => ({ type: 'UPDATE_NEW_POST_TEXT', text: text })


export default profileReducer