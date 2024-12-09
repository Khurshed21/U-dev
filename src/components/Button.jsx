import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button className='bg-[white] active:bg-gray-600 w-[200px] h-[40px] rounded-xl' >
            <h1 className='text-[black] text-[18px] font-[600]'>{text}</h1>
        </button>
    </div>
  )
}

export default Button