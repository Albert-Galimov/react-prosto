import '../../App.css';
import s from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";


let DataPosts = [
    {message: 'Привет, это мой первый пост!', likeCount: 30},
    {message: 'React - это просто!', likeCount: 80},
    {message: 'Всё будет!', likeCount: 99},
    {message: 'Только вперёд', likeCount: 50},
    {message: 'Что за мотивирующие сообщения?', likeCount: 645}
];

function Content() {
    return (
        <div className={s.content}>
            <ProfileDescription/>
            <MyPosts dataArr={DataPosts}/>
        </div>
    );
}


export default Content;
