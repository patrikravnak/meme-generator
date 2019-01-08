import React, { Component } from 'react';

import Meme from './Meme'

export default class App extends Component {
    render() {
        return (
            <div className="container main-content">
                <div className="grid">
                    <Meme />
                    <Meme />
                    <Meme />
                    <Meme />
                    <Meme />
                    <Meme />
                    <Meme />
                    <Meme />
                    <Meme />
                </div>
            </div>
        );
    }
}