import '../App.css';
import classes from "./Content.module.css";

function Content() {
    return (
        <div className={classes.content}>
            <div>
                <img src="https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg" alt=""/>
            </div>
            <div>
                Ava + Description
            </div>
            <div>
                My posts
            </div>
            <div>
                New Post
            </div>
            <div>
                Post1
            </div>
            <div>
                Post2
            </div>
        </div>
    );
}




export default Content;
