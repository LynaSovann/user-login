import React from "react";
import "./index.css";
import { BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
} from "react-router-dom";
import { SolutionOutlined ,UserOutlined, SettingOutlined } from "@ant-design/icons";
import Dashboard from "./components/Dashboard";
import FinalSpace from "./components/FinalSpace";

export interface LoginInterface {
    username: string;
    email: string;
    password: string;
}

const Header: React.FC = () => {

    const style = {
        navigator: {
            color: "#2C3333",
            textDecoration: "none",
            margin: "0 10px",
            hover: {
                backgroundColor: "#CBE4DE",
            }
        },
    }

    return (
        <Router>
            <header className="nav">
                <a href="/" className="title">
                    <h1>< UserOutlined />FinalSpace</h1>
                </a>
                <ul>
                    <li><NavLink exact to="/dashboard" className="each-page" style={style.navigator} activeClassName="active">< SolutionOutlined /> Dashboard</NavLink></li>
                    <li><NavLink exact to="/finalspace" className="each-page" style={style.navigator} activeClassName="active">< SettingOutlined /> Final Space</NavLink></li>
                </ul>
            </header>
            <Switch>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/finalspace" exact component={FinalSpace}/>
            </Switch>
        </Router>
    )
}

export default Header;