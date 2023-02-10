import '../../App.css';
import s from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

function Content() {
    return (
        <div className={s.content}>
            <ProfileDescription/>
            <MyPosts/>
        </div>
    );
}


export default Content;
