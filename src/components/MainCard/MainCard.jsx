import React from 'react'
import Button from '../Button'
import Animation from '../Animation/Animation'
import { Link } from 'react-router-dom'

const MainCard = ({header,text,img,bg}) => {
  return (
    <div>
        <div  className={`flex  rounded-[50px] text-white h-[450px] flex-wrap justify-center md:gap-[30px] 2xl:gap-[430px] items-center pl-[10px]`}>
          {/* <Animation></Animation> */}
        <div className='sm:w-[380px] text-center md:text-start'>
          <h1 className='lg:text-[30px] md:text-[20px] text-[28px] font-[600] w-[350px] md:w-[400px]'>{header}</h1><br />
          <h2 className='font-[300] md:w-[350px]  md:text-[12px] lg:text-[16px] font-roboto w-[350px] lg:w-[500px]'>{text}</h2><br />
          <Link to={'/Contact'}><Button text={'Contact us'}></Button></Link>
        </div>
        <div>
          <img className='xl:w-[500px]  lg:w-[350px] mt-[-20px] md:w-[250px]  md:block hidden  w-[300px] ' src={img}  />
        </div>
      </div>
    </div>
  )
}

export default MainCard