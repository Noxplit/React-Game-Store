import React from 'react'

const Flex = ({children, ...other}) => {
  return (
    <div className='flex'>{children}</div>
  )
}

export default Flex