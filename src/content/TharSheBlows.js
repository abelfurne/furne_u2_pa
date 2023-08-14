import React, { Component } from 'react';
import '../styles/TharSheBlows.css';
import whale from '../images/graywhale.jpg';

class TharSheBlows extends Component {
    render() {
        return (
            <div className='tharsheblows'>
                <h1>Thar She Blows!</h1>
                <h2>The Majestic Gray Whale</h2>
                <p></p>
                <img alt='gray whale' src={whale} />
            </div>
        );
    }
}
export default TharSheBlows;