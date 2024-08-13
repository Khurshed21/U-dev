import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='bg-[white] w-[200px] h-[40px] rounded-xl' >
            <h1 className='text-[black] text-[18px] font-[500]'>{text}</h1>
        </button>
    </div>
  )
}

export default Button