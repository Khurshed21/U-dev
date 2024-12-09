import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ulogo from "../assets/img/ulogo.svg";
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
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
<div className=''>
      <nav className='bg-custom-gradient flex flex-wrap justify-center items-center w-full'>
      <div className=' pt-3 w-[1430px]  text-[white]  font-[500] text-[16px] md:text-[14px] lg:text-[18px] flex flex-wrap justify-between   items-center'>
      <Link to={'/'}><img className='pl-[50px]' src={ulogo} alt="Logo" /></Link>
      <img 
        className='w-[50px] mr-5 text-white sm:hidden cursor-pointer' 
        src={burger} 
        alt="burger" 
        onClick={toggleDrawer('right', true)} 
      />
      <ul className='pr-[50px] sm:w-[50%] md:w-[40%] sm:flex flex-wrap justify-around items-center w-[30%] hidden'>
        <li>
          <Link to={"/Services"}>Services</Link>
        </li>
        <li>Our product</li>
        <li>Portfolio</li>
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
    </div>
      </nav>

      <Outlet />

     <section className='flex flex-wrap justify-center items-center'>
     <footer className=' font-roboto bg-transparent lg:bg-transparent z-10 gap-0 md:gap-[150px] text-white justify-center sm:justify-around  sm:pl-[50px] flex flex-wrap  items-center'>
            <ul className='w-[250px] text-center  mb-5 sm:mb-0'>
                <li className='pb-[5px]'>Location: Dushanbe, Republic Tajikistan, Golden Cloud 123 </li>
                <li className='pb-[5px]'>Email : info@udev.solutions</li>
                <li className='pb-[5px]'>Phone :+992 768000000</li>
            </ul>

            <ul className='w-[200px] text-center mb-5 sm:mb-0  leading-8'>
                <li>Services</li>
                <li>Porfolio</li>
                <li>Awards</li>
            </ul>

            <ul className='w-[200px] text-center mb-5 sm:mb-0 leading-8'>
                <li>Our Products</li>
                <li>Contacts</li>
                <li>About us</li>
            </ul>

            <ul className='w-[200px] text-center leading-8'>
                <li>Terms Conditions</li>
                <li>Refund & Cancellation</li>
                <li>Privacy Policy</li>
            </ul>

        </footer>
     </section>
</div>
  );
}

export default Layout;
