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
import Casestudies from "./components/pages/Casestudies"
import Casestudy from "./components/pages/Casestudy"
import Scroll from "./components/pages/Scroll"

import './assets/scss/App.scss';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/scroll" element={<Scroll />} />
                    <Route exact path="/post/:id" element={<Post />} />
                    <Route exact path="/casestudy" element={<Casestudies />} />
                    <Route exact path="/casestudy/:id" element={<Casestudy />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
