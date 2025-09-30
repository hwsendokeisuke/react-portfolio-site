import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const ProfileModal = ({ open, onClose, content }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="profile-modal">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {content}
        </Typography>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
