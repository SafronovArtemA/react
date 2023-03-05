import css from './message/message.module.css';


function Message(props) {
    return <div className={css.message}>
            <img src="https://avatars.mds.yandex.net/i?id=d9efaadcf247dc8a0f8b0545eccf2608-5366304-images-thumbs&n=13"></img>
            {props.name}
        </div>
}

export default Message;