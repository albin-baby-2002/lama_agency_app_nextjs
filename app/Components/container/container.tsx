import React, { ReactNode } from 'react'

interface TContainerProps{
    children:ReactNode
}

const Container:React.FC<TContainerProps> = ({children}) => {
  return (
    <div className=' max-w-[1536px] mx-auto grid grid-rows-[50px_1fr_10px] h-screen md:px-10 px-5 py-5'>
      {children}
    </div>
  )
}

export default Container
