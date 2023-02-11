import '../../App.css';
import s from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

function Content(props) {

    return (
        <div className={s.content}>
            <ProfileDescription/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}


export default Content;
