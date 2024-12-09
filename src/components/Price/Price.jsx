import React from 'react'

const Price = ({header,deadline}) => {
  return (
    <div>

<div className=' flex flex-wrap font-montserrat'>
        <ul className='text-[18px] font-[700]'>
            <li className='text-[#FFBF00] text-[20px] font-[700]'>{header}</li>
            <li>Приложение на Android:</li>
            <li>Приложение на iPhone:</li>
            <li>Приложение Android & iPhone:</li>
            
        </ul>

        <ul className='text-[18px] font-[700] ml-10'>
            <li className='text-[#9E59FF] text-[20px] font-[700]'>{deadline}</li>
            <div className='flex flex-wrap gap-10'>
            <li>от 3000$</li>
            <li>от 10000$</li>
            </div>
            <div className='flex flex-wrap gap-10'>
            <li>от 3000$</li>
            <li>от 10000$</li>
            </div>
            <div className='flex flex-wrap gap-10'>
            <li>от 5000$</li>
            <li>от 18000$</li>
            </div>
           
        </ul>
        </div>

    </div>
  )
}

export default Price