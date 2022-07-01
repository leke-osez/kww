import React from 'react'

const SideModal = ({children}) => {
  return (
    <div className='fixed overflow-auto left-0 top-0 bottom-0 shadow-lg w-full md:w-[500px] bg-black/50 z-[30]'>
        <div className = 'w-[90%] h-full bg-white'>{children}</div>
    </div>
  )
}

export default SideModal