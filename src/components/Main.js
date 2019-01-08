import React, { Component } from 'react';

import Meme from './Meme'

export default class App extends Component {
    render() {
        const neki = this.props;
        //const user = this.props.user;
        //const memes = this.props.memes;
        //             \/
        const { user, memes } = this.props;
        return (
            <div className="container main-content">
                <div className="grid">
                    {memes.map(meme => (
                        <Meme key={meme.id} meme={meme} />
                    ))}
                </div>
            </div>
        );
    }
}