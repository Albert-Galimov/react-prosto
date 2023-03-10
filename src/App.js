import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Sidebar friends={props.state.sidebar.friends} />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Content state={props.state.profile} />}/>
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialog} />}/>
                        <Route path='/feed' element={<Feed/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
