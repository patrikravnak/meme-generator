import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);

        const { memes } = this.props;
        const [meme] = memes.filter(meme => meme.id === parseInt(this.props.match.params.id, 10));
        console.log(meme);

        this.state = { meme };
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

export default withRouter(Details);
