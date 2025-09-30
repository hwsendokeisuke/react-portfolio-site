import React from 'react';
import '../App.css'; // CSSファイルをインポート

export const Top = () => {
    return (
        <div className="main" id="Top">
          <div className="overlay-main">
            <div className="center">
              <h1 className="title-text">Welcome to my portfolio !</h1>
              <div className="arch-container">
                <img src={process.env.PUBLIC_URL + "/images/profile-image.png"} alt="Profile" className="arch-image" />
              </div>
              <h2 className="name-text">遠藤　圭輔</h2>
              <a href="#about"><div className="next-icon"></div></a>
            </div>
          </div>
        </div>
    );
};

export default Top;
