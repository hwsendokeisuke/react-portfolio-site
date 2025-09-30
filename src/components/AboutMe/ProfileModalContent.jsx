// src/components/AboutMe/ProfileModalContent.js
import React from 'react';
import ImageGallery from './ProfileModalImageGallery';

const ProfileModalContent = ({ profile }) => {
  // profile.imgSrcを直接使用するように変更
  const profileImages = profile.imgSrc.filter(Boolean); // 画像が存在する場合のみフィルタリング

  return (
    <div className="modal-container">
      <div className="modal-left">
        <h3>{profile.title}</h3>
        {profile.description}
      </div>
      <div className="modal-right">
        <ImageGallery images={profileImages} />
        </div>
    </div>

  );
};


export default ProfileModalContent;
