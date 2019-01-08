import React, { Component } from 'react';

export default class Meme extends Component {
  render() {
    return (
      <div className="meme-wrapper">
        <div className="meme-image-relative">
          <img src="img/aliens-guy.jpg" alt="meme" />
        </div>

        <div className="meme-description-wrapper">
          <div className="meme-description-top">
            <span className="meme-description-top-points">10 points</span>

            <img
              className="meme-description-top-share"
              src={`${window.location.origin}/img/icon-share.svg`}
              alt="share"
            />
          </div>

          <div className="meme-description-bottom">
            <div className="meme-description-bottom-user">
              <img src="https://via.placeholder.com/30" alt="author" />
              <span>Test</span>
            </div>
            <span className="meme-description-bottom-time">6. January</span>
          </div>
        </div>
      </div>
    );
  }
}