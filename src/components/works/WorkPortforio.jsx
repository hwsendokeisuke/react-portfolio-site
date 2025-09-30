import React from 'react';
import '../../App.css'; // CSSファイルをインポート
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート

export const WorkPortforio = () => {
  const navigate = useNavigate(); // useNavigateフックを使用

  const handleBack = () => {
    navigate('/'); // ルートに戻る
  };

    return (
        <div className="main">
          <div className="overlay-main">
            <div className="center">
              <h1 className="title-text">Works</h1>
              <p>ポートフォリオ</p>
              <img src="/images/profile-image.png" alt="Profile" className="profile-image" />
              <p>概要</p>
              <p></p>
              <p>使用ツール、言語など</p>
              <p>GITHUBリンク</p>
              <p>イメージ画像を貼っていく</p>
              <p>ALL Works 他の製作物を下に追加していく</p>
              <button onClick={handleBack}>戻る</button> {/* 戻るボタン */}
            </div>
          </div>
        </div>
    );
};

export default WorkPortforio;
