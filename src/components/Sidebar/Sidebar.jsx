import '../../App.css';
import classes from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><NavLink to="/profile" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Профиль</NavLink></li>
                <li><NavLink to="/dialogs" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Сообщения</NavLink></li>
                <li><NavLink to="/feed" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Новости</NavLink></li>
                <li><NavLink to="/music" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Музыка</NavLink></li>
                <li><NavLink to="/settings" className={navData => navData.isActive ? classes.active : classes.colorWhite}>Настройки</NavLink></li>
            </ul>
        </nav>
    );
}


export default Sidebar;
