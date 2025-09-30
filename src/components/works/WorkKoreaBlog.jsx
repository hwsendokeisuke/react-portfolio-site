import React from 'react';
import '../../App.css'; // CSSファイルをインポート
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート

export const WorkKoreaBlog = () => {
  const navigate = useNavigate(); // useNavigateフックを使用

  const handleBack = () => {
    navigate('/'); // ルートに戻る
  };

    return (
        <div className="main">
          <div className="overlay-main">
            <div className="center">
              <h1 className="title-text">Works</h1>
              <div className="text" >
                <p> 韓国ドラマブログ詳細</p>
              </div>
              <button onClick={handleBack}>戻る</button> {/* 戻るボタン */}
            </div>
          </div>
        </div>
    );
};

export default WorkKoreaBlog;
