import '../../../../App.css';
import classes from "./Post.module.css";

function Post(props) {
    return (
        <div className={classes.item}>
            <img
                src="https://s11.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/01/kadr-iz-filma-avatar-put-vody.jpg"
                alt=""/>
            <span> {props.message} </span>
            <div>
                <span>{props.likeCount} лайков</span>
            </div>
        </div>
    );
}


export default Post;
