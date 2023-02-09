import '../../App.css';
import classes from "./Content.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Content() {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg" alt=""/>
            </div>
            <div>
                Ava + Description
            </div>
            <MyPosts/>
        </div>
    );
}


export default Content;
