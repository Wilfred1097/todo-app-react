import React from 'react'

const Header = ({title}) => {
  return (
    <div className='header'>
        <h3>{title}</h3>
        <button className='btn' style={{backgroundColor:'red'}}>Add</button>
    </div>
  )
}

Header.defaultProps = {
    title: 'Todo List'
}

export default Header