import '../../../App.css';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {

    let postElement = props.dataArr.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    return (
        <div>
            <div>
                My posts
            </div>
            <div className={s.newPostForm}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Go</button>
                </div>
            </div>
            {postElement}
        </div>
    );
}


export default MyPosts;
