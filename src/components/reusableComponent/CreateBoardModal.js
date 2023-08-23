
import React, { useState, useEffect } from 'react';
import prev from './prev.png';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Paper,
  Select,
  MenuItem,IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack, Close } from '@mui/icons-material';
const boards = [
  {
    _id: '1',
    title: 'Project A',
    isImage: true,
    backgroundImageLink: 'https://a.trellocdn.com/prgb/assets/d106776cb297f000b1f4.svg',
    createdAt: '2023-07-13T10:00:00.000Z',
  },
  {
    _id: '2',
    title: 'Vacation Planning',
    isImage: true,
    backgroundImageLink: 'https://a.trellocdn.com/prgb/assets/a7c521b94eb153008f2d.svg',
    createdAt: '2023-07-14T15:30:00.000Z',
  },
  {
    _id: '3',
    title: 'Grocery List',
    isImage: false,
    backgroundImageLink: '#FF5733',
    createdAt: '2023-07-15T09:45:00.000Z',
  },
  // Add more dummy boards as needed
];
const backgroundOptions = [
  { label: 'Option 1', image: 'https://a.trellocdn.com/prgb/assets/d106776cb297f000b1f4.svg' },
  { label: 'Option 2', image: 'https://a.trellocdn.com/prgb/assets/a7c521b94eb153008f2d.svg' },
  { label: 'Option 3', image: 'https://a.trellocdn.com/prgb/assets/aec98becb6d15a5fc95e.svg' },
  { label: 'Option 4', image: 'https://images.pexels.com/photos/17787434/pexels-photo-17787434/free-photo-of-cold-drink-glass-blur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { label: 'Option 5', image: 'https://images.pexels.com/photos/11909575/pexels-photo-11909575.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { label: 'Option 6', image: 'https://images.pexels.com/photos/17909292/pexels-photo-17909292/free-photo-of-proxima-paragem.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { label: 'Option 7', image: 'https://images.pexels.com/photos/17490775/pexels-photo-17490775/free-photo-of-fluffy-clouds-over-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  { label: 'Option 8', image: 'https://images.pexels.com/photos/7453472/pexels-photo-7453472.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' },
  
 // Add more options as needed
];

const CreateBoardModal = ({ open, onClose }) => {
  const [dummyBoardsData, setDummyBoardsData] = useState(boards); // Dummy boards data
  const [newBoardTitle, setNewBoardTitle] = useState(''); // Added state for new board title

  const [selectedBackground, setSelectedBackground] = useState('');

  const [boardType, setBoardType] = useState('');
  const handleBackgroundClick = (image) => {
    setSelectedBackground(image);
  };
  const handleBoardTypeChange = (event) => {
    setBoardType(event.target.value);
  };
  const handleBoardtitleChange = (event) => {
    setNewBoardTitle(event.target.value);
  };
  const handleCreateBoard = () => {
    // Logic to create a new board with the provided details
    const newBoard = {
      _id: Math.random().toString(),
      title: newBoardTitle,
      isImage: true,
      backgroundImageLink: selectedBackground,
      workspace:boardType
      // Other properties of the new board
    };
    setDummyBoardsData([...dummyBoardsData, newBoard]); // Add new board to the dummy data
    onClose(); // Close the modal
     console.log(selectedBackground, boardType, newBoardTitle)
    
  };

  const handleBackAndClose = () => {
    onClose(); // Close the modal
    // Add any additional logic you need for navigating back
  };
 // console.log(boardType)
 // console.log(newBoardTitle)

  return (
    <Dialog open={open} onClose={onClose}>
      {/* <DialogTitle align='center'>Create New Board</DialogTitle> */}
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton  sx={{ mr: 0 }}  onClick={handleBackAndClose}>
            <ArrowBack />
          </IconButton>
          Create New Board
        </Box>
        <IconButton onClick={onClose}  >
          <Close/>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {/* Image Preview and Background Options */}
        <Box display="flex" flexDirection="column" alignItems="center" width={'250px'}>
          <Paper
            elevation={3}
            sx={{
              width: '250px',
              height: '150px',
              background: `url(${selectedBackground}) no-repeat center center / cover`,
              marginBottom: '20px',
        display :'flex',
        alignItems:'center',
        justifyContent:'center',
            }}
          >    <img
          src={prev}
          alt="Additional Image"
          style={{
            width: '200px', // Adjust as needed
            height: '125px', // Adjust as needed
            zIndex: 1, // Place above the background image
          }}
        /></Paper>
       <strong style={{alignSelf:'flex-start'}}> Background</strong>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {backgroundOptions.map((option) => (
              <Paper
                key={option.label}
                elevation={0}
                onClick={() => handleBackgroundClick(option.image)}
                sx={{
                  width: '50px',
                  height: '50px',
                  background: `url(${option.image}) no-repeat center center / cover`,
                  margin: '5px',
                  cursor: 'pointer',
                }}
              >
                 {/* Add the image above the background */}
    
                
              </Paper>
            ))}
          </Box>
        </Box>

        {/* Board Title */}
        <strong style={{alignSelf:'flex-start'}} > Title</strong><br/>
        <TextField label="Board Title" width={'250px'} fullWidth
        
        onChange={handleBoardtitleChange}
        /><br/>
        <strong style={{alignSelf:'flex-start'}} > Visibility</strong><br/>
         <Select
            value={boardType}
            onChange={handleBoardTypeChange}
         
            variant="outlined"
            fullWidth
          >
            <MenuItem value="workspace1">workspace1</MenuItem>
            <MenuItem value="workspace2">Workspace2 </MenuItem>
          </Select>

      </DialogContent>
      <DialogActions style={{ justifyContent: 'center'  , fontSize:'14px !important',fontWeight:'600px' }}>
        <Button onClick={handleCreateBoard} variant="outlined" fullWidth>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateBoardModal;
