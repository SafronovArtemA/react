//import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/profile_reducer'
import NewPost from './new_posts'
//import StoreContext from '../../../../store_context'
import {connect} from 'react-redux'


//function newPostContainer(props) {
//
//
//    return (
//        <StoreContext.Consumer>
//        {
//            (store) => {
//
//                let addPost = () => {
//                    store.dispatch(addPostActionCreator())
//                }
//
//                let onPostChange = (text) => {
//                    store.dispatch(updateNewPostActionCreator(text))
//                }
//
//                return(
//                   <NewPost addPost={addPost} onPostChange={onPostChange}
//                   newPostText={store.getState().profilePage.newPostText} />
//                )
//            }
//        }
//
//
//        </StoreContext.Consumer>
//
//
//    )
//}


const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}


const newPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)


export default newPostContainer;