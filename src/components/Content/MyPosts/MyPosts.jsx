import '../../../App.css';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
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
            <Post message='Привет, это мой первый пост!' likeCount='30'/>
            <Post message='React - это просто!' likeCount='80'/>
            <Post message='Всё будет!' likeCount='100'/>
            <Post message='Только вперёд' likeCount='50'/>
            <Post message='Что за мотивирующие сообщения?' likeCount='645'/>
        </div>
    );
}


export default MyPosts;
