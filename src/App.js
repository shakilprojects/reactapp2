import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './css/bootstrap.min.css';
import './css/footer-style.css';
import './css/styles.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Pages/Login";
import Catalogue from "./components/Pages/Catalogoue";
import Home from "./container/Home/Home";
import Courses from "./container/courses/Courses";



function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/courses">
                    <Courses />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>

        </div>
    </Router>
  );
}

export default App;
