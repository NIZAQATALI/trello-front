
import React, { useState } from 'react';
import prev from './workspacePrev.png';
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
  MenuItem,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack, Close, Margin } from '@mui/icons-material';

const CreateWorkspaceModal = ({ open, onClose }) => {
  const [workspaceTitle, setWorkspaceTitle] = useState('');
  const [workspaceType, setWorkspaceType] = useState('');
  const [workspaceDescription, setWorkspaceDescription] = useState('');

  const handleWorkspaceTitleChange = (event) => {
    setWorkspaceTitle(event.target.value);
  };

  const handleWorkspaceTypeChange = (event) => {
    setWorkspaceType(event.target.value);
  };

  const handleWorkspaceDescriptionChange = (event) => {
    setWorkspaceDescription(event.target.value);
  };

  const handleCreateWorkspace = () => {
    // Logic to create a new workspace with the provided details
    // Implement your logic here

    onClose(); // Close the modal
  };

  const handleBackAndClose = () => {
    onClose(); // Close the modal
    // Add any additional logic you need for navigating back
  };

  return (
    <Dialog open={open} onClose={onClose}  sx={{ minWidth: 'fit-content',    '& .MuiDialog-paper': {
      minWidth: '1300px', 
      minheight:'auto',// Set the maximum width for the modal
      Margin:'0px',
    },}}>
 
      {/* <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <IconButton sx={{ mr: 0 }} onClick={handleBackAndClose}>
            <ArrowBack />
          </IconButton>
          Create Workspace
        </Box>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </DialogTitle> */}
      <DialogContent sx={{ display: 'flex', flexDirection: 'row', padding:'unset',
    
    '& .MuiDialogContent-root': {
      padding: '0 !important' // Setting padding to '0' will remove the default padding
    },
    
    }}>
        {/* Left Column */}
        <Box flex="1"
                  display="flex"
                  flexDirection="column"
                  bgcolor="#fff"
                  borderRadius="10px 0 0 10px"
                  padding="20px"
        

                  
        >
          <TextField
            label="Workspace Name"
            fullWidth
            value={workspaceTitle}
            onChange={handleWorkspaceTitleChange}
            sx={{ marginBottom: '20px' }}
          />
          <Select
            value={workspaceType}
            onChange={handleWorkspaceTypeChange}
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '20px' }}
          >
            <MenuItem value="personal">Personal Workspace</MenuItem>
            <MenuItem value="team">Team Workspace</MenuItem>
          </Select>
          <TextField
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={workspaceDescription}
            onChange={handleWorkspaceDescriptionChange}
          />

<Button onClick={handleCreateWorkspace} variant="outlined" fullWidth>
            Create
          </Button>
        </Box>
        {/* Right Column */}
        <Box flex="1" display="flex" alignItems="center" justifyContent="center" backgroundColor='#1122ff'>
      
            <img
              src={prev}
              alt="Workspace Preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
     
        </Box>
      </DialogContent>
     
    </Dialog>
  );
};

export default CreateWorkspaceModal;




// import React, { useState } from 'react';
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
//   TextField,
//   Box,
//   Select,
//   MenuItem,
// } from '@mui/material';
// import { ArrowBack, Close } from '@mui/icons-material';

// const CreateWorkspaceModal = ({ open, onClose }) => {
//   const [workspaceTitle, setWorkspaceTitle] = useState('');

//   const handleWorkspaceTitleChange = (event) => {
//     setWorkspaceTitle(event.target.value);
//   };

//   const handleCreateWorkspace = () => {
//     // Logic to create a new workspace with the provided title
//     // Implement your logic here

//     onClose(); // Close the modal
//   };

//   const handleBackAndClose = () => {
//     onClose(); // Close the modal
//     // Add any additional logic you need for navigating back
//   };

//   return (
//     <Dialog open={open} onClose={onClose}>
//       <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <Box display="flex" alignItems="center">
//           <ArrowBack onClick={handleBackAndClose} style={{ cursor: 'pointer' }} />
//           Create New Workspace
//         </Box>
//         <Close onClick={onClose} style={{ cursor: 'pointer' }} />
//       </DialogTitle>
//       <DialogContent>
//         {/* Workspace Title */}
//         <strong style={{ alignSelf: 'flex-start' }}>Workspace Title</strong>
//         <TextField
//           label="Workspace Title"
//           width={'250px'}
//           fullWidth
//           value={workspaceTitle}
//           onChange={handleWorkspaceTitleChange}
//         />
//       </DialogContent>
//       <DialogActions style={{ justifyContent: 'center', fontSize: '14px !important', fontWeight: '600px' }}>
//         <Button onClick={handleCreateWorkspace} variant="outlined" fullWidth>
//           Create Workspace
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CreateWorkspaceModal;
