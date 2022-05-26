import React from 'react';
import './HeaderOption.css';


function HeaderOption({Icon, title}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className='headerOption__icon' />}
        {/* If I pass Icon props here only then render Icon components */}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption