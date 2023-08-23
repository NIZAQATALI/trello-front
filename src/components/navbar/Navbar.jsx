import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {Hidden} from '@mui/material';
import {  Person, ArrowDropDown , Notifications, Add } from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Avatar from "@mui/material/Avatar";
import { Button } from '@mui/material';
import MuiSelect from '../reusableComponent/MuiSelect';
import {  Grid } from '@mui/material';
import ButtonWithIconMenu from '../reusableComponent/ButtonWithIconMenu';
import IconWithMenu from '../reusableComponent/IconWithMenu';
import CreateMenu from '../reusableComponent/CreateMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const TopbarIcons = styled('div')(({ theme }) => ({
  display: 'flex',
}));
const TopbarIconItem = styled('div')(({ theme }) => ({
  marginRight: '15px',
    cursor: 'pointer',
    position: 'relative'
}));

 const optionsWorkspace = [
  'Trello Current WorkSpace',
  ' Your WorkSpace',

]

const optionsRecents = [
  ' recent 1',
  'Recent 2',

]

const optionsStarred = [
  'None',
  'Atria',

]



const notificationsMenuItems = [
  'Notification 1',
  'Notification 2',
];

const themeMenuItems = [
  'Light',
  'Dark',
];

const helpMenuItems = [
  ' Are you New on Trello ',
  ' Contact Our Team',
];

const accountMenuItems = [

  'Account',
  'Name',
  'Manage Account',
   'Trello',
   'Profile  and Visibility',
   'Activity',
   'Card',
   'Settings',
   'Help',
   'shortcuts',
   'logout',
];

export default function Navbar() {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" sx={{height:'59px', backgroundColor:'white', color:'#555' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 0, display: { xs: 'none', sm: 'block' }, marginRight: '20px'}}
          >
            Trello
          </Typography>
          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 4, display: {  xs: 'flex' } }}
          >
             {/* <ButtonWithIconMenu   label={'WorkSpaces'}   options = {optionsWorkspace}/>
             <ButtonWithIconMenu   label={'Recents'}   options = {optionsRecents}/>
             <ButtonWithIconMenu   label={'Starred'}   options = {optionsStarred}/> */}

              {/* Display as a single menu button on smaller screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <ButtonWithIconMenu
              label={'More'}
              options={[...optionsWorkspace, ...optionsRecents, ...optionsStarred]}
            />
            <CreateMenu/>
            {/* <Button variant="contained"><Add/></Button> */}
          </Box>
             
             <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ButtonWithIconMenu label={'WorkSpaces'} options={optionsWorkspace} />
            <ButtonWithIconMenu label={'Recents'} options={optionsRecents} />
            <ButtonWithIconMenu label={'Starred'} options={optionsStarred} />
            <CreateMenu/>
            {/* <Button variant="contained">Create</Button> */}
          </Box>
          </Box>
         
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <TopbarIcons  sx={{ display: { xs: "none", md: "flex" } }}>
          {/* <TopbarIconItem>
            <Notifications  sx={{color:'#A3ABB8'}}/>
          </TopbarIconItem>
          <TopbarIconItem>
            <SettingsBrightnessIcon sx={{color:'#A3ABB8'}} />
          </TopbarIconItem>
          <TopbarIconItem>
            <HelpOutlineIcon  sx={{color:'#A3ABB8'}}/>
          </TopbarIconItem> */}
        <IconWithMenu
          icon={<Notifications  />}
          menuItems={notificationsMenuItems}
        />
        <IconWithMenu
          icon={<SettingsBrightnessIcon />}
          menuItems={themeMenuItems}
        />
        <IconWithMenu
          icon={<HelpOutlineIcon  />}
          menuItems={helpMenuItems}
        />
        <IconWithMenu
          icon={<Avatar sx={{ bgcolor: '#00A3BF', width: 24, height: 24, color: '#fff', fontSize: '12px' }}>N</Avatar> }
          menuItems={accountMenuItems}
        />
        {/* <Avatar sx={{ bgcolor: '#00A3BF', width: 24, height: 24, color: '#A3ABB8', fontSize: '12px' }}>N</Avatar> */}
        </TopbarIcons>
        </Toolbar>
      </AppBar>
    
    </Box>
    </>
  )
}
