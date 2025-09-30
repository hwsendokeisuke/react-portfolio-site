// src/components/AboutMe/Profile.js
import React from 'react';

const Profile = ({ profile, onClick }) => (
  <div onClick={onClick} style={{ cursor: 'pointer'}}>
    <p onClick={onClick}>
      {profile.title}
    </p>
  </div>
);

export default Profile;
