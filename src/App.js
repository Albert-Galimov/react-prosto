import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Sidebar/>
            <Content/>
        </div>
    );
}


export default App;
