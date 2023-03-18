import css from './profile.module.css'
import Post from './posts/posts'
import NewPostContainer from './new_posts/new_posts_container'
import PersonalProfile from './personal/personal'
import StoreContext from '../../../store_context'


function Profile(props) {

    return (
        <StoreContext.Consumer>
            {
                store => {

                    let posts = props.stor.getState().profilePage.posts
                    let postElements = posts.map(post => <Post text={post.text} likes={post.like} />)

                    return (
                        <div className={css.profile}>
                            <PersonalProfile />
                            <NewPostContainer />
                            <div>My posts</div>
                            { postElements }
                        </ div>
                        )
                }
            }

        </StoreContext.Consumer>
    )
}

export default Profile