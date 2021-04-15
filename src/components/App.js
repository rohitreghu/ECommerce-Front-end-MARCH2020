/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Navbar from './Navbar'
import Home from './Home';

function App() { 


    return <div>
        <Navbar />

        <Router >
            <Route exact path='/' component={Home} />
        </Router>



    </div>

}

export default App;