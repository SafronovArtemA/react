import css from './text_message.module.css';


function textMessage(props) {
    return(
        <div className={css.text}>
            {props.message}
        </div>
    )
}



export default textMessage;