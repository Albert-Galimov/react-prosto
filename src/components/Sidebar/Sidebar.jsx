import '../../App.css';
import classes from "./Sidebar.module.css";

function Sidebar() {
    return (
        <nav className={classes.sidebar}>
            <ul>
                <li>Профиль</li>
                <li>Сообщения</li>
                <li>Новости</li>
                <li>Музыка</li>
                <li>Видео</li>
                <li>Настройки</li>
            </ul>
        </nav>
    );
}


export default  Sidebar;
