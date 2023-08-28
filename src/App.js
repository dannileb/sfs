import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";

class App extends React.Component {
    state = {
        closed: true
    };

    render() {
        return (
            <div className='App'>
                <main className='Main'>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route index element={<Home/>} />
                            <Route path="/photos" element={<Home/>} />
                        </Route>
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;
