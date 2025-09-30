import React from 'react';
import '../../App.css'; // CSSファイルをインポート

export const Skills = () => {
    return (
        <div className="main" id="skills">
          <div className="overlay-main">
            <div className="center">
              <h1 className="title-text">About this site</h1>
              <div className="text" >
                <p>ここはエンジニア遠藤のポートフォリオサイトです。</p>
                <p>これまでに手がけた制作物、身につけたスキルをまとめています。</p>
                <p>あなたに、私のことをもっと深く知ってほしいと思って作りました。</p>
                <p>どうぞよろしくお願いいたします。</p>
              </div>
              <a href="#contact"><div className="next-icon"></div></a>
            </div>
          </div>
        </div>
    );
};

export default Skills;
