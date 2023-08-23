import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
function IconWithMenu({ icon, menuItems }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleIconClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
 
      <IconButton
        color="inherit"
        onClick={handleIconClick}
        sx={{ color: '#A3ABB8' }}
      >
        {icon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuItems.map((item, index) => (
          
          <MenuItem key={index} onClick={handleMenuClose}   >
            {item}

        

          </MenuItem>
     
        ))}
      </Menu>
    </>
  );
}

export default IconWithMenu;
