import React from 'react';


function newPost(props) {

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text)
    }

    return (
        <div>
        <div>New post</div>
        <textarea onChange={onPostChange} value={props.newPostText}/>
        <button onClick={addPost}>Add</button>
        </div>
    )
}

export default newPost;