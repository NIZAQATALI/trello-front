import "./sidebar.css";
import React, { useState } from "react";
import {
  RssFeed,
  Chat,
  Close,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,

} from "@mui/icons-material";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const options = [
  'Workspace setting',
  ' Upgrade Workspace  ',
  
];
const ITEM_HEIGHT = 48;
export default function Sidebar() {


  const dummyData = [
    { id: 1, title: "First board", imageUrl: "https://a.trellocdn.com/prgb/assets/d106776cb297f000b1f4.svg" },
     { id: 2, title: "Second board", imageUrl: "https://a.trellocdn.com/prgb/assets/a7c521b94eb153008f2d.svg" },
     { id: 3, title: "Third board", imageUrl: "https://a.trellocdn.com/prgb/assets/aec98becb6d15a5fc95e.svg"},
     { id: 4, title: "First board", imageUrl: "https://a.trellocdn.com/prgb/assets/d106776cb297f000b1f4.svg" },
     { id: 5, title: "fort board", imageUrl: "https://a.trellocdn.com/prgb/assets/a7c521b94eb153008f2d.svg" },
     { id: 6, title: "Third board", imageUrl: "https://a.trellocdn.com/prgb/assets/aec98becb6d15a5fc95e.svg"},
    
  ];
  

    const [collapsed, setCollapsed] = useState(false);

    const handleToggleCollapse = () => {
      setCollapsed(!collapsed);
    };
const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
<div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {!collapsed && (
   
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem" >
            
            <RssFeed className="sidebarIcon" />
            <div>
            <span className="sidebarListItemTextHeading">Trello Workspace</span>
            <div>Free</div>
            </div>
          </li>
          <hr className="sidebarHr" />
          <Link to="/board" className="sidebarListItemLink">
          <li className="sidebarListItem">
     
            <LeaderboardOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Boards</span>
           
          </li>
          </Link>
          <Link to="/member" className="sidebarListItemLink">
          <li className="sidebarListItem" >
            <PersonOutlineOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Members</span>
            <AddIcon className="sidebarIconRightAdd"       
        />
      
          </li></Link>
          <Link to="#" className="sidebarListItemLink">
          <li className="sidebarListItem">
            <SettingsApplicationsOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Workspace setting</span>
            <KeyboardArrowDownIcon  className="sidebarIconRightArrow"        
            aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
       
        onClick={handleClick}
            />
          </li>
          </Link>
          <div className="listHeading"> Workspace View </div>
          <Link to="/tabel" className="sidebarListItemLink">
          <li className="sidebarListItem">
            <TableChartOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Table</span>
          </li>
          </Link>
          <Link to="/calendar" className="sidebarListItemLink">
          <li className="sidebarListItem">
            <CalendarMonthOutlinedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Calender</span>
          </li>
          </Link>
        </ul>
        <div className="listHeading boardsWrapper"> Your boards </div>
          <ul className="sidebarBoardList">
         {dummyData.map((u) => (
             <li className="sidebarBoard" key={u.id}>
             <img className="sidebarBoardImg" src={u.imageUrl } alt="" />
             <span className="sidebarBoardName"> {u.title}</span>
           </li>
          ))} 
        </ul>
       
      </div>
      
        )}

<hr className="sidebarHrBottom" />
{collapsed? '':
<button className="sidebarSubscriptionButton">
      Try premium free
    </button>}
       
      <div className=  {collapsed ? "sidebarToggleRight": "sidebarToggle"} onClick={handleToggleCollapse}>
        {collapsed?<KeyboardArrowRightOutlinedIcon/>:<KeyboardArrowLeftOutlinedIcon/>}
      </div>    
       
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
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose} className="menuItem">
            {option}
          </MenuItem>
        ))}
      </Menu>


    </div>
  );
}






// // Sidebar.js
// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Home, Inbox, Mail } from '@mui/icons-material';
// import { makeStyles } from '@mui/styles';
// import { Link } from 'react-router-dom';
// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     marginTop:30,
//     backgroundColor: 'red'
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   link:{
//     textDecoration: 'none',
//     color: 'black'
    
//   },
//   // toolbar: theme.mixins.toolbar,
// }));

// const Sidebar = (props=props) => {
//   const classes = useStyles();

//   return (
//     <div style={{width: '15%',  backgroundColor:'lightblue'}} >
 
//       <div className={classes.toolbar} />
//       <List>
//       <Link to='/' className={classes.link}>
//         <ListItem button >
         
//           <ListItemIcon>
//             <Home />
//           </ListItemIcon>
//           <ListItemText primary="Boards" />
       
//         </ListItem>
//         </Link>
//         <Link to='/about'  className={classes.link}>
//         <ListItem button>
       
//           <ListItemIcon>
//             <Inbox />
//           </ListItemIcon>
//           <ListItemText primary="Members" />
        
//         </ListItem>
//         </Link>
//         <Link to='/contact'  className={classes.link}>
//         <ListItem button>
          
//           <ListItemIcon>
//             <Mail />
//           </ListItemIcon>
      
//           <ListItemText primary="Work Space setting" />
        
//         </ListItem>
//         </Link>
//       </List>
    
//     </div>
//   );
// };

// export default Sidebar;
