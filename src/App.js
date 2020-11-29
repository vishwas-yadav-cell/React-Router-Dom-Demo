import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import User from './components/User';
import ErrorPage from './components/ErrorPage';
import Service from './components/Service';
import Search from './components/Search';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={() => <Home name='Vishwas' />} /> {/*But component is not preffered if you are sending some data from props because component re-renders the components again and again and sends the data again and again :(*/}
                <Route exact path="/about" render={() => <About cName='ScalaX' />} /> {/*But render is preffered if you are sending some data from props because component re-renders the components again and again and sends the data again and again but render method does not change if the values are same it thinks if the values are same so why we re-render the whole thing :)*/}
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/search" component={Search} />
                <Route path="/user/:fname/:lname" component={User} />
                <Route exact path="/service">
                    <Service />
                </Route>
                <Route path="*" component={ErrorPage} />

                {/* <Redirect to="/" />  */} {/*this is use for redirect when the url couldn't found!*/}

            </Switch>
        </>
    );
}

export default App;