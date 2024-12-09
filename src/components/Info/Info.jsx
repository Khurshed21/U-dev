import React from 'react'

const Info = ({fade,header,text}) => {
   
      
  return (
    <div>
        <div className='bg-transparent font-montserrat  flex flex-wrap justify-centerpb-[50px]'>
        <div data-aos={`${fade}`} className='md:w-[300px] w-[300px] bg-transparent flex flex-wrap  items-center rounded-2xl  h-[200px] sm:h-[300px] '>
          <div className='flex flex-wrap justify-start items-center'>
            <h1 className='text-[18px] font-[600] '>{header}</h1><br />
            <h2 className='md:w-[250px] font-roboto w-[300px] text-[12px] md:text-[14px] font-[500] '>{text}</h2> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info