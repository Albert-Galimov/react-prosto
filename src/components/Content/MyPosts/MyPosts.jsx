import '../../../App.css';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let DataPosts = [
    {message: 'Привет, это мой первый пост!', likeCount: 30},
    {message: 'React - это просто!', likeCount: 80},
    {message: 'Всё будет!', likeCount: 99},
    {message: 'Только вперёд', likeCount: 50},
    {message: 'Что за мотивирующие сообщения?', likeCount: 645}
];

let postElement = DataPosts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

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
            {postElement}
        </div>
    );
}


export default MyPosts;
