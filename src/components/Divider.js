import React from 'react'

const Divider = ({color}) => {
  return (
    <hr
      className='my-4 w-75'
      style={{margin: '0px auto', borderColor: color || 'gray'}}
    />
  )
}

export default Divider