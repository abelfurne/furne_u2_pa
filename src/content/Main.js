import React, { Component } from 'react';
import {
    Route, Routes,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import TharSheBlows from './TharSheBlows';
import WhaleBiologist from './WhaleBiologist';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Abel Furne</h1>
                    <h1>CIS453</h1> 
                    <h1>2.5 Performance Assessment: Creating and Adding Custom Components to React</h1>
                    <ul className='header'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/tharsheblows'>Thar She Blows!</NavLink></li>
                        <li><NavLink to='/whalebiologist'>Whale Biologist</NavLink></li>
                    </ul>
                    <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/tharsheblows' element={<TharSheBlows />}/>
                        <Route path='/whalebiologist' element={<WhaleBiologist />}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;