import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ulogo from "../assets/img/ulogo.png";
import burger from "../assets/img/burger.png";
import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Layout = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[<Link className='' to={'/'}>Home</Link>, <Link to={'/Services'}>Services</Link>].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div className='bg-custom-gradient h-screen w-full text-[white] font-[500] text-[16px] lg:text-[18px] flex flex-wrap justify-between  items-center'>
      <img className='pl-[50px]' src={ulogo} alt="Logo" />
      <img 
        className='w-[50px] text-white sm:hidden cursor-pointer' 
        src={burger} 
        alt="burger" 
        onClick={toggleDrawer('right', true)} 
      />
      <ul className='pr-[50px] sm:flex flex-wrap justify-around items-center w-[30%] hidden'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Services"}>Services</Link>
        </li>
        <li>About us</li>
        <li>Contact</li>
      </ul>
      <Drawer className="sm:hidden"
        anchor='right'
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
      <Outlet />
    </div>
  );
}

export default Layout;
