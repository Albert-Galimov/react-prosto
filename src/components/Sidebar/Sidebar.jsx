import '../../App.css';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

function Sidebar(props) {

    let friendsElement = props.friends.map(f => <Friend img={f.img} name={f.name}/>);

    return (

        <div className={'p-10 text-center ' + classes.sidebar}>
            <nav>
                <ul>
                    <li><NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Профиль</NavLink></li>
                    <li><NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Сообщения</NavLink></li>
                    <li><NavLink to="/feed" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Новости</NavLink></li>
                    <li><NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Музыка</NavLink></li>
                    <li><NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Настройки</NavLink></li>
                </ul>
            </nav>
            <div className="mt-16 text-white w-full">
                <h3 className="text-2xl font-bold mb-5">Друзья</h3>
                <div className="flex justify-around flex-wrap">
                    {friendsElement}
                </div>
            </div>
        </div>
    );
}


export default Sidebar;
