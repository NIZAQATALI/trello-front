import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ArrowDropDown } from '@mui/icons-material';
import { Typography } from '@mui/material';

  import { styled, alpha } from '@mui/material/styles';
  import { makeStyles } from '@mui/styles';

  const useStyles = makeStyles({
    root: {
      backgroundColor: 'blue', // Use any CSS color value here
      color: 'white',
      '&:hover': {
        backgroundColor: 'grey',
      },
    },
  });
const  options = [
    'None',
    'Atria',
  ]

  const ITEM_HEIGHT = 48;
export default function ButtonWithIconMenu(prop) {
 
    console.log(prop);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        size='small'
        sx={{backgroundColor: 'white', // Use any CSS color value here
        color: '#555',
        '&:hover': {
          backgroundColor: '#999',
        }, marginRight:'10px', fontSize:'12px' }}
      > 
      <Typography component='h6' fontSize={'12px'}>
    {prop.label}
      </Typography>
        <ArrowDropDown/>
      </Button>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '30ch',
          },
        }}
      >
        {prop.options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

