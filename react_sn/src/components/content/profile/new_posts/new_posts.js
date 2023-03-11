import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/state'

function newPost(props) {

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div>
        <div>New post</div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={addPost}>Add</button>
        </div>
    )
}

export default newPost;