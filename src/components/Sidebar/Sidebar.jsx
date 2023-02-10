import '../../App.css';
import classes from "./Sidebar.module.css";

function Sidebar() {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li><a href="/profile">Профиль</a></li>
                <li><a href="/dialogs">Сообщения</a></li>
                <li><a href="/feed">Новости</a></li>
                <li><a href="/music">Музыка</a></li>
                <li><a href="/settings">Настройки</a></li>
            </ul>
        </nav>
    );
}


export default  Sidebar;
