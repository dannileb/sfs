import React from 'react';
import './App.css';

import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Photos from "./pages/Photos/Photos";
import Story from "./pages/Story/Story";
import CssFeature from "./pages/CssFeature/CssFeature";

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
                            <Route path="photos" element={<Photos/>} />
                            <Route path="story" element={<Story/>} />
                            <Route path="css-feature" element={<CssFeature/>} />
                        </Route>
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;
