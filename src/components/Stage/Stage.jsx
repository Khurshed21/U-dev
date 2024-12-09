import React from 'react'

const Stage = ({bg,bg2,num,text}) => {
  return (
    <div>
        <div className={`${bg} w-[360px] md:w-[430px] font-montserrat h-[75px] rounded-[30px] flex flex-wrap gap-5 items-center`}>
            <h1 className={`md:text-[25px] text-[20px] font-[700] text-center ml-5 ${bg2} md:w-[50px] w-[40px] rounded-[13px]`}>{num}</h1>
            <h1 className='md:text-[16px] text-[13px] font-[700]'>{text}</h1>
        </div>
    </div>
  )
}

export default Stage