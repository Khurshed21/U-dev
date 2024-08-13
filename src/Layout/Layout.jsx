import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ulogo from "../assets/img/ulogo.png";

const Layout = () => {
  return (
    <div className='bg-custom-gradient h-screen w-full text-[white] font-[500] text-[20px] flex flex-wrap justify-between items-center'>
        <img className=' pl-[50px]' src={ulogo} alt="" />
        <ul className='pr-[50px]  flex flex-wrap justify-around items-center w-[30%]'>
            <li>
                <Link to={"/"} >Home</Link>
            </li>
            <li>
                <Link to={"/Services"}>Services</Link>
            </li>
            <li>About us</li>
            <li>Contact</li>
        </ul>

        <Outlet></Outlet>
    </div>
  )
}

export default Layout