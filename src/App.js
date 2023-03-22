import React from 'react';
// import {gsap, Power3} from 'gsap';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';

import Home from "./components/pages/Home"
import Post from "./components/pages/Post"

import './assets/scss/App.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/post/:id" element={<Post />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
