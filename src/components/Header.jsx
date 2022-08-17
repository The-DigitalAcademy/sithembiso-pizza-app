import React from 'react'

const Header = ({name}) => {
  return (
    <div className='pb-2'>
        <div className='my-container'>
            <h1>{name}</h1>
        </div>

    </div>
  )
}

export default Header;