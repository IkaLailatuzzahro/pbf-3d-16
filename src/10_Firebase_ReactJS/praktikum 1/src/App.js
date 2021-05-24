import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import routes from './components/routes';


export const AuthContext = React.createContext(null);

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);


    return ( <
        AuthContext.Provider value = {
            { isLoggedIn, setLoggedIn } } >
        Is logged in ? { JSON.stringify(isLoggedIn) } <
        div className = "App" >
        <
        Router >
        <
        Header / >

        <
        Switch > {
            routes.map(route => ( <
                Route key = { route.path }
                path = { route.path }
                exact = { route.exact }
                component = { route.main }
                />
            ))
        } <
        /Switch>

        <
        /Router> <
        /div> <
        /AuthContext.Provider>
    );

}

export default App;