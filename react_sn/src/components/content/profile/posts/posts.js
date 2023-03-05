import css from './posts.module.css';


function Post(props) {
    return (
    <div className={css.post}>
        <div>
            <img src="https://avatars.mds.yandex.net/i?id=0d1f191248a24f6357cdb0fa6257656ab26d5b64-7800950-images-thumbs&n=13"></img>
            {props.text}
            <div>
            <span>like </span>
            {props.likes}
            </div>
        </div>
    </div>
    )
}

export default Post;