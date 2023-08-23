import React, { useState } from 'react';
import { Button, IconButton, Menu, Box } from '@mui/material';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PeopleIcon from '@mui/icons-material/People';
import { useMediaQuery } from '@mui/material';
import Add from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import CreateBoardModal from './CreateBoardModal';
import CreateWorkspaceModal from './CreateWorkspaceModal'; // Import the new modal component

const MenuItem = styled('div')(({ theme }) => ({
  display: 'flex',
}));
function CreateMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isCreateBoardModalOpen, setCreateBoardModalOpen] = useState(false);
  const [isCreateWorkspaceModalOpen, setCreateWorkspaceModalOpen] = useState(false); // New state for workspace modal

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const openCreateBoardModal = () => {
    handleMenuClose(); // Close the main menu
    setCreateBoardModalOpen(true);
  };
  const closeCreateBoardModal = () => {
    setCreateBoardModalOpen(false);
  };
  const openCreateWorkspaceModal = () => {
    handleMenuClose();
    setCreateWorkspaceModalOpen(true); // Open the workspace modal
  };

  const closeCreateWorkspaceModal = () => {
    setCreateWorkspaceModalOpen(false); // Close the workspace modal
  };


  const createMenuItems = [
    { title: 'Create Board', description: <p style={{whitespace:"unset !important"}}>A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>, icon: <LeaderboardOutlinedIcon/>,  onClick: openCreateBoardModal, },
    { title: ' Create WorkSpace', description: <p>Create A Workspace is a group of 
        boards and people. Use it to organize your company, 
        side hustle, family, or friends.</p>, icon: <PeopleIcon/> ,   onClick: openCreateWorkspaceModal,
 },
    // Add more create options as needed
  ];

  return (
    <>
      <Button
        sx={{
          backgroundColor: 'blue',
          color: 'white',
          '&:hover': {
            backgroundColor: 'blue',
          },
        }}
        onClick={handleButtonClick}
      >
        {isSmallScreen ? <Add /> : 'Create'}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {createMenuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={item.onClick ? item.onClick : handleMenuClose}
            sx={{
              maxWidth: '350px',
              '&:hover': {
                backgroundColor: '#999',
              },
            }}
          >
            <Box>
              <Box display="flex" position="relative">
                <span>{item.icon}</span>
                <span className="span1">{item.title}</span>
              </Box>
              <Box sx={{ px: '10px' }}>{item.description}</Box>
            </Box>
          </MenuItem>
        ))}
      </Menu>
      <CreateBoardModal open={isCreateBoardModalOpen} onClose={closeCreateBoardModal} />
      <CreateWorkspaceModal open={isCreateWorkspaceModalOpen} onClose={closeCreateWorkspaceModal} /> {/* Render the workspace modal */}

    </>
  );
}
export default CreateMenu;
