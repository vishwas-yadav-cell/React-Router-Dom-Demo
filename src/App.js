import React from 'react';
import Header from './components/Header';
import FormComponent from './components/FormComponent';
import EVM from './components/EVM';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route path="/Auth/evm">
                        <EVM />
                    </Route>
                    <Route path="/login">
                        <FormComponent />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;