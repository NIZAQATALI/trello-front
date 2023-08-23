// SubMenu.js
import React from 'react';
import { Menu } from '@mui/material';

const SubMenu = ({ anchorEl, open, onClose, children }) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose} onClick={onClose}>
      {children}
    </Menu>
  );
};

export default SubMenu;
