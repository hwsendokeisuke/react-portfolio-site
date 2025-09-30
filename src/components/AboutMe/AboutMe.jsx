// src/components/AboutMe/AboutMe.js
import React, { useState } from 'react';
import '../../App.css';
import ProfileModal from './ProfileModal';
import useModal from '../../hooks/useModal';
import Profile from './Profile';
import ProfileModalContent from './ProfileModalContent';
import InfoIcon from '@mui/icons-material/Info';

export const AboutMe = () => {
  const { open, content, handleOpen, handleClose } = useModal();
  const [setSelectedProfile] = useState(null);

  const profileData = [
    {
      title: '出身地: 宮城県 仙台市',
      imgSrc: [
        '/images/profile-image.png',
        '/images/background.png',
        '/images/background.png',
      ],
      description: '仙台は美しい街で、歴史的な名所や自然が豊かです。',
    },
    {
      title: '趣味: 韓国ドラマ鑑賞',
      imgSrc: [ '/images/background.png'],
      description: '特にロマンティックコメディが好きです。',
    },
    {
      title: '特技: ダンス',
      imgSrc: [
        '/images/profile-image.png',
        '/images/profile-image.png',
        '/images/profile-image.png',
      ],
      description: '様々なジャンルのダンスを楽しんでいます。',
    },
  ];

  // プロファイルをクリックしたときにモーダルをセット
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
    handleOpen(<ProfileModalContent profile={profile} />);
  };

  return (
    <div className="main" id="portfolio">
      <div className="overlay-main">
        <div className="center">
          <h1 className="title-text">About Me</h1>
          <div className="profile">
            <img src="/images/profile-image.png" alt="Profile" className="profile-image" />
            <div className="profile-info">
              <p>名前:遠藤 圭輔 </p>
              <p>年齢:27歳 </p>
              {profileData.map((profile, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                  <Profile profile={profile} onClick={() => handleProfileClick(profile)} />
                  <InfoIcon
                    onClick={() => handleProfileClick(profile)} // アイコンがクリックされたときの処理
                    style={{ cursor: 'pointer', marginLeft: '10px' }} // アイコンのスタイル
                  />
                </div>
              ))}
              <p>性格:計画的、挑戦的、几帳面 </p>
              <p>将来の目標:フルスタックエンジニア </p> 
            </div>
          </div>
          <a href="#works"><div className="next-icon"></div></a>
        </div>
      </div>

      <ProfileModal
        open={open}
        onClose={handleClose}
        content={content}
      />
    </div>
  );
};

export default AboutMe;
